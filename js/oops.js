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

// Inheritance - Using ES6 Classes

class PersonClassInherit {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hello, ${this.firstName}`);
  }
}

// Creating an instance of parent class

class StudentClassInherit extends PersonClassInherit {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`Hello, I am ${this.firstName}, and i study ${this.course}`);
  }

  // Overriding the parent calcAge method
  calcAge() {
    console.log(
      `Hey there!, I am ${this.firstName}, and i am ${
        2022 - this.birthYear
      } years old`
    );
  }
}

// Creating an object

const michael = new StudentClassInherit("Michael", 1990, "Computer Science");
console.log(michael); // Result - StudentClassInherit {firstName: 'Michael', birthYear: 1990, course: 'Computer Science'}
console.log(michael.__proto__); // Result - PersonClassInherit {constructor: ƒ, introduce: ƒ, calcAge: ƒ}
console.log(StudentClassInherit.prototype); // Result - PersonClassInherit {constructor: ƒ, introduce: ƒ, calcAge: ƒ}
michael.calcAge(); // Result - Hey there!, I am Michael, and i am 32 years old.
michael.greet(); // Result - Hello, Michael
michael.introduce(); // Result- Hello, I am Michael, and i study Computer Science

class NewPersonClassInherit {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

console.log(NewPersonClassInherit.prototype); // Result - {constructor: ƒ, calcAge: ƒ, greet: ƒ}

class NewStudentClassInherit extends NewPersonClassInherit {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(
      `Hello, I am ${this.firstName} and i am ${
        2022 - this.birthYear
      } years old`
    );
  }
}

console.log(NewStudentClassInherit.prototype); // Result - NewPersonClassInherit {constructor: ƒ, introduce: ƒ}

const arun = new NewStudentClassInherit(
  "Arun Dsouza",
  1990,
  "Mechanical Engineer"
);

console.log(arun); // Result - NewStudentClassInherit {firstName: 'Arun Dsouza', birthYear: 1990, course: 'Mechanical Engineer'}
arun.calcAge(); // Result - 32
arun.greet(); // Result - Hey Arun Dsouza
arun.introduce(); // Result - Hello, I am Arun Dsouza and i am 32 years old

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Inheritance - Using Object.create

const PersonProtoInherit = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

console.log(PersonProtoInherit); // Result - {calcAge: ƒ, init: ƒ}

const StudentProtoInherit = Object.create(PersonProtoInherit); // PersonProtoInherit is the prototype of StudentProtoInherit
console.log(StudentProtoInherit); // Result - {}

// Adding Method to the StudentProtoInherit Prototype
StudentProtoInherit.init = function (firstName, birthYear, course) {
  PersonProtoInherit.init.call(this, firstName, birthYear);
  this.course = course;
};

console.log(StudentProtoInherit); // Result - {init: ƒ}

StudentProtoInherit.introduce = function () {
  console.log(
    `Hello, I am ${this.firstName}, and I am ${
      2022 - this.birthYear
    } years old and I study ${this.course}`
  );
};

console.log(StudentProtoInherit); // Result - {init: ƒ, introduce: ƒ}

// Creating Objects
const jay = Object.create(StudentProtoInherit);
console.log(jay); // Result - {}
jay.init("Jay", 1990, "Information Science");
console.log(jay); // Result - {firstName: 'Jay', birthYear: 1990, course: 'Information Science'}
jay.calcAge(); // Result - 32
jay.introduce(); // Result - Hello, I am Jay, and I am 32 years old and I study Information Science
console.log(jay.__proto__); // Result - {init: ƒ, introduce: ƒ}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Encapsulation - Protected Properties and Methods in Class

class AccountEncaps {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin; // Here _pin is known as protected
    this._movements = []; // Here _movements is known as protected
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  // Public Interfaces

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log("Loan Approved");
    }
  }
}

const accountTwo = new AccountEncaps("Mark", "INR", 2222); // Result - Thanks for opening an account, Mark
console.log(accountTwo); // Result - AccountEncaps {owner: 'Mark', currency: 'INR', _pin: 2222, _movements: Array(0), locale: 'en-US'}
accountTwo.deposit(300);
accountTwo.withdraw(150);
accountTwo.requestLoan(100);
console.log(accountTwo); // Result - AccountEncaps {owner: 'Mark', currency: 'INR', _pin: 2222, _movements: Array(3), locale: 'en-US'}
console.log(accountTwo.getMovements()); // Result - (3) [300, -150, 100]
console.log(accountTwo.pin); // Result - undefined
console.log(accountTwo._pin); // Result - 2222

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Encapsulation: Private Class, Fields, and Methods
// 1. Public Fields
// 2. Private Fields
// 3. Public Methods
// 4. Private Methods
// 5. There is also static version

class AccountEncapsPub {
  // Public Field
  locale = navigator.language;

  // Private Fields
  #movements = []; // Here #movements makes movements array private
  #pin; // Here #pin makes the pin field private

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${this.owner}`);
  }

  // Public Methods - Public Interfaces

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log("Loan Approved");
    }
  }
}

