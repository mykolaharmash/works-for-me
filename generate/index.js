require('./check-node-version')

const fs = require('fs-extra')
const path = require('path')
const generateSetupItemAst = require('./setup-ast')
const generateSetupItemHtml = require('./setup-html')
const generateSetupsListAst = require('./setups-list-ast')
const generateSetupsListHtml = require('./setups-list-html')
const getSetupMetadata = require('./get-setup-metadata')
const copySetups = require('./copy-setups')
const copyStatics = require('./copy-statics')
const copySubscribePage = require('./copy-subscribe-page')
const generateRssAst = require('./rss-ast')
const generateRssXml = require('./rss-xml')
const createPlayground = require('./create-playground')
const jsonBeautify = require('../lib/json-beautify')
const { DIST_FOLDER } = require('../lib/constants')

const TMP_FOLDER = path.resolve(__dirname, '../tmp')

function readSetupContent (filePath) {
  let pathInfo = path.parse(filePath)
  let content = fs.readFileSync(filePath, 'utf8')

  return {
    path: filePath,
    name: pathInfo.name,
    filename: pathInfo.base,
    content
  }
}

function generateSetupAst (contentItem, metadataItem) {
  let content = generateSetupItemAst(contentItem.content, metadataItem)

  return {
    name: contentItem.name,
    filename: contentItem.filename,
    content
  }
}

function generateSetupHtml (astItem) {
  let content = generateSetupItemHtml(astItem.content)

  return {
    name: astItem.name,
    filename: astItem.filename,
    content
  }
}

function saveSetupAst (astItem) {
  fs.writeFileSync(
    `${TMP_FOLDER}/${astItem.name}.ast.json`,
    jsonBeautify(astItem.content)
  )

  return astItem
}

function saveSetupHtml (setupsDistDir, htmlItem) {
  let filename = `${htmlItem.name}.html`

  fs.writeFileSync(`${setupsDistDir}/${htmlItem.name}/${filename}`, htmlItem.content)
}

function saveSetupsListAst (setupsListAst) {
  fs.writeFileSync(
    `${TMP_FOLDER}/list.ast.json`,
    jsonBeautify(setupsListAst)
  )
}

function saveSetupsListHtml (distDir, listHtml) {
  let filename = 'index.html'

  fs.writeFileSync(`${distDir}/${filename}`, listHtml)
}

function readSetupsContent (setupsSrcDir) {
  let setupsDirsList = fs
    .readdirSync(setupsSrcDir)
    .map(item => path.resolve(setupsSrcDir, item))
    .filter(itemPath => fs.statSync(itemPath).isDirectory())

  return setupsDirsList
    .reduce((items, setupDir) => {
      return items.concat(
        fs.readdirSync(setupDir)
          .map((item) => path.resolve(setupDir, item))
      )
    }, [])
    .filter(itemPath => fs.statSync(itemPath).isFile())
    .filter(filePath => /\.toolkit$/.test(filePath))
    .map(readSetupContent)
}

function getSetupsMetadata (setupsContentItems) {
  return setupsContentItems
    .map(contentItem => getSetupMetadata(contentItem.path))
}

function generateSetupsAst (setupsContent, setupsMetadata) {
  return setupsContent
    .map((contentItem, index) => {
      return generateSetupAst(contentItem, setupsMetadata[index])
    })
}

function generateRss (setupsAst, setupsMetadata) {
  let ast = generateRssAst(setupsAst, setupsMetadata)

  return generateRssXml(ast)
}

function saveRss (distDir, rss) {
  fs.writeFileSync(`${distDir}/rss.xml`, rss)
}

function generate (customDistDir) {
  let distDir

  if (customDistDir) {
    distDir = path.resolve(customDistDir)
  } else {
    distDir = path.resolve(__dirname, `../${DIST_FOLDER}`)
  }

  let setupsDistDir = `${distDir}/toolkits`
  let setupsSrcDir = path.resolve(__dirname, '../toolkits')

  let setupsContent
  let setupsMetadata
  let setupsAst

  fs.ensureDirSync(distDir)
  fs.ensureDirSync(TMP_FOLDER)

  copySetups(distDir)

  setupsContent = readSetupsContent(setupsSrcDir)
  setupsMetadata = getSetupsMetadata(setupsContent)
  setupsAst = generateSetupsAst(setupsContent, setupsMetadata)

  setupsAst
    .map(saveSetupAst)
    .map(generateSetupHtml)
    .map(setupHtmlItem => saveSetupHtml(setupsDistDir, setupHtmlItem))

  let setupsListAst = generateSetupsListAst(setupsAst, setupsMetadata)
  let setupsListHtml = generateSetupsListHtml(setupsListAst)

  saveSetupsListAst(setupsListAst)
  saveSetupsListHtml(distDir, setupsListHtml)

  copyStatics(distDir)
  copySubscribePage(distDir)

  let rss = generateRss(setupsAst, setupsMetadata)

  saveRss(distDir, rss)

  createPlayground(distDir)
}

let customDistDir = process.argv.slice(2)[0]

generate(customDistDir)
