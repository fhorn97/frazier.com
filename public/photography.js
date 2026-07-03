import * as THREE from 'three';

/* ------------------------------------------------------------------ */
/*  data — your 26 photos mapped to titles                            */
/* ------------------------------------------------------------------ */

const WORKS = [
  { title: 'new york',         file: '02cb64_84b3183d098b4311b254b9fca18524c1~mv2_d_6000_4000_s_4_2.jpg' },
  { title: 'architecture',     file: '02cb64_5118ae8db5714786b5031cfeb02964d1~mv2_d_6000_4000_s_4_2.jpg' },
  { title: 'street light',     file: '02cb64_fce617beb9e24babb83a778368813249~mv2_d_2048_1365_s_2.jpg' },
  { title: 'portrait i',       file: '02cb64_2eee2dcc24b0420f95fea77745c78232~mv2_d_3072_4608_s_4_2.jpg' },
  { title: 'urban geometry',   file: '02cb64_fedc5a8cbe874181a05bc8184d8339fc~mv2_d_6000_4000_s_4_2.jpg' },
  { title: 'city study',       file: '02cb64_5ec76c6af05041b89e033633d0e76f56~mv2_d_6000_4000_s_4_2.jpg' },
  { title: 'portrait ii',      file: '02cb64_4041f10a04c34f45ba7ff5a87cfa7e8a~mv2_d_2819_4357_s_4_2.jpg' },
  { title: 'travel',           file: '02cb64_350e463c502f47498ca8dcfc26d560c8~mv2_d_3886_2776_s_4_2.jpg' },
  { title: 'light study',      file: '02cb64_748ae650f80a498684600fe7ab032acb~mv2_d_2048_1380_s_2.jpg' },
  { title: 'motion',           file: '02cb64_fa524e3d91c64dd49af91cce1ca91078~mv2_d_4337_2157_s_2.jpg' },
  { title: 'wide open',        file: '02cb64_f21c9f134e8a4ccea6b7a171730224da~mv2_d_5974_2711_s_4_2.jpg' },
  { title: 'portrait iii',     file: '02cb64_904b6504ff0d42c49f0fcd8b956f92a2~mv2_d_2054_3082_s_2.jpg' },
  { title: 'dusk',             file: '02cb64_b2fb46a5b27e4f0d827c511428574390~mv2_d_6000_4000_s_4_2.jpg' },
  { title: 'structure',        file: '02cb64_81b20e893e0447efaaef67abd571a2a4~mv2_d_5896_3033_s_4_2.jpg' },
  { title: 'portrait iv',      file: '02cb64_fb20f937b37141489464aa76c59481d8~mv2_d_1365_2048_s_2.jpg' },
  { title: 'landscape',        file: '02cb64_2bfbdbad1ab74993a550370d48cc85e0~mv2_d_3988_2732_s_4_2.jpg' },
  { title: 'quiet moment',     file: '02cb64_759cf8286b304f19ad599d20792f31db~mv2_d_4032_3024_s_4_2.jpg' },
  { title: 'color study',      file: '02cb64_85175b322c0d4fbd90025f26bc640654~mv2_d_6000_4000_s_4_2.jpg' },
  { title: 'portrait v',       file: '02cb64_bf8568ddb114440e93761e75b426bacf~mv2_d_3550_4000_s_4_2.jpg' },
  { title: 'urban texture',    file: '02cb64_01de4c2ba1124347ae20ac1694b0fd3b~mv2_d_6000_4000_s_4_2.jpg' },
  { title: 'fragment',         file: '02cb64_2c844004a80f47158dd34e9dfcaba340~mv2_d_6000_4000_s_4_2.jpg' },
  { title: 'portrait vi',      file: '02cb64_cb98da4a18ec4cbda2ea33c5fe9caa3a~mv2_d_2010_2814_s_2.jpg' },
  { title: 'stillness',        file: '02cb64_5721ed3a313c49a58f52b9a752924b6b~mv2_d_6000_4000_s_4_2.jpg' },
  { title: 'transit',          file: '02cb64_bbcf28437ee748059137645ebb039ef2~mv2_d_6000_4000_s_4_2.jpg' },
  { title: 'after hours',      file: '02cb64_bbd0680be51a4b4294816850da578426~mv2_d_6000_4000_s_4_2.jpg' },
  { title: 'last light',       file: '02cb64_fedc5a8cbe874181a05bc8184d8339fc~mv2_d_6000_4000_s_4_2.jpg' },
];

const N = WORKS.length;

