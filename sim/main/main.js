import log from 'loglevel';
log.setLevel('error');

import $ from 'jquery';
import _ from 'lodash';
import Util from './Util';
import Chart from './Chart';
import Sockets from './Sockets';
import PartyGoer from './PartyGoer';
import SocialNetwork from '~/app/SocialNetwork';
import first_names from './data/name_given_sex.json';
import last_names from './data/surname_given_race.json';
import '~/css/reset.sass';
import './style.sass';

var world = {
  agents: {},
  socialNetwork: new SocialNetwork(),
  render: function(name, text, type, other) {
    $('.sim').append(`<div class="bubble tri-right left-in ${type}"><div class="talktext">${text}</div><h5>${name}${other ? `, to ${other}` : ''}</h5></div>`);
    if ($(window).scrollTop() + $(window).height() < $(document).height()) {
      $('html, body').animate({ scrollTop: $(document).height() });
    }
  }
};


var n_agents = 4;
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

// boot the world
var sockets = new Sockets(world);
var elapsedFrames = 0;
function run() {
  requestAnimationFrame(run);
  if (elapsedFrames % 2 == 0) {
    _.each(world.agents, a => {
      a.update()
    });
    _.each(charts, c => c.update());
  }
  elapsedFrames ++;
}

sockets.broadcastAgentUpdate();
run();
