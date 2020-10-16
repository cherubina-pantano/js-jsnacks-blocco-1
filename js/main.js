/*
JSnack 1:

  L’utente inserisce due numeri in successione, con due prompt.
  Il software stampa il maggiore.

*/

var number1 = parseInt( prompt('Inserisci un numero') ) ;
console.log('Numero: ' + number1);

var number2 = parseInt( prompt('Inserisci un altro numero') ) ;
console.log('Numero: ' + number2);

if (number1 < number2) {
  // console.log('Il numero maggiore è: ' + number2);
  document.getElementById('Snack1-number2').innerHTML = ('Il numero maggiore è: ' + number2);
}
else if (number1 > number2) {
  // console.log('Il numero maggiore è: ' + number1);
  document.getElementById('Snack1-number1').innerHTML = ('Il numero maggiore è: ' + number1);

}
else {
  // console.log('I numeri sono uguali');
  document.getElementById('Snack1-numberUguali').innerHTML = ('I numeri sono uguali');

}
