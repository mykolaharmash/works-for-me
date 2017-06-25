let fs = require('fs')
let assert = require('assert')

let render = require('../lib/render')
let playgroundImageRenderer = require('../lib/renderers/playground-image')
const htmlBeautify = require('../lib/html-beautify')

const inputBasic = require('./stubs/render/playground-image-basic--input')
const outputBasic = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/playground-image-basic--output.html'), 'utf8'))

const inputExternal = require('./stubs/render/playground-image-external--input')
const outputExternal = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/playground-image-external--output.html'), 'utf8'))

const { IMAGE_RENDERER_KEY } = require('../lib/constants')

describe('playground-image renderer', () => {
  it('gets image blob URL from global storage', () => {
    let global = {
      wfmPlaygroundImages: {
        './some-image.png': 'blob:image/someblob'
      }
    }
    let renderersMap = {
      [IMAGE_RENDERER_KEY]: playgroundImageRenderer(global)
    }
    let html = render(inputBasic, renderersMap)

    assert.equal(html, outputBasic)
  })

  it('renders external image', () => {
    let global = {}
    let renderersMap = {
      [IMAGE_RENDERER_KEY]: playgroundImageRenderer(global)
    }
    let html = render(inputExternal, renderersMap)

    assert.equal(html, outputExternal)
  })
})
