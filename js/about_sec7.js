export function sec7_about(){
  gsap.timeline({ scrollTrigger: { trigger: '#sh7Header', start: 'top 82%' } })
    .to('.sh7-eyebrow', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)' })
    .to('.sh7-headline', { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.inOut' }, '-=0.15')
    .to('.sh7-underline', { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
    .to('.sh7-sub', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.25');
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
}
