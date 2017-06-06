const { TITLE } = require('../constants');

function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('');


  return `
    <!doctype html>
    
    <html lang="en">
      <head>
        <title>Setups List</title>
        
        <meta charset="utf-8">
        <meta name="description" content="Collection of people's software setups">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <link rel="stylesheet" href="./statics/main-list.css">
        <link rel="stylesheet" href="./statics/main-list.mobile.css"> 
        <link rel="alternate" 
              type="application/rss+xml" 
              title="${ TITLE }" 
              href="./rss.xml"
        >
      </head>
      <body>
        <nav class="external-links">
          <a href="https://github.com/nik-garmash/works-for-me#how-to-add-my-setup" 
            class="external-link-item"
          >How To: Add your setup</a>
           
          <a href="./playground/playground.html" 
            class="external-link-item"
          >Playground</a>
          
          <a href="./rss.xml" 
            class="external-link-item"
          >RSS</a> 
          <a href="https://github.com/nik-garmash/works-for-me" 
             class="external-link-item"
          >GitHub</a>
        </nav>
         
        <header class="header">
          <h1 class="title">Works for me</h1>
          <p class="subtitle">Collection of cozy setups</p>
        </header>
        
        <main class="main">
          <p class="list-caption">Latest updates</p>
          
          ${ contentString }
        </main>
        
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-100562395-1', 'auto');
          ga('send', 'pageview');
        </script>
      </body>
    </html>
  `;
}

module.exports = {
  render
};
