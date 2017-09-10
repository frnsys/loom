import _ from 'underscore';

class Stats {
  constructor() {
    this.history = {};
  }

  add(agent, action) {
    if (!(agent.id in this.history)) {
      this.history[agent.id] = [];
    }
    this.history[agent.id].push(action);
  }

  update() {
    // example
    var res = this.leader(h => {
      return _.where(h, {name: 'drink_alcohol'}).length;
    });
    console.log(res);
  }

  leader(fn) {
    var scores = {};
    var ids = Object.keys(this.history);
    _.each(ids, id => {
      scores[id] = fn(this.history[id]);
    });
    var max = _.max(ids, id => scores[id]);
    var min = _.min(ids, id => scores[id]);
    return {
      max: {
        val: scores[max],
        id: max
      },
      min: {
        val: scores[min],
        id: min
      }
    }
  }
}

export default Stats;
