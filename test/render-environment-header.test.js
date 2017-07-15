let fs = require('fs')
let assert = require('assert')

let render = require('../lib/render')
let environmentHeader = require('../lib/renderers/environment-header')
const htmlBeautify = require('../lib/html-beautify')

const input = require('./stubs/render/environment-header--input')
const output = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/environment-header--output.html'), 'utf8'))

const { ENVIRONMENT_HEADER_RENDERER_KEY } = require('../lib/constants')

describe('environment header renderer', () => {
  const renderersMap = {
    [ENVIRONMENT_HEADER_RENDERER_KEY]: environmentHeader
  }

  it('renders empty environment header context', () => {
    let html = render(input, renderersMap)

    assert.equal(html, output)
  })
})
