// Difference between old & new era of the js so much changes are done
// so the community of the js not like to the disbalanced between old and new code
// so by make the sync with take care of old code and use standard to apply new code we do this
"use strict" // treat all JS code as newer version
// by default it is set so no need to write but this is good practice

// alert( 3 + 3 ) // error because we are using node.js not browser


console.log(
    3
    +
    3
)
console.log("Jeel"); console.log("Donga")
// these are not good practise because of code readebility must be high in the code

// write like this 
console.log(3+3);
console.log("Jeel");
console.log("Donga");

// Documentation 
// Standard : tc39.es
// General use and we also use : mdn (because of easy to understand)


// Datatypes
let name = "Jeel"      // 1. string
let age = 19           // 2. number
let isLoggedIn = true  // 3. boolean


// number => 2 to the power of 53
// bigint => for vary large value used in stock market website or facebook etc..
// string => " " or ' '
// boolean => ture or false
// null => standalone value
// undefined => value is not assigned yet
// symbol => used for uniquness (figma tool and so many thing are mostly used this)
// object => 


/* null vs undefined : 
null      : empty value       : " I have a value, and that value is nothing "
undefined : no value assigned : " I exist, but no one gave me a value "
--> so, null and undefined both are different things
*/

//typeof datatype : to know the datatype of the value
console.log(typeof "Shree Ram")
console.log(typeof 3)


// Interview Question : 
console.log(typeof null)       //--> object
console.log(typeof undefined)  //--> undefined 
