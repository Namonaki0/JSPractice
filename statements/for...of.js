const names = ["Kate", "Megan", "Ryan", "Steven"];
let text = "";

for (let name of names) {
  text += name + ", ";
}

text = text.replace(/,\s*$/, "");

console.log(text);

//* "Kate, Megan, Ryan, Steven"

// -----------------------------------------------

//? The for...of statements combo iterates (loops) over the values of any iterable.
//? The code block inside the loop is executed once for each value.
