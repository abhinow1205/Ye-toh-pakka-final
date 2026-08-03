gsap.registerPlugin(ScrollTrigger, Draggable);

/* ===================== Circular progress rings ===================== */
document.querySelectorAll('.ring-item').forEach((item) => {
  const circle = item.querySelector('.progress');
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const percent = parseFloat(item.dataset.percent);
  const numEl = item.querySelector('.ring-num');

  gsap.set(circle, { strokeDasharray: circumference, strokeDashoffset: circumference });

  ScrollTrigger.create({
    trigger: item,
    start: 'top 50%',
    once: true,
    onEnter: () => {
      gsap.to(circle, {
        strokeDashoffset: circumference - (percent / 100) * circumference,
        duration: 1.4,
        ease: 'power2.out'
      });
      const counter = { val: 0 };
      gsap.to(counter, {
        val: percent,
        duration: 1.4,
        ease: 'power2.out',
        onUpdate: () => { numEl.textContent = Math.round(counter.val) + '%'; }
      });
    }
  });
});