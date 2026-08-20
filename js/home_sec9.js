export function sec9_home(){
  /* ===================== Shared: section heading reveal ===================== */
  ['bl1', 'bl2', 'bl3', 'bl4'].forEach((prefix) => {
    const eyebrow = document.getElementById(prefix + 'Eyebrow');
    const heading = document.getElementById(prefix + 'Heading');
    if (!eyebrow || !heading) return;

    gsap.timeline({ scrollTrigger: { trigger: heading, start: 'top 85%' } })
      .to(eyebrow, { opacity: 1, duration: 0.5, ease: 'power2.out' })
      .to(heading, { opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3');
  });

  /* ===================================================================
     VARIANT 1 — Editorial grid: reveal + tilt/glare
  =================================================================== */
  ScrollTrigger.batch('#bl1Grid .bl1-card', {
    start: 'top 88%',
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.12 }),
    once: true
  });

  document.querySelectorAll('#bl1Grid .bl1-card').forEach((card) => {
    const rotateX = gsap.quickTo(card, 'rotateX', { duration: 0.5, ease: 'power3' });
    const rotateY = gsap.quickTo(card, 'rotateY', { duration: 0.5, ease: 'power3' });
    const glare = card.querySelector('.bl-glare');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;
      rotateY((relX - 0.5) * 10);
      rotateX(-(relY - 0.5) * 10);
      glare.style.setProperty('--gx', (relX * 100) + '%');
      glare.style.setProperty('--gy', (relY * 100) + '%');
    });

    card.addEventListener('mouseleave', () => { rotateX(0); rotateY(0); });
  });
}
