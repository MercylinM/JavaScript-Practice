let a = 'Morning';
console.log(a[2]);
a[2] = 'f';
console.log({a});

console.log(a.slice(2,5));
console.log(a.slice(2, a.length));
console.log(a.replace(a[2], 'f'));

// string concatenation
let b = 'Everyone';

console.log(a.concat(' ', b));
console.log(a + ' ' + b);

let d = `${a} ${b}`;
console.log({d});


