import $ from 'jquery';

class UI {
  constructor(world) {
    var self = this;
    $('body').on('mouseenter', '.agent-ref', function() {
      var id = $(this).data('id');
      self.agent = world.agents[id];
    });
    $('body').on('mouseleave', '.agent-ref', function() {
      self.agent = null;
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
