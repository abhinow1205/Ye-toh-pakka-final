export function home_hero_sec(){
    (function () {
        gsap.registerPlugin(Draggable);

        /* ===================== drag-reveal wiring ===================== */
        function initDragReveal(wrapId, beforeLayerId, handleId) {
          const wrap = document.getElementById(wrapId);
          const beforeLayer = document.getElementById(beforeLayerId);
          const handle = document.getElementById(handleId);
          const wrapWidth = wrap.getBoundingClientRect().width;

          gsap.set(handle, { x: wrapWidth / 2 });
          beforeLayer.style.clipPath = "inset(0 50% 0 0)";

          Draggable.create(handle, {
            type: "x",
            bounds: { minX: 0, maxX: wrapWidth },
            onDrag: function () {
              const percent = gsap.utils.clamp(
                0,
                100,
                (this.x / wrapWidth) * 100,
              );
              beforeLayer.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
            },
          });
        }

        initDragReveal("gx1Wrap", "gx1BeforeLayer", "gx1Handle");

        /* ===================== nebula backdrop ===================== */
        function addNebula(layer) {
          const colors = ["#7c93ff", "#cda45e", "#ff8fd6"];
          for (let i = 0; i < 3; i++) {
            const blob = document.createElement("div");
            blob.className = "gx-nebula";
            const size = gsap.utils.random(140, 220);
            blob.style.width = size + "px";
            blob.style.height = size + "px";
            blob.style.background = colors[i % colors.length];
            blob.style.left = gsap.utils.random(0, 80) + "%";
            blob.style.top = gsap.utils.random(0, 80) + "%";
            layer.appendChild(blob);

            gsap.to(blob, {
              x: gsap.utils.random(-20, 20),
              y: gsap.utils.random(-20, 20),
              duration: gsap.utils.random(10, 16),
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          }
        }

        /* ===================== scattered "before" starfield ===================== */
        function buildScatteredStars(container) {
          addNebula(container.parentElement);
          const COUNT = 90;
          const starColors = [
            "#ffffff",
            "#ffffff",
            "#ffffff",
            "#bcd0ff",
            "#ffe9bf",
          ];

          for (let i = 0; i < COUNT; i++) {
            const star = document.createElement("div");
            star.className = "gx-star";
            const size = gsap.utils.random(1, 2.6);
            const isBright = Math.random() > 0.85;
            star.style.width = (isBright ? size + 1.2 : size) + "px";
            star.style.height = (isBright ? size + 1.2 : size) + "px";
            star.style.left = gsap.utils.random(2, 98) + "%";
            star.style.top = gsap.utils.random(4, 96) + "%";
            star.style.background =
              starColors[Math.floor(Math.random() * starColors.length)];
            star.style.opacity = gsap.utils.random(0.25, 0.95);
            if (isBright) {
              star.style.boxShadow = "0 0 4px 1px rgba(255,255,255,0.55)";
            }
            container.appendChild(star);

            gsap.to(star, {
              opacity: () => gsap.utils.random(0.1, 1),
              scale: () => gsap.utils.random(0.7, 1.5),
              duration: () => gsap.utils.random(2, 5),
              repeat: -1,
              yoyo: true,
              repeatRefresh: true,
              ease: "sine.inOut",
              delay: gsap.utils.random(0, 3),
            });

            if (Math.random() > 0.6) {
              gsap.to(star, {
                x: gsap.utils.random(-6, 6),
                y: gsap.utils.random(-6, 6),
                duration: gsap.utils.random(8, 16),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
              });
            }
          }
        }

        buildScatteredStars(document.getElementById("gx1BeforeStars"));

        /* ===================== glowing core ===================== */
        function addCoreGlow(layer, size, color) {
          const glow = document.createElement("div");
          glow.className = "gx-core-glow";
          glow.style.width = size + "px";
          glow.style.height = size + "px";
          glow.style.marginLeft = -(size / 2) + "px";
          glow.style.marginTop = -(size / 2) + "px";
          glow.style.background = color;
          layer.appendChild(glow);
          gsap.to(glow, {
            opacity: 0.5,
            scale: 1.15,
            duration: 2.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
          return glow;
        }

        /* ===================== halo ring ===================== */
        const gx1AfterLayer = document.getElementById("gx1AfterLayer");
        const gx1AfterStars = document.getElementById("gx1AfterStars");
        addCoreGlow(gx1AfterLayer, 90, "rgba(205, 164, 94, 0.55)");

        const GX1_RING_COUNT = 140;
        const gx1RingWrap = document.createElement("div");
        gx1RingWrap.style.position = "absolute";
        gx1RingWrap.style.inset = "0";
        gx1AfterStars.appendChild(gx1RingWrap);

        for (let i = 0; i < GX1_RING_COUNT; i++) {
          const angle = Math.random() * Math.PI * 2;
          // gaussian-ish radius clustering using the average of three randoms
          const spread = (Math.random() + Math.random() + Math.random()) / 3;
          const radius = 45 + spread * 60;

          const star = document.createElement("div");
          star.className = "gx-star";
          const size = gsap.utils.random(1.2, 3);
          star.style.width = size + "px";
          star.style.height = size + "px";
          star.style.left = "50%";
          star.style.top = "50%";
          star.style.marginLeft = Math.cos(angle) * radius + "px";
          star.style.marginTop = Math.sin(angle) * radius + "px";
          const bright = Math.random() > 0.8;
          star.style.background = bright ? "#fff4dd" : "#ffffff";
          if (bright)
            star.style.boxShadow = "0 0 5px 1px rgba(255, 230, 180, 0.6)";
          star.style.opacity = gsap.utils.random(0.4, 1);
          gx1RingWrap.appendChild(star);

          gsap.to(star, {
            opacity: () => gsap.utils.random(0.3, 1),
            duration: () => gsap.utils.random(1.5, 4),
            repeat: -1,
            yoyo: true,
            repeatRefresh: true,
            ease: "sine.inOut",
            delay: gsap.utils.random(0, 3),
          });
        }

        gsap.to(gx1RingWrap, {
          rotation: 360,
          duration: 50,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });
      })();
}
