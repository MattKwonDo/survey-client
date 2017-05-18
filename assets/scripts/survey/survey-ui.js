'use strict'

const store = require('../store')
const showSurveysTemplate = require('../templates/survey.handlebars')

const clearSurveyModal = function () {
  $('#title').val('')
  // $('#q1').val('')
  // $('#q2').val('')
  // $('#q3').val('')
}

const createSurveySuccess = (data) => {
  store.user = data.user
}

const createSurveyFailure = (error) => {
  console.error(error)
}

const updateSurveySuccess = (data) => {
  // store.user = data.user
  console.log('SUCCESS AT UPDATING THE SURVEY!')
}

const updateSurveyFailure = (error) => {
  console.error(error)
}

const getSurveysSuccess = (data) => {
  const showSurveysHtml = showSurveysTemplate({ surveys: data.surveys })
  store.surveys = data.surveys
  console.log('>>>>> store.surveys = ', store.surveys)
  $('#surveys-content').html(showSurveysHtml)
}

const getSurveysFailure = (error) => {
  console.error(error)
}

module.exports = {
  clearSurveyModal,
  createSurveySuccess,
  createSurveyFailure,
  updateSurveySuccess,
  updateSurveyFailure,
  getSurveysSuccess,
  getSurveysFailure

}
