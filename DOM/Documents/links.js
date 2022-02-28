//? HTML
{
  /* <a href="#link1">link1</a>
<a href="#link2">link 2</a>
<a href="#link3">link 3</a>
<a href="#link4">link 4</a> */
}

//? JS
const linkLength = document.links.length;
console.log(linkLength);

//* 4

const linkHref = document.links[1].href;
console.log(linkHref);

//* https://cdpn.io/cpe/boomboom/index.html?editors=1111&key=index.html-35cbfbc6-0e05-dda6-dbc3-e6d587c11e27#link2

const linkUrl = document.links.item(3).href;
console.log(linkUrl);

//* https://cdpn.io/cpe/boomboom/index.html?editors=1111&key=index.html-927a96c5-840f-4d00-ff84-ed0918220e43#link4

// -----------------------------------------------

//? The links property returns a collection of all links in the document.
//? The forms property returns an HTMLCollection.
//? The links property is read only.
//? The links in the collection represents <a> and <area> elements with a href attribute.
