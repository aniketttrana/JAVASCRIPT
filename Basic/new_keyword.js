/*
    'new' Keyword - The new Keyword is used to create an instance of a user-defined object type and a constructor function

    Syntax - new constructor(arguments[])
*/

const date = new Date();
// Date will get new  memory in heap
const isTrue = new Boolean();
console.log(date); // 2023-09-28T16:14:07.314Z
console.log(typeof date); // object [bcoz new return Object]
console.log(isTrue); // [Boolean: false]
