const text = "John moved out of NY and now lives in Seattle";
const newString = text.replace("Seattle", "his car");

console.log(newString);

//* "John moved out of NY and now lives in his car"

const text = "This sentence is so boring, and when I mean boring I mean BORING";

const replaceWords = text.replace(/boring/gi, "great");

console.log(replaceWords);

//* "This sentence is so great, and when I mean great I mean great"

// -----------------------------------------------

//? The replace() method searches a string for a value or a regular expression.
//? The replace() method returns a new string with the value(s) replaced.
//? The replace() method does not change the original string.
