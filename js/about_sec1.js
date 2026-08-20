export function sec1_about(){

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
      /* ===================== Hero ===================== */

  function splitNodeChars(node) {
    node.childNodes.forEach((child) => {
      if (child.nodeType === Node.TEXT_NODE) {
        const frag = document.createDocumentFragment();
        child.textContent.split('').forEach((ch) => {
          if (ch === ' ') {
            frag.appendChild(document.createTextNode(' '));
          } else {
            const span = document.createElement('span');
            span.className = 'au-char';
            span.textContent = ch;
            frag.appendChild(span);
          }
        });
        child.replaceWith(frag);
      } else if (child.nodeType === Node.ELEMENT_NODE) {
        splitNodeChars(child);
      }
    });
  }

  gsap.set('.au-hero .au-char', { yPercent: 120, opacity: 0 });

  const auHeroTl = gsap.timeline({ delay: 0.2 });
  auHeroTl
    .to('#auHeroEyebrow', { opacity: 1, duration: 0.6, ease: 'power2.out' })
    .to('.au-hero .au-char', { yPercent: 0, opacity: 1, duration: 0.9, ease: 'power4.out', stagger: 0.014 }, '-=0.2')
    .to('#auHeroSub', { opacity: 1, duration: 0.8, ease: 'power2.out' }, '-=0.4');
}
