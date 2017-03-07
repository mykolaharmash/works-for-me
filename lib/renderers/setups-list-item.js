const {
  BIO_CONTEXT,
  SETUPS_LIST_ITEM_KEY_CONTEXT,
  SETUP_UPDATE_DATE_CONTEXT,
  SETUP_CREATE_DATE_CONTEXT
} = require('../constants');

function isBioContext (context) {
  return context.get('type') === BIO_CONTEXT;
}

function isKeyContext (context) {
  return context.get('type') === SETUPS_LIST_ITEM_KEY_CONTEXT;
}

function isUpdateDateContext (context) {
  return context.get('type') === SETUP_UPDATE_DATE_CONTEXT;
}

function isCreateDateContext (context) {
  return context.get('type') === SETUP_CREATE_DATE_CONTEXT;
}

function formatDate (date) {
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

function renderCommitDate (date, type) {
  let formattedDate = formatDate(new Date(date));

  return `
    <time-ago date="${ date }" type="${ type }" class="item-date">
      ${ formattedDate }
    </time-ago>
  `;
}

function render (content = []) {
  let keyContext = content.find(isKeyContext);
  let createDateContext = content.find(isCreateDateContext);
  let updateDateContext = content.find(isUpdateDateContext);
  let renderedDate = '';

  if (!keyContext) {
    return '';
  }

  if (updateDateContext) {
    renderedDate = renderCommitDate(updateDateContext.get('content'), 'update');
  } else {
    renderedDate = renderCommitDate(createDateContext.get('content'), 'create');
  }

  let bioContext = content.find(isBioContext);

  return `
    <li class="setup-item">
      <a class="item-link" href="./setups/${ keyContext.get('content') }.html">
        ${ bioContext.get('content') } 
      </a>
      
      ${ renderedDate } 
    </li>
  `;
}

module.exports = {
  render
};
