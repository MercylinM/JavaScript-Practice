// add function

function add (num1, num2) {
    return num1 + num2;

};

// add(2, 3);
console.log(add(2,3));

// global scope
let a = 50;
let b = 20;

// subtract function
function subtract(num1, num2) {

    let b = 60; //local scope
    console.log({b});
    

    const result = num1 - num2;
    console.log({result});

    console.log({aInside: a});
    return result;
    
};
subtract(20, 10)
console.log(subtract(20, 10));

console.log({ aOutside: a });
console.log({ bOutside: b });

 
// anonymous functions
const greet = function (name) {
    return `Hello ${name}`;
};

console.log(greet("Amanda"));

const personAge = (birthYear) => {
    const age = new Date().getFullYear() - Number(birthYear);
    return age;
};

console.log(personAge(2000));

// immediately invoked functions expressions (IIFE)
(function(){
    const a = 30;
    console.log(a);
    
})();