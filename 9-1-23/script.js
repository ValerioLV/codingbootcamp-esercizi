// Esercizio 1
// Sulla base della lezione del giorno, ricreare la calcolatrice fatta in passato utilizzando solo arrow functions.

// nb. ogni singola operazione sara una arrow function

// Alla fine combinare le varie operazioni in una funzione piu ampia, dove all'utente viene data la possibilita di scegliere quale operazione effettuare. Siate liberi di aggiungere gli argomenti a piacere, come per esempio i numeri, se chiederli all'utente o meno.

// Avanzato
// Provare a completare l'esercizio sopra applicando qualche callback. Anche qui non importa l'impostazione, siate creativi, l'importante che si verifichi il caso di una callback.

let strnum1 = prompt("Primo numero");
let strnum2 = prompt("Secondo numero");
const num1 = parseInt(strnum1);
const num2 = parseInt(strnum2);
const Operazione = prompt("Inserisci l'operazione");

switch (Operazione){
    case "addizione":
        const addition = (num1, num2) => num1+num2;
        display(addition);
        break;

    case "sottrazione":
        const subtraction = (num1, num2) => num1 - num2;
        display(subtraction);
        break;

    case "moltiplicazione":
        const multiplication = (num1, num2) => num1*num2;
        display(multiplication);
        break;

    case "divisione":
        const division = (num1, num2) => num1 / num2;
        display(division);
        break;

    default:
        console.log("O il nome è sbagliato o sono stato troppo pigro per inserirla");
}

function display (output) {
    console.log(output(num1, num2));
}
