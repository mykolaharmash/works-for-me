function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('');

  return `
    <item>${ contentString }</item>
  `;
}

module.exports = {
  render
};
