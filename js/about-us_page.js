(function () {
  gsap.registerPlugin(ScrollTrigger);

  /* ===================== Hero ===================== */
  const auHeroHeading = document.getElementById('auHeroHeading');
  const auHeroHtml = auHeroHeading.innerHTML;
  // Split into characters while preserving the <em> tag for the highlighted word
  const auTemp = document.createElement('div');
  auTemp.innerHTML = auHeroHtml;

  function splitNodeChars(node) {
    node.childNodes.forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        child.textContent.split('').forEach((ch) => {
          if (ch === ' ') {
            frag.appendChild(document.createTextNode(' '));
          } else {
            const span = document.createElement('span');
            span.className = 'au-char';
            span.textContent = ch;
            frag.appendChild(span);
          }
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        splitNodeChars(child);
      }
    });
  }
  splitNodeChars(auTemp);
  auHeroHeading.innerHTML = auTemp.innerHTML;

  gsap.set('.au-hero .au-char', { yPercent: 120, opacity: 0 });

  const auHeroTl = gsap.timeline({ delay: 0.2 });
  auHeroTl
    .to('#auHeroEyebrow', { opacity: 1, duration: 0.6, ease: 'power2.out' })
    .to('.au-hero .au-char', { yPercent: 0, opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.014 }, '-=0.2')
    .to('#auHeroSub', { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.4');

  gsap.to('.au-blob-1', { y: 40, x: -20, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.to('.au-blob-2', { y: -30, x: 30, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' });

  /* ===================== Manifesto (pinned zoom) ===================== */
  gsap.fromTo('#auManifestoText',
    { scale: 0.55, opacity: 0.3 },
    {
      scale: 1,
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '#auManifestoSection',
        start: 'top top',
        end: '+=90%',
        scrub: true,
        pin: true
      }
    }
  );

  /* ===================== Stats counters ===================== */
  document.querySelectorAll('.au-stat-num').forEach((el) => {
    const target = parseFloat(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const decimals = target % 1 !== 0 ? 2 : 0;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        const counter = { val: 0 };
        gsap.to(counter, {
          val: target,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = counter.val.toFixed(decimals) + suffix;
          }
        });
      }
    });
  });

  /* ===================== Timeline ===================== */
  gsap.to('#auTimelineFill', {
    height: '100%',
    ease: 'none',
    scrollTrigger: {
      trigger: '#auTimeline',
      start: 'top 60%',
      end: 'bottom 70%',
      scrub: true
    }
  });

  document.querySelectorAll('.au-tl-item').forEach((item) => {
    const card = item.querySelector('.au-tl-card');
    const dot = item.querySelector('.au-tl-dot');

    ScrollTrigger.create({
      trigger: item,
      start: 'top 78%',
      once: true,
      onEnter: () => {
        gsap.to(card, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' });
        gsap.to(dot, { scale: 1, duration: 0.5, ease: 'back.out(2)' });
      }
    });
  });

  /* ===================== Values: staggered reveal + tilt ===================== */
  ScrollTrigger.batch('.au-value-card', {
    start: 'top 88%',
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1 }),
    once: true
  });
  gsap.set('.au-value-card', { opacity: 0, y: 30 });

  document.querySelectorAll('.au-value-card').forEach((card) => {
    const rotateX = gsap.quickTo(card, 'rotateX', { duration: 0.5, ease: 'power3' });
    const rotateY = gsap.quickTo(card, 'rotateY', { duration: 0.5, ease: 'power3' });
    const glare = card.querySelector('.au-glare');

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

  /* ===================== Team: staggered reveal ===================== */
  ScrollTrigger.batch('.au-team-card', {
    start: 'top 88%',
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08 }),
    once: true
  });
  gsap.set('.au-team-card', { y: 24 });

  /* ===================== Culture: horizontal pin ===================== */
  const auCultureTrack = document.getElementById('auCultureTrack');
  gsap.to(auCultureTrack, {
    x: () => -(auCultureTrack.scrollWidth - window.innerWidth + 100),
    ease: 'none',
    scrollTrigger: {
      trigger: '#auCultureSection',
      start: 'top top',
      end: () => `+=${auCultureTrack.scrollWidth - window.innerWidth + 100}`,
      scrub: 1,
      pin: true,
      invalidateOnRefresh: true
    }
  });

  /* ===================== CTA: magnetic button ===================== */
  const auCtaBtn = document.getElementById('auCtaBtn');
  const auCtaX = gsap.quickTo(auCtaBtn, 'x', { duration: 0.4, ease: 'power3' });
  const auCtaY = gsap.quickTo(auCtaBtn, 'y', { duration: 0.4, ease: 'power3' });

  auCtaBtn.addEventListener('mousemove', (e) => {
    const rect = auCtaBtn.getBoundingClientRect();
    auCtaX((e.clientX - rect.left - rect.width / 2) * 0.35);
    auCtaY((e.clientY - rect.top - rect.height / 2) * 0.45);
  });

  auCtaBtn.addEventListener('mouseleave', () => {
    auCtaX(0);
    auCtaY(0);
  });

  window.addEventListener('load', () => ScrollTrigger.refresh());
})();