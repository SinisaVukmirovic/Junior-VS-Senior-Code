// INTERMEDIATE CODE
// ==================

// Logically braking out functionality into smaller function, that do one thing

const { updateUser, createUser } = require('./api/users');

function saveUser(user) {
  if (user.id == null) {
    console.log('Created User');
    createUser(user);
  } else {
    console.log('Updated User');
    updateUser(user);
  }
}

function validateUser(user) {
  return [
    ...validateUsername(user.username),
    ...validatePassword(user.password)
  ]
}

function validateUsername(username) {
  const errors = [];

  if (!username) errors.push('Username is required');
  if (username != null && username.length < 3) errors.push('Username must be 3 or more characters');

  return errors;
}

// repeating ourselves with validation checks for username and password in above and below funcs

function validatePassword(password) {
  const errors = [];

  if (!password) errors.push('Password is required');
  if (password != null && password.length < 8) errors.push('Password must be 8 or more characters');

  return errors;
}

const user = {
  username: 'WDS',
  password: 'password'
}

// also, validate checks should only return booleans TRUE or FALSE, we shouldnot know what type of value to expect to know if it is correct or not

const errors = validateUser(user);
if (errors.length > 0) {
  errors.forEach(error => console.error(error));
  return;
}

saveUser(user);