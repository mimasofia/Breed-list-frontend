'use strict'

const config = require('../config')
const store = require('../store')

const createNewListItem = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/breed_lists',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showFullList = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/breed_lists/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createNewListItem,
  showFullList
}
