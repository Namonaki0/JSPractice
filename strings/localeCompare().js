const text1 = "123";
const text2 = "456";

const compare = text1.localeCompare(text2);

console.log(compare);

//* -1

const text1 = "efg";
const text2 = "abc";

const compare = text1.localeCompare(text2);

console.log(compare);

//* 1

const text1 = "abc";
const text2 = "abc";

const compare = text1.localeCompare(text2);

console.log(compare);

//* 0

// -----------------------------------------------

//? The localeCompare() method compares two strings in the current locale.
//? The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).
//? The current locale is based on the language settings of the browser.
