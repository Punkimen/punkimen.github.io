export const scrollToElem = (smoothLink) => {
	const id = smoothLink.getAttribute("scroll-href");
	document.querySelector(id).scrollIntoView({
		behavior: "smooth",
		block: "start",
	});
};
