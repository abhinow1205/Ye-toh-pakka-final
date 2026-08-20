export function sec1_sol1(){
        /* ===================== HERO LOAD SEQUENCE ===================== */
    // build console bars
    const barVals = [30, 48, 40, 62, 55, 70, 60, 78, 68, 84];
    const barsWrap = document.getElementById('consoleBars');
    barVals.forEach((v) => {
      const bar = document.createElement('i');
      bar.style.height = '0%';
      bar.dataset.target = v;
      barsWrap.appendChild(bar);
    });

    const line = document.getElementById('consoleLine');
    const lineLength = line.getTotalLength();
    gsap.set(line, { strokeDasharray: lineLength, strokeDashoffset: lineLength });

    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .from('#siteNav', { yPercent: -100, duration: 0.5 })
      .from('.eyebrow', { opacity: 0, y: 10, duration: 0.5 }, 0.15)
      .from('.hero-h1', { opacity: 0, y: 22, duration: 0.7 }, 0.25)
      .from('.hero-sub', { opacity: 0, y: 16, duration: 0.6 }, 0.4)
      .from('.hero-actions .btn', { opacity: 0, y: 14, duration: 0.5, stagger: 0.08 }, 0.52)
      .from('.hero-meta span', { opacity: 0, y: 10, duration: 0.5, stagger: 0.06 }, 0.62)
      .from('#consoleCard', { opacity: 0, y: 26, scale: 0.97, duration: 0.7 }, 0.3)
      .to(line, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut' }, 0.7)
      .to('#consoleBars i', {
        height: (i, el) => el.dataset.target + '%',
        duration: 0.6,
        stagger: 0.04,
        ease: 'power2.out'
      }, 0.75);

    // ambient bar jitter + live counters, looping
    function ambientLoop() {
      gsap.to('#consoleBars i', {
        height: (i, el) => Math.max(18, Math.min(92, +el.dataset.target + gsap.utils.random(-14, 14))) + '%',
        duration: 1.4,
        ease: 'sine.inOut',
        stagger: { each: 0.05, from: 'random' },
        onComplete: ambientLoop
      });
    }
    gsap.delayedCall(1.6, ambientLoop);

    const activeEl = document.getElementById('readoutActive');
    const eventsEl = document.getElementById('readoutEvents');
    gsap.delayedCall(1.6, function tickReadouts() {
      const active = gsap.utils.random(1080, 1340, 1);
      const events = gsap.utils.random(15.6, 21.4, 0.1);
      activeEl.textContent = Math.round(active).toLocaleString();
      eventsEl.textContent = events.toFixed(1) + 'k';
      gsap.delayedCall(gsap.utils.random(2, 3.4), tickReadouts);
    });
}
