import $ from 'jquery';
import _ from 'lodash';
import io from 'socket.io-client';
import PartyGoer from './PartyGoer';
import confetti from './Confetti';

var socket = io();

class Sockets {
  constructor(world) {
    this.world = world;

    var self = this;
    socket.on('message', function(data) {
      // if ui needs to update its list of agents
      if('dataRequest' in data && data['dataRequest'] == 'agentUpdate') {
        self.broadcastAgentUpdate();
      }
      if ('sender' in data) {
        // if ui sends a message
        if (data['sender'] == 'ui') {
          self.onUI(data);
        }

        // NEW MEMBER from personality quiz
        else if (data['sender'] == 'quiz') {
          self.onQuiz(data);
        }

        else if (data['sender'] == 'sim') {
          if (data['dataResponse'] == 'removeAgent') {
            var name = data['data'];
            if (name in world.agents) {
              delete world.agents[name];
            }
          }
        }
      }
    });
  }

  broadcastAgentUpdate() {
    socket.emit('broadcast', {
      'sender': 'sim',
      'dataResponse': 'agentUpdate',
      'data': _.map(this.world.agents, function(a) { return a.id; })
    });
  }

  removeAgent(id) {
    socket.emit('broadcast', {
      'sender': 'sim',
      'dataResponse': 'removeAgent',
      'data': id
    });
  }

  init() {
    socket.emit('broadcast', {
      'sender': 'sim',
      'request': 'init'
    });
  }

  onUI(data) {
    if (data.action === 'info_affinity') {
      // they know each other.
      for (var i = 0; i < data.users.length; i++) {
        for (var j = i + 1; j < data.users.length; j++) {
          if(data.users[i] in this.world.agents && data.users[j] in this.world.agents) { // check just in case we get malformed data
            this.world.socialNetwork.incrementEdge(data.users[i], data.users[j], {affinity: 10});
          }
        }
      }
    }
    else {
      _.each(data.users, (user) => {
        var agent = _.find(this.world.agents, (o) => { return o.id == user });
        agent.queuedAction = data.action; // queue up action
        agent.state.timeout = 0; // so they respond immediately
      });
    }
  }

  onQuiz(data) {
    var agent = new PartyGoer(data.quizResults.name, {
       bladder: _.random(100),
       hunger: _.random(100),
       thirst: _.random(100),
       bac: 0,
       coord: {x: 10, y: 10},
       talking: [],
       boredom: 0,
       sociability: data.quizResults.sociability || _.random(20, 30),
       impatience: data.quizResults.impatience || _.random(20, 30),
       metabolism: data.quizResults.metabolism || _.random(20, 30),
       tolerance: data.quizResults.tolerance || _.random(20, 30),
       impulsiveness: data.quizResults.impulsiveness || _.random(20, 30),
       topicPreference: [-1, -1]
     }, this.world)
    agent.convo_topics = data.quizResults.convo_topics;

    //  user spawned when personality quiz happens
    this.world.agents[agent.id] = agent

    // celebrate the arrival of our new guest!
    confetti.start();
    $('.new-announcement').show();
    $('.new-announcement').text(`${agent.id} has joined the party!`);
    clearTimeout(this.timer);
    this.timer = setTimeout(function() {
      confetti.stop();
      $('.new-announcement').hide();
    }, 4000);

    this.broadcastAgentUpdate();
  }
}

export default Sockets;
