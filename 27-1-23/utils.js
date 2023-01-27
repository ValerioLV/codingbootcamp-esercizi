const qS = (type) => document.querySelector(type);
const qSA = (type) => document.querySelectorAll(type);
const cE = (element) => document.createElement(element);

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

export {qS, qSA, cE, movieCardGen};