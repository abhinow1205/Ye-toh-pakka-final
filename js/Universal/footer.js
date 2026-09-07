export function footer_comp_common(){
    (function () {

  /* ===================== Footer 2: columns + wordmark ===================== */
  gsap.to('#ft2Columns .ft2-col', {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power3.out',
    stagger: 0.1,
    scrollTrigger: { trigger: '#ft2Footer', start: 'top 80%' }
  });

  gsap.to('#ft2Wordmark', {
    opacity: 1,
    scale: 1,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: { trigger: '#ft2Wordmark', start: 'top 92%' }
  });

  document.getElementById('ft2BackTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('load', () => ScrollTrigger.refresh());
})();
}
