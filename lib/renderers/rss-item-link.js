function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('')

  return `
    <link>${contentString}</link>
  `
}

module.exports = {
  render
}
