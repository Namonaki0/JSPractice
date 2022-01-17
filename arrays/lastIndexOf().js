const fruits = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
const lastFruitIndex = fruits.lastIndexOf("Apple");

console.log(lastFruitIndex);

//* 5

const fruits = ["Apple", "Orange", "Apple", "Mango"];
const orangeIndex = fruits.lastIndexOf("Orange");

console.log(orangeIndex);

//* 1

//? array.lastIndexOf(item, start);

// -----------------------------------------------

//? The lastIndexOf() method returns the last index (position) of a specified value.
//? The lastIndexOf() method returns -1 if the value is not found.
//? The lastIndexOf() starts at a specified index and searches from right to left.
//? By default the search starts at the last element and ends at the first.
//? Negative start values counts from the last element (but still searches from right to left).
