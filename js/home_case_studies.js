/* ===================== 2. Expand to fullscreen (Flip) ===================== */
const expandOverlay = document.getElementById('expandOverlay');
let expandedCard = null;

document.querySelectorAll('.expand-card').forEach((card) => {
  card.addEventListener('click', (e) => {
    if (card.classList.contains('is-expanded')) return;
    if (e.target.classList.contains('expand-close')) return;

    const state = Flip.getState(card, { props: 'borderRadius' });
    expandedCard = card;
    card.classList.add('is-expanded');

    Flip.from(state, {
      duration: 0.6,
      ease: 'power3.inOut',
      absolute: true
    });

    gsap.to(expandOverlay, { opacity: 1, duration: 0.4 });
    expandOverlay.classList.add('visible');
  });

  card.querySelector('.expand-close').addEventListener('click', (e) => {
    e.stopPropagation();
    closeExpanded();
  });
});

expandOverlay.addEventListener('click', closeExpanded);

/* ===================== 2b. Case study tabs (inside expand overlay) ===================== */
document.querySelectorAll('.case-tabs').forEach((tabs) => {
  const buttons = tabs.querySelectorAll('.case-tabs-list button');
  const items = tabs.querySelectorAll('.case-tab-item');

  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const target = btn.getAttribute('data-target');

      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      items.forEach((item) => {
        item.classList.toggle('active', item.dataset.id === target);
      });
    });
  });
});

function closeExpanded() {
  if (!expandedCard) return;
  const state = Flip.getState(expandedCard, { props: 'borderRadius' });
  expandedCard.classList.remove('is-expanded');

  Flip.from(state, {
    duration: 0.55,
    ease: 'power3.inOut',
    absolute: true
  });

  gsap.to(expandOverlay, { opacity: 0, duration: 0.3 });
  expandOverlay.classList.remove('visible');
  expandedCard = null;
}