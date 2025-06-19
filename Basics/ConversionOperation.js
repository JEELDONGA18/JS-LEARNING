let score = 33

console.log(score)
console.log(typeof score)  // Way 1 to know type of the value of the variable
console.log(typeof(score)) // Way 2 to know type of the value of the variable

let score2 = "33"
console.log(typeof score2)
console.log(typeof(score2))

// Here we got 33 and number as output which is definitely correct

// but Twist : suppose the string which is not actually convertable in the number, Can it still convert?
let score3 = "33abc"  // This can't be convert in to number 
let valueInNumber2 = Number(score3)
console.log(typeof valueInNumber2) 
// Here as Output We shown the number it means it converted
console.log(valueInNumber2)
// When we print it so it Shows us NaN means Not a Number

// Means Type of the variable is number but actual value is Not a Number which is true.


// Like this Some Conversion Results : 
/*
null => 0
undefined => NaN
true => 1 & false => 0
String (Which is not convertable in to Number) => Nan
*/


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => ture ; 0 => false
// "Hanumanji" => true
// "" => false


// conversion :  string to the number 
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber) 