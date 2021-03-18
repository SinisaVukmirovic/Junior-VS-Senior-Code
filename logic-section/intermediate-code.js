// HOW an INTERMEDIATE WOULD IMPROVE CODE

// Steps:
// 1. better naming of variables
// 2. checking for null

function numberToAccountingString(number) {
    if (number != null) {
        if (number < 0) {
        return `(${Math.abs(number)})`;
        } else {
        return number.toString();
        }
    }
}

console.log('Intermediate code logs');
console.log(numberToAccountingString(undefined))
console.log(numberToAccountingString(0))
console.log(numberToAccountingString(10))
console.log(numberToAccountingString(-5))