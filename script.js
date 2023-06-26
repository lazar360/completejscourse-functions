'use strict';

const bookings = [];

const createBooking = function(flightNum, numPasengers = 1, price = 199){

    const booking = {
        flightNum,
        numPasengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');