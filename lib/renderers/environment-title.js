function render (tree = []) {
  let contentString = tree
    .slice(1)
    .map(context => context.get('content'))
    .join('');

  return `
    <h2 class="environment-title">${contentString}</h2>
  `;
}

module.exports = {
  render
};
