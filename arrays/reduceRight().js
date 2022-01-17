const nums = [20, 10, 5, 200];

const subtractNums = nums.reduceRight(subFunc);

console.log(subtractNums);

function subFunc(total, num) {
  return total - num;
}

//* 165

// -----------------------------------------------

//? The reduceRight() method executes a reducer function for each array element.
//? The reduceRight() method works from right to left.
//? The reduceRight() method returns a single value: the function's accumulated result.
//? The reduceRight() method does not execute the function for empty elements.
