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
//? true if all elements pass the test, otherwise false
