import _ from 'underscore';
import moment from 'moment';
import Util from '~/app/Util';
import Agent from '~/app/Agent';
import Dialogue from './Dialogue/Dialogue';
import SocialModel from './Social';
import ACTIONS from './ACTIONS';
import log from 'loglevel';

const COMMITMENT = 50;
const SOCIAL_ACCLIMATION_RATE = 0.1;

const randomColor = (() => {
  "use strict";

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return () => {
    var h = randomInt(0, 360);
    var s = randomInt(42, 98);
    var l = randomInt(60, 90);
    return `hsl(${h},${s}%,${l}%)`;
  };
})();


class PartyGoer extends Agent {
  constructor(name, state, world, temperature=0.01) {
    super(state, temperature);
    this.world = world;
    this.id = name;

    this.socialModel = new SocialModel();
    this.topicPreference = state.topicPreference;
    this.talkingTo = null;
    this.color = randomColor();

    this.baseline = {
      sociability: state.sociability
    };

    this.state.awkwardness = 0;
    this.state.commitment = 0;
    this.state.timeout = 0;

    this.actionHistory = [];
	}

  get actionTypes() {
    return Object.keys(ACTIONS);
  }

  actions(state) {
    // remove 'talk' because we create them later for specific people
    // otherwise we'd get a 'talk' action where the agent isn't talking to anyone
    var actions = _.without(Object.keys(ACTIONS), 'talk').map(name => {
      return {
        name: name,
        emoji: _.sample(ACTIONS[name].emoji)
      }
    });

    // talking
    if (this.talkingTo === null) {
      this.world.socialNetwork.nodes.map(other => {
        if (other !== this.id && this.world.agents[other].talkingTo === null) {
          var talkActions = SocialModel.conversationTopics.map(t => ({
            name: 'talk',
            to: other,
            topic: t,
          }));
          actions = actions.concat(_.shuffle(talkActions));
        }
      });

      var p_meet_random = Math.sqrt(this.state.sociability)/100;
      if (Math.random() < p_meet_random) {
        var other = _.sample(this.world.agents);
        if (other.id !== this.id && other.talkingTo === null) {
          var talkActions = SocialModel.conversationTopics.map(t => ({
            name: 'talk',
            to: other.id,
            topic: t,
          }));
          actions = actions.concat(_.shuffle(talkActions));
        }
      }
    } else {
      var talkActions = SocialModel.conversationTopics.map(t => ({
        name: 'talk',
        to: this.talkingTo,
        topic: t,
      }));
      actions = actions.concat(_.shuffle(talkActions));
    }

    // special action of "continue"
    if (this._prevAction) {
      actions.push({ name: 'continue' });
      // remove the action from here
      actions = _.filter(actions, a => a.name !== this._prevAction.name);
    }

    if (this.executingQueuedAction) {
      return [{name: 'continue'}];
    }

    return actions;
  }

  successor(action, state) {
    state.talking = [];
    if (action.name == 'continue') {
      // the 'continue' action is a special action
      // prevent an agent from behaving too sporadically.
      // there is an 'overhead' to switching between actions,
      // represented by `-state.commitment`. This negative weighting
      // discourages an agent from switching actions. As they repeat
      // the `continue` action, their 'commitment' to that action depletes,
      // so eventually they are more open to switching tasks.
      state = this.successor(this._prevAction, state);
      state.commitment = 0 // so the commitment doesn't down-weight

    } else if (action.name in ACTIONS) {
      ACTIONS[action.name]['successor'](action, state, this);
    }
    return state;
  }

  entropy(state) {
    state.commitment = Math.max(state.commitment-1, 0);
    state.hunger += 1 + state.metabolism;
    state.thirst += 1;
    state.boredom += 1 + state.impatience;
    state.awkwardness += 50/(state.sociability + 1);
    state.bac = Math.max(state.bac - 0.2, 0);
    state.sociability = this.baseline.sociability + Math.pow(state.bac, 2);
    state.timeout = Math.max(state.timeout-1, 0);
    return state;
  }

