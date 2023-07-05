export const setStyle = (el, animProps) => {
	for (let prop in animProps) {
		const capitalize = prop.charAt(0).toUpperCase() + prop.slice(1);
		console.log(el, capitalize)
		if (capitalize === "Delay") {
			el.style.transitionDelay = `${el.dataset.delay}s`;
		}
		if (capitalize === "Duration") {
			el.dataset.duration;
			el.style.animationDuration = `${el.dataset.duration}s`;
		}
	}
};
