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
            href="../../subscribe/subscribe.html"
            class="navigation-item"
          >Subscribe</a>

          <a
            href="https://github.com/nik-garmash/works-for-me#contribute-a-toolkit"
            class="navigation-item highlight"
          >Contribute a toolkit on GitHub</a>
        </nav>
      </header>

      <div class="setup-root">
        ${contentString}
      </div>

      <script src="../../statics/place-bio.js"></script>
    </body>
  `
}

module.exports = {
  render
}
