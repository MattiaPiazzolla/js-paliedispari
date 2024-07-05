// RECUPERO IL PULSANTE DI AVVIO 
const startButton = document.getElementById('startBtn');
// CREO UNA FUNZIONE PER GENERARE UN NUMERO RANDOM
function randomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}
// CREO UNA FUNZIONE PER VERIFICARE SE UN NUMERO È PARI
function even(num) {
    return num % 2 === 0;
}
// DEFINISCO LA FUNZIONE PER GIOCARE (FUNZIONE PRINCIPALE)
function play(){
    // RECUPERO GLI IMPUT RADIO QUANDO SONO SELEZIONATI
    const evenSelected = document.getElementById('pari').checked;
    const oddSelected = document.getElementById('dispari').checked;
    // RECUPERO IL NUMERO INSERITO DALL'UTENTE
    let userNumber =parseInt(document.getElementById('userNumber').value);
    // CONDIZIONI PER VERIFICARE SE IL NUMERO INSERITO È COMPRESO TRA 1 E 5
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5){
        alert('Valore inserito non valido, Inserisci un numero compreso tra 1 e 5.');
       return
    }
    // CHIAMO LA FUNZIONE PER GENERARE UN NUMERO RANDOM E LO ASSEGNO AD UNA VARIABILE computerNumber
    const computerNumber = randomNumber();
    // SOMMO I DUE NUMERI 
    const sum = userNumber + computerNumber;
    // VERIFICO SE LA SOMMA È PARI UTILIZZANDO LA FUNZIONE 
    const evenResult = even(sum);
    let resultMsg = ''
    // DEFINISCO LE CONDIZIONI DI VITTORIA
    if ((evenResult && evenSelected) || (!evenResult && oddSelected)){//ho aggiunto la condizione della quale il risultato non è event e la scelta è dispari ed ora funziona!
        resultMsg = '<span class="text-success">Hai vinto!</span>'
    } else {
        resultMsg = '<span class="text-danger">Hai perso!</span>'
    }
    // INIETTO LA FRASE DI OUTPUT
    document.getElementById('output').innerHTML=`<h3 class="text-center">${resultMsg} Il numero del computer è ${computerNumber} la somma è ${sum}</h3>`
    
}

// CHIAMO LA FUNZIONE AL CLICK DEL BOTTONE
startButton.addEventListener('click', play);
// AGGIUNGO L'EVENTO DI ENTER CHE CHIAMA LA FUNZIONE
document.addEventListener('keydown', function (event) { //funzionamente non comletamente chiaro, l'avevo trovato su internet ed andando a sotituire alcune parti sono riuscito a farlo funzionare, vorrei capire come targhetizzare bene il punto di input, ho messo document e funziona ma in altri modi non riesco a farlo funzionare
    if (event.key === 'Enter') {
        event.preventDefault();
        play();
    }
});