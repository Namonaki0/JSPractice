const example1 = parseInt("30 years");
const example2 = parseInt("   60   ");
const example3 = parseInt("50.00");
const example4 = parseInt("H90");
const example5 = parseInt("10YZS");

console.log(example1); //* 30
console.log(example2); //* 60
console.log(example3); //* 50
console.log(example4); //* NaN
console.log(example5); //* 10

//? parseInt(string, [radix]); --> radix parameter

const example1 = parseInt("30 years", 8); //* 24
const example2 = parseInt("   60   ", 10); //* 60
const example3 = parseInt("50.00", 16); //* 80
const example4 = parseInt("H90");
const example5 = parseInt("10YZS", 8); //* 8

// -----------------------------------------------

//? The parseInt method parses a value as a string and returns the first integer.
//? A radix parameter specifies the number system to use:
//? 2 = binary, 8 = octal, 10 = decimal, 16 = hexadecimal.
//? If radix is omitted, JavaScript assumes radix 10. If the value begins with "0x", JavaScript assumes radix 16.

//? If the first character cannot be converted, NaN is returned.
//? Leading and trailing spaces are ignored.
//? Only the first integer found is returned.
