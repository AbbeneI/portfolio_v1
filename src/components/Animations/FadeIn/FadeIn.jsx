import { gsap } from "gsap";


export default function fadeIn(target, vars) {
    return gsap.from(target, { opacity: 0, y: 20, duration: 0.6, ease: "power1", ...vars });
}