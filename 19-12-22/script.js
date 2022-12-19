let Operation = prompt("Inserisci l'operazione da eseguire");

if (Operation == 'addizione' || Operation == 'sottrazione' || Operation == 'moltiplicazione' || Operation == 'divisione'){
    let firstNum = prompt("Inserisci il primo numero");
    let secNum = prompt("Inserisci il secondo numero");
    let intFirstNum = parseInt(firstNum);
    let IntSecNum = parseInt(secNum);
    switch (Operation) {
        case 'addizione':
             console.log(intFirstNum + IntSecNum);
            break;
            case 'sottrazione' :
             console.log(intFirstNum - IntSecNum);
            break;
        case 'moltiplicazione' :
             console.log(intFirstNum * IntSecNum);
            break;
        case 'divisione' :
            console.log(intFirstNum / IntSecNum);
            break;                                
    }
} else{
    alert("Questa non è un operazione. Ricarica la pagina.");
}