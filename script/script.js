gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".title-black",{y:"-20%", x:"-50%"},{y:"-125%", duration: 2.5, ease: "power1.inOut",scrollTrigger: {
    trigger: ".rond",
    toggleActions: "restart none none reverse",
    start:"0",
    end:"bottom",
}})

gsap.fromTo(".no1", {opacity:0, y:"-20%", x:"-50%"}, {opacity:1, y:"-90%", duration: 2.5, ease: "power1.inOut", scrollTrigger: {
    trigger: ".rond",
    toggleActions: "restart none none reverse",
    start:"0",
    end:"bottom",
}})
gsap.fromTo(".no2", {opacity:0, y:"-20%", x:"-50%"}, {opacity:1, y:"-55%", duration: 2.5, ease: "power1.inOut",scrollTrigger: {
    trigger: ".rond",
    toggleActions: "restart none none reverse",
    start:"0",
    end:"bottom",
}})
gsap.fromTo(".no3", {opacity:0, y:"-20%", x:"-50%"}, {opacity:1, y:"-20%", duration: 2.5, ease: "power1.inOut",scrollTrigger: {
    trigger: ".rond",
    toggleActions: "restart none none reverse",
    start:"0",
    end:"bottom",
}})

gsap.fromTo(".no4", {opacity:0, y:"-20%", x:"-50%"}, {opacity:1, y:"15%", duration: 2.5, ease: "power1.inOut",scrollTrigger: {
    trigger: ".rond",
    toggleActions: "restart none none reverse",
    start:"0",
    end:"bottom",
}})

gsap.fromTo(".no5", {opacity:0, y:"-20%", x:"-50%"}, {opacity:1, y:"78", duration: 2.5, ease: "power1.inOut",scrollTrigger: {
    trigger: ".rond",
    toggleActions: "restart none none reverse",
    start:"0",
    end:"bottom",
}})

gsap.fromTo(".prenom-nom", {opacity:0, x:"58%"},{opacity:1,x:"59%", duration:1, ease:"power1.inOut",scrollTrigger: {
    trigger: ".rond",
    toggleActions: "restart none none reverse",
    start:"8%",
    end:"bottom",
}})