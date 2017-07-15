function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('\n')

  return `
    <div class="tool-item">
      ${contentString}
    </div>
  `
}

module.exports = {
  render
}
