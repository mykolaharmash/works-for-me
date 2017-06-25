function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join(' ')

  if (!contentString) {
    return ''
  }

  return contentString
}

module.exports = {
  render
}
