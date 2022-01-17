//? Array Iterator object, containing the keys of the array:

let text = "";

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const arrayKeys = fruits.keys();

for (let key of arrayKeys) {
  text += key + "<br />";
  document.body.innerHTML = text;
}

//* 0
//* 1
//* 2
//* 3

//? Built in Object.keys() Method:

let text = "";

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const arrayKeys = Object.keys(fruits);

for (let key of arrayKeys) {
  text += key + "<br />";
  document.body.innerHTML = text;
}

//* 0
//* 1
//* 2
//* 3

//? An Array Iterator object containing the keys of an array.

// -----------------------------------------------

//? The keys() method returns an Array Iterator object with the keys of an array.
//? The keys() method does not change the original array.
