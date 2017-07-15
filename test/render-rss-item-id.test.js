const fs = require('fs')
const path = require('path')
const { assert } = require('chai')

const render = require('../lib/render')
const rssItemIdRenderer = require('../lib/renderers/rss-item-id')
const htmlBeautify = require('../lib/html-beautify')
const jsonBeautify = require('../lib/json-beautify')
const { RSS_ITEM_ID_RENDERER_KEY } = require('../lib/constants')

const testSets = {
  basic: {
    input: './stubs/render/rss-item-id-basic--input.js',
    output: './stubs/render/rss-item-id-basic--output.xml'
  }
}

const basicInput = require(testSets.basic.input)
const basicOutput = htmlBeautify(fs.readFileSync(path.resolve(__dirname, testSets.basic.output), 'utf8'))

describe('rss-item-id renderer', () => {
  const renderersMap = {
    [RSS_ITEM_ID_RENDERER_KEY]: rssItemIdRenderer
  }

  it('renders wrapper for rss item id', () => {
    let html = render(basicInput, renderersMap)

    assert.deepEqual(html, basicOutput, jsonBeautify(testSets.basic))
  })
})
