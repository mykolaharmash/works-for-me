let fs = require('fs')
let assert = require('assert')

let render = require('../lib/render')
let setupsListBioRenderer = require('../lib/renderers/setups-list-bio')
const htmlBeautify = require('../lib/html-beautify');

const input = require('./stubs/render/setups-list/setups-list-bio--input')
const output = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/setups-list/setups-list-bio--output.html'), 'utf8'));

const { BIO_RENDERER_KEY } = require('../lib/constants')

const renderersMap = {
  [BIO_RENDERER_KEY]: setupsListBioRenderer
}

describe('setups-list-bio renderer', () => {
  it('renders wrapper for bio information', () => {
    let html = render(input, renderersMap)

    assert.deepEqual(html, output)
  })
})
