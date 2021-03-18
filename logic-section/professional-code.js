// HOW A PROFESSIONAL WOULD WRITE CODE

// steps:
// 1. handling of checks is much simpler (guard clouse - return after each if statement)
// 2. getting rid of hard to read nesting, using easy to read one step nesting

function numberToAccountingString(number) {
    if (number == null) return
    if (number < 0) return `(${Math.abs(number)})`
    return number.toString()
  }
  
console.log('===================');
console.log('Professional code logs');
console.log(numberToAccountingString(undefined))
console.log(numberToAccountingString(0))
console.log(numberToAccountingString(10))
console.log(numberToAccountingString(-5))