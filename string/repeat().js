const text = "Say hello";
const repeatText = text.repeat(4);

const text = "Say hello, ";
const repeatText = text.repeat(4);
const replace = repeatText.replace(/,\s*$/, "");
const lower = replace.toLowerCase();

console.log(lower);

//* "say hello, say hello, say hello, say hello"

// -----------------------------------------------

//? The repeat() method returns a string with a number of copies of a string.
//? The repeat() method returns a new string.
//? The repeat() method does not change the original string.
