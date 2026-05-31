/* ============================================================
   Birthday Love Letter — main.js
   ============================================================ */

/* ── Init: stars + petals ────────────────────────────────── */
(function initBackground() {
  const petalColors = ['#e8a0c0', '#f5c8dc', '#d480a8', '#ffd0e8', '#c060a0'];

  for (let i = 0; i < 110; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const size = Math.random() * 2.2 + 0.6;
    s.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `left:${Math.random() * 100}%`,
      `top:${Math.random() * 100}%`,
      `--d:${(Math.random() * 2.5 + 1).toFixed(1)}s`,
      `animation-delay:${(Math.random() * 5).toFixed(1)}s`,
    ].join(';');
    document.body.appendChild(s);
  }

  for (let i = 0; i < 22; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    p.style.cssText = [
      `left:${Math.random() * 100}vw`,
      `top:-20px`,
      `width:${Math.random() * 7 + 5}px`,
      `height:${Math.random() * 10 + 7}px`,
      `background:${petalColors[i % petalColors.length]}`,
      `--d:${(Math.random() * 7 + 6).toFixed(1)}s`,
      `animation-delay:${(Math.random() * 10).toFixed(1)}s`,
      `transform:rotate(${Math.random() * 360}deg)`,
    ].join(';');
    document.body.appendChild(p);
  }
})();

/* ── Tanggal surat ───────────────────────────────────────── */
document.getElementById('ldate').textContent = new Date().toLocaleDateString('id-ID', {
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
});

/* ── Envelope open/close ─────────────────────────────────── */
let envOpened = false;

function openEnvelope() {
  if (envOpened) return;
  envOpened = true;

  const seal = document.getElementById('sealGroup');
  const flap = document.getElementById('flapPoly');

  seal.style.transition = 'opacity 0.3s';
  seal.style.opacity    = '0';

  setTimeout(() => {
    flap.style.transform = 'rotateX(180deg)';
  }, 200);

  setTimeout(() => {
    document.getElementById('modal').classList.add('show');
    spawnHearts(10);
  }, 850);
}

function closeModal() {
  document.getElementById('modal').classList.remove('show');

  setTimeout(() => {
    envOpened = false;
    document.getElementById('flapPoly').style.transform = 'none';
    const seal = document.getElementById('sealGroup');
    seal.style.opacity = '1';
  }, 500);
}

function handleBg(e) {
  if (e.target === document.getElementById('modal')) closeModal();
}

/* ── Particle helpers ────────────────────────────────────── */
const colors = [
  '#FFD700', '#ff6bab', '#a14fff', '#00D4AA',
  '#FFB347', '#ff9de2', '#c27fff', '#87CEEB',
];

function spawnConf(n) {
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'cf';
      const d  = (Math.random() * 1.4 + 1.1).toFixed(2);
      const sz = Math.random() * 9 + 5;
      el.style.cssText = [
        `left:${Math.random() * 100}vw`,
        `top:-20px`,
        `width:${sz}px`,
        `height:${sz}px`,
        `background:${colors[Math.floor(Math.random() * colors.length)]}`,
        `border-radius:${Math.random() > 0.5 ? '50%' : '2px'}`,
        `--d:${d}s`,
        `animation-delay:${(Math.random() * 0.5).toFixed(2)}s`,
      ].join(';');
      document.body.appendChild(el);
      setTimeout(() => el.remove(), (parseFloat(d) + 0.8) * 1000);
    }, i * 15);
  }
}

function spawnFW(n) {
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      const fw = document.createElement('div');
      fw.className = 'fw';
      fw.style.cssText = `left:${Math.random() * 80 + 10}vw;top:${Math.random() * 50 + 5}vh;`;
      const c = colors[Math.floor(Math.random() * colors.length)];
      for (let j = 0; j < 16; j++) {
        const sp  = document.createElement('div');
        sp.className = 'sp';
        const rad  = (j / 16) * 2 * Math.PI;
        const dist = Math.random() * 90 + 50;
        sp.style.cssText = [
          `background:${c}`,
          `--tx:${Math.cos(rad) * dist}px`,
          `--ty:${Math.sin(rad) * dist}px`,
          `--d:${(Math.random() * 0.4 + 0.45).toFixed(2)}s`,
        ].join(';');
        fw.appendChild(sp);
      }
      document.body.appendChild(fw);
      setTimeout(() => fw.remove(), 1500);
    }, i * 230);
  }
}

function spawnHearts(n) {
  const hSymbols = ['♥', '♡', '❤', '♥', '♡'];
  for (let i = 0; i < n; i++) {
    setTimeout(() => {
      const h = document.createElement('div');
      h.className = 'bh';
      h.textContent = hSymbols[Math.floor(Math.random() * hSymbols.length)];
      h.style.cssText = [
        `left:${Math.random() * 90 + 5}vw`,
        `bottom:${Math.random() * 30 + 10}vh`,
        `--d:${(Math.random() * 1.5 + 2.2).toFixed(1)}s`,
        `font-size:${(Math.random() * 0.8 + 0.9).toFixed(2)}rem`,
        `color:#ff6bab`,
        `animation-delay:${(Math.random() * 0.3).toFixed(2)}s`,
      ].join(';');
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 4000);
    }, i * 110);
  }
}

/* ── Launch celebration ──────────────────────────────────── */
function launchCelebration() {
  spawnConf(90);
  spawnFW(7);
  spawnHearts(14);
}
