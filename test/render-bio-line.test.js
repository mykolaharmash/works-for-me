let fs = require('fs');
let assert = require('assert');
let render = require('../lib/render');
let bioLine = require('../lib/renderers/bio-line');

const emptyInput = require('./stubs/render/bio-line-empty--input');
const emptyOutput = fs
  .readFileSync(require.resolve('./stubs/render/bio-line-empty--output.html'))
  .toString();

const invalidKeyinput = require('./stubs/render/bio-line-invalid-key--input');
const invalidKeyOutput = fs
  .readFileSync(require.resolve('./stubs/render/bio-line-invalid-key--output.html'))
  .toString();

const nameInput = require('./stubs/render/bio-line-name--input');
const nameOutput = fs
  .readFileSync(require.resolve('./stubs/render/bio-line-name--output.html'))
  .toString();

const infoInput = require('./stubs/render/bio-line-info--input');
const infoOutput = fs
  .readFileSync(require.resolve('./stubs/render/bio-line-info--output.html'))
  .toString();

const locationInput = require('./stubs/render/bio-line-location--input');
const locationOutput = fs
  .readFileSync(require.resolve('./stubs/render/bio-line-location--output.html'))
  .toString();

const linkBasicInput = require('./stubs/render/bio-line-link-basic--input');
const linkBasicOutput = fs
  .readFileSync(require.resolve('./stubs/render/bio-line-link-basic--output.html'))
  .toString();

const linkTwitterAtInput = require('./stubs/render/bio-line-link-twitter-at--input');
const linkTwitterAtOutput = fs
  .readFileSync(require.resolve('./stubs/render/bio-line-link-twitter-at--output.html'))
  .toString();
const linkTwitterNoAtInput = require('./stubs/render/bio-line-link-twitter-noat--input');
const linkTwitterNoAtOutput = fs
  .readFileSync(require.resolve('./stubs/render/bio-line-link-twitter-noat--output.html'))
  .toString();

const linkEmailInput = require('./stubs/render/bio-line-link-email--input');
const linkEmailOutput = fs
  .readFileSync(require.resolve('./stubs/render/bio-line-link-email--output.html'))
  .toString();

const { BIO_LINE_RENDERER_KEY } = require('../lib/constants');

describe('bio-line renderer', () => {
  const renderersMap = {
    [BIO_LINE_RENDERER_KEY]: bioLine
  };
  it('does not render empty line to html', () => {
    let html = render(emptyInput, renderersMap);

    assert.equal(html, emptyOutput);
  });

  it('does not render line with invalid key', () => {
    let html = render(invalidKeyinput, renderersMap);

    assert.equal(html, invalidKeyOutput);
  });

  it('renders name', () => {
    let html = render(nameInput, renderersMap);

    assert.equal(html, nameOutput);
  });

  it('renders info', () => {
    let html = render(infoInput, renderersMap);

    assert.equal(html, infoOutput);
  });

  it('renders location', () => {
    let html = render(locationInput, renderersMap);

    assert.equal(html, locationOutput);
  });

  describe('link', () => {
    it('renders basic link with same href and title', () => {
      let html = render(linkBasicInput, renderersMap);

      assert.equal(html, linkBasicOutput);
    });

    it('renders twitter link with @username as title', () => {
      let html = render(linkTwitterAtInput, renderersMap);

      assert.equal(html, linkTwitterAtOutput);
    });

    it(`renders twitter link with @username even 
        if no @ symbol in login`,
    () => {
      let html = render(linkTwitterNoAtInput, renderersMap);

      assert.equal(html, linkTwitterNoAtOutput);
    });

    it('renders email as mailto link', () => {
      let html = render(linkEmailInput, renderersMap);

      assert.equal(html, linkEmailOutput);
    });
  });
});
