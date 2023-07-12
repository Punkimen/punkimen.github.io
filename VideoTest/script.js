gsap.registerPlugin(ScrollTrigger);

const video = document.querySelector(".video-background");
let src = video?.currentSrc || video?.src;

let tl = gsap.timeline({
    defaults: {duration: 1},
    scrollTrigger: {
        trigger: video,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (e) => {
            const progress = e.progress.toFixed(2)
            const duration = video.duration.toFixed(2)
            video.currentTime = duration * progress
            console.log(e.progress, duration * progress)
        }
    }
});

