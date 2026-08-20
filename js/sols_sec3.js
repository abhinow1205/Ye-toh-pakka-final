export function sec3_sols(){

  gsap.timeline({ scrollTrigger: { trigger: '#sh3Header', start: 'top 82%' } })
    .to('.sh3-eyebrow', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)' })
    .to('.sh3-headline', { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.inOut' }, '-=0.15')
    .to('.sh3-underline', { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
    .to('.sh3-sub', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.25');
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
