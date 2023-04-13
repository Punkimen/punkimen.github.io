"use strict";
import {sliderInit} from "./module/sliderInit.js";
import {splitText} from "./module/splitText.js";
import {setStyle} from "./module/setStyle.js";
import {initMap} from "./module/map.js";
import {fadeDown, startEffectAnim} from "./module/GSAPAnim.js";
import {getEffect, random} from "./module/helpers.js";

document.addEventListener("DOMContentLoaded", () => {
	const initPage = () => {
		const delayElem = document.querySelectorAll("[data-delay]");
		const durationElem = document.querySelectorAll("[data-duration]");

		for (let elm of delayElem) {
			setStyle(elm, elm.dataset);
		}
		for (let elm of durationElem) {
			setStyle(elm, elm.dataset);
		}
		initMap("map");

		// gsap animation
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
		let firstSection = document.querySelector(".hero");

		if (ScrollTrigger.isTouch !== 1) {
			ScrollSmoother.create({
				smooth: 1.3,
				effects: true,
				smoothTouch: 0.3,
			});
		}

		gsap.fromTo(
			firstSection,
			{
				opacity: 1,
				scale: 1,
			},
			{
				opacity: 0,
				scale: 0.7,
				scrollTrigger: {
					trigger: firstSection,
					scrub: true,
					start: "top top",
					end: "+=100%",
					pin: true,
					pinSpacing: false,
				},
			},
		);

		const animEls = document.querySelectorAll("[data-effect]");
		const featuresItems = document.querySelectorAll(".features-item");
		const featuresItemsText = document.querySelectorAll(
			".features-item__text",
		);
		featuresItems.forEach((el) => {
			el.dataset.delay = random(0, 0.3).toFixed(2);
			el.dataset.duration = random(1, 1.7).toFixed(2);
		});
		featuresItemsText.forEach((el) => {
			el.dataset.delay = random(0, 0.3).toFixed(2);
			el.dataset.duration = random(1, 1.5).toFixed(2);
		});
		animEls.forEach((el) => {
			startEffectAnim(el);
		});

		gsap.fromTo(
			".concep__slider",
			{x: "10%"},
			{
				x: "-40%",
				scrollTrigger: {
					trigger: ".concep__slider",
					scrub: true,
					start: "top bottom",
					end: "+=150%",
				},
			},
		);
	};
	initPage();
});
window.addEventListener("resize", () => {});
