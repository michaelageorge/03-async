'use strict';

let fs = require( 'fs' );

let file = `./files/test.txt`;

let data = fs.readFileSync(file);
console.log( 'before', data.toString() );

function getRandomNumber() {
  return ( Math.floor ( Math.random() * 100 ) + 1 );
}

let randomNumber = getRandomNumber();

fs.writeFile( file, randomNumber, (err) => {
  if (err) throw err;
  console.log( `Random number is now ${randomNumber} and is saved to the test.txt file!` );
  console.log( 'after', randomNumber.toString() );
});