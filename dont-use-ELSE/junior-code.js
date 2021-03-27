// BEGINNER CODE
// ==============

// using ELSE statements is bad because we have a lot of nested code
// everything we enter nested ELSE statement we need to remember all the previous things

function canDrink(person) {
    if (person.age != null) {
        if (person.age < 18) {
            console.log('No, person is underaged!');
        } 
        else if (person.age < 21) {
            console.log('Yes, but not in the US!');
        } 
        else {
            console.log('Yes, person can drink alchocol');
        }
    }
    else {
        console.log('You are not a person!');
    }
}

const somePerson = {
    age: 22
}

canDrink(somePerson);