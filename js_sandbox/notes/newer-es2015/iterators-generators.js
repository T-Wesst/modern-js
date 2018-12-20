// Iterator example "loops that can be paused"
function nameIterator(names) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    }
  };
}

// array of names
const namesArr = ['Jack', 'Jill', 'John'];
// init iterator and pass in name arr
const names = nameIterator(namesArr);

console.log(names.next().value); // logs Jack
console.log(names.next().value); // logs Jill
console.log(names.next().value); // logs John
console.log(names.next().value); // logs undefined

// Generator example "functions that can be paused and return multi values"
function* sayName() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();
console.log(name.next().value); // logs Jack
console.log(name.next().value); // logs Jill
console.log(name.next().value); // logs John
console.log(name.next().value); // logs undefined

// Id generator
function* createId() {
  let index = 0;
  while (true) {
    yield index++;
  }
}
const gen = createId();
console.log(gen.next().value); // logs 0
console.log(gen.next().value); // logs 1
