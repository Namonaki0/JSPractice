const text = "this is a short sentence";

const indexOfWord = text.indexOf("short");

console.log(indexOfWord);

//* 10

const text = "this is a short sentence";

const indexOfLetter = text.indexOf("a");

console.log(indexOfLetter);

//* 8

const text = "this is a short sentence";

const indexOfWordWithPosition = text.indexOf("s", 12);

console.log(indexOfWordWithPosition);

//* 16

// -----------------------------------------------

//? The indexOf() method returns the position of the first occurrence of a value in a string.
//? The indexOf() method returns -1 if the value is not found.
//? The indexOf() method is case sensitive.
