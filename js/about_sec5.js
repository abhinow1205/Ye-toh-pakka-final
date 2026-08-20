export function sec5_about(){

  gsap.timeline({ scrollTrigger: { trigger: '#sh5Header', start: 'top 82%' } })
    .to('.sh5-eyebrow', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)' })
    .to('.sh5-headline', { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.inOut' }, '-=0.15')
    .to('.sh5-underline', { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
    .to('.sh5-sub', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.25');

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
}
