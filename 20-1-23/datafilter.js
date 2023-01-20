import { dataDisplay } from "./script";
import { listaProdotti } from "./serverMethods";

const filtro1 = document.querySelector(".cat-1");
const filtro2 = document.querySelector(".cat-2");
const filtro3 = document.querySelector(".cat-3");

filtro1.addEventListener("click", () => {
  const filteredProducts = listaProdotti
    .filter(item => item.price < 50);
  dataDisplay(filteredProducts);
});

filtro2.addEventListener("click", () => {
    const filteredProducts = listaProdotti
    .filter(item => item.category < 2);
    dataDisplay(filteredProducts);
})

export const filterByCategory = idCat => {
  const fiteredProducts = listaProdotti.filter(
    item => item.category.id === parseInt(idCat)
  );
  dataDisplay(fiteredProducts, ".products");
};