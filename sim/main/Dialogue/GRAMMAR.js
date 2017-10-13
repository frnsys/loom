export default {
  //////////////
  /* HELPERS */
  //////////////
  //
  'bathroom_activity': ["take a shit", "do number two", "take a piss", "adjust my hair", "take some deep breaths in a toilet stall by myself", "check my phone while pretending to take a shit", "drop some kids off at the pool", "answer the call of nature"],

  "drinking_size": "thimble-sized large huge good-sized generous tiny small".split(" "),
  "drinking_vessel": "bottle cup mug flask flagon".split(" "),
  "drinking_alcohol": "wine tequila beer cider".split(" "),
  "drinking_emotions": ["#emotion_mellow#"],

  "drinking_water": ["smartwater", "tapwater", "#seltzer#", "water"],
  "seltzer": ["la croix", "perrier"],

  "entered_arrival": ["just got here", "arrived", "am finally at the party"],

  'party_review': 'boring exciting ho-hum fun weird uncomfortable'.split(' '),
  'left_leave': ['do an Irish goodbye', 'head home', 'go to my next party of the night', 'take a walk by myself', 'grab a bite to eat', 'escape from society'],

  'animal': ['panda','fox','capybara','iguana'],
  "emotion_mellow" : "thoughtful sad slow reflective morose gentle quiet calm tender".split(" "),
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
'action_entered': ['#thought_entered#'],
'action_left': ['#thought_left#'],
'action_bathroom': ['#thought_bathroom#'],
'action_eat': ['#thought_eat#'],
'action_gawk': ['#thought_gawk#', "#thought_worry#", "#thought_deep_inner#", "#thought_sim#"],
'action_social_me#dia#': ['#thought_social_media#'],
'action_drink_alcohol': ['#thought_drink_alcohol#'],
'action_drink_water': ['#thought_drink_water#'],
'action_talk': ['#thought_talk#'],

  "ts_edgy": "edgy interesting fun sexy cool subversive".split(" "),
  "thought_sim":
  ["What is this simulation business?",
    "I fundamentally disagree with the tone of this simulation.",
    "Is this simulation trying to be '#ts_edgy#' or what?",
    "Is this just a bunch of simulated dialogue? I don't get it.",
    "What's the relationship of the party to the simulation?",
    "There's too much text in this simulation.",
    "This isn't what I thought when I heard it was a 'simparty'.",
    "I have no idea what's going on in this simulation.",
    "How does the questionnaire relate to the simulation?",
    "Oh funny, I see they even meta-reference the simulation in the simulation. Ha-ha.",
    "I see they make a meta-meta reference to a meta-reference of the simulation in the simulation. Ha-ha-ha."],


    
  'thought_worry': 
    ["How many people do I know at this party? How many people do they know?",
      "I wonder if everyone here is having fun or pretending to have fun.",
      "I can't believe they're here. Do I #dw_social# or #dw_antisocial#?",
      "What's their name again? I forgot.",
      "Was it a bad idea to have invited them?",
      "Oh, I know that person on Twitter.",
      "Should I be talking to more people?",
      "Should go to that other #at_event# tonight?"],

  "ddi_action": "flirting with|joking with|really listening to|just talking over|giving a sales pitch".split("|"),
  "ddi_cute": "attractive|cute|charming|smart|sweet|harmless|interesting|nice".split("|"),
  "thought_deep_inner":
    ["Are they #ddi_action# me?",
      "Hmm. I think I've decided that they're kind of #ddi_cute#",
      "I think they'd be a cool new friend.",
      "I think they'd be an interesting collaborator.",
      "This is kind of a boring conversation. I hope they don't notice that I'm zoning out.",
      "This is interesting, but I'm so tired."],


  "dw_social": ["say hello", "go over there and say hi", "nod my head", "introduce myself to them"],
  "dw_antisocial": ["pretend I didn't see them", "avoid them and leave", "pretend to be friendly?"],
  
  'thought_entered':["I #entered_arrival#. I'm #kinda-really# #emotion_anticipation#."],
  'thought_left':['The party was #kinda-really# #party_review#. I just had to #left_leave#.'],
  'thought_bathroom':["I have to #bathroom_activity#.",
    "Maybe I should come back and avoid the bathroom line.",
    "Should I hold it until I get home?",
    "Where's the bathroom?",
    "Can't tell if this is a fart or something more."],
  "thought_eat": ["I'm #kinda-really# hungry.",
    "The best thing to do at parties is to eat.",
    "The snacks are better at Chelsea openings.",
    "Am I eating too much?",
    "I should have probably have eaten dinner beforehand."],
  'thought_gawk':["I don't really understand this simulation.",
    "Swipe right, or swipe left?",
    "I think I've seen that person on #social_media#.",
    "Should I be #gawk_activity#?",
    "Our simulated selves are #kinda-really# #gawk_person_feeling#"],

  "social_media": ["OKCupid", "Twitter", "Facebook", "The New Inquiry website"],
	"drunk_state": "tipsy|slightly buzzed|buzzed|drunk|a little too drunk|pretty sober".split("|"),
	"drunk_pacing": "too much|a lot|too fast|too little|enough|on an empty stomach".split("|"),
  "drink_proclivity": "love|like|hate|despise".split("|"),
  'thought_drink_alcohol':["A #drinking_size# drink makes me #drinking_emotions#.",
    "...this tastes #superlatives#.",
    "I #drink_proclivity# #drinking_alcohol#.",
    "I just realized I #drink_proclivity# #drinking_alcohol#.",
    "I think #drinking_alcohol# just gives me a headache. Why do I do this to myself?",
    "Am I drinking #drunk_pacing#?",
    "I think I'm #drunk_state#.",
    "Should I have another #drinking_alcohol#? I'm #drunk_state#.",
    "I'll just get this so I have something in my hands instead of standing around empty-handed."],
  'thought_drink_water':['Hydration is important.',
    'I am #drinking_emotions# drinking from a #drinking_size# #drinking_vessel# of #drinking_water#.',
    "Hopefully this looks like a gin-and-tonic.",
    "God, I have such a headache right now."],
  "thought_talk": ["#talk_normal#", '#talk_medium#', '#talk_gossip_tech#', '#talk_dating#', '#talk_weather_tech#', '#talk_weather_feeling#', '#talk_insult#', '#talk_normal_tech#'],

  

  'gawk_exclamation': 'Whoa|Cool|Hey|Hmm'.split('|'),
  'gawk_punctuation': '!|?|!!|?!|??|.'.split('|'),
  'gawk_person_feeling': 'cute|talking together|interesting|weird!|funny|#emotion_anticipation#-looking|sad-looking - I wish I could cheer them up.'.split('|'),
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

"talk_-1_-1": ["#alltalk#", "#smalltalk#", "#awkwardtalk#"],
"talk_-1__0": ["talk-10 #DEV_convo#"],
"talk_-1__1": ["#h8tertalk#", "#promotalk#"],
"talk__0_-1": ["talk0-1 #DEV_convo#"],
"talk__0__0": ["talk00 #DEV_convo#"],
"talk__0__1": ["talk01 #DEV_convo#"],
"talk__1_-1": ["talk1-1 #techtalk#"],
"talk__1__0": ["talk10 #DEV_convo#"],
"talk__1__1": ["talk11 #DEV_convo#"],

"alltalk": 
  ["#smalltalk#",
    "#promotalk#",
    "#techtalk#",
    "#awkwardtalk#",
    "#humblebrag#",
    "#worktalk#",
    "#namedrop#",
    "#apologytalk#",
    "#interruptiontalk#"],

  "it_time": "in a long time|in a few months|in a few years|in a decade|since I graduated from college|since high school".split("|"),
"interruptiontalk":
  ["-- as I was saying bef--",
    "-- oops, sorry, I really have to say hi to someone I haven't seen #it_time# --",
    "-- sorry, I had an urgent #at_medium# - what were you saying again?",
    "Uh-huh, #uhuhuh#, yeah. (What were they saying? I zoned out.)"],

"at_medium": "email text message tweet".split(" "),
"at_event": "thing party event opening show project talk".split(" "),
"apologytalk":
  ["I haven't seen you in forever!",
    "I haven't seen you in so long!",
    "I'm so sorry I never replied to your #at_medium#.",
    "How was your #at_event#? I'm so sorry I couldn't make it.",
    "How was the rest of the #at_event#? Sorry I had to leave early.",
    "It was okay - I really missed you at the #at_event#.",
    "Sorry for the late #at_medium# the other day.",
    "I'm sorry - I owe you a #at_medium#"],


"nd_contact": "a good friend|friend of a friend|my friend's cousin|my cousin's friend|my friend's sibling|a family friend".split("|"),
"nd_intro": "do an intro|introduce you".split("|"),
"nd_chill": "chill|down-to-earth|friendly|nice|warm".split("|"),
"nd_famous": "kinda famous|famous|kinda well-known|well-known|a big name|getting big".split("|"),
"nd_locale": "summer house|place upstate|bungalow|beach house|apartment|penthouse|conference|dinner party|party|gathering".split("|"),
"nd_venue": "gallery museum publication magazine zine space exhibition conference".split(" "),
"namedrop":
  ["Have you heard of this person?",
    "Oh, I actually know them - they’re #nd_contact#. Do you want me to #nd_intro#?",
    "You should meet my friend! I'll #nd_intro#. They just had a #at_event# in the #nd_venue# I was just talking to you about.",
    "That’s so cool - I know them too!",
    "Even though they’re #nd_famous#, they’re really #nd_chill#.",
    "Yeah, I was at their #nd_locale#, sometime #wt_worktime# -- you should come sometime!"],



"wt_busy": "busy|really busy|super busy|busy as usual|so busy|busy as fuck".split("|"), 
"wt_worktime": "this past week|this past month|the past semester|the past year|the past few years".split("|"),
"worktalk": 
  ["What do you do?",
    "What do you work on?",
    "What do you work on lately?",
    "Where do you work?",
    "How's your work going?",
    "Work is #hb_feels# and going great!",
    "I'm super #wt_busy#, and work is #hb_feels#, so it's going great!",
    "#wt_worktime.capitalize# has been #wt_busy# -- #hb_youtoo#.",
    "Things are #wt_busy#, but in a good way",
    "I rarely see friends anymore because I'm #wt_busy#",
    "Keeping #wt_busy#, which is good, right?",
    "Nice to see you keeping busy.",
    "I'm kind of in a transitional period right now."],



"hb_role": "CEO co-founder head lead".split(" "),
"hb_org": "non-profit organization team program".split(" "),
"hb_feels": "wild exciting crazy awesome challenging productive interesting".split(" "),
"hb_youtoo": "I'm sure you know how it is|you probably are too|you know what I mean|you're probably in a similar position".split("|"),
"humblebrag": 
    ["I have so many projects going on, I don’t know what to do.",
      "I just hired someone, and it’s so interesting managing people, you know?",
      "I just started at this thing I’m totally unqualified for.",
      "I’m just started being the #hb_role# of a #hb_org#, and it's really #hb_feels#",
      "That’s great! Things have been really #hb_feels# and busy for me too - #hb_youtoo#."],


"awk_ellipses": "..|...|.......|.........".split("|"),
"awkwardtalk": 
  ["#uhuhuh.capitalize#, have I met you before?",
  "#uhuhuh.capitalize#, what's your name again?",
    "Hi (mumble), it's good to see you again.",
    "Nice to, #uhuhuh#, see, #uhuhuh#, meet you again.",
    "#awk_ellipses#I'm going to get another drink",
    "#awk_ellipses#I'm going to go to the bathroom",
    "#awk_ellipses#nice talking with you.",
    "#awk_ellipses#"],



"polite_interesting": "interesting|nice|cute|funny|cozy|charming".split("|"),
"weather_adj": "weird|warm|chilly".split("|"),

"st_location": "New York|Brooklyn|Bed-Stuy|Bushwick|Greenpoint|the United States".split("|"),
"uhuhuh": ["uh", "er", "um", "uhh", "eh", "errr", "umm"],
"smalltalk": 
   ["This is such an #polite_interesting# office, isn't it?",
     "The weather's so #weather_adj#, right?",
     "#uhuhuh.capitalize#, #uhuhuh#,  where do you live?",
     "#uhuhuh.capitalize#, how long have you lived in #st_location#?",
     "Who do you know here?"],

"h8tertalk":
  ["I don't get this party. Do you?",
    "I have better things to do with my Friday night. What about you?",
    "Ugh. This is such a scene, don't you think?"],

"personal_project": "startup|firm|creative practice|meditation practice|non-profit|publication|gallery show|residency|teaching gig|grad program",
"startup_model": "Uber|AirBnB|Facebook|Amazon Prime|coffeeshop|WeWork|Apple|Museum|Tinder".split("|"),
"promotalk": 
	["Oh, that's soo interesting.",
	"Can I tell you about my #personal_project#?",
	"That reminds me of the #personal_project# I just started! Let me tell you about it.",
	"You know, my #personal_project# could really use a fresh pair of eyes.",
	"I'm working on the #startup_model# for #personal_project#s. We're in stealth mode."],


"cryptocurrency": "Bitcoin|the blockchain|Ethereum|cryptocurrencies|that Bitcoin stuff".split("|"),
"tt_tech_bad":  "global warming is|Facebook is|filter bubbles are|algorithms are|sentient AI will|people who don't read are|Silicon Valley is".split("|"),
"tt_tragedies": "19th-century company towns|slavery|segregation|the Industrial Revolution|capitalist exploitation".split("|"),
"tt_society_speculation": 
   ["ruining society",
     "making us estranged from each other",
     "further alienating us from the products of our emotional labor",
     "going to ultimately create fully automated luxury gay space communism",
     "recreate the gulags",
     "recreate company towns",
     "repeat the tragedies of #tt_tragedies#",
     "actually going to make the world a better place",
     "going to take over the world",
     "fundmentally the start of a future religion",
     "already replaced our governments, like it our not",
     "ultimately emancipatory, even though it doesn't seem like it",
     "doomed to fail under its own contradictions"],
"techtalk":
  ["What do you think about #cryptocurrency#", 
    "Well, #tt_tech_bad# #tt_society_speculation."],


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
"fan_fic": ["weather"],
"weather_convo": ["weather"],
"twitter": ["twitter"], 
"silicon_valley": ["siliconva"],
"real_estate": ["fdsfds"],
"race": ["fdsfsa"],
"radical": ["radical radical"],
"politics": ["politics politics"],
"javascript_library": ["javascript"],
"literary_theory": ["literary_theory"],
"meme_theory": ["meme_theory"],
"restaurants": ["restaurants"],
"political_gossip": ["political gossip"],


"DEV_convo": ["dev deve dev"],

"#random_punctuation#": "!|?|.|;|...|???|!?".split("|")

};
