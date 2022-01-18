const names = ["Alfred", "James", "Sophie", "Megan", "Robert"];

const slicedArray = names.slice(1, 4);

console.log(slicedArray);

//* ["James", "Sophie", "Megan"];

const names = ["Alfred", "James", "Sophie", "Megan", "Robert"];

const slicedArray = names.slice(-4, -1);

console.log(slicedArray);

//* ["James", "Sophie", "Megan"];

//? array.slice(start, end);

// -----------------------------------------------

//? The slice() method returns selected elements in an array, as a new array.
//? The slice() method selects from a given start, up to a (not inclusive) given end.
//? The slice() method does not change the original array.
