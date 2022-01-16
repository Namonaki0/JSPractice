const names = ["Sarah", "Stepehn", "Mark", "Lewis"];

let text = "";

names.forEach(namesFunction);

document.body.innerText = text;

function namesFunction(name, index) {
  text += index + ":" + name + "<br />";
}

//* 0:Sarah
//* 1:Stephen
//* 2:Mark
//* 3:Lewis

const amounts = [100, 430, 509, 866, 960];

amounts.forEach((amount) => console.log(amount * 10));

//* 1000
//* 4300
//* 5090
//* 8660
//* 9600

// -----------------------------------------------

//? The forEach() method calls a function for each element in an array.
//? The forEach() method is not executed for empty elements.
