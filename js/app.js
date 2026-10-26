// OrdKompis - Main Application Controller
// Handles tabs, search, touch events for iOS Safari, autocorrect, and rendering for Verbs, Nouns, Themes, and Quiz.

(function () {
  "use strict";

  // Data sets (loaded via data/verbs.js, data/nouns.js, data/themes.js)
  var verbs = window.ORDKOMPIS_VERBS || [];
  var nouns = window.ORDKOMPIS_NOUNS || [];
  var themes = window.ORDKOMPIS_THEMES || [];
  var adjectives = window.ORDKOMPIS_ADJECTIVES || [];
  var prepositions = window.ORDKOMPIS_PREPOSITIONS || [];
  var wordorder = window.ORDKOMPIS_WORDORDER || null;
  var pronouns = window.ORDKOMPIS_PRONOUNS || null;
  var numbers = window.ORDKOMPIS_NUMBERS || null;
  var phrases = window.ORDKOMPIS_PHRASES || null;

  // State
  var currentTab = "verbs"; // "verbs", "nouns", "themes", "quiz"
  var currentThemeId = themes[0] ? themes[0].id : "";
  var activeSuggIndex = -1;
  var currentSuggList = [];

  // DOM Elements
  var tabBtns = document.querySelectorAll(".nav-tab");
  var moreTopicsBtn = document.getElementById("moreTopicsBtn");
  var moreTopicsMenu = document.getElementById("moreTopicsMenu");
  var searchCard = document.getElementById("searchCard");
  var searchInput = document.getElementById("searchInput");
  var searchLabel = document.getElementById("searchLabel");
  var searchHint = document.getElementById("searchHint");
  var suggBox = document.getElementById("suggBox");
  var goBtn = document.getElementById("goBtn");
  var resultBox = document.getElementById("resultBox");
  var quickChips = document.getElementById("quickChips");
  var sectionTitle = document.getElementById("sectionTitle");
  var browseList = document.getElementById("browseList");
  var themeContainer = document.getElementById("themeContainer");
  var quizContainer = document.getElementById("quizContainer");
  var learningContainer = document.getElementById("learningContainer");
  var totalVerbCount = document.getElementById("totalVerbCount");
  var totalNounCount = document.getElementById("totalNounCount");

  // Utilities
  function norm(s) {
    return String(s || "").trim().toLocaleLowerCase("sv").replace(/\s+/g, " ");
  }

  function esc(s) {
    return String(s || "").replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function lev(a, b) {
    var m = a.length, n = b.length, d = [], i, j;
    for (i = 0; i <= m; i++) d[i] = [i];
    for (j = 1; j <= n; j++) d[0][j] = j;
    for (i = 1; i <= m; i++) {
      for (j = 1; j <= n; j++) {
        d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      }
    }
    return d[m][n];
  }

  // --- INDEXING ---
  // Verb indexing
  var verbsByName = {}, verbsByForm = {};
  verbs.forEach(function (v) {
    verbsByName[norm(v[0])] = v;
    var forms = [
      [v[3], "presens"],
      [v[4], "preteritum"],
      [v[9] || v[5].replace(/^har\s+/, ""), "supinum"],
      [v[8], "imperativ"]
    ];
    forms.forEach(function (f) {
      f[0].split("/").forEach(function (p) {
        var k = norm(p);
        if (!k || k === "—" || verbsByName[k]) return;
        (verbsByForm[k] = verbsByForm[k] || []).push({ verb: v, label: f[1] });
      });
    });
  });

  // Noun indexing
  var nounsByName = {}, nounsByForm = {};
  nouns.forEach(function (n) {
    var base = norm(n[0]);
    nounsByName[base] = n;
    var forms = [
      [n[0], "obestämd singular"],
      [n[1], "bestämd singular"],
      [n[2], "obestämd plural"],
      [n[3], "bestämd plural"]
    ];
    forms.forEach(function (f) {
      var k = norm(f[0]);
      if (!k || k === "—") return;
      (nounsByForm[k] = nounsByForm[k] || []).push({ noun: n, label: f[1] });
    });
  });

  // --- AUTOCOMPLETE LOGIC ---
  function suggestVerbs(q, limit) {
    q = norm(q);
    if (!q) return [];
    var out = [], seen = {};
    function add(v) {
      if (!seen[v[0]]) {
        seen[v[0]] = 1;
        out.push({ item: v, title: v[0], sub: v[1], type: "verb" });
      }
    }
    verbs.forEach(function (v) { if (norm(v[0]).indexOf(q) === 0) add(v); });
    verbs.forEach(function (v) {
      var enList = v[1].toLocaleLowerCase("en").split(/[;,]\s*/);
      if (enList.some(function (w) { return w.indexOf(q) === 0 || w.replace(/^to /, "").indexOf(q) === 0; })) add(v);
    });
    verbs.forEach(function (v) { if (norm(v[0]).indexOf(q) > 0) add(v); });
    verbs.forEach(function (v) { if (v[1].toLocaleLowerCase("en").indexOf(q) >= 0) add(v); });
    return out.slice(0, limit || 6);
  }

  function suggestNouns(q, limit) {
    q = norm(q);
    if (!q) return [];
    var out = [], seen = {};
    function add(n) {
      if (!seen[n[0]]) {
        seen[n[0]] = 1;
        out.push({ item: n, title: (n[4] + " " + n[0]), sub: n[6], type: "noun" });
      }
    }
    nouns.forEach(function (n) { if (norm(n[0]).indexOf(q) === 0) add(n); });
    nouns.forEach(function (n) {
      var enList = n[6].toLocaleLowerCase("en").split(/[;,]\s*/);
      if (enList.some(function (w) { return w.indexOf(q) === 0; })) add(n);
    });
    nouns.forEach(function (n) { if (norm(n[1]).indexOf(q) === 0 || norm(n[2]).indexOf(q) === 0) add(n); });
    return out.slice(0, limit || 6);
  }

  function closeSuggestions() {
    suggBox.hidden = true;
    suggBox.innerHTML = "";
    searchInput.setAttribute("aria-expanded", "false");
    activeSuggIndex = -1;
    currentSuggList = [];
  }

  function openSuggestions(list) {
    currentSuggList = list;
    activeSuggIndex = -1;
    if (!list.length) {
      closeSuggestions();
      return;
    }
    suggBox.innerHTML = list.map(function (item, idx) {
      return (
        '<li role="option" id="sugg-opt-' + idx + '" data-idx="' + idx + '">' +
        '<span class="sv">' + esc(item.title) + '</span>' +
        '<span class="meta">' + esc(item.sub) + '</span>' +
        '</li>'
      );
    }).join("");
    suggBox.hidden = false;
    searchInput.setAttribute("aria-expanded", "true");
  }

  // --- PRONUNCIATION (Web Speech API) ---
  function speakSwedish(text) {
    if (!text || typeof window === "undefined") return;
    if (!("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      var utter = new SpeechSynthesisUtterance(text);
      utter.lang = "sv-SE";
      utter.rate = 0.9;
      utter.pitch = 1.0;
      window.speechSynthesis.speak(utter);
    } catch (e) {
      // Ignore speech errors silently
    }
  }

  function speakerButton(text, ariaLabel) {
    if (!text || typeof window === "undefined" || !("speechSynthesis" in window)) {
      return "";
    }
    var label = ariaLabel || "Lyssna på uttal";
    var safe = esc(text).replace(/"/g, "&quot;");
    return '<button type="button" class="speak-btn" data-speak="' + safe + '" aria-label="' + esc(label) + '" title="' + esc(label) + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg></button>';
  }

  // --- RENDERING ---
  function renderVerb(v, notice) {
    var name = v[0], meaning = v[1], inf = v[2], pres = v[3], pret = v[4], perf = v[5];
    var imperative = v[8] || "—", supine = v[9] || perf.replace(/^har\s+/, ""), group = v[10] || "—";
    var perfHtml = perf === "—"
      ? '<div class="value" style="color:var(--muted);font-weight:500;">rarely used</div><div class="desc">No common supine form for this modal verb.</div>'
      : '<div class="value">' + esc(perf) + ' ' + speakerButton(perf, "Lyssna på perfekt") + '</div><div class="desc">har + supine form</div>';

    resultBox.innerHTML =
      (notice ? '<div class="notice">' + notice + '</div>' : '') +
      '<div class="result-card-header">' +
      '<div>' +
      '<div class="eyebrow">Verbkompis</div>' +
      '<h2 class="word-title">' + esc(name) + ' ' + speakerButton(name, "Lyssna på verbet") + '</h2>' +
      '<div class="word-meaning">' + esc(meaning) + '</div>' +
      '</div>' +
      '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">' +
      '<span class="pill">' + esc(group) + '</span>' +
      '<button type="button" id="nextRandomVerb" class="next-rand-btn">Nästa verb →</button>' +
      '</div>' +
      '</div>' +
      '<div class="forms-grid">' +
      '<article class="form-box"><div class="label">1. Infinitiv · to…</div><div class="value">' + esc(inf) + ' ' + speakerButton(inf, "Lyssna på infinitiv") + '</div><div class="desc">' + (perf === "—" ? "Modal verb (before other verbs)" : "Used after <em>att</em>") + '</div></article>' +
      '<article class="form-box"><div class="label">2. Presens · now</div><div class="value">' + esc(pres) + ' ' + speakerButton(pres, "Lyssna på presens") + '</div><div class="desc">Same for I, you, we, they</div></article>' +
      '<article class="form-box"><div class="label">3. Preteritum · past</div><div class="value">' + esc(pret) + ' ' + speakerButton(pret, "Lyssna på preteritum") + '</div><div class="desc">Finished action in past</div></article>' +
      '<article class="form-box"><div class="label">4. Supinum</div><div class="value">' + esc(supine) + ' ' + speakerButton(supine, "Lyssna på supinum") + '</div><div class="desc">Used with <em>har</em> or <em>hade</em></div></article>' +
      '<article class="form-box"><div class="label">5. Perfekt · has / have</div>' + perfHtml + '</article>' +
      '<article class="form-box"><div class="label">6. Imperativ · command</div><div class="value">' + esc(imperative) + ' ' + (imperative !== "—" ? speakerButton(imperative, "Lyssna på imperativ") : "") + '</div><div class="desc">A command or instruction</div></article>' +
      '<div class="grammar-note"><b>Verbgrupp:</b> ' + esc(group) + '</div>' +
      '</div>' +
      '<div class="panels-grid">' +
      '<section class="panel"><h3>Exempel på svenska</h3><p class="sv-highlight">' + esc(v[6]) + ' ' + speakerButton(v[6], "Lyssna på exempel") + '</p></section>' +
      '<section class="panel"><h3>In English</h3><p>' + esc(v[7]) + '</p></section>' +
      '</div>';
  }

  function renderNoun(n, notice) {
    var singIndef = n[0], singDef = n[1], plurIndef = n[2], plurDef = n[3];
    var gender = n[4]; // "en" or "ett"
    var group = n[5];
    var english = n[6];
    var exSv = n[7];
    var exEn = n[8];

    resultBox.innerHTML =
      (notice ? '<div class="notice">' + notice + '</div>' : '') +
      '<div class="result-card-header">' +
      '<div>' +
      '<div class="eyebrow">Substantiv & Plural</div>' +
      '<h2 class="word-title">' + esc(gender + " " + singIndef) + ' ' + speakerButton(singIndef, "Lyssna på substantiv") + '</h2>' +
      '<div class="word-meaning">' + esc(english) + '</div>' +
      '</div>' +
      '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px;">' +
      '<span class="pill ' + esc(gender) + '">' + esc(gender.toUpperCase()) + '-ORD</span>' +
      '<button type="button" id="nextRandomNoun" class="next-rand-btn">Nästa substantiv →</button>' +
      '</div>' +
      '</div>' +
      '<div class="notice" style="margin-bottom:14px;"><b>Böjningsgrupp:</b> ' + esc(group) + '</div>' +
      '<div class="forms-grid">' +
      '<article class="form-box"><div class="label">1. Singular Obestämd (a / an)</div><div class="value">' + esc(gender + " " + singIndef) + ' ' + speakerButton(singIndef) + '</div><div class="desc">One item (general)</div></article>' +
      '<article class="form-box"><div class="label">2. Singular Bestämd (the)</div><div class="value">' + esc(singDef) + ' ' + speakerButton(singDef) + '</div><div class="desc">A specific item</div></article>' +
      '<article class="form-box"><div class="label">3. Plural Obestämd</div><div class="value">' + esc(plurIndef) + ' ' + speakerButton(plurIndef) + '</div><div class="desc">Several items (general)</div></article>' +
      '<article class="form-box"><div class="label">4. Plural Bestämd (the)</div><div class="value">' + esc(plurDef) + ' ' + speakerButton(plurDef) + '</div><div class="desc">Specific items</div></article>' +
      '</div>' +
      '<div class="panels-grid">' +
      '<section class="panel"><h3>Exempel på svenska</h3><p class="sv-highlight">' + esc(exSv) + ' ' + speakerButton(exSv, "Lyssna på exempel") + '</p></section>' +
      '<section class="panel"><h3>Engelsk översättning</h3><p>' + esc(exEn) + '</p></section>' +
      '</div>';
  }

  // --- SEARCH EXECUTION ---
  function executeSearch(raw, fromTap) {
    var q = norm(raw);
    closeSuggestions();

    if (!q) {
      var sampleWords = currentTab === "nouns" ? ["bil", "flicka", "hus", "äpple"] : ["skriva", "gå", "äta", "bo"];
      resultBox.innerHTML =
        '<div class="empty-state"><b>Type a word first.</b><br>Try tapping one of these:' +
        '<div class="chips">' +
        sampleWords.map(function (w) { return '<button type="button" class="chip" data-search="' + esc(w) + '">' + esc(w) + '</button>'; }).join("") +
        '</div></div>';
      return;
    }

    if (currentTab === "verbs") {
      var v = verbsByName[q], notice = "";
      if (!v && verbsByForm[q]) {
        var hit = verbsByForm[q][0];
        v = hit.verb;
        notice = '<b>' + esc(raw.trim()) + '</b> is the ' + hit.label + ' form of <b>' + esc(v[0]) + '</b>.';
      }
      if (!v) {
        var s = suggestVerbs(q, 1);
        if (s.length) {
          v = s[0].item;
          notice = 'Showing closest match for <b>' + esc(raw.trim()) + '</b>.';
        }
      }
      if (!v && q.length >= 3) {
        var near = verbs
          .map(function (x) { return { v: x, d: lev(q, norm(x[0])) }; })
          .filter(function (o) { return o.d <= 2; })
          .sort(function (a, b) { return a.d - b.d; })
          .slice(0, 4);

        if (near.length) {
          resultBox.innerHTML =
            '<div class="empty-state"><b>No verb called “' + esc(raw.trim()) + '” found.</b><br>Did you mean:' +
            '<div class="chips">' +
            near.map(function (o) { return '<button type="button" class="chip" data-search="' + esc(o.v[0]) + '">' + esc(o.v[0]) + '</button>'; }).join("") +
            '</div></div>';
          return;
        }
      }
      if (!v) {
        resultBox.innerHTML =
          '<div class="empty-state"><b>“' + esc(raw.trim()) + '” is not in the curated verb list yet.</b><br>Try an infinitive (like <em>skriva</em>) or an English word.<div class="chips"><button type="button" class="chip" data-search="skriva">skriva</button><button type="button" class="chip" data-search="äta">äta</button><button type="button" class="chip" data-search="komma">komma</button></div></div>';
        return;
      }
      searchInput.value = v[0];
      renderVerb(v, notice);
    } else if (currentTab === "nouns") {
      // Clean leading "en " or "ett "
      var cleanQ = q.replace(/^(en|ett)\s+/, "");
      var n = nounsByName[cleanQ], nounNotice = "";

      if (!n && nounsByForm[cleanQ]) {
        var nHit = nounsByForm[cleanQ][0];
        n = nHit.noun;
        nounNotice = '<b>' + esc(raw.trim()) + '</b> is the ' + nHit.label + ' of <b>' + esc(n[4] + " " + n[0]) + '</b>.';
      }
      if (!n) {
        var ns = suggestNouns(cleanQ, 1);
        if (ns.length) {
          n = ns[0].item;
          nounNotice = 'Showing closest match for <b>' + esc(raw.trim()) + '</b>.';
        }
      }
      if (!n) {
        resultBox.innerHTML =
          '<div class="empty-state"><b>“' + esc(raw.trim()) + '” was not found in the noun list yet.</b><br>Try searching <em>bil</em>, <em>flicka</em>, <em>äpple</em>, or <em>hus</em>.<div class="chips"><button type="button" class="chip" data-search="bil">bil</button><button type="button" class="chip" data-search="katt">katt</button><button type="button" class="chip" data-search="hus">hus</button><button type="button" class="chip" data-search="äpple">äpple</button></div></div>';
        return;
      }
      searchInput.value = n[0];
      renderNoun(n, nounNotice);
    }

    if (fromTap && resultBox.scrollIntoView) {
      try {
        resultBox.scrollIntoView({ behavior: "smooth", block: "start" });
      } catch (e) {}
    }
  }

  // --- THEME EXPLORER RENDERING ---
  function renderThemes() {
    var themeButtonsHtml = themes.map(function (t) {
      var activeClass = t.id === currentThemeId ? " active" : "";
      return '<button type="button" class="theme-card-btn' + activeClass + '" data-theme-id="' + esc(t.id) + '">' +
        '<span>' + t.icon + '</span> ' + esc(t.title) + '</button>';
    }).join("");

    var currentTheme = themes.find(function (t) { return t.id === currentThemeId; }) || themes[0];
    if (!currentTheme) return;

    var wordsHtml = currentTheme.words.map(function (w) {
      return (
        '<div class="vocab-card">' +
        '<div>' +
        '<div class="vocab-sv">' + esc(w.sv) + ' ' + speakerButton(w.sv, "Lyssna") + '</div>' +
        '<div class="vocab-en">' + esc(w.en) + '</div>' +
        '</div>' +
        '<div class="vocab-ex">“' + esc(w.example) + '” ' + (w.example ? speakerButton(w.example, "Lyssna på exempel") : '') + '</div>' +
        '</div>'
      );
    }).join("");

    themeContainer.innerHTML =
      '<div class="theme-selector">' + themeButtonsHtml + '</div>' +
      '<div style="margin: 12px 2px 8px; color: var(--muted); font-size:14px;">' + esc(currentTheme.description) + '</div>' +
      '<div class="vocab-grid">' + wordsHtml + '</div>';
  }

  function learningHeader(title, description) {
    return '<header class="learning-intro"><h2>' + esc(title) + '</h2><p>' + esc(description || "") + '</p></header>';
  }

  function renderLearningTable(headers, rows) {
    return '<div class="table-wrap"><table class="learning-table"><thead><tr>' +
      headers.map(function (cell) { return '<th>' + esc(cell) + '</th>'; }).join("") +
      '</tr></thead><tbody>' + rows.map(function (row, ri) {
        return '<tr>' + row.map(function (cell, ci) {
          var c = esc(cell);
          if (ci === 0 && row.length > 0) {
            return '<td>' + c + ' ' + speakerButton(cell, "Lyssna") + '</td>';
          }
          return '<td>' + c + '</td>';
        }).join("") + '</tr>';
      }).join("") + '</tbody></table></div>';
  }

  function renderAdjectives() {
    learningContainer.innerHTML = learningHeader("Adjektiv · böjning och jämförelse", "Adjektiv anpassas efter substantivets genus, numerus och bestämdhet. Jämför formerna och läs exempelmeningarna.") +
      '<div class="learning-grid">' + adjectives.map(function (a) {
        return '<article class="learning-card">' +
          '<div class="learning-card-heading"><h3>' + esc(a[0]) + '</h3><span>' + esc(a[7]) + '</span></div>' +
          '<dl class="forms-list">' +
          '<div><dt>En-form</dt><dd>' + esc(a[1]) + '</dd></div><div><dt>Ett-form</dt><dd>' + esc(a[2]) + '</dd></div>' +
          '<div><dt>Plural / bestämd</dt><dd>' + esc(a[3]) + '</dd></div><div><dt>Komparativ</dt><dd>' + esc(a[4]) + '</dd></div>' +
          '<div><dt>Superlativ</dt><dd>' + esc(a[5]) + ' / ' + esc(a[6]) + '</dd></div></dl>' +
          '<p class="learning-example"><b>' + esc(a[8]) + '</b><br>' + esc(a[9]) + '</p></article>';
      }).join("") + '</div>';
  }

  function renderPrepositions() {
    learningContainer.innerHTML = learningHeader("Prepositioner", "Lär dig vanliga betydelser, uttryck och skillnader mellan svenska och engelska.") +
      '<div class="learning-grid">' + prepositions.map(function (p) {
        return '<article class="learning-card"><div class="learning-card-heading"><h3>' + esc(p.prep) + '</h3><span>' + esc(p.english) + '</span></div>' +
          '<ul class="learning-list">' + p.rules.map(function (rule) { return '<li>' + rule + '</li>'; }).join("") + '</ul>' +
          '<h4>Exempel</h4><ul class="example-list">' + p.examples.map(function (e) {
            return '<li><b>' + esc(e.sv) + '</b><span>' + esc(e.en) + '</span></li>';
          }).join("") + '</ul>' +
          (p.verbCombinations.length ? '<h4>Vanliga kombinationer</h4><p class="combination-list">' + p.verbCombinations.map(esc).join(" · ") + '</p>' : '') +
          '</article>';
      }).join("") + '</div>';
  }

  function renderWordOrder() {
    if (!wordorder) return;
    learningContainer.innerHTML = learningHeader(wordorder.title, wordorder.description) +
      wordorder.sections.map(function (section) {
        var html = '<section class="learning-section"><h3>' + esc(section.icon + " " + section.title) + '</h3><p>' + section.explanation + '</p>';
        if (section.rules) html += '<ul class="learning-list">' + section.rules.map(function (rule) { return '<li>' + rule + '</li>'; }).join("") + '</ul>';
        if (section.wrongExamples) html += '<div class="example-grid">' + section.wrongExamples.map(function (e) {
          return '<article class="example-card"><p class="wrong-example">' + esc(e.wrong) + '</p><p class="correct-example">' + esc(e.correct) + '</p><span>' + esc(e.why) + '</span></article>';
        }).join("") + '</div>';
        if (section.slots) html += '<div class="learning-grid">' + section.slots.map(function (slot) {
          return '<article class="learning-card"><h4>' + esc(slot.name) + '</h4><p>' + esc(slot.desc) + '</p><b>' + esc(slot.example) + '</b></article>';
        }).join("") + '</div>';
        if (section.mainClauseExample) html += '<div class="example-grid">' +
          [section.mainClauseExample, section.subClauseExample].map(function (example) {
            return '<article class="learning-card"><h4>' + esc(example.label) + '</h4><div class="slot-row">' +
              example.slots.map(function (slot, i) { return '<div><span>' + esc(example.names[i]) + '</span><b>' + esc(slot) + '</b></div>'; }).join("") +
              '</div></article>';
          }).join("") + '</div>';
        if (section.words) html += '<ul class="conjunction-list">' + section.words.map(function (w) {
          return '<li><b>' + esc(w.word) + '</b><span>' + esc(w.en) + '</span><em>' + esc(w.example) + '</em></li>';
        }).join("") + '</ul>';
        return html + '</section>';
      }).join("");
  }

  function renderPronouns() {
    if (!pronouns) return;
    var ref = pronouns.sinSittSina;
    learningContainer.innerHTML = learningHeader(pronouns.title, pronouns.description) +
      '<section class="learning-section"><h3>' + esc(pronouns.personal.title) + '</h3>' +
      renderLearningTable(pronouns.personal.headers, pronouns.personal.rows) + '</section>' +
      '<section class="learning-section"><h3>' + esc(ref.title) + '</h3><p>' + esc(ref.description) + '</p>' +
      '<ul class="learning-list">' + ref.rules.map(function (rule) { return '<li>' + rule.rule + ' <span>' + esc(rule.example) + '</span></li>'; }).join("") + '</ul>' +
      '<div class="example-grid">' + ref.contrastExamples.map(function (e) {
        return '<article class="example-card"><b>' + esc(e.sv) + '</b><span>' + esc(e.en) + '</span><em>' + esc(e.note) + '</em></article>';
      }).join("") + '</div></section>' +
      ['demonstrative', 'interrogative', 'indefinite'].map(function (key) {
        var section = pronouns[key];
        return '<section class="learning-section"><h3>' + esc(section.title) + '</h3><div class="learning-grid">' +
          section.rows.map(function (row) {
            var sv = row.sv || row[0], en = row.en || row[1], example = row.example || row[2];
            return '<article class="learning-card"><h4>' + esc(sv) + '</h4><p>' + esc(en) + '</p><span>' + esc(example) + '</span></article>';
          }).join("") + '</div></section>';
      }).join("");
  }

  function renderNumbers() {
    if (!numbers) return;
    function renderPairs(items) {
      return '<div class="learning-grid compact-grid">' + items.map(function (item) {
        return '<div class="pair-card"><b>' + esc(item[0]) + '</b><span>' + esc(item[1]) + '</span></div>';
      }).join("") + '</div>';
    }
    function renderNotes(notes) {
      return notes && notes.length ? '<ul class="learning-list">' + notes.map(function (note) { return '<li>' + note + '</li>'; }).join("") + '</ul>' : '';
    }
    learningContainer.innerHTML = learningHeader(numbers.title, numbers.description) +
      '<section class="learning-section"><h3>' + esc(numbers.cardinals.title) + '</h3>' + renderPairs(numbers.cardinals.numbers) + renderNotes(numbers.cardinals.notes) + '</section>' +
      '<section class="learning-section"><h3>' + esc(numbers.ordinals.title) + '</h3>' + renderPairs(numbers.ordinals.numbers) + renderNotes(numbers.ordinals.notes) + '</section>' +
      '<section class="learning-section"><h3>' + esc(numbers.time.title) + '</h3><p>' + esc(numbers.time.description) + '</p>' +
      renderLearningTable(["Tid", "Svenska", "English"], numbers.time.examples.map(function (e) { return [e.time, e.sv, e.en]; })) + renderNotes(numbers.time.warnings) + '</section>' +
      ['days', 'months', 'seasons'].map(function (key) {
        var section = numbers[key];
        return '<section class="learning-section"><h3>' + esc(section.title) + '</h3>' + renderPairs(section.items.map(function (item) {
          return [item.sv, item.en + (item.period ? " · " + item.period : "")];
        })) + renderNotes(section.notes) + '</section>';
      }).join("") +
      '<section class="learning-section"><h3>' + esc(numbers.dateFormat.title) + '</h3>' + renderNotes(numbers.dateFormat.rules) + '</section>';
  }

  function renderFalseFriends() {
    var list = window.ORDKOMPIS_FALSEFRIENDS || [];
    if (!learningContainer) return;
    var html = '<div class="section-header"><h2>Vanliga fällor (False Friends)</h2><p>Ord som ser engelska ut men betyder något annat på svenska.</p></div>';
    if (list.length === 0) {
      html += '<div class="notice">Inga fällor tillagda ännu.</div>';
    } else {
      html += '<div class="lesson-grid">';
      list.forEach(function (item) {
        html += '<article class="lesson-card">' +
          '<h3>' + esc(item.sv) + ' ' + speakerButton(item.sv, "Lyssna på ordet") + '</h3>' +
          '<p style="margin:6px 0"><b>Betydelse:</b> ' + esc(item.actualSv) + '</p>' +
          '<p style="margin:6px 0;color:var(--muted)"><b>Förklaring:</b> ' + esc(item.explanation) + '</p>' +
          (item.exampleSv ? '<p style="margin:10px 0 4px"><b>Exempel:</b> ' + esc(item.exampleSv) + ' ' + speakerButton(item.exampleSv) + '</p>' : '') +
          (item.exampleEn ? '<p style="margin:4px 0;color:var(--muted)">' + esc(item.exampleEn) + '</p>' : '') +
          '</article>';
      });
      html += '</div>';
    }
    learningContainer.innerHTML = html;
  }

  function renderIdioms() {
    var list = window.ORDKOMPIS_IDIOMS || [];
    if (!learningContainer) return;
    var html = '<div class="section-header"><h2>Idiom & Uttryck</h2><p>Vanliga svenska uttryck med betydelse och exempel.</p></div>';
    if (list.length === 0) {
      html += '<div class="notice">Inga uttryck tillagda ännu.</div>';
    } else {
      html += '<div class="lesson-grid">';
      list.forEach(function (item) {
        html += '<article class="lesson-card">' +
          '<h3>' + esc(item.sv) + ' ' + speakerButton(item.sv, "Lyssna på uttrycket") + '</h3>' +
          '<p style="margin:6px 0;color:var(--muted)"><b>Bokstavligt:</b> ' + esc(item.literal) + '</p>' +
          '<p style="margin:6px 0"><b>Betydelse på engelska:</b> ' + esc(item.en) + '</p>' +
          (item.exampleSv ? '<p style="margin:10px 0 4px"><b>Exempel:</b> ' + esc(item.exampleSv) + ' ' + speakerButton(item.exampleSv) + '</p>' : '') +
          (item.exampleEn ? '<p style="margin:4px 0;color:var(--muted)">' + esc(item.exampleEn) + '</p>' : '') +
          '</article>';
      });
      html += '</div>';
    }
    learningContainer.innerHTML = html;
  }

  function renderPhrases() {
    if (!phrases) return;
    learningContainer.innerHTML = learningHeader(phrases.title, phrases.description) +
      phrases.categories.map(function (category) {
        return '<section class="learning-section"><h3>' + esc((category.icon || "") + " " + category.title) + '</h3><div class="learning-grid">' +
          category.phrases.map(function (phrase) {
            return '<article class="learning-card"><h4>' + esc(phrase.sv) + ' ' + speakerButton(phrase.sv, "Lyssna på fras") + '</h4><p>' + esc(phrase.en) + '</p>' +
              (phrase.note ? '<span>' + esc(phrase.note) + '</span>' : '') + '</article>';
          }).join("") + '</div></section>';
      }).join("");
  }

  function renderLearningTab(tabId) {
    var renderers = {
      adjectives: renderAdjectives,
      prepositions: renderPrepositions,
      wordorder: renderWordOrder,
      pronouns: renderPronouns,
      numbers: renderNumbers,
      phrases: renderPhrases,
      idioms: renderIdioms,
      falsefriends: renderFalseFriends
    };
    if (renderers[tabId]) renderers[tabId]();
  }

  // --- QUIZ FEATURE ---
  var currentQuizNoun = null;
  var quizMode = "en-ett";
  var quizStats = { correct: 0, total: 0 };

  function nextQuizQuestion() {
    if (quizMode === "sv-en") {
      renderQuizSvEn();
      return;
    }
    if (quizMode === "en-sv") {
      renderQuizEnSv();
      return;
    }
    if (!nouns.length) return;
    var randomIdx = Math.floor(Math.random() * nouns.length);
    currentQuizNoun = nouns[randomIdx];

    quizContainer.innerHTML =
      '<div class="section-header"><h2>Quiz: En eller Ett?</h2><p>Gissa rätt artikel för substantivet.</p></div>' +
      '<div class="quiz-card">' +
      '<div class="quiz-question">En eller ett? · Välj rätt artikel:</div>' +
      '<div class="quiz-word">' + esc(currentQuizNoun[0]) + ' ' + speakerButton(currentQuizNoun[0]) + '</div>' +
      '<div style="color:var(--muted); font-size:15px; margin-bottom:12px;">Betydelse: ' + esc(currentQuizNoun[6]) + '</div>' +
      '<div class="quiz-options">' +
      '<button type="button" class="quiz-btn en-opt" data-choice="en">en ' + esc(currentQuizNoun[0]) + '</button>' +
      '<button type="button" class="quiz-btn ett-opt" data-choice="ett">ett ' + esc(currentQuizNoun[0]) + '</button>' +
      '</div>' +
      '<div id="quizFeedback" class="quiz-feedback"></div>' +
      '<div class="quiz-stats" style="margin-top:10px;color:var(--muted);font-size:13px;">Rätt: ' + quizStats.correct + ' / ' + quizStats.total + '</div>' +
      '<button type="button" id="nextQuizBtn" class="go-btn" style="margin-top:14px; display:none;">Nästa ord →</button>' +
      '<button type="button" id="backToQuizMenuFromGame" class="link-btn" style="margin-top:10px; display:block;">Tillbaka till quizval</button>' +
      '</div>';
  }

  function renderQuizSvEn() {
    if (!nouns.length) return;
    var idx = Math.floor(Math.random() * nouns.length);
    var noun = nouns[idx];
    var correct = noun[6].split(/[;,]/)[0].trim().toLowerCase();
    var choices = [correct];
    var pool = nouns.slice();
    for (var i = 0; i < 3; i++) {
      var c = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
      if (!c) break;
      var cand = c[6].split(/[;,]/)[0].trim().toLowerCase();
      if (choices.indexOf(cand) === -1) choices.push(cand);
    }
    for (var j = choices.length - 1; j > 0; j--) {
      var k = Math.floor(Math.random() * (j + 1));
      var tmp = choices[j]; choices[j] = choices[k]; choices[k] = tmp;
    }
    quizContainer.innerHTML =
      '<div class="section-header"><h2>Quiz: Svenska → Engelska</h2><p>Välj rätt engelsk översättning.</p></div>' +
      '<div class="quiz-card">' +
      '<div class="quiz-word">' + esc(noun[4] + " " + noun[0]) + ' ' + speakerButton(noun[0]) + '</div>' +
      '<div class="quiz-options column">' +
      choices.map(function (ch) {
        return '<button type="button" class="quiz-btn" data-choice="' + esc(ch) + '">' + esc(ch) + '</button>';
      }).join('') +
      '</div>' +
      '<div id="quizFeedback" class="quiz-feedback"></div>' +
      '<div class="quiz-stats" style="margin-top:10px;color:var(--muted);font-size:13px;">Rätt: ' + quizStats.correct + ' / ' + quizStats.total + '</div>' +
      '<button type="button" id="nextQuizBtn" class="go-btn" style="margin-top:14px; display:none;">Nästa →</button>' +
      '<button type="button" id="backToQuizMenuFromGame" class="link-btn" style="margin-top:10px; display:block;">Tillbaka till quizval</button>' +
      '</div>';
    quizContainer._quiz = { type: "sv-en", answer: correct, noun: noun };
  }

  function renderQuizEnSv() {
    if (!nouns.length) return;
    var idx = Math.floor(Math.random() * nouns.length);
    var noun = nouns[idx];
    var en = noun[6].split(/[;,]/)[0].trim();
    var correct = noun[4] + " " + noun[0];
    var choices = [correct];
    var pool = nouns.slice();
    for (var i = 0; i < 3; i++) {
      var c = pool.splice(Math.floor(Math.random() * pool.length), 1)[0];
      if (!c) break;
      var cand = c[4] + " " + c[0];
      if (choices.indexOf(cand) === -1) choices.push(cand);
    }
    for (var j = choices.length - 1; j > 0; j--) {
      var k = Math.floor(Math.random() * (j + 1));
      var tmp = choices[j]; choices[j] = choices[k]; choices[k] = tmp;
    }
    quizContainer.innerHTML =
      '<div class="section-header"><h2>Quiz: Engelska → Svenska</h2><p>Välj rätt svenskt ord med artikel.</p></div>' +
      '<div class="quiz-card">' +
      '<div class="quiz-word">' + esc(en) + '</div>' +
      '<div class="quiz-options column">' +
      choices.map(function (ch) {
        return '<button type="button" class="quiz-btn" data-choice="' + esc(ch) + '">' + esc(ch) + '</button>';
      }).join('') +
      '</div>' +
      '<div id="quizFeedback" class="quiz-feedback"></div>' +
      '<div class="quiz-stats" style="margin-top:10px;color:var(--muted);font-size:13px;">Rätt: ' + quizStats.correct + ' / ' + quizStats.total + '</div>' +
      '<button type="button" id="nextQuizBtn" class="go-btn" style="margin-top:14px; display:none;">Nästa →</button>' +
      '<button type="button" id="backToQuizMenuFromGame" class="link-btn" style="margin-top:10px; display:block;">Tillbaka till quizval</button>' +
      '</div>';
    quizContainer._quiz = { type: "en-sv", answer: correct };
  }

  function handleQuizAnswer(choice) {
    var feedbackEl = document.getElementById("quizFeedback");
    var nextBtn = document.getElementById("nextQuizBtn");

    if ((quizMode === "sv-en" || quizMode === "en-sv") && quizContainer._quiz) {
      quizStats.total++;
      var isCorr = (quizMode === "sv-en") ? (choice.toLowerCase() === quizContainer._quiz.answer) : (choice === quizContainer._quiz.answer);
      if (feedbackEl) {
        if (isCorr) {
          quizStats.correct++;
          feedbackEl.style.background = "var(--surface-2)";
          feedbackEl.style.color = "var(--primary)";
          feedbackEl.innerHTML = '🎉 <b>Rätt!</b>';
        } else {
          feedbackEl.style.background = "var(--warn-bg)";
          feedbackEl.style.color = "var(--warn-fg)";
          feedbackEl.innerHTML = '❌ <b>Fel.</b> Rätt svar: <b>' + esc(quizContainer._quiz.answer) + '</b>';
        }
      }
      var qbtns = quizContainer.querySelectorAll(".quiz-btn");
      qbtns.forEach(function (b) { b.disabled = true; b.style.opacity = "0.6"; });
      if (nextBtn) { nextBtn.style.display = "inline-flex"; nextBtn.onclick = function () { if (quizMode === "sv-en") renderQuizSvEn(); else renderQuizEnSv(); }; }
      return;
    }

    if (!currentQuizNoun) return;
    quizStats.total++;
    var isCorrect = choice === currentQuizNoun[4];
    if (feedbackEl) {
      if (isCorrect) {
        quizStats.correct++;
        feedbackEl.style.background = "var(--surface-2)";
        feedbackEl.style.color = "var(--primary)";
        feedbackEl.innerHTML = '🎉 <b>Rätt!</b> Det heter <b>' + esc(currentQuizNoun[4] + " " + currentQuizNoun[0]) + '</b> (' + esc(currentQuizNoun[5]) + '). Plural: <em>' + esc(currentQuizNoun[2]) + '</em>.';
      } else {
        feedbackEl.style.background = "var(--warn-bg)";
        feedbackEl.style.color = "var(--warn-fg)";
        feedbackEl.innerHTML = '❌ <b>Inte riktigt!</b> Det heter <b>' + esc(currentQuizNoun[4] + " " + currentQuizNoun[0]) + '</b>. Pluralformen är <em>' + esc(currentQuizNoun[2]) + '</em>.';
      }
    }

    var btns = quizContainer.querySelectorAll(".quiz-btn");
    btns.forEach(function (b) { b.disabled = true; b.style.opacity = "0.6"; });
    if (nextBtn) {
      nextBtn.style.display = "inline-flex";
      nextBtn.onclick = function () { nextQuizQuestion(); };
    }
  }

  // --- TAB SWITCHER ---
  function switchTab(tabId) {
    currentTab = tabId;
    var activeTab = document.querySelector('.nav-tab[data-tab="' + tabId + '"]');
    var activeIsMore = activeTab && moreTopicsMenu.contains(activeTab);
    moreTopicsBtn.classList.toggle("active", !!activeIsMore);
    moreTopicsMenu.hidden = true;
    moreTopicsBtn.setAttribute("aria-expanded", "false");
    tabBtns.forEach(function (btn) {
      var isActive = btn.getAttribute("data-tab") === tabId;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    closeSuggestions();
    searchInput.value = "";

    var isSearchTab = tabId === "verbs" || tabId === "nouns";
    searchCard.style.display = isSearchTab ? "block" : "none";
    resultBox.style.display = isSearchTab ? "block" : "none";
    browseList.style.display = isSearchTab ? "flex" : "none";
    sectionTitle.style.display = isSearchTab ? "block" : "none";
    themeContainer.style.display = tabId === "themes" ? "block" : "none";
    quizContainer.style.display = tabId === "quiz" ? "block" : "none";
    learningContainer.style.display = ["adjectives", "prepositions", "wordorder", "pronouns", "numbers", "phrases", "idioms", "falsefriends"].indexOf(tabId) >= 0 ? "block" : "none";

    // Configure the searchable word lists.
    if (tabId === "verbs") {
      searchLabel.textContent = "Sök svenskt verb";
      searchInput.placeholder = "skriva, gå, arbeta, write…";
      searchHint.innerHTML = "Sök på grundform (skriva), böjd form (skrev) eller engelska (write).";
      sectionTitle.textContent = "Vanliga verb att utforska";
      fillChips(["vara", "ha", "göra", "gå", "komma", "äta", "skriva", "läsa", "arbeta", "lära sig", "tycka om", "bli"]);
      fillBrowse(["vara", "ha", "göra", "gå", "komma", "säga", "få", "ta", "se", "kunna", "vilja", "äta", "dricka", "skriva", "läsa", "prata", "bo", "arbeta", "köpa", "hjälpa", "förstå", "lära sig", "tycka om", "känna sig", "hinna", "koppla av", "ge upp"]);
      executeSearch("skriva");
    } else if (tabId === "nouns") {
      searchLabel.textContent = "Sök substantiv (En / Ett & Plural)";
      searchInput.placeholder = "bil, flicka, äpple, hus, book…";
      searchHint.innerHTML = "Sök singular, plural, bestämd form eller engelska för att se alla 4 formerna.";
      sectionTitle.textContent = "Vanliga substantiv & böjningsgrupper";
      fillChips(["bil", "flicka", "äpple", "hus", "katt", "barn", "bok", "stad", "tid", "jobb"]);
      fillBrowse(["flicka", "pojke", "bil", "katt", "äpple", "hus", "barn", "bok", "stad", "bord", "hund", "blomma", "vecka", "skola", "lägenhet", "kaffe", "möte", "språk", "fika", "kollega"]);
      executeSearch("bil");
    } else if (tabId === "themes") {
      renderThemes();
    } else if (tabId === "quiz") {
      quizContainer.style.display = "block";
      quizMode = "en-ett";
      currentQuizNoun = null;
      quizStats = { correct: 0, total: 0 };
      if (quizContainer) {
        quizContainer.innerHTML =
          '<div class="section-header"><h2>Öva</h2><p>Välj quizläge för att träna.</p></div>' +
          '<div class="quiz-mode-grid">' +
          '<button type="button" class="quiz-mode-btn" data-quiz-mode="en-ett"><strong>En / Ett</strong><span>Gissa rätt artikel</span></button>' +
          '<button type="button" class="quiz-mode-btn" data-quiz-mode="sv-en"><strong>Svenska → Engelska</strong><span>Översätt till engelska</span></button>' +
          '<button type="button" class="quiz-mode-btn" data-quiz-mode="en-sv"><strong>Engelska → Svenska</strong><span>Hitta svenskt ord</span></button>' +
          '</div>';
      }
    } else {
      renderLearningTab(tabId);
    }
  }

  function fillChips(list) {
    quickChips.innerHTML = list.map(function (w) {
      return '<button type="button" class="chip" data-search="' + esc(w) + '">' + esc(w) + '</button>';
    }).join("");
  }

  function fillBrowse(list) {
    browseList.innerHTML = list.map(function (w) {
      return '<button type="button" class="chip" data-search="' + esc(w) + '">' + esc(w) + '</button>';
    }).join("");
  }

  moreTopicsBtn.addEventListener("click", function () {
    var isOpen = moreTopicsBtn.getAttribute("aria-expanded") === "true";
    moreTopicsBtn.setAttribute("aria-expanded", isOpen ? "false" : "true");
    moreTopicsMenu.hidden = isOpen;
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !moreTopicsMenu.hidden) {
      moreTopicsMenu.hidden = true;
      moreTopicsBtn.setAttribute("aria-expanded", "false");
      moreTopicsBtn.focus();
    }
  });

  // --- MOBILE-FRIENDLY EVENT LISTENERS ---
  // Fix for iOS Safari tap/submit behavior:
  // Use touch/pointer events and handle submit reliably
  document.getElementById("searchForm").addEventListener("submit", function (e) {
    e.preventDefault();
    if (activeSuggIndex >= 0 && currentSuggList[activeSuggIndex]) {
      executeSearch(currentSuggList[activeSuggIndex].item[0]);
    } else {
      executeSearch(searchInput.value);
    }
    searchInput.blur();
  });

  goBtn.addEventListener("pointerup", function () {
    if (activeSuggIndex >= 0 && currentSuggList[activeSuggIndex]) {
      executeSearch(currentSuggList[activeSuggIndex].item[0]);
    } else {
      executeSearch(searchInput.value);
    }
    searchInput.blur();
  });

  searchInput.addEventListener("input", function () {
    var val = searchInput.value;
    if (currentTab === "verbs") {
      openSuggestions(suggestVerbs(val, 6));
    } else if (currentTab === "nouns") {
      openSuggestions(suggestNouns(val, 6));
    }
  });

  searchInput.addEventListener("focus", function () {
    if (searchInput.value.trim()) {
      if (currentTab === "verbs") openSuggestions(suggestVerbs(searchInput.value, 6));
      else if (currentTab === "nouns") openSuggestions(suggestNouns(searchInput.value, 6));
    }
  });

  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (suggBox.hidden) {
        if (currentTab === "verbs") openSuggestions(suggestVerbs(searchInput.value, 6));
        else openSuggestions(suggestNouns(searchInput.value, 6));
      }
      setActiveSuggestion(activeSuggIndex + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveSuggestion(activeSuggIndex - 1);
    } else if (e.key === "Escape") {
      closeSuggestions();
    }
  });

  // Suggestion click delegation with pointerup for instant response on mobile Safari
  suggBox.addEventListener("pointerdown", function (e) {
    e.preventDefault(); // Prevent blur before selection is processed
  });

  suggBox.addEventListener("click", function (e) {
    var li = e.target.closest ? e.target.closest("li") : null;
    if (!li) return;
    var idx = +li.getAttribute("data-idx");
    if (currentSuggList[idx]) {
      executeSearch(currentSuggList[idx].item[0], true);
      searchInput.blur();
    }
  });

  // Global click & delegation for chips, tabs, themes and quiz
  document.addEventListener("click", function (e) {
    if (!e.target.closest) return;

    // Speaker button
    var speakBtn = e.target.closest(".speak-btn");
    if (speakBtn) {
      e.preventDefault();
      e.stopPropagation();
      var text = speakBtn.getAttribute("data-speak") || "";
      if (text) speakSwedish(text);
      return;
    }

    // Next random verb
    var nextVerb = e.target.closest("#nextRandomVerb");
    if (nextVerb && verbs && verbs.length) {
      e.preventDefault();
      var rv = verbs[Math.floor(Math.random() * verbs.length)];
      renderVerb(rv);
      try { resultBox.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (ex) {}
      return;
    }

    // Next random noun
    var nextNoun = e.target.closest("#nextRandomNoun");
    if (nextNoun && nouns && nouns.length) {
      e.preventDefault();
      var rn = nouns[Math.floor(Math.random() * nouns.length)];
      renderNoun(rn);
      try { resultBox.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (ex) {}
      return;
    }

    if (!e.target.closest(".topic-navigation") && !moreTopicsMenu.hidden) {
      moreTopicsMenu.hidden = true;
      moreTopicsBtn.setAttribute("aria-expanded", "false");
    }

    // Search chip clicked
    var searchChip = e.target.closest("[data-search]");
    if (searchChip) {
      executeSearch(searchChip.getAttribute("data-search"), true);
      return;
    }

    // Navigation tab clicked
    var navTab = e.target.closest(".nav-tab");
    if (navTab) {
      switchTab(navTab.getAttribute("data-tab"));
      return;
    }

    // Theme selector button clicked
    var themeBtn = e.target.closest("[data-theme-id]");
    if (themeBtn) {
      currentThemeId = themeBtn.getAttribute("data-theme-id");
      renderThemes();
      return;
    }

    // Quiz choice selected
    var quizBtn = e.target.closest(".quiz-btn");
    if (quizBtn && !quizBtn.disabled) {
      handleQuizAnswer(quizBtn.getAttribute("data-choice"));
      return;
    }

    // Quiz mode selector
    var quizModeBtn = e.target.closest(".quiz-mode-btn");
    if (quizModeBtn) {
      quizMode = quizModeBtn.getAttribute("data-quiz-mode") || "en-ett";
      quizStats = { correct: 0, total: 0 };
      if (quizMode === "en-ett") {
        currentQuizNoun = null;
        nextQuizQuestion();
      } else if (quizMode === "sv-en") {
        renderQuizSvEn();
      } else if (quizMode === "en-sv") {
        renderQuizEnSv();
      }
      return;
    }

    // Back to quiz menu
    if (e.target.closest("#backToQuizMenuFromGame")) {
      quizContainer.innerHTML =
        '<div class="section-header"><h2>Öva</h2><p>Välj quizläge för att träna.</p></div>' +
        '<div class="quiz-mode-grid">' +
        '<button type="button" class="quiz-mode-btn" data-quiz-mode="en-ett"><strong>En / Ett</strong><span>Gissa rätt artikel</span></button>' +
        '<button type="button" class="quiz-mode-btn" data-quiz-mode="sv-en"><strong>Svenska → Engelska</strong><span>Översätt till engelska</span></button>' +
        '<button type="button" class="quiz-mode-btn" data-quiz-mode="en-sv"><strong>Engelska → Svenska</strong><span>Hitta svenskt ord</span></button>' +
        '</div>';
      return;
    }

    // Quiz next button
    var nextQuiz = e.target.closest("#nextQuizBtn");
    if (nextQuiz) {
      if (quizMode === "sv-en") renderQuizSvEn();
      else if (quizMode === "en-sv") renderQuizEnSv();
      else nextQuizQuestion();
      return;
    }

    // Close autocomplete if clicking outside
    if (!e.target.closest(".field")) {
      closeSuggestions();
    }
  });

  // Add idioms and false friends tabs to more menu in DOM if not present
  var moreMenuEl = document.getElementById('moreTopicsMenu');
  if (moreMenuEl && !moreMenuEl.querySelector('[data-tab="idioms"]')) {
    var idiomBtn = document.createElement('button');
    idiomBtn.type = 'button';
    idiomBtn.className = 'nav-tab';
    idiomBtn.setAttribute('data-tab', 'idioms');
    idiomBtn.setAttribute('role', 'tab');
    idiomBtn.setAttribute('aria-selected', 'false');
    idiomBtn.innerHTML = '<span class="tab-icon">🗣️</span><span class="nav-label">Uttryck</span>';
    moreMenuEl.appendChild(idiomBtn);
  }
  if (moreMenuEl && !moreMenuEl.querySelector('[data-tab="falsefriends"]')) {
    var ffBtn = document.createElement('button');
    ffBtn.type = 'button';
    ffBtn.className = 'nav-tab';
    ffBtn.setAttribute('data-tab', 'falsefriends');
    ffBtn.setAttribute('role', 'tab');
    ffBtn.setAttribute('aria-selected', 'false');
    ffBtn.innerHTML = '<span class="tab-icon">⚠️</span><span class="nav-label">Vanliga fällor</span>';
    moreMenuEl.appendChild(ffBtn);
  }

  switchTab("verbs");

  // Expose global for debugging
  window.__ordkompis = {
    search: executeSearch,
    switchTab: switchTab,
    verbsCount: verbs.length,
    nounsCount: nouns.length
  };
})();
