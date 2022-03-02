`use strict`;

// 4 Fundamental Principles of Object Oriented Programming

// Abstraction, Encapsulation, Inheritance, Polymorphism

// OOP in JavaScript

// Prototype - Objects (objects are linked to the Prototypes)
// Prototypes - Contains Properties and Methods
// Objects - Can access the properties and methods from the linked prototype

// Prototypal Inheritance: The prototype contains methods that are accessible to all the objects linked to that prototype

// 3 Ways of Implementing Prototypal Inheritance in JavaScript
// 1. Constructor Functions, 2. ES6 Classes, 3. Object.create()

// * Constructor Functions - creating objects from a function(Eg: built-in objects like Arrays, Maps, Sets)
// * ES6 Classes - Modern Way (Alternative to constructor function) (works exactly like constructor functions)
// * Object.create - Most easier way to link object to a prototype

// Constructor Function and the new Operator
// Constructor Function - build an object using a function

// Creating a Constructor function for a person. Constructor function variable name starts with the capital letter
// Arrow function doesn't work in constructor, only function declaration & Function Expression works

const Person = function (firstName, birthYear) {
  console.log(this); // Result - Person {}
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Calling a Constructor Function

const john = new Person("john", 1990);
console.log(john); // Result - Person {firstName: 'john', birthYear: 1990}

const max = new Person("max", 1991);
console.log(max); // Result - Person {firstName: 'max', birthYear: 1991}

// Behind Scenes
// 1. New object {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

// To check whether a object is an Instance
console.log(john instanceof Person); // Result - True
console.log(max instanceof Person); // Result - True

// Prototypes
console.log(Person.prototype); // Result - {constructor: ƒ}

// Adding/Setting the new property using Prototype
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

console.log(Person.prototype); // Result - {calcAge: ƒ, constructor: ƒ}

// Calculating the Age

john.calcAge(); // Result - 32 (2022 - 1990)
max.calcAge(); // Result - 31 (2022 - 1991)

// The above code works because any object has access to the methods and properties of its prototype
// Prototype of john and max is Person.prototype

// To check the Prototype of an Object
console.log(john.__proto__); // Result - {calcAge: ƒ, constructor: ƒ}
console.log(max.__proto__); // Result - {calcAge: ƒ, constructor: ƒ}
console.log(john.__proto__ === Person.prototype); // Result - True
console.log(max.__proto__ === Person.prototype); // Result - True
console.log(Person.prototype.isPrototypeOf(john)); // Result - True
console.log(Person.prototype.isPrototypeOf(max)); // Result - True
console.log(Person.prototype.isPrototypeOf(Person)); // Result -False

// To set the properties on the Prototype
Person.prototype.species = "Human Being";
console.log(Person.prototype); // Result - {species: 'Human Being', calcAge: ƒ, constructor: ƒ}
console.log(john.species, max.species); // Result - Human Being Human Being

// To check whether object has their own properties
console.log(john.hasOwnProperty("firstName")); // Result - True
console.log(john.hasOwnProperty("birthYear")); // Result - True
console.log(john.hasOwnProperty("calcAge")); // Result -False
console.log(john.hasOwnProperty("species")); // Result -False

console.log(max.hasOwnProperty("firstName")); // Result - True
console.log(max.hasOwnProperty("birthYear")); // Result - True
console.log(max.hasOwnProperty("calcAge")); // Result -False
console.log(max.hasOwnProperty("species")); // Result -False

// Prototypal Inheritance on Built-in objects
console.log(john.__proto__); // Result - {species: 'Human Being', calcAge: ƒ, constructor: ƒ}
console.log(john.__proto__.__proto__); // this is Object.prototype (top of prototype chain)
console.log(john.__proto__.__proto__.__proto__); // Result - null

console.dir(Person.prototype.constructor); // Result - ƒ Person(firstName, birthYear)

// Example:
const array = [2, 3, 4, 5, 6, 7, 5, 3, 3];
console.log(array.__proto__); // Result - [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
console.log(Array.prototype); // Result - [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]
console.log(array.__proto__ === Array.prototype); // Result - True
console.log(Array.prototype.isPrototypeOf(array)); // Result - True

// Adding new feature/properties to the array
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(array.unique()); // Result - [2, 3, 4, 5, 6, 7]

// Exercise 1: Create a Car Constructor

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// Create a accelerate method with prototype (protypal Inheritance)

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at a speed of ${this.speed}`);
};

// Create a brake method with prototype (prototypal Inheritance)

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at a speed of ${this.speed}`);
};

// Create 2 Objects from the Constructor function

const audi = new Car("Audi", 220);
console.log(audi); // Result - Car {make: 'audi', speed: 220}

const bmw = new Car("BMW", 240);
console.log(bmw); // Result - Car {make: 'bmw', speed: 240}

console.log(Car.prototype); // Result - {accelerate: ƒ, brake: ƒ, constructor: ƒ}
console.log(audi.__proto__); // Result - {accelerate: ƒ, brake: ƒ, constructor: ƒ}
console.log(bmw.__proto__); // Result - {accelerate: ƒ, brake: ƒ, constructor: ƒ}

