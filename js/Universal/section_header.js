export function section_header(){
     (function () {
    var headers = document.querySelectorAll('.sh2-header');
 
    // Skip JS entirely for users who prefer reduced motion —
    // CSS above already renders everything in its final state.
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
 
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('sh2-in-view');
            // animate once per header, then stop watching it
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        // fires when a header is ~15% up from the bottom of the viewport,
        // i.e. "reaches a particular height of the screen" — adjust the
        // -15% to move that trigger point up or down
        rootMargin: '0px 0px -15% 0px'
      }
    );
 
    headers.forEach(function (header) {
      observer.observe(header);
    });
  })();
}
