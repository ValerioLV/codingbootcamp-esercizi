import { GET, GET_Genre } from "./api.js";
import { sectionGenMovie, sectionGenTv } from "./functions.js"; 
// import { qS } from "./utils.js";
// import { movieSearch } from "./functions.js";

let movieList = []
let tvList = []

// let listaEl = qS(".list")
// let formEl = qS(".movie-search")

// formEl.addEventListener("submit", (e) => {
//     e.preventDefault();
//     listaEl.innerHTML = ""
//     let nameSearch = e.target[0].value
//     movieSearch(nameSearch)
// })

Promise.all([
    GET("movie", "popular"),
    GET("tv", "popular"),
    GET_Genre("movie"),
    GET_Genre("tv")
])
.then((data) => {
    movieList = data[0].results
    tvList = data[1].results

    data[2].genres.map((genre) =>{
       sectionGenMovie(genre)
    })
    data[3].genres.map((genre) => {
        sectionGenTv(genre)
    })
})


export {tvList, movieList}