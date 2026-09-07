export function home_sec4(){
/* ===================== Counters ===================== */
    document.querySelectorAll('.num-display').forEach((el) => {
        const target = parseFloat(el.getAttribute('data-target'));
        ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
        const counter = { val: 0 };
        gsap.to(counter, {
             val: target,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate: () => { el.textContent = Math.    round(counter.val); }
        });
        }
    });
    });

}