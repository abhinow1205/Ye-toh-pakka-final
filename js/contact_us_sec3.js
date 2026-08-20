export function sec3_contact_us(){
  
  gsap.timeline({ scrollTrigger: { trigger: '#sh3Header', start: 'top 82%' } })
    .to('.sh3-eyebrow', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)' })
    .to('.sh3-headline', { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.inOut' }, '-=0.15')
    .to('.sh3-underline', { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
    .to('.sh3-sub', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.25');
      /* ===================== Services grid: reveal + tilt ===================== */
  gsap.set('.sv-service-card', { opacity: 0, y: 30 });


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

  (function () {
  // ==========================================================
  // REQUIRED: paste your deployed Apps Script Web App URL here
  // ==========================================================
  var SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwTA-MXp0Jxp3164Sf6rxxWC4twlT3ElteOMLY4O5lyxO2_uazBw0PC21JeO9wl-hKw/exec";

  var form = document.getElementById('cuForm');
  if (!form) return;

  form.addEventListener('submit', function () {
    // Runs alongside whatever your existing submit/animation code does.
    // Doesn't call preventDefault, doesn't touch any classes or labels —
    // it only reads the field values and sends them to the sheet.

    var data = {
      name: document.getElementById('cuName').value.trim(),
      email: document.getElementById('cuEmail').value.trim(),
      company: document.getElementById('cuCompany').value.trim(),
      message: document.getElementById('cuMessage').value.trim()
    };

    if (SCRIPT_URL.indexOf('PASTE_YOUR') === 0) {
      console.warn('Apps Script URL not set — form data was not sent to the sheet.');
      return;
    }

    fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Apps Script doesn't return CORS headers, so the
                        // response can't be read back — this just fires
                        // the request without affecting page behavior.
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(data)
    }).catch(function (err) {
      console.error('Could not save entry to sheet:', err);
    });
  });
})();

}
