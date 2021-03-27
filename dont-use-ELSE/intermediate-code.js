// INTERMEDIATE CODE
// ==================

// Removing nested ELSE statements

function canDrink(person) {
    if (person.age == null) {
        console.log('You are not a person!');
        return;
    }

    if (person.age < 18) {
        console.log('No, person is underaged!');
        return;
    }

    if (person.age < 21) {
        console.log('Yes, but not in the US!');
        return;
    }

    console.log('Yes, person can drink alchocol');
}

const somePerson = {
    age: 22
}

canDrink(somePerson);