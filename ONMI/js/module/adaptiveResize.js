import {addClass, removeClass} from "./handleClassnames.js"

export const stepAdaptive = () => {
  const windowWidth = window.innerWidth

  const stepsWrapper = document.querySelector('.step__wrapper')
  const stepTitle = document.querySelector('.step__title')
  const stepText = document.querySelector('.step__text')
  if (stepsWrapper && stepTitle && stepText) {
    if (windowWidth <= 768 && !stepsWrapper?.classList.contains('changed')) {
      addClass(stepsWrapper, 'changed')
      stepsWrapper.append(stepText)
    } else if (windowWidth > 768 && stepsWrapper?.classList.contains('changed')) {
      removeClass(stepsWrapper, 'changed')
      stepTitle.after(stepText)
    }
  }
}

export const circlesAdaptive = () => {
  const windowWidth = window.innerWidth

  const cirles = document.querySelector('.be-part__cirles')
  const singleCircle = document.querySelector('.circle_1')
  const circlesWrapper = document.querySelector('.circles__wrapper')
  const indItem = document.querySelector('.individual-chose__item_ind')
  const collItem = document.querySelector('.individual-chose__item_coll')
  if (cirles) {
    if (windowWidth <= 768 && !cirles.classList.contains('changed')) {
      addClass(cirles, 'changed')
      indItem.prepend(singleCircle)
      collItem.prepend(circlesWrapper)
    } else if (windowWidth > 768 && cirles.classList.contains('changed')) {
      removeClass(cirles, 'changed')
      cirles.prepend(singleCircle)
      cirles.append(collItem)
    }
  }
}
