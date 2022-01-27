const text = "Hello world";
const slicedText = text.slice(6);

console.log(slicedText);

//* "world"

const text = "Hello world once again";
const slicedSentence = text.slice(6, 11);

console.log(slicedSentence);

//* "world"

// -----------------------------------------------

//? The slice() method extracts a part of a string.
//? The slice() method returns the extracted part in a new string.
//? The slice() method does not change the original string.
//? The start and end parameters specifies the part of the string to extract.
//? The first position is 0, the second is 1, ...
//? A negative number selects from the end of the string.
