/*
we can be use the variable before its declaration not initialization



*/
x = 5;
// Assign 5 to x
console.log(x);
var x; // Declare x

// Internally it works like;
var x;
x = 5;
console.log(x);

// Edge case : Only declaration are hoisted, initialization is not hoisted

var x = 5;
console.log(x + " " + y); // 5 undefined
var y = 7;

// no hoisting in var and const

// carName = "volvo";
// let carName = "Swift";
// Reference error
