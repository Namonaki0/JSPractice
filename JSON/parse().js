let object = JSON.parse('{"name":"Michael", "age": "20"}');

const { name, age } = object;

console.log(`${name} is ${age} years old.`);

//* "Michael is 20 years old."

//? JSON.parse(string, [function]) ---> reviver function

const text = '{"name": "Michael", "age": "20"}';

let obj = JSON.parse(text, function (key, value) {
  if (key == "name") {
    return value.toUpperCase();
  } else {
    return value;
  }
});

const { name, age } = obj;

console.log(`name: ${name}, age: ${age}`);

//* "name: MICHAEL, age: 20"

// -----------------------------------------------

//? The JSON.parse() method parses a string and returns a JavaScript object.
//? The string has to be written in JSON format.
//? The JSON.parse() method can optionally transform the result with a function.
