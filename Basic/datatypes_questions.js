// 1. String Template

const { valueToNode } = require("@babel/types");
const { type } = require("os");

function returnName(fname, lname) {
  // return fname + ' '+ lname;
  // For combining we use + so
  // instead of it in ES6 we can use
  // String Literals
  return `${fname}    ${lname}`;
  //   We can include many Spaces includes also
}

console.log(returnName("Aniket", "Rana"));

//Some useful methods [typeof]
console.log(typeof "abc"); // string
console.log(typeof 10); //number
console.log(typeof []); // object
console.log(typeof {}); //object

// isArray : to check  if array is present or not

console.log(Array.isArray([10, 20])); // true

console.log(Array.isArray({ 10: true, 20: false })); // false

// isNaN = isNot a number
console.log(isNaN("abc")); //true
// Kya ye number nahe hai == Nahe hai == to true
console.log(isNaN(122)); //false
console.log(isNaN("122")); // false

// 3. Ternary Operator (Short hand for if else)
// if q has only 1 if else
var canVote = 3;
if (canVote >= 18) {
  console.log("Yes");
} else {
  console.log("NO");
}

// By using ternary operator
var canVote = 30;
console.log(canVote >= 18 ? "Yes" : "No");

// OR

console.log(canVote >= 18); // true

// 4. == , ===

// == : check the value
// === : check the value and type
console.log(10 == "10"); // true
console.log(10 === "10"); // false
