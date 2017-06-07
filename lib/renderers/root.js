function render (content) {
  let contentString = content
    .map(context => context.get('content'))
    .join('\n');

  return `
    <!doctype html>

    <html lang="en">
      ${ contentString } 
    </html>
  `;
}

module.exports = {
  render
};
