export function services_sec5(){
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
