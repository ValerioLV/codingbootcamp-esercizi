// Esercizio 1
// Sulla base dell'esercizio del giorno:

// Creare un account su https://developers.themoviedb.org/
// Ottenere una API KEY
// creare una pagina web che effettui anche una sola chiamata GET stavolta per 
//renderizzare una lista di serie tv, esempio popular o top rated o entrambe, e visaulizzare a schermo con uno stile a piacere.

import { GET } from "./api.js";
import { qS, movieCardGen, cE } from "./utils.js";

const topRatedEl = cE("div");
const mostPopularEl = cE("div");

const tRListEl = qS(".top_r");
const popularListEl = qS(".famous");



topRatedEl.className = "top-rated";
mostPopularEl.className = "most-popular";

Promise.all([
    GET("tv", "top_rated"),
    GET("tv", "popular")
])
.then((data) => {
    data[0].results.map((tv) => topRatedEl.append(movieCardGen(tv)));
    data[1].results.map((tv) => mostPopularEl.append(movieCardGen(tv)));
})
.then(() => {
    tRListEl.append(topRatedEl)
    popularListEl.append(mostPopularEl);
});