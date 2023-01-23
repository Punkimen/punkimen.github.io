"use strict";
document.addEventListener("DOMContentLoaded", function () {
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
});
