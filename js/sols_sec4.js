export function sec4_sols(){

  gsap.timeline({ scrollTrigger: { trigger: '#sh4Header', start: 'top 82%' } })
    .to('.sh4-eyebrow', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)' })
    .to('.sh4-headline', { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.inOut' }, '-=0.15')
    .to('.sh4-underline', { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
    .to('.sh4-sub', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.25');
      /* ===================== Services grid: reveal + tilt ===================== */
  gsap.set('.sv-service-card', { opacity: 0, y: 30 });
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
}
