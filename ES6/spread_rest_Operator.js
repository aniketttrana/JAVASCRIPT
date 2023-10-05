/*
Rest Parameter (...)

By using rest we can access the rest  of the parameters as array .[List of items get converted into arrays] By using this parameters are not being ignored.

BY passing ... triple dot then anything for example in this case i have write others
*/

function addNumbers(a, b, c, ...others) {
  // it is being used in called function (Parameter)
  console.log(others);
  console.log(others[0]);
  return a + b + c;
}
const res = addNumbers(2, 3, 4, 3, 4, 3, 53, 4);
console.log("Total is " + res);

//***************** */ Spread Operator (...)*****************

// Usage: The spread operator is used to spread or unpack the elements of an array (or an iterable) into another array, function arguments, or object literals.
var names = ["ANiket", "Ram", "Shyam"];
function getNames(name1, name2, name3) {
  console.log(name1, name2, name3);
}

getNames(names[0], names[1], names[2]);
// OR
getNames(...names); // This is what spread operator
// it is being used in calling function(Argument)
// OR
// getNames(names);

// NEXT EXAMPLES
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray);

// NEXT EXAMPLES
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 49, 50];
const result = sum(...numbers); // equivalent to sum(1, 2, 3);
console.log(result);

// NEXT EXAMPLE
Math.min(1, 2, 3); //  1
let spreadExample = [1, 2, 3];
// convert array into list of items
console.log(Math.min(...spreadExample));
// console.log(Math.min(spreadExample)); // this will give error

// ******************************
// Lets see how it behaves like OBJECTS
var student = {
  name: "Aniket",
  age: "22",
  Hobbies: ["Singing"],
};
// const age = student.age;
// Array destructing
// Array destructuring is a feature in JavaScript that allows you to unpack values from arrays and assign them to variables in a concise and structured way.
// const { age, name } = student; // this is array destructing

// console.log(age);
// console.log(name);

// const { age, ...rest } = student;
// OR
const{...rest}=student;
console.log(rest);


// Spread in objects
var newStudent={
    ...student,
    // we can change values , overwrite
    age:"22"
}
console.log(newStudent)
