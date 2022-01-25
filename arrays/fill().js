const fruits = ["bananas", "pears", "grapes", "apples"];

fruits.fill("mango");

//* ["mango", "mango", "mango", "mango"];

fruits.fill("mango", 2, 4);

//* ["bananas", "pears", "mango", "mango"];

//? SYNTAX
//? array.fill(value, [start], [end]);

// -----------------------------------------------

//? The fill() method fills specified elements in an array with a value.
//? The fill() method overwrites the original array.
//? Start and end position can be specified. If not, all elements will be filled.
