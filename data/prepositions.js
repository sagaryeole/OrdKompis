// OrdKompis - Swedish Prepositions with verb combinations, contrastive examples, and rules
window.ORDKOMPIS_PREPOSITIONS = [
  {
    prep: "i",
    english: "in; inside; for (time duration)",
    rules: [
      "Used for enclosed spaces: <em>i huset, i bilen, i väskan</em>",
      "Time durations: <em>i tre dagar</em> (for three days)",
      "Months/seasons: <em>i januari, i somras</em>",
      "⚠️ Swedish says <em>i skolan</em> but English says 'at school'"
    ],
    examples: [
      { sv: "Jag bor i Sverige.", en: "I live in Sweden." },
      { sv: "Vi stannade i tre dagar.", en: "We stayed for three days." },
      { sv: "Barnen är i skolan.", en: "The children are at school." },
      { sv: "Mjölken står i kylen.", en: "The milk is in the fridge." }
    ],
    verbCombinations: ["tro på / tro i", "sitta i", "bo i", "jobba i"]
  },
  {
    prep: "på",
    english: "on; at; in (surfaces, activities, some places)",
    rules: [
      "Surfaces: <em>på bordet, på golvet, på väggen</em>",
      "Activities / events: <em>på jobbet, på festen, på bio</em>",
      "Days of the week: <em>på måndag, på fredag</em>",
      "Languages: <em>på svenska</em> (in Swedish)",
      "⚠️ Swedish says <em>på bussen</em> / <em>på tåget</em> but English says 'on the bus' — same!",
      "⚠️ Swedish says <em>på restaurangen</em> where English says 'at the restaurant'"
    ],
    examples: [
      { sv: "Boken ligger på bordet.", en: "The book is on the table." },
      { sv: "Vi ses på jobbet imorgon.", en: "We'll see each other at work tomorrow." },
      { sv: "Säg det på svenska!", en: "Say it in Swedish!" },
      { sv: "Jag åker på semester på fredag.", en: "I go on holiday on Friday." }
    ],
    verbCombinations: ["tänka på (think about)", "titta på (look at / watch)", "lyssna på (listen to)", "vänta på (wait for)", "bero på (depend on)", "tycka om (like)"]
  },
  {
    prep: "till",
    english: "to; for (direction, recipient)",
    rules: [
      "Direction / destination: <em>gå till jobbet</em>",
      "Recipient: <em>ge till mig</em>",
      "Purpose: <em>vatten till middag</em> (water for/with dinner)",
      "⚠️ Don't confuse with <em>åt</em> (for someone's benefit)"
    ],
    examples: [
      { sv: "Jag går till affären.", en: "I walk to the store." },
      { sv: "Brevet är till dig.", en: "The letter is for you." },
      { sv: "Välkommen till Sverige!", en: "Welcome to Sweden!" },
      { sv: "Vi flyttade till Stockholm.", en: "We moved to Stockholm." }
    ],
    verbCombinations: ["gå till (go to)", "komma till (come to / arrive at)", "flytta till (move to)", "lyssna till (listen to, formal)"]
  },
  {
    prep: "från",
    english: "from",
    rules: [
      "Origin / source: <em>från Sverige</em>",
      "Starting point in time: <em>från klockan nio</em>",
      "Separation: <em>skiljas från</em>"
    ],
    examples: [
      { sv: "Var kommer du från?", en: "Where do you come from?" },
      { sv: "Tåget går från Stockholm.", en: "The train departs from Stockholm." },
      { sv: "Jobbet börjar från nio.", en: "Work starts from nine." }
    ],
    verbCombinations: ["komma från (come from)", "skilja sig från (differ from)", "fly från (flee from)"]
  },
  {
    prep: "med",
    english: "with; by (means of transport/tool)",
    rules: [
      "Accompaniment: <em>med min vän</em>",
      "Means / tool: <em>åka med buss, skära med kniv</em>",
      "⚠️ Swedish uses <em>med</em> for transport where English uses 'by': <em>åka med tåg</em>"
    ],
    examples: [
      { sv: "Jag fikar med kollegorna.", en: "I have fika with my colleagues." },
      { sv: "Vi åker med tåg.", en: "We travel by train." },
      { sv: "Skriv med penna.", en: "Write with a pen." }
    ],
    verbCombinations: ["hålla med (agree with)", "följa med (come along)", "hänga med (tag along)", "prata med (talk with)"]
  },
  {
    prep: "för",
    english: "for; ago; too (before adjectives)",
    rules: [
      "Benefit / purpose: <em>bra för hälsan</em>",
      "Time ago: <em>för tre dagar sedan</em> (three days ago)",
      "'Too' + adjective: <em>för dyr</em> (too expensive)",
      "⚠️ <em>för ... sedan</em> = ago (two-part construction)"
    ],
    examples: [
      { sv: "Det är bra för dig.", en: "It is good for you." },
      { sv: "Jag kom hit för två år sedan.", en: "I came here two years ago." },
      { sv: "Den är för dyr.", en: "It is too expensive." },
      { sv: "Tack för hjälpen!", en: "Thanks for the help!" }
    ],
    verbCombinations: ["tacka för (thank for)", "betala för (pay for)", "vara rädd för (be afraid of)", "ansvara för (be responsible for)"]
  },
  {
    prep: "av",
    english: "of; by (agent); off; from",
    rules: [
      "Material / part of: <em>en ring av guld</em>",
      "Agent in passive: <em>skriven av Strindberg</em>",
      "Cause: <em>trött av jobbet</em> (tired from work)"
    ],
    examples: [
      { sv: "Boken är skriven av Astrid Lindgren.", en: "The book is written by Astrid Lindgren." },
      { sv: "Bordet är gjort av trä.", en: "The table is made of wood." },
      { sv: "Jag är trött av allt arbete.", en: "I am tired from all the work." }
    ],
    verbCombinations: ["bestå av (consist of)", "bero av (depend on, formal)", "tröttna av (get tired of)"]
  },
  {
    prep: "om",
    english: "about; if; in (future time)",
    rules: [
      "Topic: <em>prata om</em> (talk about)",
      "'If' in conditionals: <em>om du vill</em> (if you want)",
      "Future time: <em>om en timme</em> (in an hour)",
      "⚠️ 'About' is <em>om</em> but 'think about' is <em>tänka på</em> (not <em>tänka om</em>!)"
    ],
    examples: [
      { sv: "Vi pratar om vädret.", en: "We are talking about the weather." },
      { sv: "Mötet börjar om en timme.", en: "The meeting starts in an hour." },
      { sv: "Om du vill kan vi gå.", en: "If you want, we can go." },
      { sv: "Berätta om din resa!", en: "Tell me about your trip!" }
    ],
    verbCombinations: ["prata om (talk about)", "drömma om (dream about)", "berätta om (tell about)", "bry sig om (care about)", "handla om (be about)"]
  },
  {
    prep: "hos",
    english: "at someone's place; at (a professional)",
    rules: [
      "At someone's home or practice: <em>hos mormor, hos läkaren, hos frisören</em>",
      "⚠️ <em>hos</em> is always followed by a person or professional, never a place"
    ],
    examples: [
      { sv: "Vi äter middag hos mormor.", en: "We eat dinner at grandma's." },
      { sv: "Jag har tid hos tandläkaren.", en: "I have an appointment at the dentist's." },
      { sv: "Kan jag sova hos dig ikväll?", en: "Can I sleep at your place tonight?" }
    ],
    verbCombinations: ["bo hos (live with / at)", "hälsa på hos (visit someone at their place)", "jobba hos (work at someone's / a company)"]
  },
  {
    prep: "vid",
    english: "at; by; near; next to",
    rules: [
      "Proximity / beside: <em>vid sjön, vid bordet</em>",
      "At a point in time: <em>vid midnatt</em>",
      "⚠️ <em>vid</em> implies nearness/beside, unlike <em>på</em> which implies on/at"
    ],
    examples: [
      { sv: "Stugan ligger vid sjön.", en: "The cottage is by the lake." },
      { sv: "Vi ses vid ingången.", en: "We'll meet at the entrance." },
      { sv: "Han sitter vid datorn.", en: "He is sitting at the computer." }
    ],
    verbCombinations: ["sitta vid (sit by/at)", "stanna vid (stop at/by)"]
  },
  {
    prep: "under",
    english: "under; during; below",
    rules: [
      "Position below: <em>under bordet</em>",
      "During a period: <em>under sommaren, under veckan</em>",
      "⚠️ 'During' is typically <em>under</em> in Swedish: <em>under mötet</em> (during the meeting)"
    ],
    examples: [
      { sv: "Katten sover under sängen.", en: "The cat sleeps under the bed." },
      { sv: "Under sommaren bor vi på landet.", en: "During the summer we live in the countryside." }
    ],
    verbCombinations: ["gömma sig under (hide under)", "lida under (suffer under)"]
  },
  {
    prep: "över",
    english: "over; above; across",
    rules: [
      "Position above: <em>lampan hänger över bordet</em>",
      "Across: <em>gå över gatan</em>",
      "'More than' / 'above': <em>över noll grader</em>"
    ],
    examples: [
      { sv: "Fågeln flyger över sjön.", en: "The bird flies over the lake." },
      { sv: "Titta innan du går över gatan!", en: "Look before you cross the street!" },
      { sv: "Det är över tio grader idag.", en: "It is over ten degrees today." }
    ],
    verbCombinations: ["klaga över (complain about)", "fundera över (ponder/wonder about)", "titta över (look over)"]
  },
  {
    prep: "mellan",
    english: "between",
    rules: [
      "Between two things/times: <em>mellan oss, mellan klockan 9 och 12</em>"
    ],
    examples: [
      { sv: "Bussen går mellan Gamla stan och Södermalm.", en: "The bus goes between Gamla stan and Södermalm." },
      { sv: "Mötet är mellan klockan 10 och 12.", en: "The meeting is between 10 and 12." }
    ],
    verbCombinations: ["skilja mellan (distinguish between)", "välja mellan (choose between)"]
  },
  {
    prep: "mot",
    english: "towards; against; to",
    rules: [
      "Direction (towards): <em>gå mot stationen</em>",
      "Opposition (against): <em>kämpa mot</em>",
      "Attitude (towards): <em>snäll mot alla</em>"
    ],
    examples: [
      { sv: "Vi kör mot norr.", en: "We are driving towards the north." },
      { sv: "Hon är alltid snäll mot barnen.", en: "She is always kind to the children." },
      { sv: "Vi spelar mot Göteborg i helgen.", en: "We play against Gothenburg this weekend." }
    ],
    verbCombinations: ["kämpa mot (fight against)", "protestera mot (protest against)", "ställa sig mot (oppose)"]
  },
  {
    prep: "utan",
    english: "without",
    rules: [
      "Absence: <em>kaffe utan mjölk</em>",
      "⚠️ <em>utan</em> also means 'but rather' after a negation: <em>inte X utan Y</em> (not X but Y)"
    ],
    examples: [
      { sv: "Jag dricker kaffe utan socker.", en: "I drink coffee without sugar." },
      { sv: "Han gick ut utan jacka.", en: "He went out without a jacket." },
      { sv: "Det var inte jag utan min bror.", en: "It was not me but my brother." }
    ],
    verbCombinations: ["klara sig utan (manage without)"]
  },
  {
    prep: "efter",
    english: "after; according to",
    rules: [
      "Time / sequence: <em>efter middagen</em>",
      "According to: <em>efter vad jag vet</em>"
    ],
    examples: [
      { sv: "Vi går ut efter middagen.", en: "We go out after dinner." },
      { sv: "Vad kommer efter måndag?", en: "What comes after Monday?" }
    ],
    verbCombinations: ["leta efter (look for / search for)", "längta efter (long for)", "se efter (look after)"]
  },
  {
    prep: "före / innan",
    english: "before",
    rules: [
      "<em>före</em> + noun: <em>före klockan tre</em>",
      "<em>innan</em> + clause: <em>innan du går</em>",
      "⚠️ <em>före</em> is a preposition (before a noun); <em>innan</em> is a conjunction (before a clause)"
    ],
    examples: [
      { sv: "Kom före klockan åtta.", en: "Come before eight o'clock." },
      { sv: "Tvätta händerna innan du äter.", en: "Wash your hands before you eat." }
    ],
    verbCombinations: ["hinna före (arrive before)", "gå före (go ahead / skip the queue)"]
  },
  {
    prep: "sedan / sen",
    english: "since; then; ago (with 'för')",
    rules: [
      "Since a point in time: <em>sedan 2020</em>",
      "Then (sequence): <em>Först äter vi, sedan går vi</em>",
      "Part of 'ago' construction: <em>för tre dagar <b>sedan</b></em>"
    ],
    examples: [
      { sv: "Jag har bott här sedan 2019.", en: "I have lived here since 2019." },
      { sv: "Vi fikar först, sedan jobbar vi.", en: "We have fika first, then we work." },
      { sv: "Det hände för länge sedan.", en: "It happened a long time ago." }
    ],
    verbCombinations: []
  }
];
