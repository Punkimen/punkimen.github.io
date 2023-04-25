const initOptions = {
	effect: "fade",
	speed: 2000,
	autoplay: {
		delay: 3000,
	},
	fadeEffect: {
		crossFade: true,
	},
	pagination: {
		el: ".swiper-pagination",
	},
};

export const sliderInit = (selector, options = initOptions) => {
	return new Swiper(selector, options);
};
