const Immutable = require('immutable')

const {
  DESCRIPTION_LINK_TITLE_CONTEXT,
  DESCRIPTION_LINK_URL_CONTEXT
} = require('../constants')

function render (content = Immutable.List()) {
  if (content.size === 0) {
    return ''
  }

  let toolTitle = getLinkTitle(content)
  let toolUrl = getLinkUrl(content)

  if (toolUrl) {
    return renderAsLink(toolTitle, toolUrl)
  } else {
    return renderAsBlock(toolTitle)
  }
}

function getLinkTitle (content) {
  let titleContext = content.find(context => {
    return context.get('type') === DESCRIPTION_LINK_TITLE_CONTEXT
  })

  if (!titleContext) {
    return ''
  }

  return titleContext.get('content')
}

function getLinkUrl (content) {
  let linkContext = content.find(context => {
    return context.get('type') === DESCRIPTION_LINK_URL_CONTEXT
  })

  if (!linkContext) {
    return
  }

  return linkContext.get('content')
}

function renderAsLink (title, url) {
  return `
    <a class="description-link" href="${url}">${title}</a>
  `
}

function renderAsBlock (title) {
  return `
    <span class="description-link" tabindex="0">${title}</span>
  `
}

module.exports = {
  render
}
