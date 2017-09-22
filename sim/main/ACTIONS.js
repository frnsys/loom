const TIME_RANGE = [100, 200]
const TIME_SCALE = TIME_RANGE[0] + (TIME_RANGE[1] - TIME_RANGE[0])/2;

export default {
  'bathroom': {
    timeout: TIME_RANGE,
    successor: function(action, state) {
      state.bladder = Math.max(state.bladder-5*TIME_SCALE, 0);
    },
    emoji: '🚽'
  },
  'eat': {
    timeout: TIME_RANGE,
    successor: function(action, state) {
      state.hunger = Math.max(state.hunger-20*TIME_SCALE, 0);
    },
    emoji: '🍔'
  },
  'gawk': {
    timeout: TIME_RANGE,
    successor: function(action, state) {
      state.boredom = state.boredom * 0.6;
    },
    emoji: '📱'
  },
  'drink_alcohol': {
    timeout: TIME_RANGE,
    successor: function(action, state, agent) {
      state.thirst = Math.max(state.thirst-5*TIME_SCALE, 0);
      state.bladder += 5*TIME_SCALE;
      state.bac += (2.5*TIME_SCALE)/state.tolerance;
      state.sociability = agent.baseline.sociability + Math.pow(state.bac, 2);
    },
    emoji: '🍺'
  },
  'drink_water': {
    timeout: TIME_RANGE,
    successor: function(action, state) {
      state.thirst = Math.max(state.thirst-5*TIME_SCALE, 0);
      state.bladder += 4*TIME_SCALE;
    },
    emoji: '🚰'
  },
  'talk': {
    timeout: [50, 100],
    successor: function(action, state) {
        state.boredom = Math.max(state.boredom-8*TIME_SCALE, 0);
        state.awkwardness = Math.max(state.awkwardness-8*TIME_SCALE, 0);
        state.talking.push({
          id: action.to,
          topic: action.topic
        });
    },
    emoji: '📣'
  }
};