// Call the prototype methods on th object
audi.accelerate(); // Result - Audi is going at a speed of 230
bmw.accelerate(); // Result - BMW is going at a speed of 250
audi.brake(); // Result - Audi is going at a speed of 225
bmw.brake(); // Result - BMW is going at a speed of 245

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ES6 Classes

// Class Declaration

class PersonClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Adding a method - method will be added to the prototype property
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hello, ${this.firstName}`);
  }
}

const johnson = new PersonClass("Johnson", 1990);
console.log(johnson); // Result - PersonClass {firstName: 'Johnson', birthYear: 1990}

// Calling a calcAge Method
johnson.calcAge(); // Result - 32

console.log(PersonClass.prototype); // Result - {constructor: ƒ, calcAge: ƒ, greet: ƒ}
console.log(johnson.__proto__); // Result - {constructor: ƒ, calcAge: ƒ, greet: ƒ}
console.log(johnson.__proto__ === PersonClass.prototype); // Result - True
console.log(PersonClass.prototype.isPrototypeOf(johnson)); // Result - True
console.log(PersonClass.prototype.isPrototypeOf(PersonClass)); // Result - False

// Adding a method manually to the prototype
PersonClass.prototype.displayAge = function () {
  console.log(
    `Hey ${this.firstName}, you are ${2022 - this.birthYear} years old`
  );
};

johnson.displayAge(); // Result - Hey Johnson, you are 32 years old
console.log(johnson.__proto__); // Result - {displayAge: ƒ, constructor: ƒ, calcAge: ƒ, greet: ƒ}
console.log(PersonClass.prototype); // Result - {displayAge: ƒ, constructor: ƒ, calcAge: ƒ, greet: ƒ}

// Things to Remember about classes
// 1. Classes are not hoisted
// 2. classes are first-class citizens
// 3. classes are executed in strict mode

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Setters and Getters in Object

const account = {
  owner: "Richard",
  movements: [200, 500, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};

// Accessing a Getter
console.log(account.latest); // Result - 300

// Setting a Setter in movements
account.latest = 50;
console.log(account.movements); // Results - [200, 500, 120, 300, 50]
console.log(account.latest); // Result - 50

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Setters and Getters on Classes

// PersonClass

class PersonClassNew {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  get age() {
    return 2022 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    // create variable name with underscore
    else alert(`${name} is not a full name!`);
    console.log(name);
  }

  // Get method to get the fullname
  get fullName() {
    return this._fullName;
  }
}

const martin = new PersonClassNew("Martin Garrix", 1993);
console.log(martin); // Result - PersonClassNew {fullName: 'Martin Garrix', birthYear: 1993}
martin.calcAge(); // Result - 29
console.log(martin.age); // Result - 29
console.log(martin.fullName); // Result - Martin Garrix

martin.fullName = "Garrix Martin"; // Result - Garrix Martin
console.log(martin.fullName); // Result - Garrix Martin

const adam = new PersonClassNew("Adam", 1990);
console.log(adam); // Result - PersonClassNew {birthYear: 1990}
console.log(adam.fullName); // Result - Undefined (As fullname does not include " ", hence fullName is Undefined)

adam.fullName = "Adam Gilchrist";
console.log(adam.fullName); // Result - Adam Gilchrist
console.log(adam); // Result- PersonClassNew {birthYear: 1990, _fullName: 'Adam Gilchrist'}

const steve = new PersonClassNew("Steve Smith", 1992);
console.log(steve); // Result - PersonClassNew {_fullName: 'Steve Smith', birthYear: 1992}
console.log(steve.fullName); // Result - Steve Smith

steve.fullName = "Smith Steve";
console.log(steve); // Result - PersonClassNew {_fullName: 'Smith Steve', birthYear: 1992}
console.log(steve.fullName); // Result - Smith Steve

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Example: 1 CarClass

class CarClass {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  set make(name) {
    if (name.includes(" ")) this._make = name;
    else {
      console.log(name);
    }
  }

  get make() {
    return this._make;
  }
}

const aston = new CarClass("Aston Martin", 2022);
console.log(aston); // Result - CarClass {_make: 'Aston Martin', model: 2022}
console.log(aston.make); // Result - Aston Martin
console.log(aston.model); // Result - 2022

aston.make = "Lamborghini Gallardo";
console.log(aston); // Result - CarClass {_make: 'Lamborghini Gallardo', model: 2022}
console.log(aston.make); // Result - Lamborghini Gallardo
console.log(aston.model); // Result - 2022

// Example: 2 Create a CarClassNew and create a get and set methods onto it.

class CarClassNew {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at a speed of ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at a speed of ${this.speed}`);
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }

  get speedUS() {
    return this.speed / 1.6;
  }
}

