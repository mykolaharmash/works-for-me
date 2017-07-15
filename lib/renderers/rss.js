const {
  TITLE,
  DESCRIPTION,
  BASE_URL
} = require('../constants')

function render (content = []) {
  let itemsContent = content
    .map(context => context.get('content'))
    .join('')

  return `
    <?xml version="1.0" encoding="UTF-8"?>
    
    <rss version="2.0">
      <channel>
        <title>${TITLE}</title>
        <description>${DESCRIPTION}</description>
        <link>${BASE_URL}</link>
        <language>en</language>

        ${itemsContent}

      </channel>
    </rss>
  `
}

module.exports = {
  render
}
