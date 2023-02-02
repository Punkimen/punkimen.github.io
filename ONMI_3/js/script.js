"use strict";
import {sliderInit} from "./module/sliderInit.js";
import {observerScroll} from "./module/scrollTrigerAnimation.js";
import {splitText} from "./module/splitText.js";
import {setStyle} from "./module/setStyle.js";
import {sectionHeightInit} from "./module/sectionHeightInit.js";
import {parallaxInit} from "./module/parallax.js";
import {setHeader} from "./module/setHeader.js";

window.onload = function () {
	// document.body.classList.add("loaded_hiding");
	// window.setTimeout(function () {
	// 	document.body.classList.add("loaded");
	// 	document.body.classList.remove("loaded_hiding");
	// }, 0);
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
				speed: 600,
				effect: "creative",
				parallax: true,

				creativeEffect: {
					limitProgress: 2,
					prev: {
						shadow: true,
						translate: [0, 0, -400],
						scale: [0],
						opacity: 0,
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
			const slider_1 = sliderInit(".adventure__phone");
			const slider_2 = sliderInit(".cards-slider__slider", cardSliderOptions);
			slider_2.controller.control = slider_1;
			console.log(slider_2);
			const sliderPrety = () => {
				const arrSliders = slider_2.slides;
				const lastEl = arrSliders[arrSliders.length - 1];
				if (slider_2.activeIndex === arrSliders.length - 1) {
					lastEl.style.right = "9.7vw";
					lastEl.style.transotionDuration = "600ms";
				} else {
					lastEl.style.right = "0vw";
					lastEl.style.transotionDuration = "600ms";
				}
			};

			slider_2.on("slideChange", function () {
				sliderPrety();
			});
		}

		const text = document.querySelectorAll(".animate-letters");
		text.forEach((el) => {
			splitText(el);
		});

		const textWord = document.querySelectorAll(".animate-text");
		textWord.forEach((el) => {
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
