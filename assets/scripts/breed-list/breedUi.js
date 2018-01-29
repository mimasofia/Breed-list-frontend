'use strict'
// const store = require('../store')
const showBreedList = require('../templates/breed-listing.handlebars')

const createNewListItemSuccess = function (data) {
  // console.log(data)
  // console.log('success')
  const breedHtml = (
    `
    <h3>Dog ID: ${data.breed_list.id}</h3>
    <p>Dog breed: ${data.breed_list.breed}</p>
    <p>Dog gender: ${data.breed_list.gender}</p>
    <p>Dog weight: ${data.breed_list.weight}</p>
    <p>Dog height: ${data.breed_list.height}</p>
    `
  )
  $('.list').append(breedHtml).scroll()
  $('.messages').text('Success! Scroll to see')
}

const createNewListItemFailure = function () {
  // console.log(error)
  // console.log('nope')
  $('.messages').text('Please input all fields to add to list')
}
const showFullListSuccess = function (data) {
  $('.list').empty()
  const showBreedHtml = showBreedList({ breed_lists: data.breed_lists })
  $('.list').append(showBreedHtml)
  $('.messages').text('Success! Scroll to see all')
}

const showFullListFailure = function () {
  $('.messages').text('Error try again')
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
  $('.one-breed').append(breedHtml)
  // $('list').empty()
  $('.messages').text('Success! Scroll to see')
}

const showOneBreedFailure = function () {
  // console.log(error)
  $('.messages').text('Error getting breed. Please provide list item ID')
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
}

const updateListItemFailure = function () {
  $('.messages').text('Error on update. Please Fill out ALL fields')
}

const removeOneListItemSuccess = function () {
  $('.messages').text('Success removing item from list!')
}

const removeOneListItemFailure = function () {
  $('messages').text('Error on removing item from list. Please try again by entering Breed ID')
}

const clearList = () => {
  $('.list').empty()
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
