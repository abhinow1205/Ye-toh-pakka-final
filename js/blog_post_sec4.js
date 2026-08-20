export function sec4_blog_post(){
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

}

