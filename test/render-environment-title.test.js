let fs = require('fs')
let assert = require('assert')

let render = require('../lib/render')
let environmentTitle = require('../lib/renderers/environment-title')
const htmlBeautify = require('../lib/html-beautify')

const inputBasic = require('./stubs/render/environment-title-basic--input')
const outputBasic = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/environment-title-basic--output.html'), 'utf8'))

const inputMultipleWords = require('./stubs/render/environment-title-multiple-words--input')
const outputMultipleWords = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/environment-title-multiple-words--output.html'), 'utf8'))

const { ENVIRONMENT_TITLE_RENDERER_KEY } = require('../lib/constants')

describe('environment title renderer', () => {
  const renderersMap = {
    [ENVIRONMENT_TITLE_RENDERER_KEY]: environmentTitle
  }

  it('renders empty environment title context', () => {
    let html = render(inputBasic, renderersMap)

    assert.equal(html, outputBasic)
  })

  it('renders environment title with multiple words', () => {
    let html = render(inputMultipleWords, renderersMap)

    assert.equal(html, outputMultipleWords)
  })
})
