let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let plain = require('../lib/renderers/plain');

const input = require('./stubs/render/plain--input');
const output = fs
  .readFileSync(require.resolve('./stubs/render/plain--output.html'))
  .toString();

const { PLAIN_TEXT_RENDERER_KEY } = require('../lib/constants');

describe('plain text renderer', () => {
  const renderersMap = {
    [PLAIN_TEXT_RENDERER_KEY]: plain
  };

  it('renders plain text', () => {
    let html = render(input, renderersMap);

    assert.equal(html, output);
  });
});
