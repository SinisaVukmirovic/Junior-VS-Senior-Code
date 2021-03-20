// PROFESSIONAL CODE
// ==================

// ask question function has been moved to its of file
const askQuestion = require('./separate-func/ask-question');

async function main() {
  const name = await askQuestion("What is your name? ");
  const job = await askQuestion("What is your job? ");
  const age = await askQuestion("How old are you? ");
  
  console.log(`Hello ${name}. You are a ${age} year old ${job}.`);
}

main();