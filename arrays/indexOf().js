const names = ["Andy", "Mandy", "Joseph", "Kurt"];

const nameIndex = names.indexOf("Joseph");

console.log(nameIndex);

//* 2

const names = ["Andy", "Mandy", "Joseph", "Kurt"];

const indexNotFound = names.indexOf("Mandy", 2);

console.log(indexNotFound);

//* -1

//? array.indexOf(item, [start]);

// -----------------------------------------------
//? The indexOf() method returns the first index (position) of a specified value.
//? The indexOf() method returns -1 if the value is not found.
//? The indexOf() method starts at a specified index and searches from left to right.
//? By default the search starts at the first element and ends at the last.
//? Negative start values counts from the last element (but still searches from right to left).
