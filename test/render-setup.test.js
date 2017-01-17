let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let setup = require('../lib/renderers/setup');

const input = require('./stubs/render/setup--input');
const output = fs
  .readFileSync(require.resolve('./stubs/render/setup--output.html'))
  .toString();

const { SETUP_RENDERER_KEY } = require('../lib/constants');

describe('environment renderer', () => {
  const renderersMap = {
    [SETUP_RENDERER_KEY]: setup
  };

  it('renders empty setup context', () => {
    let html = render(input, renderersMap);

    assert.equal(html, output);
  });
});
