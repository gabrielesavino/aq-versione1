/* ============================================================
   QUI MODIFICHI TUTTO: password, lettere, ricordi, musica, sorprese.
   Regola d'oro: ogni elemento è tra { } e separato dal prossimo da una virgola.
   I testi lunghi vanno tra apici inversi ` ` . Riga vuota = nuovo paragrafo.
   ============================================================ */
const CONTENT = {
  password: "noemi",                    // <-- cambia qui la password (maiuscole/minuscole non contano)
  hint: "Il nome della mia persona preferita",
  names: "Gabriele + Noemi",

  countdown: { date: "2026-12-28T00:00:00", label: "Manca poco al nostro abbraccio" },

  // ---------- LETTERE ----------
  letters: [
    { id: "ti-manco", titolo: "Aprimi quando ti manco", testo: `Amore miooo, ti manco eh? ahahhah🖤

Vorrei tanto poter essere lì con te in questo momento, anche solo per stare insieme senza fare niente di particolare, parlare, ridere delle nostre solite stupidaggini e sentire la tua voce dal vivo invece che attraverso uno schermo.

So che la distanza ogni tanto si fa sentire, ma voglio che tu sappia che anche quando non ci sentiamo per qualche ora, non significa che io ti pensi di meno. Anzi, in ogni momento mi viene spontaneo pensare a te e a quanto vorrei averti qui.

Mi manca poterti vedere, ascoltarti, guardarti mentre ridi e soprattutto poterti dare tutte quelle attenzioni che a distanza devo limitarmi a mandarti con un messaggio o una chiamata.

Però pensa a quando finalmente ci vedremo: tutto questo tempo ad aspettare sarà ancora più bello quando potremo viverlo insieme.

Ti amo vita mia, e se potessi sceglierei comunque te, anche con tutti i chilometri che ci separano.

Vorrei darti un milione di baci. 🖤🫶🏼` },

    { id: "triste", titolo: "Aprimi quando sei triste", testo: `Amore mio, innanzitutto vorrei poterti dare un abbraccio in questo momento. 🖤

Non so cosa sia successo o cosa ti stia passando per la testa, ma voglio ricordarti una cosa: non devi sempre essere forte, non devi per forza avere il sorriso o fingere che vada tutto bene.

Puoi avere le tue giornate no, puoi essere stanca, arrabbiata, confusa o semplicemente non avere voglia di fare niente. Non cambia assolutamente nulla di quello che provo per te.

Vorrei essere una persona con cui puoi parlare liberamente, senza paura di essere giudicata, proprio come tu fai con me. Se hai bisogno di sfogarti, io ci sono. Se invece vuoi distrarti e parlare di tutt'altro, ci sono anche per quello.

Non posso prometterti che riuscirò sempre a risolvere ciò che ti fa stare male, ma posso prometterti che non devi affrontarlo fingendo di stare bene con me e non affronterai nulla da sola, ti sosterrò sempre.

Ricordati che sei importante vita. E non soltanto per me, ma per la persona meravigliosa che sei.

Ti amo tanto cuore mio. Prenditi tutto il tempo che ti serve, io faccio il tifo per te. 🖤` },

    { id: "dubiti", titolo: "Aprimi quando dubiti di te stessa", testo: `Vita mia, fermati un secondo e ascoltami.

Vorrei che tu riuscissi a guardarti con i miei occhi, perché forse capiresti tante cose che tu stessa fai fatica a vedere.

Io vedo una ragazza intelligente, dolce, sensibile, simpatica e con un cuore enorme. Vedo una persona che sa ascoltare, che si preoccupa degli altri e che riesce a farmi stare bene anche con una semplice chiamata.

Non voglio che siano le parole degli altri o le esperienze passate a farti dimenticare quanto vali. Non devi dimostrare niente a nessuno per meritare affetto, rispetto e considerazione.

E soprattutto non devi cambiare per essere abbastanza. Mi piace conoscerti per quella che sei, con i tuoi pregi, i tuoi difetti, le tue insicurezze e tutte quelle piccole cose che ti rendono proprio Noemi.

Io sono fiero di te, amore mio. Anche dei piccoli passi che magari tu non consideri importanti.

Quindi quando inizi a dubitare di te stessa, ricordati che c'è una persona che crede tantissimo in te e che non vede l'ora di continuare a scoprire tutto quello che hai dentro.

Ti amo cuoricino, non dimenticarlo mai. 🖤` },

    { id: "sorridere", titolo: "Aprimi quando vuoi sorridere", testo: `MA CIAOOOOO SIGNORINA AHAHHAHA🖤

Allora, se sei arrivata ad aprire questa lettera significa che hai bisogno di una dose di Gabry, quindi eccomi qua.

Prima cosa: sorridi immediatamente. Non accetto reclami.

Seconda cosa: probabilmente in questo momento stai pensando a quanto sono bello, intelligente, simpatico e modesto. Soprattutto modesto. AHAHAHAHAH. (mi sto antipatico da solo).

Scherzi a parte, amore, spero davvero di essere uno dei motivi per cui sorridi durante le tue giornate. Perché tu non immagini quante volte riesci a far sorridere me, anche quando magari sono stanchissimo o ho avuto una giornata pesante.

Mi piace quando ridiamo insieme, quando ci prendiamo in giro, quando facciamo i gelosi per scherzo, forse, e quando iniziamo a dire mille cose senza un filo logico.

E comunque sappi che sei ufficialmente condannata a sopportarmi ancora per un bel po', quindi preparati.

Ti mando un bacione enorme, amorcitooo. E mi raccomando, voglio quel sorriso. 🖤😭` },

    { id: "noi", titolo: "Aprimi quando pensi a noi", testo: `Amore mio, sai qual è una delle cose che mi fa più sorridere quando penso a noi?

Che tutto è iniziato con un semplice messaggio, quel famoso 10/10. Una cosa che probabilmente nessuno dei due avrebbe immaginato potesse portarci fino a qui.

E invece eccoci qua, a raccontarci le nostre giornate, a sentirci, a fare chiamate lunghissime e a trovare sempre un motivo per cercarci.

Mi piace pensare a tutte le cose che ancora dobbiamo vivere. Le prime volte che ci vedremo, i momenti insieme, le risate, le uscite e anche tutte quelle piccole cose quotidiane che adesso possiamo soltanto immaginare.

La distanza non è sempre semplicissima, ma non voglio che diventi il centro della nostra storia. Voglio che sia soltanto una parte del percorso che stiamo facendo.

Mi piace quello che stiamo costruendo e soprattutto mi piace il fatto che possiamo sostenerci, conoscerci sempre meglio e crescere insieme, senza dover fingere di essere qualcun altro.

Non so esattamente cosa ci riserverà il futuro, ma so che sono felice di averti nella mia vita e che voglio continuare a costruire qualcosa di bello con te.

Ti amo. Sono davvero contento che le nostre strade si siano incrociate. 🖤🫶🏼` },

    { id: "amata", titolo: "Aprimi quando hai bisogno di sentirti amata", testo: `Amore mio, questa forse è la lettera che voglio tu legga più attentamente.

Voglio ricordarti quanto sei importante per me e quanto sono felice di averti nella mia vita.

Non sei una persona qualunque, sei diventata qualcuno a cui tengo davvero tanto. Sei quella con cui mi piace condividere le mie giornate, raccontare quello che mi succede, parlare dei miei pensieri e anche delle cose più stupide.

Amo il tuo modo di essere, il modo in cui ragioni, la tua dolcezza, la tua sensibilità e tutte quelle piccole cose che magari tu nemmeno noti, ma che io apprezzo tantissimo.

Mi fai sentire ascoltato, capito e libero di essere me stesso. E voglio che tu possa provare esattamente la stessa cosa con me.

Non devi essere sempre perfetta, non devi fare qualcosa di speciale per meritarti il mio amore e non devi avere paura di mostrarmi ogni parte di te.

Voglio conoscerti sempre di più, esserci nei momenti belli e in quelli meno belli, sostenerti nei tuoi obiettivi e festeggiare insieme i tuoi successi.

Spero che anche tu possa sentirti sempre amata, apprezzata e al sicuro nell'essere semplicemente te stessa.

Sei la mia vita, il mio cuore, il mio cuoricino.

Ti amo tanto e sono davvero felice di poter dire che sei tu la persona con cui sto condividendo tutto questo. 🖤` }
    // per aggiungere una lettera: copia un blocco, cambia id (unico, senza spazi), titolo e testo
  ],

  // ---------- RICORDI ----------
  // foto: percorso in assets/images/ ; se manca compare un segnaposto
  memories: [
    { id: "10-ottobre", data: "10 ottobre 2026", titolo: "Il giorno in cui abbiamo iniziato a parlare",
      testo: "Tutto è partito da un semplice messaggio. Non sapevo che quel giorno sarebbe diventato così importante.", foto: "assets/images/primo-ricordo.jpg" }
  ],

  // ---------- MUSICA ----------
  playlistId: "0d0o9vIoD4z3uBlwlxk3hh",
  songs: [],   // vuoto: la pagina mostra solo la vostra playlist Spotify

  // ---------- SORPRESE ----------
  scratch: "Tra tutti i chilometri del mondo, la strada più bella è sempre quella che porta a te. 🖤",
  quiz: [
    { q: "Che giorno abbiamo iniziato a parlare?", options: ["1 ottobre", "10 ottobre", "20 ottobre"], answer: 1 },
    { q: "Com'è iniziato tutto?", options: ["Con una chiamata", "Con un semplice messaggio", "Per caso, di persona"], answer: 1 },
    { q: "Qual è il nostro cuore?", options: ["Rosso", "Rosa", "Nero"], answer: 2 },
    { q: "Quando ci vediamo la prossima volta?", options: ["28 dicembre", "1 gennaio", "14 febbraio"], answer: 0 },
    { q: "Chi va a trovare chi il 28 dicembre?", options: ["Noemi va da Gabriele", "Gabriele va da Noemi", "Ci vediamo a metà strada"], answer: 1 },
  ],
  messages: [
    "Sei la mia parte preferita della giornata. 🖤",
    "Penso a te più di quanto ti dica.",
    "Con te anche il lunedì ha un bel suono.",
    "Non vedo l'ora di abbracciarti.",
    "Ti ho pensata anche mentre non stavo pensando a niente.",
    "Sei la persona che mi fa ridere di più. Non montarti la testa. (Ok, un po' sì.)",
    "Mi basta una tua chiamata per sistemare la giornata.",
    "Sei condannata a sopportarmi ancora per un bel po'.",
    "Un milione di baci, consegna immediata. 🫶🏼",
    "Sei tu la persona con cui voglio condividere tutto questo.",
    "Fai il tifo per te stessa, come lo faccio io.",
    "Ogni chilometro che ci separa vale la strada che farò per te."
  ],
  hidden: [
    "Prima stellina: sei bellissima. 🖤",
    "Seconda: mi fai ridere come nessuno.",
    "Terza: grazie di esistere.",
    "Quarta: sei casa.",
    "Quinta: la tua voce è il mio suono preferito.",
    "Sesta: sono fiero di te, sempre.",
    "Settima: ti penso anche adesso.",
    "Ottava: il 28 dicembre arriva, e io con lui. 🫶🏼"
  ],

  // ---------- LETTERA FINALE ----------
  // lascia testo vuoto "" finché non l'hai scritta: lei vedrà "Sto ancora scrivendo..."
    final: { titolo: "10.11.2026 🖤", testo: `Amore miooo,

e niente, è già passato un mese. Dal 10 ottobre sono successe così tante cose che a volte mi sembra di conoscerti da una vita. E pensare che è partito tutto da una nota su Instagram ahahahah. Chi l'avrebbe mai detto?

Io ero in palestra quando ho visto il tuo messaggio e ho pensato: «Wow, mi ha scritto questa ragazza». Pensa che quando sono uscito avevi già eliminato tutto, probabilmente per paura di disturbare, e alla fine sono stato io a riscriverti dicendoti che avevo visto. E meno male che l'ho fatto.

Perché sinceramente non sono uno che corre dietro alle persone, né uno che risponde a chiunque gli scriva su Instagram. In quel periodo poi ero molto concentrato su me stesso: da un po' avevo iniziato a cercare di maturare sia come persona sia spiritualmente, e non stavo cercando una relazione. Anzi, avevo quasi perso l'idea che potesse esistere qualcosa di così bello e naturale. Venivo da situazioni in cui le parole non corrispondevano ai fatti, in cui davo tanto senza avere la stessa tranquillità dall'altra parte, e mi avevano insegnato a proteggermi. Non era nemmeno un bel periodo: la salute dei miei nonni, mia nonna, la famiglia… ero parecchio giù.

E poi sei arrivata tu, senza preavviso. Sei stata come una luce in fondo al tunnel. Mi sono sentito di nuovo vivo, di nuovo io.

Fin dalla prima sera abbiamo parlato di tutto, e già dal secondo giorno avevo la sensazione di poterti dire qualsiasi cosa. E non era solo perché esteticamente mi piacevi, anche se lì avevi già fatto un ottimo lavoro AHAHAHA. Diciamocelo: sei letteralmente il mio prototipo. Mora, occhi chiari, i tuoi lineamenti, i tuoi capelli, il tuo sorriso. E quegli occhi tra l'azzurro e il grigio… io dentro mi ci perdo veramente. A volte potrei guardarli senza sapere nemmeno cosa dire e forse non sembra ma succede. E tu che hai sempre preferito gli occhi scuri: con i miei occhioni neri direi che ci siamo venuti incontro eh.

Ma non è questo che mi ha fatto perdere la testa. È il tuo modo di essere. Come ragioni, come ti esprimi, come ascolti, il tuo umorismo, la tua sensibilità. Sei dolce ma hai carattere, sei elegante ma spontanea. Siamo diversi in tante cose, eppure su quelle che contano vediamo il mondo allo stesso modo, e questo contrasto è una delle cose più belle di noi.

Poi un giorno hai iniziato a raccontarmi davvero di te. Del tuo passato, dei momenti in cui ti sei sentita sola, delle difficoltà in famiglia e fuori, di tutto quello che hai dovuto affrontare senza avere sempre l'affetto che meritavi. E lì ho pensato che hai un cuore enorme. Non perché quello che hai passato ti renda speciale, ma perché sei rimasta te stessa nonostante tutto: sensibile, capace di ascoltare, capace di voler ancora costruire qualcosa di bello.

Ci sono tante cose che tu non riesci a vedere. Quando dubiti di te, quando non ti senti abbastanza bella o pensi di non farcela, vorrei che ricordassi che io vedo molto più di quello che vedi tu in quei momenti. Puoi crederci di più, amore. Non devi dimostrarmi di essere perfetta: voglio conoscere anche le tue giornate no, le tue insicurezze, i pensieri più complicati. Non posso cambiare quello che hai vissuto, ma posso esserci, ascoltarti e starti accanto. Non voglio salvarti, quello lo devi fare tu come tutti, ma voglio essere la tua spalla. E non ti lascerò. Per sempre.

E questo vale anche per me. Sono una persona riservata, parlo poco di quello che ho dentro. Con te invece mi hai sbloccato la versione premium di gabry. Ti parlo di cose che non direi a nessuno, passo da un discorso serio a una stupidaggine in trenta secondi, e mi sento ascoltato e capito.

Ti confesso una cosa: in passato, ogni volta che mi sono aperto davvero, le persone si sono allontanate. Anche dopo una lettera come questa. Per questo avevo smesso di farlo. Ma con te ho deciso di riprovarci, perché quello che ti scrivo è vero, e tu meriti di conoscere anche questa parte di me. Qualunque cosa succeda, io questa lettera l'ho scritta col cuore.

E poi c'è la tua spiritualità, forse la cosa che apprezzo di più. Il modo in cui parli e ragioni sulla verità, quanto tieni alla congregazione, ai fratelli e di conseguenza alla tua relazione con lui. Per me non è un dettaglio, è una parte fondamentale di quello che voglio costruire. Ringrazio Geova per averti messa sulla mia strada.

E poi ci sono tutte le piccole cose che ormai sono tue: i gioielli dorati, le collane, gli anelli, quando disegni con tutta quella pazienza e cura, come noti ogni dettaglio e mi capisci anche quando non dico niente. Le nostre chiamate, che sia fino a tardi o addormentandoci, una più bella dell'altra. La fatica assurda che facciamo a salutarci, quindici volte, e poi già sappiamo che ci risentiremo. Quella sera che dovevi svegliarti prestissimo ed eri ancora sveglia perché ti mancavo. Quanto sei carina quando sei gelosa (ma non voglio darti troppe soddisfazioni AHAHAHAHA). E Alta marea, che mi hai dedicato, che ascoltavi da piccola con tua mamma e che hai associato a me: ormai non riesco più ad ascoltarla senza pensarti.

Ah, e ricordati che sono nato prima io, quindi sei tu la mia piccola copia. Non accetto contestazioni ahahhahah.

Non vedo l'ora che arrivi il 28 dicembre. Venire a Padova e finalmente vederti davanti a me, non più attraverso uno schermo. Sentirti ridere dal vivo, camminare insieme, conoscerti anche nelle piccole cose. Non so nemmeno se mi renderò conto subito che sei davvero lì.

E quando penso al futuro, non ti immagino come una parte di questo periodo. Ti immagino accanto a me tra qualche anno: una vita insieme, i nostri progetti, il servizio in sala, le responsabilità che un giorno potremmo condividere. Quando penso a una moglie, alla madre dei miei figli, vedo te. Non te lo dico per metterti pressione, so che abbiamo ancora tantissimo da scoprire. Te lo dico perché voglio essere sincero su quello che vedo e su quello che desidero.

Quando ci saranno incomprensioni, e ci saranno, voglio che la nostra prima intenzione sia capirci, non allontanarci. Non mi interessa avere ragione, mi interessa stare bene con te. E non devi diventare nessun'altra per essere amata da me. Mi piace Noemi, quella vera: quella che ride, che si arrabbia, che si emoziona, che ogni tanto dubita di sé, che mi copia e poi pretende pure di avere ragione.

Grazie per come sei con me, per l'affetto, per le attenzioni, per come mi ascolti. Grazie per avermi fatto riscoprire quanto può essere bello condividere la vita con una persona. Non sono solo belle frasi da anniversario: le penso anche quando non te le scrivo, ogni volta che sento una canzone o vedo qualcosa che mi ricorda te.

Spero che tra cinque anni potremo rileggere queste parole insieme, sorridendo, e che tu senta quanto ti ho amata e quanto continuerò a farlo. Voglio renderti felice, e voglio che le cose brutte del tuo passato non continuino a farti compagnia.

Se tornassi a quel 10 ottobre, sapendo tutto quello che so oggi, ti risponderei altre mille volte.

Buon primo mese, amorcito mio.

Ti amo tanto, vita mia.

La tua piccola copia preferita (anche se sono io l'originale) 🖤🫶🏼` }
};