function render (content) {
  let contentString = content
    .map(context => context.get('content'))
    .join('\n');

  return `
    <body>
      <nav class="goto-list">
        <a href="../index.html">See other guys</a>
      </nav>
      
      <div class="setup-root">
        ${contentString}  
      </div>
    </body>
  `;
}

module.exports = {
  render
};
