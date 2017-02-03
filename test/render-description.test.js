let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let description = require('../lib/renderers/description');

const input = require('./stubs/render/description--input');
const output = fs.readFileSync(require.resolve('./stubs/render/description--output.html'), 'utf8')

const { DESCRIPTION_RENDERER_KEY } = require('../lib/constants');

describe('bio renderer', () => {
  const renderersMap = {
    [DESCRIPTION_RENDERER_KEY]: description
  };

  it('renders description with text', () => {
    let html = render(input, renderersMap);

    assert.equal(html, output);
  });
});
