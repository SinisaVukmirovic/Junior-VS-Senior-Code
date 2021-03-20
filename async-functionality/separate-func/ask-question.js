// by separating functions we don't have to worry about applying future changes in all place
// its enough to change it here, and it is applied in all other occurancies

const readline = require('readline');

function askQuestion(question) {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  return new Promise(resolve => {
    readlineInterface.question(question, answer => {
      resolve(answer);
      readlineInterface.close();
    });
  });
}

module.exports = askQuestion;