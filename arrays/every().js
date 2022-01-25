const ages = [12, 62, 23, 35, 19, 43];

const checkAge = ages.every((age) => age > 10);

console.log(checkAge);

//* true

const ages = [12, 62, 23, 35, 19, 43];

console.log(ages.every(checkingAge));

function checkingAge(age) {
  return age > 10;
}

//* true

//? SYNTAX
//? array.every(function(currentValue, [index], [arr]), [thisValue])

// -----------------------------------------------

//? The every() method executes a function for each array element.
//? The every() method returns true if the function returns true for all elements.
//? The every() method returns false if the function returns false for one element.
//? The every() method does not execute the function for empty elements.
//? The every() method does not change the original array
