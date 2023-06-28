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

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);
