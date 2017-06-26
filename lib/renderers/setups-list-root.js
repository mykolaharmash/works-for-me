const { TITLE } = require('../constants');

function render (content = []) {
  let contentString = content
    .map(context => context.get('content'))
    .join('');


  return `
    <!doctype html>
    
    <html lang="en">
      <head>
        <title>${ TITLE }</title>
        
        <meta charset="utf-8">
        <meta name="description" content="Collection of people's software setups">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <link rel="stylesheet" href="./statics/global.css">
        <link rel="stylesheet" href="./statics/header.css">
        <link rel="stylesheet" href="./statics/main-list.css">
        <link rel="stylesheet" href="./statics/main-list.mobile.css"> 
        <link rel="alternate" 
              type="application/rss+xml" 
              title="${ TITLE }" 
              href="./rss.xml"
        >
      </head>
      <body>
        <header class="header">
          <a href="./index.html" class="logo inline">
            Works for me
          </a>
          <a href="./index.html" class="logo">
            Works<br/>
            for<br/>
            me
          </a>
          <nav class="navigation">
            <a
              href="./playground/playground.html"
              class="navigation-item"
            >Playground</a>

            <a
              href="./rss.xml"
              class="navigation-item"
            >RSS</a>

            <a
              href="https://github.com/nik-garmash/works-for-me"
              class="navigation-item"
            >GitHub</a>

            <a
              href="https://github.com/nik-garmash/works-for-me#how-to-add-my-setup"
              class="navigation-item highlight"
            >How To: Add your setup</a>
          </nav>
        </header>
         
        <div class="main-container">
          <div class="description">
            <div>Collection of setups from ones who care about their tools.</div>
            <div class="description__sub">Discover and share useful products.</div>
          </div>
          
          <main class="main">
            <p class="list-caption">Latest updates</p>
            
            ${ contentString }
          </main>
        </div>
        
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
