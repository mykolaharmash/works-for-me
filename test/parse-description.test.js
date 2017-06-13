let Immutable = require('immutable')
let assert = require('assert')
let parse = require('../lib/parse')

let descriptionParser = require('../lib/parsers/description')

let inputParagraphs = require('./stubs/parse/description-paragraphs--input')
let outputParagraphs = require('./stubs/parse/description-paragraphs--output')

const { DESCRIPTION_PARSER_KEY } = require('../lib/constants')

const parsersMap = {
  [DESCRIPTION_PARSER_KEY]: descriptionParser
}

describe('description parser', () => {
  it(`splits description into paragraphs`, () => {
    let tree = parse(Immutable.fromJS(inputParagraphs), parsersMap)

    assert.deepEqual(tree, outputParagraphs)
  })
})
