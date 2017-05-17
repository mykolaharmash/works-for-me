function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('');

  let date = (new Date(contentString)).toGMTString();

  return `
    <pubDate>${ date }</pubDate>
  `;
}

module.exports = {
  render
};
