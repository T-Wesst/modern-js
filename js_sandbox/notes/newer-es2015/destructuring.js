// destructuring assignment
let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500]; // rest operator assigns left over array items into a variable called rest
console.log(a); // logs 100
console.log(rest); // logs 400, 500

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(a, b); // logs 100 and 200
console.log(rest); // logs c: 300, d: 400, e: 500

// Array Destructuring
const people = ['john', 'beth', 'mike'];
const [person1, person2, person3] = people;
console.log(person1, person2, person3); // logs John, Beth, Mike

// Parse Array returned from func
function getPeople() {
  return ['john', 'beth', 'mike'];
}
let person1, person2, person3;
[person1, person2, person3] = getPeople();
console.log(person1, person2, person3); // Logs John, Beth, Mike

// Object Destructuring
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function() {
    console.log('Hello');
  }
};

// Old ES5 way
const name = person.name,
  age = person.age,
  city = person.city;

// New ES6 Destructuring
const { name, age, city, sayHello } = person;
console.log(name, age, city); // logs John Doe 32 Miami
sayHello(); // logs Hello
