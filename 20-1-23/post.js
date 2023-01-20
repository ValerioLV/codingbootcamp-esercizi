import { Posting, elimina } from "./serverMethods.js";

const postForm = document.querySelector("#postForm");
const selector = document.querySelector("#typeSelector");
const inputTitle = document.querySelector("#title");
const inputPrice = document.querySelector("#price");
const inputCategory = document.querySelector("#category");
const inputDescription = document.querySelector("#description");
const inputImage = document.querySelector("#image");

const categoryForm = document.querySelector("#categoryForm");
const catName = document.querySelector("#categoryName");
const catImage = document.querySelector("#categoryImage");

const delProdForm = document.querySelector("#delProdForm");
const inputIdProd = document.querySelector("#prodId");


categoryForm.addEventListener("submit", event => {
    event.preventDefault();
    const submitObj = {
        name: catName.value,
        image: catImage.value,
    };
    console.log(submitObj);
    Posting(submitObj);
});

selector.addEventListener("change", selector => { 
    selector.toggleAttribute("disabled");
});

postForm.addEventListener("submit", event => {
    const method = event.target[0].value;
    const idProduct = "/" + event.target[1].value;
    event.preventDefault();

    const submitObj = {
        title: inputTitle.value,
        price: parseInt(inputPrice.value),
        description: inputDescription.value,
        categoryId: parseInt(inputCategory.value),
        images: [inputImage.value],
    }; 
    if (method === "POST") {
        Posting(submitObj, "products", method);
    } else {

        Posting(submitObj, "products", method, idProduct);
    }
});

delProdForm.addEventListener("submit", event => {
    event.preventDefault();
    elimina("products", inputIdProd.value);
  });