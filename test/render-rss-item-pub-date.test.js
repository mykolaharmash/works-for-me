const fs = require('fs')
const path = require('path')
const { assert } = require('chai')

const render = require('../lib/render')
const rssItemPubDareRenderer = require('../lib/renderers/rss-item-pub-date')
const htmlBeautify = require('../lib/html-beautify')
const jsonBeautify = require('../lib/json-beautify')
const { RSS_ITEM_PUB_DATE_RENDERER_KEY } = require('../lib/constants')

const testSets = {
  basic: {
    input: './stubs/render/rss-item-pub-date-basic--input.js',
    output: './stubs/render/rss-item-pub-date-basic--output.xml'
  }
}

const basicInput = require(testSets.basic.input)
const basicOutput = htmlBeautify(fs.readFileSync(path.resolve(__dirname, testSets.basic.output), 'utf8'))

describe('rss-item-pub-date renderer', () => {
  const renderersMap = {
    [RSS_ITEM_PUB_DATE_RENDERER_KEY]: rssItemPubDareRenderer
  }

  it('renders wrapper for rss item publication date', () => {
    let html = render(basicInput, renderersMap)

    assert.deepEqual(html, basicOutput, jsonBeautify(testSets.basic))
  })
})
