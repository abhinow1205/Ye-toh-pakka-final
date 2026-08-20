export function sec3_about(){

  gsap.timeline({ scrollTrigger: { trigger: '#sh3Header', start: 'top 82%' } })
    .to('.sh3-eyebrow', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)' })
    .to('.sh3-headline', { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.inOut' }, '-=0.15')
    .to('.sh3-underline', { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
    .to('.sh3-sub', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.25');

      /* ===================== Stats counters ===================== */
  document.querySelectorAll('.au-stat-num').forEach((el) => {
    const target = parseFloat(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const decimals = target % 1 !== 0 ? 2 : 0;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        const counter = { val: 0 };
        gsap.to(counter, {
          val: target,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = counter.val.toFixed(decimals) + suffix;
          }
        });
      }
    });
  });
}
