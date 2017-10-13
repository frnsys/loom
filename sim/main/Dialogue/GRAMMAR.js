export default {
  //////////////
  /* HELPERS */
  //////////////
  //
  'bathroom_activity': ["take a shit", "do number two", "take a piss", "adjust my hair", "takd some deep breaths in a toilet stall by myself", "check my phone while pretending to take a shit", "drop some kids off at the pool", "answer the call of nature"],

  "drinking_size": "thimble-sized large huge ample generous tiny petite".split(" "),
  "drinking_vessel": "bottle cup mug flask flagon".split(" "),
  "drinking_alcohol": "wine tequila beer cider".split(" "),
  "drinking_emotions": ["#emotion_mellowly#"],

  "drinking_water": ["smartwater", "tapwater", "#seltzer#"],
  "seltzer": ["la croix", "perrier"],

  "entered_arrival": ["just got here", "arrived", "am finally at the party"],

  'party_review': 'boring exciting ho-hum fun weird uncomfortable'.split(' '),
  'left_leave': ['do an Irish goodbye', 'head home', 'go to my next party of the night', 'take a walk by myself', 'grab a bite to eat', 'escape from society'],

  'animal': ['panda','fox','capybara','iguana'],
  "emotion_mellowly" : "thoughtfully sadly slowly reflectively morosely gently quietly calmly tenderly".split(" "),
  "emotion_upbeat" : "happy sad reflective morose proud".split(" "),
  "emotion_anticipation" : "nervous excited curious hesitant annoyed grumpy tired".split(" "),
  "kinda-really": ["kinda", "somewhat", "maybe", "just a little", "very", "ridiculously", "totally", "really"],

  "talking": "chatting|gabbing|speaking|talking|shooting the shit".split("|"),

  'feeling':'like|hate|impassioned|disturbed'.split("|"),
  'superlatives': 'best|pretty okay|not bad|the worst'.split("|"),
  'surprised': "OMG|Holy shit|Wow|You aren't gonna believe it but".split("|"),
  'topics': 'Justin Bieber|Chino Kim|Joi Ito|Calvin Klein|Jake Tapper|Glenn Greenwald|Trump'.split("|"),
  'weather': 'snow|rain|cloudy day|sunshine'.split("|"),
  "material": 'pic|selfie|text|tweet'.split("|"),

  "talk_greetings": ["#greetings#!"],
  'greetings': 'Yo Sup Hey Hello'.split(" "),


//////////////
/* ACTIONS */
//////////////
// "bathroom" / "eat" / "drink_alcohol" / "drink_water" --- from PartyGoer.js ACTIONS
  'entered':["I #entered_arrival#. I'm #kinda-really# #emotion_anticipation#."],
  'left':['The party was #kinda-really# #party_review#. I just had to #left_leave#.'],
  'bathroom':["I gotta #bathroom_activity#."],
  "eat": ["I'm #kinda-really# hungry.I'm eating."],
  'gawk':["I don't really get this simulation.",
    "Swipe right, or swipe left?",
    "I think I've seen that person on #social_media#.",
    "Should I be #gawk_activity#?",
    "Our simulated selves are #kinda-really# #gawk_person_feeling#"],

  "social_media": ["OKCupid", "Twitter", "Facebook"],
  'drink_alcohol':["I'm #drinking_emotions# drinking from a #drinking_size# #drinking_vessel# of #drinking_alcohol#. .. this tastes #superlatives#"],
  'drink_water':['Hydration is important.',
    'I am #drinking_emotions# drinking from a #drinking_size# #drinking_vessel# of #drinking_water#.'],
  "talk": ["#talk_normal#", '#talk_medium#', '#talk_gossip_tech#', '#talk_dating#', '#talk_weather_tech#', '#talk_weather_feeling#', '#talk_insult#', '#talk_normal_tech#'],

  'gawk_exclamation': 'Whoa|Cool|Hey|Hmm'.split('|'),
  'gawk_punctuation': '!|?|!!|?!|??|.'.split('|'),
  'gawk_person_feeling': 'cute|#emotion_mellowly# talking together|interesting|weird!|funny|#emotion_anticipation#-looking|sad-looking - I wish I could cheer them up.'.split('|'),
  'gawk_activity': 'talking to someone new right now|drinking more|dancing more|meeting more new people'.split('|'),

  // this is here to kick-off talking sometimes

//////////////
/* DIALOGUE */
//////////////
// from Dialogue.js

  // [1, -1]                              [1, 0]                                      [1, 1]
// Highly technical & Not personal      Highly technical & Somwhat personal         Highly technical & Highly personal
// Blockchain                           Tech company news                           Company internal arguments / nitpicky
// Cold, matter-of-fact, robot-like                                                 // I can't believe they fild a jira ticket this way  / oxford comma

// [0, -1]                              [0,0]                                       [0, 1]
// Somewhat technical & Not personal    Somewhat technical & Somewhat personal      Somewhat technical & Highly personal
// Weather, getting technical           Weather, with feelings

// [-1, -1]                             [-1,0]                                      [-1, 1]
// Not technical & Not personal         Not technical & Somewhat personal           Not technical & Highly personal
// greetings                            Boy/girl friend drama                       Insults/arguments/whiny
// smalltalk/milquetoast                                                            h8ter / sarcastic / nihilistic                                                   
// such a nice bookshelf!                                                           I wish I Was doing XYZ instead

"talk_-1_-1": ["blahblah"],
"talk_-1__0": ["blahblah"],
"talk_-1__0": ["blahblah"],
"talk__0_-1": ["blahblah"],
"talk__0__0": ["blahblah"],
"talk__0__1": ["blahblah"],
"talk__1_-1": ["blahblah"],
"talk__1__0": ["blahblah"],
"talk__1__1": ["blahblah"],


  "talk_normal": ["How's the #topics# project going?"],
  'talk_medium': ["Wow I can't believe that happened"],
  'talk_gossip_tech': ["Wow I can't believe #topics# did that in front of everybody at the office!"],
  'talk_dating': ["We broke up"],
  'talk_weather_tech': ["The cloud cover today is unprecedented"],
  'talk_weather_feeling': ["The weather makes me want to die", "I'm kind of worried aboug global warming"],
  'talk_insult': ["#talk_insult_variants#, #diminutive#"],
  'talk_compliment': ["#talk_compliment_variants#, #augmentive#", "Looking pretty #talk_compliment_variants#",
    "I like your smile!", "Your ideas are intriguing to me and I wish to subscribe to your newsletter."],
  'talk_sexlife': ["#talk_sexlife_theory#", "#talk_sexlife_personal#"],
  'talk_industry_tech': "Did you see that new article on Hacker News?",
  'talk_normal_tech': "What's the wifi password here?",
  'talk_geekily_tech': "Obviously, #editors# is the superior text editor.",

  'talk_insult_variants': "WTF|F U|Out of my way|Shut up".split("|"),
  'talk_compliment_variants': "sharp|happy|snazzy".split("|"),
  'talk_sexlife_theory': ["So I've been reading the History of Sexuality lately.."],
  'talk_sexlife_personal': ["TMI I know, but wanna talk about rectal discharge?"],

  'editors': "vi|neovim|emacs|spacemacs|atom|Sublime".split("|"),
  'diminutive': "bro|asshole".split("|"),
  'augmentive': "friend|stranger|buddy|pal".split("|"),

////////////
/* TOPICS */
////////////
// from Questions.js
  //
"#fan_fic#": ["weather"],
"#weather_convo#": ["weather"],
"#twitter#": ["twitter"], 
"#silicon_valley#": ["siliconva"],
"#real_estate#": ["fdsfds"],
"#race#": ["fdsfsa"],
"#radical#": ["radical radical"],
"#politics#": ["politics politics"],
"#javascript_library#": ["javascript"],
"#literary_theory#": ["literary_theory"],
"#meme_theory#": ["meme_theory"],
"#restaurants#": ["restaurants"],
"#political_gossip#": ["political gossip"]





};
