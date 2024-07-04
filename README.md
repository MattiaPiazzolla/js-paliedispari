nome repo: js-paliedispari
Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente inserisce prima  "pari" o "dispari" poi inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Numero di push: 10 circa minimo
Errori da evitare
1 - Non effettuare la chiamata di funzione;
2 - Effettuare la chiamata di funzione in un console.log o in un alert ed assegnarlo ad una variabile
3 - Se la funzione ha il return non assegnare la chiamata di funzione ad una variabile
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

SCOMPOSIZIONE IN SOTTOPROBLEMI
<!-- Palidroma -->
>Recupero il bottone per avviare la funzione
>Creo la funzione per verificare se la parola è palindroma 
    >>Recupero la parola inserita dll'utente 
    >>Inverto la parola
    >>Definisco le condizioni per controllare se la parola, quando invertita è uguale a se stessa
        >>>Gestisco l'output a schermo

<!-- Pari e Dispari -->
>Recupero il bottone per avviare la funzione principale 
>Creo una funzione per generare un numero random
>Creo una funzione per verificare se un numero è pari o dispari 
>Creo la funzione principale
    >>Recupero la scelta inserita dll'utente 
    >>Recupero il numero scelto dall'utente
        >>>Determino le condizioni di validità del numero inserito dall'utente 
    >>Genero un numero random per il computer chiamando la funzione creata in precedenza 
        >>>Sommo il numeRO dell'utente con il numero generato dal computer 
    >>Controllo se la somma dei due numeri è pari (utilizzando la funzione creata in precedenza)
        >>>Determino le condizioni di vittoria o sconfitta 
    >>Gestisco l'output a schermo 
>Dico al pulsante di aspettare il click per poi eseguire la funzione principale
