// if else statement
function itemAvailability(inventory){
    for (let index = 0; index < inventory.length; index++) {
        if (inventory[index] == 0){
            console.log("item not available");
            
        } else {
            console.log("item available");       
        }
        
    }
};

itemAvailability([22,0,5,0,9,88,70]);

function gradingScores(scores) {
    for (let index = 0; index < scores.length; index++) {
        
        if (scores[index] >= 85) {
            let grade = "A" 
            console.log(`You have a score of ${scores[index]} and your grade is ${grade}`);
        } else if (scores[index] < 85 && scores[index] >= 70 ) {
            grade = "B" 
            console.log(`You have a score of ${scores[index]} and your grade is ${grade}`);     
        } else if (scores[index] < 70 && scores[index] >= 60) {
            grade = "C"
            console.log(`You have a score of ${scores[index]} and your grade is ${grade}`);   
        } else if (scores[index] < 60 && scores[index] >= 50) {
            grade = "D"
            console.log(`You have a score of ${scores[index]} and your grade is ${grade}`);   
        }else{
            grade = "E"
            console.log(`You have a score of ${scores[index]} and your grade is ${grade}`);
        } 
    }
    
};

gradingScores([55,30,70,85,40,20,90,60]);

// // while statement
// const loginAttempt = () => {
//     let loginAttempt = 1;
//     while (loginAttempt <= 3) {
//         console.log(`Login attempt ${loginAttempt}`);
//         loginAttempt ++;
//     }   
// }

// loginAttempt()

// do while statement
function loginAttemptUsingDoWhile() {
    let loginAttempt = 1;

    do{
        console.log(`Login attemot using do...while ${loginAttempt}`);
        loginAttempt ++;    
    } while (loginAttempt <= 3);
}

loginAttemptUsingDoWhile();

// switch control flow
const notifications = (notificationTypes) => {
    notificationTypes.forEach(notification => {
        switch (notification) {
            case "email":
                console.log('Send email');
                break;
            case "sms":
            case "text":
                console.log("Send SMS");
                break;
            case "push":
                console.log("Send push notification");
                break;
        
            default:
                console.log("Notification type not supported");
                break;
        }
    });
}

let notificationTypes = ['email', 'sms', 'push', 'text'];
notifications(notificationTypes);

// Given an array of user roles, use switch case to log the different access types for each role.
const roles = ['admin', 'viewer', 'editor', 'commentor']
function accessTypes(roles) {
    roles.forEach(role => {
        switch (role) {
            case 'admin':
                console.log("Admin access for admin");
                break;
            case 'viewer':
                console.log('Viewer access');
                break;
            case 'editor':
                console.log('Editor access');
                break;
            case 'commentor':
                console.log('Commentor access');
                break;
            default:
                console.log('Access type not supported');
                break;
        }
    });
}

accessTypes(roles)

const days = new Date().getDay()
console.log(days);


function loginAttempt() {
    let loginAttempt = 0;
    while (loginAttempt >= 3) {
        console.log('Account locked');
        loginAttempt++;
    }
}
loginAttempt()