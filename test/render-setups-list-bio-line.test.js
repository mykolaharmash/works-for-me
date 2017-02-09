let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let setupsListBioLine = require('../lib/renderers/setups-list-bio-line');

const nameInput = require('./stubs/render/setups-list/bio-line-name--input');
const nameOutput = fs.readFileSync(require.resolve('./stubs/render/setups-list/bio-line-name--output.html'), 'utf8');

const occupationInput = require('./stubs/render/setups-list/bio-line-occupation--input');
const occupationOutput = fs.readFileSync(require.resolve('./stubs/render/setups-list/bio-line-occupation--output.html'), 'utf8');

const invalidKeyInput = require('./stubs/render/setups-list/bio-line-invalid-key--input');
const invalidKeyOutput = fs.readFileSync(require.resolve('./stubs/render/setups-list/bio-line-invalid-key--output.html'), 'utf8');

const { BIO_LINE_RENDERER_KEY } = require('../lib/constants');

describe('setups-list-bio-line renderer', () => {
  const renderersMap = {
    [BIO_LINE_RENDERER_KEY]: setupsListBioLine
  };

  it('renders "name" bio line', () => {
    let html = render(nameInput, renderersMap);

    assert.equal(html, nameOutput);
  });

  it('renders "occupation" bio line', () => {
    let html = render(occupationInput, renderersMap);

    assert.equal(html, occupationOutput);
  });

  it('does not render lines which names are not "name:" or "occupation:"', () => {
    let html = render(invalidKeyInput, renderersMap);

    assert.equal(html, invalidKeyOutput);
  });
});
