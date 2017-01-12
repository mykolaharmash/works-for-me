let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let bio = require('../lib/renderers/bio');

const emptyInput = require('./stubs/render/bio-empty--input');
const emptyOutput = fs
  .readFileSync(require.resolve('./stubs/render/bio-empty--output.html'))
  .toString();

const { BIO_RENDERER_KEY } = require('../lib/constants');

describe('bio renderer', () => {
  const renderersMap = {
    [BIO_RENDERER_KEY]: bio
  };

  it('renders empty bio context', () => {
    let html = render(emptyInput, renderersMap);

    assert.equal(html, emptyOutput);
  });
});
