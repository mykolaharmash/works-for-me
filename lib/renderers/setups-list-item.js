const {
  BIO_CONTEXT,
  SETUP_UPDATE_DATE_CONTEXT,
  SETUP_CREATE_DATE_CONTEXT
} = require('../constants')

function isBioContext (context) {
  return context.get('type') === BIO_CONTEXT
}

function isUpdateDateContext (context) {
  return context.get('type') === SETUP_UPDATE_DATE_CONTEXT
}

function isCreateDateContext (context) {
  return context.get('type') === SETUP_CREATE_DATE_CONTEXT
}

function formatDate (date) {
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

function renderCommitDate (date, type) {
  let formattedDate = formatDate(new Date(date))

  return `
    <time-ago date="${date}" type="${type}" class="item-date">
      ${formattedDate}
    </time-ago>
  `
}

function render (content = []) {
  let createDateContext = content.find(isCreateDateContext)
  let updateDateContext = content.find(isUpdateDateContext)
  let renderedDate = ''

  if (updateDateContext) {
    renderedDate = renderCommitDate(updateDateContext.get('content'), 'update')
  } else {
    renderedDate = renderCommitDate(createDateContext.get('content'), 'create')
  }

  let bioContext = content.find(isBioContext)

  return `
    <li class="setup-item">
      ${bioContext.get('content')} 
      
      <div class="setup-item__date">
        ${renderedDate} 
      </div>
    </li>
  `
}

module.exports = {
  render
}
