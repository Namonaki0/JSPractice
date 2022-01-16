const names = ["Andy", "Mandy", "Joseph", "Kurt"];

const isIncluded = names.includes("Joseph");

console.log(isIncluded);

//* true

const names = ["Andy", "Mandy", "Joseph", "Kurt"];

const isNotIncluded = names.includes("Mandy", 2);

console.log(isNotIncluded);

//* false

const names = ["Andy", "Mandy", "Joseph", "Kurt"];

const nameNotIncluded = names.includes("Andrew");

console.log(nameNotIncluded);

//* false

//? array.includes(element, [start]);
//? true if the value is found, otherwise false.

// -----------------------------------------------
//? The includes() method returns true if an array contains a specified value.
//? The includes() method returns false if the value is not found.
//? The includes() method is case sensitive.
