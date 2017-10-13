import log from 'loglevel';
log.setLevel('error');

import $ from 'jquery';
import _ from 'lodash';
import twemoji from 'twemoji';
import UI from './UI';
import Util from './Util';
import Stats from './Stats';
import Chart from './Chart';
import Sockets from './Sockets';
import PartyGoer from './PartyGoer';
import SocialNetwork from '~/app/SocialNetwork';
import first_names from './data/name_given_sex.json';
import last_names from './data/surname_given_race.json';
import '~/css/reset.sass';
import './style.sass';

const MAX_AGENTS_SHOW_ALL = 4;
const MAX_HISTORY = 200;

var world = {
  agents: {},
  stats: new Stats(),
  socialNetwork: new SocialNetwork(),
  render: function(name, text, type, other) {
    var prob_weight = other ? 2 : 1; // weigh conversations more
    if (Math.random() < MAX_AGENTS_SHOW_ALL/Object.keys(world.agents).length * prob_weight) {
      var el = world.renderAction(name, text, type, other);
      $('.sim').append(el);

      if (world.ui.focused_agent && (world.ui.focused_agent == name || world.ui.focused_agent == other)) {
        $('#focused-agent-updates').prepend($(el).clone());
      }

      if ($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
        $('html, body').animate({ scrollTop: $(document).height() });
      }
    }
  },
  renderAction: function(name, text, type, other) {
      var el = `<div class="bubble tri-right left-in ${type}"><div class="talktext">${text}</div><h5><span class="agent-ref" style="background:${world.agents[name].color};" data-id="${name}">${name}</span>${other ? `, to <span class="agent-ref" style="background:${world.agents[other].color}" data-id="${other}">${other}</span>` : ''}</h5></div>`;
      return twemoji.parse(el);
  }
};


var n_agents = 0;

// GENERATE RANDOM AGENTS //
var convo_topics_for_random_agents =
  ["#fan_fic#",
  "#weather_convo#",
  "#twitter#",
  "#real_estate#",
  "#race#",
  "#radical#",
  "#politics#",
  "#javascript_library#",
  "#literary_theory#",
  "#meme_theory#",
  "#restaurants#",
  "#political_gossip#"];

for(var i = 0; i < n_agents; i++) {
  var gender = _.sample(Object.keys(first_names));
  var race = _.sample(Object.keys(last_names));
  var first = _.sample(Object.keys(first_names[gender]));
  var last = _.sample(Object.keys(last_names[race]));
  var agent = new PartyGoer(Util.toTitleCase(`${first} ${last}`), {
    bladder: _.random(100),
    hunger: _.random(100),
    thirst: _.random(100),
    bac: 0,
    coord: {x: _.random(10, 30), y: _.random(10,30)},
    talking: [],
    boredom: 0,
    sociability: _.random(50),
    impatience: _.random(10),
    metabolism: _.random(10),
    tolerance: _.random(10),
    impulsiveness: _.random(10),
    topicPreference: [_.random(-1, 1), _.random(-1,1)]
  }, world);
  agent.convo_topics = _.sample(convo_topics_for_random_agents);
  world.agents[agent.id] = agent;
}

var charts = Util.getParameterByName('charts') == 'true' ? _.map(world.agents, a => new Chart(a)) : [];
var ui = new UI(world);

// boot the world
var sockets = new Sockets(world);
var elapsedFrames = 0;
function run() {
  requestAnimationFrame(run);
  // ~30fps
  if (elapsedFrames % 2 == 0) {
    _.each(world.agents, a => {
      var action = a.update();
      if (action && action.name !== 'continue') {
        world.stats.add(a, action);
      }
    });
    _.each(charts, c => c.update());
    ui.update();

    if (elapsedFrames % 54000 == 0 && elapsedFrames > 0) {
      world.stats.update();
    }
    if (elapsedFrames % 600 == 0 && elapsedFrames > 0) {
      var id = _.sample(Object.keys(world.agents));
      ui.focusAgent(id);
    }
    if (elapsedFrames % 60 == 0) {
      // clean up history so we don't overload the DOM
      var history_len = $('.sim .bubble').length;
      if (history_len > MAX_HISTORY) {
        $('.sim .bubble').slice(0, history_len - MAX_HISTORY).remove();
      }
    }
  }
  elapsedFrames++;
}

sockets.broadcastAgentUpdate();
run();
