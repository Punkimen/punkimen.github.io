export const scalingPositive = async (selector) => {
	await gsap.to(selector, {
		scale: 1.3,
		duration: 0.1,
	});
	await gsap.to(selector, {
		scale: 1,
		duration: 0.2,
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