const ford = new CarClassNew("Ford", 240);
console.log(ford); // Result - CarClassNew {make: 'Ford', speed: 240}
console.log(ford.__proto__);
console.log(ford.speedUS); // Result - 150
ford.accelerate(); // Result - Ford is going at a speed of 250
ford.accelerate(); // Result - Ford is going at a speed of 260
ford.brake(); // Result - Ford is going at a speed of 255
ford.speedUS = 50;
console.log(ford);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Static Methods - Constructor Function
// Static methods are available on the constructor function only

// Constructor Function - PersonStatic

const PersonStatic = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const mark = new PersonStatic("Mark Johnson", 1992);
console.log(mark); // Result - PersonStatic {firstName: 'Mark Johnson', birthYear: 1992}
console.log(PersonStatic.prototype); // Result - {constructor: ƒ}
console.log(mark.__proto__); // Result - {constructor: ƒ}

PersonStatic.prototype.hey = function () {
  console.log(`Hey ${this.firstName}`);
};

console.log(PersonStatic.prototype); // Result- {hey: ƒ, constructor: ƒ}
console.log(mark.__proto__); // Result - {hey: ƒ, constructor: ƒ}
mark.hey(); // Result - Hey Mark Johnson

// Create a Static Method on the Constructor Function
PersonStatic.hello = function () {
  console.log("Hello, There");
  console.log(this);
};

// Accessing the Static Method
PersonStatic.hello();

// Static Methods - Classes
class PersonClassStatic {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Instance Methods
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  // Static Method
  static hey() {
    console.log("Hey There");
    console.log(this); // Here this is the class - PersonClassStatic
  }
}

const jane = new PersonClassStatic("Jane Doe", 1990);
console.log(jane); // Result - PersonClassStatic {firstName: 'Jane Doe', birthYear: 1990}
console.log(jane.__proto__); // Result - {constructor: ƒ, calcAge: ƒ}
console.log(PersonClassStatic.prototype); // Result - {constructor: ƒ, calcAge: ƒ}
jane.calcAge(); // Result - 32

// Accessing the Static Method
PersonClassStatic.hey();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Object.Create

// Creating a Prototype
const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// Creating a steven Object
const steven = Object.create(PersonProto);
console.log(steven); // Result - {} an empty object
steven.job = "Developer";
steven.country = "USA";
steven.init("Steven Richards", 1990);

console.log(steven); // Result - {job: 'Developer', country: 'USA', firstName: 'Steven Richards', birthYear: 1990}
console.log(steven.__proto__); // Result - {calcAge: ƒ, init: ƒ} Here PersonProto is the prototype of steven object
console.log(steven.__proto__ === PersonProto); // Result - True
steve.calcAge(); // Result - 30

// Creating a tony object
const tony = Object.create(PersonProto);
console.log(tony); // Result - {} an empty object
tony.job = "Actor";
tony.country = "USA";
tony.init("Tony Stark", 1980);

console.log(tony); // Result - {job: 'Actor', country: 'USA', firstName: 'Tony Stark', birthYear: 1980}
console.log(tony.__proto__); // Result - {calcAge: ƒ, init: ƒ} Here PersonProto is the prototype of tony object
console.log(tony.__proto__ === PersonProto); // Result - True
tony.calcAge(); // Result - 42

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Inheritance - Using Constructor Function

// Constructor Function for PersonOne

const PersonOne = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Adding a method to the prototype
PersonOne.prototype.calcAge = function () {
  console.log(2022 - this.birthYear);
};

console.log(PersonOne.prototype); // Result - {calcAge: ƒ, constructor: ƒ}

// Constructor Function for StudentOne
const StudentOne = function (firstName, birthYear, course) {
  PersonOne.call(this, firstName, birthYear);
  this.course = course;
};

console.log(StudentOne.prototype); // Result - {constructor: ƒ}

// Creating a Connection/Link between StudentOne.prototype and PersonOne.prototype

StudentOne.prototype = Object.create(PersonOne.prototype);
console.log(StudentOne.prototype); // Result - PersonOne {}

// Adding a method to the Prototype
StudentOne.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

console.log(StudentOne.prototype); // Result - PersonOne {introduce: ƒ}

// Creating a student object

const joseph = new StudentOne("Joseph", 1990, "Computer Science");
console.log(joseph); // Result - StudentOne {firstName: 'Joseph', birthYear: 1990, course: 'Computer Science'}
joseph.calcAge(); // Result - 32
joseph.introduce(); // Result - My name is Joseph and I study Computer Science
console.log(joseph.__proto__); // Result - PersonOne {introduce: ƒ}
console.log(StudentOne.prototype); // Result - PersonOne {introduce: ƒ}
console.log(joseph.__proto__.__proto__); // Result - {calcAge: ƒ, constructor: ƒ}

console.log(joseph instanceof StudentOne); // Result - True
console.log(joseph instanceof PersonOne); // Result - True
console.log(joseph instanceof Object); // Result - True

StudentOne.prototype.constructor = StudentOne; // Setting the constructor as desired
console.log(StudentOne.prototype);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
