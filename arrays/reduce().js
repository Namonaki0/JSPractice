const nums = [20, 123, 455];

const reduceNums = nums.reduce(myFunc, 0);

console.log(reduceNums);

function myFunc(total, num) {
  return total + num;
}

//* 598

const numbers = [15.5, 2.3, 1.1, 4.7];

const roundedNums = numbers.reduce(myFunc, 0);

console.log(roundedNums);

function myFunc(total, num) {
  return total + Math.round(num);
}

//* 24

// -----------------------------------------------

//? The reduce() method executes a reducer function for array element.
//? The reduce() method returns a single value: the function's accumulated result.
//? The reduce() method does not execute the function for empty array elements.
//? The reduce() method does not change the original array.
