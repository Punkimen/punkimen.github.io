"use strict";
import {burger, mobMenu, referralTable} from "./module/vars.js";
import {adaptiveHeader, adaptiveReferral, adaptiveSupport} from "./module/adaptive.js";

document.addEventListener('DOMContentLoaded', () => {
  let windowWidth = window.innerWidth;
  burger.addEventListener('click', e => {
    e.preventDefault();
    burger.classList.toggle('active');
    mobMenu.classList.toggle('show');
    document.querySelector("body").classList.toggle('overlay');
  })
  if (referralTable) {
    adaptiveReferral(windowWidth);
  }
  window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    if (referralTable) {
      adaptiveReferral(windowWidth);
    }
  })
});



