/*
const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

Write a loop under each comment in the file.
Under the first, write a while loop that prints out each item of ingredients.
Under the second, write a for loop that does the same thing.
And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").
*/

const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// While loop
let i = 0
console.log("While loop")
while(i <= ingredients.length - 1){
    
    console.log(ingredients[i])
    i++
}

// for loop
console.log("For loop")
for(let i=0;i<= ingredients.length-1;i++){
        console.log(ingredients[i])
}

let lastIndex = ingredients.length - 1

// for loop reverse
console.log("For loop reverse")
for(let i=lastIndex;i>=0;i--){
    console.log(ingredients[i])
}