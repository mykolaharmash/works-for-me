const fs = require('fs-extra');
const path = require('path');
const setupAst = require('./setup-ast');
const setupHtml = require('./setup-html');
const setupsSrcDir = path.resolve(__dirname, '../setups');
const distDir = path.resolve(__dirname, '../dist');
const setupsDistDir = `${distDir}/setups`;

function getSetupsList (setupsDir) {
  return fs
    .readdirSync(setupsDir)
    .map(item => path.resolve(setupsDir, item))
    .filter(itemPath => fs.statSync(itemPath).isFile());
}

function readSetupContent (filePath) {
  let pathInfo = path.parse(filePath);
  let content = fs.readFileSync(filePath, 'utf8');

  return {
    name: pathInfo.name,
    content
  };
}

function generateSetupAst (contentItem) {
  let content = setupAst(contentItem.content);

  return {
    name: contentItem.name,
    content
  };
}

function generateSetupHtml (astItem) {
  let content = setupHtml(astItem.content);

  return {
    name: astItem.name,
    content
  };
}

function saveSetupHtml (htmlItem) {
  let filename = `${htmlItem.name}.html`;

  fs.writeFileSync(`${setupsDistDir}/${filename}`, htmlItem.content);
}

fs.ensureDirSync(setupsDistDir);

 getSetupsList(setupsSrcDir)
  .map(readSetupContent)
  .map(generateSetupAst)
  .map(generateSetupHtml)
  .map(saveSetupHtml);
