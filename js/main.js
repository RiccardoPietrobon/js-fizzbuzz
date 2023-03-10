//Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi in console "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
//Per i numeri che sono sia multipli di 3 che di 5 stampi in console "FizzBuzz".
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Come faccio a sapere se un numero è divisibile per un altro ?
//Abbiamo visto qualcosa di particolare che possiamo usare ?
//Consigli del giorno:
//1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
//BONUS 1:
//Crea un container nel DOM, aggiungendo(attraverso la funzione`append()`) un elemento html con il numero o la stringa corretta da mostrare.
//BONUS 2:
//Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
//Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
//Buon lavoro e buon divertimento!

//el in html
const my_element = document.getElementById("my_list");

for (let i = 0; i < 100; i++) {

    const my_item = document.createElement("li");
    console.log(my_item);
    //progressione di base 
    my_item.innerHTML = i + 1;
    my_item.classList.add("box");

    //multipli di 3
    if ((i + 1) % 3 == 0) {
        my_item.classList.add("box-one");
        my_item.innerHTML = "fizz";
    }

    if ((i + 1) % 5 == 0) {
        my_item.classList.add("box-two");
        my_item.innerHTML = "Buzz";
    }

    if ((i + 1) % 15 == 0) {
        my_item.classList.add("box-three");
        my_item.innerHTML = "fizzBuzz";
    }
    my_element.append(my_item)
}






