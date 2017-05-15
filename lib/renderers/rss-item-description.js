const {
  NEW_SETUP_TAG_TOKEN,
  UPDATE_TAG_TOKEN
} = require('../constants');

function render (content = []) {
  const STRIP_TAG_PATTERN = new RegExp(`^(${ NEW_SETUP_TAG_TOKEN }|${ UPDATE_TAG_TOKEN })\\s*`);
  let contentString = content
    .map(context => context.get('content'))
    .join(' ')
    .replace(STRIP_TAG_PATTERN, '');

  return `
    <description>${ contentString }</description>
  `;
}

module.exports = {
  render
};
