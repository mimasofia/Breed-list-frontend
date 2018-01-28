'use strict'
const store = require('../store')

const createNewListItemSuccess = function (data) {
  console.log(data)
  console.log('success')
  alert('success')
  const breedHtml = (
    `
    <p>Dog ID: ${data.breed_list.id}</p>
    <p>Dog breed: ${data.breed_list.breed}</p>
    <p>Dog gender: ${data.breed_list.gender}</p>
    <p>Dog weight: ${data.breed_list.weight}</p>
    <p>Dog height: ${data.breed_list.height}</p>
    `
  )
  $('.list').append(breedHtml).scroll()
}

const createNewListItemFailure = function (error) {
  console.log(error)
  console.log('nope')
  alert('error')
}

module.exports = {
  createNewListItemSuccess,
  createNewListItemFailure
}
