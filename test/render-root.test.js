let fs = require('fs')
let assert = require('assert')

let render = require('../lib/render')
let root = require('../lib/renderers/root')
const htmlBeautify = require('../lib/html-beautify')

const input = require('./stubs/render/root--input')
const output = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/root--output.html'), 'utf8'))

const { ROOT_RENDERER_KEY } = require('../lib/constants')

describe('setup root renderer', () => {
  const renderersMap = {
    [ROOT_RENDERER_KEY]: root
  }

  it('renders root html wrapper', () => {
    let html = render(input, renderersMap)

    assert.equal(html, output)
  })
})
