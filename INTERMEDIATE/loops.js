/*
Loops : Many types used to iterate on properties and do meaningful actions.
*/
//1. for loop
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// for in loop
var obj = {
  a: 0,
  b: 1,
  c: 2,
};
for (var y in obj) {
  console.log(y + ": " + obj[y]);
}

const person = { fname: "Aniket", lname: "Rana", age: 22 };

for (let x in person) {
  // It is used to output only key
  console.log(x);
  // output:
  // fname
  // lname
  // age
}

//   for of loop
var arr = [10, 20, 30];
for (var x of arr) {
  console.log(x + ": " + arr[x]);
  //arr[x] means values
}


// const persons = { fname: "Aniket", lname: "Rana", age: 22 };

// for (let x of persons) {
// It is used to output only values
// console.log(x);
// output:
// Aniket
// Rana
// 22
// }

//   for each loop
var arr1 = [1, 2, 3, 4, 5];
arr1.forEach(function (e) {
  mul = e * 2;
  console.log(mul + " ");
});
