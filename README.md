# OrdKompis (Verbkompis & Svenska Lärkompis)

En modern, mobilanpassad interaktiv webbapplikation för att lära sig svenska verb, substantiv, adjektiv, prepositioner, ordföljd och praktiskt vardagsordförråd.

---

## Innehåll & Funktioner

1. **🏃 Verbkompis (478 verb)**:
   - Direkt sökning med autokomplettering på svenska och engelska.
   - Visar infinitiv, presens, preteritum, supinum, perfekt och imperativ.
   - Anger verbgrupp samt exempel på svenska och engelska.
   - Exempelmeningar på svenska med engelsk översättning.
   - Hanterar partikelverb (*koppla av, hålla med, ge upp*) och reflexiva verb (*lära sig, känna sig*).
   - **Ny:** Talerikon för uttal (Web Speech API) och "Nästa verb"-knapp för snabb övning.

2. **📦 Substantiv: En / Ett & Plural (139 vanliga substantiv)**:
   - Visar ordets kön (*en-ord* eller *ett-ord*).
   - Presenterar alla 4 formerna:
     1. *Singular Obestämd* (en bil / ett hus)
     2. *Singular Bestämd* (bilen / huset)
     3. *Plural Obestämd* (bilar / hus)
     4. *Plural Bestämd* (bilarna / husen)
   - Anger böjningsgrupp (Grupp 1-5) med grammatisk regel.
   - **Ny:** Talerikon för alla former/exempel och "Nästa substantiv"-knapp.

3. **☕ Vardagsteman (utökade)**:
   - Praktiska ordlistor indelade i vardagssituationer:
     - *Fika & Restaurang*
     - *Jobb & Kontor*
     - *Bostad & Vardag* (tvättstuga, källsortering m.m.)
     - *Hälsa & Sjukvård* (1177, recept, apotek)
     - *Myndigheter & Samhälle* (Skatteverket, BankID, Försäkringskassan)
     - **Nytt:** *Transport & Resa*, *Shopping & Priser*, *Väder & Årstider*, *Familj & Relationer*
   - **Ny:** Talerikon för ord och exempel i teman.

4. **🎯 Träna & Öva (utökade quiz-lägen)**:
   - **En / Ett** - gissa om ordet är *en* eller *ett* med direkt återkoppling och böjningsregler.
   - **Svenska → Engelska** - välj rätt engelsk översättning.
   - **Engelska → Svenska** - välj rätt svenskt ord med artikel.
   - Snabba quiz-val direkt från fliken "Öva".

5. **📚 Grammatik & referens**:
   - Adjektivböjning och komparation (med talerikoner).
   - Prepositioner med vanliga uttryck och kontrasterande exempel.
   - Svensk ordföljd, V2-regeln och BIFF.
   - Pronomen, tal och tid samt vardagsfraser.
   - **Nytt:** *Idiom & Uttryck* (vanliga svenska uttryck med bokstavlig betydelse, översättning och exempel) med talstöd.

6. **🎨 Stil & tillgänglighet (fas 2)**:
   - Mörkt läge via `prefers-color-scheme` (automatisk).
   - Förbättrade designtokens, skuggor och hover-effekter.
   - Talerikon (Web Speech API, `sv-SE`) där det är relevant - fungerar på de flesta moderna webbläsare.
   - Snabb "nästa"-knapp för verb och substantiv för effektiv övning.

---

## 🚀 Publicera till GitHub Pages (Steg för steg)

Eftersom appen är skriven med 100% ren HTML, CSS och Vanilla JavaScript (inga externa bibliotek, inget byggsteg):

### 1. Skapa ett nytt repository på GitHub
1. Gå till [github.com/new](https://github.com/new).
2. Döp repositoriet till exempelvis `OrdKompis` eller `verbkompis`.
3. Välj **Public** och klicka på **Create repository**.

### 2. Ladda upp / Pusha koden
Kör följande kommandon i terminalen i denna mapp:

```bash
git add .
git commit -m "Initial release of OrdKompis with 478 verbs and nouns"
git branch -M main
git remote add origin https://github.com/<DITT-ANVÄNDARNAMN>/<DITT-REPO-NAMN>.git
git push -u origin main
```

### 3. Aktivera GitHub Pages
1. Gå till ditt repository på GitHub.
2. Klicka på fliken **Settings** längst upp.
3. Välj **Pages** i vänstermenyn.
4. Under **Build and deployment** > **Branch**:
   - Välj `main` grenen och mappen `/ (root)`.
5. Klicka på **Save**.

Inom 1–2 minuter finns appen tillgänglig live på:
`https://<ditt-användarnamn>.github.io/<ditt-repo-namn>/`

### 4. Öppna på iPhone
- Öppna länken i **Safari** på din iPhone.
- Tryck på Dela-knappen (fyrkanten med pilen uppåt) och välj **"Lägg till på hemskärmen"**.
- Appen fungerar nu precis som en riktig mobilapp!

## 🚀 Publicera till GitHub Pages (Steg för steg)

Eftersom appen är skriven med 100% ren HTML, CSS och Vanilla JavaScript (inga externa bibliotek, inget byggsteg):

### 1. Skapa ett nytt repository på GitHub
1. Gå till [github.com/new](https://github.com/new).
2. Döp repositoriet till exempelvis `OrdKompis` eller `verbkompis`.
3. Välj **Public** och klicka på **Create repository**.

### 2. Ladda upp / Pusha koden
Kör följande kommandon i terminalen i denna mapp:

```bash
git add .
git commit -m "Initial release of OrdKompis with 478 verbs and nouns"
git branch -M main
git remote add origin https://github.com/<DITT-ANVÄNDARNAMN>/<DITT-REPO-NAMN>.git
git push -u origin main
```

### 3. Aktivera GitHub Pages
1. Gå till ditt repository på GitHub.
2. Klicka på fliken **Settings** längst upp.
3. Välj **Pages** i vänstermenyn.
4. Under **Build and deployment** > **Branch**:
   - Välj `main` grenen och mappen `/ (root)`.
5. Klicka på **Save**.

Inom 1–2 minuter finns appen tillgänglig live på:
`https://<ditt-användarnamn>.github.io/<ditt-repo-namn>/`

### 4. Öppna på iPhone
- Öppna länken i **Safari** på din iPhone.
- Tryck på Dela-knappen (fyrkanten med pilen uppåt) och välj **"Lägg till på hemskärmen"**.
- Appen fungerar nu precis som en riktig mobilapp!
