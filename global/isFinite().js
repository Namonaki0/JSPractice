const result = isFinite("555");

console.log(result);

//* true

const result = isFinite(555);

console.log(result);

//* true

const result = isFinite("string");

console.log(result);

//* false

const result = Number.isFinite("555");

console.log(result);

//* false

// -----------------------------------------------

//? isFinite() returns true if a value is a finite number.
//? Number.isFinite() returns true if a number is a finite number.
//? isFinite() converts the value to a number before testing it.
