//? HTML
//* <p>text here</p>
//* <p>some more text here</p>

//* <button onclick="change()">change content</button>

//? JS
function change() {
  document.open();
  document.write("change content");
  document.close();
}

//* change content ----> is written on page replacing previous content

// -----------------------------------------------

//? All existing document content will be cleared.
