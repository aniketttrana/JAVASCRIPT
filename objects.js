var car = {
  color: "red",
  model: "s22",
  price: "33",
};
console.log(car);
console.log(car.model);
// JSON javascript objects notation
// convert OBJ TO STRING
var convertedStringfromObjects = JSON.stringify(car);
console.log(car);
console.log(convertedStringfromObjects);

// string to obj
var StringtoObj = JSON.parse(convertedStringfromObjects);

console.log(StringtoObj);
