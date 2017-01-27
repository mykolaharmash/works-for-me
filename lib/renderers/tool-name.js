const {
  TOOL_NAME_CONTEXT,
  TOOL_LINK_CONTEXT
} = require('../constants');

function render (content = []) {
  let toolName = getToolName(content);
  let toolUrl = getToolUrl(content);

  if (toolUrl) {
    return renderLink(toolName, toolUrl);
  } else {
    return renderName(toolName);
  }
}

function getToolName (content) {
  let nameContext = content.find(context => {
    return context.get('type') === TOOL_NAME_CONTEXT;
  });

  if (!nameContext) {
    return '';
  }

  return getContextContentString(nameContext);
}

function getToolUrl (content) {
  let linkContext = content.find(context => {
    return context.get('type') === TOOL_LINK_CONTEXT;
  });

  if (!linkContext) {
    return;
  }

  return getContextContentString(linkContext);
}

function renderLink (name, url) {
  return `
    <a class="tool-name" href="${url}">${name}</a>
  `;
}

function renderName (name) {
  return `
    <span class="tool-name">${name}</span>
  `;
}

function getContextContentString (context) {
  return context
    .get('content')
    .map(context => context.get('content'))
    .join('');
}

module.exports = {
  render
};
