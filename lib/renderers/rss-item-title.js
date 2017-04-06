function render (tree = []) {
  let contentString = tree
    .map(context => context.get('content'))
    .join(' ');

  return `
    <title>${ contentString }</title>
  `;
}

module.exports = {
  render
};
