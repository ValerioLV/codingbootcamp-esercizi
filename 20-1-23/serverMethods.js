export let listaProdotti = 0;

export const Posting = (objPost, param, method, idProduct = "") => {
    fetch(`https://api.escuelajs.co/api/v1/` + param + `/` + idProduct, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(objPost),
    })
    .then(res => res.json())
    .then(data => console.log("Risposta dal database: ", data))
    .catch(e => console.log("C'è un problema: ", e));
};

export const elimina = (callType, idProduct) => {
    fetch(`https://api.escuelajs.co/api/v1/` + callType + `/` + idProduct, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data !== true) {
          alert(
            `${callType} NON CANCELLATO PER LE SEGUENTI RAGIONI: ` + data.name
          );
        } else {
          alert(`${callType} CANCELLATO CORRETTAMENTE!`);
        }
      })
      .catch(e => console.log("ERRORE: ", e));
};

export const metodoGet = () => {
    fetch("https://api.escuelajs.co/api/v1/products/")
      .then(res => res.json())
      .then(data => {
        cardCreator(data, ".products");
        listaProdotti = data;
      })
      .catch(e => console.log("Questo è il mio errore: ", e));
  };