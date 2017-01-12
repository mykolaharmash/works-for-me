function render (content) {
  let contentString = content
    .map(context => context.get('content'))
    .join('\n');

  return `
    <!doctype html>
    <html>
      <body>
        ${contentString}  
      </body>
    </html>
  `;
}

module.exports = {
  render
};
