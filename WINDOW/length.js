let length = history.length;

let lengthCondition =
  length < 2
    ? `you have visited ${length} site in this current browsing session`
    : `you have visited ${length} sites in this current browsing session`;

console.log(lengthCondition);

//* "you have visited 1 site in this current browsing session"

// -----------------------------------------------

//? The length property returns the number of URLs in the history list of the current browser window.
//? The property returns at least 1, because the list includes the current page.
//? This property is useful to find out how many pages the user has visited in the current browsing session.
