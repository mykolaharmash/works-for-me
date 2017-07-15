function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('')

  return `
    <section class="tools-list">
      ${contentString}
    </section>
  `
}

module.exports = {
  render
}
