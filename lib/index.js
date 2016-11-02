let fs = require('fs');
let tokenize = require('./tokenize');

let filePath = process.argv[2];
let content = fs.readFileSync(filePath).toString();
let chars = [...content];

let tokens = tokenize(chars);

console.log(tokens);