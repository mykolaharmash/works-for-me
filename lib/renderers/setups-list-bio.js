function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('');

  return `
    <div class="setup-item__bio">
      ${ contentString } 
    </div>
  `
}

module.exports = {
  render
}
