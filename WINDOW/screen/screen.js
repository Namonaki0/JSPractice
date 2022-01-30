let availableHeight = screen.availHeight;
let availableWidth = screen.availWidth;
let screenHeight = screen.height;
let screenWidth = screen.width;
let screenColorDepth = screen.colorDepth;
let screenPixelDepth = screen.pixelDepth;

console.log(`
  avaliable screen width: ${availableWidth}px,
  avaliable screen height: ${availableHeight}px,
  total screen width: ${screenWidth}px,
  total screen height: ${screenHeight}px,
  screen color depth: ${screenColorDepth} bits,
  screen pixel depth: ${screenPixelDepth} bits
`);

//* "
//*   avaliable screen width: 1280px,
//*   avaliable screen height: 680px,
//*   total screen width: 1280px,
//*   total screen height: 720px,
//*   screen color depth: 24 bits,
//*   screen pixel depth: 24 bits
//* "

// -----------------------------------------------

//? The availHeight property returns the height of the user's screen.
//? The availHeight property returns the height in pixels.
//? The availHeight property returns the height minus interface features like the Windows Taskbar.

//? The availWidth property returns the width of the user's screen.
//? The availWidth property returns the width in pixels.
//? The availWidth property returns the width minus interface features like the Windows Taskbar.
//? The availWidth property is read-only.

//? The height property returns the total height of the user's screen.
//? The height property returns the height in pixels.
//? The height property is read only.

//? The width property returns the total width of the user's screen.
//? The width property returns width in pixels.
//? The width property is read-only.

//? The colorDepth property returns the screen's color depth.
//? The colorDepth property returns the depth in bits per pixel.
//? The colorDepth property is read-only.

//? The pixelDepth property returns the screen's color depth.
//? The pixelDepth property returns the color depth in bits per pixel.
//? The pixelDepth property is read-only.
