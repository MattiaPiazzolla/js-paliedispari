// RECUPERO IL PULSANTE DI AVVIO 
const startButton = document.getElementById('startBtn');
// CREO UNA FUNZIONE PER GENERARE UN NUMERO RANDOM
function randomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}
// CREO UNA FUNZIONE PER VERIFICARE SE UN NUMERO È PARI
function Even(num) {
    return num % 2 === 0;
}
// DEFINISCO LA FUNZIONE PER GIOCARE (FUNZIONE PRINCIPALE)
function play(){
    // RECUPERO GLI IMPUT RADIO QUANDO SONO SELEZIONATI
    const even = document.getElementById('pari').checked;
    const odd = document.getElementById('dispari').checked;
    // RECUPERO IL NUMERO INSERITO DALL'UTENTE
    let userNumber = document.getElementById('userNumber').value;
    // CONDIZIONI PER VERIFICARE SE IL NUMERO INSERITO È COMPRESO TRA 1 E 5
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5)
        alert('Valore inserito non valido, Inserisci un numero compreso tra 1 e 5.')
    // CHIAMO LA FUNZIONE PER GENERARE UN NUMERO RANDOM E LO ASSEGNO AD UNA VARIABILE computerNumber
    const computerNumber = randomNumber();
    // SOMMO I DUE NUMERI 
    const sum = userNumber + computerNumber;
}
