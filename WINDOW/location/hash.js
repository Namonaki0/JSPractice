//? HTML
//* <a id="link" href="www.google.com/#some_params_in_here">this is a link</a>;

//? JS
const linkId = document.querySelector("#link");

console.log(linkId.hash);

//* "#some_params_in_here"

// -----------------------------------------------

//? The location.hash property sets or returns the anchor part of a URL, including the hash sign (#)
