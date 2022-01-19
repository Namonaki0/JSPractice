Boolean.prototype.myColor = function () {
  if (this.valueOf() == true) {
    return "red";
  } else {
    return "green";
  }
};

const value = true;
const color = value.myColor();

console.log(color);

//* "red"

// -----------------------------------------------

//? prototype allows you to add new properties and methods to booleans.
//? prototype is a property available with all JavaScript objects.
