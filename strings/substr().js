const text = "Hello world";
const extraction = text.substr(0, 5);

console.log(extraction);

//* "Hello"

const text = "Hello world";
const cutText = text.substr(6);

console.log(cutText);

//* "world"

// -----------------------------------------------

//? The substr() method extracts a part of a string.
//? The substr() method begins at a specified position, and returns a specified number of characters.
//? The substr() method does not change the original string.
//? To extract characters from the end of the string, use a negative start position.
