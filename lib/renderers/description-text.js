function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join(' ')

  return `
    <span>${ contentString }</span>
  `
}

module.exports = {
  render
}
