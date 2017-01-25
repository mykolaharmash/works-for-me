function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('<span>,</span>');

  return `
    <div class="tool-names-list">
      ${contentString}
    </div>
  `;
}

module.exports = {
  render
};
