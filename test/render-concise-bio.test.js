const fs = require('fs')
const assert = require('assert')

const render = require('../lib/render')
const conciseBio = require('../lib/renderers/concise-bio')
const htmlBeautify = require('../lib/html-beautify')

const input = require('./stubs/render/concise-bio--input')
const output = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/concise-bio--output.html'), 'utf8'))

const { BIO_RENDERER_KEY } = require('../lib/constants')

describe('concise-bio renderer', () => {
  const renderersMap = {
    [BIO_RENDERER_KEY]: conciseBio
  }

  it('renders "bio" as combined bio—lines', () => {
    let html = render(input, renderersMap)

    assert.equal(html, output)
  })
})
