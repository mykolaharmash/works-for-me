function render (content) {
  let contentString = content
    .map(context => context.get('content'))
    .join('\n');

  return `
    <div class="setup-root">
      ${ contentString } 
    </div>
  `;
}

module.exports = {
  render
};
