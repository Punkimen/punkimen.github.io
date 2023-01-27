"use strict";
window.onload = function () {
	document.body.classList.add("loaded_hiding");
	window.setTimeout(function () {
		document.body.classList.add("loaded");
		document.body.classList.remove("loaded_hiding");
	}, 500);
	const lazyLoadInstance = new LazyLoad({
		use_native: true,
	});
	AOS.init({
		offset: 20,
	});
	lazyLoadInstance.update();
};
window.document.addEventListener("DOMContentLoaded", function () {
	const addClass = (el, className) => {
		el.classList.add(className);
	};
	const removeClass = (el, className) => {
		el.classList.remove(className);
	};

	const headerLogo = document.querySelector(".header__logo");
	const headerNav = document.querySelector(".header__nav");
	const mobileMenu = document.querySelector(".mobile-menu");
	const mobileMenuContainer = document.querySelector(".mobile-menu__container");
	const burger = document.querySelector(".burger");

	const headerMobileBuild = () => {
		const windowWidth = window.innerWidth;
		if (windowWidth <= 992 && !mobileMenu.classList.contains("innered")) {
			mobileMenuContainer.prepend(headerNav);
			addClass(mobileMenu, "innered");
		} else if (windowWidth > 992 && mobileMenu.classList.contains("innered")) {
			console.log("w");
			headerLogo.after(headerNav);
			removeClass(mobileMenu, "innered");
		}
	};
	headerMobileBuild();

	burger.addEventListener("click", (e) => {
		if (!burger.classList.contains("active")) {
			addClass(mobileMenu, "open");
			addClass(burger, "active");
			addClass(document.body, "overlay");
		} else {
			removeClass(mobileMenu, "open");
			removeClass(burger, "active");
			removeClass(document.body, "overlay");
		}
	});

	window.addEventListener("resize", (e) => {
		headerMobileBuild();
	});

	// Якорные ссылки

	const smoothLinks = document.querySelectorAll("[scroll-href]");

	for (let smoothLink of smoothLinks) {
		smoothLink.addEventListener("click", function (e) {
			e.preventDefault();
			const id = smoothLink.getAttribute("scroll-href");
			removeClass(burger, "active");
			removeClass(mobileMenu, "open");
			removeClass(document.body, "overlay");
			const el = document.querySelector(id);
			if (el) {
				el.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			} else {
				window.history.back();
			}
		});
	}

	// Select
	customSelect("select");

	// popups
	const popups = document.querySelector(".popups");
	const popupsElems = document.querySelectorAll(".popup");
	const closeBtn = document.querySelectorAll(".js-close-popup");
	const popupsOpenBtns = document.querySelectorAll("[data-popup]");

	const showPopup = (selector) => {
		addClass(popups, "show");
		const el = document.querySelector(selector);
		addClass(el, "show");
	};
	const closePopup = () => {
		removeClass(popups, "show");
		popupsElems.forEach((el) => {
			removeClass(el, "show");
		});
	};

	popupsOpenBtns.forEach((el) => {
		el.addEventListener("click", (e) => {
			const popupSelector = el.getAttribute("data-popup");
			showPopup(popupSelector);
		});
	});

	if (closeBtn.length > 0) {
		closeBtn.forEach((el) => {
			el.addEventListener("click", () => {
				closePopup();
			});
		});
	}
	document.addEventListener("click", (e) => {
		if (e.target.className === "popups__inner") {
			closePopup();
		}
	});
});
