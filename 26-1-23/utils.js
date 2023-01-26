const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);
const cardEl = cE("div");

const prodCard = (data, i = "0") => {
  const {unitName, unitId, element, img} = data[i];
  
  const uNameEl = cE("p");
  const uIdEl = cE("p"); 
  const uElementEl = cE ("p");
  const uImageEl = cE ("img");
  const bodyEl = qS("body");
  
  if(element == "Dark"){
    cardEl.className = "unit-card-dark"
  } if(element == "Fire"){
    cardEl.className = "unit-card-fire"
  };
  
  uNameEl.className = "unit-name";
  uElementEl.className = "unit-element";
  uIdEl.className = "unit-id";
  uImageEl.className ="unit-img";

  uImageEl.setAttribute("src", img);

  uNameEl.textContent =  'Unit name: "'+unitName+'"';
  uElementEl.textContent = 'Unit element: "'+ element + '"';
  uIdEl.textContent ="Unit ID: '"+unitId+"'";

  cardEl.append(uNameEl, uIdEl, uElementEl, uImageEl);
  bodyEl.appendChild(cardEl);

  return cardEl;
};

export { cE, qS, prodCard, cardEl };