function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('');

  return `
    <author>${ contentString }</author>
  `;
}

module.exports = {
  render
};
