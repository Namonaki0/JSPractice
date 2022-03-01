//? HTML
//* <div id="output"></div>
//* <p>text here</p>
//* <p>text here as well</p>

//? JS
const output = document.querySelector("#output");
output.textContent = document.scripts.length;

// -----------------------------------------------

//? The scripts property returns a collection of all <script> elements in the document.
//? The scripts property returns an HTMLCollection.
//? The scripts property is read-only.
