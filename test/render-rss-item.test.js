const path = require('path')
const fs = require('fs')
const { assert } = require('chai')

const render = require('../lib/render')
const rssItemRenderer = require('../lib/renderers/rss-item')
const htmlBeautify = require('../lib/html-beautify')
const { RSS_ITEM_RENDERER_KEY } = require('../lib/constants')

const input = require('./stubs/render/rss-item--input')
const output = htmlBeautify(fs.readFileSync(path.resolve(__dirname, './stubs/render/rss-item--output.xml'), 'utf8'))

const renderersMap = {
  [RSS_ITEM_RENDERER_KEY]: rssItemRenderer
}

describe('rss item renderer', () => {
  it('renders wrapper for rss item', () => {
    let xml = render(input, renderersMap)

    assert.deepEqual(xml, output)
  })
})