/* spiral geometry constants */
const ANGLE_STEP  = 0.62;
const TOTAL       = N * ANGLE_STEP;
const HALF        = TOTAL / 2;
const RADIUS      = 5.4;
const PITCH       = 0.92;
const PLANE_W     = 2.15;
const PLANE_H     = 2.85;

/* list layout constants */
const SPACING      = PLANE_W + 0.65;
const TOTAL_W      = N * SPACING;
const HALF_W       = TOTAL_W / 2;
const LINEAR_FACTOR = TOTAL_W / TOTAL;

/* ------------------------------------------------------------------ */
/*  dom refs                                                           */
/* ------------------------------------------------------------------ */

const $ = (id) => document.getElementById(id);
const glRoot          = $('gl');
const preloader       = $('preloader');
const preloaderCount  = $('preloaderCount');
const preloaderBar    = $('preloaderBar');
const heroTitle       = $('heroTitle');
const heroEyebrow     = $('heroEyebrow');
const workIndexEl     = $('workIndex');
const workTitleEl     = $('workTitle');
const workLabel       = $('workLabel');
const scrollHint      = $('scrollHint');
const badge           = $('badge');
const menuEl          = $('menu');
const menuBtn         = $('menuBtn');
const viewNav         = $('viewNav');
const cursorEl        = $('cursor');
const cursorRing      = $('cursorRing');

/* split hero title into chars for staggered intro */
(() => {
  const text = heroTitle.textContent;
  heroTitle.textContent = '';
  for (const ch of text) {
    const wrap = document.createElement('span');
    wrap.className = 'char-wrap';
    const inner = document.createElement('span');
    inner.className = 'char';
    inner.innerHTML = ch === ' ' || ch === '\u00A0' ? '&nbsp;' : ch;
    wrap.appendChild(inner);
    heroTitle.appendChild(wrap);
  }
  gsap.set('.hero__title .char', { yPercent: 115 });
})();

/* ------------------------------------------------------------------ */
/*  three.js scene                                                     */
/* ------------------------------------------------------------------ */

const scene    = new THREE.Scene();
const camera   = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 60);
camera.position.set(0, 0, 8.6);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.setClearColor(0x000000, 0);
glRoot.appendChild(renderer.domElement);

/* ------------------------------------------------------------------ */
/*  shaders — duotone grade + motion blur + rounded corners           */
/* ------------------------------------------------------------------ */

