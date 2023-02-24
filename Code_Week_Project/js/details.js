import {qS} from "./utils.js"

const jsonObj = localStorage.getItem("movie")
const jsObj = JSON.parse(jsonObj)
console.log(jsObj)

const body = qS("body")
const cardEl = qS(".showCard")

const photoContainEl = qS(".photo-container")
const descContainEl = qS(".img-desc")
const footerEl = qS(".footer")

const ImgEl = qS(".media")

const titoloEl = qS(".title")
const valutEl = qS(".valutazione")

const starsEl = qS(".Stars")
const totValutEl = qS(".votes_count")

const descEl = qS(".description")



if(!jsObj.original_title){
    titoloEl.textContent = jsObj.original_name
}else{
    titoloEl.textContent = jsObj.original_title
}

if(!jsObj.overview){
    descEl.textContent = "La descrizione per questo elemento non esiste nel database"
}else{
    descEl.textContent = jsObj.overview
}

totValutEl.textContent = `su ${jsObj.vote_count} voti`



starsEl.setAttribute(
    "style", `--rating:${(jsObj.vote_average / 2)}`
)
starsEl.setAttribute(
    "aria-label", `Rating is ${(jsObj.vote_average / 2)} out of 5`
)


ImgEl.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w500/${jsObj.poster_path}`
)


photoContainEl.appendChild(ImgEl)

valutEl.append(starsEl, totValutEl)

descContainEl.append(titoloEl, valutEl, descEl)
cardEl.append(descContainEl, photoContainEl)

body.append(cardEl, footerEl)