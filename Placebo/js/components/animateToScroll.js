import {animateWord} from "./animateWords.js";
const options = {
	rootMargin: "0px",
	threshold: 0,
};
const animateToScroll = (el) => {
	el.forEach((change) => {
		if (
			change.target.classList.contains("animateWord") &&
			!change.target.classList.contains("animated")
		) {
			if (change.isIntersecting) {
				animateWord(change.target);
				change.target.classList.add("animated");
			}
		} else if (
			!change.target.classList.contains("animateWord") &&
			!change.target.classList.contains("element-show")
		) {
			if (change.isIntersecting) {
				change.target.classList.add("element-show");
			}
		}
	});
};

export const observerScroll = new IntersectionObserver(
	animateToScroll,
	options
);
