/*
Starting with this array of prices, change the prices of the 1st, 3rd, and 7th elements in the array.

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
TIP: The 1st element of any array has an index of 0.

Afterwards, print out the prices array to the console.
*/

const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00]

console.log(prices)

prices.splice(0,1,5.86)

console.log(prices)

prices.splice(2,1,85.24)

console.log(prices)

prices.splice(6,1,4.5)

console.log(prices)