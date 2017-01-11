const { NEWLINE_LEXEME } = require('../constants');

let typeRenderersMap = {
  'name:': renderName,
  'info:': renderInfo
};

function renderName (content) {
  return `
    <h1 class="name">${content}</h1>
  `;
}

function renderInfo (content) {
  return `
    <div class="info">${content}</div>
  `;
}

function sanitize (content) {
  return content.filter(lexeme => {
    lexeme.type !== NEWLINE_LEXEME;
  });
}

function render (content) {
  if (!content) {
    return;
  }

  let type = content.get(0).get('content');
  let typeRenderer = typeRenderersMap[type];

  if (!typeRenderer || content.size < 2) {
    return;
  }

  let lineContent = content
    .slice(1)
    .map(lexeme => lexeme.get('content'))
    .join(' ');

  return typeRenderer(lineContent);
}

module.exports = {
  sanitize,
  render
};
