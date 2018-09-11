const validator = require('validator')

function isEmail(email) {
  return email && validator.isEmail(email) && email.length < 50
}

function isUserName(name) {
  return name && name.length >=2 && name.length < 20
}

function isPassword(password) {
  return password.length > 5 && password.length < 50
}

function isMobilePhone(phone) {
  return phone && validator.isMobilePhone(phone)
}

module.exports = {
  isEmail,
  isUserName,
  isPassword,
  isMobilePhone
}
