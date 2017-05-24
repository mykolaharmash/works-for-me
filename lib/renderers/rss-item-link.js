function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('');

  return `
    <!-- htmlmin:ignore -->
    <link>${ contentString }</link>
    <!-- htmlmin:ignore -->
  `;
}

module.exports = {
  render
};
