// Esercizio 1
// Sulla base della lezione del giorno, ricreare una funzione asincrona (utilizzando ASYNC / AWAIT) che effettui una chiamata al seguente endpoint: https://dummyjson.com/quotes.

// Lo stile è a scelta dell'utente e la quantità di quote da visualizzare è soltanto 1. Per qulunque riferimento utilizzare la documentazione presente al seguente indirizzo: https://dummyjson.com/

import { cardEl, cE, prodCard, qS } from "./utils.js";
import {quoteCreate} from "./api.js";

const bodyEl = qS("body");


quoteCreate()
    .then((data) => prodCard(data)
);

const btnRandom = cE("button");
btnRandom.className = "btn_random";
btnRandom.innerHTML = "Nuova frase";
bodyEl.appendChild(btnRandom);

btnRandom.addEventListener("click", () => {
    cardEl.innerHTML = "";
    let num =  Math.floor(Math.random() * 30);
    quoteCreate()
    .then((data) => prodCard(data, num)
);
})