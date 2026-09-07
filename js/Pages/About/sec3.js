export function about_sec3(){

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
