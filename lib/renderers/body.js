function render (content) {
  let contentString = content
    .map(context => context.get('content'))
    .join('\n')

  return `
    <body>
      <header class="header">
        <a href="../../index.html" class="logo inline">
          Works for me
        </a>
        <a href="../../index.html" class="logo">
          Works<br/>
          for<br/>
          me
        </a>
        <nav class="navigation">
          <a
            href="../../playground/playground.html"
            class="navigation-item"
          >Playground</a>

          <a
            href="../../rss.xml"
            class="navigation-item"
          >RSS</a>

          <a
            href="https://github.com/nik-garmash/works-for-me"
            class="navigation-item"
          >GitHub</a>

          <a
            href="https://github.com/nik-garmash/works-for-me#contribute-a-toolkit"
            class="navigation-item highlight"
          >Contribute a toolkit</a>
        </nav>
      </header>
      
      <div class="setup-root">
        ${contentString}  
      </div>
      
      <script src="../../statics/place-bio.js"></script>
      <script>
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-100562395-1', 'auto');
        ga('send', 'pageview');
      </script>
    </body>
  `
}

module.exports = {
  render
}
