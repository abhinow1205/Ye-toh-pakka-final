export function sec2_contact_us(){
      /* ===================== Stats strip counters ===================== */
  document.querySelectorAll('.cu-stat-num').forEach((el) => {
    const target = parseFloat(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const decimals = target % 1 !== 0 ? 1 : 0;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        const counter = { val: 0 };
        gsap.to(counter, {
          val: target,
          duration: 1.4,
          ease: 'power2.out',
          onUpdate: () => { el.textContent = counter.val.toFixed(decimals) + suffix; }
        });
      }
    });
  });
}
