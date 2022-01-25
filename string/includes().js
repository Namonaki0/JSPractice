const text = "This is an example sentence";

const includedInSentence = text.includes("example");

console.log(includedInSentence);

//* true

//? string.includes(searchvalue, [start]);

const text = "This is an example sentence";

const includedInSentence = text.includes("example", 15);

console.log(includedInSentence);

//* false

// -----------------------------------------------

//? The includes() method returns true if a string contains a specified string.
//? Otherwise it returns false.
//? The includes() method is case sensitive.
