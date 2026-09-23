// ELENCO DELLE CITTÀ — questo file lo compili TU.
//
// Il clima NON si scrive qui: lo scarica genera.js da Open-Meteo.
//
// stagioni: 12 lettere da gennaio a dicembre. b = bassa, m = media, a = alta
// sicurezza: Safety Index Numbeo 2026 (dato reale)
// pasto / caffe / birra: in euro. null = ancora da rilevare
// hotelBassa / hotelAlta: null = ancora da rilevare su Booking
// prezziRilevati: true solo se li hai controllati tu a mano
//
// Per aggiungere una città: copia un blocco, cambia i campi, poi lancia
//     node genera.js

module.exports = [
  {
    nome: "Atene", paese: "Grecia", lat: 37.9838, lon: 23.7275,
    stagioni: "bbbmmaaaambb".split(""),
    sicurezza: 44.8, pasto: 15, caffe: 3.7, birra: 5,
    hotelBassa: 55, hotelAlta: 110, prezziRilevati: true,
    vedere: ["Acropoli e Partenone", "Museo dell'Acropoli", "Accademia di Atene"],
    mangiare: ["Moussaka", "Souvlaki"],
    notteBassa: "Club e rooftop riscaldati di Gazi e Psiri, frequentati soprattutto da ateniesi.",
    notteAlta: "La movida si sposta sulla Riviera Ateniese, nei locali all'aperto sulla spiaggia."
  },
  {
    nome: "Lisbona", paese: "Portogallo", lat: 38.7223, lon: -9.1393,
    stagioni: "bbmmmaaaambb".split(""),
    sicurezza: 67.4, pasto: 15, caffe: 2.6, birra: 3,
    hotelBassa: 70, hotelAlta: 130, prezziRilevati: true,
    vedere: ["Monastero dos Jerónimos", "Torre di Belém", "Stazione Oriente"],
    mangiare: ["Bacalhau à Brás", "Pastéis de nata"],
    notteBassa: "Un salto in strada a Bairro Alto, poi dentro ai locali quando rinfresca.",
    notteAlta: "Bairro Alto e Pink Street pieni fino all'alba, terrazze panoramiche comprese."
  },
  {
    nome: "Porto", paese: "Portogallo", lat: 41.1579, lon: -8.6291,
    stagioni: "bbbmmaaaambb".split(""),
    sicurezza: 66.6, pasto: 12, caffe: 2.3, birra: 3,
    hotelBassa: 60, hotelAlta: 120, prezziRilevati: false,
    vedere: ["Libreria Lello", "Ponte Dom Luís I", "Palácio da Bolsa"],
    mangiare: ["Francesinha", "Tripas à moda do Porto"],
    notteBassa: "Galerias de Paris al coperto, e le cantine di Vila Nova de Gaia.",
    notteAlta: "Si beve in strada nelle Galerias e lungo la Ribeira fino a tardi."
  },
  {
    nome: "Siviglia", paese: "Spagna", lat: 37.3891, lon: -5.9845,
    stagioni: "bbmaambbmmbb".split(""),
    sicurezza: 64.6, pasto: 15, caffe: 2.1, birra: 3,
    hotelBassa: 60, hotelAlta: 120, prezziRilevati: false,
    vedere: ["Alcázar", "Cattedrale e Giralda", "Plaza de España"],
    mangiare: ["Salmorejo", "Tapas di jamón ibérico"],
    notteBassa: "Bar di tapas del centro e di Triana, pieni ma al chiuso.",
    notteAlta: "Terrazze e azoteas aperte fino a notte fonda, quando cala il caldo."
  },
  {
    nome: "Malaga", paese: "Spagna", lat: 36.7213, lon: -4.4214,
    stagioni: "bbmmmaaaambb".split(""),
    sicurezza: 69.0, pasto: 15, caffe: 2.1, birra: 3,
    hotelBassa: 55, hotelAlta: 125, prezziRilevati: false,
    vedere: ["Alcazaba", "Cattedrale della Manquita", "Museo Picasso"],
    mangiare: ["Espeto de sardinas", "Porra antequerana"],
    notteBassa: "Bar del centro storico, aperti tutto l'anno e frequentati dai locali.",
    notteAlta: "Chiringuiti e locali sul lungomare, dalla Malagueta a Pedregalejo."
  },
  {
    nome: "Valencia", paese: "Spagna", lat: 39.4699, lon: -0.3763,
    stagioni: "bbammaaammbb".split(""),
    sicurezza: 65.3, pasto: 15, caffe: 2.4, birra: 3,
    hotelBassa: 55, hotelAlta: 110, prezziRilevati: false,
    vedere: ["Città delle Arti e delle Scienze", "Lonja de la Seda", "Mercato Centrale"],
    mangiare: ["Paella valenciana", "Horchata"],
    notteBassa: "Bar del Carmen e di Ruzafa, con i tavoli spostati dentro.",
    notteAlta: "Locali sulla spiaggia della Malvarrosa, aperti fino all'alba."
  },
  {
    nome: "Praga", paese: "Repubblica Ceca", lat: 50.0755, lon: 14.4378,
    stagioni: "bbbmaaaaamba".split(""),
    sicurezza: 75.2, pasto: 9.5, caffe: 3.3, birra: 2.7,
    hotelBassa: 117, hotelAlta: 192, prezziRilevati: true,
    vedere: ["Ponte Carlo", "Castello di Praga", "Casa Danzante"],
    mangiare: ["Vepřo knedlo zelo", "Svíčková", "Smažený sýr"],
    notteBassa: "Stessi locali dell'estate, ma senza la calca: birrerie e club al chiuso.",
    notteAlta: "Centro storico pieno a ogni ora, giardini e terrazze aperti fino a tardi."
  },
  {
    nome: "Cracovia", paese: "Polonia", lat: 50.0647, lon: 19.945,
    stagioni: "bbbmmaaammbm".split(""),
    sicurezza: 75.2, pasto: 11.3, caffe: 3.9, birra: 4.2,
    hotelBassa: 45, hotelAlta: 95, prezziRilevati: false,
    vedere: ["Piazza del Mercato", "Castello del Wawel", "Kazimierz"],
    mangiare: ["Pierogi", "Zapiekanka", "Żurek"],
    notteBassa: "Le cantine sotto la piazza e i bar di Kazimierz, caldi e affollati.",
    notteAlta: "Tavoli all'aperto su tutta la piazza del Mercato fino a notte."
  },
  {
    nome: "Varsavia", paese: "Polonia", lat: 52.2297, lon: 21.0122,
    stagioni: "bbbmmaaammbm".split(""),
    sicurezza: 74.6, pasto: 10, caffe: 3.5, birra: 4,
    hotelBassa: 108, hotelAlta: 173, prezziRilevati: true,
    vedere: ["Palazzo della Cultura", "Città Vecchia", "Museo POLIN"],
    mangiare: ["Pierogi", "Bigos"],
    notteBassa: "Vivace ma tutta al chiuso: bar del centro e di Praga-Poludnie.",
    notteAlta: "Si beve all'aperto lungo la Vistola, nei bar sulla spiaggia urbana."
  },
  {
    nome: "Budapest", paese: "Ungheria", lat: 47.4979, lon: 19.0402,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 66.1, pasto: 12.7, caffe: 3.1, birra: 3.4,
    hotelBassa: 55, hotelAlta: 105, prezziRilevati: false,
    vedere: ["Parlamento", "Bastione dei Pescatori", "Terme Széchenyi"],
    mangiare: ["Gulyás", "Lángos", "Dobos"],
    notteBassa: "I ruin bar del settimo distretto, coperti e caldi, e le terme aperte la sera.",
    notteAlta: "Ruin bar coi cortili aperti e battelli-discoteca sul Danubio."
  },
  {
    nome: "Bucarest", paese: "Romania", lat: 44.4268, lon: 26.1025,
    stagioni: "bbbmmmaammbm".split(""),
    sicurezza: 71.5, pasto: 13.3, caffe: 3.1, birra: 3.4,
    hotelBassa: 50, hotelAlta: 85, prezziRilevati: false,
    vedere: ["Palazzo del Parlamento", "Ateneo Romeno", "Chiesa Stavropoleos"],
    mangiare: ["Mici", "Sarmale", "Papanasi"],
    notteBassa: "I locali della Città Vecchia, tutti al coperto, e le terme del Therme.",
    notteAlta: "Terrazze e club all'aperto, molto attivi fino a tarda notte."
  },
  {
    nome: "Madrid", paese: "Spagna", lat: 40.4168, lon: -3.7038,
    stagioni: "bbmmmaaambbb".split(""),
    sicurezza: 71.3, pasto: 16, caffe: 2.75, birra: 3.5,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Prado", "Palazzo Reale", "Parco del Retiro"],
    mangiare: ["Cocido madrileño", "Bocadillo de calamares"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Barcellona", paese: "Spagna", lat: 41.3851, lon: 2.1734,
    stagioni: "bbmmmaaaambb".split(""),
    sicurezza: 48.1, pasto: 16, caffe: 2.74, birra: 3.5,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Sagrada Família", "Park Güell", "Quartiere Gotico"],
    mangiare: ["Pa amb tomàquet", "Crema catalana"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Alicante", paese: "Spagna", lat: 38.3452, lon: -0.481,
    stagioni: "bbmmmaaaambb".split(""),
    sicurezza: 66.0, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Castello di Santa Bárbara", "Explanada de España"],
    mangiare: ["Arroz a banda", "Turrón"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Palma di Maiorca", paese: "Spagna", lat: 39.5696, lon: 2.6502,
    stagioni: "bbmmmaaaambb".split(""),
    sicurezza: 64.3, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Cattedrale La Seu", "Castello di Bellver"],
    mangiare: ["Ensaïmada", "Sobrasada"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Braga", paese: "Portogallo", lat: 41.5454, lon: -8.4265,
    stagioni: "bbbmmaaaambb".split(""),
    sicurezza: 60.3, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Bom Jesus do Monte", "Cattedrale di Braga"],
    mangiare: ["Frigideira", "Bacalhau à Braga"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Napoli", paese: "Italia", lat: 40.8518, lon: 14.2681,
    stagioni: "bbmmmaaaambb".split(""),
    sicurezza: 37.7, pasto: 15.5, caffe: 2.06, birra: 5,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Napoli sotterranea", "Museo Archeologico", "Cappella Sansevero"],
    mangiare: ["Pizza margherita", "Sfogliatella"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Roma", paese: "Italia", lat: 41.9028, lon: 12.4964,
    stagioni: "bbmmmaaaambb".split(""),
    sicurezza: 52.7, pasto: 15, caffe: 1.96, birra: 5,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Colosseo", "Pantheon", "Musei Vaticani"],
    mangiare: ["Cacio e pepe", "Supplì"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Bologna", paese: "Italia", lat: 44.4949, lon: 11.3426,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 51.3, pasto: 20, caffe: 1.98, birra: 6,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Le due torri", "Portici di San Luca", "Quadrilatero"],
    mangiare: ["Tagliatelle al ragù", "Tortellini in brodo"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Torino", paese: "Italia", lat: 45.0703, lon: 7.6869,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 48.1, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Mole Antonelliana", "Museo Egizio", "Piazza San Carlo"],
    mangiare: ["Bicerin", "Agnolotti"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Trieste", paese: "Italia", lat: 45.6495, lon: 13.7768,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 72.4, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Piazza Unità d'Italia", "Castello di Miramare"],
    mangiare: ["Jota", "Strudel"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Cagliari", paese: "Italia", lat: 39.2238, lon: 9.1217,
    stagioni: "bbmmmaaaambb".split(""),
    sicurezza: 63.5, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Bastione di Saint Remy", "Quartiere Castello"],
    mangiare: ["Culurgiones", "Porceddu"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Genova", paese: "Italia", lat: 44.4056, lon: 8.9463,
    stagioni: "bbmmmaaaambb".split(""),
    sicurezza: 55.0, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Acquario", "Palazzi dei Rolli", "Boccadasse"],
    mangiare: ["Pesto", "Focaccia"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Salonicco", paese: "Grecia", lat: 40.6401, lon: 22.9444,
    stagioni: "bbmmmaaaambb".split(""),
    sicurezza: 48.0, pasto: 15, caffe: 3.85, birra: 5,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Torre Bianca", "Rotonda di Galerio"],
    mangiare: ["Bougatsa", "Gyros"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Spalato", paese: "Croazia", lat: 43.5081, lon: 16.4402,
    stagioni: "bbmmmaaaambb".split(""),
    sicurezza: 69.9, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Palazzo di Diocleziano", "Riva", "Collina Marjan"],
    mangiare: ["Pašticada", "Peka"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Fiume", paese: "Croazia", lat: 45.3271, lon: 14.4422,
    stagioni: "bbmmmaaaambb".split(""),
    sicurezza: 76.5, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Castello di Trsat", "Corso"],
    mangiare: ["Šurlice", "Brodet"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Zagabria", paese: "Croazia", lat: 45.815, lon: 15.9819,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 78.6, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Città Alta", "Cattedrale", "Mercato Dolac"],
    mangiare: ["Štrukli", "Ćevapi"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Lubiana", paese: "Slovenia", lat: 46.0569, lon: 14.5058,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 78.2, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Castello di Lubiana", "Ponte dei Draghi", "Tivoli"],
    mangiare: ["Potica", "Kranjska klobasa"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Belgrado", paese: "Serbia", lat: 44.7866, lon: 20.4489,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 62.2, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Fortezza di Kalemegdan", "Tempio di San Sava", "Skadarlija"],
    mangiare: ["Ćevapi", "Ajvar"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Novi Sad", paese: "Serbia", lat: 45.2671, lon: 19.8335,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 61.4, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Fortezza di Petrovaradin", "Piazza della Libertà"],
    mangiare: ["Ćevapi", "Štrudla"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Sarajevo", paese: "Bosnia", lat: 43.8563, lon: 18.4131,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 55.5, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Baščaršija", "Tunnel della speranza", "Ponte Latino"],
    mangiare: ["Ćevapi", "Burek"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Tirana", paese: "Albania", lat: 41.3275, lon: 19.8187,
    stagioni: "bbmmmaaaambb".split(""),
    sicurezza: 60.2, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Piazza Skanderbeg", "Bunk'Art", "Piramide"],
    mangiare: ["Tavë kosi", "Byrek"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Skopje", paese: "Macedonia del Nord", lat: 41.9973, lon: 21.428,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 53.9, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Vecchio bazar", "Fortezza di Kale"],
    mangiare: ["Tavče gravče", "Ajvar"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Sofia", paese: "Bulgaria", lat: 42.6977, lon: 23.3219,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 61.2, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Cattedrale Aleksandr Nevskij", "Chiesa di Bojana", "Monte Vitoša"],
    mangiare: ["Banica", "Shopska"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Plovdiv", paese: "Bulgaria", lat: 42.1354, lon: 24.7453,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 74.5, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Teatro romano", "Città vecchia", "Kapana"],
    mangiare: ["Banica", "Kavarma"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Varna", paese: "Bulgaria", lat: 43.2141, lon: 27.9147,
    stagioni: "bbmmmaaaambb".split(""),
    sicurezza: 65.6, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Terme romane", "Giardino del mare"],
    mangiare: ["Shopska", "Kebapche"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Brno", paese: "Repubblica Ceca", lat: 49.1951, lon: 16.6068,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 75.4, pasto: 9.6, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Villa Tugendhat", "Spilberk", "Ossario di San Giacomo"],
    mangiare: ["Svíčková", "Utopenci"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Bratislava", paese: "Slovacchia", lat: 48.1486, lon: 17.1077,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 69.5, pasto: 10, caffe: 3.09, birra: 3,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Castello di Bratislava", "Città Vecchia", "UFO Bridge"],
    mangiare: ["Bryndzové halušky"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Timisoara", paese: "Romania", lat: 45.7489, lon: 21.2087,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 74.6, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Piazza della Vittoria", "Duomo ortodosso"],
    mangiare: ["Mici", "Papanasi"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Cluj-Napoca", paese: "Romania", lat: 46.7712, lon: 23.6236,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 77.6, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Piazza dell'Unione", "Chiesa di San Michele"],
    mangiare: ["Sarmale", "Kürtőskalács"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Danzica", paese: "Polonia", lat: 54.352, lon: 18.6466,
    stagioni: "bbbmmaaammbm".split(""),
    sicurezza: 68.7, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Ulica Dluga", "Gru medievale", "Westerplatte"],
    mangiare: ["Pierogi", "Aringa marinata"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Breslavia", paese: "Polonia", lat: 51.1079, lon: 17.0385,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 74.7, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Piazza del Mercato", "Isola della Cattedrale", "Panorama Racławicka"],
    mangiare: ["Pierogi", "Żurek"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Poznan", paese: "Polonia", lat: 52.4064, lon: 16.9252,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 72.3, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Municipio con le capre", "Ostrów Tumski"],
    mangiare: ["Rogal świętomarciński"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Vilnius", paese: "Lituania", lat: 54.6872, lon: 25.2797,
    stagioni: "bbbmmaaammbm".split(""),
    sicurezza: 69.9, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Città Vecchia", "Užupis", "Torre di Gediminas"],
    mangiare: ["Cepelinai", "Šaltibarščiai"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Kaunas", paese: "Lituania", lat: 54.8985, lon: 23.9036,
    stagioni: "bbbmmaaammbm".split(""),
    sicurezza: 63.4, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Viale della Libertà", "Castello di Kaunas"],
    mangiare: ["Cepelinai", "Kugelis"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Riga", paese: "Lettonia", lat: 56.9496, lon: 24.1052,
    stagioni: "bbbmmaaammbm".split(""),
    sicurezza: 62.5, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Quartiere Art Nouveau", "Casa delle Teste Nere", "Mercato Centrale"],
    mangiare: ["Pelēkie zirņi", "Rupjmaize"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Tallinn", paese: "Estonia", lat: 59.437, lon: 24.7536,
    stagioni: "bbbmmaaammbm".split(""),
    sicurezza: 78.3, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Città Vecchia", "Toompea", "Kadriorg"],
    mangiare: ["Verivorst", "Kama"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Vienna", paese: "Austria", lat: 48.2082, lon: 16.3738,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 71.6, pasto: 18, caffe: 4.67, birra: 5.5,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Schönbrunn", "Duomo di Santo Stefano", "Belvedere"],
    mangiare: ["Wiener Schnitzel", "Sachertorte"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Graz", paese: "Austria", lat: 47.0707, lon: 15.4395,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 72.8, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Schlossberg", "Kunsthaus", "Castello di Eggenberg"],
    mangiare: ["Backhendl", "Olio di semi di zucca"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Monaco di Baviera", paese: "Germania", lat: 48.1351, lon: 11.582,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 78.9, pasto: 17, caffe: 3.82, birra: 4.9,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Marienplatz", "Englischer Garten", "Deutsches Museum"],
    mangiare: ["Weisswurst", "Bretzel"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Berlino", paese: "Germania", lat: 52.52, lon: 13.405,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: null, pasto: 15, caffe: 4.12, birra: 4.9,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Porta di Brandeburgo", "Isola dei Musei", "East Side Gallery"],
    mangiare: ["Currywurst", "Döner"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Amburgo", paese: "Germania", lat: 53.5511, lon: 9.9937,
    stagioni: "bbbmmaaammbm".split(""),
    sicurezza: 60.3, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Elbphilharmonie", "Speicherstadt", "Reeperbahn"],
    mangiare: ["Fischbrötchen", "Labskaus"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Colonia", paese: "Germania", lat: 50.9375, lon: 6.9603,
    stagioni: "bbbmmaaaambm".split(""),
    sicurezza: 55.3, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Duomo di Colonia", "Città Vecchia", "Museo Ludwig"],
    mangiare: ["Halver Hahn", "Kölsch"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Gand", paese: "Belgio", lat: 51.0543, lon: 3.7174,
    stagioni: "bbbmmaaammbm".split(""),
    sicurezza: 76.2, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Castello dei Conti", "Graslei", "Cattedrale di San Bavone"],
    mangiare: ["Waterzooi", "Cuberdon"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Bruxelles", paese: "Belgio", lat: 50.8503, lon: 4.3517,
    stagioni: "bbbmmaaammbm".split(""),
    sicurezza: 44.6, pasto: 20, caffe: 3.83, birra: 5,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Grand Place", "Atomium", "Quartiere Reale"],
    mangiare: ["Waffles", "Moules-frites"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Rotterdam", paese: "Paesi Bassi", lat: 51.9244, lon: 4.4777,
    stagioni: "bbbmmaaammbm".split(""),
    sicurezza: 74.0, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Markthal", "Case cubiche", "Erasmusbrug"],
    mangiare: ["Bitterballen", "Stroopwafel"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Utrecht", paese: "Paesi Bassi", lat: 52.0907, lon: 5.1214,
    stagioni: "bbbmmaaammbm".split(""),
    sicurezza: 79.0, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Torre del Duomo", "Canali Oudegracht"],
    mangiare: ["Bitterballen", "Haring"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "L'Aia", paese: "Paesi Bassi", lat: 52.0705, lon: 4.3007,
    stagioni: "bbbmmaaammbm".split(""),
    sicurezza: 80.0, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Mauritshuis", "Binnenhof", "Scheveningen"],
    mangiare: ["Haring", "Poffertjes"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Edimburgo", paese: "Regno Unito", lat: 55.9533, lon: -3.1883,
    stagioni: "bbbmmaaammbm".split(""),
    sicurezza: 69.6, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Castello di Edimburgo", "Royal Mile", "Arthur's Seat"],
    mangiare: ["Haggis", "Cranachan"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Reykjavik", paese: "Islanda", lat: 64.1466, lon: -21.9426,
    stagioni: "aabbmmaaamba".split(""),
    sicurezza: 76.0, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Hallgrímskirkja", "Harpa", "Laugavegur"],
    mangiare: ["Plokkfiskur", "Skyr"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Bergen", paese: "Norvegia", lat: 60.3913, lon: 5.3221,
    stagioni: "bbbmmaaammbm".split(""),
    sicurezza: 76.2, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Bryggen", "Funicolare Fløibanen", "Mercato del pesce"],
    mangiare: ["Skillingsbolle", "Fiskesuppe"],
    notteBassa: null,
    notteAlta: null
  },
  {
    nome: "Helsinki", paese: "Finlandia", lat: 60.1699, lon: 24.9384,
    stagioni: "bbbmmaaammbm".split(""),
    sicurezza: 74.6, pasto: null, caffe: null, birra: null,
    hotelBassa: null, hotelAlta: null, prezziRilevati: false,
    vedere: ["Fortezza di Suomenlinna", "Duomo bianco", "Oodi"],
    mangiare: ["Karjalanpiirakka", "Korvapuusti"],
    notteBassa: null,
    notteAlta: null
  }
];
