export function sec2_sol1(){
        /* ===================== PULSE SPINE DRAW ===================== */
    gsap.to('#pulseLine', {
      scaleY: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '#railWrapper',
        start: 'top 65%',
        end: 'bottom 80%',
        scrub: 0.6
      }
    });

    /* ===================== RAIL NODE ACTIVATION ===================== */
    document.querySelectorAll('[data-rail]').forEach((section) => {
      const node = section.querySelector('.rail-node');
      ScrollTrigger.create({
        trigger: section,
        start: 'top 70%',
        end: 'bottom 30%',
        onEnter: () => node.classList.add('is-active'),
        onEnterBack: () => node.classList.add('is-active'),
        onLeave: () => node.classList.remove('is-active'),
        onLeaveBack: () => node.classList.remove('is-active'),
      });

      gsap.from(section.querySelector('.section-inner') || section.children, {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 78%' }
      });
    });

    /* ===================== FEATURE CARD REVEAL ===================== */
    gsap.from('.feature-card', {
      opacity: 0,
      y: 28,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: { trigger: '.feature-grid', start: 'top 82%' }
    });

    /* ===================== PROCESS CONNECTOR + STEPS ===================== */
    gsap.to('#processFill', {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '#processGrid',
        start: 'top 70%',
        end: 'bottom 60%',
        scrub: 0.6
      }
    });

    document.querySelectorAll('[data-step]').forEach((step, i) => {
      ScrollTrigger.create({
        trigger: '#processGrid',
        start: `top+=${i * 140} 75%`,
        onEnter: () => step.classList.add('is-active'),
        onEnterBack: () => step.classList.add('is-active'),
      });
      gsap.from(step, {
        opacity: 0,
        y: 20,
        duration: 0.55,
        ease: 'power2.out',
        scrollTrigger: { trigger: '#processGrid', start: 'top 78%' },
        delay: i * 0.12
      });
    });

    /* ===================== STAT COUNTERS ===================== */
    document.querySelectorAll('[data-count-to]').forEach((el) => {
      const target = parseFloat(el.dataset.countTo);
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      const suffix = el.dataset.suffix || '';
      const counter = { val: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(counter, {
            val: target,
            duration: 1.4,
            ease: 'power2.out',
            onUpdate: () => { el.textContent = counter.val.toFixed(decimals) + suffix; }
          });
        }
      });
    });

    /* ===================== TESTIMONIAL + STAT CARDS ===================== */
    gsap.from('.stat-card', {
      opacity: 0, y: 24, duration: 0.6, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: '.stats-grid', start: 'top 82%' }
    });

    gsap.from('.testimonial-card', {
      opacity: 0, y: 24, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: '.testimonial-card', start: 'top 85%' }
    });
}
