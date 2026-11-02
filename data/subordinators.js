// OrdKompis - Bisatsledare (subordinating conjunctions) with rules and example sentences
window.ORDKOMPIS_SUBORDINATORS = {
  title: "Bisatsledare — Subjunktioner",
  description: "Bisatsledare är ord som inleder en bisats (underordnad sats). Varje bisatsledare har en egen betydelse. Läs reglerna, och se exempel på varje ord.",

  rules: [
    { rule: "<b>Bisatsen börjar med bisatsledaren.</b> Ordet står först i bisatsen, och bisatsen kan stå före eller efter huvudsatsen.", example: "Jag vet att hon kommer." },
    { rule: "<b>Ordföljd i bisatsen: ledare – subjekt – satsadverb – verb.</b> Subjektet står före verbet, och det gäller även i frågor.", example: "...att hon inte kommer. (inte före verbet, BIFF-regeln)" },
    { rule: "<b>Ingen inversion i bisatsen.</b> Verbet får inte flytta upp före subjektet.", example: "Rätt: ...när du är klar. Fel: ...när är du klar." },
    { rule: "<b>Komma före bisatsen.</b> Bisatsen skiljs alltid från huvudsatsen med komma.", example: "Vi stannar hemma, eftersom det regnar." },
    { rule: "<b>Bisats först ger inversion i huvudsatsen.</b> Då står verbet direkt efter bisatsen.", example: "Eftersom det regnar, stannar vi hemma." }
  ],

  items: [
    {
      word: "att",
      en: "that / to",
      usage: "Inleder en bisats efter verb som tro, veta, säga och efter adjektiv som viktig.",
      examples: [
        { sv: "Jag vet att han bor i Malmö.", en: "I know that he lives in Malmö." },
        { sv: "Hon sa att hon inte har tid.", en: "She said that she doesn't have time." },
        { sv: "Det är viktigt att du sover tillräckligt.", en: "It's important that you sleep enough." }
      ]
    },
    {
      word: "om",
      en: "if / whether",
      usage: "Används för ja/nej-frågor i indirekt tal och för villkor.",
      examples: [
        { sv: "Jag undrar om hon kommer i kväll.", en: "I wonder whether she is coming tonight." },
        { sv: "Fråga henne om hon vill ha kaffe.", en: "Ask her if she wants coffee." },
        { sv: "Vi går ut om det slutar regna.", en: "We'll go out if it stops raining." }
      ]
    },
    {
      word: "när",
      en: "when",
      usage: "Anger tidpunkt, ofta för något som händer vid samma tillfälle som huvudsatsen.",
      examples: [
        { sv: "Ring mig när du landar.", en: "Call me when you land." },
        { sv: "När jag kom hem var det tyst.", en: "When I got home it was quiet." },
        { sv: "Hon log när hon såg bilden.", en: "She smiled when she saw the picture." }
      ]
    },
    {
      word: "eftersom",
      en: "because / since",
      usage: "Anger orsak. Bisatsen förklarar varför något sker.",
      examples: [
        { sv: "Vi gick hem eftersom det var sent.", en: "We went home because it was late." },
        { sv: "Jag tar med en jacka eftersom det är kallt.", en: "I'm bringing a jacket since it's cold." },
        { sv: "Han var glad eftersom han fick nytt jobb.", en: "He was happy because he got a new job." }
      ]
    },
    {
      word: "för att",
      en: "because / in order to",
      usage: "Anger syfte (varför man gör något) eller orsak. Står ofta med en avsikt.",
      examples: [
        { sv: "Jag pluggar för att jag vill lära mig svenska.", en: "I study in order to learn Swedish." },
        { sv: "Hon sparar pengar för att köpa en cykel.", en: "She saves money to buy a bike." },
        { sv: "Vi ringde för att höra hur det gick.", en: "We called to hear how it went." }
      ]
    },
    {
      word: "medan",
      en: "while",
      usage: "Anger att två saker sker samtidigt.",
      examples: [
        { sv: "Lyssna på musik medan du städar.", en: "Listen to music while you clean." },
        { sv: "Hon läste medan han lagade mat.", en: "She read while he cooked." },
        { sv: "Barnen lekte medan vi pratade.", en: "The children played while we talked." }
      ]
    },
    {
      word: "innan",
      en: "before",
      usage: "Anger att något sker före något annat.",
      examples: [
        { sv: "Tvätta händerna innan du äter.", en: "Wash your hands before you eat." },
        { sv: "Jag hinner läsa klart innan filmen börjar.", en: "I'll finish reading before the movie starts." },
        { sv: "Stäng fönstret innan du går.", en: "Close the window before you leave." }
      ]
    },
    {
      word: "efter att",
      en: "after",
      usage: "Anger att något sker efter något annat. Bisatsen står ofta i perfekt tid.",
      examples: [
        { sv: "Efter att jag ätit gick jag en promenad.", en: "After I had eaten I went for a walk." },
        { sv: "Hon ringde efter att hon kommit hem.", en: "She called after she had got home." },
        { sv: "Efter att vi städat åt vi middag.", en: "After we had cleaned, we had dinner." }
      ]
    },
    {
      word: "tills",
      en: "until",
      usage: "Anger hur länge något pågår.",
      examples: [
        { sv: "Vänta tills jag kommer tillbaka.", en: "Wait until I come back." },
        { sv: "Vi jobbade tills det blev mörkt.", en: "We worked until it got dark." },
        { sv: "Han stannade tills bussen gick.", en: "He stayed until the bus left." }
      ]
    },
    {
      word: "trots att",
      en: "although / even though",
      usage: "Anger att något sker trots ett hinder eller en motsättning.",
      examples: [
        { sv: "Han kom trots att han var sjuk.", en: "He came even though he was sick." },
        { sv: "Trots att det regnade var stämningen god.", en: "Although it was raining, the mood was good." },
        { sv: "Hon sprang trots att hon var trött.", en: "She ran although she was tired." }
      ]
    },
    {
      word: "fastän",
      en: "although",
      usage: "Samma betydelse som trots att, men kortare och mer formellt i talad svenska.",
      examples: [
        { sv: "Fastän det regnar går vi ut.", en: "Although it's raining, we're going out." },
        { sv: "Fastän han inte förstod, log han.", en: "Although he didn't understand, he smiled." },
        { sv: "Fastän priset var högt köpte hon den.", en: "Although the price was high, she bought it." }
      ]
    },
    {
      word: "så att",
      en: "so that",
      usage: "Anger resultat eller avsikt: något görs så att något annat ska ske.",
      examples: [
        { sv: "Prata högt så att alla hör.", en: "Speak loudly so that everyone can hear." },
        { sv: "Vi åkte tidigt så att vi hann med tåget.", en: "We left early so that we made the train." },
        { sv: "Skriv ner det så att du inte glömmer.", en: "Write it down so that you don't forget." }
      ]
    },
    {
      word: "sedan",
      en: "since / after",
      usage: "Används för att säga hur länge något har pågått (sedan vi var barn), eller när något sker efter något annat.",
      examples: [
        { sv: "Vi har bott här sedan vi var barn.", en: "We have lived here since we were children." },
        { sv: "Hon har inte ätit sedan hon vaknade.", en: "She hasn't eaten since she woke up." },
        { sv: "Jag ringer dig sedan jag kommit hem.", en: "I'll call you after I get home." }
      ]
    },
    {
      word: "ifall",
      en: "in case",
      usage: "Anger att något görs för den händelse att något annat inträffar.",
      examples: [
        { sv: "Ta med paraplyet ifall det regnar.", en: "Bring the umbrella in case it rains." },
        { sv: "Ring mig ifall du blir försenad.", en: "Call me in case you're delayed." },
        { sv: "Vi har reservnycklar ifall något händer.", en: "We have spare keys in case something happens." }
      ]
    },
    {
      word: "så snart som",
      en: "as soon as",
      usage: "Anger att något sker direkt när något annat har skett.",
      examples: [
        { sv: "Ring mig så snart som du kan.", en: "Call me as soon as you can." },
        { sv: "Så snart som bussen kom gick vi ombord.", en: "As soon as the bus arrived we got on." },
        { sv: "Hon börjar så snart som hon fått jobbet.", en: "She'll start as soon as she gets the job." }
      ]
    },
    {
      word: "som",
      en: "who / which / that (relative)",
      usage: "Inleder en relativ bisats som beskriver ett substantiv. Står direkt efter det ord den beskriver.",
      examples: [
        { sv: "Mannen som bor bredvid är trevlig.", en: "The man who lives next door is nice." },
        { sv: "Boken som jag läste var bra.", en: "The book that I read was good." },
        { sv: "Huset som vi köpte har en stor trädgård.", en: "The house that we bought has a large garden." }
      ]
    }
  ]
};
