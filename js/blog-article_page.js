      // Initialize Lucide Icons
      lucide.createIcons();

      // GSAP ScrollTrigger Setup
      gsap.registerPlugin(ScrollTrigger);

      // 1. Progress Bar
      gsap.to("#progressBar", {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2,
        },
      });

      // 2. Entrance Animation
      gsap
        .timeline()
        .from(".status-badge", { opacity: 0, y: 15, duration: 0.6 })
        .from(".article-title", { opacity: 0, y: 20, duration: 0.8 }, "-=0.3")
        .from(".hero-meta", { opacity: 0, y: 15, duration: 0.6 }, "-=0.4");

      // 3. Scroll Reveal for Content
      gsap.utils.toArray(".content-body > *").forEach((element) => {
        gsap.from(element, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // 4. Active Sidebar Navigation Update
      const sections = document.querySelectorAll(".content-body h2");
      const navLinks = document.querySelectorAll(".toc-link");

      window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
          }
        });
      });