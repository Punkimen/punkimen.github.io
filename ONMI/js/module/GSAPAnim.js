export const scalingPositive = async (selector) => {
	await gsap.to(selector, {
		scale: 1.1,
		duration: 0.2,
	});
	await gsap.to(selector, {
		scale: 1,
		duration: 0.5,
	});
};
export const scalingNigative = async (selector) => {
	await gsap.to(selector, {
		scale: 0.9,
		duration: 0.2,
	});
	await gsap.to(selector, {
		scale: 1,
		duration: 0.5,
	});
};
