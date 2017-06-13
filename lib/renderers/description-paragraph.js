function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join(' ')
    .trim();

  if (!contentString) {
    return '';
  }

  return `
    <p class="description-paragraph">
      ${ contentString }
    </p>
  `;
}

module.exports = {
  render
};
