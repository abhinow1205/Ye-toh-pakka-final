export function case_studies_post_script(){
    
/* ==========================================================================
   SHARED HELPERS
   ========================================================================== */

// Fires `onEnter` once when `el` first becomes visible in the viewport.
function onFirstIntersect(el, onEnter, threshold = 0.4){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        onEnter();
        io.unobserve(entry.target);
      }
    });
  }, { threshold });
  io.observe(el);
}


/* ==========================================================================
   PAGE NAV — sticky TOC: click-to-scroll, active highlighting, progress fill
   ========================================================================== */
(function initTOC(){
  const items = Array.from(document.querySelectorAll('.toc-item'));
  const sections = items.map(item => document.querySelector(item.dataset.target));
  const lineFill = document.getElementById('toc-line-fill');
  const mobileFill = document.getElementById('scroll-progress-fill');

  // click a TOC entry (or the mobile bar area isn't clickable) -> smooth scroll
  items.forEach((item, i) => {
    item.querySelector('.toc-btn').addEventListener('click', () => {
      sections[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // overall page scroll progress, used for both the vertical line and the
  // mobile top bar
  function updateScrollProgress(){
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    lineFill.style.height = percent + '%';
    mobileFill.style.width = percent + '%';
  }

  // active + passed states: a section counts as "active" once its top has
  // crossed the vertical centre of the viewport
  function updateActiveSection(){
    const centerLine = window.scrollY + window.innerHeight * 0.5;
    let activeIndex = 0;
    sections.forEach((sec, i) => {
      if (sec.offsetTop <= centerLine) activeIndex = i;
    });
    items.forEach((item, i) => {
      item.classList.toggle('is-active', i === activeIndex);
      item.classList.toggle('is-passed', i < activeIndex);
    });
  }

  let ticking = false;
  function onScroll(){
    if (!ticking){
      requestAnimationFrame(() => {
        updateScrollProgress();
        updateActiveSection();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll(); // set initial state on load
})();


/* ==========================================================================
   SECTION 1 — count-up metric animation
   ========================================================================== */
(function initCounters(){
  document.querySelectorAll('.js-counter').forEach(el => {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';

    onFirstIntersect(el, () => {
      const duration = 1600;
      const start = performance.now();
      function tick(now){
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const value = target * eased;
        el.textContent = prefix + value.toFixed(decimals) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = prefix + target.toFixed(decimals) + suffix;
      }
      requestAnimationFrame(tick);
    });
  });
})();


/* ==========================================================================
   SECTION 2 & 6 — linear progress fill + circular ring fill
   Ring uses circumference = 2 * PI * r = 2 * PI * 64 ≈ 402.1
   ========================================================================== */
const RING_CIRCUMFERENCE = 2 * Math.PI * 64;

function animateBar(el){
  const percent = parseFloat(el.dataset.percent);
  onFirstIntersect(el, () => {
    el.style.width = percent + '%';
    // find an adjacent value label within the same card, if present
    const card = el.closest('.sec2-bar-card, .sec6-bar-block');
    const label = card ? card.querySelector('.js-bar-value') : null;
    if (label) animateNumber(label, percent, '%');
  });
}

function animateRing(el){
  const percent = parseFloat(el.dataset.percent);
  const offset = RING_CIRCUMFERENCE - (percent / 100) * RING_CIRCUMFERENCE;
  onFirstIntersect(el, () => {
    el.style.strokeDashoffset = offset;
    const wrap = el.closest('.ring-wrap');
    const valueEl = wrap ? wrap.parentElement.querySelector('.js-ring-value') : null;
    if (valueEl) animateNumber(valueEl, percent, '');
  });
}

function animateNumber(el, target, suffix){
  const duration = 1400;
  const start = performance.now();
  function tick(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = Math.round(target) + suffix;
  }
  requestAnimationFrame(tick);
}

document.querySelectorAll('.js-progress-fill').forEach(animateBar);
document.querySelectorAll('.js-ring-fill').forEach(animateRing);

/* Live-updatable business impact ring (Section 6) —
   change IMPACT_SATISFACTION_SCORE and call updateImpactRing() to reflect
   a new percentage without editing markup. */
let IMPACT_SATISFACTION_SCORE = 94;
function updateImpactRing(newPercent){
  IMPACT_SATISFACTION_SCORE = newPercent;
  const ring = document.getElementById('impact-ring');
  const valueEl = document.getElementById('impact-ring-value');
  ring.dataset.percent = newPercent;
  const offset = RING_CIRCUMFERENCE - (newPercent / 100) * RING_CIRCUMFERENCE;
  ring.style.strokeDashoffset = offset;
  animateNumber(valueEl, newPercent, '');
}
// example: updateImpactRing(97);


/* ==========================================================================
   SECTION 3 & 5 — GSAP scroll-driven workflow progress lines
   As each rail scrolls through the viewport, the connector line fills and
   each step marker activates once the fill line reaches it.
   ========================================================================== */
(function initWorkflowRails(){
  gsap.registerPlugin(ScrollTrigger);

  function buildRail(railId, fillLineId, stepsId){
    const rail = document.getElementById(railId);
    const fillLine = document.getElementById(fillLineId);
    const steps = document.querySelectorAll('#' + stepsId + ' .workflow-step');
    if (!rail || window.matchMedia('(max-width: 900px)').matches){
      // On small screens the connector line is hidden by CSS; just reveal
      // all steps immediately since there's no horizontal scroll to scrub.
      steps.forEach(s => s.classList.add('is-active'));
      return;
    }

    gsap.to(fillLine, {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: rail,
        start: 'top 75%',
        end: 'bottom 55%',
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress; // 0 -> 1
          steps.forEach((step, i) => {
            const threshold = i / (steps.length - 1);
            if (progress >= threshold - 0.02) step.classList.add('is-active');
            else step.classList.remove('is-active');
          });
        }
      }
    });
  }

  buildRail('old-workflow-rail', 'old-fill-line', 'old-workflow-steps');
  buildRail('new-workflow-rail', 'new-fill-line', 'new-workflow-steps');
})();


/* ==========================================================================
   SECTION 4 — image carousel: autoplay every 5s + manual controls
   ========================================================================== */
(function initCarousel(){
  const track = document.getElementById('carousel-track');
  const slides = track.querySelectorAll('.carousel-slide');
  const dotsWrap = document.getElementById('carousel-dots');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  let index = 0;
  let timer = null;
  const AUTOPLAY_MS = 5000;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' is-active' : '');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', () => goTo(i, true));
    dotsWrap.appendChild(dot);
  });
  const dots = dotsWrap.querySelectorAll('.carousel-dot');

  function render(){
    track.style.transform = 'translateX(-' + (index * 100) + '%)';
    dots.forEach((d, i) => d.classList.toggle('is-active', i === index));
  }

  function goTo(i, userTriggered){
    index = (i + slides.length) % slides.length;
    render();
    if (userTriggered) restartAutoplay();
  }

  function next(){ goTo(index + 1); }
  function prev(){ goTo(index - 1); }

  function startAutoplay(){ timer = setInterval(next, AUTOPLAY_MS); }
  function restartAutoplay(){ clearInterval(timer); startAutoplay(); }

  prevBtn.addEventListener('click', () => { prev(); restartAutoplay(); });
  nextBtn.addEventListener('click', () => { next(); restartAutoplay(); });

  startAutoplay();
})();
}
