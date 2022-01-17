const nums = [4, 9, 16, 25];
const numsSqrt = nums.map(Math.sqrt);

console.log(numsSqrt);

//* [2, 3, 4, 5];

const nums = [20, 30, 40, 50, 60];

const numsMult = nums.map(multFunction);

console.log(numsMult);

function multFunction(num) {
  return num * 10;
}

//* [200, 300, 400, 500, 600];

const nums = [20, 30, 40, 50, 60];

const numsMult = nums.map((num) => num * 10);

console.log(numsMult);

//* [200, 300, 400, 500, 600];

// -----------------------------------------------

//? map() creates a new array from calling a function for every array element.
//? map() calls a function once for each element in an array.
//? map() does not execute the function for empty elements.
//? map() does not change the original array.
