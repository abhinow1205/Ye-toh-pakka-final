export function sec6_about(){

  gsap.timeline({ scrollTrigger: { trigger: '#sh6Header', start: 'top 82%' } })
    .to('.sh6-eyebrow', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)' })
    .to('.sh6-headline', { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.inOut' }, '-=0.15')
    .to('.sh6-underline', { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
    .to('.sh6-sub', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.25');
      /* ===================== Team: staggered reveal ===================== */
  ScrollTrigger.batch('.au-team-card', {
    start: 'top 88%',
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08 }),
    once: true
  });
  gsap.set('.au-team-card', { y: 24 });
}
