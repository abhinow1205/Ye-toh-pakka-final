export function sec2_home() {

  gsap.timeline({ scrollTrigger: { trigger: '#sh2Header', start: 'top 82%' } })
    .to('.sh2-eyebrow', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)' })
    .to('.sh2-headline', { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.inOut' }, '-=0.15')
    .to('.sh2-underline', { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
    .to('.sh2-sub', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.25');

  // 2. Responsive ScrollTrigger Setup for Cards & Pinning
  const mm = gsap.matchMedia();

  // DESKTOP LAYOUT
  mm.add("(min-width: 769px)", () => {
    const cards = gsap.utils.toArray(".card");

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
    const cards = gsap.utils.toArray(".card");

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