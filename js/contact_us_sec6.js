export function sec6_contact_us(){

  gsap.timeline({ scrollTrigger: { trigger: '#sh6Header', start: 'top 82%' } })
    .to('.sh6-eyebrow', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)' })
    .to('.sh6-headline', { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.inOut' }, '-=0.15')
    .to('.sh6-underline', { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
    .to('.sh6-sub', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.25');
      /* ===================== Services grid: reveal + tilt ===================== */
  gsap.set('.sv-service-card', { opacity: 0, y: 30 });
      /* ===================== FAQ accordion ===================== */
  document.querySelectorAll('.cu-accordion-header').forEach((header) => {
    header.addEventListener('click', () => {
      const item = header.closest('.cu-accordion-item');
      const body = item.querySelector('.cu-accordion-body');
      const inner = item.querySelector('.cu-accordion-body-inner');
      const isOpen = item.classList.contains('cu-open');

      document.querySelectorAll('.cu-accordion-item.cu-open').forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove('cu-open');
          gsap.to(openItem.querySelector('.cu-accordion-body'), { height: 0, duration: 0.4, ease: 'power2.inOut' });
          gsap.to(openItem.querySelector('.cu-plus'), { rotate: 0, duration: 0.3 });
        }
      });

      if (isOpen) {
        item.classList.remove('cu-open');
        gsap.to(body, { height: 0, duration: 0.4, ease: 'power2.inOut' });
        gsap.to(header.querySelector('.cu-plus'), { rotate: 0, duration: 0.3 });
      } else {
        item.classList.add('cu-open');
        gsap.to(body, { height: inner.offsetHeight, duration: 0.4, ease: 'power2.inOut' });
        gsap.to(header.querySelector('.cu-plus'), { rotate: 45, duration: 0.3 });
      }
    });
  });
}
