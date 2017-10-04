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

var world = {
  agents: {},
  socialNetwork: new SocialNetwork(),
  render: function(name, text, type, other) {
    if (Math.random() < MAX_AGENTS_SHOW_ALL/Object.keys(world.agents).length) {
      var el = `<div class="bubble tri-right left-in ${type}"><div class="talktext">${text}</div><h5><span class="agent-ref" data-id="${name}">${name}</span>${other ? `, to <span class="agent-ref" data-id="${other}">${other}</span>` : ''}</h5></div>`;
      el = twemoji.parse(el);
      $('.sim').append(el);
      if ($(window).scrollTop() + $(window).height() < $(document).height()) {
        $('html, body').animate({ scrollTop: $(document).height() });
      }
    }
  }
};


var n_agents = 40;
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
  world.agents[agent.id] = agent;
}

var charts = Util.getParameterByName('charts') == 'true' ? _.map(world.agents, a => new Chart(a)) : [];
var ui = new UI(world);
var stats = new Stats();

// boot the world
var sockets = new Sockets(world);
var elapsedFrames = 0;
function run() {
  requestAnimationFrame(run);
  if (elapsedFrames % 2 == 0) {
    _.each(world.agents, a => {
      var action = a.update();
      if (action && action.name !== 'continue') {
        stats.add(a, action);
      }
    });
    _.each(charts, c => c.update());
    ui.update();

    if (elapsedFrames % 1000 == 0) {
      stats.update();
    }
  }
  elapsedFrames ++;
}

sockets.broadcastAgentUpdate();
run();
