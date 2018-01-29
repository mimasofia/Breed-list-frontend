'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  // console.log(data)
  $('.messages').text('Successfully signed up!')
  console.log('succes')
}

const signUpFailure = function () {
  // console.error(error)
  $('.messages').text('Error when signing up. Please try again')
  console.log('faliure')
}

const signInSuccess = function (data) {
  $('.messages').text('Successfully signed in!')
  console.log('success')
  // want to save this have token and the user d
  // store now has the user stuff after it runs even if the file is emptty
  store.user = data.user
}

const signInFailure = function () {
  // console.error(error)
  $('.messages').text('Error when signing in. Please try again')
}

const changePasswordSuccess = function () {
  // console.log('Successfully changed password')
  $('.messages').text('Successfully changed password!')
}

const changePasswordFailure = function (error) {
  console.log(error)
  $('.messages').text('Error when changing password. Please try again')
}

const signOutSuccess = function () {
  $('.list').empty()
  // console.log('Successfully signed out')
  $('.messages').text('Successfully signed out!')
  store.user = null
}

const signOutFailure = function (error) {
  console.log(error)
  console.log('fail')
  $('.messages').text('Error when signing out. Please try again')
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
