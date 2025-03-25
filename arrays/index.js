let students= ["Jane", "Amanda", "Hellen"];
console.log({students});

// Reassign value
students[1] = "Tom";
console.log({ students });

// Adding items
students.push("Susan");
console.log({ students });

// adding items at start
students.unshift("Anne");
console.log({ students });

// Remove items
students.pop();
console.log({ students });

// Remove at the start
students.shift();
console.log({ students });

// Loops
let nums=[10, 20, 30, 40];
console.log({ nums });

// double all items
const double=nums.map(item => item * 2);
console.log({ double });

// sum of all elements
let count = 0;
nums.forEach( item => count += item);
console.log({ count });

// reduce
const total = nums.reduce((acc, item) => acc + item, 0);
console.log({ total });

// for loop
let multiples =[];
for(let i = 0; i <nums.length; i++){
    multiples.push(nums[i] * nums[i])
};
console.log({ multiples });

const items = [5, 2, 8, 9, 1, 12, 15];
const even = items.filter(item => item %2 === 0);
console.log({ even });

const discover = items.find(item => item === 1);
console.log({ discover });

const [a, b, ...c] = nums;
console.log({ a });
console.log({ b });
console.log({ c });


