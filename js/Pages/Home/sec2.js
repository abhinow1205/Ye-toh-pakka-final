export function home_sec2() {

  // 2. Responsive ScrollTrigger Setup for Cards & Pinning
  const mm = gsap.matchMedia();

  // DESKTOP LAYOUT
  mm.add("(min-width: 769px)", () => {
    const cards = gsap.utils.toArray(".feature_card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#sec-2",
        start: "top top",
        end: "+=120%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    tl.from(cards, {
      y: 300,
      opacity: 0,
      stagger: 0.3,
      ease: "power2.out",
    });

    return () => {
      // Cleanup when switching media conditions
    };
  });

  // MOBILE LAYOUT
  mm.add("(max-width: 768px)", () => {
    const cards = gsap.utils.toArray(".feature_card");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#sec-2",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    tl.from(cards, {
      y: 200,
      opacity: 0,
      stagger: 0.4,
      ease: "power2.out",
    });

    return () => {};
  });
}