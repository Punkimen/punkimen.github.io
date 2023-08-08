"use strict";
import {sliderInit} from "./module/sliderInit.min.js";
import {splitText} from "./module/splitText.min.js";
import {setHeader} from "./module/setHeader.min.js";
import {sectionHeightInit} from "./module/sectionHeightInit.min.js";
// import {sectionAnimation} from "./module/sectionAnimate.min.js";
import {
    drawSvgLine,
    leftToRight,
    horizontalTransform,
    triggerAnimate, readText,
    scalingFoo,
    svgDraw, verticalTransform
} from "./module/GSAPAnim.js";
import {cardsAdaptive, journeyCardsAdaptive} from "./module/adaptiveResize.min.js";

// const
let windowWidth = window.innerWidth

// ------- First and massive elems
const firstTextLine = document.querySelectorAll('.text-line.first-load')
const firstOpacityElems = document.querySelectorAll('[data-effect="opacity"].first-load');
const firstFadeOpacityElems = document.querySelectorAll('[data-effect="fade-down"].first-load');
// ------- First and massive elems
const heroWrapper = document.querySelector('.hero')
const textLine = document.querySelectorAll('.text-line:not(.first-load)')
const opacityElems = document.querySelectorAll('[data-effect="opacity"]:not(.first-load)');
const fadeOpacityElems = document.querySelectorAll('[data-effect="fade-down"]:not(.first-load)');
const readedText = document.querySelectorAll('.readed-text')
const maskSvg = document.querySelector('.mask')
const markers = document.querySelectorAll('.each-point__mark')
const cardsAura = document.querySelector('.card_1 .card__front-aura')
const cardsNft = document.querySelector('.card_3 .card__front-img')
const cardsPhone = document.querySelector('.card_2 .card__front-img')
const cardsMap = document.querySelector('.card__front-img_bg')
const OMICircles = document.querySelector('.omies__circles')
const OMICircle1 = document.querySelector('.omies__circle_1')
const OMICircle3 = document.querySelector('.omies__circle_3')
const pinEl = document.querySelector(".description-reality__content");
const btnGooglePlay = document.querySelector('.platform__btn_google')
const btnApplePlay = document.querySelector('.platform__btn_apple')
const missionLineHorizontal = document.querySelector('.mission__line')
const svgLine = document.querySelector('.mission__line_diagonally line');
const phoneScreens = document.querySelector('.reality__screens')
const phone_1 = document.querySelector('.reality__screen_1')
const phone_3 = document.querySelector('.reality__screen_3')
const quests = document.querySelectorAll(".question-item")
const lines = document.querySelectorAll(".line");
const journeyCardPhone = document.querySelector('.journey-card__phone')
const journeyCardOmi = document.querySelector('.journey-card_2 .journey-card__omi')
const journeyCardMap = document.querySelector('.journey-card_4 .card__front-img_bg')
const securityBlock = document.querySelector('.security');
const pvpPose1 = document.querySelector('.pvp-pose_1')
const pvpPose2 = document.querySelector('.pvp-pose_2')
const heroPose = document.querySelector('.hero__pose')
const video1 = document.querySelector('#video_phone')

gsap.registerPlugin(ScrollTrigger);
firstTextLine.forEach(el => {
    triggerAnimate(el, el.parentElement)
})
firstOpacityElems.forEach((el) => {
    triggerAnimate(el);
});

firstFadeOpacityElems.forEach((el) => {
    triggerAnimate(el);
});

const showEl = (el, isShow) => {
    if (isShow) {
        el.classList.add('show');
        el.classList.remove('hide');
    } else {
        el.classList.add('hide');
        el.classList.remove('show')
    }
};
const sliderPrety = (slider) => {
    let rightProp = '7vw'
    if (windowWidth > 992) {
        rightProp = '8.8vw'
    } else if (windowWidth < 768) {
        rightProp = 0
    }
    const arrSliders = slider.slides;
    const lastEl = arrSliders[arrSliders.length - 1];
    if (slider.activeIndex === arrSliders.length - 1) {
        lastEl.style.right = rightProp;
        lastEl.style.transotionDuration = "600ms";
    } else {
        lastEl.style.right = "0vw";
        lastEl.style.transotionDuration = "600ms";
    }
};
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

