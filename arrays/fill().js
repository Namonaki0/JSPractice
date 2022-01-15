const fruits = ["bananas", "pears", "grapes", "apples"];

fruits.fill("mango");

//* ["mango", "mango", "mango", "mango"];

fruits.fill("mango", 2, 4);

//* ["bananas", "pears", "mango", "mango"];

//? SYNTAX
//? array.fill(value, [start], [end]);
