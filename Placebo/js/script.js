"use strict";
window.onload = function () {
	document.body.classList.add("loaded_hiding");
	window.setTimeout(function () {
		document.body.classList.add("loaded");
		document.body.classList.remove("loaded_hiding");
	}, 500);
};
import {observerScroll} from "./components/animateToScroll.js";
import {growElem} from "./components/dropDown.js";
import {toogleClass} from "./components/toogleClass.js";
import {setMenu, toogleMenu, burger} from "./components/mobMenu.js";

document.addEventListener(
	"DOMContentLoaded",
	function () {
		const animEls = document.querySelectorAll(".animate");
		for (let elm of animEls) {
			observerScroll.observe(elm);
		}
		const dropdown = document.querySelector(".drowdown-menu");
		const dropdownHead = dropdown.querySelector(".drowdown-menu__header");
		const dropdownBody = dropdown.querySelector(".drowdown-menu__body");
		const dropdownList = dropdown.querySelector(".drowdown-menu__list");

		dropdownHead.addEventListener("click", (e) => {
			growElem(dropdownBody, dropdownList);
			toogleClass(dropdown, "open");
		});
		dropdownList.addEventListener("click", (e) => {
			e.preventDefault();
			if (e.target.closest(".drowdown-menu__elem")) {
				growElem(dropdownBody, dropdownList);
				toogleClass(dropdown, "open");
			}
		});
		setMenu();
		window.addEventListener("resize", (e) => {
			setMenu();
		});

		burger.addEventListener("click", (e) => {
			e.preventDefault();
			toogleMenu();
		});
		(function () {
			var scroll = new LocomotiveScroll({
				el: document.querySelector("[data-scroll-container]"),
				smooth: true,
			});
			const startBtn = document.querySelector(".start-btn");
			startBtn.addEventListener("click", (e) => {
				e.preventDefault();
				const target = document.querySelector("#hero");
				scroll.scrollTo(target);
			});
		})();
		const smoothLinks = document.querySelectorAll("[scroll-href]");
		for (let smoothLink of smoothLinks) {
			smoothLink.addEventListener("click", function (e) {
				e.preventDefault();
				scrollToElem(e.target);
			});
		}
		//
	},

	false
);
window.addEventListener("unload", (e) => {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
});
