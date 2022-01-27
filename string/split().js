const text = "Hello from the other side";
const splitText = text.split(" ");

console.log(splitText);

//* ["Hello", "from", "the", "other", "side"];

const array = splitText[4];

console.log(array);

//* "side"

const text = "Hello world";
const splitText = text.split("");

console.log(splitText);

//* ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"];

const text = "Hello from the other side";
const splitText = text.split(" ", 2);

console.log(splitText);

//* ["Hello", "from"];

// -----------------------------------------------

//? The split() method splits a string into an array of substrings.
//? The split() method returns the new array.
//? The split() method does not change the original string.
//? If (" ") is used as separator, the string is split between words.
