"use strict";
import {adaptiveHeader, adaptiveReferral, adaptiveSupport} from './module/adaptive.js'
import {burger, mobMenu, smoothLinks} from "./module/vars.js";

document.addEventListener('DOMContentLoaded', () => {
  let windowWidth = window.innerWidth;
  burger.addEventListener('click', e => {
    e.preventDefault();
    burger.classList.toggle('active');
    mobMenu.classList.toggle('show');
    document.querySelector("body").classList.toggle('overlay');
  })


  adaptiveHeader(windowWidth);
  adaptiveSupport(windowWidth);
  adaptiveReferral(windowWidth);


  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute("scroll-href");
      if (burger.classList.contains('active')) {
        burger.classList.remove('active')
        mobMenu.classList.remove('show')
        document.querySelector("body").classList.remove('overlay');
      }
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  window.addEventListener('resize', () => {
    windowWidth = window.innerWidth;
    adaptiveHeader(windowWidth);
    adaptiveSupport(windowWidth);
    adaptiveReferral(windowWidth);
  })
});



