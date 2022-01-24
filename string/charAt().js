const text = "This is a sentence";
const firstChar = text.charAt(0);
const charSlice = text.slice(0, 1).toLowerCase();

const result = text.replace(firstChar, charSlice);

console.log(result);

//* "this is a sentence"

// -----------------------------------------------

//? The charAt() method returns the character at a specified index (position) in a string.
//? The index of the first character is 0, the second 1, ...
//? The index of the last character is string length - 1 (See Examples below).
//? See also the charCodeAt() method.
