let regex;
// literal characters
regex = /hello/;
regex = /hello/i; // i flag = case insensitive
regex = /hello/g; // g flag = global search

// meta character symbols
regex = /^h/i; // must start with
regex = /world$/i; // must end with
regex = /^hello$/i; // must start and end with
regex = /h.llo/i; // matches any ONE character
regex = /h*llo/i; // matches any character 0 or more times
regex = /gra?e?y/i; // optional character
regex = /gra?e?y\?/i; // escape character

// Brackets [] - character sets
regex = /gr[ae]y/i; // must be an a or e
regex = /[GF]ray/; // must be G or F
regex = /[^GF]ray/i; // match anything except G or F
regex = /[A-Z]ray/; // match any uppercase letter
regex = /[a-z]ray/; // match any lowercase letter
regex = /[A-Za-z]ray/; // match any letter
regex = /[0-9]ray/; // match any digit

// Braces {} - quantifiers
regex = /hel{2}o/i; // must occur exactly {x} amount of times
regex = /hel{2,4}o/i; // must occur between {x} amount of times
regex = /hel{2,}o/i; // must occur >= {x} times

// parenthesis () - grouping
regex = /^([0-9]x){3}$/i; // must be exactly {numX} 3 times

// shorthand character classes
regex = /\w/; // word character - alphanumeric (any letter || number) or _
regex = /\w+/; // + = one or more
regex = /\W/; // none word character
regex = /\d/; // match any digit
regex = /\d+/; // match any digit 0 or more times
regex = /\D/; // match any non digit
regex = /\s/; // match whitespace character
regex = /\S/; // match non whitespace character
regex = /Hell\b/i; // word boundary

// Assertions
regex = /x(?=y)/; // match x only if followed by y
regex = /x(?!y)/; // match x only if NOT followed by y

// string to match
const str = 'Hello World';
// log results
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
