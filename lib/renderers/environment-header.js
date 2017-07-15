function render (tree = []) {
  let contentString = tree
    .map(context => context.get('content'))
    .join('')

  return `
    <section class="environment-header">
      ${contentString}
    </section>
  `
}

module.exports = {
  render
}
