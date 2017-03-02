const {
  BIO_CONTEXT,
  SETUPS_LIST_ITEM_KEY_CONTEXT,
  SETUP_LATEST_COMMIT_DATE_CONTEXT
} = require('../constants');

function isBioContext (context) {
  return context.get('type') === BIO_CONTEXT;
}

function isKeyContext (context) {
  return context.get('type') === SETUPS_LIST_ITEM_KEY_CONTEXT;
}

function isLatestCommitContext (context) {
  return context.get('type') === SETUP_LATEST_COMMIT_DATE_CONTEXT;
}

function formatDate (date) {
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

function renderLatestCommitDate (date) {
  let formattedDate = (new Date(date)).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return `
    <time-ago date="${ date }" class="item-date">
      ${ formattedDate }
    </time-ago>
  `;
}

function render (content = []) {
  let keyContext = content.find(isKeyContext);
  let latestCommitDateContext = content.find(isLatestCommitContext);
  let latestCommitDate = '';

  if (!keyContext) {
    return '';
  }

  if (latestCommitDateContext) {
    latestCommitDate = renderLatestCommitDate(latestCommitDateContext.get('content'));
  }

  let bioContext = content.find(isBioContext);

  return `
    <li class="setup-item">
      <a class="item-link" href="./setups/${ keyContext.get('content') }.html">
        ${ bioContext.get('content') } 
      </a>
      
      ${ latestCommitDate } 
    </li>
  `;
}

module.exports = {
  render
};
