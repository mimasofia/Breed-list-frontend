'use strict'
// const store = require('../store')
const showBreedList = require('../templates/breed-listing.handlebars')

const createNewListItemSuccess = function (data) {
  // console.log(data)
  // console.log('success')
  const breedHtml = (
    `
    <h3>Dog breed: ${data.breed_list.breed}</h3>
    <p>Dog ID: ${data.breed_list.id}</p>
    <p>Dog gender: ${data.breed_list.gender}</p>
    <p>Dog weight: ${data.breed_list.weight}</p>
    <p>Dog height: ${data.breed_list.height}</p>
    `
  )
  $('.list').empty()
  $('.list').append(breedHtml)
  $('.messages').text('Success!')
  $('.details').hide()
  $('#friendModal').modal('hide')
  $('.add-dog-messages').text('')
}

const createNewListItemFailure = function () {
  // console.log(error)
  // console.log('nope')
  $('.add-dog-messages').text('Please input all fields to add to list')
  $('.messages').text('Please input all fields to add to list')
}
const showFullListSuccess = function (data) {
  $('.list').empty()
  $('.details').hide()
  $('.messages').text('')
  $('.modal-messages').text('')
  if (data.breed_lists.length === 0) {
    $('.list').text('No dogs in list. Please create a dog-friend first with  -Add Potential Dog-friend to List button- above')
  } else {
    const showBreedHtml = showBreedList({ breed_lists: data.breed_lists })
    $('.list').append(showBreedHtml)
    $('.messages').text('Success! Scroll to see all')
    $('.details').hide()
  }
}

const showFullListFailure = function () {
  $('.messages').text('Error try again')
  $('.details').hide()
}

const showOneBreedSuccess = function (data) {
  // console.log(error)
  const breedHtml = (
    `
    <h3>Breed: ${data.breed_list.breed}</h3>
    <p>Dog ID: ${data.breed_list.id}</p>
    <p>Gender: ${data.breed_list.gender}</p>
    <p>Weight: ${data.breed_list.weight}</p>
    <p>Height: ${data.breed_list.height}</p>
    `
  )
  $('.list').empty()
  $('.list').append(breedHtml)
  $('.messages').text('Success!')
  $('.details').hide()
  $('.modal-messages').text('')
}

const showOneBreedFailure = function (data) {
  // console.log(error)
  $('.messages').text('Error getting breed. Please provide existing dog ID')
  $('.list').text('=(')
  $('.details').hide()
}

const updateListItemSuccess = function (data) {
  $('.list').empty()
  const breedHtml = (
    `
    <h3>Breed: ${data.breed_list.breed}</h3>
    <p>Dog ID: ${data.breed_list.id}</p>
    <p>Gender: ${data.breed_list.gender}</p>
    <p>Weight: ${data.breed_list.weight}</p>
    <p>Height: ${data.breed_list.height}</p>
    `
  )
  $('.list').append(breedHtml)
  $('.messages').text('Success updating. See update below')
  $('.details').hide()
  $('#updateModal').modal('hide')
  $('.modal-messages').text('')
}

const updateListItemFailure = function () {
  $('.messages').text('Error. Please fill out ALL fields and have an existing dog ID')
  $('.details').hide()
  $('.modal-messages').text('Error. Please fill out ALL fields and have an existing dog ID')
}

const removeOneListItemSuccess = function (data) {
  $('.list').empty()
  $('.messages').text('Success removing item from list!')
  $('.details').hide()
  $('.list').text('Click Show Full list to see updated list')
  $('.modal-messages').text('')
}

const removeOneListItemFailure = function () {
  $('.messages').text('Error. Please provide existing dog ID or add new dog to list')
  $('.details').hide()
  $('.list').text('=(')
}

const clearList = () => {
  $('.list').empty()
  $('.messages').text('Things to do: Add a Dog, See Full list, Update existing Dog, Remove dog from list, View one Dog')
}

module.exports = {
  createNewListItemSuccess,
  createNewListItemFailure,
  showFullListSuccess,
  showFullListFailure,
  showOneBreedSuccess,
  showOneBreedFailure,
  updateListItemSuccess,
  updateListItemFailure,
  removeOneListItemSuccess,
  removeOneListItemFailure,
  clearList
}
