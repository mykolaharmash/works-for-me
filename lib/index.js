let fs = require('fs');
let tokenize = require('./tokenize');
let lex = require('./lex');

let filePath = process.argv[2];
let content = fs.readFileSync(filePath).toString();
let chars = [...content];

let tokens = tokenize(chars);
let lexemes = lex(tokens);