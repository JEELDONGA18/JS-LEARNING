// Two Types : Stack and Heap 
// Stack --> Primitive Datatypes
// Heap  --> Non-Primitive Datatypes

// Stack 
let myYouTubeChannel = "hiteshchoudharydotcom"

let anotherYouTubeChannel = myYouTubeChannel
console.log(myYouTubeChannel);
console.log(anotherYouTubeChannel);

anotherYouTubeChannel = "chaiaurcode"
console.log(myYouTubeChannel);
console.log(anotherYouTubeChannel);

// Heap
let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}
// console.log(userOne);

let userTwo = userOne
// console.log(userTwo);

userTwo.email = "hitesh@google.com"

// console.log(userOne);
// console.log(userTwo);
console.log(userOne.email);
console.log(userTwo.email);