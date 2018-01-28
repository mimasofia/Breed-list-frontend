'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const breedApi = require('./breedApi')
const breedUi = require('./breedUi')

const onCreateNewListItem = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  breedApi.createNewListItem(data)
    .then(breedUi.createNewListItemSuccess)
    .catch(breedUi.createNewListItemFailure)
}

const addHandlers = function () {
  $('#create-new-list-item').on('submit', onCreateNewListItem)
}

module.exports = {
  addHandlers
}
