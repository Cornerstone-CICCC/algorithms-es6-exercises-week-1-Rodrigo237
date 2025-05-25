/*
Ice cream is one of the most versatile desserts on the planet because it can be done up so many different ways. Using logical operators, write a series of complex logical expressions that prints only if the following conditions are true:

if flavor is set to vanilla or chocolate and
if vessel is set to cone or bowl and
if toppings is set to sprinkles or peanuts
If the above conditions are true, then print out:

I'd like two scoops of __________ ice cream in a __________ with __________.
Fill in the blanks with the flavor of the ice cream, vessel, and toppings. For example,

I'd like two scoops of vanilla ice cream in a cone with peanuts. 
*/
const icecream_flavor = "vanilla"
const icecream_vessel = "bowl"
const icecream_toppings = "sprinkles"

if(((icecream_flavor === "vanilla") || (icecream_flavor == "chocolate")) &&
    ((icecream_vessel === "cone")||(icecream_vessel === "bowl"))&&
    ((icecream_toppings == "peanuts")||(icecream_toppings === "sprinkles"))){
        console.log(`I'd like two scoops of ${icecream_flavor} ice cream in a ${icecream_vessel} with ${icecream_toppings}`)
}else{
    console.log(`We don't have this type of icecream`)
}