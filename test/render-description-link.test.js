let fs = require('fs')
let assert = require('assert')

let render = require('../lib/render')
let descriptionLinkRenderer = require('../lib/renderers/description-link')
const htmlBeautify = require('../lib/html-beautify')

const inputBasic = require('./stubs/render/description-link-basic--input')
const outputBasic = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/description-link-basic--output.html'), 'utf8'))

const inputEmpty = require('./stubs/render/description-link-empty--input')
const outputEmpty = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/description-link-empty--output.html'), 'utf8'))

const inputOnlyTitle = require('./stubs/render/description-link-only-title--input')
const outputOnlyTitle = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/description-link-only-title--output.html'), 'utf8'))

const inputOnlyUrl = require('./stubs/render/description-link-only-url--input')
const outputOnlyUrl = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/description-link-only-url--output.html'), 'utf8'))

const { DESCRIPTION_LINK_RENDERER_KEY } = require('../lib/constants')
const renderersMap = {
  [DESCRIPTION_LINK_RENDERER_KEY]: descriptionLinkRenderer
}

describe('description-link renderer', () => {
  it('renders link with title and url', () => {
    let html = render(inputBasic, renderersMap)

    assert.equal(html, outputBasic)
  })

  it('renders empty context as empty string', () => {
    let html = render(inputEmpty, renderersMap)

    assert.equal(html, outputEmpty)
  })

  it('renders link without url as block element', () => {
    let html = render(inputOnlyTitle, renderersMap)

    assert.equal(html, outputOnlyTitle)
  })

  it('renders link without title in case title is not specified', () => {
    let html = render(inputOnlyUrl, renderersMap)

    assert.equal(html, outputOnlyUrl)
  })
})
