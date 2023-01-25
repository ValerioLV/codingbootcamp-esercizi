
import { cardEl, cE, prodCard, qS } from "./utils.js";
import data from "./mock.json" assert {type: 'json'};  

const bodyEl = qS("body");


prodCard(data);

const btnRandom = cE("button");
btnRandom.className = "btn_random";
btnRandom.innerHTML = "Nuova unità";
bodyEl.appendChild(btnRandom);

btnRandom.addEventListener("click", () => {
    cardEl.innerHTML = "";
    let num =  Math.floor(Math.random() * 3);
    prodCard(data, num);
});