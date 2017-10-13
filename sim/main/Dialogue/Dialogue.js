import $ from 'jquery';
import _ from 'lodash';
import GRAMMAR from './GRAMMAR';
import tracery from 'tracery-grammar';
import DialogueScoreSpace from './Space';

var Dialogue = {
  grammar: tracery.createGrammar(GRAMMAR),
};

// scores can be floats, too, and you can have multiple topics with the same score
Dialogue.talkScores = new DialogueScoreSpace([
  // score: [technical, personal]
  { "score": [-1, -1], "grammar": "#talk_-1_-1#" },
  { "score": [-1,  0], "grammar": "#talk_-1__0#" },
  { "score": [-1,  1], "grammar": "#talk_-1__0#" },
  { "score": [ 0, -1], "grammar": "#talk__0_-1#" },
  { "score": [ 0,  0], "grammar": "#talk__0__0#" },
  { "score": [ 0,  1], "grammar": "#talk__0__1#" },
  { "score": [ 1, -1], "grammar": "#talk__1_-1#" },
  { "score": [ 1,  0], "grammar": "#talk__1__0#" },
  { "score": [ 1,  1], "grammar": "#talk__1__1#" }
]);


// [1, -1]                              [1, 0]                                      [1, 1]
// Highly technical & Not personal      Highly technical & Somwhat personal         Highly technical & Highly personal
// Blockchain                           Tech company news                           Company internal arguments

// [0, -1]                              [0,0]                                       [0, 1]
// Somewhat technical & Not personal    Somewhat technical & Somewhat personal      Somewhat technical & Highly personal
// Weather, getting technical           Weather, with feelings

// [-1, -1]                             [-1,0]                                      [-1, 1]
// Not technical & Not personal         Not technical & Somewhat personal           Not technical & Highly personal
// greetings                            Boy/girl friend drama                       Insults/arguments

Dialogue.createDialogue = function(agent, action) {
  if(action.topic) {
    var topicGrammar = "";
    if("convo_topics" in agent && (_.random(0, 1, true) < 0.5)) {
      topicGrammar = _.sample(agent.convo_topics);
    } else {
      topicGrammar = Dialogue.talkScores.findWithThreshold(action.topic, 0.5).grammar;
    }
    return Dialogue.grammar.flatten(topicGrammar);
  }
};

Dialogue.createThought = function(agent, action) {
  // bathroom / eat / drink_alcohol / drink_water / bathroom - constants from PartyGoer.ACTIONS
  if(action.name) {
    return `<h1 class="action-emoji">${action.emoji}</h1>` + " (" + Dialogue.grammar.flatten("#" + action.name + "#") + ")";
  }
};


export default Dialogue;
