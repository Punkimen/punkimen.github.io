"use strict";
import {sliderInit} from "./module/sliderInit.js";
import {splitText} from "./module/splitText.js";
import {setStyle} from "./module/setStyle.js";
import {sectionHeightInit} from "./module/sectionHeightInit.js";
import {
    animTextLine,
    fadeDown,
    fadeIn,
    fadeUp,
    flipAnim,
    hideElem, horizontalTransform,
    leftToRight,
    lineShow,
    opacityIn,
    rightToLeft,
    scaling,
    showElem,
    transformTop,
} from "./module/GSAPAnim.js";
import {random} from "./module/random.js";
import {circlesAdaptive, stepAdaptive} from "./module/adaptiveResize.js";
import {getPopulation} from "./module/getPopulation.js";

document.addEventListener("DOMContentLoaded", () => {


    const initPage = () => {

        (async function () {
            const populationText = document.querySelector('#population')
            const population = JSON.parse(await getPopulation())
            populationText.textContent = population.readable_format || '8,323,444,222'

            const video1 = document.querySelector('#video_phone')
            const video2 = document.querySelector('#video_trap')
            await video1?.play()
            await video2?.play()
        })();

        const readedText = document.querySelectorAll('.readed-text')
        readedText.forEach(el => {
            splitText(el)
            const words = el.querySelectorAll('.word')
            gsap.to(words, {
                duration: 2,
                ease: 'none',
                opacity: 1,
                stagger: 0.5,
                scrollTrigger: {
                    trigger: el,
                    start: 'top bottom-=10%',
                    end: 'bottom center+=25%',
                    scrub: true,
                }
            })
        })


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

        const textLine = document.querySelectorAll('.text-line')
        textLine.forEach(el => {
            setStyle(el, el.dataset)
            animTextLine(el, el.parentElement)
        })

        sectionHeightInit();
        // parallaxInit();
        // gsap
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        const pointsContainer = document.querySelector('.each-point')
        const maskSvg = document.querySelector('.mask')
        const markers = document.querySelectorAll('.each-point__mark')

        const showMarker = (progress) => {
            if (progress > 0 && progress < 1) {
                if (progress >= 0) {
                    markers[0].classList.add('show')
                    markers[2].classList.add('show')
                    markers[3].classList.add('show')
                } else {
                    markers[0].classList.remove('show')
                    markers[2].classList.remove('show')
                    markers[3].classList.remove('show')
                }
                if (progress >= 0.25) {
                    markers[3].classList.add('show')
                } else {
                    markers[3].classList.remove('show')
                }
                if (progress >= 0.30) {
                    markers[4].classList.add('show')
                } else {
                    markers[4].classList.remove('show')
                }
                if (progress >= 0.35) {
                    markers[5].classList.add('show')
                } else {
                    markers[5].classList.remove('show')
                }
                if (progress >= 0.44) {
                    markers[6].classList.add('show')
                } else {
                    markers[6].classList.remove('show')
                }
                if (progress >= 0.50) {
                    markers[7].classList.add('show')
                } else {
                    markers[7].classList.remove('show')
                }
                if (progress >= 0.63) {
                    markers[8].classList.add('show')
                } else {
                    markers[8].classList.remove('show')
                }
            }
        }

        gsap.fromTo(maskSvg, {
            strokeDashoffset: '200vw',
        }, {
            strokeDashoffset: 0,
            scrollTrigger: {
                trigger: maskSvg,
                start: 'top bottom',
                end: '170%',
                scrub: true,
                onUpdate: ((self) => {
                    const progress = self.progress.toFixed(2)
                    showMarker(progress)
                })
            }
        })


        if (ScrollTrigger.isTouch !== 1) {
            ScrollSmoother.create({
                smooth: 1.3,
                effects: true,
                smoothTouch: 0.3,
            });
        }

        const lineElems = document.querySelectorAll('[data-effect="line"]');
        const opacityElems = document.querySelectorAll('[data-effect="opacity"]');

        //cards animations
        const cardsAura = document.querySelector('.card_1 .card__front-aura')
        const cardsNft = document.querySelector('.card_3 .card__front-img')
        const OMICircles = document.querySelector('.omies__circles')
        const OMICircle1 = document.querySelector('.omies__circle_1')
        const OMICircle3 = document.querySelector('.omies__circle_3')
        horizontalTransform(OMICircle1, OMICircles, '33%')
        horizontalTransform(OMICircle3, OMICircles, '-43%')


        gsap.fromTo(cardsAura, {
            scale: 1
        }, {
            scale: 1.4,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: cardsAura,
                start: "top bottom+=25%",
                end: "center top",
                scrub: true,
            }
        })
        gsap.fromTo(cardsNft, {
            x: '-3%'
        }, {
            x: '3%',
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: cardsNft,
                start: "top bottom+=10%",
                end: "top top-=25%",
                scrub: true,
            }
        })
        /*        gsap.fromTo(cardsPhone, {
                    y: -100,
                }, {
                    y: 0,
                    duration: 1,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: cardsPhone,
                        start: "center bottom",
                        end: "center top",
                        scrub: true,
                    }
                })*/


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

        /* gsap.fromTo(
             ".pvp__title",
             {scale: 1.7},
             {
                 scale: 1,
                 scrollTrigger: {
                     trigger: ".pvp",
                     start: "top bottom",
                     end: "center-=35% center",
                     scrub: true,
                 },
                 ease: "none",
             }
         );*/
        Marquee3k.init()

        let mapPoints = gsap.utils.toArray(".hunger-games__map-point");
        mapPoints.forEach(el => {
            el.dataset.delay = random(0, 1).toFixed(2)
            opacityIn(el, '.hunger-games__map')
        })

        const missionLineHorizontal = document.querySelector('.mission__line')


        var svgLine = document.querySelector('.mission__line_diagonally line');

        gsap.to(svgLine, {
            strokeDashoffset: '400%',
            duration: 1.2,
            scrollTrigger: {
                trigger: svgLine
            }
        })


        gsap.fromTo(missionLineHorizontal,
            {width: "0px"}, {
                width: '100%',
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: '.mission',
                }
            })
        const phoneScreens = document.querySelector('.reality__screens')
        const phone_1 = document.querySelector('.reality__screen_1')
        const phone_3 = document.querySelector('.reality__screen_3')
        gsap.fromTo(phone_1, {
            x: '17.5vw',
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            duration: 2,
            ease: 'circ.out',
            scrollTrigger: {
                trigger: phoneScreens,
                start: "center bottom",
            }
        })
        gsap.fromTo(phone_3, {
            x: '-17.5vw',
            opacity: 0
        }, {
            x: 0,
            duration: 2,
            opacity: 1,
            ease: 'circ.out',
            scrollTrigger: {
                trigger: phoneScreens,
                start: "center bottom",
            }
        })

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
            {scale: 1.7},
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

        /*       const videoContainer = document.querySelector('.find-map');
               const video = document.querySelector("#video-scroll");
               const scrollPlay = (vid, time) => {
                   vid.currentTime = +time.toFixed(2)
               }
               const videoPlay = ScrollTrigger.create({
                   trigger: video,
                   pinned: true,
                   start: "top bottom",
                   end: "center top",
                   /!*      onToggle: (self) => {
                             console.log(self)
                             self.isActive ? video.play() : video.pause();
                         },*!/
                   onUpdate: (self) => {
                       // console.log(self)
                       // console.log(video.duration * self.progress)
                       setInterval(scrollPlay(video, video.duration * self.progress), 10)
                       /!*   window.requestAnimationFrame(() => {
                              scrollPlay(video, video.duration * self.progress)
                          });*!/
                       // video.play()
                       // video.currentTime = video.duration * self.progress
                   },

               });*/


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

        const quests = document.querySelectorAll(".question-item")
        quests.forEach(el => {
            el.addEventListener('click', e => {
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
        btnApplePlay.addEventListener('mouseenter', hoverAppleBtn)
        btnGooglePlay.addEventListener('mouseenter', hoverGoogleBtn)
        btnApplePlay.addEventListener('mouseleave', leveSizeBtns)
        btnGooglePlay.addEventListener('mouseleave', leveSizeBtns)

        // adaptiveInit
        stepAdaptive()
        circlesAdaptive()
    };
    initPage();
    let lastScrollTop = 0;

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

