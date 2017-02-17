const {
  SETUPS_LIST_ITEM_KEY_CONTEXT
} = require('../constants');

function isKeyContext (context) {
  return context.get('type') === SETUPS_LIST_ITEM_KEY_CONTEXT;
}

function render (content = []) {
  let keyContext = content.find(isKeyContext);

  if (!keyContext) {
    return '';
  }

  let contentString = content
    .filterNot(isKeyContext)
    .map(context => context.get('content'))
    .join('');

  return `
    <li class="setup-item">
      <a class="item-link" href="./setups/${ keyContext.get('content') }.html">
        ${ contentString } 
      </a>
    </li>
  `;
}

module.exports = {
  render
};
