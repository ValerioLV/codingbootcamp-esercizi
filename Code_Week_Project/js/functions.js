import {tvList, movieList} from "./initialize.js"
import { cE, qS } from "./utils.js";
import { GET } from "./api.js";


const sectionGenMovie = (data) => {
    const moviesFilter = movieList.filter((movie) =>
      movie.genre_ids.includes(data.id)
    )
    
    if(moviesFilter.length > 3){
      const sectEl = cE("section");
      const divEl = cE("div");
      sectEl.innerHTML = data.name;
      sectEl.className = "list_container"
  
      moviesFilter.map((movie) => divEl.appendChild(movieCardGen(movie)))
  
      const lista = qS(".movie")
      sectEl.appendChild(divEl)
      lista.append(sectEl);
    }
}
  
const sectionGenTv = (data) => {
    const tvFilter = tvList.filter((tv) =>
     tv.genre_ids.includes(data.id)
    )
  
    if(tvFilter.length > 1){
      const sectEl = cE("section");
      const divEl = cE("div")
      sectEl.textContent = data.name;
      sectEl.className = "list_container";
  
      tvFilter.map((tv) => divEl.appendChild(movieCardGen(tv)))
  
      const lista = qS(".tvs")
      sectEl.appendChild(divEl)
      lista.append(sectEl)
    }
}
  
const movieCardGen = (data) => {
    const cardEl = cE("div");
    const ImgEl = cE("img");
  
    cardEl.setAttribute("id", data.id);
    cardEl.className = "media";
    if (data.poster_path) {
      ImgEl.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w500/${data.poster_path}`
      );
    }
  
    ImgEl.setAttribute("alt", data.name);
    cardEl.appendChild(ImgEl);
  
    cardEl.addEventListener("click", () => {
      mediaPage(data)
    })
  
    return cardEl;
}
  
const mediaPage = (data) => {
    window.localStorage.setItem("movie", JSON.stringify(data))
    window.location.href =  `./movie.html?id=${data.id}`
}

// let movieSearch = (name) => {
//   let movies = []
//   let tvs = []
//   let listaEl = qS(".list")

//   Promise.all([
//     GET("movie", "popular"),
//     GET("tv", "popular")
// ])
// .then((data) => {
//   movies = data[0].results
//   tvs = data[1].results

//   const movFilter = movies.filter((movie) => {
//     movie.original_title.includes(name)
//   })
//  moviesFilter.map((movie) => listaEl.appendChild(movieCardGen(movie)))
  
// })}

export {sectionGenMovie, sectionGenTv, movieSearch}