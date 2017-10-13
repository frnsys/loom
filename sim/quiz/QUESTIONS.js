/*
 * WRITE YOUR QUESTIONS HERE
 *
 * personality axes:
 *
 * sociability
 *   - the higher, the more extroverted
 * impatience
 *   - the higher, the more quickly you get bored
 * metabolism
 *   - the higher, the more hungry you get
 * tolerance
 *   - the higher, the slower you get drunk
 * impulsiveness
 *   - the higher, the noisier decisions are
 */

export default [{
  "type": "text",
  "qid": "name",
  "question": "What's your name?"
}, {
  "type": "text",
  "qid": "twitter_handle",
  "question": "What's your Twitter handle? (optional)"
}, {
  "type": "likert",
  "qid": "dogs_over_cats",
  "question": "You prefer dogs over cats.",
  "func": function(ans) { return {'sociability': 50 * ans, 'impatience': 10 * (1 - ans) } }
}, {
  "type": "likert",
  "qid": "meeting_cancel_elated",
  "question": "You feel secretly elated when a meeting is canceled.",
  "func": function(ans) { return {'impulsiveness': 30 * ans, 'impatience': 20 * ans} }
}, {
  "type": "likert",
  "qid": "introvert_recharge",
  "question": "Usually, being alone makes you feel recharged rather than lonely.",
  "func": function(ans) { return {'sociability': 30 * (1 - ans) } }
}, {
  "type": "likert",
  "qid": "friend_priorities",
  "question": "At a party, I would ignore my friends in order to talk to someone who would be interesting/advatangeous to my work and projects.",
  "func": function(ans) { return {'impulsiveness': 20 * ans, 'sociability': 20 * ans, 'impatience': 50 * ans} }
}, {
  "type": "likert",
  "qid": "handshakes",
  "question": "The firmness of a handshake is a sign of character.",
  "func": function(ans) { return {'impatience': 40 * ans, 'awkwardness': 10 * (1-ans) } }
}, {
  "type": "likert",
  "qid": "how_you_doing",
  "question": "When someone asks me how I'm doing, I talk about my work instead of my feelings.",
  "func": function(ans) { return {'sociability': 20 * (1-ans), 'awkwardness': 10 * ans } }
}, {
  "type": "likert",
  "qid": "self_discomfort",
  "question": "You enjoy talking about issues that make yourself uncomfortable.",
  "func": function(ans) { return {'impulsiveness': 20 * ans, 'sociability': 20 * ans, } }
}, {
  "type": "multipleChoice",
  "qid": "forgot_name",
  "question": "You see someone you know but forgot their name.",
  "answers": {
    "You carefully avoid them until they say hi": {
      'impulsiveness': 50,
      'awkwardness': 75
    },
    "Say hi but try not to mention their name in a conversation": {
      'impulsiveness': 25,
      'awkwardness': 25,
      'sociability': 50
    },
    "Say 'Oh hi (mumble something indistinct)'": {
      'awkwardness': 75,
      'socialability': 25
    },
    "Fetch someone they don't know and force them to introduce ecah other": {
      'impulsiveness': 25,
      'sociability': 75,
      'impatience': 75
    },
    "Pretend like you don't know them": {
      'awkwardness': 100
    },
    "Just be straightforward: 'I'm sorry, but I forgot your name'": {
      'impulsiveness': 25,
      'social': 100
    }
  },
}, {
  "type": "likert",
  "qid": "altered_states",
  "question": "D.A.R.E. inspired you to try drugs.",
  "func": function(ans) { return {'metabolism': 10 * (1 - ans), 'tolerance': 40 * ans, 'impulsiveness': 10 * ans } }
}, {
  "type": "likert",
  "qid": "hunger_personality",
  "question": "You hangry?",
  "func": function(ans) { return {'metabolism': 40 * ans } }
}, {
  "type": "likert",
  "qid": "chips_butty",
  "question": "A chips butty is a sandwich <img src='http://3.bp.blogspot.com/_ScBigNRg0Y4/S6vQ9acsYhI/AAAAAAAAAZY/PcWKnCpFq1E/s1600/chip-butty.jpg'>",
  "func": function(ans) { return {'impatience': 30 * (1 - ans), 'metabolism':  25 * ans } }
}, {
  "type": "checkboxes",
  "qid": "geek_topic",
  "question": "What topics would you want to geek-out about?",
  "answers": {
    "Slash fan fiction": ["#fan_fic#"],
    "The weather and global warming": ["#weather_convo#"],
    "The latest Twitter hot-take": ["#twitter#", "#silicon_valley#"],
    "Gentrification in Brooklyn": ["#real_estate#", "#race#"],
    "A leftist critique of Democrats": ["#radical_politics#"],
    "The latest and freshest Javascript library": ["#javascript_library#"],
    "The latest and freshest literary theory": ["#literary_theory#"],
    "The latest and freshest meme theory": ["#meme_theory#"],
    "The latest and freshest hole-in-the-wall restaurants": ["#restaurants#"],
    "The latest and freshest political gossip": ["#political_gossip#"],
    "The Echo Chamber": ["#radical_politics#", "#silicon_valley#"],
  },
}, {
	"type": "likert",
	"qid": "dogs_over_cats_debate",
	"question": "You think 'You prefer dogs over cats' is a question that doesn't really give someone insight into your personality, at all.",
	"func": function(ans) { return {'impatience': 1 * ans, 'impulsiveness': 20 * (ans) } }
}];
