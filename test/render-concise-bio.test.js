let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let conciseBio = require('../lib/renderers/concise-bio');

const input = require('./stubs/render/concise-bio--input');
const output = fs.readFileSync(require.resolve('./stubs/render/concise-bio--output.html'), 'utf8');

const { BIO_RENDERER_KEY } = require('../lib/constants');

describe('concise-bio renderer', () => {
  const renderersMap = {
    [BIO_RENDERER_KEY]: conciseBio
  };

  it('renders "bio" as combined bio—lines', () => {
    let html = render(input, renderersMap);

    assert.equal(html, output);
  });
});
