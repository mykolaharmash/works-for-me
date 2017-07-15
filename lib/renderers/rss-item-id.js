function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('')

  return `
    <guid>${contentString}</guid>
  `
}

module.exports = {
  render
}
