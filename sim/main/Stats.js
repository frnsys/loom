import $ from 'jquery';
import _ from 'underscore';
import ACTIONS from './ACTIONS';
import RANKINGS from './RANKINGS';

const leaderboard = $('#leaderboard');

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
    // choose a random ranking, compute it, and display
    var r = _.sample(RANKINGS);
    var res = this.leader(r.rank);
    leaderboard.html(`<h1>${r.desc(res)}</h1>`);
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
