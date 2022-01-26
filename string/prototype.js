function employee(name, country, id) {
  this.name = name;
  this.country = country;
  this.id = id;
}

employee.prototype.company = "Universal";

const employee1 = new employee("Mark", "UK", 33322);

const { name, country, id, company } = employee1;

console.log(`${name} works at ${company}`);

//* "Mark works at Universal"
