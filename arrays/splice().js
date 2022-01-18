//? ADDING ELEMENTS
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(1, 0, "Blueberry", "Kiwi");

console.log(fruits);

//* ["Banana", "Blueberry", "Kiwi", "Orange", "Apple", "Mango"];

//? REMOVING ELEMENTS
const fruits = ["Banana", "Blueberry", "Kiwi", "Orange", "Apple", "Mango"];

fruits.splice(3, 2);

console.log(fruits);

//* ["Banana", "Blueberry", "Kiwi", "Mango"];

//? ADDING AND REMOVING ELEMENTS
const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(2, 1, "Strawberry", "Dorian");

console.log(fruits);

//* ["Banana", "Orange", "Strawberry", "Dorian", "Mango"];

// -----------------------------------------------

//? The splice() method adds and/or removes array elements.
//? The splice() method overwrites the original array.
