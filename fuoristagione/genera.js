// GENERATORE DI citta.js
//
// Legge elenco-citta.js, scarica il clima di ogni città da Open-Meteo
// e scrive citta.js pronto per il sito.
//
// Come si usa, dal terminale dentro la cartella del progetto:
//     node genera.js
//
// Open-Meteo è gratuito per uso non commerciale e non richiede registrazione
// né chiave. Quando il sito guadagnerà, servirà il loro piano a pagamento.

const fs = require("fs");
const elenco = require("./elenco-citta.js");

const NOMI_MESI = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
                   "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

const LETTERA_STAGIONE = { b: "bassa", m: "media", a: "alta" };

// Su quanti anni calcolare le medie. Dieci è lo standard per il clima.
const DA = "2015-01-01";
const A  = "2024-12-31";

// Piccola pausa tra una richiesta e l'altra, per non tempestare il server.
function aspetta(ms) {
  return new Promise(function (ok) { setTimeout(ok, ms); });
}

// Scarica il clima di una città e lo riassume mese per mese.
async function climaDi(citta) {
  const url = "https://archive-api.open-meteo.com/v1/archive"
    + "?latitude=" + citta.lat
    + "&longitude=" + citta.lon
    + "&start_date=" + DA
    + "&end_date=" + A
    + "&daily=temperature_2m_max,temperature_2m_min,sunshine_duration"
    + "&timezone=auto";

  // Open-Meteo limita le richieste gratuite. Se risponde 429 ("troppe richieste")
  // aspetto e riprovo, raddoppiando l'attesa a ogni tentativo.
  let risposta;
  let attesa = 5000;

  for (let tentativo = 1; tentativo <= 4; tentativo++) {
    risposta = await fetch(url);

    if (risposta.ok) break;

    if (risposta.status === 429 && tentativo < 4) {
      process.stdout.write("(limite raggiunto, riprovo tra " + (attesa / 1000) + "s) ");
      await aspetta(attesa);
      attesa = attesa * 2;
      continue;
    }

    throw new Error("Open-Meteo ha risposto " + risposta.status);
  }

  const dati = await risposta.json();
  const giorni = dati.daily;

  // Un contenitore per ogni mese, dove accumulo i totali.
  const somme = NOMI_MESI.map(function () {
    return { tmax: 0, tmin: 0, sole: 0, giorni: 0, anni: new Set() };
  });

  giorni.time.forEach(function (data, i) {
    const mese = Number(data.slice(5, 7)) - 1;   // "2015-03-21" -> 2
    const anno = data.slice(0, 4);
    const s = somme[mese];

    if (giorni.temperature_2m_max[i] === null) return;   // giorno senza dati

    s.tmax += giorni.temperature_2m_max[i];
    s.tmin += giorni.temperature_2m_min[i];
    s.sole += giorni.sunshine_duration[i] || 0;          // in secondi
    s.giorni += 1;
    s.anni.add(anno);
  });

  // Trasformo i totali in medie leggibili.
  const mesi = {};
  somme.forEach(function (s, i) {
    mesi[NOMI_MESI[i]] = {
      tmin: Math.round(s.tmin / s.giorni),
      tmax: Math.round(s.tmax / s.giorni),
      // secondi totali -> ore, divise per il numero di anni = ore di sole in un mese medio
      sole: Math.round(s.sole / 3600 / s.anni.size),
      stagione: LETTERA_STAGIONE[citta.stagioni[i]]
    };
  });

  return mesi;
}

async function main() {
  const risultato = [];

  for (const citta of elenco) {
    process.stdout.write("Scarico " + citta.nome + "... ");

    try {
      const mesi = await climaDi(citta);

      // Copio i campi della città, tolgo quelli che servivano solo al generatore
      // e aggiungo il clima appena scaricato.
      const pulita = Object.assign({}, citta);
      delete pulita.lat;
      delete pulita.lon;
      delete pulita.stagioni;
      pulita.mesi = mesi;

      risultato.push(pulita);
      console.log("fatto (gennaio: " + mesi.gennaio.tmin + "/" + mesi.gennaio.tmax + "°, "
                  + mesi.gennaio.sole + "h di sole)");
    } catch (errore) {
      console.log("ERRORE: " + errore.message);
    }

    await aspetta(2500);   // pausa fra una città e l'altra
  }

  const testo =
    "// FILE GENERATO AUTOMATICAMENTE da genera.js — non modificarlo a mano.\n" +
    "// Per cambiare i dati modifica elenco-citta.js e rilancia: node genera.js\n" +
    "// Clima: medie " + DA.slice(0, 4) + "-" + A.slice(0, 4) + " da Open-Meteo.\n" +
    "// Generato il " + new Date().toLocaleDateString("it-IT") + "\n\n" +
    "const citta = " + JSON.stringify(risultato, null, 2) + ";\n";

  fs.writeFileSync("citta.js", testo);
  console.log("\nScritto citta.js con " + risultato.length + " città.");
}

main();
