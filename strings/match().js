//? STRING
const text = "This is a longer sentence and IS definitely tedious to read";

const find = text.match("is");

console.log(find);

//* ["is"]

//? REGULAR EXPRESSION
const text = "This is a longer sentence and IS definitely tedious to read";

const result = text.match(/is/);

console.log(result);

//* ["is"]

//? GLOBAL SEARCH
const text = "This is a longer sentence and IS definitely tedious to read";

const result = text.match(/is/g);

console.log(result);

//* ["is", "is"]

//? CASE-INSENSITIVE GLOBAL SEARCH
const text = "This is a longer sentence and IS definitely tedious to read";

const result = text.match(/is/gi);

console.log(result);

//* ["is", "is", "IS"]

// -----------------------------------------------

//? The match() method matches a string against a regular expression **
//? The match() method returns an array with the matches.
//? The match() method returns null if no match is found.
