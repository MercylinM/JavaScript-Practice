function Person(name, age,) {
    this.name = name;
    this.age = age;
    this.greet = function (name) {
        return `Hello my name is ${this.name} and I am ${this.age} years old`;
    }
};

const anne = new Person('Anne', 22);
console.log({anne});

Person.prototype.nationality = 'Kenyan';
console.log({anne});
console.log(anne.nationality);

console.log('====================================');
console.log('====================================');

function Driver(name, carModel, rating) {
    this.name = name;
    this.carModel = carModel;
    this.rating = rating;
}

Driver.prototype.getDetails = function () {
    return `The driver's name is ${this.name} and the car model is ${this.carModel}.`;
}

Driver.prototype.isTopRated = function () {
    return this.rating > 4.5
}

const firstDriver = new Driver("Mercylin", "BMW", 5);
const secondDriver = new  Driver("Muthoni", "Mercedez", 4);
console.log({firstDriver});
console.log('First driver: ', firstDriver.getDetails());
console.log('First driver is top rated: ', firstDriver.isTopRated());
console.log({secondDriver});
console.log('Second driver: ',secondDriver.getDetails());
console.log('Second driver is top rated: ', secondDriver.isTopRated());

console.log('====================================');
console.log('====================================');
// classes
class Car {
    constructor(model, color, plateNumber) {
        this.model = model;
        this.color = color;
        this.plateNumber = plateNumber;
    }
    accelerate(speed){
        return `This ${this.model} accelerates at a speed of ${speed} km/h`
    }
}

const toyota = new Car('Toyota', 'white', 'KCY 435U')
console.log(toyota.accelerate(50));

console.log('====================================');
console.log('====================================');

// Backend structure
// You are creating a backend structure for an online course platform
//Write a student class that accepts name,course,and scores(array of numbers as arguments)
// add a method using student. prototype called get AverageScore()that returns the average score
// add another method called isPassing()that returns true if the average is 50 or more
// add another method called totalScores()that returns the total scores of a student
// create two students and test all the methods
class Student {
    constructor(name, course, scores) {
        this.name = name;
        this.course = course;
        this.scores = scores;
    }
}
Student.prototype.getAverageScore =function () {
    // return this.scores.reduce((acc, sum) => acc + sum, 0) / this.scores.length
    return this.totalScores() / this.scores.length;
}

Student.prototype.isPassing = function () {
    return this.getAverageScore() >= 50;
}

Student.prototype.totalScores = function () {
    return this.scores.reduce((acc, sum) => acc + sum, 0);
}

const student = new Student('Mercy', 'Frontend Web', [50, 60, 40, 80, 90, 73]);
const student2 = new Student('Muthoni', 'Kotlin', [50, 20, 50, 48,43, 65]);

console.log('Student average score is: ',student.getAverageScore());
console.log('Student is passing: ',student.isPassing());
console.log('Student total scores: ', student.totalScores());
console.log('Student2 average score is: ', student2.getAverageScore());
console.log('Student2 is passing: ', student2.isPassing());
console.log('Student2 total scores: ', student2.totalScores());

console.log('====================================');
console.log('====================================');

class Bus extends Car{
    constructor(model, color, plateNumber, seats) {
        super(model,color,plateNumber);
        this.seats =seats;
    }
}

const nganya = new Bus('Mazda', 'green', 'KBV 678H', 33);
console.log({nganya});
console.log(nganya.accelerate(70));

