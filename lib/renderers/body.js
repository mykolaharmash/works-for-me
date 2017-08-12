function render (content) {
  let contentString = content
    .map(context => context.get('content'))
    .join('\n')

  return `
    <body>
      <header class="header">
        <nav class="navigation">
          <a href="../../index.html" class="logo inline">
            Works for me
          </a>
          <a href="../../index.html" class="logo">
            Works<br/>
            for<br/>
            me
          </a>
          
          <a
            href="../../playground/playground.html"
            class="navigation-item"
          >Playground</a>

          <a
            href="../../subscribe/subscribe.html"
            class="navigation-item"
          >Subscribe</a>

          <a
            href="https://github.com/nik-garmash/works-for-me#contribute-a-toolkit"
            class="navigation-item highlight"
          >Contribute a toolkit on GitHub</a>
        </nav>
        
        <div class="share">
          <div class="share__twitter">
            <img class="share__icon" src="../../statics/twitter.svg">
            <a
              href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fworks-for-me.github.io%2F&text=Collection%20of%20developer%20toolkits&hashtags=devtoolkit,worksforme"
              target="_blank"
              class="share__link"
            >Tweet</a>
          </div>
          <div class="share__facebook">
            <img class="share__icon" src="../../statics/facebook.svg">
            <a class="share__link"
               href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fworks-for-me.github.io%2F"
               target="_blank">
              Share
            </a>
          </div>
          <div class="share__github">
            <img class="share__icon" src="../../statics/github.svg">
            <a class="share__link"
               href="https://github.com/nik-garmash/works-for-me"
               target="_blank">
              Star
            </a>
          </div>
        </div>
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
