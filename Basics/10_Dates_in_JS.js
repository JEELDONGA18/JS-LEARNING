// :: Dates ::
// Dates are provided since 1 January, 1970 in the form of time in the milliseconds

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());        // Sun Jun 22 2025
console.log(myDate.toISOString());         // 2025-06-22T17:51:40.180Z
console.log(myDate.toJSON());              // 2025-06-22T17:51:40.180Z
console.log(myDate.toLocaleDateString());  // 6/22/2025
console.log(myDate.toLocaleTimeString());  // 5:51:40 PM
console.log(myDate.toLocaleString());      // 6/22/2025, 5:51:40 PM


console.log(typeof myDate); // Interview Question

// Way-1 : To declare the Date
let myCreatedDate = new Date(2015 , 0 , 12) 
// In JS months are starts from the 0 not from 1 means 0=Jan and 11=Dec
console.log(myCreatedDate.toDateString());

// Formats in Date
// let DateFormat = new Date(2025,0,25)
// let DateFormat = new Date(2025,0,25,20,12,34)
// let DateFormat = new Date("2025-12-25") // YYYY-MM-DD
// let DateFormat = new Date("14-14-25") // MM-DD-YYYY => Invalid Date
let DateFormat = new Date("4-14-25") // MM-DD-YYYY
console.log(DateFormat.toLocaleString());


// You can also put the Time Stamp in this
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
// By these 2 you can compare the current time and one specific time 

// Conversion of the ms to second
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// To customize your Date Format
console.log(newDate.toLocaleString("Default",{
    weekday : "long"
}));