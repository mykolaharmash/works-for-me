function render (content = []) {
  let itemsContent = content
    .map(context => context.get('content'))
    .join('');

  return `
    <rss version="2.0">
      <channel>
        <title>Works For Me</title>

        ${ itemsContent }

      </channel>
    </rss>
  `;
}

module.exports = {
  render
};
