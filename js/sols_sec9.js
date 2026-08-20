export function sec9_sols(){

  gsap.timeline({ scrollTrigger: { trigger: '#sh10Header', start: 'top 82%' } })
    .to('.sh10-eyebrow', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)' })
    .to('.sh10-headline', { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.inOut' }, '-=0.15')
    .to('.sh10-underline', { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
    .to('.sh10-sub', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.25');
    /* ===================== 12. Breathing spacing ===================== */
gsap.to('#breatheText', {
  letterSpacing: '0.06em',
  opacity: 1,
  duration: 1.4,
  ease: 'power2.out',
  scrollTrigger: { trigger: '#breatheText', start: 'top 82%' }
});
}
