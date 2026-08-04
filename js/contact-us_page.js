(function () {
  gsap.registerPlugin(ScrollTrigger);

  /* ===================== Hero ===================== */
  const cuHeroHeading = document.getElementById('cuHeroHeading');
  const cuHeroText = cuHeroHeading.textContent;
  cuHeroHeading.innerHTML = cuHeroText.split('').map((ch) =>
    ch === ' ' ? ' ' : `<span class="cu-char">${ch}</span>`
  ).join('');

  gsap.set('.cu-hero .cu-char', { yPercent: 120, opacity: 0 });

  const cuHeroTl = gsap.timeline({ delay: 0.2 });
  cuHeroTl
    .to('#cuHeroEyebrow', { opacity: 1, duration: 0.6, ease: 'power2.out' })
    .to('.cu-hero .cu-char', { yPercent: 0, opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.012 }, '-=0.2')
    .to('#cuHeroSub', { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.4');

  gsap.to('.cu-blob-1', { y: 40, x: -20, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  gsap.to('.cu-blob-2', { y: -30, x: 30, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' });

  /* ===================== Stats strip counters ===================== */
  document.querySelectorAll('.cu-stat-num').forEach((el) => {
    const target = parseFloat(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const decimals = target % 1 !== 0 ? 1 : 0;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        const counter = { val: 0 };
        gsap.to(counter, {
          val: target,
          duration: 1.4,
          ease: 'power2.out',
          onUpdate: () => { el.textContent = counter.val.toFixed(decimals) + suffix; }
        });
      }
    });
  });

  /* ===================== Contact method picker (sliding pill) ===================== */
  const cuMethodWrap = document.getElementById('cuMethodWrap');
  const cuMethodIndicator = document.getElementById('cuMethodIndicator');
  const cuMethodButtons = cuMethodWrap.querySelectorAll('button');

  function moveMethodIndicator(btn, animate) {
    const btnRect = btn.getBoundingClientRect();
    const wrapRect = cuMethodWrap.getBoundingClientRect();
    const x = btnRect.left - wrapRect.left - 4;
    const width = btnRect.width;
    if (animate) {
      gsap.to(cuMethodIndicator, { x, width, duration: 0.4, ease: 'power3.out' });
    } else {
      gsap.set(cuMethodIndicator, { x, width });
    }
  }
  moveMethodIndicator(cuMethodButtons[0], false);

  cuMethodButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      cuMethodButtons.forEach((b) => b.classList.remove('cu-method-active'));
      btn.classList.add('cu-method-active');
      moveMethodIndicator(btn, true);
    });
  });

  window.addEventListener('resize', () => {
    const activeBtn = cuMethodWrap.querySelector('.cu-method-active');
    moveMethodIndicator(activeBtn, false);
  });

  /* ===================== Form field underline on focus ===================== */
  document.querySelectorAll('.cu-field').forEach((field) => {
    const input = field.querySelector('input, textarea');
    const underline = field.querySelector('[data-underline]');

    input.addEventListener('focus', () => {
      gsap.to(underline, { scaleX: 1, duration: 0.35, ease: 'power2.out' });
    });
    input.addEventListener('blur', () => {
      gsap.to(underline, { scaleX: 0, duration: 0.3, ease: 'power2.in' });
    });
  });

  /* ===================== Submit: success morph ===================== */
  const cuForm = document.getElementById('cuForm');
  const cuSubmitBtn = document.getElementById('cuSubmitBtn');
  const cuSubmitLabel = document.getElementById('cuSubmitLabel');
  const cuCheckPath = document.getElementById('cuCheckPath');
  const cuCheckPathLength = cuCheckPath.getTotalLength();

  gsap.set(cuCheckPath, { strokeDasharray: cuCheckPathLength, strokeDashoffset: cuCheckPathLength });

  cuForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (cuSubmitBtn.classList.contains('cu-sending') || cuSubmitBtn.classList.contains('cu-sent')) return;

    cuSubmitBtn.classList.add('cu-sending');
    cuSubmitLabel.textContent = 'Sending...';

    gsap.to(cuSubmitBtn, {
      scale: 0.97,
      duration: 0.15,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        cuSubmitBtn.classList.remove('cu-sending');
        cuSubmitBtn.classList.add('cu-sent');
        cuSubmitLabel.textContent = 'Message sent';
        gsap.to(cuCheckPath, { strokeDashoffset: 0, duration: 0.6, ease: 'power2.out', delay: 0.1 });
      }
    });
  });

  /* ===================== Info card glare ===================== */
  document.querySelectorAll('.cu-info-card').forEach((card) => {
    const glare = card.querySelector('.cu-glare');
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      glare.style.setProperty('--gx', (((e.clientX - rect.left) / rect.width) * 100) + '%');
      glare.style.setProperty('--gy', (((e.clientY - rect.top) / rect.height) * 100) + '%');
    });
  });

  /* ===================== Social row: magnetic hover ===================== */
  document.querySelectorAll('.cu-social-btn').forEach((btn) => {
    const xTo = gsap.quickTo(btn, 'x', { duration: 0.3, ease: 'power3' });
    const yTo = gsap.quickTo(btn, 'y', { duration: 0.3, ease: 'power3' });

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      xTo((e.clientX - rect.left - rect.width / 2) * 0.4);
      yTo((e.clientY - rect.top - rect.height / 2) * 0.4);
    });
    btn.addEventListener('mouseleave', () => { xTo(0); yTo(0); });
  });

  /* ===================== Offices: staggered reveal + pulse dot ===================== */
  ScrollTrigger.batch('.cu-office-card', {
    start: 'top 88%',
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1 }),
    once: true
  });

  ScrollTrigger.create({
    trigger: '#cuPulseDot',
    start: 'top 90%',
    once: true,
    onEnter: () => {
      gsap.to('#cuPulseDot', {
        boxShadow: '0 0 0 8px rgba(205, 164, 94, 0)',
        duration: 1.6,
        repeat: -1,
        ease: 'power2.out'
      });
    }
  });

  /* ===================== Newsletter: submit feedback ===================== */
  const cuNewsletterForm = document.getElementById('cuNewsletterForm');
  cuNewsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = cuNewsletterForm.querySelector('button');
    const original = btn.textContent;
    btn.textContent = 'Subscribed ✓';
    gsap.fromTo(btn, { scale: 0.95 }, { scale: 1, duration: 0.3, ease: 'back.out(3)' });
    setTimeout(() => { btn.textContent = original; }, 2200);
  });

  /* ===================== FAQ accordion ===================== */
  document.querySelectorAll('.cu-accordion-header').forEach((header) => {
    header.addEventListener('click', () => {
      const item = header.closest('.cu-accordion-item');
      const body = item.querySelector('.cu-accordion-body');
      const inner = item.querySelector('.cu-accordion-body-inner');
      const isOpen = item.classList.contains('cu-open');

      document.querySelectorAll('.cu-accordion-item.cu-open').forEach((openItem) => {
        if (openItem !== item) {
          openItem.classList.remove('cu-open');
          gsap.to(openItem.querySelector('.cu-accordion-body'), { height: 0, duration: 0.4, ease: 'power2.inOut' });
          gsap.to(openItem.querySelector('.cu-plus'), { rotate: 0, duration: 0.3 });
        }
      });

      if (isOpen) {
        item.classList.remove('cu-open');
        gsap.to(body, { height: 0, duration: 0.4, ease: 'power2.inOut' });
        gsap.to(header.querySelector('.cu-plus'), { rotate: 0, duration: 0.3 });
      } else {
        item.classList.add('cu-open');
        gsap.to(body, { height: inner.offsetHeight, duration: 0.4, ease: 'power2.inOut' });
        gsap.to(header.querySelector('.cu-plus'), { rotate: 45, duration: 0.3 });
      }
    });
  });

  /* ===================== Floating chat bubble ===================== */
  gsap.fromTo('#cuChatBubble', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, delay: 1, ease: 'back.out(2.5)' });
  gsap.to('#cuChatRing', {
    scale: 1.5,
    opacity: 0,
    duration: 1.8,
    repeat: -1,
    ease: 'power2.out',
    delay: 1.5
  });

  document.getElementById('cuChatBubble').addEventListener('click', function () {
    gsap.to(this, { rotate: 360, duration: 0.5, ease: 'power2.inOut' });
  });

  window.addEventListener('load', () => ScrollTrigger.refresh());
})();