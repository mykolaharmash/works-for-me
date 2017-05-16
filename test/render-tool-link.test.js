let fs = require('fs');
let assert = require('assert');

let render = require('../lib/render');
let toolLink = require('../lib/renderers/tool-link');
const htmlBeautify = require('../lib/html-beautify');

const input = require('./stubs/render/tool-link--input');
const output = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/tool-link--output.html'), 'utf8'));

const { TOOL_LINK_RENDERER_KEY } = require('../lib/constants');

describe('tool link renderer', () => {
  const renderersMap = {
    [TOOL_LINK_RENDERER_KEY]: toolLink
  };

  it('renders tool\'s url as plain text', () => {
    let html = render(input, renderersMap);

    assert.equal(html, output);
  });
});
