/*
James was creating an array with the colors of the rainbow, and he forgot some colors. The standard rainbow colors are usually listed in this order:

var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
but James had this:

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
Using only the splice() method, insert the missing colors into the array, and remove the color "Blackberry" by following these steps:

Remove "Blackberry"
Add "Yellow" and "Green"
Add "Purple"
*/

const rainbow = ["Red", "Orange", "Blackberry", "Blue"]

rainbow.splice(2,1)
console.log(rainbow)

rainbow.splice(2,0,"Yellow","Green")
console.log(rainbow)

rainbow.push("Purple")
console.log(rainbow)