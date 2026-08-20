export function sec4_home(){
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

    
    gsap.timeline({ scrollTrigger: { trigger: '#sh4Header', start: 'top 82%' } })
    .to('.sh4-eyebrow', { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2.2)' })
    .to('.sh4-headline', { clipPath: 'inset(0 0% 0 0)', duration: 0.8, ease: 'power3.inOut' }, '-=0.15')
    .to('.sh4-underline', { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.1')
    .to('.sh4-sub', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.25');

}