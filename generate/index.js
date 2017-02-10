const fs = require('fs-extra');
const path = require('path');
const generateSetupItemAst = require('./setup-ast');
const generateSetupItemHtml = require('./setup-html');
const generateSetupsListAst = require('./setups-list-ast');
const generateSetupsListHtml = require('./setups-list-html');
const setupsSrcDir = path.resolve(__dirname, '../setups');
const distDir = path.resolve(__dirname, '../dist');
const setupsDistDir = `${distDir}/setups`;

function getSetupFilesList (setupsDir) {
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
  let content = generateSetupItemAst(contentItem.content);

  return {
    name: contentItem.name,
    content
  };
}

function generateSetupHtml (astItem) {
  let content = generateSetupItemHtml(astItem.content);

  return {
    name: astItem.name,
    content
  };
}

function saveSetupHtml (htmlItem) {
  let filename = `${htmlItem.name}.html`;

  fs.writeFileSync(`${setupsDistDir}/${filename}`, htmlItem.content);
}

function saveSetupsListHtml(listHtml) {
  let filename = `index.html`;

  fs.writeFileSync(`${distDir}/${filename}`, listHtml);
}

fs.ensureDirSync(setupsDistDir);

let setupsAst = getSetupFilesList(setupsSrcDir)
 .map(readSetupContent)
 .map(generateSetupAst)

setupsAst
 .map(generateSetupHtml)
 .map(saveSetupHtml);

let setupsListAst = generateSetupsListAst(setupsAst);
let setupsListHtml = generateSetupsListHtml(setupsListAst);

fs.writeFileSync(
  `${path.resolve(__dirname, '../tmp')}/list.ast.js`,
  JSON.stringify(setupsListAst, null, 2)
);
saveSetupsListHtml(setupsListHtml);
