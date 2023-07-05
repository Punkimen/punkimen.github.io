export const setStyle = (el, animProps) => {
    for (let prop in animProps) {
        const capitalize = prop.charAt(0).toUpperCase() + prop.slice(1);
        if (capitalize === "Delay") {
            el.style.transitionDelay = `${el.dataset.delay}s`;
        }
        if (capitalize === "Duration") {
            el.dataset.duration;
            el.style.transitionDuration = `${el.dataset.duration}s`;
        }
    }
};
