const names = ["Sarah", "Stepehn", "Mark", "Lewis"];

const isArray = Array.isArray(names);

console.log(isArray);

//* true

const people = {
  person1: "Sarah",
  person2: "Steve",
  person3: "Oprah",
  person4: "Pete",
};

const isNotAnArray = Array.isArray(people);

console.log(isNotAnArray);

//* false

//? true if the object is an array, otherwise false.
