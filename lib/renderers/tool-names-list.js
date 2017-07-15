function render (content = []) {
  const separator = '<span class="tool-names-list-separator">,</span>'

  let contentString = content
    .map(context => context.get('content'))
    .join(separator)

  return `
    <div class="tool-names-list">
      ${contentString}
    </div>
  `
}

module.exports = {
  render
}
