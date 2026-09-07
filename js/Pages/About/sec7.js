export function about_sec7(){
      /* ===================== Culture: horizontal pin ===================== */
  const auCultureTrack = document.getElementById('auCultureTrack');
  gsap.to(auCultureTrack, {
    x: () => -(auCultureTrack.scrollWidth - window.innerWidth + 100),
    ease: 'none',
    scrollTrigger: {
      trigger: '#auCultureSection',
      start: 'top top',
      end: () => `+=${auCultureTrack.scrollWidth - window.innerWidth + 100}`,
      scrub: 1,
      pin: true,
      invalidateOnRefresh: true
    }
  });
}
