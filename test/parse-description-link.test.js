let Immutable = require('immutable')
let assert = require('assert')
let parse = require('../lib/parse')

let descriptionLinkParser = require('../lib/parsers/description-link')

let inputBasic = require('./stubs/parse/description-link-basic--input')
let outputBasic = require('./stubs/parse/description-link-basic--output')

let inputOnlyUrl = require('./stubs/parse/description-link-only-url--input')
let outputOnlyUrl = require('./stubs/parse/description-link-only-url--output')

let inputOnlyTitle = require('./stubs/parse/description-link-only-title--input')
let outputOnlyTitle = require('./stubs/parse/description-link-only-title--output')

let inputMultipleTitles = require('./stubs/parse/description-link-multiple-titles--input')
let outputMultipleTitles = require('./stubs/parse/description-link-multiple-titles--output')

const { DESCRIPTION_LINK_PARSER_KEY } = require('../lib/constants')

const parsersMap = {
  [DESCRIPTION_LINK_PARSER_KEY]: descriptionLinkParser
}

describe('description-link parser', () => {
  it(`splits description link into title and url`, () => {
    let tree = parse(Immutable.fromJS(inputBasic), parsersMap)

    assert.deepEqual(tree, outputBasic)
  })

  it(`creates only url context if there is no title`, () => {
    let tree = parse(Immutable.fromJS(inputOnlyUrl), parsersMap)

    assert.deepEqual(tree, outputOnlyUrl)
  })

  it(`creates only title context if there is no url`, () => {
    let tree = parse(Immutable.fromJS(inputOnlyTitle), parsersMap)

    assert.deepEqual(tree, outputOnlyTitle)
  })

  it(`creates multiple title contexts if there is another text after url`, () => {
    let tree = parse(Immutable.fromJS(inputMultipleTitles), parsersMap)

    assert.deepEqual(tree, outputMultipleTitles)
  })
})
