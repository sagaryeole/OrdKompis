// OrdKompis - Swedish Word Order Rules & Interactive Examples
window.ORDKOMPIS_WORDORDER = {
  title: "Ordföljd — Svensk Meningsbyggnad",
  description: "Swedish word order follows strict rules. The most important is the V2 rule: the verb is ALWAYS in second position in main clauses.",

  practice: [
    {
      prompt: "Tidsuttryck först: använd V2-regeln.",
      tokens: ["I dag", "arbetar", "jag", "hemifrån."]
    },
    {
      prompt: "Sätt negationen rätt i huvudsatsen.",
      tokens: ["I morse", "hann", "jag", "inte", "äta frukost."]
    },
    {
      prompt: "Bygg en bisats med BIFF-regeln.",
      tokens: ["Vi stannade hemma", "eftersom", "det", "regnade", "hela dagen."]
    },
    {
      prompt: "Gör en indirekt fråga: subjektet kommer före verbet.",
      tokens: ["Vet du", "var", "stationen", "ligger?"]
    },
    {
      prompt: "Bisats först: kom ihåg inversionen i huvudsatsen.",
      tokens: ["Fastän", "jag var trött,", "gick", "jag", "till jobbet."]
    },
    {
      prompt: "Placera inte före verbet i bisatsen.",
      tokens: ["Hon sa", "att", "hon", "inte", "hinner", "i dag."]
    },
    {
      prompt: "Börja med platsen och följ V2-regeln.",
      tokens: ["På sommaren", "träffas", "vi", "ofta", "vid sjön."]
    },
    {
      prompt: "Bygg en mening med en bisats som förklaring.",
      tokens: ["Jag tog en jacka", "eftersom", "det", "var", "kallt ute."]
    }
  ],

  sections: [
    {
      id: "v2",
      title: "V2-regeln (Verb Second Rule)",
      icon: "📌",
      explanation: "In a Swedish main clause (huvudsats), the conjugated verb is ALWAYS in the second position — no matter what comes first.",
      rules: [
        "Subject first (normal): <b>Jag</b> <u>äter</u> frukost varje dag.",
        "Time first (inversion): <b>Varje dag</b> <u>äter</u> jag frukost.",
        "Place first (inversion): <b>I Sverige</b> <u>fikar</u> man ofta.",
        "Object first (emphasis): <b>Den boken</b> <u>läste</u> jag igår."
      ],
      wrongExamples: [
        { wrong: "❌ Idag jag äter frukost.", correct: "✅ Idag äter jag frukost.", why: "After a non-subject opener, the verb MUST come second (before the subject)." },
        { wrong: "❌ Alltid han kommer sent.", correct: "✅ Alltid kommer han sent.", why: "The adverb is first → verb must be second → subject moves to third position." }
      ]
    },
    {
      id: "biff",
      title: "BIFF-regeln (Negation Placement)",
      icon: "🚫",
      explanation: "BIFF = <b>B</b>isats <b>I</b>nte <b>F</b>öre det <b>F</b>inita verbet. In a subordinate clause, 'inte' (and other adverbs) comes BEFORE the verb. In a main clause, 'inte' comes AFTER the verb.",
      rules: [
        "<b>Huvudsats</b> (main): Jag <u>äter</u> <b>inte</b> frukost. (I don't eat breakfast.)",
        "<b>Bisats</b> (subordinate): ...att jag <b>inte</b> <u>äter</u> frukost. (...that I don't eat breakfast.)",
        "Same with 'aldrig', 'alltid', 'ofta', 'redan', 'bara', etc."
      ],
      wrongExamples: [
        { wrong: "❌ ...att jag äter inte frukost.", correct: "✅ ...att jag inte äter frukost.", why: "In a bisats (after att, om, när, etc.), 'inte' goes BEFORE the verb." },
        { wrong: "❌ Jag inte äter frukost.", correct: "✅ Jag äter inte frukost.", why: "In a huvudsats, 'inte' goes AFTER the verb." }
      ]
    },
    {
      id: "satschema",
      title: "Satsschema (Sentence Structure Map)",
      icon: "🗺️",
      explanation: "Swedish sentences follow a predictable slot structure. Understanding the slots helps you build correct sentences.",
      slots: [
        { name: "Fundament", desc: "Position 1: What comes first (subject, time, place, etc.)", example: "Jag / Igår / I Stockholm" },
        { name: "Verb", desc: "Position 2: The conjugated verb (ALWAYS here!)", example: "äter / åker / bor" },
        { name: "Subjekt", desc: "Position 3: Subject (only if not in fundament)", example: "jag / vi / man" },
        { name: "Satsadverb", desc: "Position 4: inte, aldrig, alltid, ofta, redan, bara", example: "inte / aldrig / alltid" },
        { name: "Verb (rest)", desc: "Infinitive, participle, or other verb forms", example: "äta / har ätit / ska äta" },
        { name: "Objekt & Adverbial", desc: "Who/what + when/where/how", example: "frukost varje dag i köket" }
      ],
      mainClauseExample: {
        label: "Huvudsats (main clause):",
        slots: ["Igår", "åt", "jag", "inte", "—", "frukost på jobbet."],
        names: ["Fundament", "VERB", "Subjekt", "Satsadverb", "—", "Objekt + Adverbial"]
      },
      subClauseExample: {
        label: "Bisats (subordinate clause):",
        slots: ["...att", "—", "jag", "inte", "åt", "frukost på jobbet."],
        names: ["Subjunktion", "—", "Subjekt", "Satsadverb", "VERB", "Objekt + Adverbial"]
      }
    },
    {
      id: "questions",
      title: "Frågesatser (Questions)",
      icon: "❓",
      explanation: "Yes/No questions: verb first. Wh-questions: question word first, then verb second.",
      rules: [
        "<b>Ja/Nej-fråga:</b> <u>Äter</u> du frukost? (Do you eat breakfast?)",
        "<b>Frågeord:</b> <b>Vad</b> <u>äter</u> du? (What do you eat?)",
        "<b>Frågeord:</b> <b>Var</b> <u>bor</u> du? (Where do you live?)"
      ],
      wrongExamples: [
        { wrong: "❌ Du äter frukost? (as a real question)", correct: "✅ Äter du frukost?", why: "Swap verb and subject for yes/no questions." }
      ]
    },
    {
      id: "bisats",
      title: "Bisatsord (Subordinating Conjunctions)",
      icon: "🔗",
      explanation: "These words start a subordinate clause (bisats) and trigger the BIFF rule (adverb before verb).",
      words: [
        { word: "att", en: "that / to", example: "Jag vet att hon inte kommer." },
        { word: "om", en: "if / whether", example: "Jag undrar om hon inte kommer." },
        { word: "när", en: "when", example: "Ring mig när du inte jobbar." },
        { word: "eftersom", en: "because / since", example: "Vi stannar hemma eftersom det regnar." },
        { word: "för att", en: "because / in order to", example: "Jag pluggar för att jag vill lära mig." },
        { word: "medan", en: "while", example: "Lyssna på musik medan du städar." },
        { word: "innan", en: "before (clause)", example: "Tvätta händerna innan du äter." },
        { word: "trots att", en: "although / even though", example: "Han kom trots att han var sjuk." },
        { word: "som", en: "who / which / that (relative)", example: "Mannen som bor bredvid är trevlig." },
        { word: "fastän", en: "although", example: "Fastän det regnar går vi ut." },
        { word: "så att", en: "so that", example: "Prata högt så att alla hör." },
        { word: "tills", en: "until", example: "Vänta tills jag kommer tillbaka." }
      ]
    }
  ]
};
