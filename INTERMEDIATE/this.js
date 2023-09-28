/* 
This keyword
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
