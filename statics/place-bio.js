var bioElement = document.querySelector('.bio')
var picturesElements = document.querySelectorAll('.image__picture')
var bioRect = bioElement.getBoundingClientRect()
var hasOverlap = false

picturesElements.forEach(function (picture) {
  var pictureRect = picture.getBoundingClientRect()

  if (pictureRect.top < bioRect.bottom + 30) {
    hasOverlap = true
  }
})

if (hasOverlap) {
  bioElement.classList.add('static')
}


