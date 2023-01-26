// Esercizio 1
// Sulla base della lezione di oggi, creare un intervallo temporale che simuli un conto alla rovescia, che dopo n secondi:

// mostra il timer in schermo, come visto a lezione;
// che allo scadere del timer la pagina deve cambiare colore e il timer stesso deve scomparire;
// la presenza di un pulsante STOP interrompe il flusso temporale, tramite il relativo clearInterval.

let countdown =  10;
const bodyEl = document.body;
const timerEl = document.createElement("h1");
timerEl.className = "timer";
const stopBtn = document.createElement("button");
stopBtn.className = "btn";

stopBtn.textContent = "STOP";
bodyEl.append(timerEl, stopBtn);

stopBtn.addEventListener("click", () => clearInterval(countdownFunc));
   

const countdownFunc = setInterval(() => {
    if (countdown === 0) {
        bodyEl.style.backgroundColor = "yellow";
        timerEl.remove();
    } else {
        countdown--;
        timerEl.textContent = countdown;
        }
    }, 1000);