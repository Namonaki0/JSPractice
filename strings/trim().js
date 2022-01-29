const textWithSpaces = "     this is a sentence     ";
const trimmedText = textWithSpaces.trim();

console.log(trimmedText);

//* "this is a sentence"

const textWithSpaces = "     this is a sentence     ";

const trimmedText = textWithSpaces.replace(/^\s+|\s+$/gm, "");

console.log(trimmedText);

//* "this is a sentence"

// -----------------------------------------------

//? The trim() method removes whitespace from both sides of a string.
//? The trim() method does not change the original string.
