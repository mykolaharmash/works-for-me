let Immutable = require('immutable');
let beautify = require('js-beautify').html;

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

  let beautified = beautify(content, {
    "indent_char": " ",
    "indent_size": 2,
    "max_preserve_newlines": 1,
    "preserve_newlines": true,
    "unformatted": ["sub", "sup", "b", "i", "u"],
    "content_unformatted": ["span", "a", "title", "description"],
    "wrap_line_length": 0,
    "end_with_newline": true
  });

  if (beautified === '\n') {
    return ''
  }

  return beautified;
};
