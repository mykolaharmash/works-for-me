function render (tree = []) {
  let contentString = tree
    .map(context => context.get('content'))
    .join('');

  return `
    <div class="description">
      ${contentString}
    </div>
  `;
}

module.exports = {
  render
};
