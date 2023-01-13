// Esercizio 1
// Creare uno slider (template via HTML), seguendo il wireframe presente in allegato, seguendo le logiche viste durante la lezione. Lo stesso dovrà presentare 3 immagini che si susseguono al click sui relativi pallini identificatori.

// import { qS, qSA } from "./utils";

// const images = [
//     "https://picsum.photos/500/500?1",
//     "https://picsum.photos/500/500?2",
//     "https://picsum.photos/500/500?3",
//   ];
  
//   const carouselImgEl = document.querySelector(".carousel__img");
//   const leftBtnEl = document.querySelector(".left-btn");
//   const middleBtnEl = document.querySelector(".middle-btn");
//   const rightBtnEl = document.querySelector(".right-btn");

  

//   leftBtnEl.addEventListener("click", () => {
//     carouselImgEl.setAttribute("src", images[0]);
//     leftBtnEl.style.background = "red";
//     rightBtnEl.style.background = "white";
//     middleBtnEl.style.background = "white";
//   });

//   middleBtnEl.addEventListener("click", () => {
//     carouselImgEl.setAttribute("src", images[1])
//     middleBtnEl.style.background = "red";
//     rightBtnEl.style.background = "white";
//     leftBtnEl.style.background = "white";
//   });

//   rightBtnEl.addEventListener("click", () => {
//     carouselImgEl.setAttribute("src", images[2])
//     rightBtnEl.style.background = "red";
//     leftBtnEl.style.background = "white";
//     middleBtnEl.style.background = "white";
//   });

//   Avanzato
// Creare il template dello slider cui sopra completamente dinamico (via Javascript).

const images = [
    "https://picsum.photos/500/500?1",
    "https://picsum.photos/500/500?2",
    "https://picsum.photos/500/500?3",
  ];

  const body = document.querySelector("body");
  const carouselEl = document.createElement("div");
  const titlEl = document.createElement("h1");
  const carouselImgEl = document.createElement("img");
  const shapeEl = document.createElement("div");
  const switchBarEl = document.createElement("div");
  const leftBtnEl = document.createElement("button");
  const middleBtnEl = document.createElement("button");
  const rightBtnEl = document.createElement("button");
  const refreshEl = document.createElement("a");

  carouselEl.className = "carousel";
  carouselImgEl.className = "carousel__img";
  shapeEl.className = "shape";
  switchBarEl.className = "carousel__switch";
  leftBtnEl.className = "left-btn";
  titlEl.className = "title";
  refreshEl.className = "refresh";

  refreshEl.setAttribute("href", "index.html");
  carouselImgEl.setAttribute("src", "https://picsum.photos/500/500?1");
  titlEl.textContent = "carousel";
  refreshEl.textContent = "cambia le foto";


  switchBarEl.append(leftBtnEl, middleBtnEl, rightBtnEl);
  carouselEl.append(carouselImgEl, shapeEl, switchBarEl);
  body.append(titlEl, refreshEl, carouselEl);


  leftBtnEl.addEventListener("click", () => {
    carouselImgEl.setAttribute("src", images[0]);
    leftBtnEl.style.background = "red";
    rightBtnEl.style.background = "white";
    middleBtnEl.style.background = "white";
  });

  middleBtnEl.addEventListener("click", () => {
    carouselImgEl.setAttribute("src", images[1])
    middleBtnEl.style.background = "red";
    rightBtnEl.style.background = "white";
    leftBtnEl.style.background = "white";
  });

  rightBtnEl.addEventListener("click", () => {
    carouselImgEl.setAttribute("src", images[2])
    rightBtnEl.style.background = "red";
    leftBtnEl.style.background = "white";
    middleBtnEl.style.background = "white";
  });