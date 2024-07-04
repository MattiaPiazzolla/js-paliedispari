// RECUPERO IL BOTTONE PER AVVIARE POI LA FUNZIONE
const checkBtn = document.getElementById('checkPal');
// CREO LA FUNZIONE PER CONTROLLARE SE È PALINDROMO
function checkPalindrom (){
    // RECUPERO L'INPUT DELL'UTENTE
    const userWord = document.getElementById('userWord').value;
    // VERSIONE CON reverse
    // // INVERTO LA PAROLA RECUPERATA
    // const invertWord = userWord.split('').reverse().join('');
    
    //VERSIONE CON CICLO for 
    // INVERTO LA PAROLA 
    let invertWord = '';
    for(let i = userWord.length-1 ; i >= 0; i--){
        invertWord += userWord[i];
    }
    // DETERMINO LE CONDIZIONI PER VERIFICARE SE LA PAROLA ORIGINALE È UGUALE ALLA PAROLA INVERTITA
    if(userWord === invertWord){
        // DEFINISCO IL MESSAGGIO DI OUTPUT IN CASO LA PAROLA SIA PALINDROMA
        document.getElementById('output').innerHTML = `<h4 class='fw-light text-success'>La parola <span class="fw-bold">${userWord}</span> è palindroma</h4>`
    } else {
        // DEFINISCO IL MESSAGGIO DI OUTPUT IN CASO LA PAROLA NON SIA PALINDROMA
        document.getElementById('output').innerHTML = `<h4 class='fw-light text-warning'>La parola <span class="fw-bold">${userWord}</span> non è palindroma</h4>`
    }
    
}

// AGGIUNGO L'EVENTO DEL PULSANTE CHE CHIAMA LA FUNZIONE
checkBtn.addEventListener('click', checkPalindrom);
// AGGIUNGO L'EVENTO DI ENTER CHE CHIAMA LA FUNZIONE
document.addEventListener('keydown', function (event) { //funzionamente non comletamente chiaro, l'avevo trovato su internet ed andando a sotituire alcune parti sono riuscito a farlo funzionare, vorrei capire come targhetizzare bene il punto di input, ho messo document e funziona ma in altri modi non riesco a farlo funzionare
    if (event.key === 'Enter') {
        event.preventDefault();
        checkPalindrom();
    }
});