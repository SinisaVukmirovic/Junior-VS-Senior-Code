// INTERMEDIATE CODE solution
// ===========================

const readline = require('readline');
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// getting rid of all the nested code
// creating abstractions of askQuestion function and moving it into a separate func
// using async await 
async function main() {
  const name = await askQuestion(readlineInterface, "What is your name? ");
  const job = await askQuestion(readlineInterface, "What is your job? ");
  const age = await askQuestion(readlineInterface, "How old are you? ");
  
  console.log(`Hello ${name}. You are a ${age} year old ${job}.`);
  readlineInterface.close();
//   having to remember to close function and having dependencies like this in a function
// is not a good thing, we'll get rid of that in PRO version of code
}

main();

// also in PRO version, entire separate functions should be in their own files
function askQuestion(readlineInterface, question) {
  return new Promise(resolve => {
    readlineInterface.question(question, answer => {
      resolve(answer);
    });
  });
}