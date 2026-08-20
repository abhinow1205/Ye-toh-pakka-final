export function sec1_bp(){
        /* ===================== HERO LOAD SEQUENCE ===================== */
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTl
      .from("#siteNav", { yPercent: -100, duration: 0.5 })
      .from(".hero-section .eyebrow", { opacity: 0, y: 10, duration: 0.5 }, 0.15)
      .from(".hero-section h1", { opacity: 0, y: 22, duration: 0.7 }, 0.25)
      .from(".hero-sub", { opacity: 0, y: 16, duration: 0.6 }, 0.4)
      .from(".filter-pill", { opacity: 0, y: 12, duration: 0.5, stagger: 0.06 }, 0.52)
      .from("#featuredCard", { opacity: 0, y: 26, scale: 0.97, duration: 0.7 }, 0.3);
}
