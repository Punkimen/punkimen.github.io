export const sectionHeightInit = () => {};
const section = document.querySelector(".adventure");
const bg = document.querySelector(".description-reality__gradient");
const height = bg.clientHeight;
bg.style.paddingBottom = `${height / 4}px`;
section.style.marginTop = `-${height / 1.5}px`;
