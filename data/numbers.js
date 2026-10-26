// OrdKompis - Swedish Numbers, Time, Days, Months
window.ORDKOMPIS_NUMBERS = {
  title: "Tal, Tid & Datum",
  description: "Swedish numbers, telling time (including the tricky 'halv' system), days, months, and ordinals.",

  cardinals: {
    title: "Grundtal (Cardinal Numbers)",
    numbers: [
      ["0", "noll"], ["1", "en / ett"], ["2", "två"], ["3", "tre"], ["4", "fyra"], ["5", "fem"],
      ["6", "sex"], ["7", "sju"], ["8", "åtta"], ["9", "nio"], ["10", "tio"],
      ["11", "elva"], ["12", "tolv"], ["13", "tretton"], ["14", "fjorton"], ["15", "femton"],
      ["16", "sexton"], ["17", "sjutton"], ["18", "arton"], ["19", "nitton"], ["20", "tjugo"],
      ["21", "tjugoen / tjugoett"], ["30", "trettio"], ["40", "fyrtio"], ["50", "femtio"],
      ["60", "sextio"], ["70", "sjuttio"], ["80", "åttio"], ["90", "nittio"],
      ["100", "hundra / etthundra"], ["200", "tvåhundra"], ["1 000", "tusen / ettusen"],
      ["1 000 000", "en miljon"]
    ],
    notes: [
      "⚠️ <em>en</em> is used with en-words, <em>ett</em> with ett-words: <em>en bil, ett hus</em>",
      "Numbers 1–12 are usually written as words; 13+ as digits",
      "Swedish uses spaces (not commas) as thousand separators: 1 000 000"
    ]
  },

  ordinals: {
    title: "Ordningstal (Ordinal Numbers)",
    numbers: [
      ["1:a", "första"], ["2:a", "andra"], ["3:e", "tredje"], ["4:e", "fjärde"],
      ["5:e", "femte"], ["6:e", "sjätte"], ["7:e", "sjunde"], ["8:e", "åttonde"],
      ["9:e", "nionde"], ["10:e", "tionde"], ["11:e", "elfte"], ["12:e", "tolfte"],
      ["20:e", "tjugonde"], ["100:e", "hundrade"]
    ],
    notes: [
      "Written with a colon: 1:a (första), 2:a (andra), 3:e (tredje)",
      "Used for dates: <em>den 25:e december</em>"
    ]
  },

  time: {
    title: "Klockan (Telling Time)",
    description: "⚠️ The Swedish 'halv' system works DIFFERENTLY from English! 'Halv tre' = 2:30 (half TO three), NOT half past three.",
    examples: [
      { time: "09:00", sv: "klockan nio", en: "nine o'clock" },
      { time: "09:05", sv: "fem över nio", en: "five past nine" },
      { time: "09:10", sv: "tio över nio", en: "ten past nine" },
      { time: "09:15", sv: "kvart över nio", en: "quarter past nine" },
      { time: "09:20", sv: "tjugo över nio", en: "twenty past nine" },
      { time: "09:25", sv: "fem i halv tio", en: "twenty-five past nine (5 to half ten)" },
      { time: "09:30", sv: "halv tio ⚠️", en: "half past nine (literally: half ten!)" },
      { time: "09:35", sv: "fem över halv tio", en: "twenty-five to ten" },
      { time: "09:40", sv: "tjugo i tio", en: "twenty to ten" },
      { time: "09:45", sv: "kvart i tio", en: "quarter to ten" },
      { time: "09:50", sv: "tio i tio", en: "ten to ten" },
      { time: "09:55", sv: "fem i tio", en: "five to ten" },
      { time: "12:00", sv: "tolv / mitt på dagen", en: "twelve / noon" },
      { time: "00:00", sv: "midnatt / tolv på natten", en: "midnight" }
    ],
    warnings: [
      "🔴 <b>halv tre = 14:30</b> (half TO three), NOT 15:30!",
      "In everyday speech, Swedes often use the 12-hour clock with context",
      "Official / transport times use 24-hour clock: <em>klockan 14:30</em>"
    ]
  },

  days: {
    title: "Veckodagar (Days of the Week)",
    items: [
      { sv: "måndag", en: "Monday" }, { sv: "tisdag", en: "Tuesday" },
      { sv: "onsdag", en: "Wednesday" }, { sv: "torsdag", en: "Thursday" },
      { sv: "fredag", en: "Friday" }, { sv: "lördag", en: "Saturday" },
      { sv: "söndag", en: "Sunday" }
    ],
    notes: [
      "Days are NOT capitalized in Swedish: <em>måndag</em>, not <em>Måndag</em>",
      "'On Monday' = <em>på måndag</em> (next Monday) or <em>i måndags</em> (last Monday)",
      "The week starts on Monday in Sweden"
    ]
  },

  months: {
    title: "Månader (Months)",
    items: [
      { sv: "januari", en: "January" }, { sv: "februari", en: "February" },
      { sv: "mars", en: "March" }, { sv: "april", en: "April" },
      { sv: "maj", en: "May" }, { sv: "juni", en: "June" },
      { sv: "juli", en: "July" }, { sv: "augusti", en: "August" },
      { sv: "september", en: "September" }, { sv: "oktober", en: "October" },
      { sv: "november", en: "November" }, { sv: "december", en: "December" }
    ],
    notes: [
      "Months are NOT capitalized: <em>januari</em>, not <em>Januari</em>",
      "'In January' = <em>i januari</em>"
    ]
  },

  seasons: {
    title: "Årstider (Seasons)",
    items: [
      { sv: "vår", en: "spring", period: "mars – maj" },
      { sv: "sommar", en: "summer", period: "juni – augusti" },
      { sv: "höst", en: "autumn", period: "september – november" },
      { sv: "vinter", en: "winter", period: "december – februari" }
    ],
    notes: [
      "'In summer' = <em>på sommaren</em> or <em>i sommar</em> (this summer)",
      "'Last summer' = <em>i somras</em>"
    ]
  },

  dateFormat: {
    title: "Datum (Date Format)",
    rules: [
      "Swedish date format: <b>YYYY-MM-DD</b> (e.g. 2024-12-25)",
      "Spoken: <em>den tjugofemte december</em>",
      "Written: <em>25 december 2024</em> or <em>2024-12-25</em>",
      "⚠️ Swedish uses YYYY-MM-DD (ISO format), NOT MM/DD/YYYY"
    ]
  }
};
