export function sec8_home(){

  gsap.timeline({ scrollTrigger: { trigger: '#sh8Header', start: 'top 82%' } })
    .to('.sh8-eyebrow', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)' })
    .to('.sh8-headline', { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.inOut' }, '-=0.15')
    .to('.sh8-underline', { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
    .to('.sh8-sub', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.25');
    /* ===================== Accordion ===================== */
  document.querySelectorAll('.accordion-header').forEach((header) => {
  header.addEventListener('click', () => {
    const item = header.closest('.accordion-item');
    const body = item.querySelector('.accordion-body');
    const inner = item.querySelector('.accordion-body-inner');
    const isOpen = item.classList.contains('open');

    document.querySelectorAll('.accordion-item.open').forEach((openItem) => {
      if (openItem !== item) {
        openItem.classList.remove('open');
        gsap.to(openItem.querySelector('.accordion-body'), { height: 0, duration: 0.4, ease: 'power2.inOut' });
        gsap.to(openItem.querySelector('.plus'), { rotate: 0, duration: 0.3 });
      }
    });

    if (isOpen) {
      item.classList.remove('open');
      gsap.to(body, { height: 0, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(header.querySelector('.plus'), { rotate: 0, duration: 0.3 });
    } else {
      item.classList.add('open');
      gsap.to(body, { height: inner.offsetHeight, duration: 0.4, ease: 'power2.inOut' });
      gsap.to(header.querySelector('.plus'), { rotate: 45, duration: 0.3 });
    }
  });
});
}
