export const sectionHeightInit = (windowWidth) => {
    const sectionTop = document.querySelector(".hero");
    const sectionBottom = document.querySelector(".adventure");
    const bg = document.querySelector(".description-reality");
    let heightSection = sectionTop.clientHeight;
    const heightBg = bg.clientHeight;

    heightSection = heightSection < 300 ? 300 : sectionTop.clientHeight
    bg.style.paddingTop = windowWidth > 768 ? `${heightSection / 3.5}px` : `${heightSection / 4}px`;
// bg.style.paddingBottom = `${heightBg / 4}px`;
    bg.style.marginTop = windowWidth > 768 ? `-${heightSection / 0.9}px` : `-${heightSection / 1.5}px`;
// sectionBottom.style.marginTop = `-${heightBg / 10}px`;
};

