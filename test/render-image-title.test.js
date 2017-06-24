let fs = require('fs')
let assert = require('assert')

let render = require('../lib/render')
let imageTitleRenderer = require('../lib/renderers/image-title')
const htmlBeautify = require('../lib/html-beautify')

const inputBasic = require('./stubs/render/image-title-basic--input')
const outputBasic = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/image-title-basic--output.html'), 'utf8'))

const { IMAGE_TITLE_RENDERER_KEY } = require('../lib/constants')
const renderersMap = {
  [IMAGE_TITLE_RENDERER_KEY]: imageTitleRenderer
}

describe('image-title renderer', () => {
  it('joins words in title with spaces', () => {
    let html = render(inputBasic, renderersMap)

    assert.equal(html, outputBasic)
  })
})
