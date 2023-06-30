'use strict';

// DEFAULT ARUMENT
// const bookings = [];

// const createBooking = function (flightNum, numPasengers = 1, price = 199) {
//   const booking = {
//     flightNum,
//     numPasengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123', 2, 800);
// createBooking('LH123', undefined, 800); // skip a default argument

// VALUE VS REFERENCE

// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas',
//     passport: 24739479284
// }

// const checkIn = function(flightNum, passenger) {
//     flightNum ='LH9999';
//     passenger.name = 'Mr ' + passenger.name;

//     if(passenger.passport === 24739479284) {
//         alert('Passenger checked');
//     } else {
//         alert('Passenger not checked');
//     }
// }
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// functions accepting callback functions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best', upperFirstWord);
// transformer('Javascript is the best', oneWord);

// functions returnin functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

// const greeterYo = greet('Yo');
// greeterYo('Nicolas');

// const greetArrowFunction = greeting =>
//   name => console.log(`${greeting} ${name}`);
// ;

// greetArrowFunction('Hello')('Nicolas');

// THE CALL AND APPLY METHODS

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline}, flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Nicolas');
// lufthansa.book(365, 'John');

// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// Does NOT work
// book(23, 'John');

//book.call(eurowings, 23, 'Sarah Connors');

// for an array
//book.call(eurowings, ...flightData);

// BIND METHOD

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// bookEW(23, 'Steven Williams');
// bookLH(23, 'John');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('John');

// with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// IMMEDIATELY INVOKED FUNCTIONS EXPRESSIONS (function(){})()

(function(){
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run again'))();

