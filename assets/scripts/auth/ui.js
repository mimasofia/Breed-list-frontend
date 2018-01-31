'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  // console.log(data)
  $('.messages').text('Successfully signed up!')
  $('.sign-messages').text('Successfully signed up!')
  // console.log('succes')
}

const signUpFailure = function () {
  // console.error(error)
  $('.messages').text('Error when signing up. Please try again')
  $('.sign-messages').text('Error when signing up. Please try again')
  // console.log('faliure')
}

const signInSuccess = function (data) {
  $('.messages').text('Successfully signed in!')
  store.user = data.user
  $('.details').text('If this is your first time start by adding a Dog to the list with -Add Potential Dog-friend to List- button')
  $('#sign-in-modal').modal('hide')
  $('#sign-in-up').addClass('hide')
  $('#account-pass-out').removeClass('hide')
  $('#add-friend-here').removeClass('hide')
  $('#update-friend-here').removeClass('hide')
  $('#show-full-list').removeClass('hide')
  $('#show-one-breed').removeClass('hide')
  $('#delete-one-item').removeClass('hide')
  $('.list').text('All list related items will appear HERE')
  $('.list').removeClass('hide')
  $('.change-out-messages').text('')
}

const signInFailure = function () {
  // console.error(error)
  $('.messages').text('Error when signing in. Please try again')
  $('.sign-messages').text('Error when signing in. Please try again')
}

const changePasswordSuccess = function () {
  // console.log('Successfully changed password')
  $('.messages').text('Successfully changed password!')
  $('.change-out-messages').text('')
  $('#accountModal').modal('hide')
}

const changePasswordFailure = function () {
  // console.log(error)
  $('.messages').text('Error when changing password. Please try again')
  $('.change-out-messages').text('Error when changing password. Please try again')
}

const signOutSuccess = function () {
  $('.list').empty()
  // console.log('Successfully signed out')
  // $('words-hide').addClass('hidden')
  store.user = null
  $('.messages').text('Successfully signed out!')
  $('#sign-in-up').removeClass('hide')
  $('#account-pass-out').addClass('hide')
  $('#add-friend-here').addClass('hide')
  $('#update-friend-here').addClass('hide')
  $('#show-full-list').addClass('hide')
  $('#show-one-breed').addClass('hide')
  $('#delete-one-item').addClass('hide')
  $('.details').text('Sign-up or Sign-in to start your very own list!')
  $('#accountModal').modal('hide')
  $('.list').addClass('hide')
  $('.change-out-messages').text('')
}

const signOutFailure = function () {
  // console.log(error)
  // console.log('fail')
  $('.messages').text('Error when signing out. Please try again')
  $('.change-out-messages').text('Error when signing out. Please try again')
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
