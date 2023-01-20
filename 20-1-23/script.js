

const listEl = document.querySelector(".list");
const listProdEl = document.querySelector(".products")
const loaderEl = document.querySelector(".loader");
const dwnldDataEl = document.querySelector(".button");
const sideBarBtn = document.querySelector(".side-bar");
const tendina = document.querySelector(".tendina");
const notifica = document.querySelector(".notif");

const cart = [];
let cartTotal = 0;

dwnldDataEl.addEventListener("click", () => {
    loaderEl.textContent = "Please wait...";
    fetch("https://api.escuelajs.co/api/v1/products")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            dataDisplay(data);
        })
        .catch(error => {
            loaderEl.textContent = "c'è stato un errore";
            console.log("MIO ERRORE: ", error);
        });
});

sideBarBtn.addEventListener("click", () => {
    tendina.classList.toggle("show");
  });

export const dataDisplay = (data, divId) => {
    loaderEl.remove();
    dwnldDataEl.remove();

    const btn1 = document.createElement("option");
    btn1.className = "cat-1";
    btn1.innerHTML = "A meno di 50€";

    const btn2 = document.createElement("option");
    btn2.className = "cat-2";
    btn2.innerHTML = "Solo categoria 1";

    const btn3 = document.createElement("option");
    btn3.className = "cat-3";
    btn3.innerHTML = "A meno di 10€!!";

    const filterMenu = document.createElement("select");
    filterMenu.className = "filter-menu";
    filterMenu.innerHTML = "Filtri";

    const filterContainer = document.querySelector(".filters");

    filterMenu.append(btn1, btn2, btn3);
    filterContainer.appendChild(filterMenu)
    listEl.appendChild(filterContainer);

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
        listEl.appendChild(listProdEl);
        listProdEl.appendChild(prodCardEl);
    });
};


const cartCreation = (title, price) => {
    const cartEl = document.createElement("div");
    const cancelbtnEl = document.createElement('button');
    cancelbtnEl.className = "remove-btn";

    cartTotal++;
    notifica.textContent = cartTotal;

    if(cartTotal > 0){
        notifica.classList.add("show");
    };
    

    cancelbtnEl.innerText= "X";
    cartEl.innerHTML = `<span>${title} ${price}€ </span>`;
    cancelbtnEl.addEventListener("click", () => {
        cartTotal--;
        if(cartTotal == 0){
            notifica.classList.remove("show");
        };
        cartEl.remove()});
    cartEl.appendChild(cancelbtnEl);
    tendina.appendChild(cartEl);
};