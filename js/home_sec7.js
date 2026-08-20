export function sec7_home(){
      /* ===================== Shared: render star ratings ===================== */
    document.querySelectorAll('.rv-stars[data-rating]').forEach((el)  => {
      const rating = parseFloat(el.getAttribute('data-rating'));
      for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.className = 'rv-star';
        star.textContent = '★';
        if (i <= Math.floor(rating)) star.classList.add('filled');
        else if (i - rating < 1) star.classList.add('half');
        el.appendChild(star);
      }
    });

        /*   ================================================================= ==
       VARIANT 2 — Dual marquee, opposite directions
    ==================================================================    = */
    const rv2Track1 = document.getElementById('rv2Track1');
    const rv2Track2 = document.getElementById('rv2Track2');

    gsap.to(rv2Track1, { x: -(rv2Track1.scrollWidth / 2), duration:   32, ease: 'none', repeat: -1 });
    gsap.fromTo(rv2Track2, { x: -(rv2Track2.scrollWidth / 2) }, { x:  0, duration: 34, ease: 'none', repeat: -1 }); 
}