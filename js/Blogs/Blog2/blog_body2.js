export function blog_body2(){
    
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
