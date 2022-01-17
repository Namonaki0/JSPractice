Array.prototype.upperCaseFunc = function () {
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

const names = ["Robert", "Sally", "James", "Steve"];

names.upperCaseFunc();

console.log(names);

//* ["ROBERT", "SALLY", "JAMES", "STEVE"];

function Person(name, job_title, id) {
  (this.name = name), (this.job_title = job_title), (this.id = id);
}

const newPerson = new Person("James", "musician", 13342);

Person.prototype.residence = "UK";

const { name, job_title, id, residence } = newPerson;

console.log(
  `His name is ${name}, he's a ${job_title} and he lives in the ${residence}`
);

//* "His name is James, he's a musician and he lives in the UK";

// -----------------------------------------------

//? prototype allows you to add new properties and methods to arrays.
//? prototype is a property available with all JavaScript objects.

// -----------------------------------------------

//! WARNING

//! You are not advised to change the prototype of an object that you do not control.
//! You should not change the prototype of built in JavaScript datatypes like:

//! Numbers
//! Strings
//! Arrays
//! Dates
//! Booleans
//! Function
//! Objects
//! Only change the prototype of your own objects.
