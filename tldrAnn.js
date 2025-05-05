gsap.registerPlugin(ScrollTrigger);

let typedInstance;

ScrollTrigger.create({
    trigger: "#section3",
    start: "top 80%",
    end: "top bottom",
    onEnter: () => {
        if (typedInstance) {
            typedInstance.destroy();
        }

        typedInstance = new Typed("#tldr-title", {
            strings: ['Why should I even care?'],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1000,
            loop: false
        });
    },

    onLeave: () => {
        if (typedInstance) {
            typedInstance.destroy();
        }
    }
});