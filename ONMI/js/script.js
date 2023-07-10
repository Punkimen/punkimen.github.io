"use strict";
import {sliderInit} from "./module/sliderInit.min.js";
import {splitText} from "./module/splitText.min.js";
import {setStyle} from "./module/setStyle.min.js";
import {sectionHeightInit} from "./module/sectionHeightInit.min.js";
import {
    animTextLine, drawSvgLine,
    fadeDown,
    fadeIn,
    fadeUp,
    hideElem, horizontalTransform,
    leftToRight,
    lineShow,
    opacityIn, readText,
    rightToLeft,
    scalingFoo,
    showElem, svgDraw,
} from "./module/GSAPAnim.min.js";
import {circlesAdaptive, stepAdaptive} from "./module/adaptiveResize.min.js";
import {getPopulation} from "./module/getPopulation.min.js";

document.addEventListener("DOMContentLoaded", () => {
    const initPage = () => {
        // const
        const populationText = document.querySelector('#population')
        const video1 = document.querySelector('#video_phone')
        const video2 = document.querySelector('#video_trap')
        const textLine = document.querySelectorAll('.text-line')
        const readedText = document.querySelectorAll('.readed-text')
        const pointsContainer = document.querySelector('.each-point')
        const maskSvg = document.querySelector('.mask')
        const markers = document.querySelectorAll('.each-point__mark')
        const lineElems = document.querySelectorAll('[data-effect="line"]');
        const opacityElems = document.querySelectorAll('[data-effect="opacity"]');
        const cardsAura = document.querySelector('.card_1 .card__front-aura')
        const cardsNft = document.querySelector('.card_3 .card__front-img')
        const OMICircles = document.querySelector('.omies__circles')
        const OMICircle1 = document.querySelector('.omies__circle_1')
        const OMICircle3 = document.querySelector('.omies__circle_3')
        const fadeOpacityElems = document.querySelectorAll('[data-effect="fade-down"]');
        const fadeInElems = document.querySelectorAll('[data-effect="fade-in"]');
        const pinEl = document.querySelector(".description-reality__content");
        const btnGooglePlay = document.querySelector('.platform__btn_google')
        const btnApplePlay = document.querySelector('.platform__btn_apple')
        const missionLineHorizontal = document.querySelector('.mission__line')
        const svgLine = document.querySelector('.mission__line_diagonally line');
        const phoneScreens = document.querySelector('.reality__screens')
        const phone_1 = document.querySelector('.reality__screen_1')
        const phone_3 = document.querySelector('.reality__screen_3')
        const quests = document.querySelectorAll(".question-item")
        const fadeUpElems = document.querySelectorAll('[data-effect="fade-up"]');
        const lines = document.querySelectorAll(".line");
        const video = document.querySelector("#video-scroll");

        //gsap init
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        if (ScrollTrigger.isTouch !== 1) {
            ScrollSmoother.create({
                smooth: 1.3,
                effects: true,
                smoothTouch: 0.3,
            });
        }

        const videoPlay = ScrollTrigger.create({
            trigger: video,
            // pinned: true,
            start: "top bottom",
            end: "bottom top",
            onToggle: (self) => {
                video.currentTime = 0
                self.isActive ? video.play() : video.pause();
            },
        });

        // functions
        const asyncInit = async () => {
            const population = JSON.parse(await getPopulation())
            populationText.textContent = population.readable_format || '8,323,444,222'
        }
        const showEl = (el, isShow) => {
            if (isShow) {
                el.classList.add('show');
                el.classList.remove('hide');
            } else {
                el.classList.add('hide');
                el.classList.remove('show')
            }
        };
        const st = ScrollTrigger.create({
            trigger: ".description-reality",
            pinned: true,
            start: "top top",
            end: "bottom bottom",
            onToggle: (self) => showEl(pinEl, self.isActive),
        });
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


        // sliders
        {
            let numSize = "0.52vw"
            const initNum = () => {
                const windowWidth = window.innerWidth
                if (windowWidth <= 568) {
                    numSize = "11.52vw"
                } else {
                    numSize = "0.52vw"
                }
            }
            window.addEventListener('resize', () => {
                initNum()
            })
            initNum()

            const cardSliderOptions = {
                slidesPerView: "auto",
                spaceBetween: 20,
                grabCursor: true,
                speed: 600,
                effect: "creative",
                parallax: true,

                creativeEffect: {
                    limitProgress: 2,
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                        scale: [0],
                        opacity: 0,
                    },
                    next: {
                        translate: [`calc(100% + ${numSize})`, 0, 0],
                    },
                },
                breakpoints: {
                    568: {
                        slidesPerView: "auto",
                        spaceBetween: 10
                    }
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            };
            const slider_1 = sliderInit(".adventure__phone");
            const slider_2 = sliderInit(".cards-slider__slider", cardSliderOptions);


            slider_2.controller.control = slider_1;
            const sliderPrety = () => {
                const windowWidth = window.innerWidth
                let rightProp = '7vw'
                if (windowWidth > 992) {
                    rightProp = '8.8vw'
                } else if (windowWidth < 768) {
                    rightProp = 0
                }
                const arrSliders = slider_2.slides;
                const lastEl = arrSliders[arrSliders.length - 1];
                if (slider_2.activeIndex === arrSliders.length - 1) {
                    lastEl.style.right = rightProp;
                    lastEl.style.transotionDuration = "600ms";
                } else {
                    lastEl.style.right = "0vw";
                    lastEl.style.transotionDuration = "600ms";
                }
            };
            slider_2.on("slideChange", function () {
                const phoneHand = document.querySelector('.adventure__phone-hand');
                sliderPrety();
                if (slider_2.slides.length - 1 === slider_2.activeIndex) {
                    phoneHand.classList.add('show')
                } else {
                    phoneHand.classList.remove('show')
                }
            });

        }


        textLine.forEach(el => {
            setStyle(el, el.dataset)
            animTextLine(el, el.parentElement)
        })
        readedText.forEach(el => {
            splitText(el)
            const words = el.querySelectorAll('.word')
            readText(words, el)
        })
        drawSvgLine(maskSvg, pointsContainer, markers)
        horizontalTransform(OMICircle1, OMICircles, '100%', '33%')
        horizontalTransform(OMICircle3, OMICircles, '-100%', '-43%')
        scalingFoo(cardsAura, cardsAura, 1, 1.4, "top bottom+=25%", "center top", true)
        horizontalTransform(cardsNft, cardsNft, "-3%", "3%")
        lineElems.forEach((el) => {
            lineShow(el);
        });
        opacityElems.forEach((el) => {
            opacityIn(el);
        });

        fadeOpacityElems.forEach((el) => {
            fadeDown(el);
        });
        fadeInElems.forEach((el) => {
            fadeIn(el);
        });

        svgDraw(svgLine, svgLine, '400%')
        leftToRight(missionLineHorizontal, '.mission')

        horizontalTransform(phone_1, phoneScreens, '17.5vw', "0", false)
        opacityIn(phone_1, phoneScreens, "center bottom")
        horizontalTransform(phone_3, phoneScreens, '-17.5vw', "0", false)
        opacityIn(phone_3, phoneScreens, "center bottom")

        lines.forEach(el => {
            leftToRight(el)
        })
        scalingFoo(".roadmap__title", ".roadmap", 1.7, 1, "top bottom", "15% center", true)


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

            tabsBtn.forEach((el, index) => {
                el.addEventListener('click', e => {
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

        quests.forEach(el => {
            el.addEventListener('click', e => {
                e.preventDefault()
                const head = e.target.closest('.question-item__header')
                if (head) {
                    el.classList.toggle('open')
                }
            })
        })


        fadeUpElems.forEach(el => {
            fadeUp(el)
        })


        btnApplePlay.addEventListener('mouseenter', hoverAppleBtn)
        btnGooglePlay.addEventListener('mouseenter', hoverGoogleBtn)
        btnApplePlay.addEventListener('mouseleave', leveSizeBtns)
        btnGooglePlay.addEventListener('mouseleave', leveSizeBtns)

        //init functions
        asyncInit()
        video1?.play()
        video2?.play()
        Marquee3k.init()
        stepAdaptive()
        circlesAdaptive()
        sectionHeightInit();
    };
    initPage();

    const waves = new SineWaves({
        // Canvas Element
        el: document.getElementById('waves'),

        speed: 5,

        width: function () {
            return window.innerWidth;
        },

        height: function () {
            return window.innerHeight;
        },

        wavesWidth: '95%',

        ease: 'SineInOut',

        waves: [
            {
                timeModifier: 1,
                lineWidth: 3,
                amplitude: 150,
                wavelength: 200,
                segmentLength: 20,
                //       strokeStyle: 'rgba(255, 255, 255, 0.5)'
            },
            {
                timeModifier: 1,
                lineWidth: 2,
                amplitude: 150,
                wavelength: 100,
                //       strokeStyle: 'rgba(255, 255, 255, 0.3)'
            },
            {
                timeModifier: 1,
                lineWidth: 1,
                amplitude: -150,
                wavelength: 50,
                segmentLength: 10,
                //       strokeStyle: 'rgba(255, 255, 255, 0.2)'
            },
            {
                timeModifier: 1,
                lineWidth: 0.5,
                amplitude: -100,
                wavelength: 100,
                segmentLength: 10,
                //       strokeStyle: 'rgba(255, 255, 255, 0.1)'
            }
        ],

        initialize: function () {

        },

        resizeEvent: function () {
            var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
            gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
            gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.5)");
            gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

            var index = -1;
            var length = this.waves.length;
            while (++index < length) {
                this.waves[index].strokeStyle = gradient;
            }

            // Clean Up
            index = void 0;
            length = void 0;
            gradient = void 0;
        }
    });
    window.addEventListener('resize', () => {
        stepAdaptive()
        circlesAdaptive()
        waves.update();
    })
})

