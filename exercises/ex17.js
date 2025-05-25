/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/

const getlaught = function(max){
    let laugh = ""
    for(let i=0;i< max;i++){
        laugh += "ha"
    }
    return laugh
}

function HelloLaught(callback,numberofHas){ 
    let message = callback(numberofHas)
    return message
}

let message_laugh = HelloLaught(getlaught,7)

console.log(`${message_laugh}!`)