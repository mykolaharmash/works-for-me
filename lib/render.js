const Immutable = require('immutable');
const htmlBeautify = require('./html-beautify');

function renderContextContent (content, type, renderersMap) {
  let renderer = renderersMap[`renderer-${type}`];

  if (!renderer) {
    return '';
  }

  return renderer.render(content);
}

function render (tree, renderersMap) {
  let content = tree.get('content');
  let type = tree.get('type');

  if (!Immutable.List.isList(content)) {
    return tree;
  }

  let renderedTree = tree.update('content', content => {
    return content.map(context => {
      return render(context, renderersMap);
    });
  });

  return renderedTree.update('content', content => {
    return renderContextContent(content, type, renderersMap);
  });
}

module.exports = function (tree, renderersMap, beautify = true) {
  let content = render(Immutable.fromJS(tree), renderersMap).get('content');

  if (beautify) {
    return htmlBeautify(content);
  } else {
    return content;
  }
};
