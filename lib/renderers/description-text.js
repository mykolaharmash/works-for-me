function render (content = []) {
  return content
    .map(context => context.get('content'))
    .join(' ')
}

module.exports = {
  render
}
