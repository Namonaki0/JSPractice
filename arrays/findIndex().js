const amounts = [100, 430, 509, 866, 960];

const amountIndex = amounts.findIndex((amount) => amount > 120);

console.log(amountIndex);

//* 1

const amounts = [100, 430, 509, 866, 960];

console.log(amounts.findIndex(amountIndex));

function amountIndex(amount) {
  return amount > 450;
}

//* 2

// -----------------------------------------------

//? The findIndex() method executes a function for each array element.
//? The findIndex() method returns the index (position) of the first element that passes a test.
//? The findIndex() method returns -1 if no match is found.
//? The findIndex() method does not execute the function for empty array elements.
//? The findIndex() method does not change the original array.
