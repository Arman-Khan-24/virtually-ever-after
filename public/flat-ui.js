/* ═════════════════════════════════════════════════════════════════════
   V7 FLAT-UI, the jury-roadmap behaviour layer for the FLAT surfaces.

   Design contract with the v5 fast-reveal gate: the gate's whole point
   is that flat content is visible at FIRST PAINT. So this file never
   hides anything before that paint, it runs after DOMContentLoaded,
   measures what sits BELOW the fold, and only those elements join the
   scroll-reveal. Above-the-fold stays exactly as fast as v6.

   Loaded with `defer` on every flat-capable page; every feature here
   no-ops gracefully when its host element is absent, when the 3D room
   has committed (window.__g3on), or under prefers-reduced-motion.
   ═════════════════════════════════════════════════════════════════ */
(function(){
'use strict';

var REDUCED = false;
try{ REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(_){}

function ready(fn){
  if(document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', fn, {once:true});
  else fn();
}

/* ── 1 · below-fold scroll-reveal ─────────────────────────────────────
   Candidates opt in with [data-v7r]; list-ish containers can mark
   [data-v7r-children] to reveal each child with a small stagger.    */
var revIO = null;
function armReveal(){
  if(REDUCED || window.__g3on) return;
  /* a 3D-bound SPA page owns its own .reveal ceremony, stay out */
  try{ if(window.__vflat === false) return; }catch(_){}
  var els = [];
  document.querySelectorAll('[data-v7r]').forEach(function(el){ els.push(el); });
  document.querySelectorAll('[data-v7r-children]').forEach(function(host){
    var kids = host.children, i;
    for(i = 0; i < kids.length; i++){
      kids[i].style.setProperty('--v7d', Math.min(i * .07, .42).toFixed(2) + 's');
      els.push(kids[i]);
    }
  });
  if(!els.length) return;
  if(!revIO) revIO = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('v7on'); revIO.unobserve(e.target); }
    });
  }, {rootMargin:'0px 0px -6% 0px'});
  var fold = window.innerHeight * .92;
  els.forEach(function(el){
    if(el.__v7) return;                   /* re-arm calls stay idempotent */
    el.__v7 = 1;
    var r = el.getBoundingClientRect();
    if(r.top < fold) return;              /* above the fold: never touched */
    el.classList.add('v7r');
    revIO.observe(el);
  });
}

/* ── 2 · works phone carousel: honest counter + one-time swipe hint ── */
function armCarousel(){
  var stage = document.getElementById('scStage');
  var dots  = document.getElementById('scDots');
  if(!stage || !dots) return;

  var count = document.createElement('span');
  count.className = 'v7count';
  count.setAttribute('aria-hidden', 'true');
  document.body.appendChild(count);

  function sync(){
    if(window.innerWidth > 860 || window.__g3on){ count.textContent = ''; return; }
    var n = stage.querySelectorAll('.sc-item').length;
    if(!n){ count.textContent = ''; return; }
    var w = stage.clientWidth || 1;
    var i = Math.min(n, Math.round(stage.scrollLeft / w) + 1);
    count.textContent = (i < 10 ? '0' + i : i) + ' / ' + (n < 10 ? '0' + n : n);
  }
  stage.addEventListener('scroll', function(){ requestAnimationFrame(sync); }, {passive:true});
  window.addEventListener('resize', sync);
  new MutationObserver(sync).observe(stage, {childList:true});
  sync();

  /* the swipe hint appears once per browser, only when there is
     something to swipe to, and leaves at the first real swipe */
  var seen = false;
  try{ seen = !!localStorage.getItem('v7swipe'); }catch(_){}
  if(seen || window.innerWidth > 860) return;
  var hint = document.createElement('span');
  hint.className = 'v7swipe';
  hint.innerHTML = 'swipe <i>&#8592;</i>';
  document.body.appendChild(hint);
  var shown = false;
  function maybeShow(){
    if(shown) return;
    if(stage.querySelectorAll('.sc-item').length > 1){
      shown = true;
      hint.classList.add('on');
      setTimeout(dismiss, 4600);
    }
  }
  function dismiss(){
    hint.classList.remove('on');
    try{ localStorage.setItem('v7swipe', '1'); }catch(_){}
    setTimeout(function(){ hint.remove(); }, 700);
  }
  stage.addEventListener('scroll', function(){ if(shown && stage.scrollLeft > 30) dismiss(); }, {passive:true});
  new MutationObserver(maybeShow).observe(stage, {childList:true});
  maybeShow();
}

/* ── 3 · active chip centering, ONLY when the row really scrolls
      (the parametric fit means it normally never does) ───────────── */
function armCatChips(){
  var cats = document.getElementById('scCats');
  if(!cats) return;
  new MutationObserver(function(){
    if(window.innerWidth > 860) return;
    if(!cats.classList.contains('cats-scroll')) return;
    var on = cats.querySelector('.sc-cat[aria-selected="true"]');
    if(on && on.scrollIntoView)
      try{ on.scrollIntoView({behavior: REDUCED ? 'auto' : 'smooth', inline:'center', block:'nearest'}); }catch(_){}
  }).observe(cats, {subtree:true, attributes:true, attributeFilter:['aria-selected']});
}

/* ── 4 · phone page-arrival: the LAUNCH gate's blur→sharpen echo ────
   150ms, purely decorative, after first paint, never on desktop,
   never under reduced motion, never when a 3D room will commit.    */
function armArrival(){
  if(REDUCED) return;
  var coarse = false;
  try{ coarse = window.matchMedia('(pointer: coarse)').matches; }catch(_){}
  if(!coarse) return;
  var flat = true;
  try{ flat = (window.__vflat !== false); }catch(_){}
  if(!flat) return;
  var main = document.querySelector('main');
  if(!main) return;
  document.documentElement.classList.add('v7arr');   /* the decoder waits for the blur */
  /* v8 · the head already blurred the page BEFORE first paint (html.v7pre), here we only sharpen; a page without the pre-class still blurs first */
  var pre = document.documentElement.classList.contains('v7pre');
  if(!pre){
    main.style.transition = 'none';
    main.style.filter = 'blur(5px)';
    main.style.opacity = '.6';
  } else {
    main.style.filter = 'blur(5px)';
    main.style.opacity = '.6';
    document.documentElement.classList.remove('v7pre');
  }
  requestAnimationFrame(function(){ requestAnimationFrame(function(){
    main.style.transition = 'filter .42s cubic-bezier(.77,0,.18,1), opacity .42s cubic-bezier(.77,0,.18,1)';
    main.style.filter = 'none';
    main.style.opacity = '1';
    setTimeout(function(){
      main.style.transition = main.style.filter = main.style.opacity = '';
      document.documentElement.classList.remove('v7arr');
    }, 540);
  }); });
}

ready(function(){
  armArrival();
  armReveal();
  armCarousel();
  armCatChips();
});

/* late-rendered content (the home's featured strip, archive rows…)
   can ask for another sweep once its DOM exists */
window.V7 = { reveal: armReveal };
})();
