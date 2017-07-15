let fs = require('fs')
let assert = require('assert')

let render = require('../lib/render')
let setupsListBioLineRenderer = require('../lib/renderers/setups-list-bio-line')
const htmlBeautify = require('../lib/html-beautify')

const nameInput = require('./stubs/render/setups-list/setups-list-bio-line-name--input')
const nameOutput = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/setups-list/setups-list-bio-line-name--output.html'), 'utf8'))

const occupationInput = require('./stubs/render/setups-list/setups-list-bio-line-occupation--input')
const occupationOutput = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/setups-list/setups-list-bio-line-occupation--output.html'), 'utf8'))

const invalidLineInput = require('./stubs/render/setups-list/setups-list-bio-line-invalid-line--input')
const invalidLineOutput = htmlBeautify(fs.readFileSync(require.resolve('./stubs/render/setups-list/setups-list-bio-line-invalid-line--output.html'), 'utf8'))

const { BIO_LINE_RENDERER_KEY } = require('../lib/constants')

const renderersMap = {
  [BIO_LINE_RENDERER_KEY]: setupsListBioLineRenderer
}

describe('setups-list-bio-line renderer', () => {
  it('renders author\'s name as a link', () => {
    let html = render(nameInput, renderersMap)

    assert.equal(html, nameOutput)
  })

  it('renders author\'s occupation', () => {
    let html = render(occupationInput, renderersMap)

    assert.equal(html, occupationOutput)
  })

  it('does not render line which is not "name" or "occupation"', () => {
    let html = render(invalidLineInput, renderersMap)

    assert.equal(html, invalidLineOutput)
  })
})
