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
  $('#create-new-list-item').find('input:text, input:password, select, textarea').val('')
  $('input[type=number]').val('')
}

const onShowFullList = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  breedApi.showFullList(data)
    .then(breedUi.showFullListSuccess)
    .catch(breedUi.showFullListFailure)
}

const onShowOneBreed = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  breedApi.showOneBreed(data)
    .then(breedUi.showOneBreedSuccess)
    .catch(breedUi.showOneBreedFailure)
  $('#show-one-breed').find('input:text, input:password, select, textarea').val('')
}

const onUpdateListItem = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  breedApi.updateListItem(data)
    .then(breedUi.updateListItemSuccess)
    .catch(breedUi.updateListItemFailure)
  $('#create-new-list-item').find('input:text, input:password, select, textarea').val('')
  $('input[type=number]').val('')
}

const onRemoveOneListItem = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  breedApi.removeOneListItem(data)
    .then(breedUi.removeOneListItemSuccess)
    .catch(breedUi.removeOneListItemFailure)
}
const addHandlers = function () {
  $('#create-new-list-item').on('submit', onCreateNewListItem)
  $('#show-full-list').on('submit', onShowFullList)
  $('#show-one-breed').on('submit', onShowOneBreed)
  $('#update-list-item').on('submit', onUpdateListItem)
  $('#delete-one-item').on('submit', onRemoveOneListItem)
}

module.exports = {
  addHandlers
}
