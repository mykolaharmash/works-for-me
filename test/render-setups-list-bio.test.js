let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let setupsListBio = require('../lib/renderers/setups-list-bio');

const input = require('./stubs/render/setups-list/bio--input');
const output = fs.readFileSync(require.resolve('./stubs/render/setups-list/bio--output.html'), 'utf8');

const { BIO_RENDERER_KEY } = require('../lib/constants');

describe('setups-list-bio renderer', () => {
  const renderersMap = {
    [BIO_RENDERER_KEY]: setupsListBio
  };

  it('renders "bio" as combined bio—lines', () => {
    let html = render(input, renderersMap);

    assert.equal(html, output);
  });
});
