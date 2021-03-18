// EXAMPLE 1
// HOW A BEGGINER WOULD WRITE CODE
// ================================

// function that takes in any number between -infiniti and infinity and converts it into an accounting string version of that number

// function toAccounting(n) {
//   if (n < 0) {
//     return '(' + Math.abs(n) + ')';
//   } else if (n >= 0) {  
//     return n;
//   }
// }

// steps in inproving code
// 1. removed the redundant if statements
// 2. taking into account the type of variable, func should always return a string

function toAccounting(n) {
  if (n < 0) {
    return '(' + Math.abs(n) + ')';
  } else {  
    return n.toString();
  }
}

  
// console.log(toAccounting(undefined));
console.log(toAccounting(0));
console.log(toAccounting(10));
console.log(toAccounting(-5));

