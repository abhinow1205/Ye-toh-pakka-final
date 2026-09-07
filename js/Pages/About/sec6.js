export function about_sec6(){
      /* ===================== Team: staggered reveal ===================== */
  ScrollTrigger.batch('.au-team-card', {
    start: 'top 88%',
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.08 }),
    once: true
  });
  gsap.set('.au-team-card', { y: 24 });
}
