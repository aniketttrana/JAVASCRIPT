/*
Arrow function were introduced in ES6

1. Arrow function allows us to write shorter function syntax
*/

// function doSum(a, b) {
//   return a + b;
// }

// By using arrow function
// we dont have to define {} and return
const doSum = (a, b) => a + b;
// ***********************
const do10X = (a) => a * 10;
console.log(doSum(2, 3));

