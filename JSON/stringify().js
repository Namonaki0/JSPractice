const object = { name: "Michael", age: "20" };

const objectString = JSON.stringify(object);

console.log(objectString);

//* "{'name':'Michael','age':'20'}"

//? JSON.stringify(obj, [replacer], [space]); --> replacer function

const text = JSON.stringify(object, function (key, value) {
  if (key == "name") {
    return value.toUpperCase();
  } else {
    return value;
  }
});

console.log(text);

//* "{'name':'MICHAEL','age':'20'}"

// -----------------------------------------------

//? The JSON.stringify() method converts JavaScript objects into strings.
//? When sending data to a web server the data has to be a string.
