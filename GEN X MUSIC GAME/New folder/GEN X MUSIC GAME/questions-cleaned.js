const questions = [
  {
    "category": "MTV",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What year did MTV launch?",
    "answers": [
      "1979",
      "1981",
      "1985",
      "1990"
    ],
    "correct": 1,
    "fact": "MTV launched on August 1, 1981 at 12:01 AM. The first words spoken were 'Ladies and gentlemen, rock and roll.'"
  },
  {
    "category": "MTV",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What was the first music video played on MTV?",
    "answers": [
      "Video Killed the Radio Star",
      "Billie Jean",
      "Like a Virgin",
      "Take On Me"
    ],
    "correct": 0,
    "fact": "The Buggles' 'Video Killed the Radio Star' was the first video played when MTV launched."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Liv Tyler is the daughter of which Aerosmith member?",
    "answers": [
      "Steven Tyler",
      "Joe Perry",
      "Tom Hamilton",
      "Joey Kramer"
    ],
    "correct": 0,
    "fact": "Liv Tyler is the daughter of Aerosmith frontman Steven Tyler. She later became famous as an actress."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Alanis Morissette dated which Full House actor?",
    "answers": [
      "Bob Saget",
      "John Stamos",
      "Dave Coulier",
      "Scott Weinger"
    ],
    "correct": 2,
    "fact": "Alanis Morissette dated Dave Coulier, who played Uncle Joey on Full House."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What was the name of the family on Full House?",
    "answers": [
      "The Tanners",
      "The Banks",
      "The Walshes",
      "The Seavers"
    ],
    "correct": 0,
    "fact": "The Tanner family home became one of the most recognizable houses in 1980s and 90s sitcom history."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What was the name of Zack Morris's school on Saved by the Bell?",
    "answers": [
      "Bayside High",
      "West Beverly High",
      "McKinley High",
      "Riverdale High"
    ],
    "correct": 0,
    "fact": "Bayside High was home to Zack, Kelly, Slater, Screech, Lisa, and Jessie."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which character said the catchphrase 'How rude!' on Full House?",
    "answers": [
      "Stephanie Tanner",
      "DJ Tanner",
      "Michelle Tanner",
      "Kimmy Gibbler"
    ],
    "correct": 0,
    "fact": "Stephanie Tanner, played by Jodie Sweetin, made 'How rude!' one of the most memorable sitcom phrases of the era."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was the name of the family on Family Ties?",
    "answers": [
      "The Keatons",
      "The Huxtables",
      "The Bundys",
      "The Winslows"
    ],
    "correct": 0,
    "fact": "Family Ties introduced audiences to Michael J. Fox as Alex P. Keaton."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Easy",
    "type": "True or False",
    "question": "The Fresh Prince of Bel-Air starred Will Smith before he became a major movie star.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "The show helped launch Will Smith from rapper to one of Hollywood's biggest stars."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was the name of the coffee shop where the Friends characters hung out?",
    "answers": [
      "Central Perk",
      "Java House",
      "The Coffee Bean",
      "Monica's Cafe"
    ],
    "correct": 0,
    "fact": "Central Perk became one of the most famous fictional hangout spots in television history."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which animated family lived in Springfield?",
    "answers": [
      "The Simpsons",
      "The Griffins",
      "The Jetsons",
      "The Flintstones"
    ],
    "correct": 0,
    "fact": "The Simpsons debuted as a short on The Tracey Ullman Show before becoming a full series."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "What was the name of the family on Growing Pains?",
    "answers": [
      "The Seavers",
      "The Winslows",
      "The Andersons",
      "The Taylors"
    ],
    "correct": 0,
    "fact": "Growing Pains starred Kirk Cameron as Mike Seaver and was a major 80s family sitcom."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which show featured the character ALF, an alien who loved eating cats?",
    "answers": [
      "ALF",
      "Mork & Mindy",
      "Perfect Strangers",
      "Family Matters"
    ],
    "correct": 0,
    "fact": "ALF was a huge late-80s hit about a wisecracking alien living with a suburban family."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Saturday morning cartoons were a major part of many Gen X childhoods.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Many Gen X kids remember waking up, grabbing cereal, and spending Saturday mornings watching cartoons."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What car did Michael Knight drive in Knight Rider?",
    "answers": [
      "KITT",
      "Herbie",
      "General Lee",
      "DeLorean"
    ],
    "correct": 0,
    "fact": "KITT was a talking, artificially intelligent Pontiac Trans Am and one of the most memorable TV cars of the 1980s."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What was the name of the orange car in The Dukes of Hazzard?",
    "answers": [
      "General Lee",
      "KITT",
      "The A-Team Van",
      "Christine"
    ],
    "correct": 0,
    "fact": "The General Lee became one of the most famous vehicles in television history."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which sitcom followed the lives of four older friends in a New York apartment building?",
    "answers": [
      "The Golden Girls",
      "Cheers",
      "Designing Women",
      "Murder She Wrote"
    ],
    "correct": 0,
    "fact": "The Golden Girls became a beloved show for multiple generations and remains popular today."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What bar was the main hangout on Cheers?",
    "answers": [
      "Cheers",
      "Central Perk",
      "The Max",
      "The Peach Pit"
    ],
    "correct": 0,
    "fact": "The show's famous theme song reminded viewers that sometimes everybody just needs a place where everybody knows your name."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What was the name of the family on Family Matters?",
    "answers": [
      "The Winslows",
      "The Tanners",
      "The Keatons",
      "The Conners"
    ],
    "correct": 0,
    "fact": "Family Matters introduced the world to Steve Urkel and his unforgettable catchphrase: 'Did I do that?'"
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show featured the character Al Bundy?",
    "answers": [
      "Married... With Children",
      "Roseanne",
      "Home Improvement",
      "Cheers"
    ],
    "correct": 0,
    "fact": "Al Bundy was a frustrated shoe salesman and one of the most recognizable sitcom dads of the late 80s and 90s."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "TGIF was a popular Friday night lineup on ABC.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "TGIF gave Gen X kids and teens shows like Full House, Family Matters, Step by Step, and Boy Meets World."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which show featured the character Tim 'The Tool Man' Taylor?",
    "answers": [
      "Home Improvement",
      "Growing Pains",
      "Coach",
      "Who's the Boss?"
    ],
    "correct": 0,
    "fact": "Home Improvement made Tim Allen a household name and helped launch his movie career."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "What was the name of the hangout restaurant on Beverly Hills, 90210?",
    "answers": [
      "The Peach Pit",
      "The Max",
      "Central Perk",
      "Monk's Cafe"
    ],
    "correct": 0,
    "fact": "The Peach Pit was where the 90210 gang spent countless hours during the show's run."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show starred a teenage witch named Sabrina Spellman?",
    "answers": [
      "Sabrina the Teenage Witch",
      "Charmed",
      "Buffy the Vampire Slayer",
      "Bewitched"
    ],
    "correct": 0,
    "fact": "Sabrina the Teenage Witch became a popular late-90s show starring Melissa Joan Hart."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Easy",
    "type": "True or False",
    "question": "Gen X kids often had to be home when the street lights came on.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Before cell phones and constant check-ins, many kids knew the street lights were the universal signal that playtime was over."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What did many Gen X kids use to record songs from the radio?",
    "answers": [
      "Cassette tapes",
      "USB drives",
      "Streaming apps",
      "CD burners"
    ],
    "correct": 0,
    "fact": "The struggle was real: waiting for the DJ to stop talking before hitting record."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did you often do after renting a VHS movie?",
    "answers": [
      "Rewind it before returning it",
      "Download it",
      "Stream it",
      "Save it online"
    ],
    "correct": 0,
    "fact": "Blockbuster famously charged late fees for tapes returned without being rewound."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which store was a legendary place for renting movies in the 1990s?",
    "answers": [
      "Blockbuster",
      "Netflix",
      "Hulu",
      "Spotify"
    ],
    "correct": 0,
    "fact": "Friday night Blockbuster trips were a major Gen X weekend tradition."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Before smartphones, how did many people know someone's phone number?",
    "answers": [
      "They memorized it",
      "They scanned a QR code",
      "They checked social media",
      "They asked Siri"
    ],
    "correct": 0,
    "fact": "Gen X kids often memorized dozens of phone numbers because there was no contact list to save them."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What was a popular way to communicate with friends before texting?",
    "answers": [
      "Calling the house phone",
      "Sending a DM",
      "Video chatting",
      "Messaging apps"
    ],
    "correct": 0,
    "fact": "Many Gen X kids had to call a friend's house and survive the awkward parent answering first."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids had never heard of the internet during their childhood.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Most Gen X kids grew up before the internet became part of everyday life."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What was a popular after-school snack for many Gen X kids?",
    "answers": [
      "Fruit Roll-Ups",
      "Protein bars",
      "Smoothie bowls",
      "Energy drinks"
    ],
    "correct": 0,
    "fact": "Fruit Roll-Ups, Gushers, Pop Rocks, and other snacks were huge childhood memories."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Where did many teenagers spend hours hanging out in the 1980s and 90s?",
    "answers": [
      "The mall",
      "The coworking space",
      "The airport lounge",
      "The office"
    ],
    "correct": 0,
    "fact": "The mall was the social media of Gen X. You went there to see who was around."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "What did kids use to look up phone numbers before the internet?",
    "answers": [
      "The phone book",
      "Google",
      "Alexa",
      "Facebook"
    ],
    "correct": 0,
    "fact": "The giant white pages and yellow pages were household essentials."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which video game system was extremely popular with Gen X kids in the 1980s?",
    "answers": [
      "Nintendo Entertainment System",
      "PlayStation 5",
      "Xbox Series X",
      "Meta Quest"
    ],
    "correct": 0,
    "fact": "The original Nintendo Entertainment System helped define childhood gaming for an entire generation."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What handheld Nintendo game became famous for saving Princess Zelda?",
    "answers": [
      "Game Boy",
      "Zelda Game & Watch",
      "Virtual Boy",
      "GameCube"
    ],
    "correct": 0,
    "fact": "The Game Boy became one of the most successful handheld systems ever released."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What school supply was famous for having colorful folders and designs?",
    "answers": [
      "Trapper Keeper",
      "iPad",
      "Binder Pro",
      "Smart Notebook"
    ],
    "correct": 0,
    "fact": "Trapper Keepers were a must-have school supply for many Gen X students."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which brand was famous for colorful stickers, notebooks, and school supplies?",
    "answers": [
      "Lisa Frank",
      "Apple",
      "Polaroid",
      "Fisher-Price"
    ],
    "correct": 0,
    "fact": "Lisa Frank designs featuring bright colors and animals were everywhere in the 80s and 90s."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What toy involved collecting and trading round cardboard pieces?",
    "answers": [
      "Pogs",
      "Beanie Babies",
      "Yo-yos",
      "Hot Wheels"
    ],
    "correct": 0,
    "fact": "Pogs became a huge 1990s playground craze, with kids trading and battling for favorite pieces."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was the name of the virtual pet craze from the late 1990s?",
    "answers": [
      "Tamagotchi",
      "Furby Phone",
      "Pocket Pal",
      "Cyber Puppy"
    ],
    "correct": 0,
    "fact": "Tamagotchis had kids carrying tiny digital pets everywhere and trying to keep them alive."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Easy",
    "type": "True or False",
    "question": "Many Gen X kids recorded songs onto cassette tapes to make mixtapes.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Making a perfect mixtape required patience, timing, and hoping the DJ didn't talk over the beginning of the song."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What toy became famous for being a stretchy purple goo-like toy?",
    "answers": [
      "Slime",
      "Furby",
      "Skip-It",
      "Cabbage Patch Kid"
    ],
    "correct": 0,
    "fact": "Slime and similar goo toys were a huge part of 1980s toy culture."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Saturday morning activity was a classic Gen X tradition?",
    "answers": [
      "Watching cartoons with cereal",
      "Checking email",
      "Playing online games",
      "Streaming shows"
    ],
    "correct": 0,
    "fact": "Saturday morning cartoons with a bowl of cereal is one of the strongest Gen X childhood memories."
  },
  {
    "category": "Gen X Memories",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "What did many kids use before calculators became common in every classroom?",
    "answers": [
      "Pencil and paper math",
      "Smartphones",
      "AI assistants",
      "Tablet computers"
    ],
    "correct": 0,
    "fact": "Gen X students grew up doing many things manually that later generations automated."
  },
  {
    "category": "Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured the famous line 'Bueller? Bueller?'",
    "answers": [
      "Ferris Bueller's Day Off",
      "The Breakfast Club",
      "Pretty in Pink",
      "Sixteen Candles"
    ],
    "correct": 0,
    "fact": "Ferris Bueller's Day Off became one of the most quoted teen movies of the 1980s."
  },
  {
    "category": "Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "In The Karate Kid, what martial arts move does Daniel use to win the tournament?",
    "answers": [
      "Crane Kick",
      "Roundhouse Kick",
      "Flying Dragon",
      "Power Punch"
    ],
    "correct": 0,
    "fact": "The crane kick became one of the most recognizable movie moments of the 1980s."
  },
  {
    "category": "Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was Marty McFly's time-traveling car in Back to the Future?",
    "answers": [
      "DeLorean",
      "Mustang",
      "Camaro",
      "Corvette"
    ],
    "correct": 0,
    "fact": "The DeLorean time machine became one of the most iconic vehicles in movie history."
  },
  {
    "category": "Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured the song 'Don't You Forget About Me'?",
    "answers": [
      "The Breakfast Club",
      "Dirty Dancing",
      "Footloose",
      "Top Gun"
    ],
    "correct": 0,
    "fact": "Simple Minds' song became permanently connected to the legendary ending of The Breakfast Club."
  },
  {
    "category": "Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Who played Baby in Dirty Dancing?",
    "answers": [
      "Jennifer Grey",
      "Molly Ringwald",
      "Winona Ryder",
      "Demi Moore"
    ],
    "correct": 0,
    "fact": "Jennifer Grey starred alongside Patrick Swayze in one of the most beloved romance movies of the 1980s."
  },
  {
    "category": "Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured the character Maverick, a Navy pilot?",
    "answers": [
      "Top Gun",
      "Road House",
      "Rambo",
      "Over the Top"
    ],
    "correct": 0,
    "fact": "Top Gun turned Tom Cruise into one of the biggest movie stars in the world."
  },
  {
    "category": "Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What group of kids searched for treasure in The Goonies?",
    "answers": [
      "Friends from Astoria",
      "Military recruits",
      "Space explorers",
      "Detectives"
    ],
    "correct": 0,
    "fact": "The Goonies became a defining adventure movie for an entire generation."
  },
  {
    "category": "Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actress became famous for 1980s teen movies like Sixteen Candles and Pretty in Pink?",
    "answers": [
      "Molly Ringwald",
      "Julia Roberts",
      "Meg Ryan",
      "Michelle Pfeiffer"
    ],
    "correct": 0,
    "fact": "Molly Ringwald became one of the biggest teen movie stars of the 1980s."
  },
  {
    "category": "Movies",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "In A Christmas Story, what gift did Ralphie desperately want?",
    "answers": [
      "Red Ryder BB gun",
      "New bicycle",
      "Video game system",
      "Toy train"
    ],
    "correct": 0,
    "fact": "A Christmas Story became a holiday tradition for many Gen X families."
  },
  {
    "category": "Movies",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "The movie E.T. featured a young Drew Barrymore.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "E.T. helped make Drew Barrymore a child star and became one of the highest-grossing films of its era."
  },
  {
    "category": "Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured the character Baby and the famous line 'Nobody puts Baby in a corner'?",
    "answers": [
      "Dirty Dancing",
      "Footloose",
      "Flashdance",
      "Pretty in Pink"
    ],
    "correct": 0,
    "fact": "Patrick Swayze and Jennifer Grey starred in one of the most loved dance movies of the 1980s."
  },
  {
    "category": "Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was the name of the alien in E.T.?",
    "answers": [
      "E.T.",
      "ALF",
      "Yoda",
      "Critter"
    ],
    "correct": 0,
    "fact": "E.T. became one of the most recognizable movie characters in history."
  },
  {
    "category": "Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which 1984 movie featured a group of kids battling ghosts?",
    "answers": [
      "Ghostbusters",
      "Gremlins",
      "Beetlejuice",
      "Poltergeist"
    ],
    "correct": 0,
    "fact": "Ghostbusters became a massive hit and one of the most quoted movies of the decade."
  },
  {
    "category": "Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What was the name of the villain in The Karate Kid?",
    "answers": [
      "Johnny Lawrence",
      "Daniel LaRusso",
      "Mr. Miyagi",
      "Ali Mills"
    ],
    "correct": 0,
    "fact": "Johnny was the leader of Cobra Kai before later becoming one of the most interesting characters in the Cobra Kai series."
  },
  {
    "category": "Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured the character Ferris Bueller skipping school for a day?",
    "answers": [
      "Ferris Bueller's Day Off",
      "Risky Business",
      "Fast Times at Ridgemont High",
      "Can't Buy Me Love"
    ],
    "correct": 0,
    "fact": "Ferris Bueller became the ultimate cool teenager who knew how to enjoy a day off."
  },
  {
    "category": "Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What holiday movie featured Kevin McCallister defending his house from burglars?",
    "answers": [
      "Home Alone",
      "The Santa Clause",
      "Jingle All the Way",
      "National Lampoon's Christmas Vacation"
    ],
    "correct": 0,
    "fact": "Home Alone became a massive hit and made Macaulay Culkin a household name."
  },
  {
    "category": "Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured a character named Beetlejuice who was summoned by saying his name three times?",
    "answers": [
      "Beetlejuice",
      "Ghostbusters",
      "Gremlins",
      "Edward Scissorhands"
    ],
    "correct": 0,
    "fact": "Tim Burton's Beetlejuice became a cult classic with its strange humor and unforgettable style."
  },
  {
    "category": "Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie starred Tom Cruise as Joel Goodson dancing in his underwear?",
    "answers": [
      "Risky Business",
      "Top Gun",
      "Cocktail",
      "Rain Man"
    ],
    "correct": 0,
    "fact": "The famous underwear dance scene became one of the most iconic movie moments of the 1980s."
  },
  {
    "category": "Movies",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which 1980s movie featured a young boy named Josh who wished to become an adult overnight?",
    "answers": [
      "Big",
      "Stand By Me",
      "The Outsiders",
      "WarGames"
    ],
    "correct": 0,
    "fact": "Tom Hanks starred in Big, which became one of his breakout roles."
  },
  {
    "category": "Movies",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "The movie Gremlins came with a warning not to feed the creatures after midnight.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "The Gremlins rules became part of pop culture, especially the famous midnight feeding warning."
  },
  {
    "category": "90s TV",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What coffee shop did the characters hang out at on Friends?",
    "answers": [
      "Central Perk",
      "The Peach Pit",
      "Monk's Cafe",
      "Cheers"
    ],
    "correct": 0,
    "fact": "Central Perk became one of the most famous fictional hangout spots in television history."
  },
  {
    "category": "90s TV",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was Jerry Seinfeld's profession on Seinfeld?",
    "answers": [
      "Comedian",
      "Doctor",
      "Teacher",
      "Lawyer"
    ],
    "correct": 0,
    "fact": "The show was famously described as a show about nothing, built around everyday observations."
  },
  {
    "category": "90s TV",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which show featured the character Cory Matthews?",
    "answers": [
      "Boy Meets World",
      "Saved by the Bell",
      "Family Matters",
      "Growing Pains"
    ],
    "correct": 0,
    "fact": "Boy Meets World followed Cory from middle school through adulthood and became a major Gen X favorite."
  },
  {
    "category": "90s TV",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was the name of the fictional high school on Beverly Hills, 90210?",
    "answers": [
      "West Beverly High",
      "Bayside High",
      "Sunnydale High",
      "McKinley High"
    ],
    "correct": 0,
    "fact": "West Beverly High was where the Walsh twins and their friends navigated teenage life."
  },
  {
    "category": "90s TV",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which MTV show followed real people living together in a house?",
    "answers": [
      "The Real World",
      "Road Rules",
      "Cribs",
      "TRL"
    ],
    "correct": 0,
    "fact": "The Real World helped create the reality TV genre and became a defining MTV show."
  },
  {
    "category": "90s TV",
    "difficulty": "Easy",
    "type": "True or False",
    "question": "Beavis and Butt-Head aired on MTV.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Beavis and Butt-Head became one of MTV's most controversial and recognizable animated shows."
  },
  {
    "category": "90s TV",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Nickelodeon show featured the characters Tommy, Chuckie, Phil, and Lil?",
    "answers": [
      "Rugrats",
      "Doug",
      "Hey Arnold!",
      "Ren & Stimpy"
    ],
    "correct": 0,
    "fact": "Rugrats became one of Nickelodeon's biggest animated hits."
  },
  {
    "category": "90s TV",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What was the name of the kid genius on Family Matters?",
    "answers": [
      "Steve Urkel",
      "Will Smith",
      "Screech",
      "ALF"
    ],
    "correct": 0,
    "fact": "Steve Urkel became one of the most famous sitcom characters of the 1990s."
  },
  {
    "category": "90s TV",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "What was the name of the high school on Buffy the Vampire Slayer?",
    "answers": [
      "Sunnydale High",
      "Riverdale High",
      "West Beverly High",
      "Bayside High"
    ],
    "correct": 0,
    "fact": "Sunnydale High sat on top of a mystical portal, making it a very unusual place to attend school."
  },
  {
    "category": "90s TV",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "The X-Files popularized the phrase 'The truth is out there.'",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "The X-Files became one of the biggest science-fiction shows of the 1990s."
  },
  {
    "category": "Gen X Food",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which snack came in a plastic tube and was popular in the 1980s?",
    "answers": [
      "Push Pops",
      "Fruit Roll-Ups",
      "Pop-Tarts",
      "Ring Pops"
    ],
    "correct": 0,
    "fact": "Push Pops let kids eat candy a little at a time and then save it for later."
  },
  {
    "category": "Gen X Food",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cereal mascot said 'They're magically delicious'?",
    "answers": [
      "Lucky the Leprechaun",
      "Toucan Sam",
      "Tony the Tiger",
      "Captain Crunch"
    ],
    "correct": 0,
    "fact": "Lucky Charms debuted in 1964, but many Gen X kids grew up with Lucky as a Saturday morning cereal icon."
  },
  {
    "category": "Gen X Food",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What fast food chain was known for the slogan 'Have it your way'?",
    "answers": [
      "Burger King",
      "McDonald's",
      "Wendy's",
      "Taco Bell"
    ],
    "correct": 0,
    "fact": "Burger King's 'Have it your way' campaign became one of the most recognizable fast food slogans."
  },
  {
    "category": "Gen X Food",
    "difficulty": "Easy",
    "type": "True or False",
    "question": "Many Gen X kids remember Pop Rocks candy.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Pop Rocks became famous for the popping sensation when the candy melted in your mouth."
  },
  {
    "category": "Gen X Food",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which fast food restaurant had the mascot Ronald McDonald?",
    "answers": [
      "McDonald's",
      "Wendy's",
      "Burger King",
      "Arby's"
    ],
    "correct": 0,
    "fact": "Ronald McDonald became one of the most recognizable advertising mascots in the world."
  },
  {
    "category": "Gen X Food",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What drink mix came in little packets that kids mixed with water?",
    "answers": [
      "Kool-Aid",
      "SunnyD",
      "Crystal Pepsi",
      "Hi-C"
    ],
    "correct": 0,
    "fact": "Kool-Aid became a childhood staple, especially with the famous Kool-Aid Man commercials."
  },
  {
    "category": "Gen X Food",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which candy was famous for being a long strip of flavored candy rolled up?",
    "answers": [
      "Fruit Roll-Ups",
      "Skittles",
      "Twix",
      "Smarties"
    ],
    "correct": 0,
    "fact": "Fruit Roll-Ups were a huge lunchbox and after-school snack favorite."
  },
  {
    "category": "Gen X Food",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which soda caused a huge debate when it launched in the 1990s?",
    "answers": [
      "Crystal Pepsi",
      "New Coke",
      "Surge",
      "Slice"
    ],
    "correct": 0,
    "fact": "Crystal Pepsi became one of the most remembered failed product launches of the 1990s."
  },
  {
    "category": "Gen X Food",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which restaurant was famous for square hamburgers?",
    "answers": [
      "Wendy's",
      "McDonald's",
      "Burger King",
      "White Castle"
    ],
    "correct": 0,
    "fact": "Wendy's built its identity around square burgers and the 'Where's the beef?' era."
  },
  {
    "category": "Gen X Food",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Lunchables became popular in the 1990s.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Lunchables became a symbol of 90s convenience food and school lunches."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which toy was a popular electronic drawing toy that let kids create designs with two knobs?",
    "answers": [
      "Etch A Sketch",
      "Lite-Brite",
      "Simon",
      "Speak & Spell"
    ],
    "correct": 0,
    "fact": "Etch A Sketch became one of the most recognizable toys of multiple generations."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which toy used colorful pegs that lit up to create pictures?",
    "answers": [
      "Lite-Brite",
      "View-Master",
      "Fisher-Price Garage",
      "Easy-Bake Oven"
    ],
    "correct": 0,
    "fact": "Lite-Brite let kids create glowing pictures using colored plastic pegs."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which toy line featured characters like Optimus Prime?",
    "answers": [
      "Transformers",
      "He-Man",
      "GI Joe",
      "ThunderCats"
    ],
    "correct": 0,
    "fact": "Transformers became a massive 1980s franchise with toys, cartoons, and movies."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which toy brand featured characters like Strawberry Shortcake and Blueberry Muffin?",
    "answers": [
      "Strawberry Shortcake",
      "Care Bears",
      "My Little Pony",
      "Rainbow Brite"
    ],
    "correct": 0,
    "fact": "Strawberry Shortcake was one of the most popular toy characters of the late 1970s and 80s."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What toy involved collecting small colorful monsters with strange names?",
    "answers": [
      "Garbage Pail Kids",
      "Pogs",
      "Beanie Babies",
      "Cabbage Patch Kids"
    ],
    "correct": 0,
    "fact": "Garbage Pail Kids became a controversial but unforgettable playground craze."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Easy",
    "type": "True or False",
    "question": "Many Gen X kids played with Teenage Mutant Ninja Turtles toys.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "The Ninja Turtles exploded in popularity during the late 1980s and early 90s."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which toy line featured characters like He-Man and Skeletor?",
    "answers": [
      "Masters of the Universe",
      "Transformers",
      "GI Joe",
      "Power Rangers"
    ],
    "correct": 0,
    "fact": "He-Man became one of the biggest action figure franchises of the 1980s."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which doll became famous for being adopted with a unique birth certificate?",
    "answers": [
      "Cabbage Patch Kids",
      "Barbie",
      "American Girl",
      "Bratz"
    ],
    "correct": 0,
    "fact": "Cabbage Patch Kids caused huge shopping crazes and even store stampedes in the 1980s."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which toy let kids look at 3D images through a viewer?",
    "answers": [
      "View-Master",
      "Game Boy",
      "Simon",
      "Skip-It"
    ],
    "correct": 0,
    "fact": "View-Master let kids explore 3D images of everything from cartoons to famous places."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which toy challenged kids to remember a pattern of flashing colors and sounds?",
    "answers": [
      "Simon",
      "Speak & Spell",
      "Lite-Brite",
      "Operation"
    ],
    "correct": 0,
    "fact": "Simon became a classic electronic memory game in the late 1970s and 1980s."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which toy involved jumping over a spinning plastic hoop attached to your ankle?",
    "answers": [
      "Skip-It",
      "Pogo Stick",
      "Jump Rope",
      "Twister"
    ],
    "correct": 0,
    "fact": "Skip-It became a huge playground craze in the 1980s. Many kids counted how many skips they could do."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which toy was a popular way to have outdoor water fun in the summer?",
    "answers": [
      "Slip 'N Slide",
      "Easy-Bake Oven",
      "Lite-Brite",
      "Simon"
    ],
    "correct": 0,
    "fact": "Slip 'N Slide turned ordinary yards into backyard water parks for generations of kids."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which toy line featured colorful magical bears with symbols on their stomachs?",
    "answers": [
      "Care Bears",
      "My Little Pony",
      "Rainbow Brite",
      "Strawberry Shortcake"
    ],
    "correct": 0,
    "fact": "Each Care Bear had a different personality and belly badge representing their special trait."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which toy became famous for saying 'I love you' and telling stories?",
    "answers": [
      "Teddy Ruxpin",
      "Furby",
      "Tickle Me Elmo",
      "Speak & Spell"
    ],
    "correct": 0,
    "fact": "Teddy Ruxpin was one of the first popular animatronic storytelling toys."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which toy brand featured colorful horses with symbols on their sides?",
    "answers": [
      "My Little Pony",
      "Care Bears",
      "Rainbow Brite",
      "Barbie"
    ],
    "correct": 0,
    "fact": "My Little Pony became a huge toy and cartoon franchise beginning in the 1980s."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which toy company was famous for the Barbie Dream House?",
    "answers": [
      "Mattel",
      "Hasbro",
      "Fisher-Price",
      "Play-Doh"
    ],
    "correct": 0,
    "fact": "Barbie has been one of the longest-running and most successful toy brands in history."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which tiny doll line could fit inside small plastic carrying cases?",
    "answers": [
      "Polly Pocket",
      "Cabbage Patch Kids",
      "American Girl",
      "Bratz"
    ],
    "correct": 0,
    "fact": "Polly Pocket was a huge 1990s toy that many kids carried everywhere."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which toy brand was famous for soft modeling clay kids could shape?",
    "answers": [
      "Play-Doh",
      "Silly Putty",
      "Slime",
      "Floam"
    ],
    "correct": 0,
    "fact": "Play-Doh has been inspiring kids' creativity for generations."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which toy line featured tiny cars with oversized wheels?",
    "answers": [
      "Micro Machines",
      "Hot Wheels",
      "Matchbox",
      "Tonka"
    ],
    "correct": 0,
    "fact": "Micro Machines became famous for tiny vehicles and fast-paced commercials."
  },
  {
    "category": "Gen X Toys",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids played outside for hours without parents constantly checking on them.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "The unsupervised neighborhood adventures of childhood are one of the biggest Gen X nostalgia themes."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What sound did dial-up internet make while connecting?",
    "answers": [
      "A loud screeching and beeping sound",
      "A musical ringtone",
      "A voice saying hello",
      "A silent connection"
    ],
    "correct": 0,
    "fact": "The sound of dial-up connecting is one of the most recognizable memories of early internet users."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What company sent millions of free internet trial CDs in the 1990s?",
    "answers": [
      "AOL",
      "Netflix",
      "Amazon",
      "Google"
    ],
    "correct": 0,
    "fact": "AOL mailed so many trial discs that many people joked they were everywhere."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did people use to listen to music on the go before smartphones?",
    "answers": [
      "Walkman",
      "iPod",
      "Smartwatch",
      "Tablet"
    ],
    "correct": 0,
    "fact": "The Sony Walkman changed how people listened to music by making it portable."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids had to get up to change the channel on the TV.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Before universal remotes became common, the person closest to the television was often the remote control."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What device played VHS tapes?",
    "answers": [
      "VCR",
      "DVD player",
      "Cassette player",
      "Laser printer"
    ],
    "correct": 0,
    "fact": "VCRs made movie nights at home possible before streaming existed."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did people use before digital cameras became common?",
    "answers": [
      "Film cameras",
      "Smartphones",
      "Cloud storage",
      "Webcams"
    ],
    "correct": 0,
    "fact": "You had to finish the roll of film and wait to see if your pictures turned out."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "What was a floppy disk used for?",
    "answers": [
      "Saving computer files",
      "Playing music",
      "Making phone calls",
      "Watching movies"
    ],
    "correct": 0,
    "fact": "Floppy disks were one of the first ways many people stored and transferred computer files."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What device allowed people to leave recorded messages when they missed a call?",
    "answers": [
      "Answering machine",
      "PDA",
      "Pager",
      "Fax machine"
    ],
    "correct": 0,
    "fact": "Checking the answering machine was a daily ritual before voicemail became common."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did people use to send documents through phone lines?",
    "answers": [
      "Fax machine",
      "Scanner app",
      "Email",
      "Bluetooth"
    ],
    "correct": 0,
    "fact": "Fax machines were a major business technology before email took over."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "What did many people do when they wanted to know a movie time before the internet?",
    "answers": [
      "Call the theater",
      "Search Google",
      "Ask Alexa",
      "Check an app"
    ],
    "correct": 0,
    "fact": "Gen X kids remember calling places and listening to automated phone menus for information."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What device was used to listen to CDs before phones could play music?",
    "answers": [
      "Portable CD player",
      "Pager",
      "VCR",
      "Modem"
    ],
    "correct": 0,
    "fact": "Portable CD players became the next big thing after cassette Walkmans."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What computer game taught many students about settling the Oregon Trail?",
    "answers": [
      "The Oregon Trail",
      "SimCity",
      "Minesweeper",
      "Pac-Man"
    ],
    "correct": 0,
    "fact": "Many Gen X students played The Oregon Trail in school computer labs and learned that dying of dysentery was a real possibility."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What did a pager allow someone to do?",
    "answers": [
      "Receive a message or phone number",
      "Watch movies",
      "Browse websites",
      "Take pictures"
    ],
    "correct": 0,
    "fact": "Pagers were a major status symbol before cell phones became common."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids had to physically go to a friend's house to see if they were home.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Before texting and location sharing, you sometimes just showed up and knocked."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did people often use to organize their contacts before smartphones?",
    "answers": [
      "Address book",
      "Cloud storage",
      "Social media",
      "GPS"
    ],
    "correct": 0,
    "fact": "Phone numbers, addresses, and important information were often written down by hand."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "What problem happened when someone picked up the phone while another person was using dial-up internet?",
    "answers": [
      "The internet disconnected",
      "The TV turned off",
      "The computer crashed",
      "The printer stopped"
    ],
    "correct": 0,
    "fact": "A household phone call could instantly knock someone offline."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What did people use to rewind VHS tapes?",
    "answers": [
      "Rewind button",
      "Fast forward button",
      "DVD menu",
      "Streaming settings"
    ],
    "correct": 0,
    "fact": "Some stores even charged fees if you returned a VHS tape without rewinding it."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What company made the popular Walkman portable cassette player?",
    "answers": [
      "Sony",
      "Apple",
      "Nintendo",
      "Microsoft"
    ],
    "correct": 0,
    "fact": "Sony's Walkman changed music by letting people carry their favorite songs anywhere."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was a common way people shared music with friends in the 1980s and 90s?",
    "answers": [
      "Making a mixtape",
      "Sending a playlist link",
      "Sharing a streaming account",
      "Uploading to the cloud"
    ],
    "correct": 0,
    "fact": "A carefully made mixtape was basically a personal message set to music."
  },
  {
    "category": "Gen X Technology",
    "difficulty": "Hard",
    "type": "True or False",
    "question": "Before smartphones, people often used paper maps when traveling.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Getting lost and stopping to ask for directions was a normal part of road trips."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What did many students use to cover their textbooks in school?",
    "answers": [
      "Paper grocery bags",
      "Plastic tablet covers",
      "Digital cases",
      "Phone covers"
    ],
    "correct": 0,
    "fact": "Covering books with brown paper bags was a classic school tradition for many Gen X students."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Easy",
    "type": "True or False",
    "question": "Many Gen X students used handwritten notes instead of texting friends during school.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Passing notes in class was one of the original forms of secret communication."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What classroom tool displayed information onto a screen using clear plastic sheets?",
    "answers": [
      "Overhead projector",
      "Smart board",
      "Tablet",
      "Computer monitor"
    ],
    "correct": 0,
    "fact": "Overhead projectors were a daily sight in classrooms before digital technology took over."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was a common punishment for misbehaving students?",
    "answers": [
      "Detention",
      "Being blocked online",
      "Loss of phone privileges",
      "Social media ban"
    ],
    "correct": 0,
    "fact": "Many Gen X students remember sitting quietly in detention rooms after school."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What did students often carry books in before backpacks became popular?",
    "answers": [
      "Book bags",
      "Laptop cases",
      "Rolling carts",
      "Tablet sleeves"
    ],
    "correct": 0,
    "fact": "Simple book bags were a daily school essential."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which activity was a classic school dance tradition?",
    "answers": [
      "Slow dancing",
      "Online gaming",
      "Video calling",
      "Streaming movies"
    ],
    "correct": 0,
    "fact": "School dances were where many Gen X students experienced awkward first dances and crushes."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What writing tool often had a pink eraser on the end?",
    "answers": [
      "Pencil",
      "Marker",
      "Highlighter",
      "Pen"
    ],
    "correct": 0,
    "fact": "The classic yellow No. 2 pencil was a school supply staple."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did students often use to mark pages in textbooks?",
    "answers": [
      "Sticky notes",
      "Phone apps",
      "Bookmarks made from plastic screens",
      "QR codes"
    ],
    "correct": 0,
    "fact": "Sticky notes became a classroom and office favorite in the 1980s."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "What did students do before calculators were allowed for every math problem?",
    "answers": [
      "Used pencil and paper",
      "Used smartphones",
      "Asked Google",
      "Used apps"
    ],
    "correct": 0,
    "fact": "Many Gen X students learned math skills without relying on digital tools."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X students remember eating school lunches on plastic trays.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Cafeteria trays, lunch lines, and mystery menu items are classic school memories."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which playground game involved trying to avoid being hit by a ball?",
    "answers": [
      "Dodgeball",
      "Four Square",
      "Hopscotch",
      "Red Rover"
    ],
    "correct": 0,
    "fact": "Dodgeball was a classic gym class game that many Gen X students remember vividly."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which recess game used a ball and bases?",
    "answers": [
      "Kickball",
      "Tag",
      "Simon Says",
      "Jacks"
    ],
    "correct": 0,
    "fact": "Kickball was a playground favorite for generations of kids."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What company provided many school book order catalogs?",
    "answers": [
      "Scholastic",
      "Amazon",
      "Barnes & Noble",
      "Netflix"
    ],
    "correct": 0,
    "fact": "Getting the Scholastic book order was exciting because you could pick out your own books."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Easy",
    "type": "True or False",
    "question": "Many Gen X students had school pictures taken every year.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "School picture day meant awkward poses, forced smiles, and packages of prints sent home."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did many students bring to school for class parties?",
    "answers": [
      "Homemade treats",
      "Delivery apps",
      "Store gift cards",
      "Streaming subscriptions"
    ],
    "correct": 0,
    "fact": "Class parties often included homemade cookies, cupcakes, and snacks brought from home."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did students often trade or collect at school?",
    "answers": [
      "Stickers",
      "Digital badges",
      "Phone apps",
      "Online followers"
    ],
    "correct": 0,
    "fact": "Sticker collections, trading cards, and small toys were major playground currencies."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What event allowed students to leave school for an educational outing?",
    "answers": [
      "Field trip",
      "Online class",
      "Virtual tour",
      "Video meeting"
    ],
    "correct": 0,
    "fact": "Field trips were a major highlight because they meant getting out of the classroom."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What classroom item held pencils, crayons, and other supplies?",
    "answers": [
      "Pencil box",
      "Phone case",
      "Tablet cover",
      "Charging station"
    ],
    "correct": 0,
    "fact": "Decorated pencil boxes were a common school accessory."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "What did students often do when passing secret messages in class?",
    "answers": [
      "Fold notes",
      "Send texts",
      "Use social media",
      "Email friends"
    ],
    "correct": 0,
    "fact": "Folding notes into complicated shapes was practically an art form."
  },
  {
    "category": "Gen X School Days",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids remember having recess outside almost every day.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Outdoor recess was a major part of childhood before screens dominated free time."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which store was famous for selling music CDs and cassette tapes in malls?",
    "answers": [
      "Sam Goody",
      "Home Depot",
      "Target",
      "Staples"
    ],
    "correct": 0,
    "fact": "Music stores were a major part of mall culture because people wanted to browse albums before buying."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which mall store was known for quirky gifts, posters, and unusual items?",
    "answers": [
      "Spencer Gifts",
      "JCPenney",
      "Sears",
      "RadioShack"
    ],
    "correct": 0,
    "fact": "Spencer Gifts became famous for its funny, weird, and sometimes outrageous merchandise."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What dessert shop became famous for giant cinnamon rolls?",
    "answers": [
      "Cinnabon",
      "Mrs. Fields",
      "Auntie Anne's",
      "Orange Julius"
    ],
    "correct": 0,
    "fact": "The smell of Cinnabon became one of the most recognizable mall experiences."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which store was popular for jewelry and ear piercing?",
    "answers": [
      "Claire's",
      "Best Buy",
      "Foot Locker",
      "RadioShack"
    ],
    "correct": 0,
    "fact": "Claire's was a rite of passage for many Gen X girls getting their ears pierced."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What was a popular place teenagers hung out inside malls?",
    "answers": [
      "Food court",
      "Office building",
      "Library archive",
      "Parking garage"
    ],
    "correct": 0,
    "fact": "The mall food court was often the meeting place before everyone had cell phones."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X teenagers went to the mall just to hang out, even without buying anything.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "The mall was a social destination long before social media existed."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What arcade game featured a yellow character eating dots and ghosts?",
    "answers": [
      "Pac-Man",
      "Donkey Kong",
      "Galaga",
      "Frogger"
    ],
    "correct": 0,
    "fact": "Arcades were a major part of mall entertainment during the 1980s."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which store was famous for selling athletic shoes?",
    "answers": [
      "Foot Locker",
      "Claire's",
      "Spencer Gifts",
      "Bath & Body Works"
    ],
    "correct": 0,
    "fact": "Sneaker stores were a major stop for teens looking for the latest styles."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "What did people often do before buying a CD or cassette?",
    "answers": [
      "Listen to samples in the store",
      "Stream it online",
      "Download it",
      "Watch reviews on YouTube"
    ],
    "correct": 0,
    "fact": "Music stores often had listening stations where shoppers could preview albums."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "The mall was a popular teenage hangout before smartphones existed.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "For many Gen X teens, the mall was where you went to see and be seen."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which mall store was known for trendy teen clothing in the 1990s?",
    "answers": [
      "Wet Seal",
      "Home Depot",
      "Best Buy",
      "Office Depot"
    ],
    "correct": 0,
    "fact": "Wet Seal was a popular stop for 90s teens looking for trendy fashion."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which bookstore chain was commonly found in malls before online shopping?",
    "answers": [
      "Waldenbooks",
      "Amazon Books",
      "Google Books",
      "Kindle Store"
    ],
    "correct": 0,
    "fact": "Waldenbooks was a favorite stop for browsing magazines, books, and gifts."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What did many teenagers take inside mall photo booths?",
    "answers": [
      "Pictures with friends",
      "Online selfies",
      "Digital avatars",
      "Video blogs"
    ],
    "correct": 0,
    "fact": "Photo booth strips were a classic way to capture memories before smartphones."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did people collect to play arcade games at the mall?",
    "answers": [
      "Tokens",
      "QR codes",
      "App credits",
      "Gift cards"
    ],
    "correct": 0,
    "fact": "Many arcades used tokens that kids carried around in little cups or buckets."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which store was known for selling candles and body products?",
    "answers": [
      "Bath & Body Works",
      "Sam Goody",
      "Spencer Gifts",
      "Foot Locker"
    ],
    "correct": 0,
    "fact": "Bath & Body Works became a major mall favorite during the 1990s."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which mall store sold CDs, movies, and music accessories?",
    "answers": [
      "FYE",
      "PetSmart",
      "Staples",
      "HomeGoods"
    ],
    "correct": 0,
    "fact": "Music stores were a major destination before streaming changed how people discovered music."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "What was a common way teenagers communicated plans before cell phones?",
    "answers": [
      "Calling the house phone",
      "Sending a group text",
      "Using an app",
      "Posting online"
    ],
    "correct": 0,
    "fact": "Making plans required calling home phones and hoping your friend's parents didn't answer."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What food court drink shop was known for orange-flavored drinks?",
    "answers": [
      "Orange Julius",
      "Cinnabon",
      "Auntie Anne's",
      "Starbucks"
    ],
    "correct": 0,
    "fact": "Orange Julius was a classic mall food court stop for generations of shoppers."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Easy",
    "type": "True or False",
    "question": "Many Gen X teens went to the mall to meet friends rather than shop.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "The mall was a hangout, a meeting place, and entertainment all rolled into one."
  },
  {
    "category": "The Mall Era",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "What did shoppers often use before online reviews existed?",
    "answers": [
      "Word of mouth",
      "Influencer videos",
      "Social media ratings",
      "Online forums"
    ],
    "correct": 0,
    "fact": "People relied on friends, magazines, and their own experiences before the internet changed shopping."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which commercial phrase asked, 'Where's the beef?'",
    "answers": [
      "Wendy's",
      "McDonald's",
      "Burger King",
      "Taco Bell"
    ],
    "correct": 0,
    "fact": "The 1984 Wendy's campaign became one of the most famous advertising catchphrases ever."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which commercial featured the phrase 'I can't believe I ate the whole thing'?",
    "answers": [
      "Alka-Seltzer",
      "Pepto-Bismol",
      "Rolaids",
      "Tums"
    ],
    "correct": 0,
    "fact": "The Alka-Seltzer commercial became famous for its catchy phrase and memorable character."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which commercial featured the phrase 'Calgon, take me away!'?",
    "answers": [
      "Calgon bath products",
      "Tide detergent",
      "Dial soap",
      "Pantene shampoo"
    ],
    "correct": 0,
    "fact": "The phrase became a popular way to jokingly describe needing a break."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which product was advertised with the phrase 'I've fallen and I can't get up'?",
    "answers": [
      "Life Alert",
      "Medical bracelet",
      "Emergency phone",
      "First aid kit"
    ],
    "correct": 0,
    "fact": "The Life Alert commercial phrase became one of the most recognizable lines in advertising history."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which commercial featured a device that turned lights on and off with the clap?",
    "answers": [
      "The Clapper",
      "Easy Button",
      "Swiffer",
      "Roomba"
    ],
    "correct": 0,
    "fact": "The Clapper was one of the most memorable late-night infomercial products."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which donut company featured the phrase 'Time to make the donuts'?",
    "answers": [
      "Dunkin' Donuts",
      "Krispy Kreme",
      "Hostess",
      "Little Debbie"
    ],
    "correct": 0,
    "fact": "The tired baker in the Dunkin' Donuts commercials became a pop culture icon."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which toy commercial asked, 'Do you know what time it is? It's ___ time!'?",
    "answers": [
      "Yo-Yo",
      "Barbie",
      "Transformers",
      "Hot Wheels"
    ],
    "correct": 0,
    "fact": "Many toy commercials from the 80s became as memorable as the toys themselves."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which candy commercial featured the phrase 'Mikey likes it'?",
    "answers": [
      "Life cereal",
      "Cheerios",
      "Frosted Flakes",
      "Cocoa Puffs"
    ],
    "correct": 0,
    "fact": "The Life cereal commercial featuring Mikey became one of the most remembered ads of the era."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which commercial character said 'Don't squeeze the Charmin'?",
    "answers": [
      "Mr. Whipple",
      "Mr. Clean",
      "The Kool-Aid Man",
      "Tony the Tiger"
    ],
    "correct": 0,
    "fact": "Mr. Whipple became one of the longest-running advertising characters."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids knew commercial jingles by heart.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Before streaming and skipping ads, commercials were a major part of childhood culture."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cereal mascot said 'They're Grrrreat!'?",
    "answers": [
      "Tony the Tiger",
      "Toucan Sam",
      "Lucky the Leprechaun",
      "Cap'n Crunch"
    ],
    "correct": 0,
    "fact": "Tony the Tiger became one of the most recognizable cereal mascots in advertising history."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cereal slogan was 'Snap! Crackle! Pop!'?",
    "answers": [
      "Rice Krispies",
      "Cheerios",
      "Lucky Charms",
      "Corn Flakes"
    ],
    "correct": 0,
    "fact": "The three Rice Krispies characters became famous for representing the sound of the cereal."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which coffee slogan was 'The best part of waking up...'?",
    "answers": [
      "Folgers",
      "Maxwell House",
      "Eight O'Clock Coffee",
      "Chock full o'Nuts"
    ],
    "correct": 0,
    "fact": "The Folgers jingle became one of the most recognized advertising songs."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which character burst through walls shouting 'Oh yeah!'?",
    "answers": [
      "Kool-Aid Man",
      "Mr. Clean",
      "Tony the Tiger",
      "Pillsbury Doughboy"
    ],
    "correct": 0,
    "fact": "The Kool-Aid Man crashing through walls became one of the most memorable commercials of the 80s."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which candy commercial asked how many licks it takes to get to the center?",
    "answers": [
      "Tootsie Pop",
      "Dum Dum",
      "Blow Pop",
      "Ring Pop"
    ],
    "correct": 0,
    "fact": "The Tootsie Pop owl commercial has been running for decades."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cereal featured 'two scoops of raisins'?",
    "answers": [
      "Raisin Bran",
      "Special K",
      "Life",
      "Chex"
    ],
    "correct": 0,
    "fact": "The phrase became one of the most recognizable cereal slogans."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which company used the phrase 'Can you hear me now?'?",
    "answers": [
      "Verizon",
      "AT&T",
      "Sprint",
      "T-Mobile"
    ],
    "correct": 0,
    "fact": "The Verizon guy and his repeated phrase became a major early 2000s advertising memory."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which coffee brand used the slogan 'Good to the last drop'?",
    "answers": [
      "Maxwell House",
      "Folgers",
      "Starbucks",
      "Dunkin' Donuts"
    ],
    "correct": 0,
    "fact": "Maxwell House used one of advertising's longest-running slogans."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which candy commercial featured the phrase 'The freshmaker'?",
    "answers": [
      "Mentos",
      "Skittles",
      "Starburst",
      "Twix"
    ],
    "correct": 0,
    "fact": "Mentos commercials became famous for their strange but memorable storylines."
  },
  {
    "category": "Gen X Commercials",
    "difficulty": "Easy",
    "type": "True or False",
    "question": "Before streaming, kids often watched commercials during Saturday morning cartoons.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Saturday morning cartoons and commercials were a major part of childhood routines for Gen X."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What was the first music video ever played on MTV?",
    "answers": [
      "Video Killed the Radio Star",
      "Billie Jean",
      "Money for Nothing",
      "Like a Virgin"
    ],
    "correct": 0,
    "fact": "MTV launched on August 1, 1981 and began with The Buggles' 'Video Killed the Radio Star.'"
  },
  {
    "category": "Music & MTV",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Michael Jackson video helped change MTV forever with its movie-like style?",
    "answers": [
      "Thriller",
      "Beat It",
      "Black or White",
      "Bad"
    ],
    "correct": 0,
    "fact": "The Thriller video was nearly 14 minutes long and became one of the most influential music videos ever made."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which artist was known as the 'Material Girl'?",
    "answers": [
      "Madonna",
      "Cyndi Lauper",
      "Whitney Houston",
      "Pat Benatar"
    ],
    "correct": 0,
    "fact": "Madonna's 1985 hit 'Material Girl' became one of her signature songs and nicknames."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which band sang 'Livin' on a Prayer'?",
    "answers": [
      "Bon Jovi",
      "Journey",
      "Def Leppard",
      "Poison"
    ],
    "correct": 0,
    "fact": "Bon Jovi's anthem became one of the biggest sing-along rock songs of the 1980s."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which singer was known for the outrageous outfits and the song 'Girls Just Want to Have Fun'?",
    "answers": [
      "Cyndi Lauper",
      "Pat Benatar",
      "Tina Turner",
      "Belinda Carlisle"
    ],
    "correct": 0,
    "fact": "Cyndi Lauper became one of the most recognizable voices and styles of the 1980s."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band featured brothers Eddie and Alex Van Halen?",
    "answers": [
      "Van Halen",
      "Bon Jovi",
      "Aerosmith",
      "Journey"
    ],
    "correct": 0,
    "fact": "Eddie Van Halen was considered one of the greatest guitarists in rock history."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which artist performed the famous moonwalk dance move?",
    "answers": [
      "Michael Jackson",
      "Prince",
      "MC Hammer",
      "Usher"
    ],
    "correct": 0,
    "fact": "Michael Jackson introduced the moonwalk to millions during the Motown 25 television special."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which band released the album 'Purple Rain'?",
    "answers": [
      "Prince and The Revolution",
      "U2",
      "Queen",
      "INXS"
    ],
    "correct": 0,
    "fact": "Purple Rain became one of the most successful albums and movies of the 1980s."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "MTV originally stood for Music Television.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "MTV's original purpose was to play music videos introduced by video jockeys, or VJs."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which singer was the lead vocalist of Aerosmith and father of actress Liv Tyler?",
    "answers": [
      "Steven Tyler",
      "Joe Perry",
      "David Lee Roth",
      "Jon Bon Jovi"
    ],
    "correct": 0,
    "fact": "Steven Tyler's daughter Liv Tyler became a successful actress known for movies like Armageddon and The Lord of the Rings."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Alanis Morissette famously dated which Full House actor?",
    "answers": [
      "Dave Coulier",
      "John Stamos",
      "Bob Saget",
      "Scott Weinger"
    ],
    "correct": 0,
    "fact": "Many fans believe Alanis Morissette's song 'You Oughta Know' was inspired by her breakup with Dave Coulier, though details have always been debated."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which rapper had the hit song 'Ice Ice Baby'?",
    "answers": [
      "Vanilla Ice",
      "MC Hammer",
      "LL Cool J",
      "Coolio"
    ],
    "correct": 0,
    "fact": "'Ice Ice Baby' became the first hip-hop single to reach number one on the Billboard Hot 100."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which artist was famous for the song 'U Can't Touch This'?",
    "answers": [
      "MC Hammer",
      "Vanilla Ice",
      "Run-D.M.C.",
      "Salt-N-Pepa"
    ],
    "correct": 0,
    "fact": "MC Hammer's signature dance moves and parachute pants became a huge part of early 90s pop culture."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which boy band sang 'I Want It That Way'?",
    "answers": [
      "Backstreet Boys",
      "NSYNC",
      "98 Degrees",
      "Boyz II Men"
    ],
    "correct": 0,
    "fact": "The Backstreet Boys became one of the best-selling boy bands in music history."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which group featured Justin Timberlake before his solo career?",
    "answers": [
      "NSYNC",
      "New Kids on the Block",
      "Boyz II Men",
      "Color Me Badd"
    ],
    "correct": 0,
    "fact": "NSYNC became one of the biggest pop groups of the late 1990s and early 2000s."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which group was involved in the famous lip-syncing scandal after winning a Grammy?",
    "answers": [
      "Milli Vanilli",
      "Wham!",
      "New Kids on the Block",
      "Culture Club"
    ],
    "correct": 0,
    "fact": "Milli Vanilli's Grammy was revoked after it was revealed they did not perform the vocals on their recordings."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which MTV show featured artists performing stripped-down acoustic versions of songs?",
    "answers": [
      "MTV Unplugged",
      "TRL",
      "Headbangers Ball",
      "Yo! MTV Raps"
    ],
    "correct": 0,
    "fact": "MTV Unplugged created legendary performances from artists across many genres."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which MTV countdown show became famous for fans voting for videos?",
    "answers": [
      "Total Request Live",
      "MTV Cribs",
      "Jackass",
      "Road Rules"
    ],
    "correct": 0,
    "fact": "TRL became a daily ritual for many teenagers in the late 1990s."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which genre became huge in the early 1990s with bands like Nirvana and Pearl Jam?",
    "answers": [
      "Grunge",
      "Disco",
      "New Wave",
      "Country Pop"
    ],
    "correct": 0,
    "fact": "Grunge changed the sound and style of popular music in the early 1990s."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Hard",
    "type": "True or False",
    "question": "Before music streaming, many fans waited for their favorite songs to appear on the radio.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Gen X music fans remember recording songs off the radio and hoping the DJ didn't interrupt."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which band sang 'Pour Some Sugar on Me'?",
    "answers": [
      "Def Leppard",
      "Poison",
      "Bon Jovi",
      "Motley Crue"
    ],
    "correct": 0,
    "fact": "Def Leppard became one of the biggest bands of the 1980s hair metal era."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band was known for the song 'Every Rose Has Its Thorn'?",
    "answers": [
      "Poison",
      "Whitesnake",
      "Warrant",
      "Skid Row"
    ],
    "correct": 0,
    "fact": "Poison became one of the defining glam metal bands of the late 1980s."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band released the song 'Smells Like Teen Spirit'?",
    "answers": [
      "Nirvana",
      "Pearl Jam",
      "Soundgarden",
      "Stone Temple Pilots"
    ],
    "correct": 0,
    "fact": "'Smells Like Teen Spirit' helped launch grunge into the mainstream."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which female singer had the hit song 'Man! I Feel Like a Woman!'?",
    "answers": [
      "Shania Twain",
      "Alanis Morissette",
      "Jewel",
      "Faith Hill"
    ],
    "correct": 0,
    "fact": "Shania Twain became one of the biggest crossover country-pop stars of the 1990s."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which singer was known for the hit 'Nothing Compares 2 U'?",
    "answers": [
      "Sinéad O'Connor",
      "Paula Abdul",
      "Whitney Houston",
      "Sheryl Crow"
    ],
    "correct": 0,
    "fact": "Sinéad O'Connor's emotional performance became one of the most memorable videos of the era."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which band had the hit 'Wake Me Up Before You Go-Go'?",
    "answers": [
      "Wham!",
      "Duran Duran",
      "Culture Club",
      "INXS"
    ],
    "correct": 0,
    "fact": "Wham! became one of the biggest pop acts of the 1980s."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which artist released the album 'Jagged Little Pill'?",
    "answers": [
      "Alanis Morissette",
      "Jewel",
      "Sheryl Crow",
      "Fiona Apple"
    ],
    "correct": 0,
    "fact": "Jagged Little Pill became one of the best-selling albums of the 1990s."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which band sang 'I Want to Know What Love Is'?",
    "answers": [
      "Foreigner",
      "Journey",
      "Boston",
      "REO Speedwagon"
    ],
    "correct": 0,
    "fact": "The power ballad became one of the biggest songs of the 1980s."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which MTV personality became famous as one of the original VJs?",
    "answers": [
      "Martha Quinn",
      "Ryan Seacrest",
      "Carson Daly",
      "Jimmy Fallon"
    ],
    "correct": 0,
    "fact": "Martha Quinn was one of MTV's original faces when the channel launched."
  },
  {
    "category": "Music & MTV",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X fans recorded songs from the radio onto cassette tapes.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Making the perfect mixtape required patience, timing, and a quick finger on the record button."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actor played Danny Tanner on Full House?",
    "answers": [
      "Bob Saget",
      "John Stamos",
      "Dave Coulier",
      "Scott Weinger"
    ],
    "correct": 0,
    "fact": "Bob Saget became known as America's favorite TV dad during the run of Full House."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Who played Uncle Jesse on Full House?",
    "answers": [
      "John Stamos",
      "Bob Saget",
      "Dave Coulier",
      "Scott Baio"
    ],
    "correct": 0,
    "fact": "John Stamos' character Uncle Jesse became one of the most popular TV characters of the 1980s and 90s."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actress played Rachel Green on Friends?",
    "answers": [
      "Jennifer Aniston",
      "Courtney Cox",
      "Lisa Kudrow",
      "Courteney Love"
    ],
    "correct": 0,
    "fact": "Rachel Green helped make Jennifer Aniston one of the biggest television stars of the 1990s."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actor played the Fresh Prince on television?",
    "answers": [
      "Will Smith",
      "Martin Lawrence",
      "Alfonso Ribeiro",
      "DJ Jazzy Jeff"
    ],
    "correct": 0,
    "fact": "The Fresh Prince of Bel-Air helped launch Will Smith's acting career."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which celebrity couple was nicknamed 'Bennifer' in the early 2000s?",
    "answers": [
      "Ben Affleck and Jennifer Lopez",
      "Brad Pitt and Jennifer Aniston",
      "Justin Timberlake and Britney Spears",
      "Tom Cruise and Nicole Kidman"
    ],
    "correct": 0,
    "fact": "Bennifer became one of the first major celebrity couple nicknames covered constantly by entertainment media."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actor starred as Maverick in Top Gun?",
    "answers": [
      "Tom Cruise",
      "Val Kilmer",
      "John Travolta",
      "Patrick Swayze"
    ],
    "correct": 0,
    "fact": "Top Gun made Tom Cruise one of Hollywood's biggest stars."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Who played the character Fonzie on Happy Days?",
    "answers": [
      "Henry Winkler",
      "Ron Howard",
      "Scott Baio",
      "John Travolta"
    ],
    "correct": 0,
    "fact": "Fonzie became one of television's most iconic cool characters."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Macaulay Culkin starred in Home Alone.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Home Alone turned Macaulay Culkin into one of the most famous child stars of the 1990s."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which actor played Ferris Bueller?",
    "answers": [
      "Matthew Broderick",
      "Emilio Estevez",
      "Rob Lowe",
      "Andrew McCarthy"
    ],
    "correct": 0,
    "fact": "Ferris Bueller's Day Off became one of the defining teen movies of the 1980s."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actress played Kelly Bundy on Married... with Children?",
    "answers": [
      "Christina Applegate",
      "Jennifer Aniston",
      "Sarah Jessica Parker",
      "Melissa Joan Hart"
    ],
    "correct": 0,
    "fact": "Christina Applegate became famous as the hilarious teenage daughter on Married... with Children."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actor played the original Karate Kid, Daniel LaRusso?",
    "answers": [
      "Ralph Macchio",
      "William Zabka",
      "Patrick Swayze",
      "Emilio Estevez"
    ],
    "correct": 0,
    "fact": "Ralph Macchio became a teen icon after The Karate Kid was released in 1984."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which actress played the character Topanga on Boy Meets World?",
    "answers": [
      "Danielle Fishel",
      "Rider Strong",
      "Neve Campbell",
      "Jennie Garth"
    ],
    "correct": 0,
    "fact": "Topanga became one of the most recognizable characters from 90s teen television."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Who played the character Steve Urkel on Family Matters?",
    "answers": [
      "Jaleel White",
      "Will Smith",
      "Alfonso Ribeiro",
      "Kenan Thompson"
    ],
    "correct": 0,
    "fact": "Steve Urkel became one of the most famous sitcom characters of the 1990s."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actress played Buffy Summers in Buffy the Vampire Slayer?",
    "answers": [
      "Sarah Michelle Gellar",
      "Alyssa Milano",
      "Neve Campbell",
      "Jennifer Love Hewitt"
    ],
    "correct": 0,
    "fact": "Sarah Michelle Gellar became a major 1990s star through Buffy."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actor played Zack Morris on Saved by the Bell?",
    "answers": [
      "Mark-Paul Gosselaar",
      "Mario Lopez",
      "Dustin Diamond",
      "LeVar Burton"
    ],
    "correct": 0,
    "fact": "Zack Morris became famous for breaking the fourth wall and talking directly to the audience."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which actress starred as Clarissa Darling in Clarissa Explains It All?",
    "answers": [
      "Melissa Joan Hart",
      "Danielle Fishel",
      "Christina Ricci",
      "Mayim Bialik"
    ],
    "correct": 0,
    "fact": "Clarissa Explains It All helped define Nickelodeon's early live-action programming."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actor played Johnny Castle in Dirty Dancing?",
    "answers": [
      "Patrick Swayze",
      "Rob Lowe",
      "Kevin Bacon",
      "Richard Gere"
    ],
    "correct": 0,
    "fact": "Patrick Swayze became a superstar after Dirty Dancing and its famous dance scenes."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which actress played Wednesday Addams in the 1991 Addams Family movie?",
    "answers": [
      "Christina Ricci",
      "Winona Ryder",
      "Fairuza Balk",
      "Neve Campbell"
    ],
    "correct": 0,
    "fact": "Christina Ricci's Wednesday Addams became one of the most memorable child characters of the 1990s."
  },
  {
    "category": "Celebrity Buzz",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Before becoming a wrestler and actor, Dwayne Johnson played college football.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "The Rock played football at the University of Miami before becoming a WWE superstar and Hollywood actor."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured the character Marty McFly traveling through time?",
    "answers": [
      "Back to the Future",
      "Ferris Bueller's Day Off",
      "The Goonies",
      "Ghostbusters"
    ],
    "correct": 0,
    "fact": "Back to the Future became one of the most beloved time travel movies of all time."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured the quote 'Nobody puts Baby in a corner'?",
    "answers": [
      "Dirty Dancing",
      "Pretty Woman",
      "Footloose",
      "Flashdance"
    ],
    "correct": 0,
    "fact": "Dirty Dancing became a classic with its unforgettable dance scenes and soundtrack."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actor played Indiana Jones?",
    "answers": [
      "Harrison Ford",
      "Tom Cruise",
      "Michael J. Fox",
      "Mel Gibson"
    ],
    "correct": 0,
    "fact": "Harrison Ford became one of Hollywood's biggest stars through Indiana Jones and Star Wars."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured a group of kids searching for treasure?",
    "answers": [
      "The Goonies",
      "Stand By Me",
      "Home Alone",
      "Big"
    ],
    "correct": 0,
    "fact": "The Goonies became a defining adventure movie for many Gen X kids."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured a boy accidentally left home alone at Christmas?",
    "answers": [
      "Home Alone",
      "Jingle All the Way",
      "Problem Child",
      "Richie Rich"
    ],
    "correct": 0,
    "fact": "Home Alone became one of the highest-grossing holiday movies ever."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actor played the role of Jack in Titanic?",
    "answers": [
      "Leonardo DiCaprio",
      "Brad Pitt",
      "Matt Damon",
      "Johnny Depp"
    ],
    "correct": 0,
    "fact": "Titanic turned Leonardo DiCaprio into one of the biggest movie stars in the world."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured the line 'E.T. phone home'?",
    "answers": [
      "E.T. the Extra-Terrestrial",
      "Gremlins",
      "Alien",
      "Close Encounters"
    ],
    "correct": 0,
    "fact": "E.T. became one of Steven Spielberg's most beloved films."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured the character Ferris Bueller skipping school?",
    "answers": [
      "Ferris Bueller's Day Off",
      "The Breakfast Club",
      "Sixteen Candles",
      "Risky Business"
    ],
    "correct": 0,
    "fact": "Ferris Bueller became the ultimate symbol of teenage rebellion and freedom."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which actor played the role of The Terminator?",
    "answers": [
      "Arnold Schwarzenegger",
      "Sylvester Stallone",
      "Jean-Claude Van Damme",
      "Bruce Willis"
    ],
    "correct": 0,
    "fact": "The Terminator helped make Arnold Schwarzenegger one of the biggest action stars ever."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "The Breakfast Club featured five teenagers stuck together in Saturday detention.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "The Breakfast Club became one of the most influential teen movies of the 1980s."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured the team of ghost-catching heroes?",
    "answers": [
      "Ghostbusters",
      "Beetlejuice",
      "Gremlins",
      "Poltergeist"
    ],
    "correct": 0,
    "fact": "Ghostbusters became one of the biggest comedy hits of the 1980s."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured the character Daniel LaRusso learning karate from Mr. Miyagi?",
    "answers": [
      "The Karate Kid",
      "Rocky",
      "Footloose",
      "Vision Quest"
    ],
    "correct": 0,
    "fact": "Mr. Miyagi and Daniel became one of the most famous mentor/student relationships in movie history."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actress played Vivian in Pretty Woman?",
    "answers": [
      "Julia Roberts",
      "Meg Ryan",
      "Michelle Pfeiffer",
      "Sandra Bullock"
    ],
    "correct": 0,
    "fact": "Pretty Woman turned Julia Roberts into one of Hollywood's biggest stars."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured the famous leg lamp prize?",
    "answers": [
      "A Christmas Story",
      "Home Alone",
      "National Lampoon's Christmas Vacation",
      "Elf"
    ],
    "correct": 0,
    "fact": "The leg lamp became one of the most recognizable holiday movie props."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie warned viewers not to feed creatures after midnight?",
    "answers": [
      "Gremlins",
      "Critters",
      "Ghostbusters",
      "Beetlejuice"
    ],
    "correct": 0,
    "fact": "Gremlins mixed comedy and horror and became a huge 1980s hit."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured fighter pilots Maverick and Goose?",
    "answers": [
      "Top Gun",
      "Iron Eagle",
      "Days of Thunder",
      "Airplane!"
    ],
    "correct": 0,
    "fact": "Top Gun helped make aviator sunglasses and bomber jackets iconic again."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie starred Alicia Silverstone as Cher Horowitz?",
    "answers": [
      "Clueless",
      "She's All That",
      "Can't Buy Me Love",
      "Empire Records"
    ],
    "correct": 0,
    "fact": "Clueless became a defining fashion and teen culture movie of the 1990s."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which horror movie began with the phone call 'What's your favorite scary movie?'?",
    "answers": [
      "Scream",
      "I Know What You Did Last Summer",
      "The Craft",
      "Urban Legend"
    ],
    "correct": 0,
    "fact": "Scream helped revive the horror genre in the 1990s."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured dinosaurs brought back through science?",
    "answers": [
      "Jurassic Park",
      "Jumanji",
      "Twister",
      "Anaconda"
    ],
    "correct": 0,
    "fact": "Jurassic Park changed movie special effects forever when it was released in 1993."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Hard",
    "type": "True or False",
    "question": "The movie Stand By Me was based on a Stephen King story.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Stand By Me was adapted from Stephen King's novella 'The Body.'"
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Complete the quote: 'I'll be back' is from which movie?",
    "answers": [
      "The Terminator",
      "RoboCop",
      "Predator",
      "Die Hard"
    ],
    "correct": 0,
    "fact": "Arnold Schwarzenegger's 'I'll be back' became one of the most famous movie quotes ever."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured the quote 'Life moves pretty fast. You don't stop and look around once in a while, you could miss it.'?",
    "answers": [
      "Ferris Bueller's Day Off",
      "The Breakfast Club",
      "Pretty in Pink",
      "Say Anything"
    ],
    "correct": 0,
    "fact": "Ferris Bueller's advice became one of the most quoted lines from 80s movies."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured the character Johnny 5?",
    "answers": [
      "Short Circuit",
      "WarGames",
      "Tron",
      "Flight of the Navigator"
    ],
    "correct": 0,
    "fact": "Johnny 5 became one of the most memorable robots of the 1980s."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie starred Tom Hanks as a man stranded on an island?",
    "answers": [
      "Cast Away",
      "Big",
      "Forrest Gump",
      "Philadelphia"
    ],
    "correct": 0,
    "fact": "Tom Hanks spent much of Cast Away carrying the story almost entirely by himself."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actress played the lead role in Pretty in Pink?",
    "answers": [
      "Molly Ringwald",
      "Ally Sheedy",
      "Winona Ryder",
      "Lea Thompson"
    ],
    "correct": 0,
    "fact": "Molly Ringwald became one of the biggest teen movie stars of the 1980s."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured a boy named Kevin defending his house from burglars?",
    "answers": [
      "Home Alone",
      "Problem Child",
      "Richie Rich",
      "Dennis the Menace"
    ],
    "correct": 0,
    "fact": "Home Alone made Macaulay Culkin one of the most famous child actors in the world."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured Patrick Swayze as a ghost helping his girlfriend?",
    "answers": [
      "Ghost",
      "Road House",
      "Dirty Dancing",
      "Point Break"
    ],
    "correct": 0,
    "fact": "Ghost became one of the highest-grossing movies of 1990."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which movie featured the character 'Ace Ventura'?",
    "answers": [
      "Ace Ventura: Pet Detective",
      "The Mask",
      "Dumb and Dumber",
      "Liar Liar"
    ],
    "correct": 0,
    "fact": "The movie helped make Jim Carrey one of the biggest comedy stars of the 1990s."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured the famous line 'Show me the money!'?",
    "answers": [
      "Jerry Maguire",
      "Big",
      "Rain Man",
      "Wall Street"
    ],
    "correct": 0,
    "fact": "Cuba Gooding Jr.'s delivery of the line became a major pop culture moment."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "The movie Titanic was released in the 1990s.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Titanic was released in 1997 and became one of the biggest movies in history."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured a talking baby named Junior?",
    "answers": [
      "Look Who's Talking",
      "Three Men and a Baby",
      "Kindergarten Cop",
      "Baby's Day Out"
    ],
    "correct": 0,
    "fact": "Look Who's Talking used Bruce Willis as the voice of the baby's thoughts."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie starred Whoopi Goldberg as a fake nun?",
    "answers": [
      "Sister Act",
      "Ghost",
      "Jumpin' Jack Flash",
      "The Color Purple"
    ],
    "correct": 0,
    "fact": "Sister Act became one of Whoopi Goldberg's biggest comedy hits."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured Robin Williams as a magical board game character?",
    "answers": [
      "Jumanji",
      "Hook",
      "Mrs. Doubtfire",
      "Aladdin"
    ],
    "correct": 0,
    "fact": "Jumanji brought a mysterious board game to life with Robin Williams as Alan Parrish."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured the character Mrs. Doubtfire?",
    "answers": [
      "Mrs. Doubtfire",
      "Tootsie",
      "Big",
      "Nine Months"
    ],
    "correct": 0,
    "fact": "Robin Williams' transformation into Mrs. Doubtfire became one of his most memorable performances."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured the quote 'As if!'?",
    "answers": [
      "Clueless",
      "Mean Girls",
      "Can't Hardly Wait",
      "She's All That"
    ],
    "correct": 0,
    "fact": "Cher Horowitz's phrases helped define 1990s teen slang."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actor played the lead role in The Mask?",
    "answers": [
      "Jim Carrey",
      "Adam Sandler",
      "Eddie Murphy",
      "Mike Myers"
    ],
    "correct": 0,
    "fact": "The Mask showcased Jim Carrey's physical comedy style and launched him into superstardom."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which movie featured a kid who discovered a magical world inside a book?",
    "answers": [
      "The NeverEnding Story",
      "Labyrinth",
      "Willow",
      "The Dark Crystal"
    ],
    "correct": 0,
    "fact": "The NeverEnding Story became a fantasy favorite for many Gen X kids."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured a young boy named Elliott becoming friends with an alien?",
    "answers": [
      "E.T.",
      "Mac and Me",
      "Explorers",
      "Flight of the Navigator"
    ],
    "correct": 0,
    "fact": "E.T. became one of the most beloved family films of the 1980s."
  },
  {
    "category": "Movies 80s & 90s",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "The movie Wayne's World was based on a Saturday Night Live sketch.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Wayne's World successfully moved from SNL to the big screen and became a comedy classic."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What was the name of the character played by Will Smith on The Fresh Prince of Bel-Air?",
    "answers": [
      "Will Smith",
      "Carlton Banks",
      "Jazz",
      "Geoffrey"
    ],
    "correct": 0,
    "fact": "The Fresh Prince of Bel-Air helped turn Will Smith from rapper into television and movie superstar."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was Steve Urkel's famous catchphrase on Family Matters?",
    "answers": [
      "Did I do that?",
      "How you doin'?",
      "Whoa!",
      "What's up?"
    ],
    "correct": 0,
    "fact": "Steve Urkel became one of the most famous sitcom characters of the 1990s."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show featured Zack Morris, Kelly Kapowski, and Screech?",
    "answers": [
      "Saved by the Bell",
      "Boy Meets World",
      "Growing Pains",
      "Family Ties"
    ],
    "correct": 0,
    "fact": "Saved by the Bell became one of the defining teen shows of the late 80s and early 90s."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom followed the Conner family?",
    "answers": [
      "Roseanne",
      "Married... with Children",
      "Home Improvement",
      "Step by Step"
    ],
    "correct": 0,
    "fact": "Roseanne was one of the most popular sitcoms of the late 1980s and early 1990s."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show featured the Winslow family?",
    "answers": [
      "Family Matters",
      "Full House",
      "Fresh Prince",
      "Perfect Strangers"
    ],
    "correct": 0,
    "fact": "Family Matters started as a spinoff before Steve Urkel became the show's breakout character."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was the coffee shop called on Friends?",
    "answers": [
      "Central Perk",
      "Java House",
      "Coffee Corner",
      "The Bean"
    ],
    "correct": 0,
    "fact": "Central Perk became one of the most famous fictional hangouts in television history."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which character was known for saying 'No soup for you!' on Seinfeld?",
    "answers": [
      "The Soup Nazi",
      "George Costanza",
      "Kramer",
      "Newman"
    ],
    "correct": 0,
    "fact": "The Soup Nazi episode became one of Seinfeld's most memorable moments."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which show followed Kevin Arnold growing up in the late 1960s and early 1970s?",
    "answers": [
      "The Wonder Years",
      "Growing Pains",
      "Family Ties",
      "Boy Meets World"
    ],
    "correct": 0,
    "fact": "The Wonder Years became famous for its nostalgic storytelling and narration by adult Kevin."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actor played Tim 'The Tool Man' Taylor on Home Improvement?",
    "answers": [
      "Tim Allen",
      "Richard Karn",
      "John Goodman",
      "Bob Saget"
    ],
    "correct": 0,
    "fact": "Home Improvement helped launch Tim Allen's career as a major comedy star."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was the name of the neighbor who was always hidden behind the fence on Home Improvement?",
    "answers": [
      "Wilson",
      "Al",
      "Jill",
      "Brad"
    ],
    "correct": 0,
    "fact": "Wilson Wilson Jr. became famous for giving advice while only showing part of his face."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which show starred Kirk Cameron as Mike Seaver?",
    "answers": [
      "Growing Pains",
      "Family Ties",
      "Who's the Boss?",
      "Step by Step"
    ],
    "correct": 0,
    "fact": "Mike Seaver became one of the biggest teen characters of the 1980s."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show featured the Tanner family living in San Francisco?",
    "answers": [
      "Full House",
      "Family Matters",
      "Step by Step",
      "Perfect Strangers"
    ],
    "correct": 0,
    "fact": "Full House became one of the most recognizable family sitcoms of its era."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show followed Cory Matthews through middle school and high school?",
    "answers": [
      "Boy Meets World",
      "Saved by the Bell",
      "Dawson's Creek",
      "Freaks and Geeks"
    ],
    "correct": 0,
    "fact": "Boy Meets World followed Cory, Topanga, and Shawn from childhood into adulthood."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which show featured Balki Bartokomous saying 'Don't be ridiculous!'?",
    "answers": [
      "Perfect Strangers",
      "Cheers",
      "Night Court",
      "Taxi"
    ],
    "correct": 0,
    "fact": "Perfect Strangers was a popular ABC sitcom during the 1980s."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show featured the Huxtable family?",
    "answers": [
      "The Cosby Show",
      "A Different World",
      "Family Ties",
      "227"
    ],
    "correct": 0,
    "fact": "The Cosby Show was one of the highest-rated sitcoms of the 1980s."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show featured the Bundy family?",
    "answers": [
      "Married... with Children",
      "Roseanne",
      "Cheers",
      "Home Improvement"
    ],
    "correct": 0,
    "fact": "The Bundy family brought a very different style of comedy to sitcom television."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids watched TV shows without being able to stream episodes whenever they wanted.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Gen X had to wait for weekly episodes, reruns, and special TV events."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show followed teenagers living in Beverly Hills, California?",
    "answers": [
      "Beverly Hills 90210",
      "Melrose Place",
      "Saved by the Bell",
      "Dawson's Creek"
    ],
    "correct": 0,
    "fact": "Beverly Hills 90210 became one of the defining teen dramas of the 1990s."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actor played Dylan McKay on Beverly Hills 90210?",
    "answers": [
      "Luke Perry",
      "Jason Priestley",
      "Ian Ziering",
      "Brian Austin Green"
    ],
    "correct": 0,
    "fact": "Luke Perry became a teen heartthrob and one of the biggest stars of the 1990s."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which sitcom was set in a Boston bar called Cheers?",
    "answers": [
      "Cheers",
      "Frasier",
      "Wings",
      "Taxi"
    ],
    "correct": 0,
    "fact": "Cheers became one of television's most successful sitcoms and won numerous awards."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "What was the name of the character Kelsey Grammer played on Cheers?",
    "answers": [
      "Frasier Crane",
      "Sam Malone",
      "Norm Peterson",
      "Cliff Clavin"
    ],
    "correct": 0,
    "fact": "Frasier Crane became so popular that he received his own successful spinoff series."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show followed doctors working at a Chicago hospital?",
    "answers": [
      "ER",
      "Chicago Hope",
      "Grey's Anatomy",
      "House"
    ],
    "correct": 0,
    "fact": "ER helped launch George Clooney into major Hollywood fame."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which show investigated paranormal events with Mulder and Scully?",
    "answers": [
      "The X-Files",
      "Twin Peaks",
      "Unsolved Mysteries",
      "The Twilight Zone"
    ],
    "correct": 0,
    "fact": "The X-Files became a huge hit with its mix of science fiction, mystery, and conspiracy."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show featured the mysterious murder investigation of Laura Palmer?",
    "answers": [
      "Twin Peaks",
      "The X-Files",
      "Northern Exposure",
      "Murder, She Wrote"
    ],
    "correct": 0,
    "fact": "Twin Peaks became famous for its strange style and unforgettable mystery."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom starred Tony Danza as a housekeeper for a wealthy family?",
    "answers": [
      "Who's the Boss?",
      "Mr. Belvedere",
      "Webster",
      "Silver Spoons"
    ],
    "correct": 0,
    "fact": "Who's the Boss? became a popular family sitcom in the 1980s."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which alien character loved eating cats on the sitcom ALF?",
    "answers": [
      "ALF",
      "Mork",
      "Gizmo",
      "E.T."
    ],
    "correct": 0,
    "fact": "ALF became one of the most recognizable puppet characters of the 1980s."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Seinfeld was famously described as a show about nothing.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "The phrase became associated with Seinfeld's unique style of comedy."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which Nickelodeon show featured a group of kids saying 'I don't know' in a game show format?",
    "answers": [
      "Double Dare",
      "Legends of the Hidden Temple",
      "Are You Afraid of the Dark?",
      "Clarissa Explains It All"
    ],
    "correct": 0,
    "fact": "Double Dare became one of Nickelodeon's most popular early shows and was famous for messy physical challenges."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Nickelodeon show featured kids telling scary stories around a campfire?",
    "answers": [
      "Are You Afraid of the Dark?",
      "Rugrats",
      "Hey Arnold!",
      "Doug"
    ],
    "correct": 0,
    "fact": "Are You Afraid of the Dark? gave many Gen X kids their first taste of spooky television."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which Nickelodeon cartoon followed a baby named Tommy Pickles?",
    "answers": [
      "Rugrats",
      "Doug",
      "Rocko's Modern Life",
      "Hey Arnold!"
    ],
    "correct": 0,
    "fact": "Rugrats became one of Nickelodeon's biggest animated hits."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show featured a football-shaped head named Arnold?",
    "answers": [
      "Hey Arnold!",
      "Doug",
      "Rugrats",
      "CatDog"
    ],
    "correct": 0,
    "fact": "Hey Arnold! captured the everyday adventures of a city kid and his friends."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Disney Channel show starred Hilary Duff as Lizzie McGuire?",
    "answers": [
      "Lizzie McGuire",
      "Even Stevens",
      "That's So Raven",
      "Phil of the Future"
    ],
    "correct": 0,
    "fact": "Lizzie McGuire became one of Disney Channel's most popular early 2000s shows."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which MTV show featured celebrities showing off their homes?",
    "answers": [
      "MTV Cribs",
      "TRL",
      "Road Rules",
      "Pimp My Ride"
    ],
    "correct": 0,
    "fact": "MTV Cribs became famous for showing celebrity homes and catchphrases like 'Where the magic happens.'"
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which game show featured contestants choosing boxes with prizes or surprises?",
    "answers": [
      "Let's Make a Deal",
      "The Price Is Right",
      "Jeopardy!",
      "Wheel of Fortune"
    ],
    "correct": 0,
    "fact": "Classic game shows were a major part of daytime television for Gen X families."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show featured contestants answering questions while spinning a giant wheel?",
    "answers": [
      "Wheel of Fortune",
      "Family Feud",
      "Press Your Luck",
      "Double Dare"
    ],
    "correct": 0,
    "fact": "Wheel of Fortune became one of the longest-running game shows in television history."
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show featured contestants trying to guess survey answers?",
    "answers": [
      "Family Feud",
      "Jeopardy!",
      "Password",
      "Match Game"
    ],
    "correct": 0,
    "fact": "Family Feud became famous for funny answers and the phrase 'survey says.'"
  },
  {
    "category": "TV Nostalgia",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids watched cartoons and live-action shows after school before parents got home.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "The after-school TV block was a major part of Gen X childhood."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon featured the heroes who shouted 'Cowabunga!'?",
    "answers": [
      "Teenage Mutant Ninja Turtles",
      "G.I. Joe",
      "Transformers",
      "He-Man"
    ],
    "correct": 0,
    "fact": "The Teenage Mutant Ninja Turtles became one of the biggest cartoon and toy franchises of the late 1980s."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What were the names of the four Teenage Mutant Ninja Turtles?",
    "answers": [
      "Leonardo, Donatello, Michelangelo, Raphael",
      "Tom, Jerry, Spike, Tyke",
      "Fred, Wilma, Barney, Betty",
      "Bugs, Daffy, Porky, Tweety"
    ],
    "correct": 0,
    "fact": "Each turtle was named after a famous Renaissance artist."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cartoon featured the phrase 'By the power of Grayskull!'?",
    "answers": [
      "He-Man and the Masters of the Universe",
      "Thundercats",
      "Voltron",
      "SilverHawks"
    ],
    "correct": 0,
    "fact": "He-Man became one of the biggest toy and cartoon franchises of the 1980s."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon featured robots that transformed into vehicles?",
    "answers": [
      "Transformers",
      "G.I. Joe",
      "Voltron",
      "Robotech"
    ],
    "correct": 0,
    "fact": "Transformers became a worldwide phenomenon through cartoons, toys, and movies."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cartoon featured a group of heroes fighting Cobra?",
    "answers": [
      "G.I. Joe",
      "Inspector Gadget",
      "Jem",
      "The Smurfs"
    ],
    "correct": 0,
    "fact": "G.I. Joe was famous for its action figures and the slogan 'Knowing is half the battle.'"
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon featured tiny blue characters living in mushrooms?",
    "answers": [
      "The Smurfs",
      "The Snorks",
      "Care Bears",
      "Rainbow Brite"
    ],
    "correct": 0,
    "fact": "The Smurfs became one of the most popular cartoons of the 1980s."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cartoon featured a group of magical bears with symbols on their bellies?",
    "answers": [
      "Care Bears",
      "My Little Pony",
      "Popples",
      "Strawberry Shortcake"
    ],
    "correct": 0,
    "fact": "Care Bears became famous for their colorful personalities and 'Care Bear Stare.'"
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cartoon featured a detective with a gadget-filled trench coat?",
    "answers": [
      "Inspector Gadget",
      "DuckTales",
      "Chip 'n Dale Rescue Rangers",
      "Danger Mouse"
    ],
    "correct": 0,
    "fact": "Inspector Gadget was famous for his endless inventions and accidental problem-solving."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cartoon followed Scrooge McDuck and his nephews?",
    "answers": [
      "DuckTales",
      "Darkwing Duck",
      "TailSpin",
      "TaleSpin"
    ],
    "correct": 0,
    "fact": "DuckTales became one of Disney's most successful animated television series."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids had to wake up early on Saturday mornings to watch cartoons.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Before streaming and DVRs, missing a cartoon meant waiting for a rerun."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cartoon featured a rock star named Jem with the magical Synergy computer?",
    "answers": [
      "Jem",
      "Jem and the Holograms",
      "Both A and B",
      "Josie and the Pussycats"
    ],
    "correct": 2,
    "fact": "Jem was created during the 1980s toy-and-cartoon boom and was known for music, fashion, and drama."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which character wore a magical ring and said 'Form of an eagle!'?",
    "answers": [
      "Zan",
      "Jayna",
      "Wonder Twins",
      "She-Ra"
    ],
    "correct": 2,
    "fact": "The Wonder Twins were popular characters from the Super Friends cartoon."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cartoon featured a princess with a magical sword and the phrase 'For the honor of Grayskull!'?",
    "answers": [
      "She-Ra",
      "Rainbow Brite",
      "Jem",
      "My Little Pony"
    ],
    "correct": 0,
    "fact": "She-Ra was introduced as the female counterpart to He-Man and became a major 1980s icon."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon featured colorful ponies living in Ponyland?",
    "answers": [
      "My Little Pony",
      "Care Bears",
      "Popples",
      "Rainbow Brite"
    ],
    "correct": 0,
    "fact": "My Little Pony began as a toy line before becoming a popular animated series."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which character was known for having colorful hair and fighting darkness with a magic belt?",
    "answers": [
      "Rainbow Brite",
      "She-Ra",
      "Jem",
      "Strawberry Shortcake"
    ],
    "correct": 0,
    "fact": "Rainbow Brite became known for her bright colors, magical world, and 1980s toys."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cartoon featured heroes with animal-like powers and the phrase 'ThunderCats HO!'?",
    "answers": [
      "ThunderCats",
      "SilverHawks",
      "Voltron",
      "He-Man"
    ],
    "correct": 0,
    "fact": "ThunderCats became famous for its action, memorable characters, and iconic opening."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which animated series featured five robots combining into one giant robot?",
    "answers": [
      "Voltron",
      "Transformers",
      "Robotech",
      "Star Blazers"
    ],
    "correct": 0,
    "fact": "Voltron became one of the most recognizable giant robot cartoons of the 1980s."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon featured baby versions of famous Muppet characters?",
    "answers": [
      "Muppet Babies",
      "Fraggle Rock",
      "Sesame Street",
      "The Wuzzles"
    ],
    "correct": 0,
    "fact": "Muppet Babies became a huge hit and introduced a new generation to the Muppets."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cartoon featured Yakko, Wakko, and Dot?",
    "answers": [
      "Animaniacs",
      "Pinky and the Brain",
      "Tiny Toon Adventures",
      "Freakazoid!"
    ],
    "correct": 0,
    "fact": "Animaniacs became famous for fast jokes, songs, and pop culture references."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids watched cartoons while eating Saturday morning cereal.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Saturday morning cartoons and cereal became one of the most iconic childhood combinations of the era."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon featured a talking dog named Scooby-Doo?",
    "answers": [
      "Scooby-Doo",
      "The Jetsons",
      "The Flintstones",
      "Top Cat"
    ],
    "correct": 0,
    "fact": "Scooby-Doo first appeared in 1969 and became one of the longest-running animated franchises ever."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What was Scooby-Doo's best friend's name?",
    "answers": [
      "Shaggy",
      "Fred",
      "Velma",
      "Daphne"
    ],
    "correct": 0,
    "fact": "Shaggy and Scooby were famous for being scared but always helping solve mysteries."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon featured Fred Flintstone yelling 'Yabba Dabba Doo!'?",
    "answers": [
      "The Flintstones",
      "The Jetsons",
      "The Smurfs",
      "The Jetsons"
    ],
    "correct": 0,
    "fact": "The Flintstones was one of the first animated shows to become a major prime-time hit."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cartoon featured a family living in the future with flying cars?",
    "answers": [
      "The Jetsons",
      "The Flintstones",
      "Futurama",
      "Inspector Gadget"
    ],
    "correct": 0,
    "fact": "The Jetsons imagined a futuristic world filled with robots and technology."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon character loved eating lasagna?",
    "answers": [
      "Garfield",
      "Heathcliff",
      "Snoopy",
      "Alvin"
    ],
    "correct": 0,
    "fact": "Garfield became famous for his love of food, naps, and sarcasm."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cartoon featured three chipmunks who sang music?",
    "answers": [
      "Alvin and the Chipmunks",
      "Chip 'n Dale",
      "The Rescue Rangers",
      "The Wuzzles"
    ],
    "correct": 0,
    "fact": "Alvin, Simon, and Theodore became famous through music, cartoons, and movies."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cartoon featured the characters Bugs Bunny and Daffy Duck?",
    "answers": [
      "Looney Tunes",
      "Tom and Jerry",
      "Popeye",
      "Rocky and Bullwinkle"
    ],
    "correct": 0,
    "fact": "Looney Tunes introduced some of animation's most famous characters."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cartoon featured a cat and mouse constantly chasing each other?",
    "answers": [
      "Tom and Jerry",
      "Garfield",
      "Heathcliff",
      "Top Cat"
    ],
    "correct": 0,
    "fact": "Tom and Jerry became one of the most famous cartoon rivalries in history."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which cartoon featured the superhero dog named Underdog?",
    "answers": [
      "Underdog",
      "Super Friends",
      "Mighty Mouse",
      "Hong Kong Phooey"
    ],
    "correct": 0,
    "fact": "Underdog was a popular animated superhero character from the 1960s and remained popular through reruns."
  },
  {
    "category": "Saturday Morning Cartoons",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Saturday morning cartoons were commonly watched live because DVRs did not exist yet.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Gen X kids had to wake up and watch shows when they aired — no pause button, no streaming."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which company created the original Nintendo Entertainment System (NES)?",
    "answers": [
      "Nintendo",
      "Sega",
      "Atari",
      "Sony"
    ],
    "correct": 0,
    "fact": "The NES helped revive the video game industry in the United States during the 1980s."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What was Mario's profession before becoming famous for saving Princess Peach?",
    "answers": [
      "Plumber",
      "Doctor",
      "Teacher",
      "Firefighter"
    ],
    "correct": 0,
    "fact": "Mario was originally introduced as 'Jumpman' in the arcade game Donkey Kong."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which character says 'It's-a me, Mario!'?",
    "answers": [
      "Mario",
      "Luigi",
      "Yoshi",
      "Bowser"
    ],
    "correct": 0,
    "fact": "Mario became one of the most recognizable video game characters in the world."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which arcade game featured a yellow character eating dots while avoiding ghosts?",
    "answers": [
      "Pac-Man",
      "Frogger",
      "Galaga",
      "Donkey Kong"
    ],
    "correct": 0,
    "fact": "Pac-Man became one of the most successful arcade games ever created."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was the name of Nintendo's handheld gaming system released in 1989?",
    "answers": [
      "Game Boy",
      "Game Gear",
      "Virtual Boy",
      "DS"
    ],
    "correct": 0,
    "fact": "The original Game Boy became one of the best-selling handheld consoles ever."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which company created Sonic the Hedgehog?",
    "answers": [
      "Sega",
      "Nintendo",
      "Atari",
      "Capcom"
    ],
    "correct": 0,
    "fact": "Sonic was created as Sega's answer to Nintendo's Mario."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which game featured a character climbing platforms to rescue Pauline?",
    "answers": [
      "Donkey Kong",
      "Frogger",
      "Q*bert",
      "Asteroids"
    ],
    "correct": 0,
    "fact": "Donkey Kong introduced the character who would become Mario."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which video game console used cartridges that many kids blew on when games didn't work?",
    "answers": [
      "NES",
      "PlayStation",
      "Xbox",
      "Dreamcast"
    ],
    "correct": 0,
    "fact": "Blowing into cartridges was a famous childhood ritual, even though it was not the recommended fix."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which game featured the character Link searching for the Triforce?",
    "answers": [
      "The Legend of Zelda",
      "Metroid",
      "Final Fantasy",
      "Castlevania"
    ],
    "correct": 0,
    "fact": "The Legend of Zelda became one of Nintendo's most famous franchises."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Arcade games required players to insert coins or tokens to play.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Before home consoles became common, arcades were where many Gen X kids discovered video games."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which company created the Atari 2600 console?",
    "answers": [
      "Atari",
      "Nintendo",
      "Sega",
      "Mattel"
    ],
    "correct": 0,
    "fact": "The Atari 2600 helped bring video games into millions of homes during the late 1970s and early 1980s."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which arcade game featured a frog trying to cross roads and rivers?",
    "answers": [
      "Frogger",
      "Q*bert",
      "Frogger 2",
      "Pitfall!"
    ],
    "correct": 0,
    "fact": "Frogger became one of the most recognizable arcade games of the early 1980s."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which arcade game involved aliens moving across the screen toward the player?",
    "answers": [
      "Space Invaders",
      "Galaga",
      "Asteroids",
      "Defender"
    ],
    "correct": 0,
    "fact": "Space Invaders helped start the golden age of arcade video games."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which arcade game featured a spaceship shooting waves of aliens?",
    "answers": [
      "Galaga",
      "Pac-Man",
      "Centipede",
      "Donkey Kong"
    ],
    "correct": 0,
    "fact": "Galaga became one of the most popular arcade games of the 1980s."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which fighting game was famous for the phrase 'Finish Him!'?",
    "answers": [
      "Mortal Kombat",
      "Street Fighter",
      "Killer Instinct",
      "Tekken"
    ],
    "correct": 0,
    "fact": "Mortal Kombat became famous for its finishing moves and sparked debates about video game violence."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which character is the main fighter in Street Fighter?",
    "answers": [
      "Ryu",
      "Sub-Zero",
      "Link",
      "Scorpion"
    ],
    "correct": 0,
    "fact": "Ryu became one of the most recognizable fighting game characters in history."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "What was the famous code entered in many Nintendo games to unlock cheats?",
    "answers": [
      "Konami Code",
      "Up Down Code",
      "Game Genie Code",
      "Power Code"
    ],
    "correct": 0,
    "fact": "The Konami Code became one of the most famous video game secrets ever."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which game featured a character named Q*bert jumping on colorful cubes?",
    "answers": [
      "Q*bert",
      "Frogger",
      "BurgerTime",
      "Dig Dug"
    ],
    "correct": 0,
    "fact": "Q*bert was known for its unique isometric graphics and unusual gameplay."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which company created the Sega Genesis console?",
    "answers": [
      "Sega",
      "Nintendo",
      "Atari",
      "Sony"
    ],
    "correct": 0,
    "fact": "The Sega Genesis competed directly with Nintendo during the famous console wars."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids had to wait their turn to play arcade games because machines were shared.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Arcades were social places where kids gathered, watched, and challenged each other."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which Nintendo character is Mario's brother?",
    "answers": [
      "Luigi",
      "Yoshi",
      "Toad",
      "Bowser"
    ],
    "correct": 0,
    "fact": "Luigi first appeared in the 1983 arcade game Mario Bros."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which game featured Mario racing in go-karts?",
    "answers": [
      "Mario Kart",
      "F-Zero",
      "Diddy Kong Racing",
      "Excitebike"
    ],
    "correct": 0,
    "fact": "Mario Kart became one of Nintendo's most popular multiplayer franchises."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Nintendo console came after the original NES?",
    "answers": [
      "Super Nintendo Entertainment System",
      "Nintendo 64",
      "GameCube",
      "Virtual Boy"
    ],
    "correct": 0,
    "fact": "The Super Nintendo became one of the most beloved consoles of the 1990s."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which game featured a yellow circle character eating power pellets?",
    "answers": [
      "Pac-Man",
      "Dig Dug",
      "Centipede",
      "BurgerTime"
    ],
    "correct": 0,
    "fact": "Pac-Man's power pellets allowed him to chase and eat the ghosts temporarily."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What store became famous for letting people rent video games and movies?",
    "answers": [
      "Blockbuster",
      "Walmart",
      "Kmart",
      "Toys R Us"
    ],
    "correct": 0,
    "fact": "Many Gen X kids remember choosing a weekend game rental from Blockbuster."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which game franchise featured the character Samus Aran?",
    "answers": [
      "Metroid",
      "Zelda",
      "Final Fantasy",
      "Castlevania"
    ],
    "correct": 0,
    "fact": "Samus Aran was one of Nintendo's first major female video game heroes."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which company created the PlayStation console?",
    "answers": [
      "Sony",
      "Nintendo",
      "Sega",
      "Microsoft"
    ],
    "correct": 0,
    "fact": "The original PlayStation launched in 1994 and changed the gaming industry."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which game featured a character named Kirby who could copy abilities?",
    "answers": [
      "Kirby",
      "Yoshi",
      "Star Fox",
      "Earthworm Jim"
    ],
    "correct": 0,
    "fact": "Kirby became known for his ability to inhale enemies and gain their powers."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Hard",
    "type": "Multiple Choice",
    "question": "Which Nintendo game featured the character Fox McCloud?",
    "answers": [
      "Star Fox",
      "F-Zero",
      "Metroid",
      "Kid Icarus"
    ],
    "correct": 0,
    "fact": "Star Fox was known for bringing 3D space combat to Nintendo consoles."
  },
  {
    "category": "Video Games & Arcade",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids used cheat codes because games were often much harder than today's games.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Cheat codes, strategy guides, and tips from friends were a huge part of gaming culture."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which doll craze caused long store lines and shortages in the 1980s?",
    "answers": [
      "Cabbage Patch Kids",
      "Barbie",
      "American Girl",
      "Bratz"
    ],
    "correct": 0,
    "fact": "Cabbage Patch Kids became one of the biggest toy crazes of the 1980s."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which talking toy carried a backpack and told stories?",
    "answers": [
      "Teddy Ruxpin",
      "Furby",
      "Speak & Spell",
      "Tickle Me Elmo"
    ],
    "correct": 0,
    "fact": "Teddy Ruxpin became famous for reading stories using a moving mouth synced with cassette tapes."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which toy line featured robots that changed into vehicles?",
    "answers": [
      "Transformers",
      "He-Man",
      "Hot Wheels",
      "GI Joe"
    ],
    "correct": 0,
    "fact": "Transformers combined toys, cartoons, and movies into a massive franchise."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which toy featured colorful pegboards where kids created glowing pictures?",
    "answers": [
      "Lite-Brite",
      "Etch A Sketch",
      "Perler Beads",
      "Spirograph"
    ],
    "correct": 0,
    "fact": "Lite-Brite allowed kids to create artwork using colorful plastic pegs and a light box."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which toy involved jumping over a spinning hoop attached to your ankle?",
    "answers": [
      "Skip-It",
      "Pogo Stick",
      "Yo-Yo",
      "Moon Shoes"
    ],
    "correct": 0,
    "fact": "Skip-It became a playground favorite and even tracked high scores."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which toy kitchen appliance let kids make tiny baked treats?",
    "answers": [
      "Easy-Bake Oven",
      "Play-Doh Kitchen",
      "Kid Cuisine Maker",
      "Snack Shack"
    ],
    "correct": 0,
    "fact": "The Easy-Bake Oven became one of the most famous children's toys ever made."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which toy line featured magical bears with symbols on their stomachs?",
    "answers": [
      "Care Bears",
      "Pound Puppies",
      "My Little Pony",
      "Rainbow Brite"
    ],
    "correct": 0,
    "fact": "Care Bears were popular through toys, cartoons, movies, and merchandise."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which toy involved creating shapes and objects with colorful modeling compound?",
    "answers": [
      "Play-Doh",
      "Slime",
      "Floam",
      "Madballs"
    ],
    "correct": 0,
    "fact": "Play-Doh has been a childhood favorite for generations."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which toy brand featured small stuffed dogs called Pound Puppies?",
    "answers": [
      "Pound Puppies",
      "Beanie Babies",
      "Popples",
      "Garbage Pail Kids"
    ],
    "correct": 0,
    "fact": "Pound Puppies became popular stuffed animals and an animated series in the 1980s."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids had toys that did not require batteries, apps, or internet connections.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Gen X childhood toys were often powered by imagination instead of technology."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which toy brand featured tiny dolls that could fit inside small compact cases?",
    "answers": [
      "Polly Pocket",
      "Barbie",
      "My Little Pony",
      "Jem"
    ],
    "correct": 0,
    "fact": "Polly Pocket became a huge hit because kids could take the tiny worlds anywhere."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which electronic toy repeated your actions and became famous for saying 'Furby'?",
    "answers": [
      "Furby",
      "Tamagotchi",
      "Teddy Ruxpin",
      "Speak & Spell"
    ],
    "correct": 0,
    "fact": "Furby became one of the biggest toy crazes of the late 1990s."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which toy involved creating pictures by moving a screen with knobs?",
    "answers": [
      "Etch A Sketch",
      "Lite-Brite",
      "View-Master",
      "Magic Screen"
    ],
    "correct": 0,
    "fact": "Etch A Sketch challenged kids to draw using only two knobs and lots of patience."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which game featured a plastic patient with a funny nose and a buzzer when you hit the wrong spot?",
    "answers": [
      "Operation",
      "Simon",
      "Perfection",
      "Trouble"
    ],
    "correct": 0,
    "fact": "Operation became famous for its steady hands and nerve-testing gameplay."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which electronic game challenged players to repeat a growing pattern of lights and sounds?",
    "answers": [
      "Simon",
      "Bop It",
      "Simon Says",
      "Memory"
    ],
    "correct": 0,
    "fact": "Simon became one of the most recognizable electronic games of the 1970s and 80s."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which toy shouted commands like 'Twist it!' and 'Pull it!'?",
    "answers": [
      "Bop It",
      "Simon",
      "Furby",
      "Skip-It"
    ],
    "correct": 0,
    "fact": "Bop It became a popular party toy because players competed for high scores."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which toy brand featured magical horses with colorful hair?",
    "answers": [
      "My Little Pony",
      "Care Bears",
      "Rainbow Brite",
      "Popples"
    ],
    "correct": 0,
    "fact": "My Little Pony became a major toy line, cartoon series, and collectible brand."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which toy franchise featured pizza-loving turtles who fought villains?",
    "answers": [
      "Teenage Mutant Ninja Turtles",
      "Power Rangers",
      "Transformers",
      "Street Sharks"
    ],
    "correct": 0,
    "fact": "The Ninja Turtles became one of the biggest toy and cartoon franchises of the late 1980s."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which toy involved wearing shoes that bounced you around?",
    "answers": [
      "Moon Shoes",
      "Skip-It",
      "Pogo Ball",
      "Heelys"
    ],
    "correct": 0,
    "fact": "Moon Shoes were marketed as giving kids the feeling of walking on the moon."
  },
  {
    "category": "80s & 90s Toys",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Before smartphones, many kids entertained themselves with toys, games, and imagination.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Gen X childhood was built around creativity, outdoor play, and hands-on toys."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which artist was known as the 'King of Pop'?",
    "answers": [
      "Michael Jackson",
      "Prince",
      "Elton John",
      "Madonna"
    ],
    "correct": 0,
    "fact": "Michael Jackson became one of the most influential entertainers in music history."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which singer was known as the 'Queen of Pop'?",
    "answers": [
      "Madonna",
      "Cyndi Lauper",
      "Whitney Houston",
      "Janet Jackson"
    ],
    "correct": 0,
    "fact": "Madonna became one of the biggest pop stars of the 1980s and reinvented herself many times."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band released the hit song 'Pour Some Sugar on Me'?",
    "answers": [
      "Def Leppard",
      "Motley Crue",
      "Van Halen",
      "Whitesnake"
    ],
    "correct": 0,
    "fact": "Def Leppard's Hysteria album became one of the biggest rock albums of the 1980s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which singer had the hit song 'Like a Virgin'?",
    "answers": [
      "Madonna",
      "Cher",
      "Paula Abdul",
      "Janet Jackson"
    ],
    "correct": 0,
    "fact": "Like a Virgin helped make Madonna a global superstar."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band sang 'Smells Like Teen Spirit'?",
    "answers": [
      "Nirvana",
      "Pearl Jam",
      "Soundgarden",
      "Green Day"
    ],
    "correct": 0,
    "fact": "Smells Like Teen Spirit became one of the defining songs of the grunge movement."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which singer was famous for the song 'Girls Just Want to Have Fun'?",
    "answers": [
      "Cyndi Lauper",
      "Tina Turner",
      "Pat Benatar",
      "Belinda Carlisle"
    ],
    "correct": 0,
    "fact": "Cyndi Lauper became one of the most recognizable voices of the 1980s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which group sang 'I Want It That Way'?",
    "answers": [
      "Backstreet Boys",
      "NSYNC",
      "Boyz II Men",
      "98 Degrees"
    ],
    "correct": 0,
    "fact": "The Backstreet Boys became one of the biggest boy bands of the late 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which group sang 'End of the Road'?",
    "answers": [
      "Boyz II Men",
      "Jodeci",
      "New Edition",
      "All-4-One"
    ],
    "correct": 0,
    "fact": "Boyz II Men's harmonies helped define 1990s R&B."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "MTV originally launched as a channel focused mainly on music videos.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "When MTV launched in 1981, music videos and VJs were the centerpiece of the channel."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which artist sang 'Purple Rain'?",
    "answers": [
      "Prince",
      "Michael Jackson",
      "George Michael",
      "Rick James"
    ],
    "correct": 0,
    "fact": "Purple Rain became both a hit song and an iconic movie starring Prince."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which singer performed the hit song 'I Wanna Dance with Somebody'?",
    "answers": [
      "Whitney Houston",
      "Mariah Carey",
      "Celine Dion",
      "Paula Abdul"
    ],
    "correct": 0,
    "fact": "Whitney Houston's voice made her one of the most celebrated singers of all time."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band released the album 'Nevermind'?",
    "answers": [
      "Nirvana",
      "Pearl Jam",
      "Stone Temple Pilots",
      "Smashing Pumpkins"
    ],
    "correct": 0,
    "fact": "Nevermind helped bring alternative rock and grunge into the mainstream."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which group sang 'Wake Me Up Before You Go-Go'?",
    "answers": [
      "Wham!",
      "Duran Duran",
      "Culture Club",
      "Pet Shop Boys"
    ],
    "correct": 0,
    "fact": "Wham! became one of the biggest pop acts of the 1980s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band sang 'Every Rose Has Its Thorn'?",
    "answers": [
      "Poison",
      "Bon Jovi",
      "Def Leppard",
      "Motley Crue"
    ],
    "correct": 0,
    "fact": "Poison was one of the most popular glam metal bands of the late 1980s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band released the song 'Enter Sandman'?",
    "answers": [
      "Metallica",
      "AC/DC",
      "Iron Maiden",
      "Guns N' Roses"
    ],
    "correct": 0,
    "fact": "Enter Sandman became one of Metallica's most recognizable songs."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which singer released the album 'Jagged Little Pill'?",
    "answers": [
      "Alanis Morissette",
      "Sheryl Crow",
      "Jewel",
      "Fiona Apple"
    ],
    "correct": 0,
    "fact": "Jagged Little Pill became one of the biggest albums of the 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which girl group sang 'Wannabe'?",
    "answers": [
      "Spice Girls",
      "TLC",
      "Destiny's Child",
      "En Vogue"
    ],
    "correct": 0,
    "fact": "Wannabe helped make the Spice Girls a worldwide pop phenomenon."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which group sang 'No Scrubs'?",
    "answers": [
      "TLC",
      "Destiny's Child",
      "SWV",
      "Salt-N-Pepa"
    ],
    "correct": 0,
    "fact": "TLC became one of the most successful R&B groups of the 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids recorded songs from the radio onto cassette tapes.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "The pause button on cassette recorders was a critical tool for making mixtapes."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which artist released the album 'Thriller'?",
    "answers": [
      "Michael Jackson",
      "Prince",
      "George Michael",
      "Lionel Richie"
    ],
    "correct": 0,
    "fact": "Thriller became one of the best-selling albums of all time and changed the music industry."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Michael Jackson music video featured zombies dancing?",
    "answers": [
      "Thriller",
      "Beat It",
      "Billie Jean",
      "Bad"
    ],
    "correct": 0,
    "fact": "The Thriller music video became one of the most famous videos in music history."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which artist sang 'When Doves Cry'?",
    "answers": [
      "Prince",
      "David Bowie",
      "Rick Springfield",
      "George Michael"
    ],
    "correct": 0,
    "fact": "When Doves Cry was one of Prince's biggest worldwide hits."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which singer released the hit 'Vision of Love'?",
    "answers": [
      "Mariah Carey",
      "Whitney Houston",
      "Celine Dion",
      "Toni Braxton"
    ],
    "correct": 0,
    "fact": "Vision of Love introduced Mariah Carey's powerful vocal style to the world."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band sang 'Don't Stop Believin''?",
    "answers": [
      "Journey",
      "Foreigner",
      "Styx",
      "Boston"
    ],
    "correct": 0,
    "fact": "Don't Stop Believin' became one of the most recognizable rock songs ever."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band sang 'With or Without You'?",
    "answers": [
      "U2",
      "R.E.M.",
      "The Cure",
      "Depeche Mode"
    ],
    "correct": 0,
    "fact": "U2 became one of the biggest rock bands in the world during the 1980s and 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which artist sang 'Nothing Compares 2 U'?",
    "answers": [
      "Sinéad O'Connor",
      "Alanis Morissette",
      "Sheryl Crow",
      "Jewel"
    ],
    "correct": 0,
    "fact": "The emotional music video helped make the song an unforgettable 1990s hit."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band released 'Losing My Religion'?",
    "answers": [
      "R.E.M.",
      "Nirvana",
      "Radiohead",
      "Pearl Jam"
    ],
    "correct": 0,
    "fact": "Losing My Religion became one of R.E.M.'s biggest songs."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which rapper released the album 'The Slim Shady LP'?",
    "answers": [
      "Eminem",
      "Dr. Dre",
      "2Pac",
      "Snoop Dogg"
    ],
    "correct": 0,
    "fact": "The Slim Shady LP helped launch Eminem into mainstream fame in 1999."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "MTV Unplugged featured artists performing mostly acoustic versions of songs.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "MTV Unplugged created some of the most memorable live performances of the era."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band released the song 'Africa'?",
    "answers": [
      "Toto",
      "Chicago",
      "Boston",
      "Asia"
    ],
    "correct": 0,
    "fact": "Toto's Africa became a timeless hit and experienced a major resurgence decades later."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which artist sang 'Girls Just Want to Have Fun'?",
    "answers": [
      "Cyndi Lauper",
      "Pat Benatar",
      "Joan Jett",
      "Tina Turner"
    ],
    "correct": 0,
    "fact": "The song became an anthem and helped define 1980s pop culture."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band sang 'The Power of Love' from Back to the Future?",
    "answers": [
      "Huey Lewis and the News",
      "Hall & Oates",
      "Simple Minds",
      "Starship"
    ],
    "correct": 0,
    "fact": "The Power of Love was a major hit connected to one of the most popular movies of the 1980s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which group sang 'Walk Like an Egyptian'?",
    "answers": [
      "The Bangles",
      "The Go-Go's",
      "Bananarama",
      "Berlin"
    ],
    "correct": 0,
    "fact": "Walk Like an Egyptian became one of the biggest pop hits of the 1980s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band sang 'I Think We're Alone Now' in the 1980s?",
    "answers": [
      "Tiffany",
      "Debbie Gibson",
      "Belinda Carlisle",
      "Taylor Dayne"
    ],
    "correct": 0,
    "fact": "Tiffany became a teen pop sensation after performing in shopping malls across America."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which artist sang 'Man! I Feel Like a Woman!'?",
    "answers": [
      "Shania Twain",
      "Faith Hill",
      "Reba McEntire",
      "LeAnn Rimes"
    ],
    "correct": 0,
    "fact": "Shania Twain helped bring country music to a massive pop audience in the 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which rapper released 'Ice Ice Baby'?",
    "answers": [
      "Vanilla Ice",
      "MC Hammer",
      "Coolio",
      "LL Cool J"
    ],
    "correct": 0,
    "fact": "Ice Ice Baby became the first hip-hop single to reach number one on the Billboard Hot 100."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which artist sang 'U Can't Touch This'?",
    "answers": [
      "MC Hammer",
      "Vanilla Ice",
      "Run-D.M.C.",
      "Tone Loc"
    ],
    "correct": 0,
    "fact": "MC Hammer became famous for his signature dance moves and parachute pants."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids listened to music on cassette tapes and made their own mixtapes.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Mixtapes were one of the most personal ways Gen X shared music."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band sang 'Sweet Child O' Mine'?",
    "answers": [
      "Guns N' Roses",
      "Aerosmith",
      "Bon Jovi",
      "Skid Row"
    ],
    "correct": 0,
    "fact": "Sweet Child O' Mine became one of Guns N' Roses' biggest hits and featured Slash's famous guitar intro."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band released 'Home Sweet Home'?",
    "answers": [
      "Motley Crue",
      "Poison",
      "Warrant",
      "Def Leppard"
    ],
    "correct": 0,
    "fact": "Home Sweet Home became one of the most famous power ballads of the 1980s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band sang 'Cherry Pie'?",
    "answers": [
      "Warrant",
      "Poison",
      "Slaughter",
      "Ratt"
    ],
    "correct": 0,
    "fact": "Cherry Pie became one of the signature songs of the late hair metal era."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band released '18 and Life'?",
    "answers": [
      "Skid Row",
      "Bon Jovi",
      "Tesla",
      "Cinderella"
    ],
    "correct": 0,
    "fact": "Skid Row combined heavy rock with powerful ballads during the late 1980s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band sang 'Every Morning' in the late 1990s?",
    "answers": [
      "Sugar Ray",
      "Third Eye Blind",
      "Matchbox Twenty",
      "Train"
    ],
    "correct": 0,
    "fact": "Sugar Ray was one of the bands that helped define late 1990s pop-rock."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band released 'Semi-Charmed Life'?",
    "answers": [
      "Third Eye Blind",
      "Everclear",
      "Bush",
      "Weezer"
    ],
    "correct": 0,
    "fact": "Semi-Charmed Life became one of the biggest alternative hits of 1997."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band sang 'Machinehead'?",
    "answers": [
      "Bush",
      "Stone Temple Pilots",
      "Live",
      "Creed"
    ],
    "correct": 0,
    "fact": "Bush was one of the popular alternative rock bands of the 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band released 'Interstate Love Song'?",
    "answers": [
      "Stone Temple Pilots",
      "Pearl Jam",
      "Soundgarden",
      "Alice in Chains"
    ],
    "correct": 0,
    "fact": "Stone Temple Pilots became one of the major bands of the 1990s alternative scene."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which group sang 'Waterfalls'?",
    "answers": [
      "TLC",
      "SWV",
      "En Vogue",
      "Destiny's Child"
    ],
    "correct": 0,
    "fact": "Waterfalls became one of TLC's biggest and most memorable songs."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "The 1990s saw grunge become a major force in rock music.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Bands like Nirvana, Pearl Jam, and Soundgarden helped move rock in a new direction."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which song was featured in the movie 'Dirty Dancing' and became a huge hit?",
    "answers": [
      "(I've Had) The Time of My Life",
      "Footloose",
      "Maniac",
      "Take My Breath Away"
    ],
    "correct": 0,
    "fact": "The song became one of the most recognizable movie soundtrack songs of the 1980s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band performed 'Take My Breath Away' from Top Gun?",
    "answers": [
      "Berlin",
      "Bon Jovi",
      "Heart",
      "Heart"
    ],
    "correct": 0,
    "fact": "Take My Breath Away won the Academy Award for Best Original Song."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which song from Footloose became a huge 1980s hit?",
    "answers": [
      "Footloose",
      "Flashdance",
      "Maniac",
      "Eye of the Tiger"
    ],
    "correct": 0,
    "fact": "Kenny Loggins' Footloose became one of the defining songs of the decade."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band performed 'Eye of the Tiger' from Rocky III?",
    "answers": [
      "Survivor",
      "Journey",
      "Foreigner",
      "Styx"
    ],
    "correct": 0,
    "fact": "Eye of the Tiger became one of the most famous motivational songs ever recorded."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie soundtrack featured the song 'I Don't Want to Miss a Thing'?",
    "answers": [
      "Armageddon",
      "Titanic",
      "Twister",
      "City of Angels"
    ],
    "correct": 0,
    "fact": "Aerosmith's ballad became their first number-one single on the Billboard Hot 100."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which group sang 'All That She Wants'?",
    "answers": [
      "Ace of Base",
      "Roxette",
      "Aqua",
      "The Cardigans"
    ],
    "correct": 0,
    "fact": "Ace of Base became one of the biggest international pop groups of the 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which artist was known for the parody song 'Amish Paradise'?",
    "answers": [
      "Weird Al Yankovic",
      "Alanis Morissette",
      "Adam Sandler",
      "Tom Green"
    ],
    "correct": 0,
    "fact": "Weird Al became famous for turning popular songs into comedy classics."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which song was a huge hit for The Cardigans in the 1990s?",
    "answers": [
      "Lovefool",
      "Friday I'm in Love",
      "Kiss Me",
      "Torn"
    ],
    "correct": 0,
    "fact": "Lovefool became famous after appearing in the movie Romeo + Juliet."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which singer released the hit song 'Torn'?",
    "answers": [
      " Natalie Imbruglia",
      "Jewel",
      "Sheryl Crow",
      "Fiona Apple"
    ],
    "correct": 0,
    "fact": "Torn became one of the biggest pop songs of the late 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Before streaming, people often bought entire albums just to get one favorite song.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Gen X music fans often saved money for CDs, cassettes, and albums from favorite artists."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which group sang 'Bye Bye Bye'?",
    "answers": [
      "NSYNC",
      "Backstreet Boys",
      "98 Degrees",
      "Boyz II Men"
    ],
    "correct": 0,
    "fact": "NSYNC became one of the biggest boy bands of the late 1990s and early 2000s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which group sang 'MMMBop'?",
    "answers": [
      "Hanson",
      "New Kids on the Block",
      "Savage Garden",
      "Five"
    ],
    "correct": 0,
    "fact": "MMMBop became one of the biggest pop hits of 1997."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which group sang 'Step by Step'?",
    "answers": [
      "New Kids on the Block",
      "New Edition",
      "Backstreet Boys",
      "Color Me Badd"
    ],
    "correct": 0,
    "fact": "New Kids on the Block helped create the modern boy band craze."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which group sang 'No Rain'?",
    "answers": [
      "Blind Melon",
      "Nirvana",
      "Collective Soul",
      "Third Eye Blind"
    ],
    "correct": 0,
    "fact": "The music video featuring the dancing bee girl became iconic."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band sang 'Zombie'?",
    "answers": [
      "The Cranberries",
      "Garbage",
      "Republica",
      "Veruca Salt"
    ],
    "correct": 0,
    "fact": "Zombie became one of the most recognizable alternative rock songs of the 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which singer released 'Baby One More Time'?",
    "answers": [
      "Britney Spears",
      "Christina Aguilera",
      "Jessica Simpson",
      "Mandy Moore"
    ],
    "correct": 0,
    "fact": "Britney Spears became one of the biggest pop stars at the end of the 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which group sang 'Macarena'?",
    "answers": [
      "Los del Río",
      "Ricky Martin",
      "Menudo",
      "Vengaboys"
    ],
    "correct": 0,
    "fact": "The Macarena became one of the biggest dance crazes of the 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band sang 'Iris' from the movie City of Angels?",
    "answers": [
      "Goo Goo Dolls",
      "Matchbox Twenty",
      "Counting Crows",
      "Live"
    ],
    "correct": 0,
    "fact": "Iris became one of the biggest alternative rock ballads of the late 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which artist sang 'Kiss From a Rose'?",
    "answers": [
      "Seal",
      "George Michael",
      "Sting",
      "Phil Collins"
    ],
    "correct": 0,
    "fact": "Kiss From a Rose gained huge popularity after appearing in Batman Forever."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Making a mixtape was considered a personal way to share music with someone.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "A carefully made mixtape could be a friendship gift, love letter, or road trip soundtrack."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which snack came with cookies and a small container of frosting for dipping?",
    "answers": [
      "Dunkaroos",
      "Fun Dip",
      "Gushers",
      "Fruit Roll-Ups"
    ],
    "correct": 0,
    "fact": "Dunkaroos became one of the most requested lunchbox snacks of the 1990s."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which drink came in a clear pouch with a straw attached?",
    "answers": [
      "Capri Sun",
      "SunnyD",
      "Hi-C",
      "Fruitopia"
    ],
    "correct": 0,
    "fact": "Capri Sun became a lunchbox staple for kids in the 1980s and 1990s."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which soda was released by Coca-Cola in the 1990s as a clear cola?",
    "answers": [
      "Crystal Pepsi",
      "Surge",
      "Slice",
      "Jolt"
    ],
    "correct": 0,
    "fact": "Crystal Pepsi became famous for its unusual clear appearance and short-lived popularity."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which green citrus soda became popular in the 1990s?",
    "answers": [
      "Surge",
      "Mountain Dew Code Red",
      "Sprite Remix",
      "Mello Yello"
    ],
    "correct": 0,
    "fact": "Surge developed a cult following years after being discontinued."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which snack consisted of pizza-flavored bagels that kids could heat up?",
    "answers": [
      "Bagel Bites",
      "Pizza Rolls",
      "Hot Pockets",
      "Totino's Minis"
    ],
    "correct": 0,
    "fact": "Bagel Bites became famous for the slogan 'Pizza in the morning, pizza in the evening.'"
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which candy allowed kids to dip candy sticks into flavored powder?",
    "answers": [
      "Fun Dip",
      "Pixy Stix",
      "Pop Rocks",
      "Smarties"
    ],
    "correct": 0,
    "fact": "Fun Dip combined candy and a little bit of chaos — especially when kids ate the powder by itself."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which snack was known for its stretchy fruit shape rolled up?",
    "answers": [
      "Fruit Roll-Ups",
      "Fruit Gushers",
      "Airheads",
      "Now and Later"
    ],
    "correct": 0,
    "fact": "Fruit Roll-Ups became a classic lunchbox snack in the 1980s."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which candy had a liquid-filled center that burst when you bit it?",
    "answers": [
      "Fruit Gushers",
      "Skittles",
      "Starburst",
      "Nerds"
    ],
    "correct": 0,
    "fact": "Gushers became famous for their 'bursting' fruit center."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which candy was worn on your finger before eating it?",
    "answers": [
      "Ring Pop",
      "Push Pop",
      "Pop Rocks",
      "Ring Dings"
    ],
    "correct": 0,
    "fact": "Ring Pops turned candy into wearable jewelry for kids."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids packed lunches that included snacks and drinks their parents bought from commercials they saw on TV.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Advertising played a huge role in the foods and snacks kids wanted in the 80s and 90s."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which lunch kit came with crackers, meat, cheese, and sometimes a drink?",
    "answers": [
      "Lunchables",
      "Snack Packs",
      "Kid Cuisine",
      "Lunch Makers"
    ],
    "correct": 0,
    "fact": "Lunchables became one of the most iconic 1990s lunchbox products."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which candy was famous for being extremely sour?",
    "answers": [
      "Warheads",
      "Skittles",
      "Twizzlers",
      "Twix"
    ],
    "correct": 0,
    "fact": "Warheads challenged kids to see who could handle the sour flavor the longest."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which drink mix was famous for the phrase 'Oh yeah!'?",
    "answers": [
      "Kool-Aid",
      "Tang",
      "Crystal Light",
      "Country Time"
    ],
    "correct": 0,
    "fact": "The Kool-Aid Man became one of the most recognizable mascots in advertising."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which orange drink mix was famously taken to space by astronauts?",
    "answers": [
      "Tang",
      "SunnyD",
      "Hi-C",
      "Orange Crush"
    ],
    "correct": 0,
    "fact": "Tang became associated with NASA missions in the 1960s and remained popular afterward."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Hi-C flavor became famous because of the Ghostbusters cartoon?",
    "answers": [
      "Ecto Cooler",
      "Orange Lavaburst",
      "Fruit Punch",
      "Blue Raspberry"
    ],
    "correct": 0,
    "fact": "Ecto Cooler became one of the most remembered drinks of the 1990s."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which gum came in a long roll inside a small plastic container?",
    "answers": [
      "Bubble Tape",
      "Bubblicious",
      "Big League Chew",
      "Hubba Bubba"
    ],
    "correct": 0,
    "fact": "Bubble Tape commercials made the oversized gum roll unforgettable."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which candy combined tiny crunchy pieces with a chocolate coating?",
    "answers": [
      "Nerds",
      "Runts",
      "Sixlets",
      "Skittles"
    ],
    "correct": 0,
    "fact": "Nerds became a classic candy of the 1980s and 1990s."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which snack came in a small plastic cup with pudding or gelatin?",
    "answers": [
      "Snack Pack",
      "Dunkaroos",
      "Jell-O Jigglers",
      "Fruit Cups"
    ],
    "correct": 0,
    "fact": "Snack Pack pudding cups were a lunchbox favorite for many kids."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which candy was known for popping and crackling in your mouth?",
    "answers": [
      "Pop Rocks",
      "Pop Secret",
      "Fizzlers",
      "Fun Dip"
    ],
    "correct": 0,
    "fact": "Pop Rocks became famous for the strange sensation of candy popping on your tongue."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids drank from garden hoses during summer without thinking twice.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "The garden hose became a symbol of a simpler, less supervised childhood."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which fast food restaurant was famous for Happy Meals?",
    "answers": [
      "McDonald's",
      "Burger King",
      "Wendy's",
      "Taco Bell"
    ],
    "correct": 0,
    "fact": "Happy Meals became one of the most successful children's promotions in fast food history."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which McDonald's menu item had two burgers separated by a plastic divider?",
    "answers": [
      "McDLT",
      "Big Mac",
      "McRib",
      "Arch Deluxe"
    ],
    "correct": 0,
    "fact": "The McDLT was remembered for its unusual packaging that kept ingredients separate."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which fast food restaurant was known for the slogan 'Think outside the bun'?",
    "answers": [
      "Taco Bell",
      "Burger King",
      "Wendy's",
      "Arby's"
    ],
    "correct": 0,
    "fact": "Taco Bell became one of the most popular fast food chains among younger generations."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which 1990s drink came in colorful plastic bottles with a wide mouth?",
    "answers": [
      "Squeezits",
      "Capri Sun",
      "Orbitz",
      "Clearly Canadian"
    ],
    "correct": 0,
    "fact": "Squeezits were a staple drink for many 1990s kids."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which clear soda became a 1990s fad with flavors like Mountain Blackberry?",
    "answers": [
      "Clearly Canadian",
      "Crystal Pepsi",
      "Surge",
      "Jolt"
    ],
    "correct": 0,
    "fact": "Clearly Canadian developed a nostalgic following years after disappearing from stores."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which breakfast cereal featured a tiger mascot named Tony?",
    "answers": [
      "Frosted Flakes",
      "Cinnamon Toast Crunch",
      "Cheerios",
      "Froot Loops"
    ],
    "correct": 0,
    "fact": "Tony the Tiger became one of the most recognizable cereal mascots ever."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cereal featured colorful loops and a bird mascot named Toucan Sam?",
    "answers": [
      "Froot Loops",
      "Lucky Charms",
      "Apple Jacks",
      "Trix"
    ],
    "correct": 0,
    "fact": "Toucan Sam and Froot Loops became Saturday morning breakfast icons."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cereal featured a leprechaun mascot?",
    "answers": [
      "Lucky Charms",
      "Cookie Crisp",
      "Count Chocula",
      "Frosted Flakes"
    ],
    "correct": 0,
    "fact": "Lucky Charms became famous for marshmallow pieces and magical commercials."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which soda brand used the slogan 'The Choice of a New Generation'?",
    "answers": [
      "Pepsi",
      "Coca-Cola",
      "Dr Pepper",
      "Mountain Dew"
    ],
    "correct": 0,
    "fact": "Pepsi heavily marketed itself toward younger consumers during the 1980s and 1990s."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Saturday morning cartoons and sugary cereal were a major part of many Gen X childhoods.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Saturday mornings became a weekly ritual of cartoons, cereal, and commercials."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which snack came with a small plastic tube of candy that you pushed upward?",
    "answers": [
      "Push Pop",
      "Ring Pop",
      "Fun Dip",
      "Nerds"
    ],
    "correct": 0,
    "fact": "Push Pops became one of the most popular candies of the 1990s."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which frozen snack was famous for the slogan 'Pizza in the morning, pizza in the evening'?",
    "answers": [
      "Bagel Bites",
      "Pizza Rolls",
      "Hot Pockets",
      "Totino's Pizza"
    ],
    "correct": 0,
    "fact": "Bagel Bites commercials became a major part of 1990s food advertising."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which snack crackers were shaped like small fish?",
    "answers": [
      "Goldfish",
      "Cheez-Its",
      "Cheese Nips",
      "Whales"
    ],
    "correct": 0,
    "fact": "Goldfish crackers became a childhood snack staple for generations."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cookie had a chocolate sandwich design with a cream filling?",
    "answers": [
      "OREO",
      "Chips Ahoy",
      "Nutter Butter",
      "Fudge Stripes"
    ],
    "correct": 0,
    "fact": "OREO cookies have remained one of the world's most recognizable cookies."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which snack allowed kids to create shapes using flavored gummy pieces?",
    "answers": [
      "Gushers",
      "Fruit Roll-Ups",
      "Wonder Ball",
      "Shark Bites"
    ],
    "correct": 0,
    "fact": "Gushers were a major part of 1990s lunchboxes."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cereal featured tiny cookie-shaped pieces and a cartoon thief mascot?",
    "answers": [
      "Cookie Crisp",
      "Cocoa Puffs",
      "Golden Grahams",
      "Rice Krispies"
    ],
    "correct": 0,
    "fact": "Cookie Crisp became famous for tasting like cookies in cereal form."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which drink was marketed as 'Sunny D' and became popular in the 1990s?",
    "answers": [
      "Sunny Delight",
      "Tang",
      "Hi-C",
      "Minute Maid"
    ],
    "correct": 0,
    "fact": "SunnyD became a major lunchbox drink during the 1990s."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which candy came in tiny pieces inside a roll-shaped package?",
    "answers": [
      "Smarties",
      "Nerds",
      "Sweet Tarts",
      "Spree"
    ],
    "correct": 0,
    "fact": "Smarties were a classic candy found in many Halloween bags."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which fast food restaurant was known for the Big Mac?",
    "answers": [
      "McDonald's",
      "Wendy's",
      "Burger King",
      "Arby's"
    ],
    "correct": 0,
    "fact": "The Big Mac became one of the most recognizable fast food items worldwide."
  },
  {
    "category": "Food & Snack Nostalgia",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids remember getting a toy with their fast food meal.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Fast food toys were a major part of childhood excitement in the 1980s and 1990s."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What device did families use to record messages before voicemail became common?",
    "answers": [
      "Answering machine",
      "Pager",
      "Fax machine",
      "VCR"
    ],
    "correct": 0,
    "fact": "Many Gen X kids remember coming home and checking the blinking light on the answering machine."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What did you use to look up someone's phone number before the internet?",
    "answers": [
      "Phone book",
      "Google",
      "Social media",
      "Text message"
    ],
    "correct": 0,
    "fact": "The giant phone book was once delivered to homes every year."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What sound did dial-up internet make when connecting?",
    "answers": [
      "A series of beeps and screeches",
      "A ringing phone sound",
      "A musical tune",
      "Silence"
    ],
    "correct": 0,
    "fact": "The sound of a modem connecting is one of the most recognizable sounds of early internet."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which company provided many people with early internet access using CDs in the mail?",
    "answers": [
      "AOL",
      "Netflix",
      "Yahoo",
      "Google"
    ],
    "correct": 0,
    "fact": "AOL mailed millions of free trial CDs during the 1990s."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did people use before GPS apps for directions?",
    "answers": [
      "Maps and MapQuest printouts",
      "Alexa",
      "Google Maps",
      "Texting strangers"
    ],
    "correct": 0,
    "fact": "Many people printed directions before leaving home and hoped they didn't get lost."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Where did people rent movies before streaming services?",
    "answers": [
      "Blockbuster",
      "YouTube",
      "Netflix",
      "Hulu"
    ],
    "correct": 0,
    "fact": "Friday night trips to Blockbuster were a major weekly tradition."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did you have to do before watching a VHS tape?",
    "answers": [
      "Rewind it",
      "Charge it",
      "Download it",
      "Update it"
    ],
    "correct": 0,
    "fact": "Returning a VHS without rewinding it could earn you a reminder from the rental store."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did people use to record songs from the radio?",
    "answers": [
      "Cassette tapes",
      "USB drives",
      "Streaming apps",
      "CD burners"
    ],
    "correct": 0,
    "fact": "Making mixtapes required perfect timing and a finger ready for the record button."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did caller ID allow people to see?",
    "answers": [
      "Who was calling",
      "Their internet speed",
      "The weather",
      "Text messages"
    ],
    "correct": 0,
    "fact": "Before caller ID, answering the phone meant taking a chance."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids memorized their friends' phone numbers.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Before contact lists, remembering phone numbers was a real skill."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What happened when someone was already using the phone line and you tried to call?",
    "answers": [
      "Busy signal",
      "Voicemail notification",
      "Text alert",
      "Email message"
    ],
    "correct": 0,
    "fact": "A busy signal meant you had to try again later because only one call could use the line."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did many kids have to do before leaving the house with friends?",
    "answers": [
      "Ask for permission and tell parents where they were going",
      "Send a location share",
      "Post an update online",
      "Check social media"
    ],
    "correct": 0,
    "fact": "Parents often had no way to contact kids once they left the house."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What did kids often use to change the channel before remote controls were common?",
    "answers": [
      "Their hands",
      "A phone app",
      "Voice control",
      "A keyboard"
    ],
    "correct": 0,
    "fact": "The TV remote was once a luxury, and kids were often the remote."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What printed publication showed TV listings before online schedules?",
    "answers": [
      "TV Guide",
      "Phone Book",
      "Newspaper Comics",
      "Reader's Digest"
    ],
    "correct": 0,
    "fact": "Many families planned their week around checking the TV Guide."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What did kids often hear as the signal to come home at night?",
    "answers": [
      "Street lights coming on",
      "A phone notification",
      "A GPS alert",
      "An app reminder"
    ],
    "correct": 0,
    "fact": "Many Gen X kids had the rule: be home when the street lights come on."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did people do if they wanted to save a TV show before DVRs existed?",
    "answers": [
      "Record it on a VCR",
      "Stream it later",
      "Save it online",
      "Download it"
    ],
    "correct": 0,
    "fact": "Programming a VCR timer was considered a major accomplishment."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was a common way kids invited friends over before texting?",
    "answers": [
      "Calling their house phone",
      "Sending a DM",
      "Posting online",
      "Using an app"
    ],
    "correct": 0,
    "fact": "You had to call and hope the person you wanted actually answered."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What problem happened when you picked up another phone in the house during someone's call?",
    "answers": [
      "You could interrupt the conversation",
      "The internet disconnected",
      "The TV shut off",
      "The phone exploded"
    ],
    "correct": 0,
    "fact": "Multiple phones in a house shared the same phone line."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did people use to clean fingerprints from VHS tapes and CDs?",
    "answers": [
      "A soft cloth",
      "A phone app",
      "A computer program",
      "A streaming service"
    ],
    "correct": 0,
    "fact": "Taking care of physical media was part of owning movies and music."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Gen X kids often played outside for hours without parents constantly checking on them.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Unstructured outdoor play is one of the defining memories of many Gen X childhoods."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Where did people often go to make a phone call when away from home?",
    "answers": [
      "Pay phone",
      "WiFi hotspot",
      "Smartphone kiosk",
      "Computer lab"
    ],
    "correct": 0,
    "fact": "Pay phones were once everywhere — gas stations, malls, restaurants, and street corners."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did people use to research information before Google?",
    "answers": [
      "Encyclopedias",
      "Search engines",
      "Social media",
      "AI assistants"
    ],
    "correct": 0,
    "fact": "Many families owned a set of encyclopedias or visited the library for research."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What did people have to wait for before seeing their vacation pictures?",
    "answers": [
      "Film to be developed",
      "Photos to download",
      "Cloud storage",
      "Email delivery"
    ],
    "correct": 0,
    "fact": "Waiting days to see photos was normal before digital cameras."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was a disposable camera used for?",
    "answers": [
      "Taking pictures without owning a camera",
      "Calling friends",
      "Playing music",
      "Recording TV"
    ],
    "correct": 0,
    "fact": "Disposable cameras were popular because anyone could take photos and develop them later."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did people use to find places before online maps?",
    "answers": [
      "Road atlases",
      "GPS apps",
      "Location sharing",
      "Online reviews"
    ],
    "correct": 0,
    "fact": "Many glove compartments had a folded map or road atlas."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was a prank call?",
    "answers": [
      "A joke phone call to someone",
      "A fake email",
      "A computer virus",
      "A radio contest"
    ],
    "correct": 0,
    "fact": "Prank phone calls were a common form of teenage entertainment before smartphones."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did people do when they wanted to listen to music away from home in the 1980s?",
    "answers": [
      "Use a Walkman",
      "Use Spotify",
      "Use Bluetooth earbuds",
      "Use a streaming app"
    ],
    "correct": 0,
    "fact": "The Sony Walkman changed how people listened to music on the go."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was a common problem with cassette tapes?",
    "answers": [
      "They could get tangled",
      "They needed WiFi",
      "They expired instantly",
      "They needed updates"
    ],
    "correct": 0,
    "fact": "Many Gen X kids remember using a pencil to rewind tangled cassette tape."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did people use before online shopping?",
    "answers": [
      "Catalogs and stores",
      "Shopping apps",
      "One-click ordering",
      "Digital carts"
    ],
    "correct": 0,
    "fact": "Many people ordered items from catalogs like Sears before internet shopping existed."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Gen X kids often had to solve problems themselves because there was no instant online answer.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Finding information often meant asking someone, searching books, or figuring it out."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What did people do to listen for a favorite song on the radio?",
    "answers": [
      "Wait and listen",
      "Search a playlist",
      "Download it",
      "Stream it"
    ],
    "correct": 0,
    "fact": "Many Gen X kids sat by the radio waiting to press record on a cassette tape."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did people use to record a TV show before DVRs?",
    "answers": [
      "VCR",
      "Smart TV",
      "Cloud storage",
      "Streaming app"
    ],
    "correct": 0,
    "fact": "VCRs allowed people to record shows, but setting the timer could be frustrating."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What happened when you returned a VHS rental late?",
    "answers": [
      "You paid a late fee",
      "The movie disappeared",
      "Your account was deleted",
      "You got blocked online"
    ],
    "correct": 0,
    "fact": "Late fees were a painful part of renting movies in the VHS era."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What was a common way families watched movies at home in the 1980s and 1990s?",
    "answers": [
      "VHS tapes",
      "Streaming services",
      "Smart TVs",
      "Cloud libraries"
    ],
    "correct": 0,
    "fact": "Movie night often meant picking a VHS tape and sitting through previews first."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What device allowed people to carry music around before smartphones?",
    "answers": [
      "Walkman",
      "Smartwatch",
      "Tablet",
      "Bluetooth speaker"
    ],
    "correct": 0,
    "fact": "Portable cassette players were a huge part of Gen X culture."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did pagers do?",
    "answers": [
      "Received short messages",
      "Played music",
      "Showed movies",
      "Connected to WiFi"
    ],
    "correct": 0,
    "fact": "Pagers were popular before cell phones became common."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was a major challenge when using a corded phone?",
    "answers": [
      "The cord limited where you could talk",
      "It needed charging",
      "It required internet",
      "It needed an app"
    ],
    "correct": 0,
    "fact": "Long phone cords were often stretched across rooms for privacy."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did people use to organize phone numbers and addresses?",
    "answers": [
      "Address books",
      "Contacts apps",
      "Cloud accounts",
      "Social media"
    ],
    "correct": 0,
    "fact": "Many people had a little address book near their home phone."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was a common family argument before smartphones?",
    "answers": [
      "Who got to use the phone",
      "Who had the strongest WiFi",
      "Who charged the phone",
      "Who updated the apps"
    ],
    "correct": 0,
    "fact": "A single household phone meant everyone shared one line."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids had to physically get up to change the TV channel.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Before universal remote controls, kids were often the official channel changer."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What storage device was commonly used to save computer files in the 1980s and 1990s?",
    "answers": [
      "Floppy disk",
      "Flash drive",
      "Cloud storage",
      "Memory card"
    ],
    "correct": 0,
    "fact": "Floppy disks were the standard way many people saved and transferred computer files."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did AOL stand for?",
    "answers": [
      "America Online",
      "American Office Link",
      "Advanced Online Login",
      "Automatic Online Library"
    ],
    "correct": 0,
    "fact": "AOL introduced millions of people to email, chat rooms, and the internet."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What phrase became famous when someone disconnected from AOL chat?",
    "answers": [
      "Goodbye",
      "BRB",
      "AFK",
      "LOL"
    ],
    "correct": 0,
    "fact": "Early online communication had its own culture and etiquette."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did people use before texting became common?",
    "answers": [
      "Phone calls",
      "Social media messages",
      "Direct messages",
      "Video chats"
    ],
    "correct": 0,
    "fact": "Talking on the phone was the main way people communicated when away from home."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What was one of the first places many people used computers with internet access?",
    "answers": [
      "Computer labs",
      "Smartphones",
      "Cars",
      "Televisions"
    ],
    "correct": 0,
    "fact": "Schools and libraries introduced many people to computers."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was a CD-ROM used for?",
    "answers": [
      "Storing computer programs and information",
      "Making phone calls",
      "Watching streaming movies",
      "Charging devices"
    ],
    "correct": 0,
    "fact": "CD-ROMs brought multimedia programs, games, and encyclopedias to home computers."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did many people do when they first got email?",
    "answers": [
      "Send messages instead of letters",
      "Stream videos",
      "Share photos instantly",
      "Shop online daily"
    ],
    "correct": 0,
    "fact": "Email was a major change from traditional mail and phone calls."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was a common problem with early internet connections?",
    "answers": [
      "They were slow",
      "They needed GPS",
      "They used batteries",
      "They required apps"
    ],
    "correct": 0,
    "fact": "Dial-up internet speeds feel incredibly slow compared to today's connections."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did people use to communicate online before social media?",
    "answers": [
      "Chat rooms",
      "Instagram",
      "TikTok",
      "Snapchat"
    ],
    "correct": 0,
    "fact": "Chat rooms were one of the earliest ways people met and talked online."
  },
  {
    "category": "Life Before The Internet",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X adults remember experiencing both life before the internet and the rise of the internet.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Gen X is often called the bridge generation between analog childhood and digital adulthood."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which colorful plastic shoes became popular in the 1990s?",
    "answers": [
      "Jelly shoes",
      "Doc Martens",
      "Crocs",
      "Heelys"
    ],
    "correct": 0,
    "fact": "Jelly shoes were a huge trend despite being known for being uncomfortable."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which bracelet toy snapped onto your wrist?",
    "answers": [
      "Slap bracelet",
      "Friendship bracelet",
      "Charm bracelet",
      "Mood bracelet"
    ],
    "correct": 0,
    "fact": "Slap bracelets became a massive craze in the early 1990s."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which shirts changed color based on body heat?",
    "answers": [
      "Hypercolor shirts",
      "Members Only shirts",
      "Airbrush shirts",
      "Rugby shirts"
    ],
    "correct": 0,
    "fact": "Hypercolor shirts were one of the most memorable fashion fads of the early 1990s."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which accessory was used to organize makeup and became a 1990s must-have?",
    "answers": [
      "Caboodle",
      "Fanny pack",
      "Trapper Keeper",
      "JanSport"
    ],
    "correct": 0,
    "fact": "Caboodles were basically the makeup organizer every teenage girl wanted."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which hairstyle accessory was extremely popular in the 1990s?",
    "answers": [
      "Scrunchie",
      "Bowler hat",
      "Top hat",
      "Fedora"
    ],
    "correct": 0,
    "fact": "Scrunchies came in every color and matched almost every outfit."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which jacket brand became a symbol of 1980s style?",
    "answers": [
      "Members Only",
      "North Face",
      "Patagonia",
      "Columbia"
    ],
    "correct": 0,
    "fact": "Members Only jackets became one of the most recognizable fashion trends of the 1980s."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which jeans style was popular for being extremely tight and high-waisted?",
    "answers": [
      "Guess jeans",
      "Cargo pants",
      "JNCO jeans",
      "Parachute pants"
    ],
    "correct": 0,
    "fact": "Designer jeans were a major status symbol during the 1980s."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which pants were known for their shiny fabric and loose fit?",
    "answers": [
      "Parachute pants",
      "Cargo pants",
      "Bell bottoms",
      "Skinny jeans"
    ],
    "correct": 0,
    "fact": "Parachute pants became popular through breakdancing and 1980s music culture."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which boots became associated with grunge and alternative fashion?",
    "answers": [
      "Doc Martens",
      "Cowboy boots",
      "Moon boots",
      "Ugg boots"
    ],
    "correct": 0,
    "fact": "Doc Martens became a major part of 1990s alternative fashion."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids owned clothes that were heavily influenced by MTV and music stars.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Music videos played a huge role in shaping 1980s and 1990s fashion."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which jeans style featured a faded, worn-in look that was popular in the 1980s?",
    "answers": [
      "Acid wash jeans",
      "Cargo jeans",
      "Skinny jeans",
      "Bell bottoms"
    ],
    "correct": 0,
    "fact": "Acid wash jeans became one of the most recognizable fashion trends of the 1980s."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which jackets with team logos became popular in the 1990s?",
    "answers": [
      "Starter jackets",
      "Members Only jackets",
      "Denim jackets",
      "Leather jackets"
    ],
    "correct": 0,
    "fact": "Starter jackets became a huge part of 1990s sports and streetwear culture."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which pants style was popular among skaters and hip-hop fans in the 1990s?",
    "answers": [
      "JNCO jeans",
      "Parachute pants",
      "Stirrup pants",
      "Z. Cavaricci pants"
    ],
    "correct": 0,
    "fact": "JNCO jeans became famous for their extremely wide legs."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which accessory became popular as a colorful stretchy necklace?",
    "answers": [
      "Choker necklace",
      "Pearl necklace",
      "Chain necklace",
      "Locket"
    ],
    "correct": 0,
    "fact": "Tattoo chokers were a signature accessory of 1990s fashion."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which bag became popular for being worn around the waist?",
    "answers": [
      "Fanny pack",
      "Backpack",
      "Tote bag",
      "Briefcase"
    ],
    "correct": 0,
    "fact": "Fanny packs were practical, but many people later joked about the trend."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which pants had straps that went under the foot?",
    "answers": [
      "Stirrup pants",
      "Leggings",
      "Capri pants",
      "Parachute pants"
    ],
    "correct": 0,
    "fact": "Stirrup pants were a popular fashion choice in the 1980s."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which colorful shoe brand became popular with girls in the 1990s?",
    "answers": [
      "Jelly shoes",
      "Air Jordans",
      "Timberlands",
      "Doc Martens"
    ],
    "correct": 0,
    "fact": "Jelly shoes were inexpensive, colorful, and often matched outfits."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which shoe brand became strongly associated with basketball and hip-hop culture?",
    "answers": [
      "Air Jordans",
      "Jelly shoes",
      "Jellies",
      "Keds"
    ],
    "correct": 0,
    "fact": "Air Jordans became one of the most influential sneaker brands ever."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which hairstyle accessory was often worn around the wrist when not in the hair?",
    "answers": [
      "Scrunchie",
      "Headband",
      "Barrette",
      "Bandana"
    ],
    "correct": 0,
    "fact": "Scrunchies were both a hairstyle and fashion accessory."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Matching tracksuits and windbreakers were popular fashion choices in the 1980s and 1990s.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Athletic-inspired fashion became a major part of everyday style."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which colorful school supply brand was famous for bright designs and characters?",
    "answers": [
      "Lisa Frank",
      "Trapper Keeper",
      "Caboodles",
      "Jansport"
    ],
    "correct": 0,
    "fact": "Lisa Frank designs covered notebooks, folders, stickers, and school supplies everywhere."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which school item was known for snapping shut and holding folders and papers?",
    "answers": [
      "Trapper Keeper",
      "Caboodle",
      "Binder Clip",
      "Day Planner"
    ],
    "correct": 0,
    "fact": "Trapper Keepers were a must-have school accessory for many 1980s kids."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which watch brand became famous for colorful, thin watches in the 1980s?",
    "answers": [
      "Swatch",
      "Casio",
      "Timex",
      "Fossil"
    ],
    "correct": 0,
    "fact": "Swatch watches became a major fashion accessory during the 1980s."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which bracelet style was often handmade and traded between friends?",
    "answers": [
      "Friendship bracelets",
      "Slap bracelets",
      "Charm bracelets",
      "Power bracelets"
    ],
    "correct": 0,
    "fact": "Friendship bracelets became a symbol of friendships and summer camp culture."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which jewelry item supposedly changed colors based on your mood?",
    "answers": [
      "Mood ring",
      "Charm bracelet",
      "Choker",
      "Scrunchie"
    ],
    "correct": 0,
    "fact": "Mood rings were a fun novelty item that became popular again in the 1990s."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which clothing style involved wearing extremely oversized shirts and sweatshirts?",
    "answers": [
      "Oversized fashion",
      "Skinny fashion",
      "Preppy fashion",
      "Formalwear"
    ],
    "correct": 0,
    "fact": "Oversized clothing became a major trend influenced by hip-hop and streetwear."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which footwear was popular for skating at roller rinks?",
    "answers": [
      "Roller skates",
      "Jelly shoes",
      "Moon Shoes",
      "Combat boots"
    ],
    "correct": 0,
    "fact": "Roller skating was a major part of 1980s and 1990s social culture."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which clothing item showed support for your favorite band?",
    "answers": [
      "Band T-shirt",
      "Letter jacket",
      "Polo shirt",
      "Windbreaker"
    ],
    "correct": 0,
    "fact": "Band shirts became a way for fans to show their music identity."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which hairstyle trend involved making hair very large and full?",
    "answers": [
      "Big hair",
      "Buzz cut",
      "Pixie cut",
      "Bowl cut"
    ],
    "correct": 0,
    "fact": "Big hair was one of the defining looks of 1980s pop culture."
  },
  {
    "category": "80s & 90s Fashion",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X fashion trends were heavily influenced by music videos and celebrities.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "MTV helped turn musicians into major fashion influencers."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What sitcom featured the Tanner family living in San Francisco?",
    "answers": [
      "Full House",
      "Family Matters",
      "Growing Pains",
      "Step by Step"
    ],
    "correct": 0,
    "fact": "Full House became one of the most recognizable family sitcoms of the late 1980s and 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which character from Full House was known for saying 'How rude!'?",
    "answers": [
      "Stephanie Tanner",
      "DJ Tanner",
      "Michelle Tanner",
      "Kimmy Gibbler"
    ],
    "correct": 0,
    "fact": "Stephanie Tanner's catchphrase became one of the show's most memorable moments."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What school did Zack Morris attend on Saved by the Bell?",
    "answers": [
      "Bayside High",
      "West Beverly High",
      "McKinley High",
      "Sunnydale High"
    ],
    "correct": 0,
    "fact": "Bayside High became one of the most famous fictional schools in TV history."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Saved by the Bell character was known for being obsessed with fashion?",
    "answers": [
      "Kelly Kapowski",
      "Lisa Turtle",
      "Jessie Spano",
      "Zack Morris"
    ],
    "correct": 1,
    "fact": "Lisa Turtle was known for her bold outfits and love of fashion."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Who played the main character on The Fresh Prince of Bel-Air?",
    "answers": [
      "Will Smith",
      "Martin Lawrence",
      "Eddie Murphy",
      "Chris Rock"
    ],
    "correct": 0,
    "fact": "The Fresh Prince helped launch Will Smith's acting career."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was the name of the family on Home Improvement?",
    "answers": [
      "Taylor family",
      "Winslow family",
      "Huxtable family",
      "Conner family"
    ],
    "correct": 0,
    "fact": "Home Improvement starred Tim Allen as handyman Tim 'The Tool Man' Taylor."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was Tim Taylor's famous TV show called on Home Improvement?",
    "answers": [
      "Tool Time",
      "Fix It Fast",
      "Home Projects",
      "Man Around the House"
    ],
    "correct": 0,
    "fact": "'More power!' became one of Tim Taylor's most remembered phrases."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom featured the Winslow family?",
    "answers": [
      "Family Matters",
      "Step by Step",
      "Boy Meets World",
      "Perfect Strangers"
    ],
    "correct": 0,
    "fact": "Family Matters introduced one of the most famous TV neighbors ever: Steve Urkel."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What phrase was Steve Urkel famous for saying?",
    "answers": [
      "Did I do that?",
      "What's up?",
      "How rude!",
      "Whoa!"
    ],
    "correct": 0,
    "fact": "Steve Urkel became one of the most recognizable sitcom characters of the 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids planned their evenings around watching favorite TV shows when they aired.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Before streaming and DVRs, missing an episode often meant waiting for a rerun."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom followed six friends living in New York City?",
    "answers": [
      "Friends",
      "Seinfeld",
      "Mad About You",
      "Frasier"
    ],
    "correct": 0,
    "fact": "Friends became one of the biggest sitcoms of the 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom starred Jerry Seinfeld as a fictional version of himself?",
    "answers": [
      "Seinfeld",
      "Cheers",
      "Frasier",
      "Taxi"
    ],
    "correct": 0,
    "fact": "Seinfeld became famous as 'a show about nothing.'"
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Seinfeld character was known for saying 'Yada yada yada'?",
    "answers": [
      "George Costanza",
      "Cosmo Kramer",
      "Jerry Seinfeld",
      "Newman"
    ],
    "correct": 0,
    "fact": "George's unusual personality made him one of TV's most memorable characters."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which show followed Kevin Arnold growing up in the late 1960s and 1970s?",
    "answers": [
      "The Wonder Years",
      "Boy Meets World",
      "Growing Pains",
      "Family Ties"
    ],
    "correct": 0,
    "fact": "The Wonder Years captured childhood, family, and growing up through Kevin's eyes."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Who was Kevin Arnold's best friend on The Wonder Years?",
    "answers": [
      "Paul Pfeiffer",
      "Wayne Arnold",
      "Chuck Cunningham",
      "Richie Cunningham"
    ],
    "correct": 0,
    "fact": "Kevin and Paul represented one of television's most memorable friendships."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which show starred Roseanne Barr as the mother of the Conner family?",
    "answers": [
      "Roseanne",
      "Married... with Children",
      "Family Matters",
      "Murphy Brown"
    ],
    "correct": 0,
    "fact": "Roseanne was known for portraying a working-class American family."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which sitcom featured Cory Matthews growing up?",
    "answers": [
      "Boy Meets World",
      "Step by Step",
      "Saved by the Bell",
      "Hangin' with Mr. Cooper"
    ],
    "correct": 0,
    "fact": "Boy Meets World followed Cory from middle school through adulthood."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Who was Cory Matthews' best friend on Boy Meets World?",
    "answers": [
      "Shawn Hunter",
      "Eric Matthews",
      "Topanga Lawrence",
      "Mr. Feeny"
    ],
    "correct": 0,
    "fact": "Cory and Shawn's friendship was one of the show's biggest themes."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "TGIF was a popular Friday night lineup of family sitcoms in the 1990s.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Many Gen X kids grew up watching ABC's TGIF lineup every Friday night."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which animated family lives in Springfield?",
    "answers": [
      "The Simpsons",
      "Family Guy",
      "South Park",
      "King of the Hill"
    ],
    "correct": 0,
    "fact": "The Simpsons became one of the longest-running and most influential TV shows ever."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What is the name of Bart Simpson's younger sister?",
    "answers": [
      "Maggie",
      "Lisa",
      "Patty",
      "Selma"
    ],
    "correct": 1,
    "fact": "Lisa Simpson became known for her intelligence and love of learning."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which sitcom featured Al Bundy working at a shoe store?",
    "answers": [
      "Married... with Children",
      "Roseanne",
      "Cheers",
      "Night Court"
    ],
    "correct": 0,
    "fact": "Married... with Children became known for its sarcastic family humor."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was the name of the bar in Cheers?",
    "answers": [
      "Cheers",
      "Central Perk",
      "MacLaren's Pub",
      "The Max"
    ],
    "correct": 0,
    "fact": "The show's famous theme song included the line 'where everybody knows your name.'"
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show featured the character Rose Nylund?",
    "answers": [
      "The Golden Girls",
      "Designing Women",
      "Murder She Wrote",
      "Who's the Boss?"
    ],
    "correct": 0,
    "fact": "Rose Nylund was known for her sweet personality and unusual stories."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actress played Blanche Devereaux on The Golden Girls?",
    "answers": [
      "Rue McClanahan",
      "Betty White",
      "Bea Arthur",
      "Estelle Getty"
    ],
    "correct": 0,
    "fact": "Blanche became one of television's most memorable characters."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show followed the students and staff at Bayside High?",
    "answers": [
      "Saved by the Bell",
      "Boy Meets World",
      "Head of the Class",
      "Growing Pains"
    ],
    "correct": 0,
    "fact": "Saved by the Bell became a defining teen show of the early 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which teen drama followed students living in Beverly Hills?",
    "answers": [
      "Beverly Hills 90210",
      "Melrose Place",
      "Dawson's Creek",
      "Felicity"
    ],
    "correct": 0,
    "fact": "Beverly Hills 90210 became a cultural phenomenon among teenagers."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which medical drama premiered in 1994 and starred George Clooney?",
    "answers": [
      "ER",
      "Chicago Hope",
      "Grey's Anatomy",
      "Scrubs"
    ],
    "correct": 0,
    "fact": "ER became one of the biggest television dramas of the 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X families watched TV together because there were fewer channels and fewer viewing choices.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Before streaming and hundreds of channels, TV watching was often a shared family activity."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom featured the Huxtable family?",
    "answers": [
      "The Cosby Show",
      "Family Ties",
      "Growing Pains",
      "Who's the Boss?"
    ],
    "correct": 0,
    "fact": "The Cosby Show was one of the highest-rated sitcoms of the 1980s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show was a spin-off of The Cosby Show featuring college students?",
    "answers": [
      "A Different World",
      "Family Matters",
      "Step by Step",
      "227"
    ],
    "correct": 0,
    "fact": "A Different World focused on life at the fictional Hillman College."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom starred Tony Danza as a housekeeper?",
    "answers": [
      "Who's the Boss?",
      "Taxi",
      "Perfect Strangers",
      "Coach"
    ],
    "correct": 0,
    "fact": "Who's the Boss? featured Tony Micelli and the Bower family."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show starred Alan Thicke as Jason Seaver?",
    "answers": [
      "Growing Pains",
      "Family Ties",
      "Full House",
      "Silver Spoons"
    ],
    "correct": 0,
    "fact": "Growing Pains featured the Seaver family and helped launch several young actors."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which sitcom featured Alex P. Keaton?",
    "answers": [
      "Family Ties",
      "Growing Pains",
      "Cheers",
      "Night Court"
    ],
    "correct": 0,
    "fact": "Alex P. Keaton was one of Michael J. Fox's most famous roles."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which TGIF show featured the Lambert and Foster families living together?",
    "answers": [
      "Step by Step",
      "Family Matters",
      "Perfect Strangers",
      "Boy Meets World"
    ],
    "correct": 0,
    "fact": "Step by Step was a popular family sitcom during the 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show featured the character Urkel?",
    "answers": [
      "Family Matters",
      "Full House",
      "Saved by the Bell",
      "The Fresh Prince of Bel-Air"
    ],
    "correct": 0,
    "fact": "Steve Urkel became so popular that he changed the direction of Family Matters."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which mysterious 1990s show featured FBI agent Fox Mulder?",
    "answers": [
      "The X-Files",
      "Twin Peaks",
      "ER",
      "The Outer Limits"
    ],
    "correct": 0,
    "fact": "The X-Files became famous for aliens, mysteries, and the phrase 'The truth is out there.'"
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show starred Tim Allen as a tool-loving TV host?",
    "answers": [
      "Home Improvement",
      "Tool Time",
      "Last Man Standing",
      "Coach"
    ],
    "correct": 0,
    "fact": "Home Improvement was one of the biggest sitcoms of the 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids remember rushing home to watch favorite after-school TV shows.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "After-school TV was a daily ritual before streaming and on-demand entertainment."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which Nickelodeon show featured kids competing in messy outdoor games?",
    "answers": [
      "Double Dare",
      "Legends of the Hidden Temple",
      "Guts",
      "Figure It Out"
    ],
    "correct": 0,
    "fact": "Double Dare became one of Nickelodeon's most popular early game shows."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What color was the famous Nickelodeon slime?",
    "answers": [
      "Green",
      "Blue",
      "Purple",
      "Orange"
    ],
    "correct": 0,
    "fact": "Nickelodeon slime became one of the network's most recognizable symbols."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Nickelodeon show featured contestants searching for hidden objects in a temple?",
    "answers": [
      "Legends of the Hidden Temple",
      "Double Dare",
      "Are You Afraid of the Dark?",
      "Hey Dude"
    ],
    "correct": 0,
    "fact": "The Temple Guards and Olmec made this show unforgettable for 90s kids."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Nickelodeon show featured spooky stories told around a campfire?",
    "answers": [
      "Are You Afraid of the Dark?",
      "Goosebumps",
      "R.L. Stine's Hour",
      "The Secret World of Alex Mack"
    ],
    "correct": 0,
    "fact": "Many 90s kids watched this show and then regretted it when bedtime arrived."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon featured a character named Tommy Pickles?",
    "answers": [
      "Rugrats",
      "Doug",
      "Hey Arnold!",
      "Rocko's Modern Life"
    ],
    "correct": 0,
    "fact": "Rugrats followed the adventures of babies who saw the world differently than adults."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cartoon featured Arnold with the football-shaped head?",
    "answers": [
      "Hey Arnold!",
      "Doug",
      "Rugrats",
      "CatDog"
    ],
    "correct": 0,
    "fact": "Hey Arnold! became one of Nickelodeon's most beloved animated shows."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon featured a boy named Doug Funnie?",
    "answers": [
      "Doug",
      "Rugrats",
      "Recess",
      "Rocko's Modern Life"
    ],
    "correct": 0,
    "fact": "Doug followed the everyday adventures and imagination of a normal kid."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which game show featured kids competing in physical challenges on Nickelodeon?",
    "answers": [
      "Guts",
      "Double Dare",
      "Figure It Out",
      "Nick Arcade"
    ],
    "correct": 0,
    "fact": "Guts featured the famous Aggro Crag mountain challenge."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which animated show followed four kids traveling through time with a magic school bus?",
    "answers": [
      "The Magic School Bus",
      "Arthur",
      "Captain Planet",
      "Recess"
    ],
    "correct": 0,
    "fact": "Ms. Frizzle made learning science one of the coolest things on TV."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids watched cartoons on Saturday mornings while eating cereal.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Saturday morning cartoons were a weekly ritual before streaming and on-demand shows."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which animated series featured four turtles trained in martial arts?",
    "answers": [
      "Teenage Mutant Ninja Turtles",
      "Street Sharks",
      "Gargoyles",
      "Biker Mice from Mars"
    ],
    "correct": 0,
    "fact": "The Ninja Turtles became one of the biggest franchises of the late 1980s and early 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What were the names of the Teenage Mutant Ninja Turtles?",
    "answers": [
      "Leonardo, Michelangelo, Donatello, Raphael",
      "Tom, Dick, Harry, Larry",
      "Mike, Joe, Sam, Dan",
      "Max, Leo, Ben, Tim"
    ],
    "correct": 0,
    "fact": "Each turtle was named after a famous Renaissance artist."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show featured teenagers who could transform into superheroes by shouting a special phrase?",
    "answers": [
      "Mighty Morphin Power Rangers",
      "VR Troopers",
      "Captain Planet",
      "Voltron"
    ],
    "correct": 0,
    "fact": "The Power Rangers became a huge 1990s phenomenon."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What phrase did the Power Rangers say to transform?",
    "answers": [
      "It's Morphin Time!",
      "Go Go Heroes!",
      "Power Up!",
      "Let's Roll!"
    ],
    "correct": 0,
    "fact": "'It's Morphin Time!' became one of the most recognizable phrases of the 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which animated show featured a group of kids living in a world of Pokémon?",
    "answers": [
      "Pokémon",
      "Digimon",
      "Yu-Gi-Oh!",
      "Dragon Ball Z"
    ],
    "correct": 0,
    "fact": "Pokémon became a worldwide craze in the late 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was the name of Ash's most famous Pokémon companion?",
    "answers": [
      "Pikachu",
      "Charizard",
      "Bulbasaur",
      "Squirtle"
    ],
    "correct": 0,
    "fact": "Pikachu became one of the most recognizable fictional characters worldwide."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which MTV animated show followed two teenagers who loved heavy metal and sarcasm?",
    "answers": [
      "Beavis and Butt-Head",
      "Daria",
      "The Maxx",
      "Aeon Flux"
    ],
    "correct": 0,
    "fact": "Beavis and Butt-Head became symbols of 1990s MTV culture."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which MTV show counted down popular music videos?",
    "answers": [
      "Total Request Live",
      "Headbangers Ball",
      "Yo! MTV Raps",
      "120 Minutes"
    ],
    "correct": 0,
    "fact": "TRL became a major part of late 1990s music culture."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which network became known for shows like Boy Meets World and TGIF?",
    "answers": [
      "ABC",
      "FOX",
      "Nickelodeon",
      "CBS"
    ],
    "correct": 0,
    "fact": "ABC's Friday night lineup was a major Gen X and millennial childhood memory."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids had favorite TV shows they watched at the exact same time every week.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Before streaming, weekly TV schedules were part of family routines."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which MTV show focused heavily on heavy metal music videos?",
    "answers": [
      "Headbangers Ball",
      "Yo! MTV Raps",
      "TRL",
      "MTV News"
    ],
    "correct": 0,
    "fact": "Headbangers Ball was a major destination for rock and metal fans."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which MTV show focused on hip-hop music and culture?",
    "answers": [
      "Yo! MTV Raps",
      "120 Minutes",
      "Unplugged",
      "Remote Control"
    ],
    "correct": 0,
    "fact": "Yo! MTV Raps helped bring hip-hop into mainstream television."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which show featured funny home videos submitted by viewers?",
    "answers": [
      "America's Funniest Home Videos",
      "Cops",
      "Talk Soup",
      "Real Stories"
    ],
    "correct": 0,
    "fact": "AFV became a family favorite hosted by Bob Saget."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Who hosted America's Funniest Home Videos during its early years?",
    "answers": [
      "Bob Saget",
      "Bob Barker",
      "Regis Philbin",
      "David Letterman"
    ],
    "correct": 0,
    "fact": "Bob Saget became closely associated with the show."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which reality-style show followed police officers on duty?",
    "answers": [
      "Cops",
      "Survivor",
      "The Real World",
      "Big Brother"
    ],
    "correct": 0,
    "fact": "The phrase 'Bad boys, bad boys, whatcha gonna do?' became iconic."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show asked viewers to help catch wanted criminals?",
    "answers": [
      "America's Most Wanted",
      "Cops",
      "Unsolved Mysteries",
      "Rescue 911"
    ],
    "correct": 0,
    "fact": "America's Most Wanted became one of the most recognizable crime shows on television."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show was known for strange mysteries hosted by Robert Stack?",
    "answers": [
      "Unsolved Mysteries",
      "Dateline",
      "Cops",
      "20/20"
    ],
    "correct": 0,
    "fact": "Robert Stack's serious delivery became part of the show's identity."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which game show featured contestants guessing prices of products?",
    "answers": [
      "The Price Is Right",
      "Family Feud",
      "Jeopardy!",
      "Wheel of Fortune"
    ],
    "correct": 0,
    "fact": "The Price Is Right has been a television favorite for generations."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Before streaming, viewers often watched whatever happened to be on television.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Channel surfing and discovering random shows was part of the TV experience."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which show featured contestants answering survey questions to guess popular answers?",
    "answers": [
      "Family Feud",
      "Jeopardy!",
      "Wheel of Fortune",
      "Hollywood Squares"
    ],
    "correct": 0,
    "fact": "Family Feud became famous for the question: 'We asked 100 people...'"
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which game show involved spinning a giant wheel for prizes and puzzles?",
    "answers": [
      "Wheel of Fortune",
      "The Price Is Right",
      "Match Game",
      "Double Dare"
    ],
    "correct": 0,
    "fact": "Wheel of Fortune became one of the longest-running game shows in television history."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show featured contestants answering trivia questions for money?",
    "answers": [
      "Jeopardy!",
      "Family Feud",
      "Press Your Luck",
      "Supermarket Sweep"
    ],
    "correct": 0,
    "fact": "Jeopardy! became famous for its unique answer-and-question format."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Nickelodeon show featured a character named Alex Mack?",
    "answers": [
      "The Secret World of Alex Mack",
      "Clarissa Explains It All",
      "Hey Dude",
      "Salute Your Shorts"
    ],
    "correct": 0,
    "fact": "Alex Mack was one of Nickelodeon's most popular live-action shows in the 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Nickelodeon show starred Melissa Joan Hart as a teenager with a quirky life?",
    "answers": [
      "Clarissa Explains It All",
      "Kenan & Kel",
      "All That",
      "Rugrats"
    ],
    "correct": 0,
    "fact": "Clarissa was one of Nickelodeon's first major live-action hits."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Nickelodeon sketch comedy show launched many young actors?",
    "answers": [
      "All That",
      "Figure It Out",
      "GUTS",
      "Double Dare"
    ],
    "correct": 0,
    "fact": "All That helped launch stars including Kenan Thompson and Amanda Bynes."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cartoon network launched in 1992?",
    "answers": [
      "Cartoon Network",
      "Disney Channel",
      "Nickelodeon",
      "Fox Kids"
    ],
    "correct": 0,
    "fact": "Cartoon Network introduced many kids to classic and original animated shows."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which animated show featured Dexter's secret laboratory?",
    "answers": [
      "Dexter's Laboratory",
      "Johnny Bravo",
      "Courage the Cowardly Dog",
      "Powerpuff Girls"
    ],
    "correct": 0,
    "fact": "Dexter's Laboratory became one of Cartoon Network's signature original shows."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show featured three girls with superpowers created by Professor Utonium?",
    "answers": [
      "The Powerpuff Girls",
      "Totally Spies",
      "Sailor Moon",
      "Rugrats"
    ],
    "correct": 0,
    "fact": "The Powerpuff Girls became one of Cartoon Network's biggest hits in the late 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Gen X kids often had to wait a full week for the next episode of their favorite show.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Weekly TV schedules created a shared experience that streaming changed forever."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Who was known as the 'King of Pop'?",
    "answers": [
      "Michael Jackson",
      "Prince",
      "Elton John",
      "George Michael"
    ],
    "correct": 0,
    "fact": "Michael Jackson became one of the most influential entertainers in music history."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which Michael Jackson album featured 'Thriller'?",
    "answers": [
      "Thriller",
      "Bad",
      "Dangerous",
      "Off the Wall"
    ],
    "correct": 0,
    "fact": "Thriller remains one of the best-selling albums of all time."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which artist sang 'Like a Virgin'?",
    "answers": [
      "Madonna",
      "Cyndi Lauper",
      "Whitney Houston",
      "Pat Benatar"
    ],
    "correct": 0,
    "fact": "Madonna became one of the biggest pop stars of the 1980s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which singer was known for the song 'Purple Rain'?",
    "answers": [
      "Prince",
      "David Bowie",
      "Rick Springfield",
      "George Michael"
    ],
    "correct": 0,
    "fact": "Prince's music and style made him one of the most unique artists of his generation."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band released the song 'Pour Some Sugar on Me'?",
    "answers": [
      "Def Leppard",
      "Bon Jovi",
      "Motley Crue",
      "Van Halen"
    ],
    "correct": 0,
    "fact": "Def Leppard was one of the biggest bands of the hair metal era."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which singer had a major hit with 'Girls Just Want to Have Fun'?",
    "answers": [
      "Cyndi Lauper",
      "Tina Turner",
      "Pat Benatar",
      "Belinda Carlisle"
    ],
    "correct": 0,
    "fact": "Cyndi Lauper became known for her colorful style and powerful voice."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Who sang the hit song 'I Wanna Dance with Somebody'?",
    "answers": [
      "Whitney Houston",
      "Mariah Carey",
      "Paula Abdul",
      "Janet Jackson"
    ],
    "correct": 0,
    "fact": "Whitney Houston became one of the greatest vocalists of all time."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which band sang 'Sweet Child o' Mine'?",
    "answers": [
      "Guns N' Roses",
      "Metallica",
      "Nirvana",
      "Aerosmith"
    ],
    "correct": 0,
    "fact": "'Sweet Child o' Mine' became one of the biggest rock songs of the late 1980s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Guns N' Roses singer was known for his distinctive voice?",
    "answers": [
      "Axl Rose",
      "Slash",
      "Steven Tyler",
      "James Hetfield"
    ],
    "correct": 0,
    "fact": "Axl Rose's unique vocals helped define the sound of Guns N' Roses."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Who was the lead singer of Nirvana?",
    "answers": [
      "Kurt Cobain",
      "Eddie Vedder",
      "Chris Cornell",
      "Dave Grohl"
    ],
    "correct": 0,
    "fact": "Kurt Cobain became one of the defining voices of 1990s alternative music."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band sang 'Enter Sandman'?",
    "answers": [
      "Metallica",
      "Megadeth",
      "Iron Maiden",
      "Pantera"
    ],
    "correct": 0,
    "fact": "'Enter Sandman' became one of Metallica's most recognizable songs."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which band sang 'Walk This Way' with Run-DMC?",
    "answers": [
      "Aerosmith",
      "Van Halen",
      "KISS",
      "Def Leppard"
    ],
    "correct": 0,
    "fact": "The collaboration helped introduce rock music to a new hip-hop audience."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which girl group sang 'Waterfalls'?",
    "answers": [
      "TLC",
      "Destiny's Child",
      "Spice Girls",
      "SWV"
    ],
    "correct": 0,
    "fact": "TLC became one of the most successful female groups of the 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Grunge music became one of the defining sounds of the early 1990s.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Bands from Seattle helped transform the music scene in the early 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Who sang the hit song 'Fantasy'?",
    "answers": [
      "Mariah Carey",
      "Whitney Houston",
      "Celine Dion",
      "Janet Jackson"
    ],
    "correct": 0,
    "fact": "Mariah Carey became one of the biggest voices in pop music during the 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which singer released the song 'You Oughta Know'?",
    "answers": [
      "Alanis Morissette",
      "Sheryl Crow",
      "Jewel",
      "Fiona Apple"
    ],
    "correct": 0,
    "fact": "'You Oughta Know' became one of the defining songs of 1990s alternative rock."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which group sang 'Wannabe'?",
    "answers": [
      "Spice Girls",
      "TLC",
      "Destiny's Child",
      "All Saints"
    ],
    "correct": 0,
    "fact": "The Spice Girls helped define late 1990s pop culture."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which band sang 'Don't Speak'?",
    "answers": [
      "No Doubt",
      "Garbage",
      "The Cranberries",
      "4 Non Blondes"
    ],
    "correct": 0,
    "fact": "No Doubt blended ska, punk, and pop into a signature 1990s sound."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Who was the lead singer of No Doubt?",
    "answers": [
      "Gwen Stefani",
      "Shirley Manson",
      "Jewel",
      "Pat Benatar"
    ],
    "correct": 0,
    "fact": "Gwen Stefani became one of the most recognizable performers of the 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band released the song 'Good Riddance (Time of Your Life)'?",
    "answers": [
      "Green Day",
      "Blink-182",
      "Third Eye Blind",
      "Weezer"
    ],
    "correct": 0,
    "fact": "The song became a staple at graduations and major life events."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band sang 'Semi-Charmed Life'?",
    "answers": [
      "Third Eye Blind",
      "Matchbox Twenty",
      "Counting Crows",
      "Everclear"
    ],
    "correct": 0,
    "fact": "The song became one of the defining alternative hits of the late 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band released the album 'Yourself or Someone Like You'?",
    "answers": [
      "Matchbox Twenty",
      "Hootie & the Blowfish",
      "Creed",
      "Train"
    ],
    "correct": 0,
    "fact": "Matchbox Twenty became one of the biggest radio bands of the late 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids made mixtapes or burned CDs for friends they liked.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Music sharing was a personal experience before streaming playlists existed."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which singer released the hit 'Rhythm Nation'?",
    "answers": [
      "Janet Jackson",
      "Paula Abdul",
      "Toni Braxton",
      "Mariah Carey"
    ],
    "correct": 0,
    "fact": "Janet Jackson became one of the biggest pop stars of the late 1980s and 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which singer had the hit song 'Straight Up'?",
    "answers": [
      "Paula Abdul",
      "Debbie Gibson",
      "Tiffany",
      "Belinda Carlisle"
    ],
    "correct": 0,
    "fact": "Paula Abdul became a major pop star and choreographer in the late 1980s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which group sang 'Push It'?",
    "answers": [
      "Salt-N-Pepa",
      "TLC",
      "Run-DMC",
      "En Vogue"
    ],
    "correct": 0,
    "fact": "Salt-N-Pepa helped bring female hip-hop artists into the mainstream."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which rapper released the song 'U Can't Touch This'?",
    "answers": [
      "MC Hammer",
      "Vanilla Ice",
      "LL Cool J",
      "Sir Mix-a-Lot"
    ],
    "correct": 0,
    "fact": "MC Hammer became famous for his dance moves and signature style."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Who sang 'Ice Ice Baby'?",
    "answers": [
      "Vanilla Ice",
      "MC Hammer",
      "Kid Rock",
      "Coolio"
    ],
    "correct": 0,
    "fact": "'Ice Ice Baby' became one of the most recognizable songs of the early 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which group sang 'The Sign'?",
    "answers": [
      "Ace of Base",
      "Roxette",
      "The Cardigans",
      "ABBA"
    ],
    "correct": 0,
    "fact": "Ace of Base became one of the biggest international pop acts of the 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band sang 'Only Wanna Be With You'?",
    "answers": [
      "Hootie & the Blowfish",
      "Matchbox Twenty",
      "Counting Crows",
      "Blues Traveler"
    ],
    "correct": 0,
    "fact": "Hootie & the Blowfish were one of the biggest bands of the mid-1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which country-pop singer released 'Man! I Feel Like a Woman!'?",
    "answers": [
      "Shania Twain",
      "Faith Hill",
      "Trisha Yearwood",
      "LeAnn Rimes"
    ],
    "correct": 0,
    "fact": "Shania Twain helped bring country music into mainstream pop culture."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "MTV played a major role in making musicians into fashion icons during the 1980s and 1990s.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Music videos made an artist's image almost as important as the music itself."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which group sang 'I'll Make Love to You'?",
    "answers": [
      "Boyz II Men",
      "Jodeci",
      "New Edition",
      "All-4-One"
    ],
    "correct": 0,
    "fact": "Boyz II Men dominated 1990s R&B with some of the biggest ballads of the decade."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which singer performed the theme song for the movie Titanic?",
    "answers": [
      "Celine Dion",
      "Whitney Houston",
      "Mariah Carey",
      "Shania Twain"
    ],
    "correct": 0,
    "fact": "'My Heart Will Go On' became one of the biggest movie songs ever."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Who sang 'I Will Always Love You' from The Bodyguard soundtrack?",
    "answers": [
      "Whitney Houston",
      "Celine Dion",
      "Mariah Carey",
      "Toni Braxton"
    ],
    "correct": 0,
    "fact": "Whitney Houston's version became one of the best-selling singles in history."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which duo sang 'Truly Madly Deeply'?",
    "answers": [
      "Savage Garden",
      "98 Degrees",
      "Air Supply",
      "All-4-One"
    ],
    "correct": 0,
    "fact": "Savage Garden was one of the biggest pop acts of the late 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which singer released 'Torn' in the late 1990s?",
    "answers": [
      "Natalie Imbruglia",
      "Jewel",
      "Sarah McLachlan",
      "Fiona Apple"
    ],
    "correct": 0,
    "fact": "'Torn' became one of the most recognizable songs of the late 90s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which boy band included Justin Timberlake?",
    "answers": [
      "NSYNC",
      "Backstreet Boys",
      "98 Degrees",
      "Boyz II Men"
    ],
    "correct": 0,
    "fact": "NSYNC became one of the biggest pop groups at the end of the 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids organized their CD collections by genre, artist, or favorites.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "CD binders filled with carefully organized music were a major part of 1990s life."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which band sang 'Wake Me Up Before You Go-Go'?",
    "answers": [
      "Wham!",
      "Duran Duran",
      "Tears for Fears",
      "A-ha"
    ],
    "correct": 0,
    "fact": "Wham! became one of the biggest pop groups of the 1980s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band sang 'Everybody Wants to Rule the World'?",
    "answers": [
      "Tears for Fears",
      "Depeche Mode",
      "INXS",
      "Pet Shop Boys"
    ],
    "correct": 0,
    "fact": "Tears for Fears helped define the sound of 1980s pop music."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which band sang 'Take On Me'?",
    "answers": [
      "A-ha",
      "Europe",
      "Bon Jovi",
      "Simple Minds"
    ],
    "correct": 0,
    "fact": "The animated pencil-sketch music video became iconic."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which band sang 'Hungry Like the Wolf'?",
    "answers": [
      "Duran Duran",
      "Culture Club",
      "Wham!",
      "INXS"
    ],
    "correct": 0,
    "fact": "Duran Duran was one of the biggest MTV-era bands."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which song became a huge dance hit by Los del Río?",
    "answers": [
      "Macarena",
      "Conga",
      "Vogue",
      "Rhythm Is a Dancer"
    ],
    "correct": 0,
    "fact": "The Macarena became one of the biggest dance crazes of the 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which group sang 'Vogue'?",
    "answers": [
      "Madonna",
      "Janet Jackson",
      "Cher",
      "Tina Turner"
    ],
    "correct": 0,
    "fact": "Madonna's 'Vogue' became a defining pop culture moment."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which rapper sang 'Gangsta's Paradise'?",
    "answers": [
      "Coolio",
      "Dr. Dre",
      "Ice Cube",
      "LL Cool J"
    ],
    "correct": 0,
    "fact": "'Gangsta's Paradise' became one of the biggest rap songs of the 1990s."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which song by Sir Mix-a-Lot became famous in the 1990s?",
    "answers": [
      "Baby Got Back",
      "Jump Around",
      "Insane in the Brain",
      "California Love"
    ],
    "correct": 0,
    "fact": "'Baby Got Back' became one of the most recognizable hip-hop songs of the decade."
  },
  {
    "category": "80s & 90s Music",
    "difficulty": "True or False",
    "type": "True or False",
    "question": "Before streaming, many people listened to entire albums instead of individual songs.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Albums, cassette tapes, and CDs shaped how people discovered music."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What year did Marty McFly travel back to in Back to the Future?",
    "answers": [
      "1955",
      "1965",
      "1975",
      "1985"
    ],
    "correct": 0,
    "fact": "Back to the Future became one of the most beloved time-travel movies ever made."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What was the name of the time machine in Back to the Future?",
    "answers": [
      "DeLorean",
      "Mustang",
      "Camaro",
      "Thunderbird"
    ],
    "correct": 0,
    "fact": "The DeLorean became one of the most recognizable movie cars in history."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What item did E.T. want to do?",
    "answers": [
      "Phone home",
      "Go surfing",
      "Drive a car",
      "Become famous"
    ],
    "correct": 0,
    "fact": "E.T. became one of Steven Spielberg's most iconic films."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured the characters Mikey, Data, Mouth, and Chunk?",
    "answers": [
      "The Goonies",
      "Stand by Me",
      "The Sandlot",
      "Gremlins"
    ],
    "correct": 0,
    "fact": "The Goonies became a defining adventure movie for a generation."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What town did The Goonies take place near?",
    "answers": [
      "Astoria, Oregon",
      "Springfield",
      "Hill Valley",
      "Amity Island"
    ],
    "correct": 0,
    "fact": "Astoria, Oregon became a famous filming location because of the movie."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured Patrick Swayze as Johnny Castle?",
    "answers": [
      "Dirty Dancing",
      "Road House",
      "Ghost",
      "Point Break"
    ],
    "correct": 0,
    "fact": "Dirty Dancing remains one of the most quoted romance movies of the 1980s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What famous line is associated with Dirty Dancing?",
    "answers": [
      "Nobody puts Baby in a corner",
      "Show me the money",
      "You're killing me, Smalls",
      "Here's Johnny"
    ],
    "correct": 0,
    "fact": "The line became one of the most recognizable movie quotes of the decade."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was Maverick's aircraft in Top Gun?",
    "answers": [
      "F-14 Tomcat",
      "F-16 Falcon",
      "F-18 Hornet",
      "SR-71 Blackbird"
    ],
    "correct": 0,
    "fact": "The F-14 Tomcat became closely associated with the movie."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids remember renting movies from video stores on weekends.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Friday night trips to rent VHS tapes were a major part of 80s and 90s culture."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured a group of friends investigating ghosts in New York City?",
    "answers": [
      "Ghostbusters",
      "Beetlejuice",
      "Gremlins",
      "The Lost Boys"
    ],
    "correct": 0,
    "fact": "Ghostbusters became one of the most iconic comedy movies of the 1980s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What vehicle did the Ghostbusters use?",
    "answers": [
      "Ecto-1",
      "Batmobile",
      "DeLorean",
      "Mystery Machine"
    ],
    "correct": 0,
    "fact": "The Ecto-1 became one of the most recognizable movie vehicles."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured five students spending Saturday detention together?",
    "answers": [
      "The Breakfast Club",
      "Ferris Bueller's Day Off",
      "Sixteen Candles",
      "Pretty in Pink"
    ],
    "correct": 0,
    "fact": "The Breakfast Club became a defining movie for teenage life in the 1980s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What school did The Breakfast Club take place in?",
    "answers": [
      "Shermer High School",
      "Hill Valley High",
      "Bayside High",
      "Rydell High"
    ],
    "correct": 0,
    "fact": "Shermer High School became a fictional landmark in teen movie history."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured a teenager skipping school for an unforgettable day in Chicago?",
    "answers": [
      "Ferris Bueller's Day Off",
      "Risky Business",
      "Fast Times at Ridgemont High",
      "Can't Buy Me Love"
    ],
    "correct": 0,
    "fact": "Ferris Bueller became one of the most famous movie characters of the 1980s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What phrase is Ferris Bueller famous for saying?",
    "answers": [
      "Life moves pretty fast",
      "Nobody puts Baby in a corner",
      "Wax on, wax off",
      "Party on!"
    ],
    "correct": 0,
    "fact": "Ferris's advice became one of the most quoted movie lines of the decade."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie starred Molly Ringwald as Samantha Baker?",
    "answers": [
      "Sixteen Candles",
      "Pretty in Pink",
      "The Breakfast Club",
      "Dirty Dancing"
    ],
    "correct": 0,
    "fact": "Molly Ringwald became one of the biggest teen movie stars of the 1980s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured a teenager named Andie and a love triangle?",
    "answers": [
      "Pretty in Pink",
      "Sixteen Candles",
      "Footloose",
      "Say Anything"
    ],
    "correct": 0,
    "fact": "Pretty in Pink became a classic of 1980s teen cinema."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured Daniel LaRusso learning karate from Mr. Miyagi?",
    "answers": [
      "The Karate Kid",
      "Bloodsport",
      "Teen Wolf",
      "Rocky"
    ],
    "correct": 0,
    "fact": "'Wax on, wax off' became one of the most famous movie lessons ever."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids watched movies on VHS tapes before DVDs became common.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "VHS tapes were the home entertainment standard for much of the 1980s and 1990s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured the famous line 'Inconceivable!'?",
    "answers": [
      "The Princess Bride",
      "Labyrinth",
      "Willow",
      "The NeverEnding Story"
    ],
    "correct": 0,
    "fact": "The Princess Bride became one of the most quoted fantasy movies of the 1980s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was the name of the hero in The Princess Bride?",
    "answers": [
      "Westley",
      "Buttercup",
      "Humperdinck",
      "Fezzik"
    ],
    "correct": 0,
    "fact": "Westley became one of the most beloved adventure characters of the decade."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured a man named Beetlejuice who should not be said three times?",
    "answers": [
      "Beetlejuice",
      "Ghostbusters",
      "Gremlins",
      "Edward Scissorhands"
    ],
    "correct": 0,
    "fact": "Beetlejuice became one of Tim Burton's most memorable films."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured creatures called Mogwai?",
    "answers": [
      "Gremlins",
      "Critters",
      "Ghostbusters",
      "The Burbs"
    ],
    "correct": 0,
    "fact": "Gremlins combined comedy and horror and became a huge 1980s hit."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie followed four friends on a journey to find a body?",
    "answers": [
      "Stand by Me",
      "The Goonies",
      "The Outsiders",
      "Red Dawn"
    ],
    "correct": 0,
    "fact": "Stand by Me became a classic coming-of-age movie."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured the baseball-loving character Benny 'The Jet' Rodriguez?",
    "answers": [
      "The Sandlot",
      "Little Big League",
      "Angels in the Outfield",
      "Rookie of the Year"
    ],
    "correct": 0,
    "fact": "The Sandlot became one of the most nostalgic sports movies of the 1990s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was the famous line from The Sandlot involving a giant dog?",
    "answers": [
      "You're killing me, Smalls!",
      "Hey batter batter!",
      "Say hello to my little friend!",
      "Party on!"
    ],
    "correct": 0,
    "fact": "'You're killing me, Smalls!' remains one of the most quoted movie lines."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured Ralphie wanting a Red Ryder BB gun?",
    "answers": [
      "A Christmas Story",
      "Home Alone",
      "Elf",
      "The Santa Clause"
    ],
    "correct": 0,
    "fact": "A Christmas Story became a holiday tradition for many families."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured Kevin McCallister being left home alone?",
    "answers": [
      "Home Alone",
      "Problem Child",
      "Dennis the Menace",
      "Richie Rich"
    ],
    "correct": 0,
    "fact": "Home Alone became one of the biggest family comedies of the 1990s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids remember choosing VHS tapes during trips to video rental stores.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Video rental stores were a major weekend tradition before streaming."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie starred Julia Roberts as Vivian Ward?",
    "answers": [
      "Pretty Woman",
      "Notting Hill",
      "Runaway Bride",
      "My Best Friend's Wedding"
    ],
    "correct": 0,
    "fact": "Pretty Woman became one of the most iconic romantic comedies of the 1990s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actor played Edward Lewis in Pretty Woman?",
    "answers": [
      "Richard Gere",
      "Tom Cruise",
      "Kevin Costner",
      "Bruce Willis"
    ],
    "correct": 0,
    "fact": "The pairing of Richard Gere and Julia Roberts became one of Hollywood's most memorable romances."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie brought dinosaurs back through cloning technology?",
    "answers": [
      "Jurassic Park",
      "Jumanji",
      "Twister",
      "Godzilla"
    ],
    "correct": 0,
    "fact": "Jurassic Park changed special effects forever."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What type of dinosaur was the famous T. rex in Jurassic Park?",
    "answers": [
      "Tyrannosaurus Rex",
      "Velociraptor",
      "Triceratops",
      "Brachiosaurus"
    ],
    "correct": 0,
    "fact": "The T. rex scenes became some of the most memorable moments in movie history."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which animated movie featured Simba?",
    "answers": [
      "The Lion King",
      "Aladdin",
      "Tarzan",
      "Beauty and the Beast"
    ],
    "correct": 0,
    "fact": "The Lion King became one of Disney's biggest animated successes."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was Simba's father's name in The Lion King?",
    "answers": [
      "Mufasa",
      "Scar",
      "Rafiki",
      "Zazu"
    ],
    "correct": 0,
    "fact": "Mufasa remains one of Disney's most memorable characters."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which 1995 movie starred Alicia Silverstone as Cher Horowitz?",
    "answers": [
      "Clueless",
      "She's All That",
      "10 Things I Hate About You",
      "Can't Hardly Wait"
    ],
    "correct": 0,
    "fact": "Clueless became a defining movie of 1990s teen culture."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which horror movie featured the killer wearing a Ghostface mask?",
    "answers": [
      "Scream",
      "I Know What You Did Last Summer",
      "Urban Legend",
      "The Faculty"
    ],
    "correct": 0,
    "fact": "Scream helped revive the teen horror genre in the 1990s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie starred Robin Williams as a nanny named Mrs. Doubtfire?",
    "answers": [
      "Mrs. Doubtfire",
      "Hook",
      "Jumanji",
      "Patch Adams"
    ],
    "correct": 0,
    "fact": "Robin Williams' performance became one of his most beloved roles."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids remember movie theaters, VHS rentals, and cable TV as major entertainment sources.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Home entertainment changed dramatically during the 80s and 90s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured Wayne and Garth hosting a public access show?",
    "answers": [
      "Wayne's World",
      "Bill & Ted's Excellent Adventure",
      "Clerks",
      "Airheads"
    ],
    "correct": 0,
    "fact": "Wayne's World became one of the most successful Saturday Night Live movie adaptations."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What catchphrase was associated with Wayne's World?",
    "answers": [
      "Party on!",
      "Excellent!",
      "Groovy!",
      "Cowabunga!"
    ],
    "correct": 0,
    "fact": "Wayne and Garth's catchphrases became part of 1990s pop culture."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie starred Jim Carrey as a detective searching for missing pets?",
    "answers": [
      "Ace Ventura: Pet Detective",
      "The Mask",
      "Liar Liar",
      "Dumb and Dumber"
    ],
    "correct": 0,
    "fact": "Ace Ventura helped make Jim Carrey one of the biggest comedy stars of the 1990s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured Jim Carrey wearing a magical green mask?",
    "answers": [
      "The Mask",
      "Ace Ventura",
      "Batman Forever",
      "Yes Man"
    ],
    "correct": 0,
    "fact": "The Mask showcased Jim Carrey's famous physical comedy style."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which comedy featured two friends traveling with a briefcase full of money?",
    "answers": [
      "Dumb and Dumber",
      "Tommy Boy",
      "Happy Gilmore",
      "Billy Madison"
    ],
    "correct": 0,
    "fact": "Dumb and Dumber became one of the most quoted comedies of the 1990s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured basketball players teaming up with Bugs Bunny?",
    "answers": [
      "Space Jam",
      "Like Mike",
      "Hoosiers",
      "Teen Wolf"
    ],
    "correct": 0,
    "fact": "Space Jam became a huge hit with both sports fans and cartoon fans."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which 1996 movie featured aliens attacking Earth?",
    "answers": [
      "Independence Day",
      "Armageddon",
      "Men in Black",
      "Contact"
    ],
    "correct": 0,
    "fact": "Independence Day became one of the biggest box office hits of the 1990s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie starred Bruce Willis and Ben Affleck trying to stop an asteroid?",
    "answers": [
      "Armageddon",
      "Deep Impact",
      "Twister",
      "Mission: Impossible"
    ],
    "correct": 0,
    "fact": "Armageddon became one of the biggest action movies of 1998."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which 1999 movie introduced audiences to Neo and the Matrix?",
    "answers": [
      "The Matrix",
      "Blade",
      "Fight Club",
      "The Fifth Element"
    ],
    "correct": 0,
    "fact": "The Matrix changed action movies with its visual effects and storytelling."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids had favorite movie quotes that they repeated with friends.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Quoting movies became a major part of 80s and 90s social culture."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured a teenager who turned into a werewolf after a basketball accident?",
    "answers": [
      "Teen Wolf",
      "Karate Kid",
      "Footloose",
      "The Outsiders"
    ],
    "correct": 0,
    "fact": "Teen Wolf became one of the most recognizable teen comedies of the 1980s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured Kevin Bacon dancing in a town where dancing was banned?",
    "answers": [
      "Footloose",
      "Flashdance",
      "Dirty Dancing",
      "Footloose 2"
    ],
    "correct": 0,
    "fact": "Footloose became famous for its music, dancing, and rebellious teenage spirit."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured a boy named Elliott who befriended an alien?",
    "answers": [
      "E.T. the Extra-Terrestrial",
      "Alien",
      "Starman",
      "Flight of the Navigator"
    ],
    "correct": 0,
    "fact": "E.T. became one of the most beloved family movies ever made."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured a teenager named Marty McFly and a scientist named Doc Brown?",
    "answers": [
      "Back to the Future",
      "Bill & Ted's Excellent Adventure",
      "Time Bandits",
      "Peggy Sue Got Married"
    ],
    "correct": 0,
    "fact": "The friendship between Marty and Doc became iconic."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie starred Macaulay Culkin as a child accidentally left behind during Christmas?",
    "answers": [
      "Home Alone",
      "Richie Rich",
      "Problem Child",
      "Blank Check"
    ],
    "correct": 0,
    "fact": "Home Alone became a holiday tradition for millions of families."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Disney movie featured a young girl named Ariel?",
    "answers": [
      "The Little Mermaid",
      "Beauty and the Beast",
      "Aladdin",
      "Pocahontas"
    ],
    "correct": 0,
    "fact": "The Little Mermaid helped launch Disney's animation revival."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which Disney movie featured the characters Aladdin and Genie?",
    "answers": [
      "Aladdin",
      "The Lion King",
      "Hercules",
      "Mulan"
    ],
    "correct": 0,
    "fact": "Robin Williams' performance as Genie became legendary."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured a young boy named Josh who wished to become an adult?",
    "answers": [
      "Big",
      "Big Daddy",
      "Jack",
      "Jumanji"
    ],
    "correct": 0,
    "fact": "Tom Hanks starred in one of the most memorable fantasy comedies of the 1980s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie starred Robin Williams as a man trapped in a magical board game?",
    "answers": [
      "Jumanji",
      "Hook",
      "Mrs. Doubtfire",
      "Hook"
    ],
    "correct": 0,
    "fact": "Jumanji mixed adventure, fantasy, and comedy in a way that became a 90s favorite."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids remember waiting for movies to come out on VHS after seeing them in theaters.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "The gap between theaters and home release was part of the movie experience."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured Rocky Balboa as a famous boxer?",
    "answers": [
      "Rocky",
      "Raging Bull",
      "Bloodsport",
      "Karate Kid"
    ],
    "correct": 0,
    "fact": "The Rocky movies became some of the most famous sports films ever made."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured a group of kids playing baseball and the famous line 'You're killing me, Smalls!'?",
    "answers": [
      "The Sandlot",
      "Little Big League",
      "Rookie of the Year",
      "Major League"
    ],
    "correct": 0,
    "fact": "The Sandlot became a nostalgic favorite for generations of kids."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured Arnold Schwarzenegger trying to find a Turbo Man toy?",
    "answers": [
      "Jingle All the Way",
      "Kindergarten Cop",
      "Twins",
      "Last Action Hero"
    ],
    "correct": 0,
    "fact": "Jingle All the Way became a popular 1990s Christmas comedy."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie starred Arnold Schwarzenegger as a kindergarten teacher?",
    "answers": [
      "Kindergarten Cop",
      "Commando",
      "Predator",
      "True Lies"
    ],
    "correct": 0,
    "fact": "'It's not a tumor!' became one of the movie's most quoted lines."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured a character named Jack Burton?",
    "answers": [
      "Big Trouble in Little China",
      "Escape from New York",
      "Road House",
      "Die Hard"
    ],
    "correct": 0,
    "fact": "The movie became a cult classic with a dedicated fan following."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie starred Bruce Willis as police officer John McClane?",
    "answers": [
      "Die Hard",
      "Lethal Weapon",
      "Speed",
      "Under Siege"
    ],
    "correct": 0,
    "fact": "Die Hard became one of the most influential action movies ever made."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured a killer doll named Chucky?",
    "answers": [
      "Child's Play",
      "Scream",
      "Poltergeist",
      "Friday the 13th"
    ],
    "correct": 0,
    "fact": "Chucky became one of the most recognizable horror characters."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured a teenager named Sidney Prescott facing Ghostface?",
    "answers": [
      "Scream",
      "I Know What You Did Last Summer",
      "The Craft",
      "Urban Legend"
    ],
    "correct": 0,
    "fact": "Scream reinvented the slasher genre in the 1990s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured the phrase 'Show me the money!'?",
    "answers": [
      "Jerry Maguire",
      "Pretty Woman",
      "Big",
      "Risky Business"
    ],
    "correct": 0,
    "fact": "The line became one of the most quoted movie moments of the 1990s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids had movie posters, VHS collections, or favorite movie soundtracks.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Movies were a major part of identity and pop culture during the 80s and 90s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured a kid named Kevin McCallister defending his house from burglars?",
    "answers": [
      "Home Alone",
      "Richie Rich",
      "Blank Check",
      "Dennis the Menace"
    ],
    "correct": 0,
    "fact": "Home Alone became one of the most popular family movies of the 1990s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie starred Julia Roberts as a woman hired to accompany a businessman?",
    "answers": [
      "Pretty Woman",
      "Erin Brockovich",
      "Runaway Bride",
      "Sleeping with the Enemy"
    ],
    "correct": 0,
    "fact": "Pretty Woman became one of the biggest romantic comedies ever made."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured a magical nanny named Mary Poppins?",
    "answers": [
      "Mary Poppins",
      "Hook",
      "Matilda",
      "Annie"
    ],
    "correct": 0,
    "fact": "Mary Poppins remained a beloved family movie across generations."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which 1996 movie starred a young girl named Matilda with special powers?",
    "answers": [
      "Matilda",
      "Jumanji",
      "Casper",
      "Now and Then"
    ],
    "correct": 0,
    "fact": "Matilda became a favorite among kids who loved books and imagination."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which movie featured a friendly ghost named Casper?",
    "answers": [
      "Casper",
      "Beetlejuice",
      "Ghost",
      "Poltergeist"
    ],
    "correct": 0,
    "fact": "Casper introduced many kids to a friendly version of a ghost story."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie starred Will Smith fighting aliens with the government?",
    "answers": [
      "Men in Black",
      "Independence Day",
      "Bad Boys",
      "Wild Wild West"
    ],
    "correct": 0,
    "fact": "Men in Black became one of the biggest sci-fi comedies of the 1990s."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured a group of witches played by three sisters?",
    "answers": [
      "Hocus Pocus",
      "The Craft",
      "Practical Magic",
      "Casper"
    ],
    "correct": 0,
    "fact": "Hocus Pocus became a Halloween favorite years after its release."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie starred Adam Sandler as a hockey player turned golfer?",
    "answers": [
      "Happy Gilmore",
      "Billy Madison",
      "The Waterboy",
      "Big Daddy"
    ],
    "correct": 0,
    "fact": "Happy Gilmore became one of Adam Sandler's most quoted comedies."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which movie featured the phrase 'As if!'?",
    "answers": [
      "Clueless",
      "Mean Girls",
      "She's All That",
      "10 Things I Hate About You"
    ],
    "correct": 0,
    "fact": "Cher Horowitz's vocabulary became a huge part of 1990s pop culture."
  },
  {
    "category": "80s & 90s Movies",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Gen X kids often memorized movie quotes and repeated them with friends.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Movie quotes became a major part of everyday conversation before social media."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which company created Super Mario?",
    "answers": [
      "Nintendo",
      "Sega",
      "Atari",
      "Sony"
    ],
    "correct": 0,
    "fact": "Nintendo became one of the biggest names in gaming history."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What was Mario's brother's name?",
    "answers": [
      "Luigi",
      "Yoshi",
      "Wario",
      "Toad"
    ],
    "correct": 0,
    "fact": "Luigi became one of Nintendo's most famous characters."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which game featured a yellow character eating dots through a maze?",
    "answers": [
      "Pac-Man",
      "Frogger",
      "Donkey Kong",
      "Galaga"
    ],
    "correct": 0,
    "fact": "Pac-Man became one of the most recognizable arcade games ever created."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What did Pac-Man eat to become more powerful?",
    "answers": [
      "Power pellets",
      "Mushrooms",
      "Coins",
      "Gems"
    ],
    "correct": 0,
    "fact": "Power pellets allowed Pac-Man to chase the ghosts."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What color is Sonic the Hedgehog?",
    "answers": [
      "Blue",
      "Red",
      "Green",
      "Yellow"
    ],
    "correct": 0,
    "fact": "Sonic's speed became his defining feature."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which handheld gaming system was released by Nintendo in 1989?",
    "answers": [
      "Game Boy",
      "Game Gear",
      "PSP",
      "Virtual Boy"
    ],
    "correct": 0,
    "fact": "The Game Boy became one of the best-selling handheld systems ever."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which game came bundled with many original Game Boys?",
    "answers": [
      "Tetris",
      "Super Mario Land",
      "Pokémon",
      "Kirby"
    ],
    "correct": 0,
    "fact": "Tetris became one of the most addictive puzzle games ever made."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which arcade game featured a gorilla throwing barrels?",
    "answers": [
      "Donkey Kong",
      "Frogger",
      "Q*bert",
      "Dig Dug"
    ],
    "correct": 0,
    "fact": "Donkey Kong introduced players to the character who would become Mario."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids played arcade games using quarters.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Arcades were social hangouts where kids competed for high scores."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which fighting game featured characters like Ryu and Ken?",
    "answers": [
      "Street Fighter II",
      "Mortal Kombat",
      "Killer Instinct",
      "Tekken"
    ],
    "correct": 0,
    "fact": "Street Fighter II helped define the fighting game genre."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which character was famous for the move 'Hadouken'?",
    "answers": [
      "Ryu",
      "Scorpion",
      "Sub-Zero",
      "Chun-Li"
    ],
    "correct": 0,
    "fact": "Ryu became one of the most recognizable fighting game characters."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which game featured the phrase 'Finish Him!'?",
    "answers": [
      "Mortal Kombat",
      "Street Fighter",
      "Tekken",
      "Double Dragon"
    ],
    "correct": 0,
    "fact": "Mortal Kombat became famous for its intense fighting style and finishing moves."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Mortal Kombat character uses a spear attack and says 'Get over here!'?",
    "answers": [
      "Scorpion",
      "Sub-Zero",
      "Raiden",
      "Johnny Cage"
    ],
    "correct": 0,
    "fact": "Scorpion became one of gaming's most iconic characters."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which Nintendo adventure game featured Link?",
    "answers": [
      "The Legend of Zelda",
      "Metroid",
      "Final Fantasy",
      "Castlevania"
    ],
    "correct": 0,
    "fact": "The Legend of Zelda became one of Nintendo's most beloved franchises."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What princess does Link often rescue in The Legend of Zelda?",
    "answers": [
      "Princess Zelda",
      "Princess Peach",
      "Princess Daisy",
      "Princess Toadstool"
    ],
    "correct": 0,
    "fact": "The series became known for exploration, puzzles, and adventure."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which Nintendo game featured a bounty hunter named Samus?",
    "answers": [
      "Metroid",
      "Kirby",
      "Star Fox",
      "F-Zero"
    ],
    "correct": 0,
    "fact": "Samus Aran was one of gaming's earliest major female heroes."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which game was famous for the code 'Up Up Down Down Left Right Left Right B A Start'?",
    "answers": [
      "Contra",
      "Super Mario Bros.",
      "Zelda",
      "Mega Man"
    ],
    "correct": 0,
    "fact": "The Konami Code became one of gaming's most famous secrets."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which Nintendo game used a light gun to shoot ducks?",
    "answers": [
      "Duck Hunt",
      "Duck Tales",
      "Duck Dodgers",
      "Hunt Down"
    ],
    "correct": 0,
    "fact": "Duck Hunt was one of the most memorable NES games."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids had to blow into Nintendo cartridges when games wouldn't work.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Blowing into cartridges became a legendary gaming ritual (even though it wasn't recommended)."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which game featured Mario trying to rescue Princess Peach?",
    "answers": [
      "Super Mario Bros.",
      "Metroid",
      "F-Zero",
      "Kid Icarus"
    ],
    "correct": 0,
    "fact": "Super Mario Bros. helped make the Nintendo Entertainment System a huge success."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What is the name of Mario's dinosaur companion?",
    "answers": [
      "Yoshi",
      "Toad",
      "Bowser",
      "Kirby"
    ],
    "correct": 0,
    "fact": "Yoshi became one of Nintendo's most popular characters."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which Nintendo racing game featured characters like Mario and Luigi?",
    "answers": [
      "Mario Kart",
      "F-Zero",
      "Excitebike",
      "Wave Race"
    ],
    "correct": 0,
    "fact": "Mario Kart became one of Nintendo's most successful multiplayer games."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which character is the main villain in many Mario games?",
    "answers": [
      "Bowser",
      "Wario",
      "Ganondorf",
      "Dr. Robotnik"
    ],
    "correct": 0,
    "fact": "Bowser has been Mario's rival since the original games."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which game franchise introduced Pikachu?",
    "answers": [
      "Pokémon",
      "Digimon",
      "Kirby",
      "EarthBound"
    ],
    "correct": 0,
    "fact": "Pokémon became a worldwide phenomenon in the late 1990s."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What device was Pokémon originally played on?",
    "answers": [
      "Game Boy",
      "Nintendo 64",
      "Super Nintendo",
      "Sega Genesis"
    ],
    "correct": 0,
    "fact": "The Game Boy helped make Pokémon a worldwide success."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which company created the Sega Genesis?",
    "answers": [
      "Sega",
      "Nintendo",
      "Atari",
      "Capcom"
    ],
    "correct": 0,
    "fact": "The Sega Genesis competed directly with Nintendo during the console wars."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was Sega's famous slogan during the Genesis era?",
    "answers": [
      "Genesis does what Nintendon't",
      "Play it loud",
      "Now you're playing with power",
      "Game on"
    ],
    "correct": 0,
    "fact": "The slogan became a famous part of the Nintendo vs. Sega rivalry."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Nintendo 64 game featured racing with shells, bananas, and mushrooms?",
    "answers": [
      "Mario Kart 64",
      "Wave Race 64",
      "Star Fox 64",
      "F-Zero X"
    ],
    "correct": 0,
    "fact": "Mario Kart 64 became a favorite multiplayer game for friends and families."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "The Nintendo 64 used cartridges instead of CDs.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Nintendo stayed with cartridges while many competitors moved toward discs."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which arcade game featured aliens moving across the screen toward the player?",
    "answers": [
      "Space Invaders",
      "Asteroids",
      "Galaga",
      "Defender"
    ],
    "correct": 0,
    "fact": "Space Invaders helped start the golden age of arcade gaming."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which arcade game featured a spaceship fighting waves of aliens and allowed players to capture bonus ships?",
    "answers": [
      "Galaga",
      "Pac-Man",
      "Dig Dug",
      "Centipede"
    ],
    "correct": 0,
    "fact": "Galaga remains one of the most popular arcade shooters ever created."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which game featured a character climbing platforms while avoiding barrels thrown by a gorilla?",
    "answers": [
      "Donkey Kong",
      "Q*bert",
      "Frogger",
      "Dig Dug"
    ],
    "correct": 0,
    "fact": "Donkey Kong introduced players to both Mario and one of gaming's most famous villains."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which arcade character hopped on colorful cubes while changing their colors?",
    "answers": [
      "Q*bert",
      "Pac-Man",
      "Dig Dug",
      "Frogger"
    ],
    "correct": 0,
    "fact": "Q*bert became a classic arcade character during the 1980s."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which arcade game featured a character inflating enemies underground?",
    "answers": [
      "Dig Dug",
      "Centipede",
      "Asteroids",
      "Rampage"
    ],
    "correct": 0,
    "fact": "Dig Dug was a popular arcade game known for its unique gameplay."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which arcade game featured a bug-like creature moving down a field of mushrooms?",
    "answers": [
      "Centipede",
      "Galaga",
      "Defender",
      "Tempest"
    ],
    "correct": 0,
    "fact": "Centipede became one of Atari's most successful arcade games."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which basketball game was famous for exaggerated moves and the phrase 'He's on fire!'?",
    "answers": [
      "NBA Jam",
      "NBA Live",
      "NBA Street",
      "Double Dribble"
    ],
    "correct": 0,
    "fact": "NBA Jam became one of the most popular arcade sports games."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which arcade game featured four heroes fighting enemies in New York City?",
    "answers": [
      "Teenage Mutant Ninja Turtles",
      "Final Fight",
      "Streets of Rage",
      "Double Dragon"
    ],
    "correct": 0,
    "fact": "The TMNT arcade game was a favorite multiplayer arcade experience."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids memorized arcade game patterns to beat difficult levels.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Mastering arcade games was a badge of honor before online gaming existed."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which Nintendo character wears a green hat and carries a sword?",
    "answers": [
      "Link",
      "Mario",
      "Luigi",
      "Kirby"
    ],
    "correct": 0,
    "fact": "Link became one of Nintendo's most famous adventure heroes."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which game featured a pink character who could copy enemies' abilities?",
    "answers": [
      "Kirby",
      "Yoshi",
      "Pikachu",
      "Jigglypuff"
    ],
    "correct": 0,
    "fact": "Kirby became known for his ability to inhale enemies and copy powers."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which game franchise featured Mega Man fighting robot bosses?",
    "answers": [
      "Mega Man",
      "Metroid",
      "Contra",
      "Castlevania"
    ],
    "correct": 0,
    "fact": "Mega Man became one of Capcom's most popular franchises."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which computer game taught many kids about exploring the Oregon Trail?",
    "answers": [
      "The Oregon Trail",
      "SimCity",
      "Myst",
      "Where in the World Is Carmen Sandiego?"
    ],
    "correct": 0,
    "fact": "The Oregon Trail became a legendary school computer game."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which educational game had players track down the famous thief Carmen Sandiego?",
    "answers": [
      "Where in the World Is Carmen Sandiego?",
      "The Oregon Trail",
      "Number Munchers",
      "Reader Rabbit"
    ],
    "correct": 0,
    "fact": "Carmen Sandiego made learning geography feel like an adventure."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which puzzle game involved arranging falling blocks?",
    "answers": [
      "Tetris",
      "Pong",
      "Frogger",
      "Asteroids"
    ],
    "correct": 0,
    "fact": "Tetris became one of the best-selling video games ever created."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which handheld system was Nintendo's competitor to the Game Boy?",
    "answers": [
      "Sega Game Gear",
      "PlayStation Portable",
      "Atari Lynx",
      "Nintendo DS"
    ],
    "correct": 0,
    "fact": "The Game Gear offered color graphics but could not beat the Game Boy's popularity."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which game featured the character Donkey Kong Country?",
    "answers": [
      "Donkey Kong",
      "Banjo-Kazooie",
      "Crash Bandicoot",
      "Spyro"
    ],
    "correct": 0,
    "fact": "Donkey Kong Country helped showcase impressive graphics on the Super Nintendo."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which console introduced players to Crash Bandicoot?",
    "answers": [
      "PlayStation",
      "Nintendo 64",
      "Sega Genesis",
      "Super Nintendo"
    ],
    "correct": 0,
    "fact": "Crash Bandicoot became one of PlayStation's signature characters."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids played computer games at school before having computers at home.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "School computer labs introduced many kids to their first digital experiences."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which console was released by Sony in 1994?",
    "answers": [
      "PlayStation",
      "Dreamcast",
      "Xbox",
      "GameCube"
    ],
    "correct": 0,
    "fact": "The original PlayStation became one of the most successful gaming consoles ever."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which PlayStation game featured a character named Lara Croft?",
    "answers": [
      "Tomb Raider",
      "Resident Evil",
      "Final Fantasy VII",
      "Crash Bandicoot"
    ],
    "correct": 0,
    "fact": "Lara Croft became one of gaming's most recognizable characters."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which Nintendo 64 game featured a dinosaur companion named Yoshi?",
    "answers": [
      "Super Mario 64",
      "GoldenEye 007",
      "Star Fox 64",
      "Perfect Dark"
    ],
    "correct": 0,
    "fact": "Super Mario 64 helped redefine 3D gaming."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Nintendo 64 game became famous for multiplayer battles with friends?",
    "answers": [
      "GoldenEye 007",
      "Pokémon Stadium",
      "Banjo-Kazooie",
      "Wave Race"
    ],
    "correct": 0,
    "fact": "GoldenEye 007 made split-screen multiplayer legendary."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which Pokémon was the most famous electric mouse character?",
    "answers": [
      "Pikachu",
      "Charmander",
      "Bulbasaur",
      "Squirtle"
    ],
    "correct": 0,
    "fact": "Pikachu became one of the most recognizable characters worldwide."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What were the original Pokémon games released on Game Boy?",
    "answers": [
      "Red and Blue",
      "Gold and Silver",
      "Yellow and Green",
      "Black and White"
    ],
    "correct": 0,
    "fact": "Pokémon Red and Blue started the worldwide Pokémon craze."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which game series featured the character Sonic and his rival Knuckles?",
    "answers": [
      "Sonic the Hedgehog",
      "Super Mario",
      "Crash Bandicoot",
      "Spyro"
    ],
    "correct": 0,
    "fact": "Sonic became Sega's mascot during the 1990s console wars."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which game featured a character named Cloud Strife?",
    "answers": [
      "Final Fantasy VII",
      "Chrono Trigger",
      "Kingdom Hearts",
      "Dragon Quest"
    ],
    "correct": 0,
    "fact": "Final Fantasy VII helped make role-playing games more popular in the West."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which game featured a bandicoot named Crash?",
    "answers": [
      "Crash Bandicoot",
      "Spyro",
      "Rayman",
      "Earthworm Jim"
    ],
    "correct": 0,
    "fact": "Crash Bandicoot became one of PlayStation's biggest mascots."
  },
  {
    "category": "80s & 90s Video Games",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Gen X kids often had to physically go to a friend's house to play multiplayer games.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Before online gaming, multiplayer meant sitting together in the same room."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom featured the Tanner family and Uncle Jesse?",
    "answers": [
      "Full House",
      "Family Matters",
      "Growing Pains",
      "Who's the Boss?"
    ],
    "correct": 0,
    "fact": "Full House became one of the most recognizable family sitcoms of the late 80s and 90s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "What city was Full House set in?",
    "answers": [
      "San Francisco",
      "New York",
      "Chicago",
      "Los Angeles"
    ],
    "correct": 0,
    "fact": "The Tanner house and San Francisco became closely connected with the show."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which character on Full House was known for saying 'Have mercy!'?",
    "answers": [
      "Uncle Jesse",
      "Joey",
      "Danny Tanner",
      "Steve"
    ],
    "correct": 0,
    "fact": "Uncle Jesse became one of John Stamos' most famous roles."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which show featured Zack Morris at Bayside High School?",
    "answers": [
      "Saved by the Bell",
      "Boy Meets World",
      "Hangin' with Mr. Cooper",
      "Step by Step"
    ],
    "correct": 0,
    "fact": "Saved by the Bell became a defining teen show of the early 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was Zack Morris' famous ability to do on Saved by the Bell?",
    "answers": [
      "Break the fourth wall and talk to the audience",
      "Time travel",
      "Play professional sports",
      "Run a restaurant"
    ],
    "correct": 0,
    "fact": "Zack's camera conversations became one of the show's trademarks."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom featured Steve Urkel?",
    "answers": [
      "Family Matters",
      "Perfect Strangers",
      "Step by Step",
      "Boy Meets World"
    ],
    "correct": 0,
    "fact": "Steve Urkel became one of the most famous sitcom characters of the 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom starred Bill Cosby as Cliff Huxtable?",
    "answers": [
      "The Cosby Show",
      "Cheers",
      "Roseanne",
      "Family Ties"
    ],
    "correct": 0,
    "fact": "The Cosby Show was one of the highest-rated sitcoms of the 1980s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Gen X kids often planned their evenings around when their favorite TV shows aired.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Before streaming and DVRs, TV schedules mattered."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom featured Tim 'The Tool Man' Taylor?",
    "answers": [
      "Home Improvement",
      "Full House",
      "Family Matters",
      "Step by Step"
    ],
    "correct": 0,
    "fact": "Home Improvement was one of the biggest sitcoms of the 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was Tim Taylor's TV show called on Home Improvement?",
    "answers": [
      "Tool Time",
      "Fix It Up",
      "Man's Workshop",
      "The Tool Shed"
    ],
    "correct": 0,
    "fact": "The fictional show-within-a-show became one of the series' trademarks."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which show starred Will Smith as a fictional version of himself?",
    "answers": [
      "The Fresh Prince of Bel-Air",
      "Martin",
      "Family Matters",
      "Living Single"
    ],
    "correct": 0,
    "fact": "The Fresh Prince helped launch Will Smith's acting career."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What city did The Fresh Prince move to?",
    "answers": [
      "Bel-Air",
      "Chicago",
      "New York",
      "Miami"
    ],
    "correct": 0,
    "fact": "The show contrasted Will's Philadelphia background with wealthy Bel-Air life."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom starred Roseanne Barr as Roseanne Conner?",
    "answers": [
      "Roseanne",
      "Murphy Brown",
      "Designing Women",
      "Grace Under Fire"
    ],
    "correct": 0,
    "fact": "Roseanne became one of the most talked-about sitcoms of the late 1980s and 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which sitcom featured the Bundy family?",
    "answers": [
      "Married... with Children",
      "Cheers",
      "Seinfeld",
      "Frasier"
    ],
    "correct": 0,
    "fact": "The Bundys became one of television's most famous dysfunctional families."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "TGIF was a popular Friday night lineup of family-friendly TV shows in the 1990s.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Many kids grew up watching Friday night sitcom blocks."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom featured Jerry, George, Elaine, and Kramer?",
    "answers": [
      "Seinfeld",
      "Friends",
      "Cheers",
      "Frasier"
    ],
    "correct": 0,
    "fact": "Seinfeld became known as 'a show about nothing' and changed sitcom comedy."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was Kramer's first name on Seinfeld?",
    "answers": [
      "COSMO",
      "Cosmo",
      "George",
      "Newman"
    ],
    "correct": 0,
    "fact": "Cosmo Kramer became one of the most recognizable sitcom characters."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom featured Rachel, Ross, Monica, Chandler, Joey, and Phoebe?",
    "answers": [
      "Friends",
      "Seinfeld",
      "Will & Grace",
      "Mad About You"
    ],
    "correct": 0,
    "fact": "Friends became one of the biggest television shows of the 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Where did the Friends characters often hang out?",
    "answers": [
      "Central Perk",
      "Monk's Cafe",
      "Cheers",
      "Luke's Diner"
    ],
    "correct": 0,
    "fact": "Central Perk became one of the most famous fictional coffee shops."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom was set in a Boston bar?",
    "answers": [
      "Cheers",
      "Seinfeld",
      "Friends",
      "Night Court"
    ],
    "correct": 0,
    "fact": "Cheers became one of the most successful sitcoms of the 1980s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was the name of the bar owner on Cheers?",
    "answers": [
      "Sam Malone",
      "Frasier Crane",
      "Norm Peterson",
      "Cliff Clavin"
    ],
    "correct": 0,
    "fact": "Sam Malone was played by Ted Danson."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which animated show featured Bart and Homer Simpson?",
    "answers": [
      "The Simpsons",
      "South Park",
      "Family Guy",
      "Beavis and Butt-Head"
    ],
    "correct": 0,
    "fact": "The Simpsons became one of the longest-running animated shows in television history."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What is Bart Simpson's famous catchphrase?",
    "answers": [
      "Ay caramba!",
      "Eat my shorts!",
      "D'oh!",
      "Excellent!"
    ],
    "correct": 0,
    "fact": "Bart's catchphrases became a huge part of 1990s pop culture."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which animated show featured two teenagers named Beavis and Butt-Head?",
    "answers": [
      "Beavis and Butt-Head",
      "Daria",
      "Ren & Stimpy",
      "Rocko's Modern Life"
    ],
    "correct": 0,
    "fact": "Beavis and Butt-Head became symbols of 1990s MTV culture."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids watched TV shows live because recording shows was not common.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Before DVRs and streaming, missing a show often meant waiting for reruns."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show focused on wealthy teenagers living in Beverly Hills?",
    "answers": [
      "Beverly Hills 90210",
      "Melrose Place",
      "Dawson's Creek",
      "Saved by the Bell"
    ],
    "correct": 0,
    "fact": "90210 became one of the defining teen dramas of the 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actress played Kelly Taylor on Beverly Hills 90210?",
    "answers": [
      "Jennie Garth",
      "Tori Spelling",
      "Shannen Doherty",
      "Sarah Michelle Gellar"
    ],
    "correct": 0,
    "fact": "Kelly Taylor became one of the most recognizable teen drama characters."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which show featured lifeguards running along a California beach?",
    "answers": [
      "Baywatch",
      "Melrose Place",
      "Pacific Blue",
      "Miami Vice"
    ],
    "correct": 0,
    "fact": "Baywatch became one of the most watched TV shows worldwide."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actress became famous for playing C.J. Parker on Baywatch?",
    "answers": [
      "Pamela Anderson",
      "Carmen Electra",
      "Heather Locklear",
      "Denise Richards"
    ],
    "correct": 0,
    "fact": "Pamela Anderson became one of the most recognizable faces of 1990s television."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which network was famous for shows like Rugrats and Doug?",
    "answers": [
      "Nickelodeon",
      "Disney Channel",
      "Cartoon Network",
      "MTV"
    ],
    "correct": 0,
    "fact": "Nickelodeon became a major part of 90s childhood."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Nickelodeon show featured Tommy Pickles and his baby friends?",
    "answers": [
      "Rugrats",
      "Hey Arnold!",
      "Rocko's Modern Life",
      "Doug"
    ],
    "correct": 0,
    "fact": "Rugrats became one of Nickelodeon's biggest animated hits."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Saturday morning cartoons were a major weekend tradition for many Gen X kids.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Saturday mornings were a weekly ritual before streaming and on-demand cartoons."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which Nickelodeon show featured a group of kids attending P.S. 118?",
    "answers": [
      "Hey Arnold!",
      "Rugrats",
      "Doug",
      "Rocket Power"
    ],
    "correct": 0,
    "fact": "Hey Arnold! became one of Nickelodeon's most loved 90s cartoons."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which character was Arnold's best friend on Hey Arnold?",
    "answers": [
      "Gerald",
      "Helga",
      "Eugene",
      "Harold"
    ],
    "correct": 0,
    "fact": "Arnold and Gerald's friendship was a major part of the show."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which Nickelodeon show featured a kid named Doug Funnie?",
    "answers": [
      "Doug",
      "Rugrats",
      "Clarissa Explains It All",
      "Kenan & Kel"
    ],
    "correct": 0,
    "fact": "Doug was one of Nickelodeon's original animated series."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Nickelodeon show starred Kenan Thompson and Kel Mitchell?",
    "answers": [
      "Kenan & Kel",
      "All That",
      "Salute Your Shorts",
      "The Secret World of Alex Mack"
    ],
    "correct": 0,
    "fact": "Kenan & Kel became one of Nickelodeon's most popular live-action shows."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which show featured Clarissa Darling explaining things directly to viewers?",
    "answers": [
      "Clarissa Explains It All",
      "Blossom",
      "Sabrina the Teenage Witch",
      "Step by Step"
    ],
    "correct": 0,
    "fact": "Clarissa was one of Nickelodeon's first major live-action hits."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which MTV show featured music videos, celebrity interviews, and pop culture?",
    "answers": [
      "Total Request Live",
      "Nick News",
      "106 & Park",
      "The Disney Afternoon"
    ],
    "correct": 0,
    "fact": "MTV helped define youth culture throughout the 1980s and 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which MTV animated show featured Beavis and Butt-Head watching music videos?",
    "answers": [
      "Beavis and Butt-Head",
      "Daria",
      "Aeon Flux",
      "The Maxx"
    ],
    "correct": 0,
    "fact": "The show became a symbol of 1990s alternative culture."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which MTV animated show followed a smart teenager named Daria Morgendorffer?",
    "answers": [
      "Daria",
      "Rugrats",
      "Doug",
      "Recess"
    ],
    "correct": 0,
    "fact": "Daria became known for its sarcastic humor and social commentary."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which Disney Channel show featured twins Zack and Cody living in a hotel?",
    "answers": [
      "The Suite Life of Zack & Cody",
      "Even Stevens",
      "Lizzie McGuire",
      "Boy Meets World"
    ],
    "correct": 0,
    "fact": "The show became popular with younger viewers in the 2000s, just after the 90s era."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids watched cartoons and shows only at the times they were scheduled to air.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Before streaming, TV schedules controlled when people watched their favorite shows."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom featured the Winslow family and Steve Urkel?",
    "answers": [
      "Family Matters",
      "Step by Step",
      "Full House",
      "Growing Pains"
    ],
    "correct": 0,
    "fact": "Family Matters became one of the most popular TGIF shows."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show featured the character Balki Bartokomous?",
    "answers": [
      "Perfect Strangers",
      "Family Ties",
      "Cheers",
      "Who's the Boss?"
    ],
    "correct": 0,
    "fact": "Balki's catchphrases and personality made him a memorable sitcom character."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was the name of Tony Micelli's daughter on Who's the Boss?",
    "answers": [
      "Samantha",
      "Angela",
      "Mona",
      "Jennifer"
    ],
    "correct": 0,
    "fact": "Samantha Micelli was played by Alyssa Milano."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom featured the Seaver family?",
    "answers": [
      "Growing Pains",
      "Family Ties",
      "Roseanne",
      "Home Improvement"
    ],
    "correct": 0,
    "fact": "Growing Pains helped launch the careers of several young actors."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Who played Mike Seaver on Growing Pains?",
    "answers": [
      "Kirk Cameron",
      "Michael J. Fox",
      "Jason Bateman",
      "Corey Feldman"
    ],
    "correct": 0,
    "fact": "Kirk Cameron became a major teen star during the 1980s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom starred Michael J. Fox as Alex P. Keaton?",
    "answers": [
      "Family Ties",
      "Teen Wolf",
      "Growing Pains",
      "Cheers"
    ],
    "correct": 0,
    "fact": "Family Ties became a defining sitcom of the 1980s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which actor played Alex P. Keaton on Family Ties?",
    "answers": [
      "Michael J. Fox",
      "Matthew Broderick",
      "Emilio Estevez",
      "Rob Lowe"
    ],
    "correct": 0,
    "fact": "The role helped make Michael J. Fox a major television star."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which TGIF show featured the Tanner family and Uncle Jesse?",
    "answers": [
      "Full House",
      "Step by Step",
      "Family Matters",
      "Hangin' with Mr. Cooper"
    ],
    "correct": 0,
    "fact": "Full House became one of the most recognizable family shows of the era."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "TGIF was a Friday night tradition for many kids growing up in the 1990s.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Friday night sitcom blocks became a weekly ritual for many families."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon featured four turtles trained in martial arts?",
    "answers": [
      "Teenage Mutant Ninja Turtles",
      "Street Sharks",
      "Gargoyles",
      "Biker Mice from Mars"
    ],
    "correct": 0,
    "fact": "The Ninja Turtles became one of the biggest cartoon and toy franchises of the 1980s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon featured a hero with a magical sword who shouted 'By the power of Grayskull!'?",
    "answers": [
      "He-Man and the Masters of the Universe",
      "Thundercats",
      "Voltron",
      "G.I. Joe"
    ],
    "correct": 0,
    "fact": "He-Man became one of the biggest action figure and cartoon franchises of the 1980s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was He-Man's enemy's name?",
    "answers": [
      "Skeltor",
      "Skeletor",
      "Mumm-Ra",
      "Shredder"
    ],
    "correct": 1,
    "fact": "Skeletor became one of the most recognizable cartoon villains."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon featured Papa Smurf and a village of blue characters?",
    "answers": [
      "The Smurfs",
      "The Snorks",
      "The Care Bears",
      "Rainbow Brite"
    ],
    "correct": 0,
    "fact": "The Smurfs became a worldwide cartoon and merchandise phenomenon."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon featured characters with symbols on their bellies representing feelings?",
    "answers": [
      "The Care Bears",
      "My Little Pony",
      "Rainbow Brite",
      "Strawberry Shortcake"
    ],
    "correct": 0,
    "fact": "The Care Bears became one of the biggest toy and cartoon brands of the 1980s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cartoon featured the characters Huey, Dewey, and Louie?",
    "answers": [
      "DuckTales",
      "Chip 'n Dale Rescue Rangers",
      "Darkwing Duck",
      "TailSpin"
    ],
    "correct": 0,
    "fact": "DuckTales was one of Disney's most popular animated series."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon featured a group of children and a magical rainbow connection to toys?",
    "answers": [
      "My Little Pony",
      "Transformers",
      "GI Joe",
      "Inspector Gadget"
    ],
    "correct": 0,
    "fact": "My Little Pony became a major part of 1980s childhood culture."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cartoon featured robots that could transform into vehicles?",
    "answers": [
      "Transformers",
      "Voltron",
      "M.A.S.K.",
      "Robotech"
    ],
    "correct": 0,
    "fact": "Transformers became famous through both cartoons and toys."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Saturday morning cartoons were often tied to toy commercials and merchandise.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Many popular cartoons of the era were connected to toy lines."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which Animaniacs characters lived in a laboratory and tried to take over the world?",
    "answers": [
      "Pinky and the Brain",
      "Yakko and Wakko",
      "Slappy and Skippy",
      "Rita and Runt"
    ],
    "correct": 0,
    "fact": "The phrase 'Are you pondering what I'm pondering?' became iconic."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon featured young versions of Looney Tunes characters?",
    "answers": [
      "Tiny Toon Adventures",
      "Animaniacs",
      "Looney Tunes",
      "Space Jam"
    ],
    "correct": 0,
    "fact": "Tiny Toon Adventures introduced classic characters to a new generation."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which superhero cartoon featured Kevin Conroy as the voice of Batman?",
    "answers": [
      "Batman: The Animated Series",
      "Spider-Man",
      "X-Men",
      "Super Friends"
    ],
    "correct": 0,
    "fact": "Batman: The Animated Series is considered one of the greatest superhero cartoons ever made."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which animated superhero team featured Wolverine and Cyclops?",
    "answers": [
      "X-Men",
      "Avengers",
      "Fantastic Four",
      "Justice League"
    ],
    "correct": 0,
    "fact": "The X-Men animated series introduced many kids to Marvel characters."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which X-Men character had metal claws?",
    "answers": [
      "Wolverine",
      "Cyclops",
      "Storm",
      "Beast"
    ],
    "correct": 0,
    "fact": "Wolverine became one of Marvel's most popular characters."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which show featured teenagers who could transform into colorful superheroes?",
    "answers": [
      "Mighty Morphin Power Rangers",
      "VR Troopers",
      "Big Bad Beetleborgs",
      "Street Sharks"
    ],
    "correct": 0,
    "fact": "Power Rangers became a massive 1990s phenomenon."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What color was the original leader of the Power Rangers?",
    "answers": [
      "Red",
      "Blue",
      "Black",
      "Green"
    ],
    "correct": 0,
    "fact": "The Red Ranger was the leader of the original team."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which series featured scary stories based on R.L. Stine books?",
    "answers": [
      "Goosebumps",
      "Are You Afraid of the Dark?",
      "Tales from the Cryptkeeper",
      "Eerie, Indiana"
    ],
    "correct": 0,
    "fact": "Goosebumps brought horror stories to a whole generation of kids."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many Gen X kids had favorite cartoon theme songs they could sing from memory.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Catchy theme songs were a huge part of 80s and 90s television."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon featured a teenager named Peter Parker who became a superhero?",
    "answers": [
      "Spider-Man",
      "Batman Beyond",
      "Iron Man",
      "Fantastic Four"
    ],
    "correct": 0,
    "fact": "The 1990s Spider-Man animated series introduced many kids to Marvel stories."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What is Spider-Man's real name?",
    "answers": [
      "Peter Parker",
      "Bruce Wayne",
      "Clark Kent",
      "Tony Stark"
    ],
    "correct": 0,
    "fact": "Peter Parker has been Spider-Man since the character was created in 1962."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon featured a detective who used a high-tech coat full of gadgets?",
    "answers": [
      "Inspector Gadget",
      "Danger Mouse",
      "Gadget Boy",
      "Chip 'n Dale"
    ],
    "correct": 0,
    "fact": "Inspector Gadget became famous for his many unusual inventions."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was Inspector Gadget's main enemy organization called?",
    "answers": [
      "M.A.D.",
      "Cobra",
      "HYDRA",
      "KAOS"
    ],
    "correct": 0,
    "fact": "Dr. Claw and M.A.D. became classic cartoon villains."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon featured cats with swords and a hero named Lion-O?",
    "answers": [
      "Thundercats",
      "He-Man",
      "G.I. Joe",
      "Voltron"
    ],
    "correct": 0,
    "fact": "Thundercats became one of the most popular action cartoons of the 1980s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What weapon did Lion-O use in Thundercats?",
    "answers": [
      "Sword of Omens",
      "Power Sword",
      "Thunder Blade",
      "Lion Sword"
    ],
    "correct": 0,
    "fact": "The Sword of Omens was one of the most recognizable cartoon weapons."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which cartoon featured military heroes fighting Cobra?",
    "answers": [
      "G.I. Joe",
      "Transformers",
      "MASK",
      "Voltron"
    ],
    "correct": 0,
    "fact": "G.I. Joe became a major cartoon and toy franchise in the 1980s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What was the name of the villain organization in G.I. Joe?",
    "answers": [
      "Cobra",
      "M.A.D.",
      "Decepticons",
      "Foot Clan"
    ],
    "correct": 0,
    "fact": "Cobra Commander became one of the most famous cartoon villains."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which cartoon featured robotic vehicles that combined into a giant robot?",
    "answers": [
      "Voltron",
      "Transformers",
      "Robotech",
      "Gundam"
    ],
    "correct": 0,
    "fact": "Voltron became a huge hit among 1980s cartoon fans."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Many 80s and 90s cartoons were connected to toy lines and action figures.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Toys and cartoons often helped promote each other during this era."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom featured a family living in the town of Springfield?",
    "answers": [
      "The Simpsons",
      "Family Guy",
      "King of the Hill",
      "South Park"
    ],
    "correct": 0,
    "fact": "The Simpsons became one of the longest-running shows in television history."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "What is the name of Bart Simpson's father?",
    "answers": [
      "Homer",
      "Marge",
      "Ned",
      "Milhouse"
    ],
    "correct": 0,
    "fact": "Homer Simpson became one of television's most recognizable characters."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which show featured a teenager named Sabrina who was also a witch?",
    "answers": [
      "Sabrina the Teenage Witch",
      "Charmed",
      "Buffy the Vampire Slayer",
      "Bewitched"
    ],
    "correct": 0,
    "fact": "Sabrina became a popular part of the late 1990s TV lineup."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which sitcom featured the character Steve on Full House?",
    "answers": [
      "DJ Tanner's friend Steve",
      "Steve Urkel",
      "Steve Sanders",
      "Steve Austin"
    ],
    "correct": 0,
    "fact": "Steve Hale became a memorable character from Full House."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which sitcom starred Martin Lawrence as Martin Payne?",
    "answers": [
      "Martin",
      "The Fresh Prince of Bel-Air",
      "Living Single",
      "Family Matters"
    ],
    "correct": 0,
    "fact": "Martin became one of the most popular comedy shows of the 1990s."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show featured a group of friends living in New York City and included the character Joey Tribbiani?",
    "answers": [
      "Friends",
      "Seinfeld",
      "Mad About You",
      "Will & Grace"
    ],
    "correct": 0,
    "fact": "Joey's humor and personality made him a fan favorite."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Easy",
    "type": "Multiple Choice",
    "question": "Which show featured teenagers solving mysteries in a small town called Bayside?",
    "answers": [
      "Saved by the Bell",
      "Boy Meets World",
      "90210",
      "Dawson's Creek"
    ],
    "correct": 0,
    "fact": "Saved by the Bell became a defining show for 90s teens."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which animated show featured a family living in Quahog, Rhode Island?",
    "answers": [
      "Family Guy",
      "The Simpsons",
      "South Park",
      "Futurama"
    ],
    "correct": 0,
    "fact": "Family Guy debuted in 1999 and became a major animated comedy."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "Multiple Choice",
    "question": "Which show featured teenagers with supernatural abilities fighting vampires?",
    "answers": [
      "Buffy the Vampire Slayer",
      "Charmed",
      "Goosebumps",
      "Eerie, Indiana"
    ],
    "correct": 0,
    "fact": "Buffy became a major influence on teen fantasy television."
  },
  {
    "category": "80s & 90s TV Shows",
    "difficulty": "Medium",
    "type": "True or False",
    "question": "Rewatching old TV shows became easier years later because of DVDs and streaming.",
    "answers": [
      "True",
      "False"
    ],
    "correct": 0,
    "fact": "Modern technology changed how people experience classic television."
  }
];

module.exports = questions;
