function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('\n')

  return `
    <div class="tool-head">
      ${contentString}
    </div>
  `
}

module.exports = {
  render
}
