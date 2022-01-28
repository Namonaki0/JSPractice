const text = "this is a slightly longer sentence";

const lastOccurence = text.lastIndexOf("sentence");

console.log(lastOccurence);

//* 35

const text = "this is a slightly longer sentence";

const lastOccurence = text.lastIndexOf("Sentence");

console.log(lastOccurence);

//* -1

// -----------------------------------------------

//? The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.
//? The lastIndexOf() method searches the string from the end to the beginning.
//? The lastIndexOf() method returns the index from the beginning (position 0).
//? The lastIndexOf() method returns -1 if the value is not found.
//? The lastIndexOf() method is case sensitive.
