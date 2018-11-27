const user = { email: "jdoe@gmail.com" };

try {
  myFunction(); // produce reference error: myFunction is not defined
  null.myFunction(); // Produce TypeError: cannot read property myFunction of null
  eval("hello world"); // produce syntax error: unexpected identifier
  decodeURIComponent("%"); // produce URI error: URI malformed at the decodeURIComponent
  if (!user.name) {
    throw "user has no name";
    throw new SyntaxError("User has no name"); // format as certain error
  }
} catch (err) {
  console.log(`User Error: ${err.message}`); // logs User Error: user has no name
  console.log(err); // logs reference error: myFunction is not defined
  console.log(err.message); // logs myFunction is not defined
  console.log(err.name); // logs reference error
  // console.log(err.instanceof TypeError); // logs false
} finally {
  console.log("finally runs regardless of result");
}

console.log("Program continues");
