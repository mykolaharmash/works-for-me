function render (tree = []) {
  return tree
    .map(context => context.get('content'))
    .join(' ');
}

module.exports = {
  render
};
