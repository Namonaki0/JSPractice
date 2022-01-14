const names = ["Michael", "John", "Mark", "Jeff", "Suzan", "Megan"];
const entries = names.entries();

for (let entry of entries) {
  console.log(entry);
}

//* [0,"Michael"]
//* [1,"John"]
//* [2,"Mark"]
//* [3,"Jeff"]
//* [4,"Suzan"]
//* [5,"Megan"]

// -----------------------------------------------

//? The entries() method returns an Array Iterator object with key/value pairs:
//? The entries() method does not change the original array.
