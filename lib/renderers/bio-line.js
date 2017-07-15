const { NEWLINE_LEXEME } = require('../constants')

let typeRenderersMap = {
  'name:': renderName,
  'occupation:': renderOccupation,
  'location:': renderLocation,
  'link:': renderLink
}

function renderName (name) {
  return `
    <h1 class="name">${name}</h1>
  `
}

function renderOccupation (occupation) {
  return `
    <div class="occupation">${occupation}</div>
  `
}

function renderLocation (location) {
  return `
    <div class="location">${location}</div>
  `
}

function renderLink (url) {
  let linkTitle = generateLinkTitle(url)
  let linkHref = generateLinkHref(url)

  return `
    <a class="link" href="${linkHref}">${linkTitle}</a>
  `
}

function sanitize (content) {
  return content.filter(lexeme => {
    return lexeme.get('type') !== NEWLINE_LEXEME
  })
}

function generateLinkTitle (url = '') {
  const TWITTER_PATTERN = /^https?:\/\/twitter\.com\/(@?.+)/

  let twitterLink = url.match(TWITTER_PATTERN)

  if (twitterLink) {
    return `@${twitterLink[1].replace(/^@/, '')}`
  }

  return url
}

function generateLinkHref (url = '') {
  const EMAIL_PATTERN = /^[^/]+@.*\.\w*/

  let emailLink = url.match(EMAIL_PATTERN)

  if (emailLink) {
    return `mailto:${emailLink[0]}`
  }

  return url
}

function render (content) {
  if (!content || !content.size) {
    return ''
  }

  let sanitizedContent = sanitize(content)
  let lineType = sanitizedContent.first().get('content')
  let typeRenderer = typeRenderersMap[lineType]

  if (!typeRenderer || content.size < 2) {
    return ''
  }

  let contentString = sanitizedContent
    .slice(1)
    .map(lexeme => lexeme.get('content'))
    .join(' ')

  return typeRenderer(contentString)
}

module.exports = {
  render
}
