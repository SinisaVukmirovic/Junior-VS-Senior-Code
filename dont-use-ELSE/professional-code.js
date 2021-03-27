// PROFESSIONAL CODE
// ==================

function canDrink(person) {
    if (person.age == null) {
        console.log('You are not a person!');
        return;
    }

    const response = canDrinkResponse(person.age);
    console.log(response);
}

// Apstractiong function into smaller functions
// Extracting function for posible resulting outcomes

function canDrinkResponse(age) {
    if (age < 18) return 'No, person is underaged!';

    if (age < 21) return 'Yes, but not in the US!';

    return 'Yes, person can drink alchocol';
}

const somePerson = {
    age: 22
}

canDrink(somePerson);