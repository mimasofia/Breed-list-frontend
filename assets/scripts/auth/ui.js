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
  store.user = data.user
  $('.details').text('Enjoy making a list of your potential dog-friends!')
  $('#sign-in-modal').modal('hide')
  $('#sign-in-up').addClass('hidden')
  $('#account-pass-out').removeClass('hidden')
  $('#add-friend-here').removeClass('hidden')
  $('#update-friend-here').removeClass('hidden')
  $('#show-full-list').removeClass('hidden')
  $('#show-one-breed').removeClass('hidden')
  $('#delete-one-item').removeClass('hidden')
  $('.list').text('All list related items will appear HERE')
}

const signInFailure = function () {
  // console.error(error)
  $('.messages').text('Error when signing in. Please try again')
}

const changePasswordSuccess = function () {
  // console.log('Successfully changed password')
  $('.messages').text('Successfully changed password!')
}

const changePasswordFailure = function () {
  // console.log(error)
  $('.messages').text('Error when changing password. Please try again')
}

const signOutSuccess = function () {
  $('.list').empty()
  // console.log('Successfully signed out')
  // $('words-hide').addClass('hidden')
  store.user = null
  $('.messages').text('Successfully signed out!')
  $('#sign-in-up').removeClass('hidden')
  $('#account-pass-out').addClass('hidden')
  $('#add-friend-here').addClass('hidden')
  $('#update-friend-here').addClass('hidden')
  $('#show-full-list').addClass('hidden')
  $('#show-one-breed').addClass('hidden')
  $('#delete-one-item').addClass('hidden')
  $('.details').text('Sign-up or Sign-in to start your very own list!')
  $('#accountModal').modal('hide')
}

const signOutFailure = function () {
  // console.log(error)
  // console.log('fail')
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
