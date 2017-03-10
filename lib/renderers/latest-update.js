const {
  SETUP_UPDATE_DATE_CONTEXT,
  SETUP_UPDATE_MESSAGE_CONTEXT,
  UPDATE_TAG_TOKEN
} = require('../constants');

function formatDate (date) {
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

function renderDate (dateContext) {
  let date = new Date(dateContext.get('content'));

  return `
    <h4 class="latest-update-date">Latest update on ${ formatDate(date) }</h4>
  `;
}

function renderMessage (messageContext = '') {
  let lines = messageContext
    .get('content')
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length !== 0);

  // trim "update"-tag from first line of message
  let title = lines[0].substr(UPDATE_TAG_TOKEN.length);
  let message = lines.slice().splice(1).join('<br>');

  return `
    <div class="latest-update-body">
      <h5 class="latest-update-title">${ title }</h5>

      <p class="latest-update-message">
        ${ message } 
      </p>
    </div>
  `;
}

function render (content = []) {
  let dateContext = content.find(context => {
    return context.get('type') === SETUP_UPDATE_DATE_CONTEXT;
  });
  let messageContext = content.find(context => {
    return context.get('type') === SETUP_UPDATE_MESSAGE_CONTEXT;
  });

  let renderedDate = renderDate(dateContext);
  let renderedMessage = renderMessage(messageContext);

  return `
    <article class="latest-update">
      ${ renderedDate }
      ${ renderedMessage }
    </article>
  `;
}

module.exports = {
  render
};
