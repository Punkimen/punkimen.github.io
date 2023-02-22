export const scalingPositive = async (selector) => {
	await gsap.to(selector,{
		scale: 1.3,
		duration: 0.1,
	});
	await gsap.to(selector,{
		scale: 1,
		duration: 0.2,
	});
};
export const lineShow = el => {
	const delay = el.getAttribute('data-delay') ? el.getAttribute('data-delay') : 0
	const duration = el.getAttribute('data-duration') ? el.getAttribute('data-duration') : 1.2
	gsap.fromTo(el,{
		y: '150%'
	},{
		y: '0',
		delay: delay,
		duration: duration,
		ease: "power1.inOut",
		scrollTrigger: {
			trigger: el,
		}
	})
}

export const opacityIn = el => {
	const delay = el.getAttribute('data-delay') ? el.getAttribute('data-delay') : 0
	const duration = el.getAttribute('data-duration') ? el.getAttribute('data-duration') : 1.2
	gsap.fromTo(el,{
		opacity: 0,
	},{
		opacity: 1,
		delay: delay,
		duration: duration,
		ease: "power1.inOut",
		scrollTrigger: {
			trigger: el,
		}
	})
}
export const transformTop = el => {
	const delay = el.getAttribute('data-delay') ? el.getAttribute('data-delay') : 0
	const duration = el.getAttribute('data-duration') ? el.getAttribute('data-duration') : 1.2
	gsap.fromTo(el,{
		y: '100%'
	},{
		y: 0,
		delay: delay,
		duration: duration,
		ease: "power1.inOut",
		scrollTrigger: {
			trigger: el,
		}
	})

}
export const fadeDown = el => {
	const delay = el.getAttribute('data-delay') ? el.getAttribute('data-delay') : 0
	const duration = el.getAttribute('data-duration') ? el.getAttribute('data-duration') : 1.2
	gsap.fromTo(el,{
		opacity: 0,
		y: 150
	},{
		y: 0,
		opacity: 1,
		delay: delay,
		duration: duration,
		ease: "power1.inOut",
		scrollTrigger: {
			trigger: el,
		}
	})

}
export const fadeIn = el => {
	const delay = el.getAttribute('data-delay') ? el.getAttribute('data-delay') : 0
	const duration = el.getAttribute('data-duration') ? el.getAttribute('data-duration') : 1
	gsap.fromTo(el,{
		opacity: 0,
	},{
		z: 0,
		opacity: 1,
		delay: delay,
		duration: duration,
		ease: "power1.inOut",
		scrollTrigger: {
			trigger: el,
		}
	})

}
export const flipAnim = el => {
	const delay = el.getAttribute('data-delay') ? el.getAttribute('data-delay') : 0
	const duration = el.getAttribute('data-duration') ? el.getAttribute('data-duration') : 0.8
	gsap.fromTo(el,{
		opacity: 0,
		rotationX: -80,
		y: '100%'
	},{
		scrollTrigger: {
			trigger: el,
		},
		delay: delay,
		duration: duration,
		ease: "power1.inOut",
		opacity: 1,
		rotationX: 0,
		y: 0
	})
}
export const leftToRight = (el,trigger) => {
	if (el) {
		gsap.fromTo(el,{
			width: 0,
		},{
			width: "100%",
			delay: 0,
			duration: 1,
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: trigger ? trigger : el,
			}
		})
	}
}
export const rightToLeft = (el,trigger) => {
	const delay = el.getAttribute('data-delay') ? el.getAttribute('data-delay') : 0
	const duration = el.getAttribute('data-duration') ? el.getAttribute('data-duration') : 1

	gsap.fromTo(el,{
		opacity: 0,
		x: '100%',
	},{
		x: 0,
		opacity: 1,
		delay: delay,
		duration: duration,
		ease: "power1.inOut",
		scrollTrigger: {
			trigger: trigger ? trigger : el,
		}
	})
}
export const showElem = el => {
	gsap.fromTo(el,{
		// y: -200,
		// x: 200,
		opacity: 0,
	},{
		y: 0,
		x: 0,
		opacity: 1,
		duration: 1,
	})
}
export const hideElem = el => {
	gsap.fromTo(el,{
		y: 0,
		x: 0,
		opacity: 1,
	},{
		opacity: 0,
		duration: 1,
	})
}
export const fadeUp = el => {
	const delay = el.getAttribute('data-delay') ? el.getAttribute('data-delay') : 0
	const duration = el.getAttribute('data-duration') ? el.getAttribute('data-duration') : 2
	gsap.fromTo(el,{
		opacity: 0,
		skewY: 3,
		y: "-30%"
	},{
		opacity: 1,
		skewY: 0,
		y: "0",
		delay: delay,
		duration: duration,
		ease: "power1.inOut",
		scrollTrigger: {
			trigger: el,
		}
	})
}
export const scaling = el => {
	const delay = el.getAttribute('data-delay') ? el.getAttribute('data-delay') : 0
	const duration = el.getAttribute('data-duration') ? el.getAttribute('data-duration') : 1.3
	gsap.fromTo(el,{
		scale: .3,
		opacity: 1,
	},{
		opacity: 1,
		scale: 1,
		delay: delay,
		duration: duration,
		ease: "power1.inOut",
		scrollTrigger: {
			trigger: el,
		}
	})
}
export const circleDraw = (el,tirgger) => {
	const delay = el.getAttribute('data-delay') ? el.getAttribute('data-delay') : 0
	const duration = el.getAttribute('data-duration') ? el.getAttribute('data-duration') : 1.2

	gsap.to(el,{
		strokeDashoffset: '0',
		delay: delay,
		duration: duration,
		ease: "power1.inOut",
		scrollTrigger: {
			start: "top bottom",
			trigger: tirgger ? tirgger : el
		}
	})
}
