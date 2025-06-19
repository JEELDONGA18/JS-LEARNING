// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true because null treated as 0 during comparision(>,<,>=,<=) (In this == is not included thus 2nd's answer is false)

console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false

// ===  => triple = check in this strick comparison is done means value along with their datatypes also
console.log("2" === 0);  // false

