function render (content) {
  let contentString = content
    .map(context => context.get('content'))
    .join('\n');

  return `
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
