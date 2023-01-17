// Utilizzando sempre le seguenti Rest API: https://api.escuelajs.co/api/v1/products lavoriamo sempre al nostro e-commerce.

// Con il metodo giusto per la manipolazione delle stringe limitiamo il titolo della card a solo 10 caratteri e la descrizione della card a soli 30.
// Dovremo crere anche un addEventListner al pusante di aggiunta al carrello, in modo da aggiungere l'elemento al vostro carrello const cart = [] facendo apparire un alert() che indichi l'avvenuta aggiunta al carrello dell'elemento.

const listEl = document.querySelector(".list");
const loaderEl = document.querySelector(".loader");
const dwnldDataEl = document.querySelector(".button");
const sideBarBtn = document.querySelector(".side-bar");
const tendina = document.querySelector(".tendina");

const cart = [];

dwnldDataEl.addEventListener("click", () => {
    loaderEl.textContent = "Please wait...";
    fetch("https://api.escuelajs.co/api/v1/products")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            dataDisplay(data);
        })
        .catch(error => {
            loaderElement.textContent = "c'è stato un errore";
            console.log("MIO ERRORE: ", error);
        });
});

sideBarBtn.addEventListener("click", () => {
    tendina.classList.toggle("show");
  });

const dataDisplay = data => {
    loaderEl.remove();
    dwnldDataEl.remove();

    data.forEach((item) => {
        const prodCardEl = document.createElement('div');
        prodCardEl.className = "productsCard";

        const prodImgEl = document.createElement('img');
        prodImgEl.setAttribute('src', item.category.image);
        prodImgEl.className = "prod-img"

        const titleEl = document.createElement('h1');
        titleEl.textContent = item.title.slice(0, 10);
        titleEl.className = "title";

        const descEl = document.createElement("p");
        descEl.textContent = item.description.slice(0, 30);
        descEl.className = "description";

        const addBtn = document.createElement("button");
        addBtn.className = "buy-btn";
        addBtn.textContent = "Aggiungi al Carrello";

        addBtn.addEventListener("click", () => {
            cart.push(item);
            cartCreation(item.title, item.price);
            console.log(cart);
            alert("L'oggetto " + item.title + " è stato aggiunto al carrello");
        });

        prodCardEl.append(titleEl, prodImgEl, descEl, addBtn);
        listEl.appendChild(prodCardEl);
    });
};

// Avanzato
// Fare in modo che gli elementi dentro l'array const cart = [] vengano visualizzati nel DOM creando i rispettivi elementi e prevedere un pulsante che rimuova l'elemento selezionato dal carrello

const cartCreation = (title, price) => {
    const cartEl = document.createElement("div");
    const cancelbtnEl = document.createElement('button');
    cancelbtnEl.className = "remove-btn";

    cancelbtnEl.innerText= "X";
    cartEl.innerHTML = `<span>${title} ${price}€ </span>`;
    cancelbtnEl.addEventListener("click", () => cartEl.remove());
    cartEl.appendChild(cancelbtnEl);
    tendina.appendChild(cartEl);
};