import { gsap } from "gsap";

gsap.from(".titre", { duration: 1, scale: 0.01, ease: "bounce", y: -100, stagger: 0.3, onComplete: () => {
    gsap.to(".global", { duration: 1, scale: 0.01, y: 200 });
 } });


  