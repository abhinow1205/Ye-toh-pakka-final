/* ===================== 12. Breathing spacing ===================== */
gsap.to('#breatheText', {
  letterSpacing: '0.06em',
  opacity: 1,
  duration: 1.4,
  ease: 'power2.out',
  scrollTrigger: { trigger: '#breatheText', start: 'top 82%' }
});