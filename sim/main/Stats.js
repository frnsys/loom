import $ from 'jquery';
import _ from 'underscore';
import ACTIONS from './ACTIONS';

// define leaderboard rankings here
const rankings = [{
  desc: r => `${ACTIONS['drink_alcohol'].emoji} Tipsiest: ${r.max.id}`,
  fn: h => {
    return _.where(h, {name: 'drink_alcohol'}).length;
  }
}, {
  desc: r => `${ACTIONS['eat'].emoji} Biggest appetite: ${r.max.id}`,
  fn: h => {
    return _.where(h, {name: 'eat'}).length;
  }
}, {
  desc: r => `${ACTIONS['drink_water'].emoji} Most hydrated: ${r.max.id}`,
  fn: h => {
    return _.where(h, {name: 'drink_water'}).length;
  }
}];
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
    var r = _.sample(rankings);
    var res = this.leader(r.fn);
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
