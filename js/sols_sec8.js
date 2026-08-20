export function sec8_sols(){
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
