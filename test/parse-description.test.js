let Immutable = require('immutable')
let assert = require('assert')
let parse = require('../lib/parse')

let descriptionParser = require('../lib/parsers/description')

let inputSplitParagraphs = require('./stubs/parse/description-split-paragraphs--input')
let outputSplitParagraphs = require('./stubs/parse/description-split-paragraphs--output')

let inputStartWithText = require('./stubs/parse/description-start-with-text--input')
let outputStartWithText = require('./stubs/parse/description-start-with-text--output')

let inputWithImages = require('./stubs/parse/description-with-images--input')
let outputWithImages = require('./stubs/parse/description-with-images--output')

const { DESCRIPTION_PARSER_KEY } = require('../lib/constants')

const parsersMap = {
  [DESCRIPTION_PARSER_KEY]: descriptionParser
}

describe('description parser', () => {
  it(`splits description into paragraphs`, () => {
    let tree = parse(Immutable.fromJS(inputSplitParagraphs), parsersMap)

    assert.deepEqual(tree, outputSplitParagraphs)
  })

  it(`parses starting paragraph`, () => {
    let tree = parse(Immutable.fromJS(inputStartWithText), parsersMap)

    assert.deepEqual(tree, outputStartWithText)
  })

  it(`parses image contexts`, () => {
    let tree = parse(Immutable.fromJS(inputWithImages), parsersMap)

    assert.deepEqual(tree, outputWithImages)
  })
})
