const {
  NEW_SETUP_TAG_TOKEN,
  UPDATE_TAG_TOKEN
} = require('../constants');

function render (tree = []) {
  const STRIP_TAG_PATTERN = new RegExp(`^(${ NEW_SETUP_TAG_TOKEN }|${ UPDATE_TAG_TOKEN })`);
  let contentString = tree
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
