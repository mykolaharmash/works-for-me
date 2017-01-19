let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let environmentTitle = require('../lib/renderers/environment-title');

const input = require('./stubs/render/environment-title--input');
const output = fs
  .readFileSync(require.resolve('./stubs/render/environment-title--output.html'))
  .toString();

const { ENVIRONMENT_TITLE_RENDERER_KEY } = require('../lib/constants');

describe('environment title renderer', () => {
  const renderersMap = {
    [ENVIRONMENT_TITLE_RENDERER_KEY]: environmentTitle
  };

  it('renders empty environment title context', () => {
    let html = render(input, renderersMap);

    assert.equal(html, output);
  });
});
