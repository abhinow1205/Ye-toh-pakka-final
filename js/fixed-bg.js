function initializeFixedBackground() {

  const spaceCanvas =
  document.getElementById(
    'space-canvas'
  );

  const particleCanvas =
  document.getElementById(
    'particle-canvas'
  );

  const logoImg =
  document.getElementById(
    'logo-img'
  );

  if (!spaceCanvas || !particleCanvas) {

    console.error(
      'Canvas elements not found.'
    );

    return;

  }

  const sCtx =
  spaceCanvas.getContext('2d');

  const pCtx =
  particleCanvas.getContext('2d');

  let W = 0;
  let H = 0;

  function resize() {

    W =
    spaceCanvas.width =
    particleCanvas.width =
    Math.max(
      1,
      window.innerWidth
    );

    H =
    spaceCanvas.height =
    particleCanvas.height =
    Math.max(
      1,
      window.innerHeight
    );

    makeStars();

  }

  window.addEventListener(
    'resize',
    resize,
    { passive: true }
  );

  /* =========================
     STARFIELD
  ========================= */

  const STAR_DENSITY = 9000;

  let stars = [];

  function makeStars() {

    const count = Math.max(
      40,
      Math.floor(
        (W * H) /
        STAR_DENSITY
      )
    );

    stars = [];

    for (
      let i = 0;
      i < count;
      i++
    ) {

      stars.push({

        x:
        Math.random() * W,

        y:
        Math.random() * H,

        z:
        Math.random(),

        size:
        Math.random() * 1.2 +
        0.2,

        baseAlpha:
        Math.random() * 0.8 +
        0.12,

        twinkleOffset:
        Math.random() *
        Math.PI *
        2

      });

    }

  }

  resize();

  /* =========================
     MOUSE
  ========================= */

  const mouse = {

    x: 0,
    y: 0,

    moved: false

  };

  window.addEventListener(
    'mousemove',
    (e) => {

      mouse.x =
      (e.clientX / W) -
      0.5;

      mouse.y =
      (e.clientY / H) -
      0.5;

      mouse.moved = true;

    },
    { passive: true }
  );

  function applyTilt() {

    document.body.style.setProperty(
      '--tiltX',
      (mouse.y * 4) + 'deg'
    );

    document.body.style.setProperty(
      '--tiltY',
      (-mouse.x * 7) + 'deg'
    );

  }

  /* =========================
     PARTICLES
  ========================= */

  const reduced =
  window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const PARTICLE_COUNT =
  reduced ? 48 : 90;

  const particles = [];

  function resetParticles() {

    particles.length = 0;

    for (
      let i = 0;
      i < PARTICLE_COUNT;
      i++
    ) {

      particles.push({

        x:
        Math.random() * W,

        y:
        Math.random() * H,

        vx: 0,
        vy: 0,

        life:
        Math.random() * 60 +
        40,

        size:
        Math.random() * 1.1 +
        0.5,

        hue:
        190 +
        Math.random() * 60

      });

    }

  }

  resetParticles();

  /* =========================
     ANIMATION LOOP
  ========================= */

  let last =
  performance.now();

  function loop(now) {

    const dt =
    Math.min(
      40,
      now - last
    );

    last = now;

    sCtx.clearRect(
      0,
      0,
      W,
      H
    );

    const ox =
    mouse.x * 28;

    const oy =
    mouse.y * 28;

    stars.forEach((s) => {

      const px =
      s.x +
      (ox * (s.z - 0.5));

      const py =
      s.y +
      (oy * (s.z - 0.5));

      const r =
      s.size *
      (1 + s.z * 1.2);

      const tw =
      0.25 *
      Math.sin(
        now * 0.001 +
        s.twinkleOffset
      );

      const alpha =
      Math.max(
        0,
        Math.min(
          1,
          s.baseAlpha +
          tw * s.z
        )
      );

      sCtx.beginPath();

      sCtx.fillStyle =
      `rgba(255,255,255,${
        alpha *
        (0.6 + s.z * 0.5)
      })`;

      sCtx.arc(
        px,
        py,
        r,
        0,
        Math.PI * 2
      );

      sCtx.fill();

    });

    pCtx.clearRect(
      0,
      0,
      W,
      H
    );

    const targetX =
    mouse.moved
      ? (mouse.x + 0.5) * W
      : W / 2;

    const targetY =
    mouse.moved
      ? (mouse.y + 0.5) * H
      : H / 2;

    particles.forEach(
      (p, i) => {

        const dx =
        targetX -
        p.x +
        Math.sin(
          i * 0.9 +
          now * 0.002
        ) * 8;

        const dy =
        targetY -
        p.y +
        Math.cos(
          i * 0.6 +
          now * 0.002
        ) * 6;

        p.vx +=
        dx * 0.00055;

        p.vy +=
        dy * 0.00055;

        p.vx *= 0.94;
        p.vy *= 0.94;

        p.x +=
        p.vx *
        (dt * 0.06);

        p.y +=
        p.vy *
        (dt * 0.06);

        const alpha =
        Math.max(
          0.04,
          Math.min(
            0.95,
            p.life / 140
          )
        );

        pCtx.beginPath();

        pCtx.fillStyle =
        `hsla(${p.hue},
        70%,60%,${alpha})`;

        pCtx.shadowColor =
        `hsla(${p.hue},
        80%,60%,${alpha})`;

        pCtx.shadowBlur =
        Math.max(
          2,
          p.size * 3
        );

        pCtx.arc(
          p.x,
          p.y,
          p.size,
          0,
          Math.PI * 2
        );

        pCtx.fill();

      }
    );

    applyTilt();

    requestAnimationFrame(
      loop
    );

  }

  requestAnimationFrame(
    loop
  );

}

document.addEventListener(
  "DOMContentLoaded",
  () => {

    initializeFixedBackground();

  }
);