const ages = [32, 66, 21, 18, 5];

console.log(ages.filter(checkAge));

function checkAge(age) {
  return age < 10;
}

//* [5]

const ages = [32, 66, 21, 18, 5];

const filteredAge = ages.filter((age) => age > 10);

console.log(filteredAge);

//* [32, 66, 21, 18];

//? array.filter(function(currentValue, [index], [arr]), [thisValue])

// -----------------------------------------------

//? The filter() method creates a new array filled with elements that pass a test provided by a function.
//? The filter() method does not execute the function for empty elements.
//? The filter() method does not change the original array.
