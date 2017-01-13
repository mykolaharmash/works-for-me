let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let root = require('../lib/renderers/root');

const input = require('./stubs/render/root--input');
const output = fs
  .readFileSync(require.resolve('./stubs/render/root--output.html'))
  .toString();

const { ROOT_RENDERER_KEY } = require('../lib/constants');

describe('bio renderer', () => {
  const renderersMap = {
    [ROOT_RENDERER_KEY]: root
  };

  it('renders empty root context', () => {
    let html = render(input, renderersMap);

    assert.equal(html, output);
  });
});
