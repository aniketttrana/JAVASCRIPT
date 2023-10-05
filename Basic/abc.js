// It switches the context of this

/*      ABC of JS
    1.Apply
    2.Bind
    3.Call
*/
const userDetails = {
  name: "Aniket",
  designation: "Ux/UI",
  printDetails: function () {
    console.log(this.name);
  },
};
userDetails.printDetails();

const userDetails2 = {
  name: "Rana",
  designation: "Software Development Engineer",
  //   printDetails: function () {
  //     console.log(this.name);
  //   },

  //   This allows you to switch the context of the printDetails method to the userDetails2 object, even though it was originally defined in the userDetails object.
};
userDetails.printDetails.call(userDetails2);
// we borrow the function

// userDetails.printDetails.call(userDetails2); is called using the call method. This effectively changes the this value inside the printDetails function to be the userDetails2 object. So, when the printDetails function is executed, it prints the name property of the userDetails2 object, which is "Rana."

// ******** What if this is in this case

// It switches the context of this

/*      ABC of JS
    1.Apply
    2.Bind
    3.Call
*/
const userDetails3 = {
  name: "Aniket",
  designation: "Ux/UI",
};

let printDetails3 = function () {
  console.log(this.name);
};

printDetails3.call(userDetails3);

const userDetails4 = {
  name: "Rana",
  designation: "Software Development Engineer",
};
printDetails3.call(userDetails4);
