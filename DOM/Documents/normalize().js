//? HTML
//* <button onclick="addNode()">add text node</button>
//* <button onclick="normalizeText()">remove empty nodes</button>
//* <p id="output"></p>

//? JS
const output = document.getElementById("output");

const body = document.body;
body.onload = normalizeText();

function addNode() {
  const createdNode = document.createTextNode("one more. ");
  const body = document.body;
  body.appendChild(createdNode);
  output.innerHTML = body.childNodes.length;
}

function normalizeText() {
  document.normalize();
  const body = document.body;
  output.innerHTML = body.childNodes.length;
}

// -----------------------------------------------

//? The normalize() method removes empty text nodes, and joins adjacent text nodes.
