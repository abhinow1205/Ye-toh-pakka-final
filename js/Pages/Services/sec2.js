export function services_sec2(){
      /* ===================== Services grid: reveal + tilt ===================== */
  gsap.set('.sv-service-card', { opacity: 0, y: 30 });

  ScrollTrigger.batch('.sv-service-card', {
    start: 'top 88%',
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1 }),
    once: true
  });

  document.querySelectorAll('.sv-service-card').forEach((card) => {
    const rotateX = gsap.quickTo(card, 'rotateX', { duration: 0.5, ease: 'power3' });
    const rotateY = gsap.quickTo(card, 'rotateY', { duration: 0.5, ease: 'power3' });
    const glare = card.querySelector('.sv-glare');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width;
      const relY = (e.clientY - rect.top) / rect.height;
      rotateY((relX - 0.5) * 14);
      rotateX(-(relY - 0.5) * 14);
      glare.style.setProperty('--gx', (relX * 100) + '%');
      glare.style.setProperty('--gy', (relY * 100) + '%');
    });

    card.addEventListener('mouseleave', () => {
      rotateX(0);
      rotateY(0);
    });
  });
}
