// object literals for single instances
const tyroo = {
  name: "tyroo",
  age: 62
};

console.log(tyroo);
console.log(tyroo.age);
/* ===============================================
multiple instances create Constructors
Person Constructor
*/
function Person() {
  this.name = "tyroo";
}

const tyroo = new Person();
const mike = new Person();
console.log(tyroo); // prints Person {name: 'tyroo'};
console.log(mike); // prints Person {name: 'tyroo'};

function Person(name) {
  this.name = name;
}
const tyroo = new Person("tyroo");
const mike = new Person("mike");
console.log(tyroo); // prints Person {name: 'tyroo'};
console.log(mike); // prints Person {name: 'mike'};

function Person(name, dob) {
  this.name = name;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

const tyroo = new Person("tyroo", "9/10/1981");
console.log(tyroo); // prints Person (name: 'tyroo', birthday: 'Thu Sep 10 1981');
