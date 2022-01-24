const person = {
  name: "Kurt",
  country: "USA",
  age: 42,
};

let text = "";

for (let x in person) {
  text += person[x] + ", ";
}

text = text.replace(/,\s*$/, "");

console.log(text);

//* "Kurt, USA, 42";

// -----------------------------------------------

//? The for...in statements combo iterates (loops) over the properties of an object.
//? The code block inside the loop is executed once for each property.
