"use strict";
import { sliderInit } from "./module/sliderInit.js";
import { splitText } from "./module/splitText.js";
import { setStyle } from "./module/setStyle.js";
import { sectionHeightInit } from "./module/sectionHeightInit.js";

import {
	circleDraw,
	fadeDown,
	fadeIn,
	fadeUp,
	flipAnim,
	hideElem,
	leftToRight,
	lineShow,
	opacityIn,
	pointShow,
	rightToLeft,
	scaling,
	scalingPositive,
	showElem,
	topToBottom,
	transformTop,
} from "./module/GSAPAnim.js";
import { CalcStats } from "./module/calcScore.js";
import { random } from "./module/random.js";

document.addEventListener("DOMContentLoaded",() => {

	const initPage = () => {
		const delayElem = document.querySelectorAll("[data-delay]");
		const durationElem = document.querySelectorAll("[data-duration]");

		for (let elm of delayElem) {
			setStyle(elm,elm.dataset);
		}
		for (let elm of durationElem) {
			setStyle(elm,elm.dataset);
		}

		{
			const cardSliderOptions = {
				slidesPerView: "auto",
				spaceBetween: 10,
				grabCursor: true,
				speed: 600,
				effect: "creative",
				parallax: true,

				creativeEffect: {
					limitProgress: 2,
					prev: {
						shadow: true,
						translate: [0,0,-400],
						scale: [0],
						opacity: 0,
					},
					next: {
						translate: ["calc(100% + 0.52vw)",0,0],
					},
				},

				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			};
			const slider_1 = sliderInit(".adventure__phone");
			const slider_2 = sliderInit(".cards-slider__slider",cardSliderOptions);
			slider_2.controller.control = slider_1;
			const sliderPrety = () => {
				const arrSliders = slider_2.slides;
				const lastEl = arrSliders[arrSliders.length - 1];
				if (slider_2.activeIndex === arrSliders.length - 1) {
					lastEl.style.right = "8.80vw";
					lastEl.style.transotionDuration = "600ms";
				} else {
					lastEl.style.right = "0vw";
					lastEl.style.transotionDuration = "600ms";
				}
			};
			slider_2.on("slideChange",function () {
				sliderPrety();
			});

		}

		const text = document.querySelectorAll(".animate-letters");
		text.forEach((el) => {
			splitText(el);
		});

		const textWord = document.querySelectorAll(".animate-text");
		textWord.forEach((el) => {
			splitText(el);
		});

		const titles = document.querySelectorAll(".title-line");
		titles.forEach((el) => {
			splitText(el);
		});
		sectionHeightInit();
		// parallaxInit();

		// score
		const handle = document.querySelector(".omi-card__handle");
		const pointsAnim = document.querySelector("#unallocated-points");
		let count = 1;

		const stats = new CalcStats(12.0,10.0,23.4,2.1,2.1,56);
		stats.render();

		handle.addEventListener("click",async (e) => {
			const target = e.target;
			const btn = target.closest(".omi-card__point-btn");

			if (btn) {
				const animBlock = document.createElement("span");
				animBlock.className = "scalingBlock";
				animBlock.setAttribute("data-id",count);
				pointsAnim.append(animBlock);
				await scalingPositive(".scalingBlock");
				animBlock.remove();
				const statName = btn.getAttribute("data-stat");
				if (target.classList.contains("btn-plus")) {
					stats.statPlus(statName);
				} else if (target.classList.contains("btn-minus")) {
					stats.statMinus(statName);
				}
			}
		});

		// gsap
		gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

		if (ScrollTrigger.isTouch !== 1) {
			ScrollSmoother.create({
				smooth: 1.3,
				effects: true,
				smoothTouch: 0.3,
			});
		}

		const lineElems = document.querySelectorAll('[data-effect="line"]');
		const opacityElems = document.querySelectorAll('[data-effect="opacity"]');
		lineElems.forEach((el) => {
			lineShow(el);
		});
		opacityElems.forEach((el) => {
			opacityIn(el);
		});

		const mapPointsFindCircles = document.querySelectorAll(
			".find-map__point .map-point__circle"
		);
		const mapPointsFindText = document.querySelectorAll(
			".find-map__point .map-point__text"
		);
		mapPointsFindCircles.forEach((el) => {
			const delay = el.getAttribute("data-delay")
				? el.getAttribute("data-delay")
				: 0;
			const duration = el.getAttribute("data-duration")
				? el.getAttribute("data-duration")
				: 1.2;
			gsap.fromTo(
				el,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					delay: delay,
					duration: duration,
					ease: "power1.inOut",
					scrollTrigger: {
						trigger: ".find-map",
						start: "top center",
					},
				}
			);
		});
		mapPointsFindText.forEach((el) => {
			const delay = el.getAttribute("data-delay")
				? el.getAttribute("data-delay")
				: 0;
			const duration = el.getAttribute("data-duration")
				? el.getAttribute("data-duration")
				: 1.2;
			gsap.fromTo(
				el,
				{
					opacity: 0,
					y: "80%",
				},
				{
					y: 0,
					opacity: 1,
					delay: delay,
					duration: duration,
					ease: "power1.inOut",
					scrollTrigger: {
						trigger: ".find-map",
						start: "top center",
					},
				}
			);
		});

		const mapPointsDescover = document.querySelectorAll(
			".descover__map .map-point__circle"
		);

		mapPointsDescover.forEach((el) => {
			const delay = el.getAttribute("data-delay")
				? el.getAttribute("data-delay")
				: 0;
			const duration = el.getAttribute("data-duration")
				? el.getAttribute("data-duration")
				: 1.2;
			gsap.fromTo(
				el,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					delay: delay,
					duration: duration,
					ease: "power1.inOut",
					scrollTrigger: {
						trigger: ".descover__map",
						start: "top top",
					},
				}
			);
		});


		const heroTitle = document.querySelector("[data-effect='slide-top-absolute']");
		if (heroTitle) {
			transformTop(heroTitle);
		}
		const fadesOpecityElems = document.querySelectorAll(
			'[data-effect="fade-down"]'
		);
		const fadeInElems = document.querySelectorAll('[data-effect="fade-in"]');
		fadesOpecityElems.forEach((el) => {
			fadeDown(el);
		});
		fadeInElems.forEach((el) => {
			fadeIn(el);
		});
		const flipElems = document.querySelectorAll(".flip");
		flipElems.forEach((el) => {
			flipAnim(el);
		});


		const pinEl = document.querySelector(".description-reality__content");

		const showEl = (el,isShow) => {
			isShow ? (el.style.opacity = 1) : (el.style.opacity = 0);
		};
		const st = ScrollTrigger.create({
			trigger: ".description-reality",
			pinned: true,
			start: "top top",
			end: "bottom bottom",
			marker: true,
			onToggle: (self) => showEl(pinEl,self.isActive),
		});

		gsap.fromTo(
			".pvp__title",
			{ scale: 1.7 },
			{
				scale: 1,
				scrollTrigger: {
					trigger: ".pvp",
					start: "top center",
					end: "center+=5.21vw center",
					scrub: true,
				},
				ease: "none",
			}
		);
		Marquee3k.init()

		const marketCatalog = document.querySelector('.market-catalog')
		marketCatalog.addEventListener('mouseenter',e => {
			setTimeout(() => {
				console.log(Marquee3k);
				// marketCatalog.setAttribute('data-pausable',true)
				Marquee3k.pauseAll();
			},1000)
		})
		marketCatalog.addEventListener('mouseleave',e => {
			Marquee3k.playAll();
		})
		// hunger games

		gsap.fromTo(
			".hunger-games__title",
			{ scale: 1.7 },
			{
				scale: 1,
				scrollTrigger: {
					trigger: ".hunger-games",
					start: "top bottom",
					end: "15% center",
					scrub: true,
				},
				ease: "none",
			}
		);


		let mapPoints = gsap.utils.toArray(".hunger-games__map-point");
		mapPoints.forEach(el => {
			el.dataset.delay = random(0,1).toFixed(2)
			opacityIn(el,'.hunger-games__map')
		})

		const missionLineHorizontal = document.querySelector('.mission__line')


		var svgLine = document.querySelector('.mission__line_diagonally line');

		gsap.to(svgLine,{
			strokeDashoffset: '400%',
			duration: 1.2,
			scrollTrigger: {
				trigger: svgLine
			}
		})



		gsap.fromTo(missionLineHorizontal,
			{ width: "0px" },{
			width: '100%',
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: '.mission',
			}
		})
		// gsap.fromTo(missionLineDiagonal,
		// 	{ width: "0px" },{
		// 	width: '113%',
		// 	ease: "power1.inOut",
		// 	scrollTrigger: {
		// 		trigger: '.mission',
		// 	}
		// })
		// leftToRight(missionLineHorizontal,'.mission')
		// topToBottom(missionLineDiagonal,'.mission')

		let roadmapLines = gsap.utils.toArray(".roadmap-item__line");
		roadmapLines.forEach(el => {
			leftToRight(el)
		})
		let lines = gsap.utils.toArray(".line");
		lines.forEach(el => {
			leftToRight(el)
		})
		let securityLines = gsap.utils.toArray(".security__row-line");
		securityLines.forEach(el => {
			leftToRight(el)
		})
		let teamLines = gsap.utils.toArray(".team__row-line");
		teamLines.forEach(el => {
			leftToRight(el)
		})
		gsap.fromTo(
			".roadmap__title",
			{ scale: 1.7 },
			{
				scale: 1,
				scrollTrigger: {
					trigger: ".roadmap",
					start: "top bottom",
					end: "15% center",
					scrub: true,
				},
				ease: "none",
			}
		);

		// tabs
		{
			const tabsBtn = document.querySelectorAll('.vacancy__tabs-tab')
			const tabsBody = document.querySelectorAll('.vacancy__tabs-body')

			const removeCurrentTab = () => {
				tabsBtn.forEach(el => el.classList.remove('current'))
			}
			const removeShowBody = () => {
				tabsBody.forEach(el => el.classList.remove('show'))
			}

			tabsBtn.forEach((el,index) => {
				el.addEventListener('click',e => {
					e.preventDefault();
					if (el.closest('.current')) {
						return
					}
					removeCurrentTab()
					el.classList.add('current')
					const activeEl = document.querySelector('.vacancy__tabs-body.show')
					const newActiveEl = tabsBody[index]
					hideElem(activeEl)
					removeShowBody()
					newActiveEl.classList.add('show')
					showElem(newActiveEl)

				})
			})

			let securityLines = gsap.utils.toArray(".vacancy__header-line");
			securityLines.forEach(el => {
				rightToLeft(el)
			})
			const vacanciLine = document.querySelector('.vacancy__header-line')
			leftToRight(vacanciLine)

		}
		// tabs

		// questions 

		const quests = document.querySelectorAll(".question-item")
		quests.forEach(el => {
			el.addEventListener('click',e => {
				e.preventDefault()
				const head = e.target.closest('.question-item__header')
				if (head) {
					el.classList.toggle('open')
				}
			})
		})


		let questionLines = gsap.utils.toArray(".question-item__line");
		questionLines.forEach(el => {
			leftToRight(el)
		})
		let drawLines = gsap.utils.toArray('[data-effect="draw-line"]');
		drawLines.forEach(el => {
			leftToRight(el)
		})
		const fadeUpElems = document.querySelectorAll('[data-effect="fade-up"]');
		fadeUpElems.forEach(el => {
			fadeUp(el)
		})

		const scalingsElems = document.querySelectorAll('[data-effect="scaling"]');
		scalingsElems.forEach(el => {
			scaling(el)
		})

		const platformBtns = document.querySelector('.platform__btns');
		const scalingBtnPositive = (el) => {
			el.style.width = `120%`
			el.style.borderRadius = '15.10vw'
		}
		const scalingBtnNegative = (el) => {
			el.style.width = `80%`
		}

		const setNormalSize = el => {
			el.style.width = "100%"
		}
		const leveSizeBtns = () => {
			setNormalSize(btnApplePlay)
			setNormalSize(btnGooglePlay)
		}
		const hoverGoogleBtn = () => {
			scalingBtnPositive(btnGooglePlay)
			scalingBtnNegative(btnApplePlay)
		}
		const hoverAppleBtn = () => {
			scalingBtnPositive(btnApplePlay)
			scalingBtnNegative(btnGooglePlay)
		}


		const btnGooglePlay = document.querySelector('.platform__btn_google')
		const btnApplePlay = document.querySelector('.platform__btn_apple')
		btnApplePlay.addEventListener('mouseenter',hoverAppleBtn)
		btnGooglePlay.addEventListener('mouseenter',hoverGoogleBtn)
		btnApplePlay.addEventListener('mouseleave',leveSizeBtns)
		btnGooglePlay.addEventListener('mouseleave',leveSizeBtns)

		const circles = document.querySelectorAll('.svg-circle circle')
		const circleTrigger = document.querySelector('.token')
		circles.forEach(el => {
			circleDraw(el,circleTrigger)
		})

	};
	initPage();
})

