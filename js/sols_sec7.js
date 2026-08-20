export function sec7_sols(){

  gsap.timeline({ scrollTrigger: { trigger: '#sh7Header', start: 'top 82%' } })
    .to('.sh7-eyebrow', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)' })
    .to('.sh7-headline', { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.inOut' }, '-=0.15')
    .to('.sh7-underline', { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
    .to('.sh7-sub', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.25');
      /* ===================== Services grid: reveal + tilt ===================== */
  gsap.set('.sv-service-card', { opacity: 0, y: 30 });
      /* ===================== Integrations marquee ===================== */
  const svTrack1 = document.getElementById('svMarqueeTrack1');
  const svTrack2 = document.getElementById('svMarqueeTrack2');

  gsap.to(svTrack1, { x: -(svTrack1.scrollWidth / 2), duration: 20, ease: 'none', repeat: -1 });
  gsap.fromTo(svTrack2, { x: -(svTrack2.scrollWidth / 2) }, { x: 0, duration: 22, ease: 'none', repeat: -1 });
}
