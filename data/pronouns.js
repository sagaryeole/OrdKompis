// OrdKompis - Swedish Pronouns Reference Tables
window.ORDKOMPIS_PRONOUNS = {
  title: "Svenska Pronomen",
  description: "Complete pronoun tables: subject, object, possessive (en/ett/plural), and reflexive forms.",

  personal: {
    title: "Personliga pronomen",
    headers: ["", "Subjekt", "Objekt", "Possessiv (en)", "Possessiv (ett)", "Possessiv (pl)", "Reflexiv"],
    rows: [
      ["jag (I)", "jag", "mig", "min", "mitt", "mina", "mig"],
      ["du (you)", "du", "dig", "din", "ditt", "dina", "dig"],
      ["han (he)", "han", "honom", "hans", "hans", "hans", "sig"],
      ["hon (she)", "hon", "henne", "hennes", "hennes", "hennes", "sig"],
      ["hen (gender-neutral)", "hen", "hen", "hens", "hens", "hens", "sig"],
      ["den (it, en-ord)", "den", "den", "dess", "dess", "dess", "sig"],
      ["det (it, ett-ord)", "det", "det", "dess", "dess", "dess", "sig"],
      ["vi (we)", "vi", "oss", "vår", "vårt", "våra", "oss"],
      ["ni (you, pl.)", "ni", "er", "er", "ert", "era", "er"],
      ["de (they)", "de", "dem", "deras", "deras", "deras", "sig"]
    ]
  },

  sinSittSina: {
    title: "Sin / Sitt / Sina vs Hans / Hennes / Deras",
    description: "One of the trickiest concepts in Swedish: sin/sitt/sina refers BACK to the subject of the sentence. Hans/hennes/deras refers to someone else.",
    rules: [
      { rule: "<b>sin</b> = his/her/their (own) — en-ord", example: "Han älskar <b>sin</b> fru. (He loves his [own] wife.)" },
      { rule: "<b>sitt</b> = his/her/their (own) — ett-ord", example: "Hon tog <b>sitt</b> paraply. (She took her [own] umbrella.)" },
      { rule: "<b>sina</b> = his/her/their (own) — plural", example: "De hämtade <b>sina</b> barn. (They picked up their [own] children.)" },
      { rule: "<b>hans</b> = his (someone else's)", example: "Han älskar <b>hans</b> fru. (He loves [another man's] wife.)" },
      { rule: "⚠️ Sin/sitt/sina can NEVER be the subject!", example: "✗ Sin bil är röd. ✓ Hans bil är röd." }
    ],
    contrastExamples: [
      { sv: "Lisa tvättar sin bil.", en: "Lisa washes her (own) car.", note: "sin → Lisa's car" },
      { sv: "Lisa tvättar hennes bil.", en: "Lisa washes her (someone else's) car.", note: "hennes → another woman's car" },
      { sv: "Erik tog sitt paraply.", en: "Erik took his (own) umbrella.", note: "sitt → Erik's umbrella" },
      { sv: "Erik tog hans paraply.", en: "Erik took his (another man's) umbrella.", note: "hans → another man's umbrella" }
    ]
  },

  demonstrative: {
    title: "Demonstrativa pronomen (this/that/these/those)",
    rows: [
      { sv: "den här / denna", en: "this (en-ord)", example: "Den här boken är bra." },
      { sv: "det här / detta", en: "this (ett-ord)", example: "Det här huset är gammalt." },
      { sv: "de här / dessa", en: "these (plural)", example: "De här skorna är fina." },
      { sv: "den där", en: "that (en-ord)", example: "Den där bilen är snabb." },
      { sv: "det där", en: "that (ett-ord)", example: "Det där trädet är högt." },
      { sv: "de där", en: "those (plural)", example: "De där eleverna studerar flitigt." }
    ]
  },

  interrogative: {
    title: "Frågeord (Question words)",
    rows: [
      { sv: "vem", en: "who", example: "Vem är du?" },
      { sv: "vad", en: "what", example: "Vad gör du?" },
      { sv: "vilken / vilket / vilka", en: "which (en / ett / plural)", example: "Vilken färg gillar du?" },
      { sv: "var", en: "where", example: "Var bor du?" },
      { sv: "vart", en: "where to (direction)", example: "Vart ska du?" },
      { sv: "varifrån", en: "where from", example: "Varifrån kommer du?" },
      { sv: "när", en: "when", example: "När börjar filmen?" },
      { sv: "hur", en: "how", example: "Hur mår du?" },
      { sv: "hur mycket / hur många", en: "how much / how many", example: "Hur mycket kostar det?" },
      { sv: "varför", en: "why", example: "Varför lär du dig svenska?" }
    ]
  },

  indefinite: {
    title: "Obestämda pronomen (Indefinite pronouns)",
    rows: [
      { sv: "någon / något / några", en: "some; any; someone", example: "Är det någon hemma?" },
      { sv: "ingen / inget / inga", en: "no; none; nobody", example: "Ingen vet svaret." },
      { sv: "alla / allt", en: "everyone / everything", example: "Alla är välkomna." },
      { sv: "man", en: "one; you (general)", example: "I Sverige tar man av sig skorna." },
      { sv: "varje", en: "every; each", example: "Varje dag lär jag mig något nytt." },
      { sv: "annan / annat / andra", en: "other; another", example: "Har du en annan idé?" },
      { sv: "samma", en: "same", example: "Vi bor på samma gata." },
      { sv: "själv / självt / själva", en: "self; oneself", example: "Jag fixade det själv." }
    ]
  }
};
