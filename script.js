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

const flight = 'LH234';
const jonas = {
    name: 'Jonas',
    passport: 24739479284
}

const checkIn = function(flightNum, passenger) {
    flightNum ='LH9999';
    passenger.name = 'Mr ' + passenger.name;

    if(passenger.passport === 24739479284) {
        alert('Passenger checked');
    } else {
        alert('Passenger not checked');
    }
}
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// il faut faire un essai avec un objet complexe
// créer un objet complese : avec une liste d'objet
// faire un test sur la liste d'objets et changer l'objet (ajouter une propriété)
// loguer l'objet 