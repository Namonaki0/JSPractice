const text = "Hello world";
const extraction = text.substring(0, 5);

console.log(extraction);

//* "Hello"

const text = "Hello world";
const cutText = text.substring(6);

console.log(cutText);

//* "world"

// -----------------------------------------------

//? The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
//? The substring() method extracts characters from start to end (excusive).
//? The substring() method does not change the original string.
//? If start is greater than end, arguments are swapped: (1, 4) = (4, 1).
//? Start or end less than 0 are treated as 0.
