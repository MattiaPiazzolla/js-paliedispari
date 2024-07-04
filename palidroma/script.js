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
    if(userWord === invertWord){}
}


