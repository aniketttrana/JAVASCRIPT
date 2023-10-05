/* 
Scope detemine the accessibility of variable
JavaScript has 3 types of scopes:

Block Scope
Function Scope
Global Scope

*/

// 1. Block Scope
{
  let sum = 2;
  // if we use var :: then it will be access outside thats why they introduce let , const in ES6
}
// sum cant be accessed here
// console.log(sum);   // ReferenceError: sum is not defined

// 2. Function Scope

function findSum(a, b) {
  let sum = a + b;
  console.log(sum);
}
findSum(2, 3);

// console.log(sum);   //ReferenceError: sum is not defined

// 3. Global Scope
let sum = 200;

function calcSum(a, b) {
  sum = a + b;
  console.log(sum);
}
calcSum(1, 3);

console.log(sum); // we can access it here

// ************************************

var e = 10; // Here e is 10
{
  var e = 20; // Here e is 20
}
console.log(e); // It will take 20 in var

let d = 10; // Here d is 10
{
  let d = 20; // Here e is 20
}
console.log(d); // It will take 10 in let
// which is what it should take
