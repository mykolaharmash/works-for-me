function render (content = []) {
  let contentString = content
    .map(context => content.get('content'))
    .join('');

  return `
    <!doctype html>
    
    <html>
      <body>
        ${ contentString }
      </body>
    </html>
  `;
}

module.exports = {
  render
};
