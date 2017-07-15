let Immutable = require('immutable')
let assert = require('assert')
let parse = require('../lib/parse')
let toolItem = require('../lib/parsers/tool-item')

let input = require('./stubs/parse/tool-item--input')
let output = require('./stubs/parse/tool-item--output')

const { TOOL_ITEM_PARSER_KEY } = require('../lib/constants')

describe('tool item parser', () => {
  it('splits tool item into head and description', () => {
    const parsersMap = {
      [TOOL_ITEM_PARSER_KEY]: toolItem
    }
    let tree = parse(Immutable.fromJS(input), parsersMap)

    assert.deepEqual(tree, output)
  })
})
