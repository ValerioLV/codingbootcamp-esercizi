
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


const elementBarGen = (type, valueLenght) => {
    const wrapper = cE("div");
    const textEl = cE("h4");
    const elementEl = cE("div");

    wrapper.className = "element-bar";

    textEl.textContent = type;
    if(type == "Fire"){
        elementEl.className = "fElement-bar__status";
        elementEl.style.height = `${valueLenght * 50}px`;
    } if(type == "Dark"){
        elementEl.className = "dElement-bar__status";
        elementEl.style.height = `${valueLenght * 50}px`;
    }

    wrapper.append(textEl, elementEl);
    return wrapper;
}

let elsList = [];

const elementsList = data.map((data) => data.element );
const fire = {
    elType: elementsList.filter((element) => element == "Fire"),
    text: "Fire"
   };

const dark = {
    elType: elementsList.filter((element) => element == "Dark"),
    text: "Dark"
   };

elsList.push(fire, dark);
elsList.map((els) =>
    bodyEl.appendChild(elementBarGen(els.text, els.elType.length))
);

console.log(data.map((lista) => lista.element));