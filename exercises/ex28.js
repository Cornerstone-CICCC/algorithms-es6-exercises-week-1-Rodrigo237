/*
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you've posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1
*/

const facebookProfile ={
    name: "Rodrigo Moreno",
    numFriends : 300,
    messages: [],
    postMessage(message){
        this.messages.push(message)
    },
    deleteMessage(index){
        if((index>=0) && (index< this.messages.length)){
            this.messages.splice(index,1)
        }else{
            console.log("Invalid, the message was'nt deleted")
        }
    },
    addFriend(){
        this.numFriends += 1
    },
    removeFriend(){
        if(this.numFriends > 0)
            this.numFriends--
        else
            console.log("there are no friends that can be eliminated")
    }
}

facebookProfile.postMessage("Today is a sunny day")
facebookProfile.postMessage("Let's go to the beach")
facebookProfile.postMessage("Good day everyone")

console.log(`${facebookProfile.name}: ${facebookProfile.messages}`)

facebookProfile.addFriend()
facebookProfile.addFriend()
facebookProfile.addFriend()

console.log(facebookProfile.numFriends)

facebookProfile.deleteMessage(2)
facebookProfile.removeFriend()

console.log(`${facebookProfile.name}: ${facebookProfile.messages}`)
console.log(facebookProfile.numFriends)