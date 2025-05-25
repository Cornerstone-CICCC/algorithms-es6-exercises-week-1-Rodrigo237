/*
Write a named function expression that stores the function in a variable called cry and returns "boohoo!". Don't forget to call the function using the variable name, not the function name:

cry();
Returns: boohoo!
*/
const getcry = function(){
    return cry = "boohoo"
}

function Sad(callback){ 
    let message = callback()
    return message
}

let message_cry = Sad(getcry,7)

console.log(`${message_cry}!`)