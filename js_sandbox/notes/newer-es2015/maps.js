// Maps = key - value pairs that can use any type as a key or value
const map1 = new Map();

// set keys
const key1 = 'some string',
  key2 = {},
  key3 = function() {};

// set map values by key
map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');

// get values by key
console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// count values
console.log(map1.size); // logs 3

// iterating maps

// loop using for...of to get keys and values
for (let [key, value] of map1) {
  console.log(`${key} = ${value}`); // logs some string = value of key1 && [object object] = value of key2 && function(){} = value of key3
}

// iterate keys only
for (let key of map1.keys()) {
  console.log(key); // logs some string, {}, f(){}
}

// iterate values only
for (let value of map1.values()) {
  console.log(value); // logs value of key1, value of key2, value of key3
}

// loop with forEach
map1.forEach(function(value, key) {
  console.log(`${key} = ${value}`); // ogs some string = value of key1 && [object object] = value of key2 && function(){} = value of key3
});

// convert sets to arrays

// create an array of the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr); // logs an array of key value pairs

// create an array of values
const valArr = Array.from(map1.values());
console.log(valArr); // logs an array of values

// create an array of keys
const keyArr = Array.from(map1.keys);
console.log(keyArr); // logs an array of keys
