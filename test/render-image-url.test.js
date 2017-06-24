let fs = require('fs')
let assert = require('assert')

let render = require('../lib/render')
let imageUrlRenderer = require('../lib/renderers/image-url')
const htmlBeautify = require('../lib/html-beautify')

const inputBasic = require('./stubs/render/image-url-basic--input')
const outputBasic = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/image-url-basic--output.html'), 'utf8'))

const { IMAGE_URL_RENDERER_KEY } = require('../lib/constants')
const renderersMap = {
  [IMAGE_URL_RENDERER_KEY]: imageUrlRenderer
}

describe('image-url renderer', () => {
  it('joins parts of URL together', () => {
    let html = render(inputBasic, renderersMap)

    assert.equal(html, outputBasic)
  })
})
