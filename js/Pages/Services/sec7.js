export function services_sec7(){
      /* ===================== Services grid: reveal + tilt ===================== */
  gsap.set('.sv-service-card', { opacity: 0, y: 30 });
      /* ===================== Integrations marquee ===================== */
  const svTrack1 = document.getElementById('svMarqueeTrack1');
  const svTrack2 = document.getElementById('svMarqueeTrack2');

  gsap.to(svTrack1, { x: -(svTrack1.scrollWidth / 2), duration: 20, ease: 'none', repeat: -1 });
  gsap.fromTo(svTrack2, { x: -(svTrack2.scrollWidth / 2) }, { x: 0, duration: 22, ease: 'none', repeat: -1 });
}
