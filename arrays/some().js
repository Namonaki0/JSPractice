const ages = [14, 22, 25, 34, 43];

const agesOver = ages.some((age) => age > 25);

console.log(agesOver);

//* true

const ages = [14, 22, 25, 34, 43];

const agesUnder = ages.some(agesFunc);

console.log(agesUnder);

function agesFunc(age) {
  return age < 10;
}

//* false

// -----------------------------------------------

//? The some() method checks if any array elements pass a test (provided as a function).
//? The some() method executes the function once for each array element:
//? If the function returns true, some() returns true and stops.
//? If the function returns false, some() returns false and stops.
//? The some() method does not execute the function for empty array elements.
//? The some() method does not change the original array.
