const { NEWLINE_LEXEME } = require('../constants');

let typeRenderersMap = {
  'name:': renderName,
  'occupation:': renderOccupation
};

function renderName (name) {
  return name;
}

function renderOccupation (occupation) {
  return `(${ occupation})`;
}

function sanitize (content) {
  return content.filter(lexeme => {
    return lexeme.get('type') !== NEWLINE_LEXEME;
  });
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
