"use strict";
import {sliderInit} from "./module/sliderInit.js";
import {splitText} from "./module/splitText.js";
import {setStyle} from "./module/setStyle.js";
import {initMap} from "./module/map.js";

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

		// gsap
		gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

		initMap("map");
	};
	initPage();
});
window.addEventListener("resize", () => {});
