gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".sc_image",
        toggleActions: "restart none none none",
        start: "top 120%",
        end: "bottom",
        scrub: true,
        markers: true
    }
}); 

tl.to(".sc_image", { opacity: 1, duration: 1 })
  .to(".sc_image", { opacity: 0, duration: 1 },0.5);
