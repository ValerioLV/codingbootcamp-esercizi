// ## Esercitazione
// Utilizzando sempre le seguenti Rest API: https://api.escuelajs.co/api/v1/products lavoriamo sempre al nostro e-commerce.

// Creiamo una nuova pagina al nostro e-commerce che includa un form
// Questo form dovrà contenere i seguenti campi:
// title
// price
// category
// image (dove inseriremo un url ad immagine presente nel web)
// description
// aggiungiamo poi un addEventlistner al form che venga triggherato al submit. Questo evento dovrà stampare in console un oggetto che conterrà i seguenti valori


const postForm = document.querySelector("#postForm");
const inputTitle = document.querySelector("#title");
const inputPrice = document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const inputDescription = document.querySelector("#description");
const inputImage = document.querySelector("#image");

// postForm.addEventListener("submit", event => {
//     event.preventDefault();

//     const submitObj = {
//         title: inputTitle.value,
//         price: parseInt(inputPrice.value),
//         categoryId: parseInt(inputCategory.value),
//         description: inputDescription.value,
//         image: [inputImage.value],
//     }; 
//     console.log(submitObj);
// })

// Avanzato
// Inviare l'oggetto creato in precedenza ad una funzione che faccia una fetch() con il metodo POST per caricare il nuovo elemento al database
// Gestite le risposte del POST in modo da dare un feedback all'utente
// NB: ricordate di stringhificare l'oggetto con il metodo JSON.stringify()


postForm.addEventListener("submit", event => {
    event.preventDefault();

    const submitObj = {
        title: inputTitle.value,
        price: parseInt(inputPrice.value),
         description: inputDescription.value,
        categoryId: parseInt(inputCategory.value),
        images: [inputImage.value],
    }; 
    Posting(submitObj);
});

const Posting = objPost => {
    fetch("https://api.escuelajs.co/api/v1/products", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(objPost),
    })
    .then(res => res.json())
    .then(data => console.log("Risposta dal database: ", data))
    .catch(e => console.log("C'è un problema: ", e));
};