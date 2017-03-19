const {
  NEWLINE_TOKEN
} = require('../constants.js');

function renderNewlines (contentString) {
  return contentString.replace(new RegExp(`${ NEWLINE_TOKEN }`, 'g'), '<br>');
}

function renderInternals (contentString) {
  let newlines = renderNewlines(contentString);

  return newlines;
}

function getContentString (tree) {
  let contentString = tree
    .map(lexeme => lexeme.get('content'))
    .join(' ')
    .trim();

  return renderInternals(contentString);
}

function render (tree = []) {
  let contentString = getContentString(tree);

  if (!contentString) {
    return '';
  }

  return `
    <div class="description">
      ${ contentString }
    </div>
  `;
}

module.exports = {
  render
};
