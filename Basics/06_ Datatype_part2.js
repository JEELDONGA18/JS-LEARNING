// According to access and the store the data in to the memory the datatypes are divided into 2 parts 

// 1. Primitive : Call by Value (You given one copy of the stored data and whatever changes are done they only affect in the given copy)
// 7 Types : String, Number, Boolean, null, undefined, Symbol ( to uniquely identify the component ), BigInt

//Examples : 
const score = 100
const scoreValue = 100.3 // Both are under number. here, not different type for the decimal and float

const isLoggedIn = false
const outSideTemp = null
let userEmail;    // declare as undefined 

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id === anotherId); // false

const bigNumber = 1234567865434567890543 // number
console.log(typeof bigNumber); 
const bigIntNumber = 1234567865434567890543n // BigInt
console.log(typeof bigIntNumber); 


// 2. Non Primitive(Reference) : Call by Reference : Array, Objects, Functions
// Array
const God = ["Ram", "Krishna" , "Mahadev" , "Swaminarayan"];
console.log(typeof God); // Object 

// Object : between { } and store in to variable
let myObj =  {
    name : "Jeel",
    age : 18,
}
console.log(typeof myObj); // Object 

// Inside the { } the value's datatype can we primitive or non-primitive(even object) also.

// function  =>   Definition  :  function(){} --> This can be stored inside the variable also.
// function  =>   Object function --> called as 
let myFunction = function(){
    console.log("Hello World!!");
}

console.log(typeof myFunction); 



// for more detail refer :  https://262.ecma-international.org/5.1/#sec-11.4.3

// Summary 
/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number     =>  number
       String     =>  string
       Boolean    =>  boolean
       null       =>  object
       undefined  =>  undefined
       Symbol     =>  symbol
       BigInt     =>  bigint

2) Non-primitive Datatypes
       Arrays     =>  object
       Function   =>  function
       Object     =>  object
*/