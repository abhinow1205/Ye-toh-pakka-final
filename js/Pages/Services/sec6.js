export function services_sec6(){
      /* ===================== Services grid: reveal + tilt ===================== */
  gsap.set('.sv-service-card', { opacity: 0, y: 30 });
      /* ===================== Process: horizontal pin ===================== */
  const svProcessTrack = document.getElementById('svProcessTrack');
  gsap.to(svProcessTrack, {
    x: () => -(svProcessTrack.scrollWidth - window.innerWidth + 100),
    ease: 'none',
    scrollTrigger: {
      trigger: '#svProcessSection',
      start: 'top top',
      end: () => `+=${svProcessTrack.scrollWidth - window.innerWidth + 100}`,
      scrub: 1,
      pin: true,
      invalidateOnRefresh: true
    }
  });
}
