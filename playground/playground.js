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

let sheetBackdropElement = document.querySelector('.sheet-backdrop')

let imagesBodyElement = document.querySelector('.images')
let imagesListElement = document.querySelector('.images__list')
let imagesTriggerElement = document.querySelector('.images-trigger')
let uploadImagesInputElement = document.querySelector('.upload-images__input')

let cheatSheetBodyElement = document.querySelector('.cheatsheet')
let cheatSheetTriggerElement = document.querySelector('.cheatsheet-trigger')

let imagesSheetOpened = false
let cheatSheetOpened = false

sheetBackdropElement.remove()
imagesBodyElement.remove()
cheatSheetBodyElement.remove()

inputElement.addEventListener('input', onInput)

imagesTriggerElement.addEventListener('click', onImagesTriggerClick)
cheatSheetTriggerElement.addEventListener('click', onCheatTriggerClick)
sheetBackdropElement.addEventListener('click', onSheetBackdropClick)

uploadImagesInputElement.addEventListener('change', onImagesSelect)

function createImage (filename, blobUrl) {
  let container = document.createElement('div')
  let image = document.createElement('img')
  let title = document.createElement('div')

  container.classList.add('images__image-container')
  image.classList.add('images__picture')
  title.classList.add('images__title')

  image.src = blobUrl
  title.textContent = filename

  container.appendChild(image)
  container.appendChild(title)
  imagesListElement.prepend(container)
}

function toggleBackdrop (show) {
  if (show) {
    playgroundElement.appendChild(sheetBackdropElement)
    setTimeout(() => {
      sheetBackdropElement.classList.remove('hidden')
    })
  } else {
    sheetBackdropElement.classList.add('hidden')
    setTimeout(() => {
      sheetBackdropElement.remove()
    }, 200)
  }
}

function toggleSheet (triggerElement, sheetElement, show) {
  if (show) {
    playgroundElement.appendChild(sheetElement)
    triggerElement.classList.add('active')
    setTimeout(() => {
      sheetElement.classList.remove('hidden')
    })
  } else {
    triggerElement.classList.remove('active')
    sheetElement.classList.add('hidden')
    setTimeout(() => {
      sheetElement.remove()
    }, 200)
  }
}

function activateImagesTrigger () {
  imagesTriggerElement.removeAttribute('disabled')
}

function saveImage (filename, blobUrl) {
  if (!window.wfmPlaygroundImages) {
    window.wfmPlaygroundImages = {}
  }

  window.wfmPlaygroundImages[`./${ filename }`] = blobUrl
}

function toggleCheatSheet (show) {
  cheatSheetOpened = show
  toggleSheet(cheatSheetTriggerElement, cheatSheetBodyElement, cheatSheetOpened)
}

function toggleImagesSheet (show) {
  imagesSheetOpened = show
  toggleSheet(imagesTriggerElement, imagesBodyElement, imagesSheetOpened)
}

function onImagesTriggerClick () {
  imagesSheetOpened = !imagesSheetOpened
  toggleSheet(imagesTriggerElement, imagesBodyElement, imagesSheetOpened)

  if (imagesSheetOpened) {
    if (!cheatSheetOpened) {
      toggleBackdrop(true)
    }
  } else {
    toggleBackdrop(false)
  }

  if (cheatSheetOpened) {
    toggleCheatSheet(false)
  }
}

function onCheatTriggerClick () {
  cheatSheetOpened = !cheatSheetOpened
  toggleSheet(cheatSheetTriggerElement, cheatSheetBodyElement, cheatSheetOpened)

  if (cheatSheetOpened) {
    if (!imagesSheetOpened) {
      toggleBackdrop(true)
    }
  } else {
    toggleBackdrop(false)
  }

  if (imagesSheetOpened) {
    toggleImagesSheet(false)
  }
}

function onImagesSelect (event) {
  Array.from(event.target.files)
    .forEach((file) => {
      let reader = new FileReader()

      reader.onload = (uploadEvent) => {
        let blob = new Blob([uploadEvent.target.result], { type: file.type })
        let blobUrl = URL.createObjectURL(blob)

        saveImage(file.name, blobUrl)
        createImage(file.name, blobUrl)
        renderSetup(inputElement.value)
      }
      reader.readAsArrayBuffer(file)
    })

  activateImagesTrigger()
  if (!imagesSheetOpened) {
    toggleImagesSheet(true)

    if (!cheatSheetOpened) {
      toggleBackdrop(true)
    }
  }
  event.target.value = ''
}

function onSheetBackdropClick () {
  if (imagesSheetOpened) {
    toggleImagesSheet(false)
  }

  if (cheatSheetOpened) {
    toggleCheatSheet(false)
  }

  toggleBackdrop(false)
}

function onInput (event) {
  window.sessionStorage.setItem(CONTENT_STORAGE_KEY, event.target.value)
  renderSetup(event.target.value)
}

function renderSetup (content) {
  let ast = generateSetupAst(content)
  let html = generateSetupHtml(ast)

  setTimeout(() => resultElement.innerHTML = html)
}

let initialValue = window.sessionStorage.getItem(CONTENT_STORAGE_KEY) || DEFAULT_TEXT

inputElement.value = initialValue
setTimeout(() => inputElement.scrollTop = 0)
renderSetup(initialValue)
inputElement.focus()
