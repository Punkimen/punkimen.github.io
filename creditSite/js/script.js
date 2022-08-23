"use strict";
const changePosition = (changedElem, beforeElem, innerStartElem, mediaSize) => {
  const windowSize = window.innerWidth
  if (windowSize <= mediaSize) {
    beforeElem.before(changedElem)
  } else {
    innerStartElem.prepend(changedElem)
  }
}

const fundingTitle = document.querySelector('.funding__title')
const fundingImg = document.querySelector('.funding__img')
const fundingContent = document.querySelector('.funding__content')

const whatTitle = document.querySelector('.what__title')
const whatImg = document.querySelector('.what__img')
const whatContent = document.querySelector('.what__content')


if (whatTitle != null) {
  changePosition(whatTitle, whatImg, whatContent, 768)
}
if (fundingTitle != null) {
  changePosition(fundingTitle, fundingImg, fundingContent, 768)
}


window.addEventListener("resize", function () {
  if (whatTitle != null) {
    changePosition(whatTitle, whatImg, whatContent, 768)
  }
  if (fundingTitle != null) {
    changePosition(fundingTitle, fundingImg, fundingContent, 768)
  }
});

