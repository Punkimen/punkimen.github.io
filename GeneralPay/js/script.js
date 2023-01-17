"use strict";
import {menuRelocate} from "./components/header.js";
import {swiper} from "./components/partenrsSlider.js";
import {addClass, removeClass} from "./components/toggleClass.js";

menuRelocate();
window.addEventListener("resize", (e) => {
	menuRelocate();
});
