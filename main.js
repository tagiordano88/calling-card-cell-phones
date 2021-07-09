

const CallingCard = require('./CallingCard.js');
const CallingCard = require('./CellPhone.js');

let card1 = new CallingCard(11);
card1.addDollars(3);         // 300 cents / 11 = 27.2727272... = 27 minutes added
card1.getRemainingMinutes(); // => returns 27

let card2 = new CallingCard(17);
card2.addDollars(3);         // 300 cents / 17 = 17.647... = 17 minutes added
card2.getRemainingMinutes(); // => returns 17
console.log(card1, card2);