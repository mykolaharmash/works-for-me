let fs = require('fs')
let assert = require('assert')

let render = require('../lib/render')
let description = require('../lib/renderers/description')
const htmlBeautify = require('../lib/html-beautify')

const inputBasic = require('./stubs/render/description-basic--input')
const outputBasic = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/description-basic--output.html'), 'utf8'))

const inputEmpty = require('./stubs/render/description-empty--input')
const outputEmpty = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/description-empty--output.html'), 'utf8'))

const { DESCRIPTION_RENDERER_KEY } = require('../lib/constants')

describe('description renderer', () => {
  const renderersMap = {
    [DESCRIPTION_RENDERER_KEY]: description
  }

  it('renders wrapper for description content', () => {
    let html = render(inputBasic, renderersMap)

    assert.equal(html, outputBasic)
  })

  it('does not render empty description context', () => {
    let html = render(inputEmpty, renderersMap)

    assert.equal(html, outputEmpty)
  })
})
