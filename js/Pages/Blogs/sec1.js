export function blogs_sec1(){
    /* ===================== HERO LOAD SEQUENCE ===================== */
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    heroTl
      .from(".filter-pill", { opacity: 0, y: 12, duration: 0.5, stagger: 0.06 }, 0.52)
      .from("#featuredCard", { opacity: 0, y: 26, scale: 0.97, duration: 0.7 }, 0.3);

      document.getElementById("featuredCard").addEventListener("click", function () {
  window.location.href = "why-your-business-still-spends-hours-building-reports-manually.html";
});
}