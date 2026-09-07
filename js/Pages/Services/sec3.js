export function services_sec3(){
      /* ===================== Services grid: reveal + tilt ===================== */
  gsap.set('.sv-service-card', { opacity: 0, y: 30 });
      /* ===================== Deep-dive 1: node chain ===================== */
  ScrollTrigger.create({
    trigger: '#svVisual1',
    start: 'top 75%',
    once: true,
    onEnter: () => {
      const nodeTl = gsap.timeline();
      nodeTl
        .to('#svNode1', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
        .to('#svFill1', { height: '100%', duration: 0.5, ease: 'none' })
        .to('#svNode2', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.15')
        .to('#svFill2', { height: '100%', duration: 0.5, ease: 'none' })
        .to('#svNode3', { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.15');
    }
  });
}
