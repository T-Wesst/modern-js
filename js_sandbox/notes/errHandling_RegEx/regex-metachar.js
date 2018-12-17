let regex;
// literal characters
regex = /hello/;
regex = /hello/i;

// metacharacter symbols
regex = /^h/i; // must start with
regex = /world$/i; // must end with
regex = /^hello$/i; // must start and end with
regex = /h.llo/i; // matches any ONE character
regex = /h*llo/i; // matches any character 0 or more times
regex = /gra?e?y/i; // optional character
regex = /gra?e?y\?/i; // escape character

// string to match
const str = "Hello World";
// log resulta
const result = regex.exec(str);
console.log(result);

function reTest(regex, str) {
  if (regex.test(str)) {
    console.log(`${str} matched ${regex.source}`);
  } else {
    console.log(`${str} does NOT match ${regex.source}`);
  }
}

reTest(regex, str);
