import {showMarker} from "./showMarkers.js";

export const lineShow = el => {
    const delay = el.getAttribute('data-delay') || 0
    const duration = el.getAttribute('data-duration') || 1
    gsap.fromTo(el, {
        y: '110%'
    }, {
        y: '0',
        delay: delay,
        duration: duration,
        ease: "circ.inOut",
        scrollTrigger: {
            trigger: el.parentElement,
            start: 'top-=10% bottom+=10%'
        }
    })
}
export const opacityIn = (el, trigger, start) => {
    const delay = el.getAttribute('data-delay') || 0
    const duration = el.getAttribute('data-duration') || 0.8
    gsap.fromTo(el, {
        opacity: 0,
    }, {
        opacity: 1,
        delay: delay,
        duration: duration,
        ease: 'circ.out',
        scrollTrigger: {
            trigger: trigger || el,
            start: start || 'top bottom'
        }
    })
}
export const fadeDown = (el, trigger, yStart, start) => {
    const delay = el.getAttribute('data-delay') || 0
    const duration = el.getAttribute('data-duration') || 0.8
    gsap.fromTo(el, {
        y: yStart || "50",
    }, {
        y: 0,
        delay: delay,
        duration: duration,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: trigger || el,
            start: start || 'top-=10% bottom-=10%'
        }
    })
    gsap.fromTo(el, {
        opacity: 0,
    }, {
        opacity: 1,
        delay: +delay + +duration / 3,
        duration: duration - duration / 3,
        // delay: +delay + +duration / 1.6,
        // duration: duration,
        ease: "power4.in",
        scrollTrigger: {
            trigger: el.parentElement && el,
            start: start || 'top+=10% bottom+=10%',
        },
    })
}
export const fadeIn = el => {
    const delay = el.getAttribute('data-delay') || 0
    const duration = el.getAttribute('data-duration') || 0.8
    gsap.fromTo(el, {
        opacity: 0,
    }, {
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
export const leftToRight = (el, trigger) => {
    if (el) {
        gsap.fromTo(el, {
            width: 0,
        }, {
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
export const rightToLeft = (el, trigger) => {
    const delay = el.getAttribute('data-delay') || 0
    const duration = el.getAttribute('data-duration') || 0.8

    gsap.fromTo(el, {
        opacity: 0,
        x: '100%',
    }, {
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
    gsap.fromTo(el, {
        // y: -200,
        // x: 200,
        opacity: 0,
    }, {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1,
    })
}
export const hideElem = el => {
    gsap.fromTo(el, {
        y: 0,
        x: 0,
        opacity: 1,
    }, {
        opacity: 0,
        duration: 1,
    })
}
export const fadeUp = el => {
    const delay = el.getAttribute('data-delay') || 0
    const duration = el.getAttribute('data-duration') || 2
    gsap.fromTo(el, {
        opacity: 0,
        skewY: 3,
        y: "-30%"
    }, {
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
export const svgDraw = (el, tirgger, dashOffset) => {
    const delay = el.getAttribute('data-delay') || 0
    const duration = el.getAttribute('data-duration') || 1.2

    gsap.to(el, {
        strokeDashoffset: dashOffset || 0,
        delay: delay,
        duration: duration,
        ease: "power1.inOut",
        scrollTrigger: {
            start: "top bottom",
            trigger: tirgger ? tirgger : el
        }
    })
}
export const animTextLine = (el, trigger) => {
    gsap.fromTo(el, {
        opacity: 0,
        y: "100%",
        rotate: '0.001deg'
    }, {
        opacity: 1,
        y: 0,
        rotate: 0,
        // delay: delay,
        // duration: duration,
        scrollTrigger: {
            trigger: trigger || el,
            start: 'top bottom+=20%'
        }
    })
}
export const horizontalTransform = (el, trigger, startVal, endValue, scrub = true) => {
    const delay = el.getAttribute('data-delay') || 0
    const duration = el.getAttribute('data-duration') || 1.2
    gsap.fromTo(el, {
        x: startVal || 0,
    }, {
        x: endValue || '100%',
        ease: 'circ.out',
        delay: delay,
        duration: duration,
        scrollTrigger: {
            trigger: trigger || el,
            start: "center bottom",
            end: "top top",
            scrub: scrub
        }
    })
}
export const readText = (el, trigger) => {
    gsap.to(el, {
        duration: 2,
        ease: 'none',
        opacity: 1,
        stagger: 0.5,
        scrollTrigger: {
            trigger: trigger || el,
            start: 'top bottom-=20%',
            end: 'bottom center+=25%',
            scrub: true,
        }
    })
}
export const drawSvgLine = (el, trigger, markers) => {
    gsap.fromTo(el, {
        strokeDashoffset: '200vw',
    }, {
        strokeDashoffset: 0,
        scrollTrigger: {
            trigger: trigger || el,
            start: 'top bottom',
            end: '170%',
            scrub: true,
            onUpdate: ((self) => {
                const progress = self.progress.toFixed(2)
                showMarker(progress, markers)
            })
        }
    })
}
export const scalingFoo = (el, trigger, startScale = 1, endScale = 1.4,
                           start = 'top bottom', end = 'bottom top', scrub = false) => {
    gsap.fromTo(el, {
        scale: startScale
    }, {
        scale: endScale,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
            trigger: trigger || el,
            start: start,
            end: end,
            scrub: scrub,
        }
    })
}
