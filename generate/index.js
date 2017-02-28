require('./check-node-version');

const fs = require('fs-extra');
const path = require('path');
const generateSetupItemAst = require('./setup-ast');
const generateSetupItemHtml = require('./setup-html');
const generateSetupsListAst = require('./setups-list-ast');
const generateSetupsListHtml = require('./setups-list-html');
const fetchSetupMetadata = require('./fetch-setup-metadata');
const copyStatics = require('./copy-statics');

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
    filename: pathInfo.base,
    content
  };
}

function generateSetupAst (contentItem) {
  let content = generateSetupItemAst(contentItem.content);

  return {
    name: contentItem.name,
    filename: contentItem.filename,
    content
  };
}

function generateSetupHtml (astItem, setupMetadata) {
  let content = generateSetupItemHtml(astItem.content, setupMetadata);

  return {
    name: astItem.name,
    filename: astItem.filename,
    content
  };
}

function saveSetupHtml (htmlItem) {
  let filename = `${htmlItem.name}.html`;

  fs.writeFileSync(`${setupsDistDir}/${filename}`, htmlItem.content);
}

function saveSetupsListAst (setupsListAst) {
  fs.writeFileSync(
    `${path.resolve(__dirname, '../tmp')}/list.ast.js`,
    JSON.stringify(setupsListAst, null, 2)
  );
}

function saveSetupsListHtml (listHtml) {
  let filename = `index.html`;

  fs.writeFileSync(`${distDir}/${filename}`, listHtml);
}

async function generate () {
  fs.ensureDirSync(setupsDistDir);

  let setupsAst = getSetupFilesList(setupsSrcDir)
    .map(readSetupContent)
    .map(generateSetupAst);

  let setupsMetadata;

  try {
    setupsMetadata = await Promise.all(setupsAst.map(fetchSetupMetadata));
  } catch (e) {
    console.error(e);
  }

  setupsAst
    .map((setupAst, index) => {
      return generateSetupHtml(setupAst, setupsMetadata[index]);
    })
    .map(saveSetupHtml);

  let setupsListAst = generateSetupsListAst(setupsAst);
  let setupsListHtml = generateSetupsListHtml(setupsListAst);

  saveSetupsListAst(setupsListAst);
  saveSetupsListHtml(setupsListHtml);

  copyStatics();
}

generate().catch(err => { throw err; });


