const example1 = parseFloat("30 years");
const example2 = parseFloat("   60   ");
const example3 = parseFloat("50.00");
const example4 = parseFloat("H90");
const example5 = parseFloat("10YZS");

console.log(example1); //* 30
console.log(example2); //* 60
console.log(example3); //* 50
console.log(example4); //* NaN
console.log(example5); //* 10

// -----------------------------------------------

//? The parseFloat() method parses a value as a string and returns the first number.
//? If the first character cannot be converted, NaN is returned.
//? Leading and trailing spaces are ignored.
//? Only the first number found is returned.
