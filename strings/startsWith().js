const text = "Hello world. This is a sentence";
const start = text.startsWith("Hello");
console.log(start);

//* true

const text = "Hello world. This is a sentence";
const start = text.startsWith("hello");
console.log(start);

//* false

const text = "Hello world. This is a sentence";
const start = text.startsWith("world", 8);
console.log(start);

//* false

// -----------------------------------------------

//? The startsWith() method returns true if a string starts with a specified string.
//? Otherwise it returns false.
//? The startsWith() method is case sensitive.
//? See also the endsWith() method.
