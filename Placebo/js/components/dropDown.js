export const growElem = (el, wrapper) => {
	if (el.clientHeight > 0) {
		el.style.height = 0;
	} else {
		el.style.height = wrapper.clientHeight + 3 + "px";
		el.style.opacity = 1;
	}
};
