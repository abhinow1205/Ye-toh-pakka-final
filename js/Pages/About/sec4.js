export function about_sec4(){
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

    gsap.timeline({ scrollTrigger: { trigger: '#sh4Header', start: 'top 82%' } })
    .to('.sh4-eyebrow', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)' })
    .to('.sh4-headline', { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.inOut' }, '-=0.15')
    .to('.sh4-underline', { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
    .to('.sh4-sub', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.25');

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
}
