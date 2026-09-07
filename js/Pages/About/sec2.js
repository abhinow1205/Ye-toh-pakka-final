export function about_sec2(){
      /* ===================== Manifesto (pinned zoom) ===================== */
  gsap.fromTo('#auManifestoText',
    { scale: 0.55, opacity: 0.3 },
    {
      scale: 1,
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '#auManifestoSection',
        start: 'top top',
        end: '+=90%',
        scrub: true,
        pin: true
      }
    }
  );
}
