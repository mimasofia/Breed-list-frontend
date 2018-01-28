'use strict'
const store = require('../store')

const createNewListItemSuccess = function (data) {
  console.log(data)
  console.log('success')
  alert('success')
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
