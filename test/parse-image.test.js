let Immutable = require('immutable')
let assert = require('assert')

let parse = require('../lib/parse')
let imageParser = require('../lib/parsers/image')

let basicInput = require('./stubs/parse/image-basic--input')
let basicOutput = require('./stubs/parse/image-basic--output')

let externalUrlInput = require('./stubs/parse/image-external-url--input')
let externalUrlOutput = require('./stubs/parse/image-external-url--output')

let onlyUrlInput = require('./stubs/parse/image-only-url--input')
let onlyUrlOutput = require('./stubs/parse/image-only-url--output')

let onlyTitleInput = require('./stubs/parse/image-only-title--input')
let onlyTitleOutput = require('./stubs/parse/image-only-title--output')

let multipleItemsInput = require('./stubs/parse/image-multiple-items--input')
let multipleItemsOutput = require('./stubs/parse/image-multiple-items--output')

const { IMAGE_PARSER_KEY } = require('../lib/constants')
const parsersMap = {
  [IMAGE_PARSER_KEY]: imageParser
}

describe('image parser', () => {
  it('splits "image" context into "title" and "url"', () => {
    let tree = parse(Immutable.fromJS(basicInput), parsersMap)

    assert.deepEqual(tree, basicOutput)
  })

  it('parses image with external URL', () => {
    let tree = parse(Immutable.fromJS(externalUrlInput), parsersMap)

    assert.deepEqual(tree, externalUrlOutput)
  })

  it('creates only "url" context if there is no title', () => {
    let tree = parse(Immutable.fromJS(onlyUrlInput), parsersMap)

    assert.deepEqual(tree, onlyUrlOutput)
  })

  it('creates only "title" context if there is no URL', () => {
    let tree = parse(Immutable.fromJS(onlyTitleInput), parsersMap)

    assert.deepEqual(tree, onlyTitleOutput)
  })

  it('parses multiple "title" and "url" contexts', () => {
    let tree = parse(Immutable.fromJS(multipleItemsInput), parsersMap)

    assert.deepEqual(tree, multipleItemsOutput)
  })
})
