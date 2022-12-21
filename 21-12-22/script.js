// Esercizio 1

// Sulla base della lezione del giorno:

// - scrivere una prima funzione che presa un stringa come argomento, 
// ritorni la stessa stringa + la parola `bootcamp`;

// function stuffBootcamp() {
//     let stuff = prompt("Scrivi qualcosa");
//     console.log(stuff + " bootcamp");
// }

// stuffBootcamp();


// # Esercizio 2

// - scrivere un oggetto col vostro nome che vi identifichi in proprietà (nome, cognome, ecc...) 
// e per metodi (es. possono anche essere semplici console.log di voi che eseguite un hobby)

// const valerio = {
//     nome: 'Valerio',
//     cognome: 'La Venuta',
//     età: 20,
//     hobby: function() {
//         console.log("I'm a 600 rated chess player")
//     },
// };


// # Avanzato

// - Scrivere una funzione calculator che preso come argomento una operazione e due numeri, 
// ritorni alla fine il numero risultato dall'operazione scelta.

function calculator() {
    let operation = prompt("Inserisci l'operazione");
    let intNum1 = parseInt(num1);
    let intNum2 = parseInt(num2);

    switch (operation){
        case '+':
            console.log(intNum1 + intNum2);
            break;
        case '-':
            console.log(intNum1 - intNum2);
            break; 
        case '*':
            console.log(intNum1 * intNum2);
            break;
        case '/':
            console.log(intNum1 / intNum2);
            break;                         
    }
}
// - Provare ad aggiungere i due numeri singolarmente (num1, num2) 
// e anche in coppia dentro un array ([num1, num2]).

// let num1 = prompt("Inserisci il primo numero");
// let num2 = prompt("Inserisci il secondo numero");

let num1 = prompt("Inserisci il primo numero"); 
let num2 = prompt("Inserisci il secondo numero");
const numbers = [num1, num2];


calculator();