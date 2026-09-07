export function blogs_sec2(){
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

    /* ===================== TOPIC CARD REVEAL ===================== */
    gsap.from(".topic-card", {
      opacity: 0, y: 16, scale: 0.94, duration: 0.5, stagger: 0.05, ease: "back.out(1.6)",
      scrollTrigger: { trigger: "#topicGrid", start: "top 85%" }
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

    /* ===================== FILTER SYSTEM (shared by hero pills + topic cards) ===================== */
    const filterPills = document.querySelectorAll(".filter-pill");
    const topicCards = document.querySelectorAll(".topic-card");
    const postCards = document.querySelectorAll(".post-card");
    const resultCountEl = document.getElementById("resultCount");
    const totalCountEl = document.getElementById("totalCount");
    const clearFilterLink = document.getElementById("clearFilterLink");
    const postGridEl = document.getElementById("postGrid");
    const noResultsEl = document.getElementById("noResults");

    // Populate live, accurate counts on each topic card from the actual post data —
    // no more hardcoded numbers that drift out of sync with the grid.
    topicCards.forEach((card) => {
      const cat = card.dataset.filter;
      const count = Array.from(postCards).filter((c) => c.dataset.category === cat).length;
      const countEl = card.querySelector(`[data-count-for="${cat}"]`);
      if (countEl) countEl.textContent = count;
    });
    if (totalCountEl) totalCountEl.textContent = postCards.length;

    // Updates active states, live counts, and the clear-filter/empty-state UI —
    // no animation here, so it's safe to call on page load without fighting
    // the scroll-triggered POST CARD REVEAL animation above.
    function setFilterState(filter) {
      filterPills.forEach((p) => p.classList.toggle("is-active", p.dataset.filter === filter));
      topicCards.forEach((c) => c.classList.toggle("is-active", c.dataset.filter === filter));

      let visible = 0;
      postCards.forEach((card) => {
        if (filter === "all" || card.dataset.category === filter) visible++;
      });

      if (resultCountEl) resultCountEl.textContent = visible;
      if (clearFilterLink) clearFilterLink.style.display = filter === "all" ? "none" : "inline";
      if (noResultsEl) noResultsEl.style.display = visible === 0 ? "block" : "none";
      return visible;
    }

    function applyFilter(filter, { scrollToGrid = false } = {}) {
      setFilterState(filter);

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

      if (scrollToGrid && postGridEl) {
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 84;
        const y = postGridEl.getBoundingClientRect().top + window.scrollY - navH - 24;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }

    filterPills.forEach((pill) => pill.addEventListener("click", () => applyFilter(pill.dataset.filter)));
    topicCards.forEach((card) => card.addEventListener("click", () => applyFilter(card.dataset.filter, { scrollToGrid: true })));
    if (clearFilterLink) {
      clearFilterLink.addEventListener("click", (e) => { e.preventDefault(); applyFilter("all"); });
    }

    // Initial state only — sets counts and active pills without animating,
    // so the scroll-triggered card entrance above still plays normally.
    setFilterState("all");
}