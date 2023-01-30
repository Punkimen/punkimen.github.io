"use strict";
import {sliderInit} from "./module/sliderInit.js";
import {observerScroll} from "./module/scrollTrigerAnimation.js";
import {splitText} from "./module/splitText.js";
import {setStyle} from "./module/setStyle.js";
import {sectionHeightInit} from "./module/sectionHeightInit.js";
import {parallaxInit} from "./module/parallax.js";
import {setHeader} from "./module/setHeader.js";

window.onload = function () {
	document.body.classList.add("loaded_hiding");
	window.setTimeout(function () {
		document.body.classList.add("loaded");
		document.body.classList.remove("loaded_hiding");
	}, 0);
	const initPage = () => {
		const animEls = document.querySelectorAll(".animate");
		const delayElem = document.querySelectorAll("[data-delay]");
		const durationElem = document.querySelectorAll("[data-duration]");

		for (let elm of delayElem) {
			setStyle(elm, elm.dataset);
		}
		for (let elm of durationElem) {
			setStyle(elm, elm.dataset);
		}
		for (let elm of animEls) {
			observerScroll.observe(elm);
		}

		{
			const cardSliderOptions = {
				slidesPerView: "auto",
				spaceBetween: 10,
				grabCursor: true,
				speed: 1000,
				effect: "creative",
				creativeEffect: {
					prev: {
						shadow: true,
						translate: [0, 0, -400],
					},
					next: {
						translate: ["calc(100% + 10px)", 0, 0],
					},
				},

				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			};
			const slide_1 = sliderInit(".adventure__phone");
			const slide_2 = sliderInit(".cards-slider__slider", cardSliderOptions);
			slide_2.controller.control = slide_1;
		}

		const text = document.querySelectorAll(".animate-letters");
		text.forEach((el) => {
			splitText(el);
		});

		sectionHeightInit();
		parallaxInit();
	};
	initPage();
	let lastScrollTop = 0;
	window.addEventListener(
		"scroll",
		function () {
			let st = window.pageYOffset || document.documentElement.scrollTop;
			if (st > lastScrollTop && lastScrollTop > window.innerHeight) {
				// downscroll code
				setHeader(true);
			} else if (st < lastScrollTop) {
				// upscroll code
				setHeader(false);
			}
			lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
		},
		false
	);
};
