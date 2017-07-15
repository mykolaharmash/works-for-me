function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('')

  if (!contentString) {
    return ''
  }

  return `
    <div class="description">
      ${contentString}
    </div>
  `
}

module.exports = {
  render
}
