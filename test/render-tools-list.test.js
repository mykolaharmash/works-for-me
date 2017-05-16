let fs = require('fs');
let assert = require('assert');

let render = require('../lib/render');
let toolsList = require('../lib/renderers/tools-list');
const htmlBeautify = require('../lib/html-beautify');

const input = require('./stubs/render/tools-list--input');
const output = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/tools-list--output.html'), 'utf8'))

const { TOOLS_LIST_RENDERER_KEY } = require('../lib/constants');

describe('tools list renderer', () => {
  const renderersMap = {
    [TOOLS_LIST_RENDERER_KEY]: toolsList
  };

  it('renders empty tools list context', () => {
    let html = render(input, renderersMap);

    assert.equal(html, output);
  });
});
