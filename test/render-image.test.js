let fs = require('fs')
let assert = require('assert')

let render = require('../lib/render')
let imageRenderer = require('../lib/renderers/image')
const htmlBeautify = require('../lib/html-beautify')

const inputBasic = require('./stubs/render/image-basic--input')
const outputBasic = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/image-basic--output.html'), 'utf8'))

const inputNoUrl = require('./stubs/render/image-no-url--input')
const outputNoUrl = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/image-no-url--output.html'), 'utf8'))

const { IMAGE_RENDERER_KEY } = require('../lib/constants')
const renderersMap = {
  [IMAGE_RENDERER_KEY]: imageRenderer
}

describe('image renderer', () => {
  it('renders image with title and url', () => {
    let html = render(inputBasic, renderersMap)

    assert.equal(html, outputBasic)
  })

  it('does not render image without url', () => {
    let html = render(inputNoUrl, renderersMap)

    assert.equal(html, outputNoUrl)
  })
})
