const score = 400  // way 1 : to declare the number type variable
console.log(score);
 
// you can also make the variable by specify its type 
// way 2 : to declare the number type variable specifically

const balance = new Number(100);
console.log(balance);

console.log(balance.toString.length);
console.log(balance.toFixed(2));  // To give precision of the number till some decimal

const otherNumber = 123.4932

console.log(otherNumber.toPrecision(4));

// Calulation of Hundreds
const hundreds = 10010000 // Difficult to count 0's
console.log(hundreds.toLocaleString()); // American Standards format (By Default)
console.log(hundreds.toLocaleString('en-IN')); // Convert to Indian format

// Go to the console and type : 'Number.' and you have the downbar in which all the by values of the Number is shown so just explore them.

// --------------------- :: Maths :: ---------------------
// Math is preInstalled Library , so just use it 
console.log(Math);
console.log(Math.abs(-10)); // abs => absolute means -ve value to convert +ve but +ve value becomve +ve not -ve.
console.log(Math.round(4.6));
console.log(Math.ceil(4.0001));
console.log(Math.floor(4.99));
console.log(Math.min(4,2,7,1,0));
console.log(Math.max(4,2,7,1,0));


// Use of the random function of the Math Library
console.log(Math.random()); // always give value : 0 <= value <= 1
console.log((Math.random()*10) + 1); // to shift 1 decimal and also avoid the 0 value and by this minimum value become 1 instead of 0
console.log(Math.floor((Math.random()*10) + 1));  // to achieve only single number

// Trick to generate the value between the min and max number
const min = 10
const max = 20

// Math.random()
// Math.random() * (max - min + 1) --> + 1 to avoid the 0 as minimum number
// Math.floor( Math.random() * (max - min + 1) ) --> To get one single digit
// Math.floor( Math.random() * (max - min + 1)) + min -->  to get the value in between range 
// and just print it by console.log(Math.floor( Math.random() * (max - min + 1)) + min)

console.log(Math.floor( Math.random() * (max - min + 1)) + min);

