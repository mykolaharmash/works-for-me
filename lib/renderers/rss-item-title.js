function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join(' ')

  return `
    <title>${contentString}</title>
  `
}

module.exports = {
  render
}
