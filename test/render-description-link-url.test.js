let fs = require('fs')
let assert = require('assert')

let render = require('../lib/render')
let descriptionLinkUrlRenderer = require('../lib/renderers/description-link-url')
const htmlBeautify = require('../lib/html-beautify')

const inputBasic = require('./stubs/render/description-link-url-basic--input')
const outputBasic = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/description-link-url-basic--output.html'), 'utf8'))

const { DESCRIPTION_LINK_URL_RENDERER_KEY } = require('../lib/constants')
const renderersMap = {
  [DESCRIPTION_LINK_URL_RENDERER_KEY]: descriptionLinkUrlRenderer
}

describe('description-link-url renderer', () => {
  it('joins separate parts of url', () => {
    let html = render(inputBasic, renderersMap)

    assert.equal(html, outputBasic)
  })
})
