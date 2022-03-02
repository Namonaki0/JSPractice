//? HTML
//* <title>My document title</title>
//* <div id="output"></div>
//* <p>text here</p>

//? JS
const output = document.querySelector("#output");
output.textContent = document.title;

//* My document title

//? HTML
//* <title>My document title</title>
//* <div id="output"></div>
//* <p>text here</p>

//? JS
const output = document.querySelector("#output");
document.title = "A new wave";
output.textContent = document.title;

//* A new wave

// -----------------------------------------------

//? The title property sets or returns the title of the document.
