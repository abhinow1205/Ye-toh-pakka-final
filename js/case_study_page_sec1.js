export function sec1_case_study_page(){
    const swipeWrap = document.getElementById('swipeWrap');
  const swipeCards = Array.from(swipeWrap.querySelectorAll('.swipe-card'));

  function layoutSwipeDeck() {
  swipeCards.forEach((card, i) => {
    gsap.to(card, {
      scale: 1 - i * 0.05,
      y: i * 14,
      zIndex: swipeCards.length - i,
      opacity: i < 3 ? 1 : 0,
      duration: 0.4,
      ease: 'power2.out'
    });
  });
}
layoutSwipeDeck();

  function makeTopCardDraggable() {
  const topCard = swipeCards[0];
  if (!topCard) return;

  Draggable.create(topCard, {
    type: 'x,y',
    inertia: true,
    onDrag: function () {
      const rotation = this.x * 0.05;
      gsap.set(topCard, { rotation });
    },
    onDragEnd: function () {
      const threshold = 140;
      if (Math.abs(this.x) > threshold) {
        const direction = this.x > 0 ? 1 : -1;
        gsap.to(topCard, {
          x: direction * 600,
          rotation: direction * 25,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.in',
          onComplete: () => {
            swipeWrap.appendChild(topCard);
            gsap.set(topCard, { x: 0, y: 0, rotation: 0, opacity: 1 });
            swipeCards.push(swipeCards.shift());
            layoutSwipeDeck();
            makeTopCardDraggable();
          }
        });
      } else {
        gsap.to(topCard, { x: 0, y: 0, rotation: 0, duration: 0.4, ease: 'power2.out' });
      }
    }
  });
  }
  makeTopCardDraggable();
}
