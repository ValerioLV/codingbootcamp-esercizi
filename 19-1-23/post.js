// Lavoriamo sempre al nostro e-commerce

// Abbelliamolo il più possibile, inserendo nuovi elementi per farlo sembrare sempre più simile ad un vero e-commerce... SIATE CREATEVI!!!
// Creiamo un secondo nuovo form per l'aggiunzione tramite il metodo POST di una nuova categoria nel nostro backend.

const postForm = document.querySelector("#postForm");
const inputTitle = document.querySelector("#title");
const inputPrice = document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const inputDescription = document.querySelector("#description");
const inputImage = document.querySelector("#image");

const categoryForm = document.querySelector("#categoryForm");
const catName = document.querySelector("#categoryName");
const catImage = document.querySelector("#categoryImage");

categoryForm.addEventListener("submit", event => {
    event.preventDefault();
    const submitObj = {
        name: catName.value,
        image: catImage.value,
    };
    console.log(submitObj);
    Posting(submitObj);
});


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