const {
  DESCRIPTION_CONTEXT
} = require('../constants');

function filterInterlineDescriptions (tree, context, index) {
  return context.get('type') !== DESCRIPTION_CONTEXT ||
    index === tree.size - 1;
}

function render (tree = []) {
  let contentString = tree
    .filter((context, index) => filterInterlineDescriptions(tree, context, index))
    .map(context => context.get('content'))
    .join('');

  return `
    <section class="bio">
      ${contentString}
    </section>
  `;
}

module.exports = {
  render
};
