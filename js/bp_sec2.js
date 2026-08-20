export function sec2_bp(){

  gsap.timeline({ scrollTrigger: { trigger: '#sh2Header', start: 'top 82%' } })
    .to('.sh2-eyebrow', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)' })
    .to('.sh2-headline', { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.inOut' }, '-=0.15')
    .to('.sh2-underline', { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
    .to('.sh2-sub', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.25');
        /* ===================== PULSE SPINE DRAW + RAIL NODES ===================== */
    gsap.to("#pulseLine", {
      scaleY: 1, ease: "none",
      scrollTrigger: { trigger: "#railWrapper", start: "top 65%", end: "bottom 80%", scrub: 0.6 }
    });

    document.querySelectorAll("[data-rail]").forEach((section) => {
      const node = section.querySelector(".rail-node");
      ScrollTrigger.create({
        trigger: section, start: "top 70%", end: "bottom 30%",
        onEnter: () => node.classList.add("is-active"),
        onEnterBack: () => node.classList.add("is-active"),
        onLeave: () => node.classList.remove("is-active"),
        onLeaveBack: () => node.classList.remove("is-active"),
      });
      gsap.from(section.querySelector(".section-inner"), {
        opacity: 0, y: 24, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: section, start: "top 78%" }
      });
    });

    /* ===================== POST CARD REVEAL ===================== */
    gsap.from(".post-card", {
      opacity: 0, y: 28, duration: 0.6, stagger: 0.1, ease: "power2.out",
      scrollTrigger: { trigger: "#postGrid", start: "top 82%" }
    });

    /* ===================== TOPIC CHIP REVEAL ===================== */
    gsap.from(".topic-chip", {
      opacity: 0, y: 16, scale: 0.92, duration: 0.5, stagger: 0.05, ease: "back.out(1.6)",
      scrollTrigger: { trigger: ".topic-cloud", start: "top 85%" }
    });

    /* ===================== SUBSCRIBE PANEL + COUNTER ===================== */
    gsap.from(".subscribe-panel", {
      opacity: 0, y: 24, duration: 0.65, ease: "power2.out",
      scrollTrigger: { trigger: ".subscribe-panel", start: "top 85%" }
    });

    document.querySelectorAll("[data-count-to]").forEach((el) => {
      const target = parseFloat(el.dataset.countTo);
      const counter = { val: 0 };
      ScrollTrigger.create({
        trigger: el, start: "top 88%", once: true,
        onEnter: () => gsap.to(counter, {
          val: target, duration: 1.4, ease: "power2.out",
          onUpdate: () => { el.textContent = Math.round(counter.val).toLocaleString(); }
        })
      });
    });

    /* ===================== FILTER INTERACTION ===================== */
    const filterPills = document.querySelectorAll(".filter-pill");
    const postCards = document.querySelectorAll(".post-card");

    filterPills.forEach((pill) => {
      pill.addEventListener("click", () => {
        filterPills.forEach((p) => p.classList.remove("is-active"));
        pill.classList.add("is-active");
        const filter = pill.dataset.filter;

        postCards.forEach((card) => {
          const match = filter === "all" || card.dataset.category === filter;
          gsap.to(card, {
            opacity: match ? 1 : 0,
            scale: match ? 1 : 0.92,
            duration: 0.35,
            ease: "power2.out",
            onStart: () => { if (match) card.style.display = ""; },
            onComplete: () => { if (!match) card.style.display = "none"; }
          });
        });
      });
    });
}
