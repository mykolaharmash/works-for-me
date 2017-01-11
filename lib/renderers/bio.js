function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('\n');

  return `
    <section class="bio">
      ${contentString}
    </section>
  `;
}

module.exports = {
  render
};
