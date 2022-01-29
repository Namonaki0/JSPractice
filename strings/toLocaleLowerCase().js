const text = "This Is A Long Sentence";
const lowerCase = text.toLocaleLowerCase();

console.log(lowerCase);

//* "this is a long sentence"

// -----------------------------------------------

//? The toLocaleLowerCase() method converts a string to lowercase letters, using current locale.
//? The locale is based on the language settings of the browser.
//? The toLocaleLowerCase() method does not change the original string.
//? The toLocaleLowerCase() returns the same result as toLowerCase(), except for locales that conflict with the regular Unicode case mappings (such as Turkish).
