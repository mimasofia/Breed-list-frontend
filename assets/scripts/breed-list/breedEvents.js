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
  // $('#create-new-list-item').find('input:text, input:password, select, textarea').val('')
}

const onShowFullList = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  breedApi.showFullList(data)
    .then(breedUi.showFullListSuccess)
    .catch(breedUi.showFullListFailure)
}

const addHandlers = function () {
  $('#create-new-list-item').on('submit', onCreateNewListItem)
  $('#show-full-list').on('submit', onShowFullList)
}

module.exports = {
  addHandlers
}
