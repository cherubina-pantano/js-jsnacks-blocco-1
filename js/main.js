/*
JSnack 2:

L’utente inserisce due parole in successione, con due prompt.
Il software stampa una stringa contenente prima la parola più corta, uno spazio e poi la parola più lunga.

*/

var word1 = prompt('Inserisci la prima parola');
console.log(word1);

var word2 = prompt('Inserisci la seconda parola');
console.log(word2)

 if (word1.length < word2.length) {
   // console.log('La parola più corta è: ' + word1 + ' la parola più lunga è: ' + word2);
   document.getElementById('Snack2-word1').innerHTML = ('La parola più corta è: ' + word1 + ' la parola più lunga è: ' + word2);

 }
  else if (word1.length > word2.length){
    // console.log('La parola più corta è: ' + word2 + ' la parola più lunga è: ' + word1);
    document.getElementById('Snack2-word2').innerHTML = ('La parola più corta è: ' + word2 + ' la parola più lunga è: ' + word1);

  }
  else {
    // console.log('Le parole sono uguali');
    document.getElementById('Snack2-wordsUguali').innerHTML = ('Le parole hanno la stessa lunghezza');
  }


// *******************************************************************************************
/*
JSnack 1:

  L’utente inserisce due numeri in successione, con due prompt.
  Il software stampa il maggiore.

*/

// var number1 = parseInt( prompt('Inserisci un numero') ) ;
// console.log('Numero: ' + number1);
//
// var number2 = parseInt( prompt('Inserisci un altro numero') ) ;
// console.log('Numero: ' + number2);
//
// if (number1 < number2) {
//   // console.log('Il numero maggiore è: ' + number2);
//   document.getElementById('Snack1-number2').innerHTML = ('Il numero maggiore è: ' + number2);
// }
// else if (number1 > number2) {
//   // console.log('Il numero maggiore è: ' + number1);
//   document.getElementById('Snack1-number1').innerHTML = ('Il numero maggiore è: ' + number1);
//
// }
// else {
//   // console.log('I numeri sono uguali');
//   document.getElementById('Snack1-numberUguali').innerHTML = ('I numeri sono uguali');
//
// }