const accountThree = new AccountEncapsPub("Nick", "USD", 3333); // Result - Thanks for opening an account, Nick
console.log(accountThree); // Result - AccountEncapsPub {locale: 'en-US', owner: 'Nick', currency: 'USD', #movements: Array(0), #pin: 3333}
accountThree.deposit(500);
accountThree.withdraw(100);
accountThree.requestLoan(50);
console.log(accountThree.locale); // Result - en-US
console.log(accountThree.owner); // Result - Nick
console.log(accountThree.currency); // Result - USD
console.log(accountThree.getMovements()); // Result - (3) [500, -100, 50]
// console.log(accountThree.#movements); // Result - Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class
// console.log(accountThree.#pin); // Result - Uncaught SyntaxError: Private field '#pin' must be declared in an enclosing class

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Example - 1

class CarClassEncaps {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at a speed of ${this.speed} kmph`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at a speed of ${this.speed} kmph`);
  }
}

console.log(CarClassEncaps.prototype); // Result - {constructor: ƒ, accelerate: ƒ, brake: ƒ}

class CarClassEncapsNew extends CarClassEncaps {
  // Private Field
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  // Public Methods - Public Interface
  chargeBattery(ChargeTo) {
    this.#charge = ChargeTo;
  }

  getBatteryCharge() {
    return this.#charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at a speed of ${this.speed} kmph at an charge of ${
        this.#charge
      }`
    );
  }
}

console.log(CarClassEncapsNew.prototype); // Result - CarClassEncaps {constructor: ƒ, chargeBattery: ƒ, getBatteryCharge: ƒ, accelerate: ƒ}

const nexon = new CarClassEncapsNew("Nexon", 120, 50);
console.log(nexon); // Result - CarClassEncapsNew {make: 'Nexon', speed: 120, #charge: 50}
console.log(nexon.__proto__); // Result - CarClassEncaps {constructor: ƒ, chargeBattery: ƒ, getBatteryCharge: ƒ, accelerate: ƒ}
console.log(nexon.make); // Result - Nexon
console.log(nexon.speed); // Result - 120
// console.log(nexon.#charge); // Result - Uncaught SyntaxError: Private field '#charge' must be declared in an enclosing class
console.log(nexon.getBatteryCharge()); // Result - 50
nexon.accelerate(); // Result - Nexon is going at a speed of 140 kmph at an charge of 49
console.log(nexon.speed); // Result - 140
console.log(nexon.getBatteryCharge()); // Result - 49
nexon.accelerate(); // Result - Nexon is going at a speed of 160 kmph at an charge of 48
console.log(nexon.speed); // Result - 160
console.log(nexon.getBatteryCharge()); // Result - 48
nexon.chargeBattery(10);
console.log(nexon.getBatteryCharge()); // Result - 10
nexon.accelerate(); // Result - Nexon is going at a speed of 180 kmph at an charge of 9
nexon.brake(); // Result - Nexon is going at a speed of 175 kmph
console.log(nexon.speed); // Result - 175
console.log(nexon.getBatteryCharge()); // Result - 9

// Example - 2

class CarClassEncapsOne {
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
    return this; // Here this will allow us for chaining methods
  }
}

console.log(CarClassEncapsOne.prototype); // Result - {constructor: ƒ, accelerate: ƒ, brake: ƒ}

class CarClassEncapsNewOne extends CarClassEncapsOne {
  // Private Field
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  // Public Methods - Public Interface
  chargeBattery(ChargeTo) {
    this.#charge = ChargeTo;
    return this; // Here this will allow us for chaining methods
  }

  getBatteryCharge() {
    return this.#charge;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at a speed of ${this.speed} with a charge of ${
        this.#charge
      }`
    );
    return this; // Here this will allow us for chaining methods
  }
}

console.log(CarClassEncapsNewOne.prototype); // Result - CarClassEncapsOne {constructor: ƒ, chargeBattery: ƒ, getBatteryCharge: ƒ, accelerate: ƒ}

const altroz = new CarClassEncapsNewOne("Altroz", 120, 50);
console.log(altroz); // Result - CarClassEncapsNewOne {make: 'Altroz', speed: 120, #charge: 50}
console.log(altroz.__proto__); // Result - CarClassEncapsOne {constructor: ƒ, chargeBattery: ƒ, getBatteryCharge: ƒ, accelerate: ƒ}
console.log(altroz.make); // Result - Altroz
console.log(altroz.speed); // Result - 120
console.log(altroz.charge); // Result - Undefined
// console.log(altroz.#charge); // Result - Uncaught SyntaxError: Private field '#charge' must be declared in an enclosing class
console.log(altroz.getBatteryCharge()); // Result - 50
altroz.accelerate(); // Result - Altroz is going at a speed of 140 with a charge of 49
console.log(altroz.speed); // Result - 140
console.log(altroz.getBatteryCharge()); // Result - 49
altroz.accelerate(); // Result - Altroz is going at a speed of 160 with a charge of 48
console.log(altroz.speed); // Result - 160
console.log(altroz.getBatteryCharge()); // Result - 48
altroz.chargeBattery(30);
console.log(altroz.getBatteryCharge()); // Result - 30
altroz.accelerate(); // Result - Altroz is going at a speed of 180 with a charge of 29
console.log(altroz.speed); // Result - 180
console.log(altroz.getBatteryCharge()); // Result - 29
altroz.brake(); // Result - Altroz is going at a speed of 175
console.log(altroz.speed); // Result - 175
console.log(altroz.getBatteryCharge()); // Result - 29

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
