const text = "This Is A Long Sentence";
const upperCase = text.toLocaleUpperCase();

console.log(upperCase);

//* "THIS IS A LONG SENTENCE"

// -----------------------------------------------

//? The toLocaleUpperCase() method converts a string to uppercase letters, using current locale.
//? The locale is based on the language settings of the browser.
//? The toLocaleUpperCase() method does not change the original string.
//? The toLocaleUpperCase() returns the same result as toUpperCase(), except for locales that conflict with the regular Unicode case mappings (such as Turkish).
