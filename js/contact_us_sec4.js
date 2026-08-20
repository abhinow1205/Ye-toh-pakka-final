export function sec4_contact_us(){

  gsap.timeline({ scrollTrigger: { trigger: '#sh4Header', start: 'top 82%' } })
    .to('.sh4-eyebrow', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)' })
    .to('.sh4-headline', { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.inOut' }, '-=0.15')
    .to('.sh4-underline', { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
    .to('.sh4-sub', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.25');
      /* ===================== Services grid: reveal + tilt ===================== */
  gsap.set('.sv-service-card', { opacity: 0, y: 30 });
      /* ===================== Offices: staggered reveal + pulse dot ===================== */
  ScrollTrigger.batch('.cu-office-card', {
    start: 'top 88%',
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1 }),
    once: true
  });

  ScrollTrigger.create({
    trigger: '#cuPulseDot',
    start: 'top 90%',
    once: true,
    onEnter: () => {
      gsap.to('#cuPulseDot', {
        boxShadow: '0 0 0 8px rgba(205, 164, 94, 0)',
        duration: 1.6,
        repeat: -1,
        ease: 'power2.out'
      });
    }
  });
}
