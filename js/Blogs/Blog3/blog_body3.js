export function blog_body3(){
    
/* ===================== HEADER LOAD SEQUENCE ===================== */
      const coverPath = document.getElementById("coverPath");
      const coverLen = coverPath.getTotalLength();
      gsap.set(coverPath, {
        strokeDasharray: coverLen,
        strokeDashoffset: coverLen,
      });

      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .from("#siteNav", { yPercent: -100, duration: 0.5 })
        .from(".back-link", { opacity: 0, y: 8, duration: 0.4 }, 0.1)
        .from(
          ".article-header .eyebrow",
          { opacity: 0, y: 10, duration: 0.5 },
          0.18,
        )
        .from(".article-header h1", { opacity: 0, y: 22, duration: 0.7 }, 0.28)
        .from(".article-dek", { opacity: 0, y: 16, duration: 0.6 }, 0.42)
        .from(".byline", { opacity: 0, y: 12, duration: 0.5 }, 0.55)
        .from(".cover-panel", { opacity: 0, y: 20, duration: 0.6 }, 0.55)
        .to(
          coverPath,
          { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut" },
          0.8,
        );

      /* ===================== READING PROGRESS (whole document) ===================== */
      gsap.to("#progressFill", {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });

      /* ===================== TOC PROGRESS (article body only) ===================== */
      gsap.to("#tocProgress", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: "#articleBody",
          start: "top center",
          end: "bottom center",
          scrub: 0.3,
        },
      });

      /* ===================== TOC ACTIVE SECTION ===================== */
      const tocLinks = document.querySelectorAll("[data-toc]");
      document.querySelectorAll(".prose h2").forEach((heading, i) => {
        ScrollTrigger.create({
          trigger: heading,
          start: "top 40%",
          end: "bottom 40%",
          onEnter: () => setActiveToc(i),
          onEnterBack: () => setActiveToc(i),
        });
      });
      function setActiveToc(i) {
        tocLinks.forEach((l, idx) =>
          l.classList.toggle("is-active", idx === i),
        );
      }

      tocLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const target = document.querySelector(link.getAttribute("href"));
          if (target)
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });

      (function(){

  // ---- Reading progress bar ----
  const progressFill = document.getElementById("progressFill");
  function updateProgress() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    progressFill.style.width = pct + "%";
  }

  // ---- TOC scroll spy + stepped progress fill ----
  const sections = Array.from(document.querySelectorAll("article > section[id]"));
  const tocItems = Array.from(document.querySelectorAll(".toc-item"));
  const tocProgress = document.getElementById("tocProgress");

  tocItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(item.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  function updateToc() {
    if (!sections.length) return;
    const centerY = window.innerHeight * 0.35;
    let activeIndex = 0;
    let fraction = 0;
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top <= centerY) {
        activeIndex = i;
        fraction = Math.max(0, Math.min(1, (centerY - rect.top) / rect.height));
      }
    }
    tocItems.forEach((item, i) => item.classList.toggle("is-active", i === activeIndex));
    const total = sections.length - 1;
    const pct = total > 0 ? ((activeIndex + fraction) / total) * 100 : 0;
    tocProgress.style.height = Math.max(0, Math.min(100, pct)) + "%";
  }

  // ---- One-time fade-up reveal ----
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  // ---- Count-up stat numbers ----
  const counters = document.querySelectorAll(".count");
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || "";
      const duration = 900;
      const start = performance.now();
      function tick(now) {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.4 });
  counters.forEach(el => counterObserver.observe(el));

  // ---- Bar chart fill ----
  const bars = document.querySelectorAll(".bar-fill");
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.target + "%";
        barObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  bars.forEach(el => barObserver.observe(el));

  // ---- Donut chart fill (18% signal) ----
  const donut = document.getElementById("donutFill");
  const donutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const circumference = 339.3;
        const signalPct = 0.18;
        entry.target.style.strokeDashoffset = circumference * (1 - signalPct);
        donutObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  if (donut) donutObserver.observe(donut);

  // ---- Cover chart area fade-in flag ----
  const coverChart = document.getElementById("coverChart");
  setTimeout(() => coverChart.classList.add("in-view"), 100);

  let ticking = false;
  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateProgress();
        updateToc();
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
})();

      /* ===================== RELATED + SUBSCRIBE ===================== */
      gsap.from(".post-card", {
        opacity: 0,
        y: 26,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: "#relatedGrid", start: "top 85%" },
      });
      gsap.from(".subscribe-panel", {
        opacity: 0,
        y: 22,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: ".subscribe-panel", start: "top 88%" },
      });
}
