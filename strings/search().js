const text = "Jack is going to space with his best friend Tom";
const locate = text.search("Tom");

console.log(locate);

//* 44

const text = "Jack is going to space with his best friend Tom";
const locate = text.search(/is/gi);

console.log(locate);

//* 5

// -----------------------------------------------

//? The search() method matches a string against a regular expression **
//? The search() method returns the index (position) of the first match.
//? The search() method returns -1 if no match is found.
//? The search() method is case sensitive.
