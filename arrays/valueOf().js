const names = ["Alfred", "James", "Sophie", "Megan", "Robert"];

const namesArray = names.valueOf();

console.log(namesArray);

//* ["Alfred", "James", "Sophie", "Megan", "Robert"];

//? SAME AS

const names = ["Alfred", "James", "Sophie", "Megan", "Robert"];

const namesArray = names;

console.log(namesArray);

//* ["Alfred", "James", "Sophie", "Megan", "Robert"];

// -----------------------------------------------

//? The valueOf() method returns the array itself.
//? The valueOf() method does not change the original array.
