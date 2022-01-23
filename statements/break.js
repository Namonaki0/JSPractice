let result = "";

for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  result += i;
  console.log(result);
}

//* "01234"

let result = "";
i = 0;

while (i < 10) {
  i++;
  result += i;
  if (i === 8) break;
  console.log(result);
}

//* "1234567";

const flavours = ["blueberry", "pineapple", "strawberry", "banana"];
let text = "";

list: {
  text += flavours[0] + ", ";
  text += flavours[1] + ", ";
  text += flavours[2] + ", ";
  break list;
  text += flavours[3];
}

console.log(text);

//* "blueberry, pineapple, strawberry, ";

// -----------------------------------------------

//? The break statement breaks out of a switch or a loop.
//? In a switch, it breaks out of the switch block. This stops the execution of more code inside the switch.
//? In in a loop, it breaks out of the loop and continues executing the code after the loop (if any).
//? The break statement can use a label reference, to break out of any JavaScript code block (see "More Examples" below).
//? Without a label, break can only be used inside a loop or a switch.
