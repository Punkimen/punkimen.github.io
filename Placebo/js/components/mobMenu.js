import {toogleClass} from "./toogleClass.js";

export const burger = document.querySelector(".burger");
const headerMenues = document.querySelectorAll(".menu");
const mobMenu = document.querySelector(".mobile-menu");
const mobMenuContainer = document.querySelector(".mobile-menu__container");
const header = document.querySelector(".header");
const headerLeft = document.querySelector(".header__left");
const headerRight = document.querySelector(".header__right");

export const setMenu = () => {
	const windowWidth = window.innerWidth;
	if (windowWidth <= 992) {
		for (let menu of headerMenues) {
			mobMenuContainer.append(menu);
		}
	} else if (windowWidth > 992) {
		for (let menu of headerMenues) {
			if (menu.classList.contains("header__left-menu")) {
				headerLeft.append(menu);
			} else {
				headerRight.prepend(menu);
			}
		}
	}
};
export const toogleMenu = () => {
	toogleClass(burger, "active");
	toogleClass(header, "header_mobile");
	toogleClass(mobMenu, "open");
};
