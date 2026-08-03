/* ===================== 1. Curtain line reveal ===================== */
gsap.utils.toArray('.curtain-line h2').forEach((line) => {
  gsap.to(line, {
    y: '0%',
    duration: 1,
    ease: 'power4.out',
    scrollTrigger: { trigger: line, start: 'top 85%' }
  });
});



/* ===================== 1. Cards reveal ===================== */
gsap.from(".mat", {
  y: 300,
  opacity: 0,
  scale: 0.8,
  duration: 2,
  stagger: 0.25,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: "#sec-2",
    start: "top top",
    scrub: true,
    pin: true,
    pinSpacing: true,
  }
});