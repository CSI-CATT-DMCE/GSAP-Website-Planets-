gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    //snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  },
});
//parallax instance for each scroll page
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

var mercury = document.getElementById("mercury");
var parallaxInstance = new Parallax(mercury);

var venus = document.getElementById("venus");
var parallaxInstance = new Parallax(venus);

var earth = document.getElementById("earth");
var parallaxInstance = new Parallax(earth);

var mars = document.getElementById("mars");
var parallaxInstance = new Parallax(mars);

var jupiter = document.getElementById("jupiter");
var parallaxInstance = new Parallax(jupiter);

var saturn = document.getElementById("saturn");
var parallaxInstance = new Parallax(saturn);



// arrow animations

let arrow = document.querySelector(".arrow");

if (arrow) {
  gsap.to(arrow, { y: 12, ease: "power1.inOut", repeat: -1, yoyo: true });
}
