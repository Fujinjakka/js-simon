// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


// $(document).ready(
  // function() {

    var numeriDaIndovinare = [];
    var numeriInseriti = [];

    for (var i = 0; i < 5; i++) {
      var numeriRandom = randomNumber(1, 101);
      numeriDaIndovinare.push(numeriRandom);
    }

    alert(numeriDaIndovinare);
    setTimeout(insertNumber(nunmeriInseriti), 3000);



  // }
// );

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function insertNumber(arr) {
  for (var i = 0; i < 5; i++) {
    var numeriUtente = parseInt(prompt("inserisci i numeri che hai visto prima"));
    arr.push(numeriUtente);
  }
}
