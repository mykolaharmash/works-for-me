const fs = require('fs')
const path = require('path')
const { assert } = require('chai')

const render = require('../lib/render')
const rssItemTitleRenderer = require('../lib/renderers/rss-item-title')
const htmlBeautify = require('../lib/html-beautify')
const { RSS_ITEM_TITLE_RENDERER_KEY } = require('../lib/constants')

const newSetupInput = require('./stubs/render/rss-item-title-new-setup--input')
const newSetupOutput = htmlBeautify(fs.readFileSync(path.resolve(__dirname, './stubs/render/rss-item-title-new-setup--output.xml'), 'utf8'))

const updatedSetupInput = require('./stubs/render/rss-item-title-updated-setup--input')
const updatedSetupOutput = htmlBeautify(fs.readFileSync(path.resolve(__dirname, './stubs/render/rss-item-title-updated-setup--output.xml'), 'utf8'))

describe('rss-item-title renderer', () => {
  const renderersMap = {
    [RSS_ITEM_TITLE_RENDERER_KEY]: rssItemTitleRenderer
  }

  it('renders title for new setup', () => {
    let html = render(newSetupInput, renderersMap)

    assert.deepEqual(html, newSetupOutput)
  })

  it('renders title for updated setup', () => {
    let html = render(updatedSetupInput, renderersMap)

    assert.deepEqual(html, updatedSetupOutput)
  })
})
