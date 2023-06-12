"use strict";

const defaultData = [
  {
    id: 'about',
    title: 'About',
    text: 'Venturing Out To Create The Healthiest Meme Economy On Binance Smart Chain, Our Team Bred Red Floki CEO. A Combination Of Bold Redness And The Greatest Of All Meme Glory, Red Floki CEO Is Aimed At The Moon.\n' +
      'Coming Out Of The Box, Red Floki CEO Is A Reflection Token, With HOLDR Rewards And No Buy Fees, Because Our Team Wants You Aimed At The Moon As Well.',
  },
  {
    id: 'presale',
    title: 'Presale',
    text: 'Venturing Out To Create The Healthiest Meme Economy On Binance Smart Chain, Our Team Bred Red Floki CEO. A Combination Of Bold Redness And The Greatest Of All Meme Glory, Red Floki CEO Is Aimed At The Moon.\n' +
      'Coming Out Of The Box, Red Floki CEO Is A Reflection Token, With HOLDR Rewards And No Buy Fees, Because Our Team Wants You Aimed At The Moon As Well.',
  },
  {
    id: 'tokenomics',
    title: 'Tokenomics',
    text: 'Venturing Out To Create The Healthiest Meme Economy On Binance Smart Chain, Our Team Bred Red Floki CEO. A Combination Of Bold Redness And The Greatest Of All Meme Glory, Red Floki CEO Is Aimed At The Moon.\n' +
      'Coming Out Of The Box, Red Floki CEO Is A Reflection Token, With HOLDR Rewards And No Buy Fees, Because Our Team Wants You Aimed At The Moon As Well.',
  },
  {
    id: 'social',
    title: 'Social',
    text: 'Venturing Out To Create The Healthiest Meme Economy On Binance Smart Chain, Our Team Bred Red Floki CEO. A Combination Of Bold Redness And The Greatest Of All Meme Glory, Red Floki CEO Is Aimed At The Moon.\n' +
      'Coming Out Of The Box, Red Floki CEO Is A Reflection Token, With HOLDR Rewards And No Buy Fees, Because Our Team Wants You Aimed At The Moon As Well.',
  },
  {
    id: 'roadmap',
    title: 'Roadmap',
    text: 'Venturing Out To Create The Healthiest Meme Economy On Binance Smart Chain, Our Team Bred Red Floki CEO. A Combination Of Bold Redness And The Greatest Of All Meme Glory, Red Floki CEO Is Aimed At The Moon.\n' +
      'Coming Out Of The Box, Red Floki CEO Is A Reflection Token, With HOLDR Rewards And No Buy Fees, Because Our Team Wants You Aimed At The Moon As Well.',
  },
  {
    id: 'partners',
    title: 'Partners',
    text: 'Venturing Out To Create The Healthiest Meme Economy On Binance Smart Chain, Our Team Bred Red Floki CEO. A Combination Of Bold Redness And The Greatest Of All Meme Glory, Red Floki CEO Is Aimed At The Moon.\n' +
      'Coming Out Of The Box, Red Floki CEO Is A Reflection Token, With HOLDR Rewards And No Buy Fees, Because Our Team Wants You Aimed At The Moon As Well.',
  },
]

const shortcuts = document.querySelectorAll('.shortcut');
const shortcutNames = document.querySelectorAll('.shortcut-name');
const windowBody = document.querySelector('.window__body');
const windowModal = document.querySelector('.window');
const closeBtns = document.querySelectorAll('.window__close')
const bookmark = document.querySelector('.bookmark');
shortcuts.forEach(el => {
  el.addEventListener('click', e => {
    const id = e.target.closest('.shortcut').getAttribute('data-id');
    const openShortcut = defaultData.filter(el => el.id === id)
    shortcutNames.forEach(el => {
      el.textContent = openShortcut[0].title
    })
    windowModal.classList.add('show')
    bookmark.classList.add('show')
    windowBody.textContent = openShortcut[0].text
  })
})

closeBtns.forEach(el => {
  el.addEventListener('click', e => {
    windowModal.classList.remove('show')
    bookmark.classList.remove('show')
  })
})
