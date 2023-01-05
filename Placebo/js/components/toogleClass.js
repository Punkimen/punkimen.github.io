export const toogleClass = (el, className) => {
	!el.classList.contains(className)
		? el.classList.add(className)
		: el.classList.remove(className);
};
