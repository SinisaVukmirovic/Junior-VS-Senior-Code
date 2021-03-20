// PROFESSIONAL CODE
// =================

// braking out logic into separate functions and files
const { updateUser, createUser } = require('./api/users');
const { validationMessages, printErrors } = require('./separate-funcs/validation');

function saveUser(user) {
  if (user.id == null) {
    console.log('Created User');
    createUser(user);
  } else {
    console.log('Updated User');
    updateUser(user);
  }
}

// we don't repeat ourselves with similar validate checks, like in intermediate code
function validateUser(user) {
  const validations = {
    username: {
      required: true,
      length: 3
    },
    password: {
      required: true,
      length: 8
    }
  }

  const errors = validationMessages(validations, user);

//   implementation details, empty array means valid, array with errors means invalid
  return {
    valid: Object.values(errors).every(messages => messages.length === 0),
    errors: errors
  }
}

const user = {
  id: 1,
  username: 'WDS',
  password: 'password'
}

const { errors, valid } = validateUser(user);
if (valid) {
  saveUser(user);
} else {
  printErrors(errors);
}