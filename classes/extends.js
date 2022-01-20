class Car {
  constructor(brand_name, release_date) {
    this.name = brand_name;
    this.date = release_date;
  }
  welcome_message() {
    return `welcome to the new version of ${this.name} released in ${this.date}`;
  }
}

class Makers extends Car {
  constructor(makers_name, brand_name) {
    super(brand_name);
    this.makers_name = makers_name;
  }
  makers_welcome_message() {
    return `${this.name} was designed and crafted by ${this.makers_name}`;
  }
}

const { name, date } = Car;
const { makers_name, brand_name } = Makers;

const makersName = new Makers("Honda", "Honda Civic");
const makersMessage = makersName.makers_welcome_message();
console.log(makersMessage);

//* "Honda Civic was designed and crafted by Honda"

// -----------------------------------------------

//? The extends keyword is used to create a child class of another class (parent).
//? The child class inherits all the methods from another class.
//? Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.
//? Note: From the example above; The super() method refers to the parent class. By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
