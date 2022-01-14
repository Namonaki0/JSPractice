//? CONCAT - JOINING TWO ARRAYS

const array1 = ["Michael", "John", "Mark"];
const array2 = ["Jeff", "Suzan", "Megan"];

const result1 = array1.concat(array2);
console.log(result1);

//* ["Michael", "John", "Mark", "Jeff", "Suzan", "Megan"];

//? CONCAT - JOINING THREE ARRAYS

const array1 = ["Michael", "John", "Mark"];
const array2 = ["Jeff", "Suzan", "Megan"];
const array3 = ["Stephen"];

const result2 = array1.concat(array2, array3);
console.log(result2);

//* ["Michael", "John", "Mark", "Jeff", "Suzan", "Megan", "Stephen"];

//? SYNTAX
//? array1.concat(array2, array3, ..., arrayX)

// -----------------------------------------------

//? The concat() method concatenates (joins) two or more arrays.
//? The concat() method returns a new array, containing the joined arrays.
//? The concat() method does not change the existing arrays.
