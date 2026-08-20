export function sec3_case_study_page(){
              // ==========================================
      // 3. GSAP SCROLLTRIGGER ANIMATIONS
      // ==========================================

      // Universal Fade Up Animation for Cards & Headings
      gsap.utils.toArray(".fade-up").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      // Dashboard Mockup Bars Fill
      gsap.to(".chart-bar", {
        height: (i, target) => target.style.getPropertyValue("--h"),
        duration: 1.5,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".dashboard-mockup",
          start: "top 75%",
        },
      });

      // Vertical Approach Timeline Progress Line
      gsap.to("#timelineProgress", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".approach-timeline",
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        },
      });

      // Timeline Items Active Toggle
      gsap.utils.toArray(".timeline-item").forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 65%",
          onEnter: () => item.classList.add("active"),
          onLeaveBack: () => item.classList.remove("active"),
        });
      });

      // Business Impact Counters Animation
      gsap.utils.toArray(".counter-value").forEach((counter) => {
        const target = parseFloat(counter.getAttribute("data-target"));
        const suffix = counter.getAttribute("data-suffix") || "";

        gsap.to(counter, {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 85%",
          },
          onUpdate: function () {
            counter.innerText = Math.ceil(counter.innerText) + suffix;
          },
        });
      });

      // Horizontal Roadmap Line Animation
      gsap.to("#roadmapProgressBar", {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".roadmap-wrapper",
          start: "top 70%",
          end: "bottom 90%",
          scrub: true,
        },
      });


}
