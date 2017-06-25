require('babel-polyfill')

let generateSetupAst = require('../generate/setup-ast-playground')
let generateSetupHtml = require('../generate/setup-html-playground')

const DEFAULT_TEXT = `
name: John 😎 Doe
occupation: Rocket Scientist
link: https://en.wikipedia.org/wiki/John_Doe

> emacs

Any other software does not make any sense...
`
const CONTENT_STORAGE_KEY = 'input-content'

let playgroundElement = document.querySelector('.playground')
let inputElement = document.querySelector('.input')
let resultElement = document.querySelector('.result')

let imagesBodyElement = document.querySelector('.images')
let imagesListElement = document.querySelector('.images__list')
let imagesTriggerElement = document.querySelector('.images-trigger')
let uploadImagesInputElement = document.querySelector('.upload-images__input')

let cheatSheetBodyElement = document.querySelector('.cheatsheet')
let cheatSheetTriggerElement = document.querySelector('.cheatsheet-trigger')

let imagesSheetOpened = false
let cheatSheetOpened = false

imagesBodyElement.remove()
cheatSheetBodyElement.remove()

inputElement.addEventListener('input', onInput)

imagesTriggerElement.addEventListener('click', onImagesTriggerClick)
cheatSheetTriggerElement.addEventListener('click', onCheatTriggerClick)

uploadImagesInputElement.addEventListener('change', onImagesSelect)

function createImage (dataUrl, filename) {
  let container = document.createElement('div')
  let image = document.createElement('img')
  let title = document.createElement('div')

  container.classList.add('images__image-container')
  image.classList.add('images__picture')
  title.classList.add('images__title')

  image.src = dataUrl
  title.textContent = filename

  container.appendChild(image)
  container.appendChild(title)
  imagesListElement.prepend(container)
}

function toggleSheet (triggerElement, sheetElement, show) {
  if (show) {
    playgroundElement.appendChild(sheetElement)
    triggerElement.classList.add('active')
    setTimeout(() => sheetElement.classList.remove('hidden'))
  } else {
    triggerElement.classList.remove('active')
    sheetElement.classList.add('hidden')
    setTimeout(() => sheetElement.remove(), 200)
  }
}

function activateImagesTrigger () {
  imagesTriggerElement.removeAttribute('disabled')
}

function saveImage (filename, dataUrl) {
  if (!window.wfmPlaygroundImages) {
    window.wfmPlaygroundImages = {}
  }

  window.wfmPlaygroundImages[filename] = dataUrl
}

function onImagesTriggerClick () {
  imagesSheetOpened = !imagesSheetOpened
  toggleSheet(imagesTriggerElement, imagesBodyElement, imagesSheetOpened)

  if (cheatSheetOpened) {
    cheatSheetOpened = false
    toggleSheet(cheatSheetTriggerElement, cheatSheetBodyElement, cheatSheetOpened)
  }
}

function onCheatTriggerClick () {
  cheatSheetOpened = !cheatSheetOpened
  toggleSheet(cheatSheetTriggerElement, cheatSheetBodyElement, cheatSheetOpened)

  if (imagesSheetOpened) {
    imagesSheetOpened = false
    toggleSheet(imagesTriggerElement, imagesBodyElement, imagesSheetOpened)
  }
}

function onImagesSelect (event) {
  Array.from(event.target.files)
    .forEach((file) => {
      let reader = new FileReader()

      reader.onload = (uploadEvent) => {
        saveImage(file.name, uploadEvent.target.result)
        createImage(uploadEvent.target.result, file.name)
      }
      reader.readAsDataURL(file)
    })

  activateImagesTrigger()
  if (!imagesSheetOpened) {
    imagesSheetOpened = true
    toggleSheet(imagesTriggerElement, imagesBodyElement, imagesSheetOpened)
  }
  event.target.value = ''
}

function onInput (event) {
  window.sessionStorage.setItem(CONTENT_STORAGE_KEY, event.target.value)
  renderSetup(event.target.value)
}

function renderSetup (content) {
  let ast = generateSetupAst(content)
  let html = generateSetupHtml(ast)

  resultElement.innerHTML = html
}

let initialValue = window.sessionStorage.getItem(CONTENT_STORAGE_KEY) || DEFAULT_TEXT

inputElement.value = initialValue
renderSetup(initialValue)
inputElement.focus()
