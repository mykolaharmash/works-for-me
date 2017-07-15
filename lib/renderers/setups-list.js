function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('')

  return `
    <ul class="setups-list">
      ${contentString}
    </ul>
  `
}

module.exports = {
  render
}
