let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let description = require('../lib/renderers/description');

const input = require('./stubs/render/description-no-parent--input');
const output = fs
  .readFileSync(require.resolve('./stubs/render/description-no-parent--output.html'))
  .toString();

const { DESCRIPTION_RENDERER_KEY } = require('../lib/constants');

describe('bio renderer', () => {
  const renderersMap = {
    [DESCRIPTION_RENDERER_KEY]: description
  };

  it('renders empty description without parent', () => {
    let html = render(input, renderersMap);

    assert.equal(html, output);
  });
});
