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
