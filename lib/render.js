let Immutable = require('immutable');

function render (tree, renderersMap) {
  let content = tree.get('content');
  let renderedTree;

  if (!content.size) {
    return tree;
  }

  renderedTree = tree.update('content', content => {
    return content.map(context => {
      return render(context, renderersMap);
    });
  });

  let renderer = renderersMap[tree.get('type')];

  if (!renderer) {
    return renderedTree;
  }

  return renderedTree.update('content', content => {
    return renderer.render(content);
  });
}

module.exports = function (tree, renderersMap) {
  return render(Immutable.fromJS(tree), renderersMap).get('content');
};
