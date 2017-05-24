const {
  TITLE,
  DESCRIPTION,
  BASE_URL
} = require('../constants');

function render (content = []) {
  let itemsContent = content
    .map(context => context.get('content'))
    .join('');

  return `
    <rss version="2.0">
      <channel>
        <title>${ TITLE }</title>
        <description>${ DESCRIPTION }</description>
        <!-- htmlmin:ignore -->
        <link>${ BASE_URL }</link>
        <!-- htmlmin:ignore -->
        <language>en</language>

        ${ itemsContent }

      </channel>
    </rss>
  `;
}

module.exports = {
  render
};
