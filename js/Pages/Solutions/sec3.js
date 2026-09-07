export function solutions_sec3(){
  /* ============================================================================================
   SECTION 2 JS START — scroll-linked process line (GSAP ScrollTrigger)
   Requires gsap + ScrollTrigger to be loaded and registered before this runs:
     gsap.registerPlugin(ScrollTrigger)
   start: "top bottom" → begins the instant the section's top touches the bottom of the viewport
   end:   "bottom top"  → finishes the instant the section's bottom touches the top of the viewport
   scrub: true ties progress directly to scroll position, so it reverses naturally on scroll-up.
   ============================================================================================ */
(function () {
  var section = document.getElementById('prSection');
  var steps = document.querySelectorAll('#prSteps .pr-step');
  var markerPositions = [0, 0.25, 0.5, 0.75, 1]; // 5 markers along the track

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: section,
    start: 'top 60%',   // section top hits viewport bottom → progress 0
    end: 'bottom 50%',     // section bottom hits viewport top   → progress 1
    scrub: true,           // no easing lag — locked to scroll position, works both directions
    // markers: true,      // uncomment while tuning to see the start/end lines on screen
    onUpdate: function (self) {
      var progress = self.progress; // 0 → 1, already clamped by ScrollTrigger

      section.style.setProperty('--pr-progress', progress);

      steps.forEach(function (step, i) {
        step.classList.toggle('is-active', progress >= markerPositions[i] - 0.001);
      });
    }
  });
})();
/* ============================================================================================
   SECTION 2 JS END
   ============================================================================================ */
}