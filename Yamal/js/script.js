"use strict";
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},_=function(){w=(0,h.default)(),O()},S=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},z=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},A=function(e){return j=i(j,e),w=(0,h.default)(),z(j.disable)||x?S():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},j.throttleDelay)),j.disableMutationObserver||(0,d.default)("[data-aos]",_),w)};e.exports={init:A,refresh:O,refreshHard:_}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),_?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,z&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(_=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),_?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,z&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(_=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){var n=new r(o);a=t,n.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),o=t.concat(n).filter(function(e){return e.hasAttribute&&e.hasAttribute("data-aos")}).length;o&&a()})}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=function(){};t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});;
$(document).ready(function () {
    // slide-menu
    (function () {
        const searchInputElem = $('.location-menu__search-inp');
        $('.header__burger-menu').on('click', () => {
            $('.header-menu').slideToggle();
        });
        $('.header__location').on('click', () => {
            $('.location-menu--main').slideToggle();
        });
        $('.fixed-menu__header-location').on('click', () => {
            $('.location-menu--fixed').slideToggle();
        });
        $('.js-show-cities').on('click', () => {
            $('.location-menu__lists').slideToggle();
        });
        $('.js-hide-location').on('click', () => {
            $('.location-menu__lists').hide();
            $('.location-menu').hide();
        });
        $('.location-menu__category-btn').on('click', function () {
            searchInputElem.val($(this).text())
        });
        $('.select-language').on('click', () => {
            if ($('.current-lang').text() === 'ENG') {
                $('.current-lang').text('RU')
            } else {
                $('.current-lang').text('ENG')
            }
        })
        const setElementForMobile = () => {
            const windowWidth = $(window).width();
            if (windowWidth <= 767) {
                $('.header__center').append($('.header__logo'));
                $('.header__right').append($('.header__burger-menu'));
            } else {
                $('.header__center').append($('.header__burger-menu'));
                $('.header__left').prepend($('.header__logo'));
            }
        }
        setElementForMobile()
        $(window).resize(() => {
            setElementForMobile();
        })
    })();
    // sliders
    (function () {
        const weatherSlider = new Swiper('.northern-lights__slider', {
            slidesPerView: 1,
        })
        const swiperCalendar = new Swiper('.playbill-events__calendar-slider', {
            slidesPerView: "auto",
            freeMode: true,
        })
        const swiperEvent = new Swiper('.playbill-events__slider--event', {
            slidesPerView: "auto",
            spaceBetween: 20,
        })
        const swiperBanners = new Swiper('.playbill-events__slider--banner', {
            slidesPerView: "auto",
            loop: true,
            spaceBetween: 20,
            speed: 1000,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                568: {
                    spaceBetween: 20,
                    pagination: false,
                }
            }
        });
        const swiperGoods = new Swiper('.goods-wrapper', {
            slidesPerView: "auto",
            spaceBetween: 20,
            breakpoints: {
                568: {
                    slidesPerView: 4,
                }
            }
        })

        const swiperGallery = new Swiper('.gallery__slider', {
            slidesPerView: "auto",
            spaceBetween: 20,
            createElements: true,
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            breakpoints: {
                767: {
                    slidesPerView: 4,
                }
            }
        })
        $('.calendar-arrow__next').on('click', () => {
            swiperCalendar.slideNext();
        })
        $('.event-arrow__next').on('click', () => {
            swiperEvent.slideNext();
        })
        $('.banner-arrow__next').on('click', () => {
            swiperBanners.slideNext();
        })
        $('.banner-arrow__prev').on('click', () => {
            swiperBanners.slidePrev();
        })
        $('.goods-arrow__next').on('click', () => {
            swiperGoods.slideNext();
        })
        $('.gallery-arrow__next').on('click', () => {
            swiperGallery.slideNext();
        })
        $('.gallery-arrow__prev').on('click', () => {
            swiperGallery.slidePrev();
        })
        $('.northern-lights-arrow__prev').on('click', () => {
            weatherSlider.slidePrev();
        })
        $('.northern-lights-arrow__next').on('click', () => {
            weatherSlider.slideNext();
        })
    })();
    // adaptive hide
    (function () {
        const adaptivePosBlock = () => {
            const windowWidth = $(window).width();
            const parentWidth = $('.quiz-individual').width();
            const childWidth = $('.quiz-individual__wrapper').width();
            let posBlock = (childWidth - parentWidth) / 3;
            if (posBlock > 0 && windowWidth > 568) {
                $('.quiz-individual__wrapper').css({
                    "right": `${posBlock}px`
                })
            }
        }
        adaptivePosBlock();
        $(window).resize(() => {
            adaptivePosBlock();
        })
    })();
    // playbill
    (function () {
        $('.playbill-category').on('click', function () {
            $(this).addClass('current').siblings().removeClass('current')
        })
    })();
    // fixed-menu
    (function () {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() >= $(this).height()) {
                $('.fixed-menu').addClass('show-leftMenu')
            } else {
                $('.fixed-menu').removeClass('show-leftMenu')
            }
        })
        $('.fixed-menu').on('mouseenter', function () {
            $(this).addClass('show')
        });
        $('.fixed-menu').on('mouseleave', function () {
            $(this).removeClass('show')
        });
        $('.fixed-menu__close').on('click', () => {
            $('.fixed-menu').removeClass('show');
            $('.fixed-menu__menu-block').removeClass('active');
        })
        $('.js-show-menu').on('click', (e) => {
            $('.js-show-menu').toggleClass('current')
            $('.fixed-menu').toggleClass('menu-isOpen')
            $('.fixed-menu').removeClass('show')
            $('.fixed-menu__menu-block').toggleClass('active');
        });
    })();
    // parallax
    (function () {
        AOS.init({
            easing: 'ease-out-back',
        });
        var rellax = new Rellax('.rellax', {
            center: true,
        });
    })();
    // scroll
    (function () {
        $('.playbill__categoryes').mCustomScrollbar({
            axis: "x",
        }); $('.photos__wrapper--scroll').mCustomScrollbar({
            axis: "x",
        }); $('.catalog-choose__categories').mCustomScrollbar({
            axis: "x",
        });
        $('.fixed-pay').mCustomScrollbar({
            axis: "y",
        });
    })();
    // select-city
    (function () {
        const openSelect = function () {
            if ($(this).hasClass('disabled')) {
                return false
            }
            $(this).toggleClass('active')
            $(this).next().slideToggle();

            $('.custom-select__categoryes').mCustomScrollbar({
                axis: "y",
            });
            $('.custom-select__category__elem .control').on('click', function () {
                let text = $(this).text()
                if ($(this).parents('.enter-banner__input')) {
                    $(this).parents('.enter-banner__input').addClass('show-title')
                }
                $(this).parents('.custom-select').find('.custom-select__current-elem').text(text)
                $(this).parents('.custom-select').addClass('filed')
                $('.custom-select__header').removeClass('active');
                $('.custom-select__body').hide();
            })

        }
        $('.custom-select__header').on('click', openSelect)
    })();
    // quiz
    (function () {
        let count = 0;
        const anketa = [
            {
                question: "Культура и история",
                answer: ['Не интересует', 'Могу уделить немного времени', 'Очень интересует', 'Хочу полностью погрузиться']
            },
            {
                question: "Природа и приключения",
                answer: ['Стараюсь избегать', 'Только популярные места', 'Очень интересует', 'Я - авантюрист']
            },
            {
                question: "Культура и история",
                answer: ['Не люблю делать покупки', 'Если будет свободное время', 'Остановлюсь на магнитиках', 'Хочу купить подарки']
            },
            {
                question: "Культура и история",
                answer: ['Не хочу пробовать новые блюда', 'Не против экспериментов', 'Присоединюсь к мастер-классам', 'Хочу погрузиться в местную кухню']
            },
        ];
        const renderQuestions = (count) => {
            const quizInnerBlock = document.querySelector('.quiz__questions-block');
            if (quizInnerBlock) {
                quizInnerBlock.innerHTML = `
            <div class="questions-block__title">${anketa[count].question}</div>
                <div class="questions-block__wrapper">
                    <button type="button" class="questions-block__answer btn" data-value="${anketa[count].answer[0]}">
                    <svg class="">
                    <use xlink:href="./img/icons/icons.svg#emoji-happy"></use>
                </svg>
                        <span>${anketa[count].answer[0]}</span>
                    </button>
                    <button type="button" class="questions-block__answer btn" data-value="${anketa[count].answer[1]}">
                    <svg class="">
                    <use xlink:href="./img/icons/icons.svg#emoji-normal"></use>
                </svg>
                        <span>${anketa[count].answer[1]}</span>
                    </button>
                    <button type="button" class="questions-block__answer btn" data-value="${anketa[count].answer[2]}">
                    <svg class="">
                    <use xlink:href="./img/icons/icons.svg#emoji-normal-1"></use>
                </svg>
                        <span>${anketa[count].answer[2]}</span>
                    </button>
                    <button type="button" class="questions-block__answer btn" data-value="${anketa[count].answer[3]}">
                    <svg class="">
                    <use xlink:href="./img/icons/icons.svg#emoji-medium"></use>
                </svg>
                        <span>${anketa[count].answer[3]}</span>
                    </button>
                </div>
                <div class="questions-block__dott"></div>
            `}

            $('.questions-block__answer').on('click', function () {
                $('.quiz-routes__progress-item').eq(count).addClass('past')
                if (count != 3) {
                    count++;
                    renderQuestions(count)
                } else if (count === 3) {
                    $('.quiz-routes__progress-item').eq(4).addClass('active')
                }

                $('.quiz-routes__progress-item').eq(count).addClass('active')
            })
        }
        renderQuestions(count)
        $('.btn-return').on('click', function () {
            count = $(this).attr('data-count')
            const parent = $(this).parents('.quiz-routes__progress-item')
            parent.nextAll().removeClass('active past')
            renderQuestions(count)
        })
    })();
    // filter
    (function () {
        const filterBtnTransform = () => {
            const windowWidth = $(window).width();
            if (windowWidth <= 992) {
                $('.catalog__header-settings').append($('.catalog-filter__btn'))
            } else {
                $('.catalog-filter').append($('.catalog-filter__btn'))
            }
        };
        filterBtnTransform()
        $(window).resize(() => {
            filterBtnTransform()
        });
        $('.filter-item__header').on('click', function () {
            $(this).toggleClass('active');
            $(this).next().slideToggle();
            $('.custom-select__categoryes').mCustomScrollbar({
                axis: "y",
            });
        })
        $('.js-open-filter').on('click', function () {
            $('.fixed-filter').addClass('show')
            $('.fixed-pay').addClass('show')
        });
        $('.fixed-filter__close').on('click', function () {
            $('.fixed-filter').removeClass('show')
            $('.fixed-pay').removeClass('show')
        })
    })();
    // catalog
    (function () {
        $('.card-item__price').each((index, el) => {
            let countGreenElem = +el.getAttribute('data-price');
            switch (countGreenElem) {
                case 1:
                    for (let i = 0; i <= countGreenElem - 1; i++) {
                        el.children[i].style.color = 'green';
                    }
                    break
                case 2:
                    for (let i = 0; i <= countGreenElem - 1; i++) {
                        el.children[i].style.color = 'green';
                    }
                    break
                case 3:
                    for (let i = 0; i <= countGreenElem - 1; i++) {
                        el.children[i].style.color = 'green';
                    }
                    break
                case 4:
                    for (let i = 0; i <= countGreenElem - 1; i++) {
                        el.children[i].style.color = 'green';
                    }
                    break
                case 5:
                    for (let i = 0; i <= countGreenElem - 1; i++) {
                        el.children[i].style.color = 'green';
                    }
                    break
            }

        })
    })();
    // questions
    (function () {
        $('.questions-item__header').on('click', function () {
            $(this).toggleClass('active');
            $(this).next().slideToggle();
        })
    })();
    // card-product
    (function () {
        const showBlock = (auth, stat) => {
            $('.new-review__block--default').hide()
            if (auth === 'auth') {
                $('.new-review__block--auth').show()
            } else if (auth === 'noAuth') {
                $('.new-review__block--noAuth').show()
            } else if (auth === 'old') {
                $('.new-review__block--old').show()
            }
            if (stat === 'positive') {
                $('.new-review__input-icon').addClass('like')
            } else if (stat === 'negative') {
                $('.new-review__input-icon').addClass('dislike')
            }
        };
        $('.btn-positive').on('click', function () {
            let authStat = $(this).parents('.product-review__new-review').attr('data-auth');
            let statLike = $(this).attr('data-status')
            showBlock(authStat, statLike)
        });
        $('.btn-negative').on('click', function () {
            let authStat = $(this).parents('.product-review__new-review').attr('data-auth');
            let statLike = $(this).attr('data-status')
            showBlock(authStat, statLike)
        });
        $('.card-photos__slide').on('click', function () {
            let urlActivePhoto = $(this).children().attr('src');
            const changeBigPhoto = src => {
                $('.card-photos__big-photo img').attr('src', urlActivePhoto)
            }
            changeBigPhoto(urlActivePhoto)
            $(this).addClass('active').siblings().removeClass('active')
        })
        const swiperCardPhotos = new Swiper('.card-photos__slider', {
            slidesPerView: "auto",
            spaceBetween: 24,
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 32,
                }
            }
        })
        $('.card-photos-arrow__prev').on('click', () => {
            swiperCardPhotos.slidePrev();
        })
        $('.card-photos-arrow__next').on('click', () => {
            swiperCardPhotos.slideNext();
        })
        const transformPhoto = () => {
            let windowWidth = $(document).width();
            if (windowWidth <= 1200) {
                $('.product-card__header').after($('.product-card__right'))
            } else { $('.product-card__left').after($('.product-card__right')) }
        }
        $(window).resize(() => {
            transformPhoto()
        });
        transformPhoto();
    })();
    // popups
    (function () {
        const showPopup = el => {
            $('.popups').show();
            $('body').addClass('overlay');
            $(el).addClass('show');
        };
        const showNotify = el => {
            $(el).addClass('show');
        }
        const closeNotify = el => {
            $('.notification').removeClass('show');
        }
        const closeModal = () => {
            $('.popup').removeClass('show');
            $('.popups').hide();
            $('body').removeClass('overlay');
        }
        $('.personal-review__delete').on('click', function () {
            let el = $(this).attr('data-popup')
            showPopup(el)
        })
        $('.js-close').on('click', function () {
            closeModal();
            closeNotify();
            $('.fixed-filter').removeClass('show')
        });
        $('.popup__btn-delete').on('click', function () {
            let el = $(this).attr('data-popup')
            showNotify(el);
            $(this).parents('.popup').removeClass('show');
            $('body').removeClass('overlay');
            closeModal()
            setTimeout(closeNotify, 3000)
        })
        $('.btn-add-rewiew').on('click', function () {
            let el = $(this).attr('data-popup')
            showNotify(el);
            closeModal()
            setTimeout(closeNotify, 3000)
        })
        $('.add-to-favorite').on('click', function () {
            let status = $(this).attr('data-status');
            let el = $(this).attr('data-popup');
            if (status === 'auth') {
                $(this).addClass('active');
            } else if (status === 'noAuth') {
                showPopup(el);
            }
        })
        $('.btn-end').on('click', function () {
            let el = $(this).attr('data-popup');
            showPopup(el);
        })
        $('.popup__btn-sms').on('click', function () {
            let el = $(this).attr('data-popup');
            showPopup(el);
        })
        $('.buy-btn').on('click', function () {
            let el = $(this).attr('data-popup');
            showPopup(el);
        })
    })();
    // showMore
    (function () {
        const dataRevew = [{
            name: 'Anon',
            date: '12-05-2021',
            text: `Имеется спорная точка зрения, гласящая примерно
            следующее: независимые государства представляют собой не что иное, как
            квинтэссенцию победы маркетинга над разумом и должны быть превращены в
            посмешище, хотя само их существование приносит несомненную пользу обществу. В
            целом, конечно, внедрение современных методик обеспечивает актуальность форм
            воздействия.`,
        },
        {
            name: 'User',
            date: '12-05-2021',
            text: `Имеется спорная точка зрения, гласящая примерно
            следующее: независимые государства представляют собой не что иное, как
            квинтэссенцию победы маркетинга над разумом и должны быть превращены в
            посмешище, хотя само их существование приносит несомненную пользу обществу. В
            целом, конечно, внедрение современных методик обеспечивает актуальность форм
            воздействия.`,
        },
        {
            name: 'Person',
            date: '12-05-2021',
            text: `Имеется спорная точка зрения, гласящая примерно
            следующее: независимые государства представляют собой не что иное, как
            квинтэссенцию победы маркетинга над разумом и должны быть превращены в
            посмешище, хотя само их существование приносит несомненную пользу обществу. В
            целом, конечно, внедрение современных методик обеспечивает актуальность форм
            воздействия.`,
        }]
        const renderMoreReviews = function ([...dataRevew]) {
            dataRevew.forEach(el => {
                const review = document.createElement('div');
                review.className = 'all-reviews__item personal-review';
                review.innerHTML = `
                <div class="personal-review__header">
                <div class="personal-review__left">
                    <div class="personal-review__status personal-review__status--like">
                        <svg class="">
                            <use xlink:href="./img/icons/icons.svg#like"></use>
                        </svg>
                    </div>
                    <div class="personal-review__person">
                        <div class="personal-review__name">${el.name}</div>
                        <div class="personal-review__date">${el.date}</div>
                    </div>
                </div>
            </div>
            <div class="personal-review__body">
                <p class="personal-review__text">${el.text}</p>
            </div>
                `;
                $('.all-reviews__show-more').before(review);
            })

        }
        $('.all-reviews__show-more').on('click', function () {
            renderMoreReviews(dataRevew)
        })
    })();
    // calendar
    (function () {
        const addDiaposonClassForCalendar = (mounthFrom, mounthTo, idFrom, idTo) => {
            let startIdFrom = 'calendarContainer-day-'
            let startIdTo = 'calendarContainer-2-day-'
            if ($('#calendarContainer-month').text() === mounthFrom) {
                for (let i = idFrom; i < 36; i++) {
                    $(`#${startIdFrom}${i}`).addClass('available')
                }
            } else if ($('#calendarContainer-month').text() === mounthTo) {
                for (let i = 1; i < idTo; i++) {
                    $(`#${startIdFrom}${i}`).addClass('available')
                }
            }
            if ($('#calendarContainer-2-month').text() === mounthTo) {
                for (let i = 1; i < idTo; i++) {
                    $(`#${startIdTo}${i}`).addClass('available')
                }
            } else if ($('#calendarContainer-2-month').text() === mounthFrom) {
                for (let i = idFrom; i < 36; i++) {
                    $(`#${startIdTo}${i}`).addClass('available')
                }
            }
        }
        const $calendarInput = $('.enter-banner__input--calendar .custom-select__header');
        $calendarInput.on('click', function () {
            addDiaposonClassForCalendar('Октябрь', 'Ноябрь', 26, 11)
        })
        var calendar = new Calendar(
            "calendarContainer", // id of html container for calendar
            "small", // size of calendar, can be small | medium | large
            [
                "Wednesday", // left most day of calendar labels
                3 // maximum length of the calendar labels
            ],
            [
                "#FFFFFF", // primary color
                "#FFFFFF", // primary dark color
                "#009974", // text color
                "#FFFFFF" // text dark color
            ],
            {
                months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
                indicator: false,
            },
        );
        calendar.setOnClickListener('days-blocks',
            // Called when a day block is clicked
            function (e) {
                const dayStart = calendar.date.getDate();
                const mounthStart = calendar.date.getMonth();
                $('.calendar-value__start').text(`${dayStart}.${mounthStart + 1}`);
                if ($('.calendar-value__finish').text() != '' && $('.calendar-value__start').text() != '') {
                    $('.enter-banner__input--calendar .custom-select').addClass('filed')
                    $('.enter-banner__input--calendar').addClass('show-title')
                }
            }
        );
        let calendarTo = new Calendar(
            "calendarContainer-2", // id of html container for calendar
            "small", // size of calendar, can be small | medium | large
            [
                "Wednesday", // left most day of calendar labels
                3 // maximum length of the calendar labels
            ],
            [
                "#FFFFFF", // primary color
                "#FFFFFF", // primary dark color
                "#009974", // text color
                "#FFFFFF" // text dark color
            ],
            {
                months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            },
        );
        calendar.setOnClickListener('month-slider',
            // Called when the month left arrow is clicked
            function () {
                addDiaposonClassForCalendar('Октябрь', 'Ноябрь', 26, 11)
            },
            // Called when the month right arrow is clicked
            function () {
                addDiaposonClassForCalendar('Октябрь', 'Ноябрь', 26, 11)
            }
        );
        calendarTo.setOnClickListener('month-slider',
            // Called when the month left arrow is clicked
            function () {
                addDiaposonClassForCalendar('Октябрь', 'Ноябрь', 26, 11)
            },
            // Called when the month right arrow is clicked
            function () {
                addDiaposonClassForCalendar('Октябрь', 'Ноябрь', 26, 11)
            }
        );
        calendarTo.setOnClickListener('days-blocks',
            // Called when a day block is clicked
            function (e) {
                const dayStart = calendarTo.date.getDate();
                const mounthStart = calendarTo.date.getMonth();
                $('.calendar-value__finish').text(`${dayStart}.${mounthStart + 1}`);
                if ($('.calendar-value__finish').text() != '' && $('.calendar-value__start').text() != '') {
                    $('.enter-banner__input--calendar .custom-select').addClass('filed')
                    $('.enter-banner__input--calendar').addClass('show-title')
                }
            }
        );
        $('#calendarContainer-month').after($('#calendarContainer-year'));
        $('#calendarContainer-2-month').after($('#calendarContainer-2-year'));
        $('.cjslib-month div').html(`<img src="img/icon/calendar-arrow-left.svg">`);
    })();
    // google map init and stylized 
    // steps planning way  
    (function () {
        let stepCount = 0;
        // maps sеtting

        function initialize() {
            var startCity = new google.maps.LatLng(61.36087770604348, 31.326917871606124);
            var myLatlng = new google.maps.LatLng(67.01156439141535, 73.95476052039851);
            var pos1 = new google.maps.LatLng(66.86305851932107, 70.8545548132817);
            var pos2 = new google.maps.LatLng(67.46201765996048, 78.70893018336228);
            var pos3 = new google.maps.LatLng(66.55047769194653, 66.59826008447075);
            var pos4 = new google.maps.LatLng(66.09653540676248, 76.65587017293807);
            var pos5 = new google.maps.LatLng(65.53514113422678, 72.50449449743208);
            var pos6 = new google.maps.LatLng(68.41641830907557, 73.12853422144906);
            const allWays = {
                startCity: [61.36087770604348, 31.326917871606124],
                pos1: [66.86305851932107, 70.8545548132817],
                pos2: [67.46201765996048, 78.70893018336228],
                pos3: [66.09653540676248, 76.65587017293807],
                pos4: [61.36087770604348, 31.326917871606124],
                pos5: [65.53514113422678, 72.50449449743208],
                pos6: [68.41641830907557, 73.12853422144906],
            }
            var mapOptions = {
                zoom: 5,
                center: myLatlng,
                mapTypeControl: false,
                overviewMapControl: false,
                panControl: false,
                zoomControl: false,
                streetViewControl: false,
                keyboardShortcuts: false,
                styles: [
                    {
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#bdbdbd"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#dadada"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#cad2d4"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#bdbdbd"
                            }
                        ]
                    }
                ]
            };
            var map = new google.maps.Map(document.getElementById('map'), mapOptions);
            var marker1 = new google.maps.Marker({
                position: pos1,
                map: map,
                title: 'Яр-Сале',
                icon: {
                    url: "img/icon/marker-sound.svg",
                    scaledSize: new google.maps.Size(39.69, 39.69)
                }

            });
            var infowindow1 = new google.maps.InfoWindow({
                content: marker1.title
            });
            var marker2 = new google.maps.Marker({
                position: pos2,
                map: map,
                title: 'Тазовский',
                icon: {
                    url: "img/icon/marker-sound.svg",
                    scaledSize: new google.maps.Size(39.69, 39.69)
                }
            });
            var infowindow2 = new google.maps.InfoWindow({
                content: marker2.title
            });
            var marker3 = new google.maps.Marker({
                position: pos3,
                map: map,
                title: 'Салехард',
                icon: {
                    url: "img/icon/btn-location.svg",
                    scaledSize: new google.maps.Size(32, 32)
                }
            });
            var infowindow3 = new google.maps.InfoWindow({
                content: marker3.title
            });
            var marker4 = new google.maps.Marker({
                position: pos4,
                map: map,
                title: 'Новый Уренгой',
                icon: {
                    url: "img/icon/marker-sound.svg",
                    scaledSize: new google.maps.Size(39.69, 39.69)
                },
            });
            var infowindow4 = new google.maps.InfoWindow({
                content: marker4.title
            });
            var marker5 = new google.maps.Marker({
                position: pos5,
                map: map,
                title: 'Надым',
                icon: {
                    url: "img/icon/btn-location.svg",
                    scaledSize: new google.maps.Size(32, 32)
                },
            });
            var infowindow5 = new google.maps.InfoWindow({
                content: marker5.title
            });
            var marker6 = new google.maps.Marker({
                position: pos6,
                map: map,
                title: 'Сабетта',
                icon: {
                    url: "img/icon/marker-sound.svg",
                    scaledSize: new google.maps.Size(39.69, 39.69)
                },
            });
            var infowindow6 = new google.maps.InfoWindow({
                content: marker6.title
            });
            infowindow1.open(map, marker1);
            infowindow2.open(map, marker2);
            infowindow3.open(map, marker3);
            infowindow4.open(map, marker4);
            infowindow5.open(map, marker5);
            infowindow6.open(map, marker6);
            const addClassForPlace = function () {
                $('#city-to-value').parents('.custom-select').addClass('filed')
            }
            marker1.addListener('click', function () {
                let startLat = startCity.lat()
                let startLng = startCity.lng()
                let endLat = marker1.position.lat()
                let endLng = marker1.position.lng()
                drawLine(startLat, startLng, endLat, endLng)
                addClassForPlace()
                $('#city-to-value').text(marker1.title)
            });
            marker2.addListener('click', function () {
                let startLat = startCity.lat()
                let startLng = startCity.lng()
                let endLat = marker2.position.lat()
                let endLng = marker2.position.lng()
                drawLine(startLat, startLng, endLat, endLng)
                addClassForPlace()
                $('#city-to-value').text(marker2.title)
            });
            marker3.addListener('click', function () {
                let startLat = startCity.lat()
                let startLng = startCity.lng()
                let endLat = marker3.position.lat()
                let endLng = marker3.position.lng()
                drawLine(startLat, startLng, endLat, endLng)
                addClassForPlace()
                $('#city-to-value').text(marker3.title)
            });
            marker4.addListener('click', function () {
                let startLat = startCity.lat()
                let startLng = startCity.lng()
                let endLat = marker4.position.lat()
                let endLng = marker4.position.lng()
                drawLine(startLat, startLng, endLat, endLng)
                addClassForPlace()
                $('#city-to-value').text(marker4.title)
            });
            marker5.addListener('click', function () {
                let startLat = startCity.lat()
                let startLng = startCity.lng()
                let endLat = marker5.position.lat()
                let endLng = marker5.position.lng()
                drawLine(startLat, startLng, endLat, endLng)
                addClassForPlace()
                $('#city-to-value').text(marker5.title)
            });
            marker6.addListener('click', function () {
                let startLat = startCity.lat()
                let startLng = startCity.lng()
                let endLat = marker6.position.lat()
                let endLng = marker6.position.lng()
                drawLine(startLat, startLng, endLat, endLng)
                addClassForPlace()
                $('#city-to-value').text(marker6.title)
            });
            const lineSymbol = {
                path: "M 0,-1 0,1",
                strokeOpacity: 1,
                scale: 1,
                strokeWeight: 2,
                strokeColor: "#213A8F",
            };
            function drawLine(startLat, startLng, endLat, endLng) {
                const line = new google.maps.Polyline({
                    path: [
                        { lat: startLat, lng: startLng },
                        { lat: endLat, lng: endLng },
                    ],
                    strokeOpacity: 0,
                    icons: [
                        {
                            icon: lineSymbol,
                            offset: "0",
                            repeat: "6px",
                        },
                    ],
                    map: map,
                });
            }
        }
        function initializeBuildMap() {
            var myLatlng = new google.maps.LatLng(66.53256297859949, 66.60141403516596);
            var pos1 = new google.maps.LatLng(66.53256677261557, 66.61196913935893);
            var pos2 = new google.maps.LatLng(66.52692261179189, 66.59257347430562);
            var pos3 = new google.maps.LatLng(66.53797994510903, 66.59587795576483);
            var pos4 = new google.maps.LatLng(66.53551938734692, 66.61205704031188);
            var pos5 = new google.maps.LatLng(66.52640978771203, 66.60338814095442);
            var pos6 = new google.maps.LatLng(66.524683202413, 66.59579212514542);

            var mapOptions = {
                zoom: 14,
                center: myLatlng,
                mapTypeControl: false,
                overviewMapControl: false,
                panControl: false,
                zoomControl: false,
                streetViewControl: false,
                keyboardShortcuts: false,
                styles: [
                    {
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#bdbdbd"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#dadada"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#cad2d4"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#bdbdbd"
                            }
                        ]
                    }
                ]
            };
            var map = new google.maps.Map(document.getElementById('build-way__map'), mapOptions);
            var marker1 = new google.maps.Marker({
                position: pos1,
                map: map,
                title: 'Хостел «Хмель и Соль»',
                icon: {
                    url: "img/icon/btn-location.svg",
                    scaledSize: new google.maps.Size(32, 32)
                }

            });
            var infowindow1 = new google.maps.InfoWindow({
                content: marker1.title
            });
            var marker2 = new google.maps.Marker({
                position: pos2,
                map: map,
                title: 'Тазовский',
                icon: {
                    url: "img/icon/btn-location.svg",
                    scaledSize: new google.maps.Size(32, 32)
                }
            });
            var infowindow2 = new google.maps.InfoWindow({
                content: marker2.title
            });
            var marker3 = new google.maps.Marker({
                position: pos3,
                map: map,
                title: 'Хостел «Хмель и Соль»',
                icon: {
                    url: "img/icon/btn-location.svg",
                    scaledSize: new google.maps.Size(32, 32)
                }
            });
            var infowindow3 = new google.maps.InfoWindow({
                content: marker3.title
            });
            var marker4 = new google.maps.Marker({
                position: pos4,
                map: map,
                title: 'Хостел «Хмель и Соль»',
                icon: {
                    url: "img/icon/btn-location.svg",
                    scaledSize: new google.maps.Size(32, 32)
                }
            });
            var infowindow4 = new google.maps.InfoWindow({
                content: marker4.title
            });
            var marker5 = new google.maps.Marker({
                position: pos5,
                map: map,
                title: 'Хостел «Хмель и Соль»',
                icon: {
                    url: "img/icon/btn-location.svg",
                    scaledSize: new google.maps.Size(32, 32)
                }
            });
            var infowindow5 = new google.maps.InfoWindow({
                content: marker5.title
            });
            var marker6 = new google.maps.Marker({
                position: pos6,
                map: map,
                title: 'Хостел «Хмель и Соль»',
                icon: {
                    url: "img/icon/btn-location.svg",
                    scaledSize: new google.maps.Size(32, 32)
                }
            });
            var infowindow6 = new google.maps.InfoWindow({
                content: marker6.title
            });
            infowindow1.open(map, marker1);
            infowindow2.open(map, marker2);
            infowindow3.open(map, marker3);
            infowindow4.open(map, marker4);
            infowindow5.open(map, marker5);
            infowindow6.open(map, marker6);

            marker1.addListener('click', function () {
                $('#city-to-value').text(marker1.title)
            });
            marker2.addListener('click', function () {
                $('#city-to-value').text(marker2.title)
            });
            marker3.addListener('click', function () {
                $('#city-to-value').text(marker3.title)
            });
            marker4.addListener('click', function () {
                $('#city-to-value').text(marker4.title)
            });
            marker5.addListener('click', function () {
                $('#city-to-value').text(marker5.title)
            });
            marker6.addListener('click', function () {
                $('#city-to-value').text(marker6.title)
            });

        }
        function initializeChoosedMap() {
            var myLatlng = new google.maps.LatLng(66.53256297859949, 66.60141403516596);
            var pos1 = new google.maps.LatLng(66.53256677261557, 66.61196913935893);
            var pos2 = new google.maps.LatLng(66.52692261179189, 66.59257347430562);
            var pos3 = new google.maps.LatLng(66.53797994510903, 66.59587795576483);
            var pos4 = new google.maps.LatLng(66.53551938734692, 66.61205704031188);
            var pos5 = new google.maps.LatLng(66.52640978771203, 66.60338814095442);
            var pos6 = new google.maps.LatLng(66.524683202413, 66.59579212514542);

            var mapOptions = {
                zoom: 14,
                center: myLatlng,
                mapTypeControl: false,
                overviewMapControl: false,
                panControl: false,
                zoomControl: false,
                streetViewControl: false,
                keyboardShortcuts: false,
                styles: [
                    {
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#bdbdbd"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#dadada"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#cad2d4"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#bdbdbd"
                            }
                        ]
                    }
                ]
            };
            var map = new google.maps.Map(document.getElementById('catalog-choose__map'), mapOptions);
            var marker1 = new google.maps.Marker({
                position: pos1,
                map: map,
                title: 'Хостел «Хмель и Соль»',
                icon: {
                    url: "img/icon/btn-location.svg",
                    scaledSize: new google.maps.Size(32, 32)
                }

            });
            var infowindow1 = new google.maps.InfoWindow({
                content: marker1.title
            });
            var marker2 = new google.maps.Marker({
                position: pos2,
                map: map,
                title: 'Тазовский',
                icon: {
                    url: "img/icon/btn-location.svg",
                    scaledSize: new google.maps.Size(32, 32)
                }
            });
            var infowindow2 = new google.maps.InfoWindow({
                content: marker2.title
            });
            var marker3 = new google.maps.Marker({
                position: pos3,
                map: map,
                title: 'Хостел «Хмель и Соль»',
                icon: {
                    url: "img/icon/btn-location.svg",
                    scaledSize: new google.maps.Size(32, 32)
                }
            });
            var infowindow3 = new google.maps.InfoWindow({
                content: marker3.title
            });
            var marker4 = new google.maps.Marker({
                position: pos4,
                map: map,
                title: 'Хостел «Хмель и Соль»',
                icon: {
                    url: "img/icon/btn-location.svg",
                    scaledSize: new google.maps.Size(32, 32)
                }
            });
            var infowindow4 = new google.maps.InfoWindow({
                content: marker4.title
            });
            var marker5 = new google.maps.Marker({
                position: pos5,
                map: map,
                title: 'Хостел «Хмель и Соль»',
                icon: {
                    url: "img/icon/btn-location.svg",
                    scaledSize: new google.maps.Size(32, 32)
                }
            });
            var infowindow5 = new google.maps.InfoWindow({
                content: marker5.title
            });
            var marker6 = new google.maps.Marker({
                position: pos6,
                map: map,
                title: 'Хостел «Хмель и Соль»',
                icon: {
                    url: "img/icon/btn-location.svg",
                    scaledSize: new google.maps.Size(32, 32)
                }
            });
            var infowindow6 = new google.maps.InfoWindow({
                content: marker6.title
            });
            infowindow1.open(map, marker1);
            infowindow2.open(map, marker2);
            infowindow3.open(map, marker3);
            infowindow4.open(map, marker4);
            infowindow5.open(map, marker5);
            infowindow6.open(map, marker6);

            marker1.addListener('click', function () {
                $('#city-to-value').text(marker1.title)
            });
            marker2.addListener('click', function () {
                $('#city-to-value').text(marker2.title)
            });
            marker3.addListener('click', function () {
                $('#city-to-value').text(marker3.title)
            });
            marker4.addListener('click', function () {
                $('#city-to-value').text(marker4.title)
            });
            marker5.addListener('click', function () {
                $('#city-to-value').text(marker5.title)
            });
            marker6.addListener('click', function () {
                $('#city-to-value').text(marker6.title)
            });

        }

        google.maps.event.addDomListener(window, 'load', initialize);
        google.maps.event.addDomListener(window, 'load', initializeBuildMap);
        google.maps.event.addDomListener(window, 'load', initializeChoosedMap);
        // maps sеtting end

        // Steps

        const $steps = $('.steps-planning__step');
        const selectInputs = $('.enter-banner__input .custom-select');
        const values = document.querySelectorAll('#planning-form .custom-select__current-elem');

        const nextStep = function () {
            stepCount++;
            $steps.removeClass('show')
            $steps.eq(stepCount).addClass('show');
            console.log(stepCount);
            $('.catalog-choose__catalog').show()
            if (stepCount > 1) {
                $('#repeat-step-btn').addClass('show')
                $('#next-step-btn').removeClass('show')

            } else if (stepCount > 0) { $('.enter-banner__form').addClass('only-btn') }
        }
        const prevStep = function () {
            stepCount--;
            $steps.removeClass('show')
            $steps.eq(stepCount).addClass('show');
            if (stepCount == 0) {
                $('#repeat-step-btn').removeClass('show')
                $('#next-step-btn').addClass('show')
                $('.enter-banner__form').removeClass('only-btn')
            } console.log(stepCount);
        }
        $('#next-step-btn').on('click', function () {
            let fieldForm = true
            selectInputs.each((index, el) => {
                if (!el.classList.contains('filed')) {
                    return fieldForm = false
                }
            })
            if (fieldForm === true && stepCount === 0) {
                nextStep()
                $(this).removeClass('show');
                $('#repeat-step-btn').addClass('show');
                $('#planning-form .custom-select__header').addClass('disabled')
                values.forEach(el => {
                    localStorage.setItem(el.getAttribute('data-title'), el.textContent)
                })
            }
        })
        $('#repeat-step-btn').on('click', function () {
            stepCount = 0;
            $steps.removeClass('show')
            $steps.eq(stepCount).addClass('show');
            $('#planning-form .custom-select__header').removeClass('disabled')
            $(this).removeClass('show');
            $('#next-step-btn').addClass('show'); $('.enter-banner__form').removeClass('only-btn');
            $('.choosen-radio').prop('checked', false);
            selectInputs.removeClass('filed')
            $('.enter-banner__input').removeClass('show-title')
            $('#city-from-value').text($('#city-from-value').attr('data-title'))
            $('#city-to-value').text($('#city-to-value').attr('data-title'))
            $('#calendar-value').html(`<span class="calendar-value__start">Когда</span> -
            <span class="calendar-value__finish"></span>`)
            $('#type-of-recreation').text($('#type-of-recreation').attr('data-title'))
        })
        $('.btn-next').on('click', function () {
            if (stepCount < $steps.length - 1) {
                nextStep()
            }
        });
        $('.btn-back').on('click', function () {
            if (stepCount > 0) {
                prevStep()
            }
        })
        $('.btn-end').on('click', function () {
            $('.build-way__hendler').hide()
            $('.build-way__hendler--done').addClass('done')
            $('.build-plan__checkbox input').prop('disabled', true);
            $('.build-plan__elem').addClass('done')
            let indexCount = 0
            if ($('.build-plan__list').css('display') === 'none') {
                console.log('w');
                $('.build-plan__list-date .build-plan__icon-drag').each((index, el) => {
                    indexCount++
                    el.innerHTML = `<span class="build-plan__num">${indexCount}</span>`
                })
            } else {
                $('.build-plan__icon-drag').each((index, el) => {
                    indexCount++
                    el.innerHTML = `<span class="build-plan__num">${indexCount}</span>`
                })
            }

        })
        // Steps end

        // choose btn
        $('.catalog-choose__type-search .btn').on('click', function () {
            if ($(this).attr('data-value') === 'list-search') {
                console.log('list');
                $('.catalog-choose__catalog').show()
                $('.catalog-choose__map').hide()
            } else if ($(this).attr('data-value') === 'map-search') {
                $('.catalog-choose__catalog').hide()
                $('.catalog-choose__map').show()
            }
        })
        $('.choose-btn').on('click', function () {
            if ($(this).attr('data-type') === "only") {
                console.log($('.choose-btn[data-type="only"]'));
                if ($(this).hasClass('current')) {
                    $(this).removeClass('current');
                    $('.choose-btn').prop('disabled', false);
                    $(this).prop('disabled', false);
                } else {
                    $(this).addClass('current');
                    $('.choose-btn[data-type="only"]').prop('disabled', true);
                    $(this).prop('disabled', false);
                }
            } else {
                if ($(this).hasClass('current')) {
                    $(this).removeClass('current');
                } else {
                    $(this).addClass('current');
                }
            }
        })
        // choose btn end
    })();
    // drag list
    (function () {
        const defauldBuildList = document.querySelector('.build-plan__list')
        const dateList = document.querySelector('.build-plan__list-date');
        const planElements = document.querySelectorAll('.build-plan__elem');
        const shareDateCheckbox = document.querySelector('.build-plan__checkbox input');
        let dataDate = [
            {
                mounth: 10,
                date: 1,
                year: 2021,
            },
            {
                mounth: 10,
                date: 2,
                year: 2021,
            },
            {
                mounth: 10,
                date: 3,
                year: 2021,
            },
            {
                mounth: 10,
                date: 4,
                year: 2021,
            },
            {
                mounth: 10,
                date: 1,
                year: 2021,
            }, {
                mounth: 10,
                date: 5,
                year: 2021,
            },
            {
                mounth: 10,
                date: 6,
                year: 2021,
            }
        ];
        let dataElementsPlan = [
            {
                'id': '01',
                'img': 'img/plan-photo.png',
                'name': 'Отель «Сибирь»',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'no-drag',
                'btnStatus': 'disabled',
                "payStatus": 'disabled',
                'svg': 'home'
            },
            {
                'id': '02',
                'img': 'img/plan-photo.png',
                'name': 'Отель «Сибирь»',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'drag',
                'btnStatus': 'drag',
                "payStatus": 'payed',
                'svg': 'arrows'
            },
            {
                'id': '03',
                'img': 'img/plan-photo.png',
                'name': 'Отель «Сибирь»',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'drag',
                'btnStatus': 'drag',
                "payStatus": 'no-pay',
                'svg': 'arrows'
            },
            {
                'id': '04',
                'img': 'img/plan-photo.png',
                'name': 'Отель «Сибирь»',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'drag',
                'btnStatus': 'drag',
                "payStatus": 'payed',
                'svg': 'arrows'
            },
            {
                'id': '05',
                'img': 'img/plan-photo.png',
                'name': 'Отель «Сибирь»',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'drag',
                'btnStatus': 'drag',
                "payStatus": 'no-pay',
                'svg': 'arrows'
            },
            {
                'id': '06',
                'img': 'img/plan-photo.png',
                'name': 'Отель «Сибирь»',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'drag',
                'btnStatus': 'drag',
                "payStatus": 'payed',
                'svg': 'arrows'
            },
            {
                'id': '07',
                'img': 'img/plan-photo.png',
                'name': 'Отель «Сибирь»',
                'text': '10:00 - 22:00 для регистрации',
                "transformStatus": 'drag',
                'btnStatus': 'drag',
                "payStatus": 'no-pay',
                'svg': 'arrows'
            },
        ];
        const renderElementsPlan = (whereRender) => {
            whereRender.textContent = '';
            dataElementsPlan.forEach(({ id, img, name, text, transformStatus, payStatus, svg, btnStatus }) => {
                let planElement = document.createElement('div');
                planElement.classList.add('build-plan__elem', transformStatus);
                planElement.setAttribute('id', `build-plan__elem-${id}`);
                let deleteBtn = (payStatus === 'payed' || btnStatus === 'disabled') ? '' : `</button> <button class="btn btn-delete" data-id="${id}">+</button>`;
                planElement.innerHTML = `
                <div class="build-plan__elem-inner">
                    <div class="build-plan__icon-drag ${btnStatus}">
                    <svg class="">
                        <use xlink:href="./img/icons/icons.svg#${svg}"></use>
                    </svg>
                    </div>
                    <a href='#' class="build-plan__photo">
                        <img src="${img}" alt="Ваш отель">
                    </a>
                    <div class="build-plan__descr">
                        <div class="descr-block__title">${name}</div>
                        <div class="descr-block__text">${text}</div>
                    </div>
                    <button type="button" class="pay-btn btn ${payStatus}" data-id="${id}">
                        <svg class="">
                            <use xlink:href="./img/icons/icons.svg#ticket"></use>
                        </svg>
                        <svg class="payed-icon">
                            <use xlink:href="./img/icons/icons.svg#tick-pay"></use>
                        </svg>
                    ${deleteBtn}
                    </div>
                    <button type="btn" class="btn add-new-elem" data-id="${id}">
                        <span>Добавить</span>
                    </button>
                    <div class="build-plan__add-elem " id="build-plan__add-elem-${id}">
                    <div class="build-plan__add-inner build-plan__add-inner--first show">
                        <div class="build-plan__add-btns">
                            <button id="option-where" type="button"
                                    class="build-plan__add-btn btn btn-green">Где
                                    поесть</button>
                            <button id="option-what" type="button" class="build-plan__add-btn btn btn-green">Чем
                                    заняться</button>
                        </div>
                    </div>
                    <div class="build-plan__add-inner build-plan__add-inner--second">
                        <div class="build-plan__add__label">Где поесть</div>
                        <div class="build-plan__add-btns">
                            <a href="" type="button" class="build-plan__add-btn btn btn-green">По пути</a>
                            <a href="" type="button" class="build-plan__add-btn btn btn-green">Другое</a>
                        </div>
                    </div>
                </div>
                `;
                whereRender.append(planElement)
            })
        }

        const renderDateList = () => {
            dateList.textContent = '';
            let countId = 0
            dataDate.forEach(({ mounth, date, year }) => {
                countId++
                let dateElem = document.createElement('div');
                dateElem.classList.add('build-list__date');
                dateElem.innerHTML = `
                <div class="build-list__date-label">
                    <span>${date}.${mounth}.${year}</span>
                </div>
                <div id="dragulaId-${countId}" class="build-list__date-inner container"></div>
                `;
                dateList.append(dateElem)
            })
        };
        shareDateCheckbox.addEventListener('change', function () {
            if (shareDateCheckbox.checked === true) {

                renderDateList()
                const dateInnerBlocks = document.querySelectorAll('.build-list__date-inner')
                renderElementsPlan(dateInnerBlocks[0])
                let arrayForDrag = []
                dateInnerBlocks.forEach(el => arrayForDrag.push(el))
                dragulaInit(arrayForDrag)
                defauldBuildList.style.display = 'none';
            } else {
                dateList.textContent = '';
                defauldBuildList.style.display = 'block';
                planElements.forEach(el => {
                    defauldBuildList.append(el)
                })

            }
        });
        const deleteElementPlan = (id) => {
            dataElementsPlan = dataElementsPlan.filter((el) => id !== el.id);
            if (document.querySelector('.build-plan__list').style.display == 'none') {
                renderElementsPlan(document.querySelector('.build-list__date-inner'));
            } else if (document.querySelector('.build-list__date-inner')) {
                renderElementsPlan(defauldBuildList);
            }
        }
        renderElementsPlan(defauldBuildList);
        document.addEventListener('click', e => {
            if (e.target.closest('.btn-delete')) {
                let id = e.target.getAttribute('data-id');
                deleteElementPlan(id)
            }
            if (e.target.closest('.add-new-elem')) {
                let id = e.target.getAttribute('data-id');
                e.target.style.opacity = 0;
                e.target.style.height = 0;
                document.querySelector(`#build-plan__add-elem-${id}`).classList.add('show')
            }
            if (e.target.closest('.build-plan__add-btn')) {
                document.querySelector('.build-plan__add-inner--first').classList.remove('show')
                document.querySelector('.build-plan__add-inner--second').classList.add('show')
            }
            if (e.target.closest('.pay-btn.no-pay')) {
                let id = e.target.getAttribute('data-id');
                if (id === '03') {
                    $('#new-pay').addClass('show')
                } else if (id === '05') {
                    $('#history-pay').addClass('show')
                }
            }
        })
        $('.js-buy-btn').on('click', function () { $('#new-pay').addClass('show') })
        function dragulaInit(elements) {
            dragula(elements, {

                // or 'horizontal'
                direction: 'vertical',

                // determine whether to copy elements rather than moving
                // if a method is passed, it'll be called whenever an element starts being dragged in order to decide whether it should follow copy behavior or not. 
                copy: false,

                // determine whether to sort elements in copy-source containers.
                copySortSource: false,

                // spilling will put the element back where it was dragged from, if this is true
                revertOnSpill: false,

                // spilling will `.remove` the element, if this is true
                removeOnSpill: false,

                // set the element that gets mirror elements appended
                mirrorContainer: document.body,

                // allows users to select input text
                ignoreInputTextSelection: true,

                // allows users to select the amount of movement on the X axis before it is considered a drag instead of a click   
                slideFactorX: 0,

                // allows users to select the amount of movement on the Y axis before it is considered a drag instead of a click      
                slideFactorY: 0,

                // only elements in drake.containers will be taken into account
                isContainer: function (el) {
                    return false;
                },

                // elements are always draggable by default
                moves: function (el, source, handle, sibling) {
                    return true;
                },

                // elements can be dropped in any of the `containers` by default
                accepts: function (el, target, source, sibling) {
                    const allElemContainer = document.querySelectorAll('.build-list__date');
                    allElemContainer.forEach(el => {
                        el.classList.add('active');
                        if (el.querySelector('.build-list__date-inner').innerHTML == '') {
                            el.classList.remove('active');
                        }
                    })
                    return true;
                },

                // don't prevent any drags from initiating by default
                invalid: function (el, handle) {
                    return el.closest('.no-drag');
                }

            });
        }
    })()
});




