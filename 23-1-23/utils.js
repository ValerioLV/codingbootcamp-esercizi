const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);
const cardEl = cE("div");

const prodCard = (data, i = "0") => {
  
  
  const quoteEl = cE("p");
  const authorEl = cE("p"); 
  const bodyEl = qS ("body");
  
  cardEl.className = "quote-card";
  quoteEl.className = "quote_text";
  authorEl.className = "quote_author";
  quoteEl.textContent =  '"'+data.quotes[i].quote+'"';
  authorEl.textContent ="'"+data.quotes[i].author+"'";

  cardEl.append(quoteEl, authorEl);
  bodyEl.appendChild(cardEl);

  return cardEl;
};

export { cE, qS, prodCard, cardEl };