// Esercitazione
// Seguendo quello fatto oggi a lezione effettuate una chiamate fetch() alla seguente API web:
//  https://api.escuelajs.co/api/v1/products e 
// stampate in console nome e descrizione del prodotto simile a questo formato


// const listEl = document.querySelector('body');
// const prodCardEl = document.querySelector(".productsCard");
// const loaderEl = document.querySelector(".loader");
// const dwnldDataEl = document.querySelector(".button");

// dwnldDataEl.addEventListener("click", () => {
//     fetch("https://api.escuelajs.co/api/v1/products")
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             dataDisplay(data);
//         });
// });




// const dataDisplay = data => {
//     dwnldDataEl.remove();

//     data.forEach((item) => {
//         const dividerEl = document.createElement('p');
//         dividerEl.textContent = "------------------------------------------------------------------------------------------------------------------------------------------";

//         const titleEl = document.createElement('h1');
//         titleEl.textContent = item.title;

//         const descEl = document.createElement("p");
//         descEl.textContent = item.description;

//         prodCardEl.append(dividerEl, titleEl, descEl);
//         listEl.appendChild(prodCardEl);
//     });
// };


// Avanzato
// Crea delle card il più verosimili possibile ad un vero e-commerce e provate ad utilizzare un loader (puo anche essere un semplice messaggio) 
// e la gestione degli errori


const listEl = document.querySelector(".list");
const loaderEl = document.querySelector(".loader");
const dwnldDataEl = document.querySelector(".button");

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


const dataDisplay = data => {
    loaderEl.remove();
    dwnldDataEl.remove();

    data.forEach((item) => {
        const prodCardEl = document.createElement('div');
        prodCardEl.className = "productsCard";

        const prodImgEl = document.createElement('img');
        prodImgEl.setAttribute('src', "https://picsum.photos/200/300");
        prodImgEl.className = "prod-img"

        const titleEl = document.createElement('h1');
        titleEl.textContent = item.title;
        titleEl.className = "title";

        const descEl = document.createElement("p");
        descEl.textContent = item.description;
        descEl.className = "description";

        prodCardEl.append(titleEl, prodImgEl, descEl);
        listEl.appendChild(prodCardEl);
    });
};