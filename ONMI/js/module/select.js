import {addClass, removeClass, toggleClass} from "./handleClassnames.js";

export const countries = [
  "Norway",
  "Sweden",
  "Finland",
  "Denmark",
  "Iceland",
  "United Kingdom",
  "Ireland",
  "Portugal",
  "Spain",
  "France",
  "Belgium",
  "Netherlands",
  "Luxembourg",
  "Italy",
  "Greece",
  "Malta",
  "Cyprus",
  "Slovenia",
  "Croatia",
  "Russia",
  "Estonia",
  "Latvia",
  "Lithuania",
  "Belarus",
  "Poland",
  "Ukraine",
  "Moldova",
  "Romania",
  "Bulgaria",
  "Hungary",
  "Serbia",
  "Montenegro",
  "North Macedonia",
  "Albania",
  "Kosovo",
  "Bosnia and Herzegovina",
  "Czech Republic",
  "Slovakia",
  "Austria",
  "Switzerland",
  "Germany"
]

const createOption = (el, parent) => {
  const elem = document.createElement('li');
  elem.className = 'select__elem'
  elem.innerHTML = `
  <input class="select__checkbox" name="country" value="${el}" type="radio">
  <div class="select__option">${el}</div>
  `
  parent.appendChild(elem)
}
export const createCountrySelect = (countries) => {
  const select = document.querySelector('#country')
  const list = select.querySelector('.select__list')
  list.innerHTML = '';
  countries.sort().forEach(el => {
    createOption(el, list)
  })
}

export const selectInit = () => {
  const search = document.querySelector('#country-search')
  createCountrySelect(countries);
  const selects = document.querySelectorAll('.select');
  selects.forEach(el => {
    const input = el.querySelector('.select__value')
    input.addEventListener('focus', e => {
      addClass(el, 'show')
    })
    el.addEventListener('click', e => {
      if (e.target.closest('.select__checkbox')) {
        e.stopPropagation()
        addClass(el, 'selected');
        el.querySelector('.select__value').value = e.target.value
        removeClass(el, 'show');
        createCountrySelect(countries);
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



