const uri = "https://www.andreferreiradev.com/";

const encoded = encodeURIComponent(uri);
console.log(encoded);

//* "https%3A%2F%2Fwww.andreferreiradev.com%2F"

const decoded = decodeURIComponent(encoded);
console.log(decoded);

//* "https://www.andreferreiradev.com/"

// -----------------------------------------------

//? The encodeURIComponent() method encodes a URI component.
//? The encodeURIComponent() method encodes special characters including: , / ? : @ & = + $ #
