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
  "qid": "hunger_personality",
  "question": "You embody a strict mind/body duality, and hunger rarely seems to have an effect on your emotional state.",
  "func": function(ans) { return {'metabolism': 40 * (1 - ans) } }
}, {
  "type": "likert",
  "qid": "introvert_recharge",
  "question": "Usually, being alone makes you feel recharged rather than lonely.",
  "func": function(ans) { return {'sociability': 30 * (1 - ans) } }
}, {
  "type": "likert",
  "qid": "altered_states",
  "question": "Altered states are desirable to you.",
  "func": function(ans) { return {'metabolism': 10 * (1 - ans), 'tolerance': 40 * ans, 'impulsiveness': 10 * ans } }
}, {
  "type": "likert",
  "qid": "self_discomfort",
  "question": "You enjoy talking about issues that make yourself uncomfortable.",
  "func": function(ans) { return {'openness': 20 * ans, 'extraversion': 20 * ans, 'agreeableness': 10 * ans } }
}, {
  "type": "multipleChoice",
  "qid": "small_talk_topic",
  "question": "What's your favorite small-talk topic?",
  "answers": {
    "The weather and global warming": ["#weather_convo#"],
    "The latest in blockchain technology": ["#blockchain#", "#silicon_valley#"],
    "Gentrification in Brooklyn": ["#real_estate#", "#race#"],
    "A critique of Jacobin Magazine": ["#radical#", "#twitter#"]
  },
}, {
  "type": "checkboxes",
  "qid": "geek_topic",
  "question": "What topics would you want to geek-out about?",
  "answers": {
    "The latest and freshest Javascript library": ["#javascript_library#"],
    "The latest and freshest literary theory": ["#literary_theory#"],
    "The latest and freshest meme theory": ["#meme_theory#"],
    "The latest and freshest hole-in-the-wall restaurants": ["#restaurants#"],
    "The latest and freshest CRISPR projects": ["#crispr#"],
    "The latest and freshest political gossip": ["#political_gossip#"],
  },
}, {
  "type": "multipleChoice",
  "qid": "favorite_test",
  "question": "What's your favorite test?",
  "answers": {
    "The Bechdel test": ["#bechdel_test#"],
    "The Voight-Kampff test": ["#voight_kampff_test#"],
    "The Turing test": ["#turing_test"],
    "The Myers-Briggs Test": ["#myers_briggs_test#"],
    "The Purity Test": ["#purity_test#"]
  },
}, {
	"type": "likert",
	"qid": "dogs_over_cats_debate",
	"question": "You think 'You prefer dogs over cats' is a question that doesn't really give someone insight into your personality, at all.",
	"func": function(ans) { return {'impatience': 1 * ans, 'impulsiveness': 20 * (ans) } }
}];
