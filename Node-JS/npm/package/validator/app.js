const validator = require("validator");

const email = "mfnaziz@example.com";
const emailValidation = validator.isEmail(email);

if (emailValidation) {
  console.log(`email is true`);
} else {
  console.log(`email is false`);
}

const noHP = "081578945612";
console.log(`phone length = ${noHP.length}`);
const phoneValidation = validator.isMobilePhone(noHP, "id-ID");

if (phoneValidation) {
  console.log(`number is true`);
} else {
  console.log(`number is false`);
}