const VERT = /* glsl */`
  uniform float uVel;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 pos = position;
    float w = sin(uv.y * 3.14159265);
    pos.z -= w * uVel * 1.35;
    pos.x += w * uVel * 0.4;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const FRAG = /* glsl */`
  uniform sampler2D uMap;
  uniform float uVel;
  uniform float uHover;
  uniform float uDim;
  varying vec2 vUv;

  float gray(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

  void main() {
    float blur = clamp(abs(uVel), 0.0, 1.0) * 0.06;
    vec3 acc = vec3(0.0);
    for (int i = 0; i < 5; i++) {
      float t = float(i) / 4.0 - 0.5;
      acc += texture2D(uMap, vUv + vec2(uVel * 0.012, t * blur)).rgb;
    }
    acc /= 5.0;

    float g = smoothstep(0.02, 0.92, gray(acc));
    g = pow(g, 0.72);
    vec3 duo = mix(vec3(0.045, 0.045, 0.055), vec3(0.96, 0.94, 0.89), g);
    vec3 col = mix(duo, acc, uHover);
    col *= uDim;

    vec2 r = vec2(0.05, 0.0375);
    vec2 q = abs(vUv - 0.5) - (vec2(0.5) - r);
    float d = length(max(q / r, 0.0));
    float alpha = 1.0 - step(1.0, d);

    gl_FragColor = vec4(col, alpha);
  }
`;

/* ------------------------------------------------------------------ */
/*  textures                                                           */
/* ------------------------------------------------------------------ */

function fallbackTexture(i) {
  const c = document.createElement('canvas');
  c.width = 720; c.height = 960;
  const ctx = c.getContext('2d');
  const tones = [['#1a1a1d','#3c3a36'],['#2b2825','#56524a'],['#15161a','#2e3038']];
  const [a, b] = tones[i % tones.length];
  const grad = ctx.createLinearGradient(0, 0, 720, 960);
  grad.addColorStop(0, a); grad.addColorStop(1, b);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 720, 960);
  ctx.fillStyle = 'rgba(236,232,224,0.9)';
  ctx.font = '300 340px Italiana, serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(String(i + 1).padStart(2, '0'), 360, 460);
  ctx.font = '28px Space Grotesk, sans-serif';
  ctx.fillText('FRAZIER HORN', 360, 760);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

let loadedCount = 0;
let realProgress = 0;

function loadTexture(work, i) {
  return new Promise((resolve) => {
    /* Use the web-optimized versions in /photos/web/ */
    const url = `/photos/web/${work.file}`;
    new THREE.TextureLoader().load(
      url,
      (tex) => { tex.colorSpace = THREE.SRGBColorSpace; bump(); resolve(tex); },
      undefined,
      () => { bump(); resolve(fallbackTexture(i)); }
    );
  });
  function bump() { loadedCount += 1; realProgress = loadedCount / N; }
}

/* ------------------------------------------------------------------ */
/*  meshes                                                             */
/* ------------------------------------------------------------------ */

const geometry = new THREE.PlaneGeometry(PLANE_W, PLANE_H, 24, 32);
const items = [];

WORKS.forEach((work, i) => {
  const material = new THREE.ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: FRAG,
    uniforms: {
      uMap:   { value: fallbackTexture(i) },
      uVel:   { value: 0 },
      uHover: { value: 0 },
      uDim:   { value: 1 },
    },
    side: THREE.DoubleSide,
    transparent: true,
  });
  const mesh = new THREE.Mesh(geometry, material);
  mesh.userData = { index: i, hover: 0, hoverTarget: 0, intro: 0, theta: 0, listX: 0 };
  scene.add(mesh);
  items.push(mesh);
  loadTexture(work, i).then((tex) => { material.uniforms.uMap.value = tex; });
});

/* ------------------------------------------------------------------ */
/*  scroll state                                                       */
/* ------------------------------------------------------------------ */

let scrollTarget  = 0;
let scrollCurrent = 0;
let velocity      = 0;
let smoothVel     = 0;
let menuOpen      = false;
let started       = false;
let hintShown     = false;

const layoutState = { progress: 0 };
let currentView = 'spiral';

const wrap = (v, total) => ((v % total) + total) % total;

addEventListener('wheel', (e) => {
  if (menuOpen || !started) return;
  scrollTarget += e.deltaY * 0.0016;
  dismissHint();
}, { passive: true });

/* drag / touch */
let dragging = false, dragMoved = 0;
let lastX = 0, lastY = 0, downX = 0, downY = 0, downTime = 0;

addEventListener('pointerdown', (e) => {
  if (menuOpen || !started) return;
  dragging = true; dragMoved = 0;
  lastX = downX = e.clientX; lastY = downY = e.clientY;
  downTime = performance.now();
});
addEventListener('pointermove', (e) => {
  pointer.x = (e.clientX / innerWidth) * 2 - 1;
  pointer.y = -(e.clientY / innerHeight) * 2 + 1;
  if (!dragging) return;
  const dx = e.clientX - lastX, dy = e.clientY - lastY;
  lastX = e.clientX; lastY = e.clientY;
  dragMoved += Math.abs(dx) + Math.abs(dy);
  const delta = layoutState.progress > 0.5 ? -dx * 0.012 : -dy * 0.011;
  scrollTarget += delta;
  if (dragMoved > 8) dismissHint();
});
addEventListener('pointerup', (e) => {
  if (!dragging) return;
  dragging = false;
  const isClick = dragMoved < 7 && performance.now() - downTime < 350;
  if (isClick && hovered && !menuOpen) focusItem(hovered);
});

function dismissHint() {
  if (hintShown) return;
  hintShown = true;
  gsap.to(scrollHint, { autoAlpha: 0, duration: 0.6, overwrite: true });
}

const scrollProxy = { value: 0 };
function focusItem(mesh) {
  const u = mesh.userData;
  const offset = layoutState.progress > 0.5 ? u.listX / LINEAR_FACTOR : u.theta;
  scrollProxy.value = scrollTarget;
  gsap.to(scrollProxy, {
    value: scrollTarget + offset, duration: 1.1, ease: 'power3.inOut', overwrite: true,
    onUpdate: () => { scrollTarget = scrollProxy.value; },
  });
}

/* ------------------------------------------------------------------ */
/*  raycast hover                                                      */
/* ------------------------------------------------------------------ */

const raycaster = new THREE.Raycaster();
const pointer   = new THREE.Vector2(-10, -10);
let hovered = null;

function updateHover() {
  if (menuOpen || !started) { setHovered(null); return; }
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(items);
  setHovered(hits.length ? hits[0].object : null);
}
function setHovered(mesh) {
  if (hovered === mesh) return;
  if (hovered) hovered.userData.hoverTarget = 0;
  hovered = mesh;
  if (hovered) hovered.userData.hoverTarget = 1;
  cursorRing.classList.toggle('is-hover', !!hovered);
}

/* ------------------------------------------------------------------ */
/*  work label                                                         */
/* ------------------------------------------------------------------ */

let currentWork = -1;
function updateWorkLabel() {
  let best = 0, bestDist = Infinity;
  for (const mesh of items) {
    const u = mesh.userData;
    const d = layoutState.progress > 0.5 ? Math.abs(u.listX) : Math.abs(u.theta);
    if (d < bestDist) { bestDist = d; best = u.index; }
  }
  if (best === currentWork) return;
  currentWork = best;
  workIndexEl.textContent = String(best + 1).padStart(2, '0');
  workTitleEl.textContent = WORKS[best].title;
  gsap.fromTo(workTitleEl, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' });
}

/* ------------------------------------------------------------------ */
/*  view toggle spiral / grid                                          */
/* ------------------------------------------------------------------ */

viewNav.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-view]');
  if (!btn || btn.dataset.view === currentView) return;
  currentView = btn.dataset.view;
  viewNav.querySelectorAll('[data-view]').forEach((b) =>
    b.classList.toggle('is-active', b === btn));
  gsap.to(layoutState, { progress: currentView === 'list' ? 1 : 0, duration: 1.4, ease: 'expo.inOut' });
});

/* ------------------------------------------------------------------ */
/*  menu                                                               */
/* ------------------------------------------------------------------ */

const menuTl = gsap.timeline({ paused: true });
menuTl
  .set(menuEl, { visibility: 'visible' })
  .to('.menu__panel', { y: 0, yPercent: 0, duration: 0.9, ease: 'expo.inOut', startAt: { yPercent: -101 } }, 0)
  .fromTo('.menu__links a', { yPercent: 60, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.07, ease: 'power3.out' }, 0.45)
  .fromTo('.menu__footer', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.7);

menuBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;
  menuEl.classList.toggle('is-open', menuOpen);
  document.body.classList.toggle('menu-open', menuOpen);
  menuBtn.querySelector('.menu-btn__label').textContent = menuOpen ? 'close' : 'menu';
  if (menuOpen) menuTl.timeScale(1).play();
  else menuTl.timeScale(1.35).reverse();
});

menuEl.querySelectorAll('.menu__links a').forEach((a) =>
  a.addEventListener('click', () => menuBtn.click()));

/* ------------------------------------------------------------------ */
/*  custom cursor                                                      */
/* ------------------------------------------------------------------ */

const dotX  = gsap.quickTo(cursorEl,   'x', { duration: 0.12, ease: 'power3' });
const dotY  = gsap.quickTo(cursorEl,   'y', { duration: 0.12, ease: 'power3' });
const ringX = gsap.quickTo(cursorRing, 'x', { duration: 0.45, ease: 'power3' });
const ringY = gsap.quickTo(cursorRing, 'y', { duration: 0.45, ease: 'power3' });

addEventListener('mousemove', (e) => {
  dotX(e.clientX); dotY(e.clientY);
  ringX(e.clientX); ringY(e.clientY);
});

document.querySelectorAll('[data-cursor]').forEach((el) => {
  el.addEventListener('mouseenter', () => cursorRing.classList.add('is-hover'));
  el.addEventListener('mouseleave', () => cursorRing.classList.remove('is-hover'));
});

/* ------------------------------------------------------------------ */
/*  render loop                                                        */
/* ------------------------------------------------------------------ */

const clock = new THREE.Clock();
const camTarget = new THREE.Vector2(0, 0);

function tick() {
  requestAnimationFrame(tick);
  const dt = Math.min(clock.getDelta(), 0.05);

  /* slow idle drift in spiral view */
  if (started && !dragging && !menuOpen && layoutState.progress < 0.5) {
    scrollTarget += dt * 0.018;
  }

  scrollCurrent += (scrollTarget - scrollCurrent) * (1 - Math.pow(0.0015, dt));
  velocity   = scrollTarget - scrollCurrent;
  smoothVel += (velocity - smoothVel) * 0.08;
  const velClamped = THREE.MathUtils.clamp(smoothVel, -0.9, 0.9);

  const p = layoutState.progress;
  const linearScroll = scrollCurrent * LINEAR_FACTOR;

  for (const mesh of items) {
    const u = mesh.userData;

    /* spiral placement */
    const theta = wrap(u.index * ANGLE_STEP - scrollCurrent + HALF, TOTAL) - HALF;
    u.theta = theta;
    const sx = -Math.sin(theta) * RADIUS;
    const sy = -theta * PITCH;
    const sz =  Math.cos(theta) * RADIUS - RADIUS;
    const sRotY = -theta;

    /* grid placement */
    const lx = wrap(u.index * SPACING - linearScroll + HALF_W, TOTAL_W) - HALF_W;
    u.listX = lx;

    mesh.position.x = THREE.MathUtils.lerp(sx, lx, p);
    mesh.position.y = THREE.MathUtils.lerp(sy, 0,  p);
    mesh.position.z = THREE.MathUtils.lerp(sz, 0,  p);
    mesh.rotation.y = THREE.MathUtils.lerp(sRotY, 0, p);

    u.hover += (u.hoverTarget - u.hover) * 0.08;
    // On hover: grow to 1.45x (shows card at its "real" prominent size) and reveal color via uHover shader
    const s = (u.intro || 0) * (1 + u.hover * 0.45);
    mesh.scale.setScalar(Math.max(s, 0.0001));

    const depthDim = THREE.MathUtils.clamp(
      THREE.MathUtils.mapLinear(sz, -RADIUS * 2, 0, 0.34, 1), 0.34, 1);
    const uniforms = mesh.material.uniforms;
    // Dim non-hovered cards slightly when something is hovered
    const anyHovered = hovered ? 1 : 0;
    const isHovered  = u.hover;
    const baseDim    = THREE.MathUtils.lerp(depthDim, 1, p);
    const dimmedBy   = anyHovered * (1 - isHovered) * 0.45; // non-hovered cards dim by 45%
    uniforms.uDim.value = baseDim - dimmedBy + isHovered * 0.05;
    uniforms.uVel.value   = velClamped;
    uniforms.uHover.value = u.hover;
  }

  camTarget.x = pointer.x * 0.35;
  camTarget.y = pointer.y * 0.25;
  camera.position.x += (camTarget.x - camera.position.x) * 0.04;
  camera.position.y += (camTarget.y - camera.position.y) * 0.04;
  camera.lookAt(0, 0, 0);

  updateHover();
  if (started) updateWorkLabel();
  renderer.render(scene, camera);
}
tick();

/* ------------------------------------------------------------------ */
/*  resize                                                             */
/* ------------------------------------------------------------------ */

function onResize() {
  camera.aspect = innerWidth / innerHeight;
  camera.position.z = camera.aspect < 0.9 ? 12 : 8.6;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
}
addEventListener('resize', onResize);
onResize();

/* ------------------------------------------------------------------ */
/*  preloader + intro animation                                        */
/* ------------------------------------------------------------------ */

let displayed = 0;
let introPlayed = false;

function preloaderTick() {
  if (introPlayed) return;
  displayed += (realProgress * 100 - displayed) * 0.06;
  if (realProgress >= 1 && displayed > 99.2) displayed = 100;
  preloaderCount.textContent = Math.round(displayed);
  preloaderBar.style.transform = `scaleX(${displayed / 100})`;
  if (displayed >= 100) { playIntro(); return; }
  requestAnimationFrame(preloaderTick);
}
preloaderTick();

/* force-finish after 8s if network stalls */
setTimeout(() => { realProgress = 1; }, 8000);

function playIntro() {
  if (introPlayed) return;
  introPlayed = true;

  scrollCurrent = scrollTarget - 2.4;

  const tl = gsap.timeline({
    defaults: { ease: 'expo.out' },
    onStart: () => { started = true; },
  });

  tl.to(preloader, { yPercent: -100, duration: 1.1, ease: 'power4.inOut', onComplete: () => preloader.remove() });

  items.forEach((mesh, i) => {
    tl.to(mesh.userData, { intro: 1, duration: 1.4, ease: 'expo.out' }, 0.55 + i * 0.05);
  });

  tl.to('.hero__title .char',    { yPercent: 0, duration: 1.2, stagger: 0.045, ease: 'power4.out' }, 0.8)
    .to(heroEyebrow,              { opacity: 1, duration: 0.8, ease: 'power2.out' }, 1.3)
    .to([badge, workLabel],       { opacity: 1, duration: 0.8, stagger: 0.1 }, 1.4)
    .to(scrollHint,               { opacity: 1, duration: 0.8 }, 1.6);
}
