const names = ["James", "Sophie", "Megan", "Robert", "Alfred"];

names.sort();

console.log(names);

//* ["Alfred", "James", "Megan", "Robert", "Sophie"];

const names = ["James", "Sophie", "Megan", "Robert", "Alfred"];

const newNames = [...names];

newNames.sort();
newNames.reverse();

console.log(newNames);

//* ["Sophie", "Robert", "Megan", "James", "Alfred"];

//! SORTING NUMBERS
//! sorting numbers can produce incorrect results
//! "25" is bigger than "100", because "2" is bigger than "1"

//? IN ASCENDING ORDER
const nums = [200, 40, 60, 100];

const sortFunc = (a, b) => a - b;

nums.sort(sortFunc);

console.log(nums);

//* [40, 60, 100, 200];

//? IN DESCENDING ORDER
const nums = [200, 40, 60, 100];

const sortFunc = (a, b) => b - a;

nums.sort(sortFunc);

console.log(nums);

//* [200, 100, 60, 40];

// -----------------------------------------------

//? The sort() sorts the elements of an array.
//? The sort() overwrites the original array.
//? The sort() sorts the elements as strings in alphabetical and ascending order.
