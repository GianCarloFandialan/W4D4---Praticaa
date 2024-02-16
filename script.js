// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

console.log("CIAO");

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

//LISTA DEI PREZZI DEGLI OGGETTI ATTUALMENTE NEL CARRELLO
let prices = [34, 5, 2]

//COSTO DELLA SPEDIZIONE
const shippingCost = 50

//UTENTE CHE AL MOMENTO CORRENTE STA EFFETTUANDO L'ACQUISTO
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!

//COSTO TOTALE INIZIALE
let costoTotale = 0

//CALCOLA IL COSTO TOTALE DEGLI OGGETI NEL CARRELLO
for (let i = 0; i < prices.length; i++) {
  costoTotale += prices[i];
  console.log(costoTotale);
}

//Se l'utente è Ambassador, ALLORA SCONTO 30%
if (utenteCheEffettuaLAcquisto.isAmbassador) {
  costoTotale *= 0.7
}

// SE IL COSTO TOTALE è INFERIORE A 100€, AGIUNGIAMO IL COSTO DI 50€
if (costoTotale <= 100) {
  costoTotale += shippingCost
}

//CREA UN ARRAY DI UTENTI (USANDO .push)
let arrayDiUtenti = []
arrayDiUtenti.push(marco, paul, amy);
console.log(arrayDiUtenti);

//STAMPA PER OGNI UTENTE (QUINDI CON UN LOOP) LA FRASE "NOMEUTENTE COGNOMEUTENTE E' / NON è UN AMBASSADOR" BASANDOTI SUI DATI CONTENUTI NELL'OGGETTO

for (let i = 0; i < arrayDiUtenti.length; i++) {
  let frase= arrayDiUtenti[i].name + " " + arrayDiUtenti[i].lastName;

  if (arrayDiUtenti[i].isAmbassador) {
    frase += ` è un `
  } else {
    frase += ` non è `
  }

  frase += "un ambassador"
  console.log(frase);
}

//CREA UN SECONDO ARRAY IN CUI INSERIRAI SOLO GLI AMBASSADOR
let soloAmbassador = [];
for (let i = 0; i < arrayDiUtenti.length; i++) {
  if(arrayDiUtenti[i].isAmbassador) {
    soloAmbassador.push(arrayDiUtenti[i])
  }
}
console.log(soloAmbassador);
