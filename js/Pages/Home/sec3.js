export function home_sec3(){
    /* ===================== Horizontal pin gallery     ===================== */
    const hTrack = document.getElementById  ('hTrack');
    gsap.to(hTrack, {
      x: () => -(hTrack.scrollWidth - window.   innerWidth + 100),
      ease: 'none',
      scrollTrigger: {
        trigger: '.h-scroll-section',
        start: 'top top',
        end: () => `+=${hTrack.scrollWidth -     window.innerWidth + 100}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true
      }
    });

}