//? HTML
//* <div id="output"></div>

//* <button onclick="removeEvent()">remove</button>
//* <button onclick="addEvent()">continue</button>

//? JS
const output = document.getElementById("output");

document.onload = addEvent();

function addEvent() {
  document.addEventListener("mousemove", randomNum);
}

function removeEvent() {
  document.removeEventListener("mousemove", randomNum);
}

function randomNum() {
  output.innerHTML = Math.random();
}

//* outputs a random number on mousemove until remove button is clicked

// -----------------------------------------------

//? The removeEventListener() method removes an event handler from a document.
