let re;
re = /hello/;
re = /hello/g; // g flag = global search
re = /hello/i; // i flag = case insensitive

console.log(re); // returns /hello/
console.log(re.source); // returns hello

// exec() returns results in an array or null
let result = re.exec("hello world"); // returns ["hello", index: 0, input: 'hello world']
console.log(result);
console.log(result[0]); // returns hello
console.log(result.index); // returns 0
console.log(result.input); // returns hello world

// test() returns true or false
let result = re.test("Hello");
console.log(result); // returns false because H is cap

// match() returns result array or null
let str = "Hello There";
let result = str.match(re);
console.log(result); // returns same as exec func

// search() returns index of first match, if not found returns -1
let str = "Hello There";
let result = str.search(re);
console.log(result); // returns index of 0

// replace() return new string with some or all matches of pattern
let str = "Hello There";
let newStr = str.replace(re, "Hi");
console.log(newStr); // returns Hi There
