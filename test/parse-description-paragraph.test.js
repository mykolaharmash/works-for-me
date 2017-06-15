let Immutable = require('immutable')
let assert = require('assert')
let parse = require('../lib/parse')

let descriptionParagraphParser = require('../lib/parsers/description-paragraph')

let inputBasic = require('./stubs/parse/description-paragraph-basic--input')
let outputBasic = require('./stubs/parse/description-paragraph-basic--output')

let inputEmptyLink = require('./stubs/parse/description-paragraph-empty-link--input')
let outputEmptyLink = require('./stubs/parse/description-paragraph-empty-link--output')

const { DESCRIPTION_PARAGRAPH_PARSER_KEY } = require('../lib/constants')

const parsersMap = {
  [DESCRIPTION_PARAGRAPH_PARSER_KEY]: descriptionParagraphParser
}

describe('description-paragraph parser', () => {
  it(`splits paragraph into texts and links`, () => {
    let tree = parse(Immutable.fromJS(inputBasic), parsersMap)

    assert.deepEqual(tree, outputBasic)
  })

  it(`creates empty link contexts for empty links`, () => {
    let tree = parse(Immutable.fromJS(inputEmptyLink), parsersMap)

    assert.deepEqual(tree, outputEmptyLink)
  })
})
