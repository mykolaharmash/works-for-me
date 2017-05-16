const minify = require('html-minifier').minify;
const htmlBeautify = require('js-beautify').html;

module.exports = function beautify (content = '') {
  let minified = minify(content.trim(), {
    collapseWhitespace: true,
    collapseInlineTagWhitespace: true
  });

  let beautified = htmlBeautify(minified, {
    'indent_char': ' ',
    'indent_size': 2,
    'max_preserve_newlines': 1,
    'preserve_newlines': true,
    'unformatted': ['sub', 'sup', 'b', 'i', 'u'],
    'content_unformatted': ['span', 'a', 'title', 'description'],
    'wrap_line_length': 0,
    'end_with_newline': true,
    'extra_liners': ['html', '/html', 'head', 'body']
  });

  if (beautified === '\n') {
    return ''
  }

  return beautified;
};