const initPage = () => {
    // functions
    //  console.log(securityBlock.getBoundingClientRect().height)
    const st = ScrollTrigger.create({
        trigger: ".description-reality",
        pinned: true,
        start: "top top",
        end: "bottom bottom",
        onToggle: (self) => showEl(pinEl, self.isActive),
    });
    // gsap.set(securityBlock, {yPercent:  -100})
    gsap.to(securityBlock, {
        // yPercent: -100,
        ease: 'SineInOut',
        // stagger: 0.5,
        scrollTrigger: {
            trigger: '.tokenomics__inner',
            start: "center+=25% center",
            end: `+=100%`,
            scrub: true,
            pin: true
        }
    });
    verticalTransform(cardsPhone, cardsPhone, '-5%', '5%', true)
    verticalTransform(cardsMap, cardsMap, '-5%', '5%', true)
    verticalTransform(journeyCardPhone, journeyCardPhone, '5%', '-10%', true)
    verticalTransform(journeyCardOmi, journeyCardOmi, '-5%', '5%', true)
    verticalTransform(journeyCardMap, journeyCardMap, '-5%', '5%', true)
    // verticalTransform(heroPose, heroPose, '0%', '10%', true)
    verticalTransform(pvpPose1, pvpPose1, '5%', '-5%', true)
    verticalTransform(pvpPose2, pvpPose2, '-5%', '5%', true)
    horizontalTransform(OMICircle1, OMICircles, '100%', '33%')
    horizontalTransform(OMICircle3, OMICircles, '-100%', '-43%')
    horizontalTransform(cardsNft, cardsNft, "-3%", "3%")
    horizontalTransform(phone_1, phoneScreens, '17.5vw', '0', true, null, 'top bottom', 'top+=25% center')
    horizontalTransform(phone_3, phoneScreens, '-17.5vw', "0", true, null, 'top bottom', 'top+=25% center')
    scalingFoo(cardsAura, cardsAura, 1, 1.4, "top bottom+=25%", "center top", true)
    windowWidth > 568 && scalingFoo(".pvp__title", ".pvp__descr", 1.7, 1, "top-=25% bottom", "50% center", true)
    leftToRight(missionLineHorizontal, svgLine)
    svgDraw(svgLine, svgLine, null, '400%')
    maskSvg && drawSvgLine(maskSvg, '.each-point__route', markers)

    // // sliders
    {
        let numSize = "0.52vw"
        const initNum = () => {
            if (windowWidth <= 568) {
                numSize = "11.52vw"
            } else {
                numSize = "0.52vw"
            }
        }
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

        slider_2.on("slideChange", function () {
            const phoneHand = document.querySelector('.adventure__phone-hand');
            sliderPrety(slider_2);
            if (slider_2.slides.length - 1 === slider_2.activeIndex) {
                phoneHand.classList.add('show')
            } else {
                phoneHand.classList.remove('show')
            }
        });
        window.addEventListener('resize', () => {
            initNum()
        })
    }
    textLine.forEach(el => {
        triggerAnimate(el, el.parentElement)
    })
    readedText.forEach(el => {
        splitText(el)
        const words = el.querySelectorAll('.word')
        readText(words, el)
    })
    opacityElems.forEach((el) => {
        triggerAnimate(el);
    });
    fadeOpacityElems.forEach((el) => {
        triggerAnimate(el);
    });
    lines.forEach(el => {
        leftToRight(el)
    })
    // // questions
    quests.forEach(el => {
        el.addEventListener('click', e => {
            e.preventDefault()
            const head = e.target.closest('.question-item__header')
            if (head) {
                el.classList.toggle('open')
            }
        })
    })

    Marquee3k && Marquee3k.init()
    if (windowWidth > 768) {
        btnApplePlay.addEventListener('mouseenter', hoverAppleBtn)
        btnGooglePlay.addEventListener('mouseenter', hoverGoogleBtn)
        btnApplePlay.addEventListener('mouseleave', leveSizeBtns)
        btnGooglePlay.addEventListener('mouseleave', leveSizeBtns)
    }

    // //init functions
    video1 && video1?.currentTime > 0 && video1?.play()
    sectionHeightInit();
    // cardsAdaptive();
    // journeyCardsAdaptive();
};

document.addEventListener("DOMContentLoaded", () => {
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

        wavesWidth: '100%',

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
            let gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
            gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
            gradient.addColorStop(0.5, "rgba(255, 255, 255, 0.5)");
            gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

            let index = -1;
            let length = this.waves.length;
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
        waves.update();
        windowWidth = window.innerWidth
        // cardsAdaptive();
        // journeyCardsAdaptive();
    })
})
let lastScrollTop = 0;
window.addEventListener(
    "scroll",
    function () {
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop && lastScrollTop > window.innerHeight) {
            // downscroll code
            setHeader(true);
        } else if (st === 0) {
            // upscroll code
            setHeader(false);
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

    },
    false
);


/*
gsap.to('.hero', {
  // yPercent: -100,
  ease: "ease.in",
  // stagger: 0.5,
  scrollTrigger: {
    trigger: '.hero',
    start: "bottom center",
    end: `+=200%`,
    scrub: true,
    pin: true
  }
});*/
