export function contact_us_sec5(){
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
}
