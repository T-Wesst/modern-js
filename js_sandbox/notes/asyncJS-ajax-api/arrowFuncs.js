const sayHello = function() {
  console.log("Hello");
};
// convert to arrow function
const sayHello = () => {
  console.log("Hello");
};
// if one line func no code block
const sayHello = () => console.log("Hello");
// one line return hello
const sayHello = () => "Hello"; // console.log(sayHello());
// returning object literals
const sayHello = () => {
  msg: "Hello";
}; // function body = undefined
const sayHello = () => ({ msg: "Hello" }); // logs object
// single parameter no parenthesis
const sayHello = name => console.log(`Hello ${name}`);
// multiple params needs parenthesis
const sayHello = (name, age) => console.log(`Hello ${name} ${age}`);
// callbacks without arrow func
const users = ["nathan", "john", "william"];
const nameLengths = users.map(function(name) {
  return name.length;
});
// callbacks with arrow func
const nameLengths = users.map(name => {
  return name.length;
});
// even shorter
const nameLengths = users.map(name => name.length);
console.log(nameLengths); // logs [6,4,7] length of each user
sayHello();
