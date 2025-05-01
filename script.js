gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: "body",
  start: "top top",
  end: "bottom bottom",
  snap: {
    snapTo: 1 / (document.querySelectorAll(".section").length - 1), // snaps to each panel
    duration: 0.5, // smooth snap duration (in seconds)
    delay: 0.1,    // delay before snap occurs
    ease: "power1.inOut" // easing function
  },
  markers: true 
});
