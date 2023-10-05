/* 
This keyword is used fr self referencing
 In javascript , this keyword refers to an object and this object depend on how this is being invoked(used or called)
*/

const person = {
  firstName: "Aniket",
  lastName: "Rana",
  id: 100,
  fullName: function () {
    return this.firstName + " " + this.lastName;
    // this points to the current object, which is 'person'
  },
};
console.log(person.fullName());

// It is behaving as it is
var obj = {
  msg: "Hii",
  printMsg: function () {
    console.log(this.msg);
  },
};
obj.printMsg();
// But when we use this in arrow function
// In JavaScript, the behavior of the this keyword in arrow functions is different from regular functions. In arrow functions, this does not have its own context; instead, it inherits the context from the surrounding (enclosing) function or scope. This is sometimes called "lexical scoping" or "lexical this binding."
var obj = {
  msg: "Arrow ThIS",
  printMsg: () => {
    console.log(this.msg, this); // undefined
    console.log(this.msg); // {}
  },
};

var msg = "FOr this Specially";
/* it will render in console 
OUTPUT in Browser Console:
 FOr this Specially Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
*/
obj.printMsg();
// The arrow function does not have its own this context, so it inherits the this from the surrounding scope. In this case, the surrounding scope is the global scope, because there's no other enclosing function or object. Therefore, this inside the arrow function refers to the global object (usually window in a browser context), not the obj object.

// That's why this.msg inside the arrow function is undefined, because there is no msg property on the global object.
