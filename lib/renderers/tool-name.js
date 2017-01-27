const {
  TOOL_TITLE_CONTEXT,
  TOOL_LINK_CONTEXT
} = require('../constants');

function render (content = []) {
  let toolTitle = getToolTitle(content);
  let toolUrl = getToolUrl(content);

  if (toolUrl) {
    return renderAsLink(toolTitle, toolUrl);
  } else {
    return renderAsBlock(toolTitle);
  }
}

function getToolTitle (content) {
  let titleContext = content.find(context => {
    return context.get('type') === TOOL_TITLE_CONTEXT;
  });

  if (!titleContext) {
    return '';
  }

  return titleContext.get('content');
}

function getToolUrl (content) {
  let linkContext = content.find(context => {
    return context.get('type') === TOOL_LINK_CONTEXT;
  });

  if (!linkContext) {
    return;
  }

  return linkContext.get('content');
}

function renderAsLink (title, url) {
  return `
    <a class="tool-name" href="${url}">${title}</a>
  `;
}

function renderAsBlock (title) {
  return `
    <span class="tool-name">${title}</span>
  `;
}

module.exports = {
  render
};
