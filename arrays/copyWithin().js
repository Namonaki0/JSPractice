const fruits = ["orange", "apple", "mango", "banana"];
const replaceElement1 = fruits.copyWithin(2, 1);
console.log(replaceElement1);

//* ["orange", "apple", "apple", "mango"];

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
const replaceElement2 = fruits.copyWithin(2, 0, 2);
console.log(replaceElement2);

//* ["Banana", "Orange", "Banana", "Orange", "Kiwi"];

//? SYNTAX
//? array.copyWithin(target, start, end);

// -----------------------------------------------

//? The copyWithin() method copies array elements to another position in the array.
//? The copyWithin() method overwrites the existing values.
//? The copyWithin() method does not add items to the array.
