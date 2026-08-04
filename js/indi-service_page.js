    /* ===================== HERO LOAD SEQUENCE ===================== */
    // build console bars
    const barVals = [30, 48, 40, 62, 55, 70, 60, 78, 68, 84];
    const barsWrap = document.getElementById('consoleBars');
    barVals.forEach((v) => {
      const bar = document.createElement('i');
      bar.style.height = '0%';
      bar.dataset.target = v;
      barsWrap.appendChild(bar);
    });

    const line = document.getElementById('consoleLine');
    const lineLength = line.getTotalLength();
    gsap.set(line, { strokeDasharray: lineLength, strokeDashoffset: lineLength });

    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .from('#siteNav', { yPercent: -100, duration: 0.5 })
      .from('.eyebrow', { opacity: 0, y: 10, duration: 0.5 }, 0.15)
      .from('.hero-h1', { opacity: 0, y: 22, duration: 0.7 }, 0.25)
      .from('.hero-sub', { opacity: 0, y: 16, duration: 0.6 }, 0.4)
      .from('.hero-actions .btn', { opacity: 0, y: 14, duration: 0.5, stagger: 0.08 }, 0.52)
      .from('.hero-meta span', { opacity: 0, y: 10, duration: 0.5, stagger: 0.06 }, 0.62)
      .from('#consoleCard', { opacity: 0, y: 26, scale: 0.97, duration: 0.7 }, 0.3)
      .to(line, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut' }, 0.7)
      .to('#consoleBars i', {
        height: (i, el) => el.dataset.target + '%',
        duration: 0.6,
        stagger: 0.04,
        ease: 'power2.out'
      }, 0.75);

    // ambient bar jitter + live counters, looping
    function ambientLoop() {
      gsap.to('#consoleBars i', {
        height: (i, el) => Math.max(18, Math.min(92, +el.dataset.target + gsap.utils.random(-14, 14))) + '%',
        duration: 1.4,
        ease: 'sine.inOut',
        stagger: { each: 0.05, from: 'random' },
        onComplete: ambientLoop
      });
    }
    gsap.delayedCall(1.6, ambientLoop);

    const activeEl = document.getElementById('readoutActive');
    const eventsEl = document.getElementById('readoutEvents');
    gsap.delayedCall(1.6, function tickReadouts() {
      const active = gsap.utils.random(1080, 1340, 1);
      const events = gsap.utils.random(15.6, 21.4, 0.1);
      activeEl.textContent = Math.round(active).toLocaleString();
      eventsEl.textContent = events.toFixed(1) + 'k';
      gsap.delayedCall(gsap.utils.random(2, 3.4), tickReadouts);
    });

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

    /* ===================== CTA REVEAL ===================== */
    gsap.from('.cta-inner > *', {
      opacity: 0, y: 22, duration: 0.6, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: '.cta-section', start: 'top 75%' }
    });