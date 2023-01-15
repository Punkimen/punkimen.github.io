"use strict";
window.onload = function () {
	document.body.classList.add("loaded_hiding");
	window.setTimeout(function () {
		document.body.classList.add("loaded");
		document.body.classList.remove("loaded_hiding");
	}, 500);
};
document.addEventListener("DOMContentLoaded", function () {
	// main functions

	const addClass = (el, className) => {
		el.classList.add(className);
	};
	const removeClass = (el, className) => {
		el.classList.remove(className);
	};
	// main functions end

	// header
	{
		const body = document.querySelector("body");
		const mobMenu = document.querySelector(".mobile-menu");
		const burger = document.querySelector(".burger");
		burger.addEventListener("click", (e) => {
			if (!burger.classList.contains("active")) {
				addClass(burger, "active");
				addClass(mobMenu, "show");
				addClass(body, "overlay");
			} else {
				removeClass(burger, "active");
				removeClass(mobMenu, "show");
				removeClass(body, "overlay");
			}
		});
		// Якорные ссылки
		const smoothLinks = document.querySelectorAll("[scroll-href]");

		for (let smoothLink of smoothLinks) {
			smoothLink.addEventListener("click", function (e) {
				e.preventDefault();
				const id = smoothLink.getAttribute("scroll-href");
				removeClass(burger, "active");
				removeClass(mobMenu, "show");
				removeClass(body, "overlay");
				document.querySelector(id).scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			});
		}
	}

	// about
	{
		const aboutSubtitleImg = document.querySelector("#about-title");
		const aboutSubtitleText = document.querySelector(".about__subtitle_text");
		const aboutSubtitleParent = document.querySelector(".about__item_title");

		const resizingChanged = () => {
			const windowWidth = window.innerWidth;
			if (windowWidth <= 768 && !aboutSubtitleImg.classList.contains("full")) {
				aboutSubtitleImg.classList.add("full");
				aboutSubtitleImg.append(aboutSubtitleText);
			} else if (
				windowWidth > 768 &&
				aboutSubtitleImg.classList.contains("full")
			) {
				aboutSubtitleImg.classList.remove("full");
				aboutSubtitleParent.append(aboutSubtitleText);
			}
		};
		resizingChanged();
		window.addEventListener("resize", (e) => {
			resizingChanged();
		});
	}

	// roadmap
	{
		const lastTopCol = document.querySelector(".roadmap-content__col_last-top");
		const lastBottomCol = document.querySelector(
			".roadmap-content__col_last-bottom"
		);

		const resizingChanged = () => {
			const windowWidth = window.innerWidth;
			if (windowWidth <= 1200 && !lastTopCol.classList.contains("empty")) {
				const lastTopColList = document.querySelector(
					".roadmap-content__col_last-top .roadmap-list"
				);
				lastBottomCol.append(lastTopColList);
				lastTopCol.classList.add("empty");
			} else if (windowWidth > 1200 && lastTopCol.classList.contains("empty")) {
				const lastBottomColList = document.querySelector(
					".roadmap-content__col_last-bottom .roadmap-list"
				);
				lastTopCol.append(lastBottomColList);
				lastTopCol.classList.remove("empty");
			}
		};
		resizingChanged();
		window.addEventListener("resize", (e) => {
			resizingChanged();
		});
	}
	{
		const token = document.querySelector("#token").value;
		const copyBtn = document.querySelector("#copy-token");
		const notification = document.querySelector("#modal-copyed");

		copyBtn.addEventListener("click", (e) => {
			notification.classList.add("show");
			setTimeout(() => {
				notification.classList.remove("show");
			}, 2000);
			navigator.clipboard.writeText(token);
		});
	}
	// slider
	{
		const swiper = new Swiper(".swiper", {
			slidesPerView: 1,
			autoplay: true,
			breakpoints: {
				365: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 40,
				},
				1440: {
					slidesPerView: 6,
					spaceBetween: 40,
				},
			},
			// If we need pagination
			pagination: {
				el: ".swiper-pagination",
			},
		});
	}
});
