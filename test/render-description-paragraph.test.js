let fs = require('fs')
let assert = require('assert')

let render = require('../lib/render')
let descriptionParagraph = require('../lib/renderers/description-paragraph')
const htmlBeautify = require('../lib/html-beautify')

const inputBasic = require('./stubs/render/description-paragraph-basic--input')
const outputBasic = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/description-paragraph-basic--output.html'), 'utf8'))

const { DESCRIPTION_PARAGRAPH_RENDERER_KEY } = require('../lib/constants')

describe('description-paragraph renderer', () => {
  const renderersMap = {
    [DESCRIPTION_PARAGRAPH_RENDERER_KEY]: descriptionParagraph
  }

  it('renders wrapper for description paragraph content', () => {
    let html = render(inputBasic, renderersMap)

    assert.equal(html, outputBasic)
  })
})
