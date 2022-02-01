//? HTML
<a
  id="link"
  href="https://www.google.com/search?q=webdev&sxsrf=APq-WBvxYkXoDmoqfi3KlbWOgG75sGagoQ%3A1643758906369&source=hp&ei=OsX5YaTeFMjUgQaa8beQBw&iflsig=AHkkrS4AAAAAYfnTSsH370-8826fOFbksJAmPtGA_4l_&ved=0ahUKEwik49WN19_1AhVIasAKHZr4DXIQ4dUDCAo&uact=5&oq=webdev&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgcIABCABBAKMgcIABCABBAKMgUIABCABDIFCAAQgAQyCwguEIAEEMcBENEDMgUIABCABDoECCMQJzoFCAAQkQI6CwguEIAEELEDEIMBOgsIABCABBCxAxCDAToOCC4QgAQQsQMQxwEQowI6CAgAEIAEELEDOg4ILhCABBCxAxDHARDRAzoICC4QgAQQsQM6CwguEIAEEMcBEK8BUABY8gdgiQtoAHAAeACAAYMBiAGMBZIBAzIuNJgBAKABAQ&sclient=gws-wiz"
></a>;

//? JS
const link = document.querySelector("#link");

const searchQuery = link.search;

console.log(searchQuery);

//* "?q=webdev&sxsrf=APq-WBvxYkXoDmoqfi3KlbWOgG75sGagoQ%3A1643758906369&source=hp&ei=OsX5YaTeFMjUgQaa8beQBw&iflsig=AHkkrS4AAAAAYfnTSsH370-8826fOFbksJAmPtGA_4l_&ved=0ahUKEwik49WN19_1AhVIasAKHZr4DXIQ4dUDCAo&uact=5&oq=webdev&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgcIABCABBAKMgcIABCABBAKMgUIABCABDIFCAAQgAQyCwguEIAEEMcBENEDMgUIABCABDoECCMQJzoFCAAQkQI6CwguEIAEELEDEIMBOgsIABCABBCxAxCDAToOCC4QgAQQsQMQxwEQowI6CAgAEIAEELEDOg4ILhCABBCxAxDHARDRAzoICC4QgAQQsQM6CwguEIAEEMcBEK8BUABY8gdgiQtoAHAAeACAAYMBiAGMBZIBAzIuNJgBAKABAQ&sclient=gws-wiz";

// -----------------------------------------------

//? The search property returns the querystring part of a URL, including the question mark (?).
//? The search property can also be used to set the querystring.
