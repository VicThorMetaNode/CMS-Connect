import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section_1 = document.getElementById("vertical");
const col_left = document.querySelector(".col_left");
const timeline = gsap.timeline({ paused: true });

timeline.fromTo(
  col_left,
  { y: 0 },
  { y: "170vh", duration: 1, ease: "none" },
  0
);

const scroll_1 = ScrollTrigger.create({
  animation: timeline,
  trigger: section_1,
  start: "top top",
  end: "bottom center",
  scrub: true,
});

scroll_1.onEnter(() => {
  console.log("Entered the trigger");
});

scroll_1.onLeave(() => {
  console.log("Left the trigger");
});
