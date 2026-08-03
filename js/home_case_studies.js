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