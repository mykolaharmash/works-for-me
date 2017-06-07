require('babel-polyfill');

const generateSetupAst = require('../generate/setup-ast-playground');
const generateSetupHtml = require('../generate/setup-html-playground');

const inputElement = document.querySelector('.input');
const resultElement = document.querySelector('.result');
const cheatsheetBody = document.querySelector('.cheatsheet');
const cheatsheetTrigger = document.querySelector('.cheatsheet-trigger');

inputElement.addEventListener('input', (event) => renderSetup(event.target.value));

cheatsheetTrigger.addEventListener('mouseenter', showCheatsheet);
cheatsheetTrigger.addEventListener('focus', showCheatsheet);

cheatsheetTrigger.addEventListener('mouseleave', hideCheatsheet);
cheatsheetTrigger.addEventListener('blur', hideCheatsheet);

function renderSetup (content) {
  let ast = generateSetupAst(content);
  let html = generateSetupHtml(ast);

  resultElement.innerHTML = html;
}

function showCheatsheet () {
  cheatsheetBody.classList.remove('hidden');
}

function hideCheatsheet () {
  cheatsheetBody.classList.add('hidden');
}

renderSetup(inputElement.value);

inputElement.focus();
