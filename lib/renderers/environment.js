function render (tree = []) {
  let contentString = tree
    .map(context => context.get('content'))
    .join('')

  return `
    <article class="environment">
      ${contentString}
    </article>
  `
}

module.exports = {
  render
}
