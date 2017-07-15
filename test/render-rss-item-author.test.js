const fs = require('fs')
const path = require('path')
const { assert } = require('chai')
const render = require('../lib/render')
const rssItemAuthorRenderer = require('../lib/renderers/rss-item-author')
const htmlBeautify = require('../lib/html-beautify')
const { RSS_ITEM_AUTHOR_RENDERER_KEY } = require('../lib/constants')

const testSets = {
  basic: {
    input: './stubs/render/rss-item-author-basic--input.js',
    output: './stubs/render/rss-item-author-basic--output.xml'
  }
}

const basicInput = require(testSets.basic.input)
const basicOutput = htmlBeautify(fs.readFileSync(path.resolve(__dirname, testSets.basic.output), 'utf8'))

describe('rss-item-author renderer', () => {
  const renderersMap = {
    [RSS_ITEM_AUTHOR_RENDERER_KEY]: rssItemAuthorRenderer
  }

  it('renders wrapper for rss item author', () => {
    let html = render(basicInput, renderersMap)

    assert.deepEqual(html, basicOutput, JSON.stringify(testSets.basic, null, 2))
  })
})