  utility(state, prevState, expected=true, log_factors=false) {
    prevState = prevState || this.state;
    var affinities = {};
    for (var other in this.world.socialNetwork.edges[this.id]) {
      var data = this.world.socialNetwork.edges[this.id][other];
      affinities[other] = data.affinity;
    }

    var talking = state.talking.reduce((acc, a) => {
      if (expected) {
        // normalize
        var val = this.socialModel.get(a.id, a.topic)/(this.socialModel.total(a.id) + 1);
      } else {
        // distance to their preferred topic
        var other = this.world.agents[a.id];
        var val = this.socialModel.topicSatisfaction(other, a.topic);
      }
      return acc + (affinities[a.id] ? affinities[a.id] : state.sociability) * (val + 1) * 10;
    }, 0) + (1000 * state.talking.length);

    var factors = {
      bac: (-Math.pow(state.bac/3 - 3, 3) + 9),
      bladder: -Math.pow(state.bladder/50, 3),
      hunger: -Math.pow(state.hunger/100, 3),
      thirst: -Math.pow(state.thirst/50, 3),
      boredom: (-Math.pow(state.boredom, 2)/100),
      awkwardness: (-Math.pow(state.awkwardness, 2)/50),
      sociability: ((state.sociability + 1) * 20),
      talking: talking,
      commitment: -state.commitment
    };

    // to determine how important each factor is
    if (log_factors) {
      var mass = _.reduce(factors, (acc, val) => acc + Math.abs(val), 0);
      _.each(factors, (val, name) => {
        log.info(`${name}\t->\t${(Math.abs(val)/mass * 100).toFixed(2)}%\t(${val < 0 ? '' : '+'}${val.toFixed(1)})`);
      });
      log.info('---');
    }

    var noise = (Math.random() - 0.5) * state.impulsiveness * 10;
    return _.reduce(factors, (acc, val) => acc + val, 0) + noise;
  }

  render(action) {
    if (action.name == 'talk') {
      action.repr = Dialogue.createDialogue(this, action);
      this.world.render(this.id, action.repr, 'talk', action.to);
    } else {
      action.repr = Dialogue.createThought(this, action);
      this.world.render(this.id, action.repr, 'thought');
    }
  }

  execute(action, state) {
    this.actionHistory.push(action.name);
    while (this.actionHistory.length > 5) {
      this.actionHistory.shift();
    }
    if (this.actionHistory.length === 5) {
      var a = this.actionHistory[0] === this.actionHistory[2] && this.actionHistory[2] === this.actionHistory[4] && this.actionHistory[0] !== 'continue';
      if (a) {
        this.state.timeout = 100;
      }
    }

    if (action.name === 'continue') {
      // if same action, use it
      action = this._prevAction;
    } else {
      // new action, reset commitment
      state.commitment = COMMITMENT;
      // render action to screen
      this.render(action);
    }

    // if within range, apply the action
    state = this.successor(action, state);
    var [lo, up] = ACTIONS[action.name].timeout;
    state.timeout = _.random(lo, up);
    this.executingQueuedAction = false;

    // compare expectation and actual utility
    if (action.name === 'talk') {
      var expected = this.utility(this.state),
          actual = this.utility(this.state, null, false),
          diff = actual - expected;

      var other = this.world.agents[action.to];
      other.talkingTo = this.id;
      this.talkingTo = action.to;

      // TODO need them to sometimes randomly choose new topics
      // or they will just get stuck on one
      if (diff > 0) {
        this.socialModel.update(action.to, action.topic, 0.1);
      } else if (diff < 0) {
        this.socialModel.update(action.to, action.topic, -0.1);
      }

      // add edges if new encounter
      if (!this.world.socialNetwork.hasEdge(this.id, action.to)) {
        this.world.socialNetwork.addEdge(this.id, action.to, {affinity: 0});
      }
      if (!this.world.socialNetwork.hasEdge(action.to, this.id)) {
        this.world.socialNetwork.addEdge(action.to, this.id, {affinity: 0});
      }

      // update affinity
      // compute from how much this person enjoyed the topic
      // and how much the other person enjoyed it
      var thisEnjoyment = this.socialModel.topicSatisfaction(this, action.topic);
      var other = this.world.agents[action.to];
      var otherEnjoyment = this.socialModel.topicSatisfaction(other, action.topic);
      var prev = this.world.socialNetwork.getAffinity(this.id, action.to);
      this.world.socialNetwork.setEdge(this.id, action.to, {
        affinity: Util.ewma(prev, thisEnjoyment*SOCIAL_ACCLIMATION_RATE)
      });
      var prev = this.world.socialNetwork.getAffinity(action.to, this.id);
      this.world.socialNetwork.setEdge(action.to, this.id, {
        affinity: Util.ewma(prev, otherEnjoyment*SOCIAL_ACCLIMATION_RATE)
      });

    // end convo
    } else if (this.talkingTo != null) {
      var other = this.world.agents[this.talkingTo];
      other.talkingTo = null;
      this.talkingTo = null;
    }

    this._prevAction = action;
    return state;
  }

  // no new decisions while waiting for current action to complete
  get available() {
    return this.state.timeout === 0;
  }

  decide() {
    if (this.queuedAction) {
      var actionsStates = this.successors(this.state);
      actionsStates = _.filter(actionsStates, as => {
        var action = as[0];
        return action.name == this.queuedAction;
      });
      this.queuedAction = null;
      if (!_.isEmpty(actionsStates)) {
        this.executingQueuedAction = true;
        return _.sample(actionsStates);
      }
    }
    return super.decide();
  }
}

export default PartyGoer;
