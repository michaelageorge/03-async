'use strict';

let fs = require( 'fs' );

let file = `./files/test.txt`;

fs.readFile( file, ( err, data ) => {
  if (err) throw err;
  console.log( 'before', data.toString() );
});

function getRandomNumber() {
  return ( Math.floor ( Math.random() * 100 ) + 1 );
}

let randomNumber = getRandomNumber();

fs.writeFile( file, randomNumber, (err) => {
  if (err) throw err;
  console.log(`Random number ${randomNumber} saved to the test.txt file!`);
  console.log( 'after', randomNumber.toString() );
});