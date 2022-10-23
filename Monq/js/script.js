"use strict";
// change-theme 
const theme = localStorage.getItem("theme") ? localStorage.getItem("theme") : 'light'

const changeTheme = (theme) => {
  document.documentElement.className = theme
  localStorage.setItem('theme', theme)
  const inputsRadio = document.querySelectorAll('input[type="radio"]')
  inputsRadio.forEach(el => {
    if (el.getAttribute("value") == theme) {
      el.checked = true
    } else {
      el.checked = false;
    }
  })
}
const data = {}
const form = document.getElementById('form');
const formData = new FormData(form);
const btn = document.querySelector('#save')

const saveForm = (form) => {
  const formData = new FormData(form);
  for (const [key, value] of formData) {
    localStorage.setItem(key, value)
    data[key] = localStorage.getItem(key)
  }
}

const setForm = (data, form) => {
  const formData = new FormData(form);
  for (const [key] of formData) {
    data[key] = localStorage.getItem(key)
  }
  formData.set('first-day', "wednesday")
  for (let key in data) {
    const el = document.querySelector(`[name=${key}]`)
    el.value = data[key] !== null ? data[key] : el.value
  }

  formData.set('username', 'Chris')
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  saveForm(form)
  const theme = formData.get('theme')
  changeTheme(theme)
  setForm(data, form)
})

setForm(data, form)
changeTheme(theme)

// custom-select 
customSelect('select');

const allSelectsOpeners = document.querySelectorAll('.custom-select-opener')

allSelectsOpeners.forEach(el => {
  const arrow = document.createElement('span')
  arrow.className = 'select-arrow';
  arrow.innerHTML = `<svg width="12" height="8" viewBox="0 0 12 8" fill="inherit" xmlns="http://www.w3.org/2000/svg">
  <path d="M1.41 0.579956L6 5.16996L10.59 0.579956L12 1.99996L6 7.99996L0 1.99996L1.41 0.579956Z" fill="inherit" />
</svg>`
  el.append(arrow)
})
// custom-select  ends