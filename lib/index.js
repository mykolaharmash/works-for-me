let fs = require('fs');
let tokenize = require('./tokenize');
let lex = require('./lex');
let parse = require('./parse');

let globalSplitter = require('./parsers/global-splitter');
let bio = require('./parsers/bio');

const {
  GLOBAL_PARSER_KEY,
  BIO_PARSER_KEY
} = require('./constants');

let filePath = process.argv[2];
let content = fs.readFileSync(filePath).toString();
let chars = [...content];

const parsersMap = {
  [GLOBAL_PARSER_KEY]: globalSplitter,
  [BIO_PARSER_KEY]: bio
};

let tokens = tokenize(chars);
let lexemes = lex(tokens);
let tree = parse(lexemes, parsersMap);

console.log(JSON.stringify(tree, null, 2));
