let Immutable = require('immutable')
let assert = require('assert')
let parse = require('../lib/parse')
let toolsList = require('../lib/parsers/tools-list')

let input = require('./stubs/parse/tools-list--input')
let output = require('./stubs/parse/tools-list--output')

const { TOOLS_LIST_PARSER_KEY } = require('../lib/constants')

describe('tools-list parser', () => {
  it('splits tools list to separate tool-items', () => {
    const parsersMap = {
      [TOOLS_LIST_PARSER_KEY]: toolsList
    }
    let tree = parse(Immutable.fromJS(input), parsersMap)

    assert.deepEqual(tree, output)
  })
})
