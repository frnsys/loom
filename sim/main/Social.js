import Util from '~/app/Util';

var technical = [-1, 0, 1],
    gossip = [-1, 0, 1];
var conversationTopics = [].concat(...technical.map(x => {
  return gossip.map(y => [x, y]);
}));

// agent needs to estimate how others will
// respond to certain convo topics
class SocialModel {
  constructor() {
    this.model = {};
  }

  get(id, topic) {
    // new person, bootstrap from existing
    var [technical, gossip] = topic;
    if (!(id in this.model)) {
      this.model[id] = this.mean();
    }
    return this.model[id][technical][gossip];
  }

  update(id, topic, val) {
    var [technical, gossip] = topic;
    var curr = this.get(id, topic);
    this.model[id][technical][gossip] = Math.max(0, curr + val);
  }

  total(id) {
    return conversationTopics.reduce((acc, t) => {
      return acc + this.get(id, t);
    }, 0);
  }

  mean() {
    var n = Object.keys(this.model).length;
    var mean = {};
    [-1, 0, 1].map(x => {
      var sub = {};
      [-1, 0, 1].map(y => {
        sub[y] = 0;
      });
      mean[x] = sub;
    });
    if (n === 0) {
      return mean;
    }
    Object.keys(this.model).map(id => {
      conversationTopics.map(t => {
        var [x, y] = t;
        mean[x][y] += this.model[id][x][y];
      });
    });
    Object.keys(mean).map(x => {
      Object.keys(mean[x]).map(y => {
        mean[x][y] /= n;
      });
    });
    return mean;
  }

  topicSatisfaction(agent, topic) {
    var pref = {
      x: agent.state.topicPreference[0],
      y: agent.state.topicPreference[1]
    };
    var topic = {
      x: topic[0],
      y: topic[1]
    }
    // divide by 4 to normalize
    return 1 - Util.manhattanDistance(pref, topic)/4;
  }
}

SocialModel.conversationTopics = conversationTopics;

export default SocialModel;
