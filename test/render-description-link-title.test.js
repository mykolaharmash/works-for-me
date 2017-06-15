let fs = require('fs')
let assert = require('assert')

let render = require('../lib/render')
let descriptionLinkTitleRenderer = require('../lib/renderers/description-link-title')
const htmlBeautify = require('../lib/html-beautify')

const inputBasic = require('./stubs/render/description-link-title-basic--input')
const outputBasic = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/description-link-title-basic--output.html'), 'utf8'))

const { DESCRIPTION_LINK_TITLE_RENDERER_KEY } = require('../lib/constants')
const renderersMap = {
  [DESCRIPTION_LINK_TITLE_RENDERER_KEY]: descriptionLinkTitleRenderer
}

describe('description-link-title renderer', () => {
  it('joins words in link title with space', () => {
    let html = render(inputBasic, renderersMap)

    assert.equal(html, outputBasic)
  })
})
