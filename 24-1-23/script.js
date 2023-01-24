// Sulla base della lezione del giorno, creare una paginetta che effettui una chiamata di tipo GET all'endpoint https://dummyjson.com/users, renderizzare la lista di utenti, 
// creando delle cards con i valori a vostra scelta (es. nome, cognome, ecc...)

// Avanzato
// Sulla base dell'esercizio 1, creare un filtro tramite input che vada a filtrare la lista degli utenti per nome e/o cognome

import { GET } from "./api.js";
import { cE, qS, qSA} from "./utils.js";

const userGen = (data) => {
    const {id, firstName, lastName, age, email} = data;
    const container = qS(".cardCont");
    const cardEl = cE("div");
    const idEl = cE("p");
    const fNEl = cE("span");
    const lNEl = cE("p");
    const ageEl = cE("span");
    const emailEl = cE("p");

    cardEl.className = "card";
    idEl.textContent = "id: "+id;
    fNEl.textContent = "First name: "+firstName;
    lNEl.textContent = "Last Name: "+lastName;
    ageEl.textContent = "age: "+age;
    emailEl.textContent = "email: "+email;

    cardEl.append(idEl, fNEl, lNEl, ageEl, emailEl);
    return cardEl;
};

const onCardsDel = () => {
    const cardsEls = qSA(".card");
    cardsEls.forEach(card => card.remove());
};

const bodyEl = qS("body");
const searchInputEl = cE("input");
searchInputEl.setAttribute("placeholder", "Filter with First name and Last")
let searchedValue = "";
bodyEl.appendChild(searchInputEl);

const container = qS(".cardCont");
bodyEl.appendChild(container);

searchInputEl.addEventListener("input", (e) => {
    onCardsDel();
    searchedValue = e.target.value;

    GET()
    .then((data) => data.users.map((user) => {
        if(user.firstName.includes(searchedValue)) container.appendChild(userGen(user));
        if(user.lastName.includes(searchedValue)) container.appendChild(userGen(user));
    })
    );
});

GET()
.then((data) => data.users.map((user) => container.appendChild(userGen(user))))

