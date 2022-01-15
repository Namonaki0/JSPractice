const ages = [21, 33, 46, 88];

const checkAge = ages.find((age) => age > 30);

console.log(checkAge);

// -----------------------------------------------

//? The find() method returns the value of the first element that passes a test.
//? The find() method executes a function for each array element.
//? The find() method retuns undefined if no elements are found.
//? The find() method does not execute the function for empty elements.
//? The find() method does not change the original array.
