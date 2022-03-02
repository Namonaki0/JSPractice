//? write() does NOT add a new line after each statement:

document.write("Hello World!");
document.write("This is a sentence");

//* Hello World!Have a nice day!

//? writeln() add a new line after each statement:

document.writeln("Hello World!");
document.writeln("This is a sentence");

//* Hello World!
//* Have a nice day!

// -----------------------------------------------

//? The writeln() method writes directly to an open (HTML) document stream.
//? The writeln() method is identical to the write() method, with the addition of writing a newline character after each statement.
//! The writeln() method deletes all existing HTML when used on a loaded document.
//! The writeln() method cannot be used in XHTML or XML.
