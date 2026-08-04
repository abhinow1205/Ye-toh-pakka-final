(function () {
  gsap.registerPlugin(ScrollTrigger);

  /* ===================== Hero ===================== */
  const svHeroHeading = document.getElementById('svHeroHeading');
  const svHeroText = svHeroHeading.textContent;
  svHeroHeading.innerHTML = svHeroText.split('').map((ch) =>
    ch === ' ' ? ' ' : `<span class="sv-char">${ch}</span>`
  ).join('');

  gsap.set('.sv-hero .sv-char', { yPercent: 120, opacity: 0 });

  const svHeroTl = gsap.timeline({ delay: 0.2 });
  svHeroTl
    .to('#svHeroEyebrow', { opacity: 1, duration: 0.6, ease: 'power2.out' })
    .to('.sv-hero .sv-char', { yPercent: 0, opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.012 }, '-=0.2')
    .to('#svHeroSub', { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.4');

  gsap.to('.sv-blob-1', { y: 40, x: -20, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.to('.sv-blob-2', { y: -30, x: 30, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' });

  /* ===================== Services grid: reveal + tilt ===================== */
  gsap.set('.sv-service-card', { opacity: 0, y: 30 });

  ScrollTrigger.batch('.sv-service-card', {
    start: 'top 88%',
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1 }),
    once: true
  });

  document.querySelectorAll('.sv-service-card').forEach((card) => {
    const rotateX = gsap.quickTo(card, 'rotateX', { duration: 0.5, ease: 'power3' });
    const rotateY = gsap.quickTo(card, 'rotateY', { duration: 0.5, ease: 'power3' });
    const glare = card.querySelector('.sv-glare');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;
      rotateY((relX - 0.5) * 14);
      rotateX(-(relY - 0.5) * 14);
      glare.style.setProperty('--gx', (relX * 100) + '%');
      glare.style.setProperty('--gy', (relY * 100) + '%');
    });

    card.addEventListener('mouseleave', () => {
      rotateX(0);
      rotateY(0);
    });
  });

  /* ===================== Deep-dive 1: node chain ===================== */
  ScrollTrigger.create({
    trigger: '#svVisual1',
    start: 'top 75%',
    once: true,
    onEnter: () => {
      const nodeTl = gsap.timeline();
      nodeTl
        .to('#svNode1', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
        .to('#svFill1', { height: '100%', duration: 0.5, ease: 'none' })
        .to('#svNode2', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.15')
        .to('#svFill2', { height: '100%', duration: 0.5, ease: 'none' })
        .to('#svNode3', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.15');
    }
  });

  /* ===================== Deep-dive 2: orbit hub ===================== */
  const svOrbitChips = document.querySelectorAll('#svOrbitVisual .sv-orbit-chip');
  const svOrbitRadius = 115;
  const svOrbitCount = svOrbitChips.length;

  gsap.set('#svOrbitVisual', { opacity: 0, scale: 0.85 });
  gsap.set(svOrbitChips, { opacity: 0 });

  ScrollTrigger.create({
    trigger: '#svVisual2',
    start: 'top 75%',
    once: true,
    onEnter: () => {
      gsap.to('#svOrbitVisual', { opacity: 1, scale: 1, duration: 0.7, ease: 'power3.out' });
      gsap.to(svOrbitChips, { opacity: 1, duration: 0.6, stagger: 0.08, delay: 0.2 });

      svOrbitChips.forEach((chip, i) => {
        const state = { angle: (Math.PI * 2 * i) / svOrbitCount };
        gsap.to(state, {
          angle: state.angle + Math.PI * 2,
          duration: 16,
          repeat: -1,
          ease: 'none',
          onUpdate: () => {
            const x = Math.cos(state.angle) * svOrbitRadius;
            const y = Math.sin(state.angle) * svOrbitRadius;
            gsap.set(chip, { x, y });
          }
        });
      });
    }
  });

  /* ===================== Deep-dive 3: analytics bars ===================== */
  ScrollTrigger.create({
    trigger: '#svVisual3',
    start: 'top 75%',
    once: true,
    onEnter: () => {
      document.querySelectorAll('#svBarsVisual .sv-bar').forEach((bar, i) => {
        gsap.to(bar, {
          height: bar.getAttribute('data-height'),
          duration: 1,
          delay: i * 0.1,
          ease: 'power3.out'
        });
      });
    }
  });

  /* ===================== Process: horizontal pin ===================== */
  const svProcessTrack = document.getElementById('svProcessTrack');
  gsap.to(svProcessTrack, {
    x: () => -(svProcessTrack.scrollWidth - window.innerWidth + 100),
    ease: 'none',
    scrollTrigger: {
      trigger: '#svProcessSection',
      start: 'top top',
      end: () => `+=${svProcessTrack.scrollWidth - window.innerWidth + 100}`,
      scrub: 1,
      pin: true,
      invalidateOnRefresh: true
    }
  });

  /* ===================== Integrations marquee ===================== */
  const svTrack1 = document.getElementById('svMarqueeTrack1');
  const svTrack2 = document.getElementById('svMarqueeTrack2');

  gsap.to(svTrack1, { x: -(svTrack1.scrollWidth / 2), duration: 20, ease: 'none', repeat: -1 });
  gsap.fromTo(svTrack2, { x: -(svTrack2.scrollWidth / 2) }, { x: 0, duration: 22, ease: 'none', repeat: -1 });

  /* ===================== Quote: pinned zoom ===================== */
  gsap.fromTo('#svQuoteText',
    { scale: 0.55, opacity: 0.3 },
    {
      scale: 1,
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '#svQuoteSection',
        start: 'top top',
        end: '+=90%',
        scrub: true,
        pin: true
      }
    }
  );

  /* ===================== CTA: magnetic buttons ===================== */
  document.querySelectorAll('.sv-btn').forEach((btn) => {
    const xTo = gsap.quickTo(btn, 'x', { duration: 0.4, ease: 'power3' });
    const yTo = gsap.quickTo(btn, 'y', { duration: 0.4, ease: 'power3' });

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      xTo((e.clientX - rect.left - rect.width / 2) * 0.35);
      yTo((e.clientY - rect.top - rect.height / 2) * 0.45);
    });

    btn.addEventListener('mouseleave', () => {
      xTo(0);
      yTo(0);
    });
  });

  window.addEventListener('load', () => ScrollTrigger.refresh());
})();