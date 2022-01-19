class Shows {
  constructor(comedies) {
    this.comedies = comedies;
  }
}

const new_series = new Shows("Arrested Development");

console.log(new_series);

// -----------------------------------------------

//? The constructor() method is a special method for creating and initializing objects created within a class.
//? The constructor() method is called automatically when a class is initiated, and it has to have the exact name "constructor", in fact, if you do not have a constructor method, JavaScript will add an invisible and empty constructor method.
//? Note: A class cannot have more than one constructor() method. This will throw a SyntaxError.
//? You can use the super() method to call the constructor of a parent class.
//? The super() method refers to the parent class.
//? By calling the super() method in the constructor method, we call the parent's constructor method and get access to the parent's properties and methods.
