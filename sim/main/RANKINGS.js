import ACTIONS from './ACTIONS';

// define leaderboard rankings here
export default [{
  desc: r => `${ACTIONS['drink_alcohol'].emoji} Tipsiest: ${r.max.id}`,
  rank: h => {
    return _.where(h, {name: 'drink_alcohol'}).length;
  }
}, {
  desc: r => `${ACTIONS['eat'].emoji} Biggest appetite: ${r.max.id}`,
  rank: h => {
    return _.where(h, {name: 'eat'}).length;
  }
}, {
  desc: r => `${ACTIONS['drink_water'].emoji} Most hydrated: ${r.max.id}`,
  rank: h => {
    return _.where(h, {name: 'drink_water'}).length;
  }
}];

