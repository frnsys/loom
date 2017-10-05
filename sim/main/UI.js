import $ from 'jquery';
import _ from 'lodash';

const HISTORY_PREVIEW = 10;

class UI {
  constructor(world) {
    world.ui = this;
    var self = this;
    $('body').on('mouseenter', '.agent-ref', function() {
      var id = $(this).data('id');
      self.agent = world.agents[id];
    });
    $('body').on('mouseleave', '.agent-ref', function() {
      self.agent = null;
    });

    // focus on single agent
    $('body').on('click', '.agent-ref', function() {
      var id = $(this).data('id');
      self.focused_agent = id;
      $('#focused-agent-updates').empty();

      // preload HISTORY_PREVIEW past actions
      _.each(world.stats.history[id].slice(-HISTORY_PREVIEW).reverse(),
        action => {
          var el;
          if (action.name == 'talk') {
            el = world.renderAction(id, action.repr, 'talk', action.to);
          } else {
            el = world.renderAction(id, action.repr, 'thought');
          }
          $('#focused-agent-updates').append(el);
      });
      $('#focused-agent').fadeIn();
    });

    $('body').on('click', '#focused-agent-close', function() {
      $('#focused-agent').hide();
    });
  }

  showAgent(agent) {
    var html = Object.keys(agent.state).map(k => {
      var v = agent.state[k];
      if (typeof v == 'number') {
        v = v.toFixed(2);
      } else if (_.isObject(v)) {
        v = JSON.stringify(v);
      }
      return `<tr><td>${k}</td><td>${v}</td></tr>`;
    });
    var actionName = agent.action.name === 'continue' ? agent._prevAction.name : agent.action.name;
    document.getElementById('agent').innerHTML = `<table>${html.join('')}<tr><td>Action</td><td>${actionName}</td></tr></table>`;
  }

  update() {
    if (this.agent) {
      this.showAgent(this.agent);
      $('#agent').show();
    } else {
      $('#agent').hide();
    }
  }
}


export default UI;
