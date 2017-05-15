require('./check-node-version');

const fs = require('fs-extra');
const path = require('path');
const generateSetupItemAst = require('./setup-ast');
const generateSetupItemHtml = require('./setup-html');
const generateSetupsListAst = require('./setups-list-ast');
const generateSetupsListHtml = require('./setups-list-html');
const getSetupMetadata = require('./get-setup-metadata');
const copyStatics = require('./copy-statics');
const generateRssAst = require('./rss-ast');
const generateRssXml = require('./rss-xml');

const setupsSrcDir = path.resolve(__dirname, '../setups');
const distDir = path.resolve(__dirname, '../dist');
const setupsDistDir = `${distDir}/setups`;

function readSetupContent (filePath) {
  let pathInfo = path.parse(filePath);
  let content = fs.readFileSync(filePath, 'utf8');

  return {
    name: pathInfo.name,
    filename: pathInfo.base,
    content
  };
}

function generateSetupAst (contentItem, metadataItem) {
  let content = generateSetupItemAst(contentItem.content, metadataItem);

  return {
    name: contentItem.name,
    filename: contentItem.filename,
    content
  };
}

function generateSetupHtml (astItem) {
  let content = generateSetupItemHtml(astItem.content);

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

function readSetupsContent () {
  return fs
    .readdirSync(setupsSrcDir)
    .map(item => path.resolve(setupsSrcDir, item))
    .filter(itemPath => fs.statSync(itemPath).isFile())
    .map(readSetupContent);
}

function getSetupsMetadata (setupsContent) {
  return setupsContent
    .map(contentItem => getSetupMetadata(contentItem.filename));
}

function generateSetupsAst (setupsContent, setupsMetadata) {
  return setupsContent
    .map((contentItem, index) => {
      return generateSetupAst(contentItem, setupsMetadata[index]);
    });
}

function generateRss (setupsAst, setupsMetadata) {
  let ast = generateRssAst(setupsAst, setupsMetadata);

  return generateRssXml(ast);
}

function saveRss (rss) {
  fs.writeFileSync(`${distDir}/rss.xml`, rss);
}

function generate () {
  let setupsContent;
  let setupsMetadata;
  let setupsAst;

  fs.ensureDirSync(setupsDistDir);

  setupsContent = readSetupsContent();
  setupsMetadata = getSetupsMetadata(setupsContent);
  setupsAst = generateSetupsAst(setupsContent, setupsMetadata);

  setupsAst
    .map(generateSetupHtml)
    .map(saveSetupHtml);

  let setupsListAst = generateSetupsListAst(setupsAst, setupsMetadata);
  let setupsListHtml = generateSetupsListHtml(setupsListAst);

  saveSetupsListAst(setupsListAst);
  saveSetupsListHtml(setupsListHtml);

  copyStatics();

  let rss = generateRss(setupsAst, setupsMetadata);

  saveRss(rss);
}

generate();


