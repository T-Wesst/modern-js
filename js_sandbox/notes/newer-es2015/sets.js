// Sets - store unique values of any type (primitive or reference)

const set1 = new Set();

// add values to set
set1.add(100);
set1.add('a string');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100); // will not be added "needs to be unique"

const set2 = new Set([1, true, 'string']);
console.log(set2); // logs Set has 3 values
console.log(set1); // logs Set has 4 values

// get count
console.log(set1.size); // logs 4
// check for values
console.log(set1.has(100)); // logs true
console.log(set1.has(50 + 50)); // logs true
console.log(set1.has({ name: 'John' })); // logs false "not a primitive type"

// delete form set
set1.delete(100);
console.log(set1); // logs set has 3 values "100 missing"

// iterating through sets (sets are not key value pairs, just values)

// for..of
for (let item of set1) {
  console.log(item); // logs A string, {name: "John", true}
}

// forEach loop
set1.forEach(value => {
  console.log(value);
});

// convert set to array
const setArr = Array.from(set1);
console.log(setArr); // logs array of values from set
