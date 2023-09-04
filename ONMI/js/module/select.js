import {addClass, removeClass, toggleClass} from "./handleClassnames.js";

const getCountries = async () => {
  const response = await fetch('https://countryapi.io/api/region/europe?apikey=gS9blfQayyTuKHunSkQbOlEzeNQbrtU3PLRcPMTg')
  const data = await response.json()
  return await data
}

const createOption = (el, parent) => {
  const elem = document.createElement('li');
  elem.className = 'select__elem'
  elem.innerHTML = `
  <input class="select__checkbox" name="country" value="${el}" type="radio">
  <div class="select__option">${el}</div>
  `
  parent.appendChild(elem)
}
export const createCountrySelect = async () => {
  const select = document.querySelector('#country')
  const list = select.querySelector('.select__list')
  const countries = Object.values(await getCountries()).map(el => el.name).sort()
  countries.sort().forEach(el => {
    createOption(el, list)
  })

}

export const selectInit = () => {
  createCountrySelect();
  const selects = document.querySelectorAll('.select');
  selects.forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.closest('.select__header')) {
        e.stopPropagation()
        toggleClass(el, 'show')
      }
      if (e.target.closest('.select__checkbox')) {
        e.stopPropagation()
        addClass(el, 'selected');
        el.querySelector('.select__value').textContent = e.target.value
        removeClass(el, 'show');
      }
    })
  })

  document.addEventListener('click', e => {
    if (!e.target.closest('.select')) {
      selects.forEach(el => {
        removeClass(el, 'show');
      })
    } else {
      return null
    }
  })
}



