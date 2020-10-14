//strings
console.log('hello, world');

let email = 'sree@js.co.in';
console.log(email);

//String Concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[3]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toLocaleLowerCase());
let result = fullName.toLocaleUpperCase();
console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);