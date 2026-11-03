// OrdKompis - Additional interface strings and corrections (loaded after ui.js).
// Swedish learning terms (tab names, grammar terms such as "En-form") stay in Swedish; everything else is translated.
(function () {
  var S = window.ORDKOMPIS_I18N.strings;
  function set(key, en, ar, pt, ru, uk) {
    S[key] = { en: en, ar: ar, pt: pt, ru: ru, uk: uk };
  }

  // Corrections: English values that were still Swedish, and missing translations.
  set("nextVerb", "Next verb →", "الفعل التالي ←", "Próximo verbo →", "Следующий глагол →", "Наступне дієслово →");
  set("nextNoun", "Next noun →", "الاسم التالي ←", "Próximo substantivo →", "Следующее существительное →", "Наступний іменник →");
  set("nextAdjective", "Next adjective →", "الصفة التالية ←", "Próximo adjetivo →", "Следующее прилагательное →", "Наступний прикметник →");
  set("showAll", "Show all {n}", "عرض الكل ({n})", "Mostrar todas ({n})", "Показать все ({n})", "Показати всі ({n})");
  set("hideList", "Hide list", "إخفاء القائمة", "Ocultar lista", "Скрыть список", "Сховати список");
  set("showMore", "Show more ({n})", "عرض المزيد ({n})", "Mostrar mais ({n})", "Показать ещё ({n})", "Показати ще ({n})");
  set("wordsToExplore", "{n} words to explore", "{n} كلمة للاستكشاف", "{n} palavras para explorar", "Слов для изучения: {n}", "Слів для вивчення: {n}");
  set("showingOf", "Showing {a} of {b} words", "عرض {a} من {b} كلمة", "Mostrando {a} de {b} palavras", "Показано {a} из {b} слов", "Показано {a} з {b} слів");
  set("exampleSwedish", "Example in Swedish", "مثال بالسويدية", "Exemplo em sueco", "Пример по-шведски", "Приклад шведською");
  set("verbGroup", "Verb group:", "مجموعة الفعل:", "Grupo verbal:", "Группа глагола:", "Група дієслова:");
  set("translationLabel", "In English", "الترجمة", "Tradução", "Перевод", "Переклад");
  set("enForm", "1. En-form", "1. صيغة en", "1. Forma en", "1. Форма en", "1. Форма en");
  set("ettForm", "2. Ett-form", "2. صيغة ett", "2. Forma ett", "2. Форма ett", "2. Форма ett");

  // Audio buttons (labels and tooltips).
  set("listen", "Listen", "استمع", "Ouvir", "Слушать", "Слухати");
  set("listenVerb", "Listen to verb", "استمع إلى الفعل", "Ouvir o verbo", "Прослушать глагол", "Прослухати дієслово");
  set("listenInfinitiv", "Listen to infinitive", "استمع إلى المصدر", "Ouvir o infinitivo", "Прослушать инфинитив", "Прослухати інфінітив");
  set("listenPresens", "Listen to present tense", "استمع إلى المضارع", "Ouvir o presente", "Прослушать настоящее время", "Прослухати теперішній час");
  set("listenPreteritum", "Listen to past tense", "استمع إلى الماضي", "Ouvir o pretérito", "Прослушать прошедшее время", "Прослухати минулий час");
  set("listenSupinum", "Listen to supine", "استمع إلى اسم المفعول", "Ouvir o supino", "Прослушать супинум", "Прослухати супінум");
  set("listenImperativ", "Listen to imperative", "استمع إلى فعل الأمر", "Ouvir o imperativo", "Прослушать повелительное наклонение", "Прослухати наказовий спосіб");
  set("listenAdjective", "Listen to adjective", "استمع إلى الصفة", "Ouvir o adjetivo", "Прослушать прилагательное", "Прослухати прикметник");
  set("listenNoun", "Listen to noun", "استمع إلى الاسم", "Ouvir o substantivo", "Прослушать существительное", "Прослухати іменник");
  set("speakPronunciation", "Listen to pronunciation", "استمع إلى النطق", "Ouvir a pronúncia", "Прослушать произношение", "Прослухати вимову");
  set("englishLabel", "English", "الإنجليزية", "Inglês", "Английский", "Англійська");

  // Search results and messages.
  set("emptyTypeFirst", "Type a word first.", "اكتب كلمة أولًا.", "Digite uma palavra primeiro.", "Сначала введите слово.", "Спочатку введіть слово.");
  set("emptyTryTapping", "Try tapping one of these:", "جرّب النقر على إحدى هذه الكلمات:", "Tente tocar em uma destas:", "Попробуйте нажать на одно из этих слов:", "Спробуйте натиснути одне з цих слів:");
  set("isTheFormOf", "is the {label} form of", "هي صيغة {label} لـ", "é a forma {label} de", "— это форма «{label}» от", "— це форма «{label}» від");
  set("isTheNounForm", "is the {label} of", "هي {label} لـ", "é o/a {label} de", "— это {label} от", "— це {label} від");
  set("closestMatch", "Showing closest match for", "عرض أقرب نتيجة لـ", "Mostrando a correspondência mais próxima de", "Показан ближайший результат для", "Показано найближчий результат для");
  set("noVerbFound", "No verb called “{w}” found.", "لم يُعثر على فعل باسم “{w}”.", "Nenhum verbo chamado “{w}” foi encontrado.", "Глагол «{w}» не найден.", "Дієслово «{w}» не знайдено.");
  set("didYouMean", "Did you mean:", "هل تقصد:", "Você quis dizer:", "Возможно, вы имели в виду:", "Можливо, ви мали на увазі:");
  set("verbNotCurated", "“{w}” is not in the curated verb list yet.", "“{w}” ليس في قائمة الأفعال المختارة بعد.", "“{w}” ainda não está na lista de verbos selecionados.", "«{w}» пока нет в подобранном списке глаголов.", "«{w}» поки немає у відібраному списку дієслів.");
  set("verbTryHint", "Try an infinitive (like <em>skriva</em>) or an English word.", "جرّب المصدر (مثل <em>skriva</em>) أو كلمة إنجليزية.", "Tente um infinitivo (como <em>skriva</em>) ou uma palavra em inglês.", "Попробуйте инфинитив (например, <em>skriva</em>) или английское слово.", "Спробуйте інфінітив (наприклад, <em>skriva</em>) або англійське слово.");
  set("nounNotFound", "“{w}” was not found in the noun list yet.", "لم يُعثر على “{w}” في قائمة الأسماء بعد.", "“{w}” ainda não foi encontrado na lista de substantivos.", "«{w}» пока нет в списке существительных.", "«{w}» поки немає у списку іменників.");
  set("nounTryHint", "Try searching <em>bil</em>, <em>flicka</em>, <em>äpple</em>, or <em>hus</em>.", "جرّب البحث عن <em>bil</em> أو <em>flicka</em> أو <em>äpple</em> أو <em>hus</em>.", "Tente pesquisar <em>bil</em>, <em>flicka</em>, <em>äpple</em> ou <em>hus</em>.", "Попробуйте поискать <em>bil</em>, <em>flicka</em>, <em>äpple</em> или <em>hus</em>.", "Спробуйте пошукати <em>bil</em>, <em>flicka</em>, <em>äpple</em> або <em>hus</em>.");
  set("adjNotFound", "“{w}” was not found among the adjectives.", "لم يُعثر على “{w}” بين الصفات.", "“{w}” não foi encontrado entre os adjetivos.", "«{w}» не найдено среди прилагательных.", "«{w}» не знайдено серед прикметників.");
  set("adjTryHint", "Try a Swedish word or an English meaning.", "جرّب كلمة سويدية أو معنى إنجليزيًا.", "Tente uma palavra em sueco ou um significado em inglês.", "Попробуйте шведское слово или английское значение.", "Спробуйте шведське слово або англійське значення.");

  // Word-order practice.
  set("practiceEyebrow", "Practice actively", "تدرّب بنشاط", "Pratique ativamente", "Практикуйтесь активно", "Практикуйтеся активно");
  set("buildSentence", "Build the sentence", "ركّب الجملة", "Monte a frase", "Составьте предложение", "Складіть речення");
  set("sentenceOf", "Sentence {n} of {total} · Tap the words in the right order.", "الجملة {n} من {total} · اضغط على الكلمات بالترتيب الصحيح.", "Frase {n} de {total} · Toque nas palavras na ordem certa.", "Предложение {n} из {total} · Нажимайте слова в правильном порядке.", "Речення {n} з {total} · Натискайте слова в правильному порядку.");
  set("answerPlaceholder", "Your answer appears here", "تظهر إجابتك هنا", "Sua resposta aparece aqui", "Ваш ответ появится здесь", "Ваша відповідь з'явиться тут");
  set("wordChoices", "Words to choose from", "الكلمات للاختيار", "Palavras para escolher", "Слова для выбора", "Слова для вибору");
  set("yourAnswer", "Your answer", "إجابتك", "Sua resposta", "Ваш ответ", "Ваша відповідь");
  set("correctSentence", "Correct sentence. Well done!", "الجملة صحيحة. أحسنت!", "Frase correta. Muito bem!", "Предложение верное. Отлично!", "Речення правильне. Чудово!");
  set("notYetRight", "Not quite yet. Move a word by tapping it in your answer, or start over.", "ليس تمامًا بعد. حرّك كلمة بالنقر عليها في إجابتك، أو ابدأ من جديد.", "Ainda não está certo. Mova uma palavra tocando nela na sua resposta ou recomece.", "Пока не совсем. Переставьте слово, нажав на него в ответе, или начните заново.", "Поки не зовсім. Перемістіть слово, натиснувши на нього у відповіді, або почніть знову.");
  set("nextSentence", "Next sentence →", "الجملة التالية ←", "Próxima frase →", "Следующее предложение →", "Наступне речення →");
  set("checkBtn", "Check", "تحقّق", "Verificar", "Проверить", "Перевірити");
  set("undoBtn", "Remove last", "احذف الأخيرة", "Remover a última", "Убрать последнее", "Прибрати останнє");
  set("restartBtn", "Start over", "ابدأ من جديد", "Recomeçar", "Начать заново", "Почати знову");

  // Navigation, header and footer.
  set("navPrepVerbs", "Verb + preposition", "فعل + حرف جر", "Verbo + preposição", "Глагол + предлог", "Дієслово + прийменник");
  set("navMore", "More", "المزيد", "Mais", "Ещё", "Ще");
  set("explore", "Explore", "استكشف", "Explorar", "Исследовать", "Досліджувати");
  set("siteBadge", "GitHub Pages Ready", "جاهز لـ GitHub Pages", "Pronto para GitHub Pages", "Готово для GitHub Pages", "Готово для GitHub Pages");
  set("heroTitle", "Learn Swedish.<br><span>Simple &amp; interactive.</span>", "تعلّم السويدية.<br><span>بسيط وتفاعلي.</span>", "Aprenda sueco.<br><span>Simples e interativo.</span>", "Учите шведский.<br><span>Просто и интерактивно.</span>", "Вивчайте шведську.<br><span>Просто та інтерактивно.</span>");
  set("heroLine1","Learn Swedish.", "تعلّم السويدية.", "Aprenda sueco.", "Учите шведский.", "Вивчайте шведську.");
  set("heroLine2", "Simple & interactive.", "بسيط وتفاعلي.", "Simples e interativo.", "Просто и интерактивно.", "Просто та інтерактивно.");
  set("heroSubtitle", "Your personal language buddy for Swedish grammar, words and everyday expressions.", "رفيقك الشخصي لقواعد السويدية وكلماتها وتعبيراتها اليومية.", "Seu companheiro pessoal para gramática, palavras e expressões do dia a dia em sueco.", "Ваш личный помощник по шведской грамматике, словам и повседневным выражениям.", "Ваш особистий помічник із шведської граматики, слів і повсякденних виразів.");
  set("footerStats", "<b>OrdKompis</b> contains <span id=\"totalVerbCount\">{verbs}</span> Swedish verbs, <span id=\"totalNounCount\">{nouns}</span> nouns and lessons on adjectives, prepositions, word order, pronouns, numbers and everyday phrases.", "يحتوي <b>OrdKompis</b> على <span id=\"totalVerbCount\">{verbs}</span> فعلًا سويديًا و<span id=\"totalNounCount\">{nouns}</span> اسمًا، ودروسًا عن الصفات وحروف الجر وترتيب الكلمات والضمائر والأرقام والعبارات اليومية.", "<b>OrdKompis</b> contém <span id=\"totalVerbCount\">{verbs}</span> verbos suecos, <span id=\"totalNounCount\">{nouns}</span> substantivos e lições sobre adjetivos, preposições, ordem das palavras, pronomes, números e frases do dia a dia.", "<b>OrdKompis</b> содержит <span id=\"totalVerbCount\">{verbs}</span> шведских глаголов, <span id=\"totalNounCount\">{nouns}</span> существительных и уроки о прилагательных, предлогах, порядке слов, местоимениях, числах и повседневных фразах.", "<b>OrdKompis</b> містить <span id=\"totalVerbCount\">{verbs}</span> шведських дієслів, <span id=\"totalNounCount\">{nouns}</span> іменників і уроки про прикметники, прийменники, порядок слів, займенники, числа та повсякденні фрази.");
  set("footerBuilt", "Built with plain HTML, modern CSS and vanilla JavaScript with no external dependencies — 100% compatible with GitHub Pages and iPhone Safari.", "بُني بـ HTML بسيط وCSS حديث وJavaScript بدون مكتبات خارجية — متوافق 100% مع GitHub Pages وSafari على iPhone.", "Feito com HTML puro, CSS moderno e JavaScript puro, sem dependências externas — 100% compatível com GitHub Pages e Safari no iPhone.", "Создано на чистом HTML, современном CSS и чистом JavaScript без внешних зависимостей — полностью совместимо с GitHub Pages и Safari на iPhone.", "Створено на чистому HTML, сучасному CSS і чистому JavaScript без зовнішніх залежностей — повністю сумісно з GitHub Pages і Safari на iPhone.");
  set("quizMenuDesc", "Choose a quiz mode to practice.", "اختر وضع اختبار للتدرّب.", "Escolha um modo de quiz para praticar.", "Выберите режим викторины для тренировки.", "Оберіть режим вікторини для тренування.");

  // Search-box examples (the English example words are translated; the Swedish ones stay).
  set("searchPlaceholderVerbs", "skriva, gå, arbeta, write…", "skriva, gå, arbeta, يكتب…", "skriva, gå, arbeta, escrever…", "skriva, gå, arbeta, писать…", "skriva, gå, arbeta, писати…");
  set("searchPlaceholderNouns", "bil, flicka, äpple, hus, book…", "bil, flicka, äpple, hus, كتاب…", "bil, flicka, äpple, hus, livro…", "bil, flicka, äpple, hus, книга…", "bil, flicka, äpple, hus, книжка…");
  set("searchPlaceholderAdjectives", "stor, större, beautiful…", "stor, större, جميل…", "stor, större, bonito…", "stor, större, красивый…", "stor, större, гарний…");

  // Browse filters.
  set("filterAll", "All", "الكل", "Todos", "Все", "Усі");
  set("filterRegular", "Regular", "منتظمة", "Regulares", "Правильные", "Правильні");
  set("filterIrregular", "Irregular", "غير منتظمة", "Irregulares", "Неправильные", "Неправильні");
})();
