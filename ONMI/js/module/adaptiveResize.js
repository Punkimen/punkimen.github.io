import {addClass, removeClass} from "./handleClassnames.js"

export const cardsAdaptive = () => {
  const windowWidth = window.innerWidth
  const cardsWrapper = document.querySelector('.cards .cards__wrapper')
  const card1 = cardsWrapper?.querySelector('.card_1')
  const card2 = cardsWrapper?.querySelector('.card_2')
  const card3 = cardsWrapper?.querySelector('.card_3')
  const card4 = cardsWrapper?.querySelector('.card_4')
  const cardsColumns = cardsWrapper?.querySelectorAll('.cards__col')
  if (windowWidth <= 768 && !cardsWrapper.classList.contains('wrapper-row')) {
    addClass(cardsWrapper, 'wrapper-row')
    cardsWrapper.append(card1)
    cardsWrapper.append(card3)
    cardsWrapper.append(card4)
    cardsWrapper.append(card2)
  } else if (windowWidth > 768 && cardsWrapper.classList.contains('wrapper-row')) {
    removeClass(cardsWrapper, 'wrapper-row')
    cardsColumns.forEach((el, index) => {
      if (index === 0) {
        cardsColumns[index].append(card1, card2)
      }
      if (index === 1) {
        cardsColumns[index].append(card3, card4)
      }
    })
  }
}

export const journeyCardsAdaptive = () => {

  const windowWidth = window.innerWidth
  const cardsWrapper = document.querySelector('.journey-cards .journey-cards__wrapper')
  const card1 = cardsWrapper?.querySelector('.journey-card_1')
  const card2 = cardsWrapper?.querySelector('.journey-card_2')
  const card3 = cardsWrapper?.querySelector('.journey-card_3')
  const card4 = cardsWrapper?.querySelector('.journey-card_4')
  const cardsColumns = cardsWrapper?.querySelectorAll('.cards__col')
  if (windowWidth <= 768 && !cardsWrapper.classList.contains('wrapper-row')) {
    addClass(cardsWrapper, 'wrapper-row')
    cardsWrapper.append(card1)
    cardsWrapper.append(card2)
    cardsWrapper.append(card3)
    cardsWrapper.append(card4)
  } else if (windowWidth > 768 && cardsWrapper.classList.contains('wrapper-row')) {
    removeClass(cardsWrapper, 'wrapper-row')
    cardsColumns.forEach((el, index) => {
      if (index === 0) {
        cardsColumns[index].append(card1, card3)
      }
      if (index === 1) {
        cardsColumns[index].append(card2, card4)
      }
    })
  }
}