export function sec2_blog_post(){
          // 2. Entrance Animation
      gsap
        .timeline()
        .from(".status-badge", { opacity: 0, y: 15, duration: 0.6 })
        .from(".article-title", { opacity: 0, y: 20, duration: 0.8 }, "-=0.3")
        .from(".hero-meta", { opacity: 0, y: 15, duration: 0.6 }, "-=0.4");
}

