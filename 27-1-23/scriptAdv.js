import { GET } from "./apiAdv.js";
import { qS, cE } from "./utils.js";

const movieCardGen = (data) => {
    const cardEl = cE("div");
    const tvImg = cE("img");
  
    cardEl.setAttribute("id", data.id);
    cardEl.className = "tv-series";
    if (data.poster_path) {
      tvImg.setAttribute(
        "src",
        `https://image.tmdb.org/t/p/w500/${data.poster_path}`
      );
    }
  
    tvImg.setAttribute("alt", data.name);
    cardEl.appendChild(tvImg);
  
    return cardEl;
  };

const searchBtn = qS("#search-btn");
let textBarEl = qS("#text-bar");
const filmList = qS(".films");
let searchedValue = "";

searchBtn.addEventListener("click", () => {
    searchedValue = textBarEl.value;
    GET("movie" , searchedValue)
    .then((film) => filmList.append(movieCardGen(film)));
})

