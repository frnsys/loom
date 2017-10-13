export default {
  //////////////
  /* HELPERS */
  //////////////
  //
  'bathroom_activity': ["take a shit", "do number two", "take a piss", "adjust my hair", "take some deep breaths in a toilet stall by myself", "check my phone while pretending to take a shit", "drop some kids off at the pool", "answer the call of nature"],

  "drinking_size": "thimble-sized large huge good-sized generous tiny small".split(" "),
  "drinking_vessel": "bottle cup mug flask flagon".split(" "),
  "drinking_alcohol": "beer|cider|an IPA".split("|"),
  "drinking_emotions": ["#emotion_mellow#"],

  "drinking_water": ["smartwater", "tapwater", "#seltzer#", "water"],
  "seltzer": ["la croix", "perrier"],

  "entered_arrival": ["#helpers_recently# got here", "arrived", "am finally at the party"],

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

  "helpers_I_think": "I think|I suspect|I believe|I feel|I know|I #helpers_recently# realized".split("|"),
  "helpers_recently": "just|recently|lately".split("|"),

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


  "pre_talk_thought": 
    ["(What was their name again?)",
      "(Are they even interested in what I'm saying?)",
      "(I don't think they're that interested.)",
      "(This is getting awkward#awk_ellipses#)",
      "(#awk_ellipses#)",
    "","","","","","","",""], //pad probability

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


   
  "wr_that_other": "that other|my friend's other".split("|"),
  'thought_worry': 
    ["How many people do I know at this party? How many people do they know?",
      "I barely know anyone here.",
      "I wonder if everyone here is having fun or pretending to have fun.",
      "I can't believe they're here. Do I #dw_social# or #dw_antisocial#?",
      "What's their name again? I forgot.",
      "Was it a bad idea to have invited them?",
      "Oh, I know that person on Twitter.",
      "Should I be talking to more people?",
      "Should I go to #wr_that_other# #at_event# tonight?"],

  "ddi_action": "flirting with|joking with|really listening to|just talking over|giving a sales pitch".split("|"),
  "ddi_cute": "attractive|cute|charming|smart|sweet|harmless|interesting|nice".split("|"),
  "ddi_hip": "hip|cool|conceptual|weird|boring".split("|"),
  "thought_deep_inner":
    ["Are they #ddi_action# me?",
      "Hmm. #helpers_I_think# I've decided that this person is kind of #ddi_cute#",
      "#helpers_I_think# they'd be a cool new friend.",
      "#helpers_I_think# they'd be an interesting collaborator.",
      "This is kind of a boring conversation. I hope they don't notice that I'm zoning out.",
      "This is interesting, but I'm so tired.",
      "This feels too #ddi_hip# for me."],


  "dw_social": ["say hello", "go over there and say hi", "nod my head", "introduce myself to them"],
  "dw_antisocial": ["pretend I didn't see them", "avoid them and leave", "pretend to be friendly?"],
  
  'thought_entered':["I #entered_arrival#. I'm #kinda-really# #emotion_anticipation#."],
  'thought_left':['The party was #kinda-really# #party_review#. I just had to #left_leave#.'],
  "thought_I_wonder": "I wonder|around here|on this floor".split("|"),
  'thought_bathroom':["I have to #bathroom_activity#.",
    "Maybe I should come back and avoid the bathroom line.",
    "Should I hold it in until I get home?",
    "Where's the bathroom #thought_I_wonder#?",
    "Can't tell if this is a fart or something more."],
  "thought_eat": ["I'm #kinda-really# hungry.",
    "The best thing to do at parties is to eat.",
    "The snacks are better at Chelsea openings.",
    "Am I eating too much?",
    "I should have probably have eaten dinner beforehand."],
  'thought_gawk':["I don't really understand this simulation.",
    "Swipe right, or swipe left?",
    "#helpers_I_think# I've seen that person on #social_media#.",
    "Should I be #gawk_activity#?",
    "Our simulated selves are #kinda-really# #gawk_person_feeling#"],

  "social_media": ["OKCupid", "Twitter", "Facebook", "The New Inquiry website"],
  "drunk_realized": "#helpers_recently# realized|forgot that|realized".split("|"),
	"drunk_state": "tipsy|slightly buzzed|buzzed|drunk|a little too drunk|pretty sober".split("|"),
	"drunk_pacing": "too much|a lot|too fast|too little|enough|on an empty stomach".split("|"),
  "drink_proclivity": "love|like|hate|despise".split("|"),
  "drink_gives_me_a_headache": "gives me a headache|gives me a stomachache|makes me feel weird now|makes me socially awkward|makes me annoying|confuses me|gives me a bad time".split("|"),
  'thought_drink_alcohol':["A #drinking_size# drink makes me #drinking_emotions#.",
    "...this tastes #superlatives#.",
    "I #drink_proclivity# #drinking_alcohol#.",
    "I #drunk_realized# I #drink_proclivity# #drinking_alcohol#.",
    "#helpers_I_think# #drinking_alcohol# just #drink_gives_me_a_headache#. Why do I do this to myself?",
    "Am I drinking #drunk_pacing#?",
    "#helpers_I_think# I'm #drunk_state#.",
    "Should I have another #drinking_alcohol#? I'm #drunk_state#.",
    "I'll just get this so I have something in my hands instead of standing around empty-handed."],
  'thought_drink_water':['Hydration is important.',
    'I am #drinking_emotions# drinking from a #drinking_size# #drinking_vessel# of #drinking_water#.',
    "I should have probably have eaten dinner beforehand.",
    "God, I have such a headache right now."],
  "thought_talk": ["#talk_normal#", '#talk_medium#', '#talk_gossip_tech#', '#talk_dating#', '#talk_weather_tech#', '#talk_weather_feeling#', '#talk_insult#', '#talk_normal_tech#'],

  

  'gawk_exclamation': 'Whoa|Cool|Hey|Hmm'.split('|'),
  'gawk_punctuation': '!|?|!!|?!|??|.'.split('|'),
  'gawk_person_feeling': 'cute|talking together|interesting|weird!|funny|#emotion_anticipation#|sad - I wish I could cheer them up.'.split('|'),
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
"talk_-1__0": ["#alltalk#", "#dramatalk#"],
"talk_-1__1": ["#alltalk#", "#h8tertalk#", "#promotalk#"],

"talk__0_-1": ["#alltalk#"], //TODO
"talk__0__0": ["#alltalk#", "#vacationtalk#"], // TODO
"talk__0__1": ["#alltalk#", "#industrytalk#", "#promotalk#"],

"talk__1_-1": ["#alltalk#", "#techtalk#"],
"talk__1__0": ["#alltalk#"], //TODO 
"talk__1__1": ["#alltalk#", "#industrytalk#"],

"alltalk": ["#sometimes_convo_connector# #alltalk_types#"],
"alltalk_types": 
  ["#smalltalk#",
    "#promotalk#",
    "#techtalk#",
    "#awkwardtalk#",
    "#humblebrag#",
    "#worktalk#",
    "#namedrop#",
    "#apologytalk#",
    "#interruptiontalk#",
    "#industrytalk#",
    "#dramatalk#",
    "#dramatalk#",
    "#theorytalk#",
    "#vacationtalk#",
    "#racegendertalk#"],

"racegendertalk": ["#talk_race#", "#talk_gender#"],

"vt_event": "wedding|retreat|gathering|party|festival|conference|vacation".split("|"),
"vt_city": "Mexico City|Kyoto|Hong Kong|Miami|Greece|Basel|Paris|Venice|Tokyo|Berlin|Seoul|Beijing|The Bahamas|London|Vermont|upstate|San Francisco|California|Telluriude|Sundance".split("|"),
"vt_venue": "beach|island|mountain|neighborhood|farm|cabin".split("|"),
"vt_adjective": "cute authentic genuine charming sweet pretty beautiful nice".split(" "),
 "vt_howaboutyou": "How about you?|How about you? Are you going anywhere?||Did you go anywhere?|Any travel plans?".split("|"),
"vacationtalk":
  ["Oh, I'm going to #vt_city# for a #vt_event#. #vt_howaboutyou#",
    "I #helpers_recently# came back from a #vt_event# at a #vt_venue# in #vt_city#! It was so #vt_adjective#. #vt_howaboutyou#",
    "There's a really small #vt_venue# in #vt_city# that I'm going to for a vacation. #vt_howaboutyou#",
    "I'm going to #vt_city# this weekend! #vt_howaboutyou#",
    "I've been traveling so much - #helpers_recently# came back from a #vt_event#, and then am heading to #vt_city# for a #vt_venue#. #vt_howaboutyou#"],

"sometimes_convo_connector": ["","","","#convo_connector#"],
"cc_ender": 
    ["Do you know what else is interesting?",
      "You know -",
      "Oh hey -",
      "Also: ",
      "By the way -",
      "Speaking of which -",
      "That reminds me -"],
"cc_starter":     
    ["Huh, that's interesting.",
      "I see.",
      "--yeah, I do.",
      "--yeah, totally!",
      "--I know!",
      "Uh-huh.",
      "Yeah."],
     
"convo_connector": ["#cc_ender#", "#cc_starter#", "#cc_starter# #cc_ender#"],

"tt_order": "Process|Structure|Order|Logic|Rhythm|Techne|Civilization|Grammar".split("|"),
"tt_things": "Things|Worlds|Games|Things|Actors|Networks|Cities|Paradoxes|Silences|Methods|Reasons|Telos".split("|"),
"tt_cultural": "Cultural|Post-Cultural|Post-Sokal|Intersectional|Narrative|Empathic|Virtual|Real|Technological".split("|"),
"tt_political": "Capitalist|Socialist|Hegemonic|Democratic|Totalitarian|Anarchic|Cooperative".split("|"),
"tt_psych": "Unconscious|Conscious|Libidinal|Cruelty|Generosity|Reflective|Death-drive|Deliberate".split("|"),

"tt_period": "late|early|mid|premature".split("|"),
"tt_dynamic": "capitalism|communism|society|nature|post-humanism".split("|"),
"tt_title": ["The #tt_order# of #tt_things#",
  "Civilization and its #tt_things#",
  "The #tt_cultural# logic of #tt_period.capitalize# #tt_dynamic.capitalize#",
  "The #tt_political# #tt_psych#",
  "#tt_psych#-#tt_cultural# Manifesto",
  "#tt_political#-#tt_cultural# Manifesto",
  "#tt_cultural# Society, #tt_psych# Society"],
"tt_noteson": "Notes on|Mastering|Dreaming|Thinking|The End Of|The Beginning Of".split("|"),

"tt_publication": "magazine book paper symposium project theory article".split(" "),
"tt_result": "all mindless puppets|all fucked|all beings in a simulation|without free will|going to be okay in the end".split("|"),
"tt_totally_recommend_it": "I'd totally recommend it|You should read it right now|It's so good|It's kind of #rest_adj#, but worthwhile|It's about #rp_leftist# #rp_projects#".split("|"),
"theorytalk":
  ["#pre_talk_thought# Have you heard of the #tt_publication#, '#tt_title#'?",
  "I #helpers_recently# read '#tt_title#'; #tt_totally_recommend_it#.",
  "Oh yeah, I also picked up this compilation: '#tt_noteson# #tt_title#'.",
  "We're #tt_result#."],

"dt_colleague": "colleague co-worker co-founder collaborator friend".split(" "),
"dt_asshole": "an asshole|a misogynist|power-hungry|a flake|a jerk".split("|"),
"dramatalk":
  ["Did you hear about those two over there?",
    "Yeah, I know. Did you hear the recent gossip about those two?",
    "#helpers_I_think# the two of them are more than #dt_colleague#s, if you know what I mean..",
    "Psst - I heard that they #helpers_recently# broke up.",
    "I heard that they broke up as #dt_colleague#s, but they're still talking to each other.",
    "Someone told me they're kind of #dt_asshole# and you shouldn't work with them.",
    "Those two work together?",
    "What?? They're getting back together?"],


  "it_shoptalk": "javascript library|NYT op-ed|Twitter scandal|meme|MacArthur grant|tweet|ML paper|project|opening|grant|award".split("|"),
  "it_topic": "machine learning|technology|sustainability|data visualization|big data|cooperative|consensus|meditation|engineering|journalism".split("|"),
  "it_field": "literary theory|historical materialism|fashion|service design|social justice|literature|poetry|neuroscience|cognitive science|architecture|urban planning".split("|"),
  "industrytalk":
    ["Did you hear about the recent #it_shoptalk#? It was about #it_topic#-driven #it_field#."],


  "it_time": "in a long time|in a few months|in a few years|in a decade|since I graduated from college|since high school".split("|"),
"interruptiontalk":
  ["-- as I was saying bef--",
    "-- oops, sorry, I really have to say hi to someone I haven't seen #it_time# --",
    "-- sorry, I had an urgent #at_medium# - what were you saying again?",
    "Uh-huh, #uhuhuh#, yeah. (What were they saying? I zoned out.)"],

"at_medium": "email text message tweet".split(" "),
"at_event": "thing party event opening show project talk".split(" "),
"at_so_sorry": "so sorry|sooo sorry|sooooooo sorry".split("|"),
"apologytalk":
  ["I haven't seen you in forever!",
    "I haven't seen you in so long!",
    "I'm #at_so_sorry# I never replied to your #at_medium#!",
    "How was your #at_event#? I'm #at_so_sorry# I couldn't make it.",
    "It was okay. How was your #at_event#? I'm #at_so_sorry# I couldn't make it.",
    "How was the rest of the #at_event#? Sorry I had to leave early.",
    "It was okay - I really missed you at the #at_event#.",
    "Sorry for the late #at_medium# the other day.",
    "Yeah, I'm sorry - I owe you a #at_medium#"],


"nd_contact_1": "friend of a friend|close friend|friend|cousin|father|mother|colleague|roommate|partner".split("|"),
"nd_contact": "#nd_contact_1#'s #nd_contact_1#",
"nd_intro": "do an intro|introduce you".split("|"),
"nd_chill": "chill|down-to-earth|friendly|nice|warm".split("|"),
"nd_famous": "kinda famous|famous|kinda well-known|well-known|a big name|getting big".split("|"),
"nd_locale": "summer house|place upstate|bungalow|beach house|apartment|penthouse|conference|dinner party|party|gathering".split("|"),
"nd_venue": "gallery museum publication magazine zine space exhibition conference".split(" "),
"namedrop":
  ["Have you heard of this person?",
    "Oh, I actually know them - they’re #nd_contact#. Do you want me to #nd_intro#?",
    "You should meet my friend! I'll #nd_intro#. They #helpers_recently# had a #at_event# in the #nd_venue# I was talking to you about. They're super #nd_chill#.",
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
"hb_youtoo": "I'm sure you know how it is|you probably are too|you know what I mean|you're probably in a similar place|I'm sure you get it".split("|"),
"humblebrag": 
    ["I have so many projects going on, I don’t know what to do.",
      "I #helpers_recently# hired someone, and it’s so interesting managing people, you know?",
      "I #helpers_recently# started at this #hb_org# I’m totally unqualified for.",
      "I #helpers_recently# started being the #hb_role# of a #hb_org#, and it's really #hb_feels#",
      "That’s great! Things have been really #hb_feels# and busy for me too - #hb_youtoo#."],


"awk_ellipses": "...|.....|.......|.........".split("|"),
"awkwardtalk": 
  ["#uhuhuh.capitalize#, have I met you before?",
  "#uhuhuh.capitalize#, what's your name again?",
    "Hi (mumble), it's good to see you again.",
    "Nice to, #uhuhuh#, see, #uhuhuh#, meet you again.",
    "#awk_ellipses#I'm going to get another drink",
    "#awk_ellipses#I'm going to go to the bathroom",
    "#awk_ellipses#nice talking with you.",
    "#uhuhuh##awk_ellipses#"],



"polite_interesting": "interesting|nice|cute|funny|cozy|charming".split("|"),
"weather_adj": "weird|warm|chilly".split("|"),

"st_location": "New York|Brooklyn|Bed-Stuy|Bushwick|Greenpoint|the United States".split("|"),
"uhuhuh": ["uh", "er", "um", "uhh", "eh", "errr", "umm"],
"smalltalk": 
   ["This is such an #polite_interesting# office, isn't it?",
   "This is an #polite_interesting# party, isn't it?",
     "The weather's so #weather_adj#, right?",
     "#uhuhuh#, #uhuhuh#,  where do you live?",
     "#uhuhuh#, how long have you lived in #st_location#?",
     "Who do you know here?"],

"h8tertalk":
  ["I don't get this party. Do you?",
    "I have better things to do with my Friday night. What about you?",
    "Ugh. This is such a scene, don't you think?"],

"personal_project": "startup|firm|creative practice|meditation practice|non-profit|publication|gallery show|residency|teaching gig|grad program".split("|"),
"startup_model": "Uber|AirBnB|Facebook|Amazon Prime|coffeeshop|WeWork|Apple|Museum|Tinder".split("|"),
"promotalk": 
	["Oh, that's soo interesting.",
	"Can I tell you about my #personal_project#?",
	"That reminds me of the #personal_project# I #helpers_recently# started! Let me tell you about it.",
	"You know, my #personal_project# could really use a fresh pair of eyes.",
	"I'm working on the #startup_model# for #personal_project#s. We're in stealth mode."],


"cryptocurrency": "Bitcoin|the blockchain|Ethereum|cryptocurrency|that Bitcoin stuff".split("|"),
"tt_tech_bad":  "software is|global warming is|Facebook is|filter bubbles are|algorithms are|sentient AI will be|people who don't read are|Silicon Valley is".split("|"),
"tt_tragedies": "19th-century company towns|slavery|segregation|the Industrial Revolution|capitalist exploitation".split("|"),
"tt_shitty": "shitty exploitative abusive".split(" "),
"tt_emancipatory": "emancipatory ideal".split(" "),
"tt_society_speculation": 
   ["ruining society",
     "making us estranged from each other",
     "further alienating us from the products of our labor",
     "just a way to monetize emotional labor",
     "just a continuation of patriarchical capitalism, shrouded in the Trojan horse of #rp_capitalist# convenience",
     "ruining the world; Marx talked about this in Capital Vol. 3.",
     "going to ultimately create fully automated luxury gay space communism",
     "going to recreating the gulags",
     "going to recreate the #tt_shitty# company towns",
     "going to repeat the #tt_shitty# tragedies of #tt_tragedies#",
     "actually going to make the world a better place",
     "going to take over the world",
     "fundmentally the start of a future religion",
     "already replaced our governments, like it our not",
     "ultimately #tt_emancipatory#, even though it doesn't seem like it",
     "doomed to fail under its own contradictions"],
"techtalk":
  ["What do you think about #cryptocurrency#?", 
    "Well, #tt_tech_bad# #tt_society_speculation#.",
    "I #helpers_recently# invested in #cryptocurrency#.",
    "#cryptocurrency.capitalize# is #tt_society_speculation#."],


  "talk_normal": ["How's the #topics# project going?"],
  'talk_medium': ["Wow I can't believe that happened"],
  'talk_gossip_tech': ["Wow I can't believe #topics# did that in front of everybody at the office!"],
  'talk_dating': ["We broke up"],
  'talk_weather_tech': ["The cloud cover today is unprecedented"],
  'talk_weather_feeling': ["The weather makes me want to die", "I'm kind of worried about global warming"],
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
"fan_fic": ["#talk_fan_fic#"],
"weather_convo": ["#talk_weather_convo#"],
"twitter": ["#talk_twitter#"],
"real_estate": ["#talk_real_estate#"],
"silicon_valley": ["#talk_silicon_valley#"],
"race": ["#talk_race#"],
"radical_politics": ["#talk_radical_politics#"],
"javascript_library": ["#talk_javascript_library#"],
"literary_theory": ["#talk_literary_theory#"],
"meme_theory": ["#talk_meme_theory#"],
"restaurants": ["#talk_restaurants#"],
"political_gossip": ["#talk_political_gossip#"],


"ff_shippers": 
  ["Harry Potter and Draco Malfoy",
  "Merlin and Arthur",
  "Steve Rogers and Tony Stark",
  "Kylo Ren and General Hux",
  "Ron Weasley and Hermione Granger",
  "Draco Malfoy and Hermione Granger",
  "Bilbo Baggins and Thorin Oakenshield",
  "James T. Kirk and Leonard McCoy",
  "Clark Kent and Lex Luthor",
  "Ten and Rose Tyler",
  "Benton Fraser and Ray Kowalski",
  "James Bond and Q",
  "Dave Strider and Karkat Vantas",
  "Naruto and Sasuke",
  "Katniss and Peeta",
  "Clarke Griffin and Lexa",
  "Jack Harkness and Ianto Jones",
  "Ian Gallagher and Mickey Milkovich",
  "Carlos and Cecil",
  "Erik Lehnsherr and Charles Xavier",
  "John Egbert and Dave Strider",
  "Laura Hollis and Carmilla Karnstein",
  "Fox Mulder and Dana Scully",
  "Sirius Black and Remus Lupin",
  "Steve Rogers and Bucky Barnes",
  "James T. Kirk and Spock",
  "Sherlock Holmes and John Watson",
  "Jean Kirschstein and Marco Bodt",
  "Rose Lalonde and Kanaya Maryam",
  "Willow and Tara",
  "Janeway and Seven",
  "Arwen and Eowyn",
  "Poe Dameron and Finn"],

"ff_topic": "vidding|femmeslash|shipping".split("|"),
"ff_format": "short story|novel|novella|long-form poem".split("|"),
"talk_fan_fic":
    ["Lately I've been into slash fiction. Have you heard of #ff_topic#?",
      "I'm writing, #uhuhuh#, a slash #ff_format# about #ff_shippers#."],

  "wc_snow": "snow|blizzard".split("|"),
  "wc_brutal_so": "brutal.. so|shitty.. so|kind of nice... but|exciting...yet|romantic.. and".split("|"),

"talk_weather_convo": ["The weather's so #weather_adj#, right?",
  "I can't wait until it #wc_snow.s# again.",
  "I honestly can't deal with NYC #wc_snow.s#.",
  "Winter is going to be #wc_brutal_so# I'm planning a vacation. #vacationtalk#"],





"twt_handles": "darth leon rosemcgowan wendys dril deray".split(" "),
"twt_kind": "private|super private|Weird|fanfic|jokey|finsta|corporate".split("|"),
"twt_maybe_another": ["",""," and another #twt_kind# account"],
"talk_twitter": 
   ["Are you part of the Twitter boycott tonight?",
     "I just saw someone I only know through Twitter.",
     "I have, like, one #twt_kind# Twitter account#twt_maybe_another#.",
     "I'm only on Mastodon; I quit Twitter.",
     "I don't get Twitter.",
     "I don't use social media, let alone Twitter.",
    "I just started following @#twt_handles#."],
"tsv_forum": "Hacker News|Ribbonfarm|Vinay Gupta|Zerohedge|a private Slack".split("|"),
"talk_silicon_valley": 
  ["Did you read that recent article about SV?",
  "Every few weeks, some tech bro re-invents the city bus.",
  "I'm thinking about YC next year, especially looking at something like Watsi.",
  "It's funny, but I do want to make the world a better place with tech.",
  "Tech gets a bad rap because of all the tech bros.",
  "I read this cool article from #tsv_forum#.",
  "Software is eating the world, whether we like it or not."
  ],

"re_condo": "condo apartment house".split(" "),
"re_guilty": "guilty neutral helpless concerned".split(" "),
"talk_real_estate":
  ["I wish I could buy a #re_condo#.",
  "I feel #re_guilty# about being a gentrifier in my neighborhood."],
//TODO

"race_brown": "black brown yellow latinx".split(" "),
"talk_race": 
  ["Why aren't there more #race_brown# folks here?"],

"gender_trans": "trans|non-binary|queer".split("|"),
"talk_gender": ["Why aren't there more #gender_trans# folkx here?"],



"rp_leftist": "leftist|radical|emancipatory|anti-capitalist|cooperative|cooperative".split("|"),
"rp_projects": "projects|schools|financial institutions|publications|communities|platforms|technologies ".split("|"),
"rp_funding": "funding sources|organizational structures|business models".split("|"),
"rp_new": "new|innovative|unconventional".split("|"),
"rp_rhythms": "rhythms|rituals|modes of community|emotional ways|communal ways".split("|"),
"rp_ways": "ways|methods|practices".split("|"),
"rp_practical": "practical|viable|realistic|pragmatic".split("|"),
"rp_capitalist": "capitalist|conscious capitalist|compromised|".split("|"),
"rp_idealistic": "idealistic|conceptual".split("|"),

  
"talk_radical_politics":
  ["#helpers_I_think# that #rp_leftist# #rp_projects# need to have #rp_new# #rp_ways# of doing things: #rp_leftist# #rp_funding#, or #rp_new# #rp_rhythms#.",
  "I want to believe in #rp_leftist# #rp_projects#, but ultimately it comes down to #rp_funding#. Are #rp_new# #rp_ways# really #rp_practical#?",
  "I used to be #rp_leftist#, now I'm more #rp_leftist#.",
  "[thispos:#rp_leftist#]I don't care about being an #rp_idealistic# #thispos#; I just think that #rp_practical# #rp_ways# of #rp_funding# make more interesting #thispos# #rp_projects#.",
  "Diluting ideals to try to be '#rp_practical# #rp_leftist#' makes no sense - you don't get anywhere by being complicit with #rp_capitalist# #rp_funding#."],

"jl_technique": "machine learning|markov chains|neural nets|big data|cloud".split("|"),
"jl_create": "design|create|invent|auto-generate".split("|"),
"jl_apps": "apps|technologies|algorithms|choices|products".split("|"),
"jl_name_first": "beautiful|magical|wonderful|wizard|simple|expand|contract|shrink|simple".split("|"),
"jl_name_last": "soup|stew|congee|sandwich|lib|func|package|bird|nest|case".split("|"),
"jl_name": ["#jl_name_first.capitalize##jl_name_last.capitalize#"],
"talk_javascript_library": 
  ["Have you used #jl_name#? It uses #jl_technique# and #jl_technique# to #jl_create# #rp_new# #jl_apps#."],
  
"talk_literary_theory": ["#theorytalk#"],

"mt_weaponized": "weaponized|evolved|competitive|covert|secret".split("|"),
"mt_propaganda": "propaganda|intelligence|ideas|concepts".split("|"),
"mt_microorganisms": "micro-organisms|viruses|bacteria|agents".split("|"),
"mt_youknow": "you know,|well I think|literally speaking,|actually,|my pet theory is that|everyone knows|well actually,".split("|"),
"talk_meme_theory": 
  ["Fuck memes; they're so mid-2017.",
    "#mt_youknow.capitalize# memes are basically #mt_weaponized# #mt_propaganda#.",
    "#mt_youknow.capitalize# memes are like #mt_weaponized# #mt_microorganisms#, evolving with attention."],

"rest_adj": "spicy saucy umami-ful juicy subtle pungent sour sweet bitter".split(" "),
"rest_dish": "balut|massaman curry|khao soi|banh mi|croissant|escargot|congee|gochujang|bulgogi|tuna casserole|jello shot|veggie burger|inception pizza|artisanal broth|buddha bowl|kale chips|empanadas".split("|"),
"rest_cook": "pickled|stewed|pressure-cooked|marinated|deep-fried|steamed|baked|foamed|distilled|frozen|blended".split("|"), 
"rest_venue": "food truck|restaurant|cafe|pop-up".split("|"),
"talk_restaurants": 
  ["I wouldn't say I'm a 'foodie', but I really like #rest_adj# #rest_dish#.",
    "Have you heard of that #rest_cook# #rest_dish# #rest_venue#?",
    "I recently had really delicious #rest_adj# #rest_adj# dish -- think a #rest_cook# #rest_dish#, except mixed with #rest_dish#."],

 
  "pg_pretty_good": "pretty good|pretty neutral|so-so|kind of conflicting|mixed".split("|"),
  "pg_org": "DSA|local community board".split("|"),
  "pg_cuomo": "Cuomo|Zuckerberg|The Rock|Letitia James|Bruce Springsteen|Nydia Velazquez|Chuck Schumer|Kirsten Gillebrand".split("|"),
  "pg_president": "president|mayor".split("|"),

  "talk_political_gossip": 
  ["I hear #pg_pretty_good# things about the #pg_org#",
  "I want to run for office, but don't know if there's space for #rp_leftist# candidates",
  "I hear a rumor that #pg_cuomo# is planning to run for #pg_president# in 2020."],


"#random_punctuation#": "!|?|.|;|...|???|!?".split("|")

};
