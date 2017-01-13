let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let bio = require('../lib/renderers/bio');

const input = require('./stubs/render/bio--input');
const output = fs
  .readFileSync(require.resolve('./stubs/render/bio--output.html'))
  .toString();

const { BIO_RENDERER_KEY } = require('../lib/constants');

describe('bio renderer', () => {
  const renderersMap = {
    [BIO_RENDERER_KEY]: bio
  };

  it('renders empty bio context', () => {
    let html = render(input, renderersMap);

    assert.equal(html, output);
  });
});
