const names = ["Andy", "Mandy", "Joseph", "Kurt"];

const arrayToString = names.join();

console.log(arrayToString);

//* "Andy,Mandy,Joseph,Kurt"

const arrayToString = names.join(", "); //? ---> change separator

console.log(arrayToString);

//* "Andy, Mandy, Joseph, Kurt"

const arrayToString = names.join(" and "); //? ---> change separator

console.log(arrayToString);

//* "Andy and Mandy and Joseph and Kurt"

//? The array values, separated by the specified separator.

// -----------------------------------------------

//? The join() method returns an array as a string.
//? The join() method does not change the original array.
//? Any separator can be specified. The default is comma (,).
