# Aprimi quando... 💌

Web app romantica (HTML/CSS/JS vanilla, PWA). Nessuna build, nessun framework.

## Struttura
- `content.js` → **l'unico file che modifichi** (password, lettere, ricordi, playlist, sorprese)
- `index.html`, `css/style.css`, `js/app.js` → codice dell'app
- `manifest.json`, `service-worker.js`, `assets/icons/` → PWA
- `assets/images/` → le tue foto e copertine
- `.github/workflows/deploy.yml` → pubblicazione automatica

## 1. Provarla in locale
Il service worker richiede un server (non basta aprire il file). Dalla cartella del progetto:
```
python3 -m http.server 8000
```
poi apri http://localhost:8000. La password iniziale è `noemi`.

## 2. Caricarla su GitHub
1. Su github.com: **New repository** (nome poco ovvio, es. `aq-n7x2`), **Public**, senza README.
2. Dalla cartella del progetto:
```
git init
git add .
git commit -m "primo regalo"
git branch -M main
git remote add origin https://github.com/TUOUTENTE/NOMEREPO.git
git push -u origin main
```
(Senza terminale: "uploading an existing file" sul sito e trascini tutto, comprese le cartelle `.github`, `css`, `js`, `assets`.)

## 3. Attivare GitHub Pages
Repository → **Settings → Pages → Source: GitHub Actions**. Al primo push parte il deploy (tab *Actions*).
Il link sarà `https://TUOUTENTE.github.io/NOMEREPO/`. Ad ogni push su `main` si aggiorna da solo.

## 4. Installarla su iPhone (da fare con Safari!)
1. Apri il link in **Safari**.
2. Tocca **Condividi** (quadrato con freccia) → **Aggiungi alla schermata Home** → **Aggiungi**.
3. Si apre a schermo intero come un'app. La password va inserita ad ogni apertura.

## 5. Aggiornare i contenuti (da GitHub, anche da telefono)
Apri `content.js` → matita ✏️ → modifica → **Commit changes**. In 1-2 minuti è online. Nell'app compare "C'è qualcosa di nuovo ♥ Tocca per aggiornare".

**Formato lettera** (copia un blocco e cambialo, ricordati la virgola tra un blocco e l'altro):
```js
{ id: "nome-unico", titolo: "Aprimi quando...", testo: `Prima riga.

Nuovo paragrafo (riga vuota).

Gabriele` },
```
Il testo va tra apici inversi `` ` `` (Mac: **Alt + \\**; Windows: **Alt+96**; iPhone: tieni premuto l'apostrofo nella tastiera dei simboli). In alternativa usa le virgolette normali `"..."` e scrivi `\n\n` tra un paragrafo e l'altro.
L'`id` deve essere unico e senza spazi.

- **Ricordo nuovo**: carica la foto in `assets/images/` e aggiungi un blocco in `memories` con `foto: "assets/images/nomefile.jpg"`. Consiglio foto ridimensionate (max ~1200px).
- **Playlist**: su Spotify → playlist → Condividi → Copia link. L'ID è la parte tra `playlist/` e `?`. Incollalo in `playlistId`. Le canzoni in `songs` sono il tuo commento personale (copertine in `assets/images/`).
- **Password**: cambia `password` in `content.js`.
- **Lettera finale**: scrivi il testo in `final.testo`. Finché è vuoto lei vede "Sto ancora scrivendo...".
- **Data countdown**: `countdown.date` (formato `AAAA-MM-GGT00:00:00`).

## Note
- La password è solo una cortesia: il repository è pubblico, quindi i testi sono tecnicamente leggibili da chi conosce il link. Usa un nome repo non ovvio.
- Offline funziona tutto tranne il player Spotify.
- Se cambi file di codice (non `content.js`) e non vedi l'aggiornamento, chiudi e riapri l'app.
