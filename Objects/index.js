const person = {
    age: 20,
    name: "Jane",
    gender: "Female",
    // object method
    greet: function() {
        console.log('inside object', this);
        
        console.log('Hello there!');

        console.log(`Hello there ${this.name}!`);
        
        
    }
};
console.log(person.age);
console.log(person['name']);

person.country = "Kenya";
console.log({person});

person.age = 24;
console.log({person});

delete person.country;
console.log({person});
person.greet();
console.log('outside obj', this);

person.introduction = () => {
    console.log('inside arrow fn', this);
    

    console.log(`My name is ${person.name} and I am ${person.age} years old.`);
    
}
person.introduction();

// Given an array of objects with student name and score properties, return an array with students who scored more than 50.

const scores = [
    {
    name: 'Max',
    score: 20
    },
    {
        name: 'Jane',
        score: 50
    },
    {
        name: 'Mercy',
        score: 70
    },
    {
        name: 'John',
        score: 60
    }
]

console.log(scores.filter(score => 
    score.score > 50
));


function Car(model, color, brand) {
    this.model = model;
    this.color = color;
    this.brand = brand;
}
const car = new Car('Maybach', 'black', 'Mercedes');
console.log({car});
console.log(car.color);
car.description = function() {
    console.log(`This is a ${this.brand}`);
    
}

car.description();

const toyota = new Car('Corolla', 'black', 'Toyota')
console.log({toyota});
