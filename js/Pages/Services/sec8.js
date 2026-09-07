export function services_sec8(){
      gsap.fromTo('#svQuoteText',
    { scale: 0.55, opacity: 0.3 },
    {
      scale: 1,
      opacity: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: '#svQuoteSection',
        start: 'top top',
        end: '+=90%',
        scrub: true,
        pin: true
      }
    }
  );
}
