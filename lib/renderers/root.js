function render (content) {
  let contentString = content
    .map(context => context.get('content'))
    .join('\n');

  return `
    <!doctype html>
    
    <html>
      <head lang="en">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../statics/setup.css">
        <link rel="stylesheet" href="../statics/setup.mobile.css"> 
      </head>
      <body>
        <nav class="goto-list">
          <a href="../index.html">See other guys</a>
        </nav>
        
        ${contentString}  
      </body>
    </html>
  `;
}

module.exports = {
  render
};
