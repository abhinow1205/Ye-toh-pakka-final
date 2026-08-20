export function sec5_sols(){

  gsap.timeline({ scrollTrigger: { trigger: '#sh5Header', start: 'top 82%' } })
    .to('.sh5-eyebrow', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)' })
    .to('.sh5-headline', { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.inOut' }, '-=0.15')
    .to('.sh5-underline', { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
    .to('.sh5-sub', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.25');
      /* ===================== Services grid: reveal + tilt ===================== */
  gsap.set('.sv-service-card', { opacity: 0, y: 30 });
      /* ===================== Deep-dive 3: analytics bars ===================== */
  ScrollTrigger.create({
    trigger: '#svVisual3',
    start: 'top 75%',
    once: true,
    onEnter: () => {
      document.querySelectorAll('#svBarsVisual .sv-bar').forEach((bar, i) => {
        gsap.to(bar, {
          height: bar.getAttribute('data-height'),
          duration: 1,
          delay: i * 0.1,
          ease: 'power3.out'
        });
      });
    }
  });
}
