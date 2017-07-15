const Immutable = require('immutable')

const {
  IMAGE_TITLE_CONTEXT,
  IMAGE_URL_CONTEXT
} = require('../constants')

function render (content = Immutable.List()) {
  if (content.size === 0) {
    return ''
  }

  let title = getTitle(content)
  let url = getUrl(content)

  if (!url) {
    return ''
  }

  return renderImage(title, url)
}

function getTitle (content) {
  let titleContext = content.find(context => {
    return context.get('type') === IMAGE_TITLE_CONTEXT
  })

  if (!titleContext) {
    return ''
  }

  return titleContext.get('content')
}

function getUrl (content) {
  let linkContext = content.find(context => {
    return context.get('type') === IMAGE_URL_CONTEXT
  })

  if (!linkContext) {
    return
  }

  return linkContext.get('content')
}

function renderImage (title, url) {
  return `
    <figure class="image">
      <img class="image__picture" src="${url}" alt="${title}"/>
    </figure>
  `
}

module.exports = {
  render
}
