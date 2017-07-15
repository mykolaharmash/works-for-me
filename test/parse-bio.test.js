let Immutable = require('immutable')
let assert = require('assert')
let parse = require('../lib/parse')
let bio = require('../lib/parsers/bio')

let cleanInput = require('./stubs/parse/bio-clean--input')
let cleanOutput = require('./stubs/parse/bio-clean--output')
let withDescriptionsInput = require('./stubs/parse/bio-with-descriptions--input')
let withDescriptionsOutput = require('./stubs/parse/bio-with-descriptions--output')

const { BIO_PARSER_KEY } = require('../lib/constants')

describe('bio parser', () => {
  it('splits lexemes list to "bio-line" contexts', () => {
    const parsersMap = {
      [BIO_PARSER_KEY]: bio
    }
    let tree = parse(Immutable.fromJS(cleanInput), parsersMap)

    assert.deepEqual(tree, cleanOutput)
  })

  it(`saves texts around bio lines into "descriptions" context`, () => {
    const parsersMap = {
      [BIO_PARSER_KEY]: bio
    }
    let tree = parse(Immutable.fromJS(withDescriptionsInput), parsersMap)

    assert.deepEqual(tree, withDescriptionsOutput)
  })
})
