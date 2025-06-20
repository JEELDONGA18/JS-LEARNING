// Analogy : Take inputs of the user of the ecommerce website.

const accountID = '143455'                   // way-1 : const for the defined constant value
let accountEmail = "dongajeel123@gmail.com"  // way-2 : let for the defined variable value
var accountPassword = "12345"                // way-3 : var for the defined variable value
accountCity = "Jaipur"                       // way-4 : without any key word variable can also decalre
let accountSate;  // if variable is only decalred so its value is undefined is set in memory.

//accountID = 57382 //--> This is not allowed because it is constant value

// Note : Way-1 and Way-2 are only preferable 

/*
let vs var : 

var is used in the old programming but in that the problem of the scope ( {} ) is very hard 
example : in the 10 places same name variable without scope is used for the different purpose and so they change by different programmers and other have no idea about that
and so change in one place is affect the value of the different place
so to solve this we always use the let
*/

accountEmail  = "jeeldonga123@gmail.com"
accountPassword = '54321'
accountCity = "Surat"


// 2 ways to print
// method-1 : Direct Print
console.log("The account ID is :",accountID);

// method-2 :  Table Printing
console.table([accountID,accountPassword,accountEmail,accountCity,accountSate])