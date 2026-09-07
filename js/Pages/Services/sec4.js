export function services_sec4(){
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
