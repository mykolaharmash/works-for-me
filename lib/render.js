let Immutable = require('immutable');
let posthtml = require('posthtml');
let beautify = require('posthtml-beautify');

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

module.exports = function (tree, renderersMap) {
  let content = render(Immutable.fromJS(tree), renderersMap).get('content');

  return posthtml()
    .use(beautify())
    .process(content, { sync: true })
    .html;
};
