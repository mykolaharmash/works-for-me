module.exports = function jsonBeautify (content) {
  return JSON.stringify(content, null, 2) + '\n'
}
