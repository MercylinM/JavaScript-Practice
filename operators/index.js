let x = 5;
let y = '5';

// loosely equal to
let looselyEqual = x == y? true: false;

console.log('====================================');
console.log({looselyEqual});
console.log('====================================');
console.log('====================================');


// Strictly Equal to

let strictlyEqual = x === y ? true : false;

console.log({strictlyEqual});
console.log('====================================');
console.log('====================================');


// unary operator
console.log(typeof x);
console.log(typeof y);
console.log('====================================');
console.log('====================================');


// compound operators

let b =6;

b += 5;

console.log({b});

b++;

console.log({b});

b--;
console.log({b});
console.log('====================================');
console.log('====================================');

// comparison operators
let c = 5;
let d = 10;

let moreThanOrEqualTo = (c>=d)? true: false;

console.log({moreThanOrEqualTo});
console.log('====================================');
console.log('====================================');


// Logical operators
let logicalAND = (x == y && c>=d)? true: false;

console.log({logicalAND});

let logixalOR = (x == y || c >= d) ? true : false;
console.log({logixalOR});


let userOnline = false
let logicalNOT = !userOnline? true: false;

console.log({logicalNOT});
console.log('====================================');
console.log('====================================');

// implicit coercion
let num = 5;
num *= false;
console.log({num});

let e = +'65';
console.log({e});
console.log('====================================');
console.log('====================================');

// Explicit coersion
let item = 5;
console.log(typeof item);
item = String(item);
console.log({item});
item = Array(item);
console.log({item});

let obj = Object(5);
console.log({obj});
console.log(typeof obj);

// copies of strings

let copy = "I want to copy a string. \n"
console.log(copy.repeat(5));


