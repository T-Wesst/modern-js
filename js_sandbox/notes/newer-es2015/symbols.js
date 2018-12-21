// create symbol
let sym1 = Symbol();
let sym2 = Symbol('sym2');

console.log(typeof sym2);

console.log(Symbol('123') === Symbol('123')); // logs false "can never be equal"
console.log(`Hello ${sym1.toString()}`); // logs Hello Symbol()

// Unique Object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');
const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';
console.log(myObj[KEY1]); // logs Prop1
console.log(myObj[KEY2]); // logs Prop2

// Symbols are not enumarable in for...in loops
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`); // only logs key3 and key4
}

// Symbols are ignored when by json.stringify
console.log(JSON.stringify({ key: 'prop' })); // logs as JSON string {"key": "prop"}
console.log(JSON.stringify({ [Symbol('sym1')]: 'prop' })); // logs empty object {}
