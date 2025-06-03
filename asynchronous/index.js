const hello = (name) => {
    console.log(`Hello there ${name}`);
    
};

const greet = (name, hello) => {
    console.log(`Hello ${name}`);
    hello(name);
    
}

greet('Henry', hello);

// setTimeout(() => {
//     console.log('This is a timeout.');
    
// }, 2000);

// setInterval(() => {
//     console.log('This is a interval.');

// }, 3000);

function outerFunction() {
    let person = 'John';
    function innerFunction() {
        console.log(`Hi ${person}`);
        
    }
    return innerFunction;
};
const callOuterFunction = outerFunction()

callOuterFunction();

const internship = false;
const promise = new Promise(function(resolve, reject){
    if (internship) {
        resolve('I shall visit you')
    }else{
        reject("I am still applying")
    }
});

promise.then(() => {
    console.log('I have an internship');

}).catch(() => {
    console.log('There is still time to get a job');

}).finally(() => {
    console.log('I enjoyed my time at AkiraChix');

});

console.log({promise});

const tour = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('I want to tour Mombasa');
        
    // }, 2000);

    setTimeout(() => {
        reject('I do not want to tour Mombasa');

    }, 2000);
});

async function visitPlaces() {
    try {
        const visit = await tour;

        console.log({ visit });
    } catch (error) {
        // console.log(error);
        throw new Error(error);
        
    }
    
}

visitPlaces();
