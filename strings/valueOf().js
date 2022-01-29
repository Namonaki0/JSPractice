const text = "This is a long sentence";
const value = text.valueOf();

console.log(value);

//* "This is a long sentence"

//? SAME AS

const text = "This is a long sentence";
const value = text;

console.log(value);

//* "This is a long sentence"

// -----------------------------------------------

//? The valueOf() method returns the primitive value of a string.
//? The valueOf() method does not change the original string.
//? The valueOf() method can be used to convert a string object into a string.
