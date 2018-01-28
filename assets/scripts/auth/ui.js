'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  // console.log(data)
  alert('Successfully signed up!')
  console.log('succes')
}

const signUpFailure = function () {
  // console.error(error)
  alert('Error when signing up. Please try again')
  console.log('faliure')
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
