// Esercizio 1
// Sulla base della lezione del giorno, scrivere una funzione che generi una hero dinamicamente tramite Javascript. Devo essere presenti i seguenti elementi:

// Image di sfondo
// Un titolo principale
// Un sottotitolo descrittivo breve

// Avanzato
// Scrivere un applicazione piu ampia che includa la Hero dell'esercizio 1 e aggiunga anche una sezione relativa a dei prodotti 
// (simile a quanto visto a lezione), attenzione a creare un contenitore che inglobi tutti i singoli prodotti (qualcosa simile a productListEl).



// const bodyEl = document.body;

// const heroElCls = document.querySelector('.hero');

// const heroImg = document.createElement("img");
// heroImg.src = "https://picsum.photos/200/200";
// heroElCls.appendChild(heroImg);

// const heroElTtl = document.createElement("h1");
// heroElTtl.textContent = "Immagine Hero";
// heroElCls.appendChild(heroElTtl);

// const heroElDesc = document.createElement("h3");
// heroElDesc.textContent = "Descrizione bellissima";
// heroElCls.appendChild(heroElDesc);

// Avanzato
// Scrivere un applicazione piu ampia che includa la Hero dell'esercizio 1 e aggiunga anche una sezione relativa a dei prodotti 
// (simile a quanto visto a lezione), attenzione a creare un contenitore che inglobi tutti i singoli prodotti (qualcosa simile a productListEl).


import { products } from "./product.js";

const bodyEl = document.body;

const heroElCls = document.querySelector('.hero');

const heroImg = document.createElement("img");
heroImg.src = "https://picsum.photos/200/200";
heroElCls.appendChild(heroImg);

const heroElTtl = document.createElement("h1");
heroElTtl.textContent = "Immagine Hero";
heroElCls.appendChild(heroElTtl);

const heroElDesc = document.createElement("h3");
heroElDesc.textContent = "Descrizione bellissima";
heroElCls.appendChild(heroElDesc);

// const prodSec = document.querySelector('.products').className = 'card_sect';

const createCard = (title, img, description) => {
    const prodSec = document.querySelector('.products');
    const cardEl = document.createElement('div');
    const cardImg = document.createElement('img');
    const cardTtl = document.createElement('h2');
    const cardDesc = document.createElement('p');
  
    cardEl.className = 'card';
    cardTtl.className = 'card__title';
    cardDesc.className = 'card__description';

    cardImg.setAttribute('src', img);
    cardImg.setAttribute('alt', title);
  
    cardTtl.textContent = title;
    cardDesc.textContent = description;
    
    cardEl.append(cardImg, cardTtl, cardDesc);
    prodSec.appendChild(cardEl);
};

for (let product of products) {
        createCard(product.title, product.img, product.description);
 }