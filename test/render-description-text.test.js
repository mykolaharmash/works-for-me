let fs = require('fs')
let assert = require('assert')

let render = require('../lib/render')
let descriptionTextRenderer = require('../lib/renderers/description-text')
const htmlBeautify = require('../lib/html-beautify')

const inputBasic = require('./stubs/render/description-text-basic--input')
const outputBasic = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/description-text-basic--output.html'), 'utf8'))

const { DESCRIPTION_TEXT_RENDERER_KEY } = require('../lib/constants')
const renderersMap = {
  [DESCRIPTION_TEXT_RENDERER_KEY]: descriptionTextRenderer
}

describe('description-text renderer', () => {
  it('joins words in text with space', () => {
    let html = render(inputBasic, renderersMap)

    assert.equal(html, outputBasic)
  })
})
