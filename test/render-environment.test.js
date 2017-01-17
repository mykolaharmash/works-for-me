let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let environment = require('../lib/renderers/environment');

const input = require('./stubs/render/environment--input');
const output = fs
  .readFileSync(require.resolve('./stubs/render/environment--output.html'))
  .toString();

const { ENVIRONMENT_RENDERER_KEY } = require('../lib/constants');

describe('environment renderer', () => {
  const renderersMap = {
    [ENVIRONMENT_RENDERER_KEY]: environment
  };

  it('renders empty environment context', () => {
    let html = render(input, renderersMap);

    assert.equal(html, output);
  });
});
