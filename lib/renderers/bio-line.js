const { NEWLINE_LEXEME } = require('../constants');

let typeRenderersMap = {
  'name:': renderName,
  'info:': renderInfo,
  'location:': renderLocation,
  'link:': renderLink
};

function renderName (name) {
  return `
    <h1 class="name">${name}</h1>
  `;
}

function renderInfo (info) {
  return `
    <div class="info">${info}</div>
  `;
}

function renderLocation (location) {
  return `
    <div class="location">${location}</div>
  `;
}

function renderLink (linkHref) {
  let linkTitle = parseLinkTitle(linkHref);

  return `
    <a class="link" href="${linkHref}">${linkTitle}</a>
  `;
}

function sanitize (content) {
  return content.filter(lexeme => {
    return lexeme.get('type') !== NEWLINE_LEXEME;
  });
}

function parseLinkTitle (linkHref = '') {
  const TWITTER_PATTERN = /^https?:\/\/twitter\.com\/(@?.+)/;

  let twitterLink = linkHref.match(TWITTER_PATTERN);

  if (twitterLink) {
    return `@${twitterLink[1].replace(/^@/, '')}`;
  }

  return linkHref;
}


function render (content) {
  if (!content || !content.size) {
    return '';
  }

  let sanitizedContent = sanitize(content);
  let lineType =  sanitizedContent.first().get('content');
  let typeRenderer = typeRenderersMap[lineType];

  if (!typeRenderer || content.size < 2) {
    return '';
  }

  let contentString = sanitizedContent
    .slice(1)
    .map(lexeme => lexeme.get('content'))
    .join(' ');

  return typeRenderer(contentString);
}

module.exports = {
  render
};
