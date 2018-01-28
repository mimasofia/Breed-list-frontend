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

const signInSuccess = function (data) {
  alert('Successfully signed in!')
  console.log('success')
  // want to save this have token and the user d
  // store now has the user stuff after it runs even if the file is emptty
  store.user = data.user
}

const signInFailure = function () {
  // console.error(error)
  alert('Error when signing in. Please try again')
}

const changePasswordSuccess = function () {
  // console.log('Successfully changed password')
  alert('Successfully changed password!')
}

const changePasswordFailure = function (error) {
  console.log(error)
  alert('Error when changing password. Please try again')
}

const signOutSuccess = function () {
  console.log('Successfully signed out')
  alert('Successfully signed out!')
  store.user = null
}

const signOutFailure = function (error) {
  console.log(error)
  console.log('fail')
  alert('Error when signing out. Please try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
