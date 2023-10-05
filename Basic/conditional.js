// 1. if-else statements

var voterAge = 20;

if (voterAge >= 18) {
  console.log("Can vote");
} else {
  console.log("Can not vote");
}

// 2.Switch Case:

// console.log(new Date().getDate());
// gives the current date

// console.log(new Date().getDay());
// current day 0- Sunday and so on

var text; 

switch (new Date().getDay()) {
    case 0:
    text = "Today is Sunday";
    break;
    case 4:
    text = "Today is Thursday"; 
    break;
    default:
    text = "Remaining Day";
    break;
}

console.log(text); 


