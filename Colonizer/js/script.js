"use strict";
// adaptive header
{
	const menuInner = document.querySelector(".mobile-menu__container");
	const headerLogo = document.querySelector(".header__logo");
	const headerNav = document.querySelector(".header__nav");
	const headerBtn = document.querySelector(".header__btn");
	const headerHandle = document.querySelector(".header__handle");
	const changePos = () => {
		const windowWidth = window.innerWidth;
		if (windowWidth <= 992) {
			console.log(menuInner);
			console.log(headerNav);
			menuInner.prepend(headerNav);
		} else {
			headerLogo.after(headerNav);
		}
		if (windowWidth <= 767) {
			headerNav.after(headerBtn);
		} else {
			headerHandle.prepend(headerBtn);
		}
	};
	changePos();
	window.addEventListener("resize", () => {
		changePos();
	});

	// show/hide
	const toggleMenu = () => {
		const mobileMenu = document.querySelector(".mobile-menu");
		mobileMenu.classList.toggle("show");
	};
	const burger = document.querySelector(".burger");
	burger.addEventListener("click", (e) => {
		toggleMenu();
	});

	// Якорные ссылки

	const smoothLinks = document.querySelectorAll("[scroll-href]");

	for (let smoothLink of smoothLinks) {
		smoothLink.addEventListener("click", function (e) {
			e.preventDefault();
			const id = smoothLink.getAttribute("scroll-href");

			document.querySelector(id).scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		});
	}
}

// slider init
{
	const breakpointsSlider = {
		// when window width is >= 990px
		568: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		// when window width is >= 1200px
		1200: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	};
	const options = {
		slidesPerView: 1,
		loop: false,
		SpaceBetween: 35,
		// autoHeight: true,
		// autoplay: {
		// 	delay: 2500,
		// 	disableOnInteraction: false,
		// },
		// If we need pagination
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	};
	const slider = new Swiper(".team__slider", {
		...options,
		breakpoints: breakpointsSlider,
	});
}

// copied
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

// popups && select choose option
{
	const popups = document.querySelector(".popups");
	const showPopup = (el) => {
		popups.style.display = "block";
		document.querySelector(el).classList.add("show");
	};
	const closePopup = () => {
		popups.style.display = "none";
		document.querySelectorAll(".popup").forEach((el) => {
			el.classList.remove("show");
		});
	};
	const popupsBtns = document.querySelectorAll("[data-modal]");
	popupsBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();
			const el = btn.getAttribute("data-modal");
			showPopup(el);
		});
	});

	const closePopupsBtns = document.querySelectorAll(".js-close-popup");
	closePopupsBtns.forEach((btn) => {
		btn.addEventListener("click", (e) => {
			e.preventDefault();
			closePopup();
		});
	});
	document.addEventListener("click", (e) => {
		if (e.target.className === "popups__inner") {
			closePopup();
		}
	});

	// select choose option start
	const fromToken = document.querySelector("#from-token");
	const inToken = document.querySelector("#in-token");
	const optionsInner = document.querySelector("#modal-token");

	fromToken.addEventListener("click", (e) => {
		optionsInner.classList.remove("in");
		optionsInner.classList.add("from");
	});
	inToken.addEventListener("click", (e) => {
		optionsInner.classList.remove("from");
		optionsInner.classList.add("in");
	});
	optionsInner.addEventListener("click", (e) => {
		if (e.target.closest(".select-option")) {
			const innerValue = e.target.closest(".select-option").innerHTML;
			if (optionsInner.classList.contains("in")) {
				inToken.querySelector(".select__value").innerHTML = innerValue;
			} else if (optionsInner.classList.contains("from")) {
				fromToken.querySelector(".select__value").innerHTML = innerValue;
			}
			closePopup();
		}
	});
}
// popups end

{
	$(window).scroll(function () {
		$(".bg").bgscroll({
			direction: "top", // направление bottom или top
			bgpositionx: 50, // x позиция фонового изображения, от 0 до 100, размерность в %, 50 - означает по центру
			debug: false, // Режим отладки
			min: 0, // минимальное положение (в %) на которое может смещаться фон
			max: 100, // максимальное положение (в %) на которое может смещаться фон
		});
	});
	const tilt = $(".js-tilt").tilt();
}
