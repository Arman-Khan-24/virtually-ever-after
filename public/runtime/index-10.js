
(function(){
'use strict';

var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function esc(s){
  return String(s).replace(/[&<>"']/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
  });
}

/* ── menu ── */
var menu = document.getElementById('menu'),
    menuBtn = document.getElementById('menuBtn');
try{ menu.setAttribute('aria-hidden', 'true'); }catch(_){}
function menuSet(open){
  menu.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-hidden', String(!open));
  document.body.style.overflow = open ? 'hidden' : '';
  if(open){
    /* the overlay becomes a modal: focus goes IN, Tab is trapped, and a
       keystroke can never reach (or navigate) the page behind it */
    menu.setAttribute('role', 'dialog'); menu.setAttribute('aria-modal', 'true');
    menuSet._last = document.activeElement;
    menuSet._trap = function(e){
      if(e.key !== 'Tab') return;
      var f = [].slice.call(menu.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])'))
               .filter(function(el){ return el.offsetParent !== null; });
      if(!f.length) return;
      var first = f[0], last = f[f.length - 1], a = document.activeElement;
      if(e.shiftKey){ if(a === first || !menu.contains(a)){ e.preventDefault(); last.focus(); } }
      else { if(a === last || !menu.contains(a)){ e.preventDefault(); first.focus(); } }
    };
    document.addEventListener('keydown', menuSet._trap, true);
    var f0 = menu.querySelector('a[href],button:not([disabled])'); if(f0){ try{ f0.focus(); }catch(_){} }
  } else {
    if(menuSet._trap){ document.removeEventListener('keydown', menuSet._trap, true); menuSet._trap = null; }
    menu.removeAttribute('aria-modal'); menu.removeAttribute('role');
    var back = menuSet._last;
    if(back && back.focus){ try{ back.focus(); }catch(_){} } else { try{ menuBtn.focus(); }catch(_){} }
    menuSet._last = null;
  }
}
menuBtn.addEventListener('click', function(){ menuSet(!menu.classList.contains('open')); });
document.getElementById('menuClose').addEventListener('click', function(){ menuSet(false); });
menu.addEventListener('click', function(e){ if(e.target.closest('a')) menuSet(false); });
document.addEventListener('keydown', function(e){ if(e.key === 'Escape') menuSet(false); });

/* ── scroll reveal ── */
var io = new IntersectionObserver(function(entries){
  entries.forEach(function(en){
    if(en.isIntersecting){ en.target.classList.add('on'); io.unobserve(en.target); }
  });
}, {threshold:.18});
document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

/* ── featured works, driven by the sheet's HOMEPAGE section ──
   Every visual rule stays exactly as before (title inside the film,
   mix-blend difference invert, description underneath, grow effect);
   only the source changed: rows below the HOMEPAGE marker of the
   showcase sheet. null cells render nothing; the "page" column says
   which work page (work.html?p=<code>) a click opens.               */
var featHost = document.getElementById('featured');

/* the "page" column carries a work CODE, resolved against the Works
   items so links wear the pretty column-O form when one exists */
var showItems = [];
function workHref(code){
  if(!code) return '';
  for(var i = 0; i < showItems.length; i++){
    if(showItems[i].code === code) return VEA.workUrl(showItems[i]);
  }
  return 'work.html?p=' + encodeURIComponent(code);
}

function isHlsUrl(u){ return /\.m3u8(\?|#|$)/i.test(u); }
function isImgUrl(u){ return /\.(jpe?g|png|gif|webp|avif|svg)(\?|#|$)/i.test(u); }
/* column I ("mobil media link") wins on mobile; null → desktop media */
var MOBILE_MQ = window.matchMedia('(max-width:760px)');
function mediaFor(t){ return (MOBILE_MQ.matches && t.mobile) ? t.mobile : t.media; }
function featMediaTag(t){
  var src = mediaFor(t);
  if(isImgUrl(src)){
    return '<img src="' + esc(src) + '" alt="" loading="lazy"/>';
  }
  if(isHlsUrl(src)){
    return '<video muted loop playsinline preload="auto" poster="/assets/img/example.png" data-hls="' +
      esc(src) + '"></video>';
  }
  return '<video muted loop playsinline preload="auto" poster="/assets/img/example.png" src="' +
    esc(VEA.videoSrc(src)) + '"></video>';
}
/* the sub title column (E) holds small written paragraphs, they sit
   ON the film at the very bottom, with the title right above them,
   both inverted against the footage. Always visible. */
function subHtml(sub){
  if(!sub) return '';
  var paras = String(sub).split(/\n+/).map(function(p){ return p.trim(); }).filter(Boolean);
  if(!paras.length) return '';
  return '<div class="feat-sub">' +
    paras.map(function(p){ return '<p>' + esc(p) + '</p>'; }).join('') +
    '</div>';
}
function renderFeatured(rows){
  featHost.innerHTML = rows.map(function(t, i){
    var n = (i+1 < 10 ? '0' : '') + (i+1);
    var href = workHref(t.page);
    var label = [t.client, t.title].filter(Boolean).join(' · ') || 'Featured work';
    return '<section class="feat" aria-label="' + esc(label) + '">' +
      (href ? '<a class="feat-link" href="' + esc(href) + '">' : '<span class="feat-link">') +
      '<div class="feat-stage">' +
      featMediaTag(t) +
      '<div class="feat-meta"><span>' + n + '</span>' +
      '<span class="feat-client">' + esc(t.client || '') + '</span>' +
      '<span>' + esc(t.date || '') + '</span></div>' +
      '<div class="feat-cap">' +
      (t.title ? '<h3 class="feat-title">' + esc(t.title) + '</h3>' : '') +
      subHtml(t.sub) +
      '</div>' +
      '</div>' + (href ? '</a>' : '</span>') +
      '</section>';
  }).join('');
  featHost.querySelectorAll('video[data-hls]').forEach(function(v){ wireHls(v, v.dataset.hls); });
  featHost.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  /* v7: on the flat path the fast-reveal gate neutralises .reveal, the
     late-built featured strip joins the below-fold scroll-reveal instead */
  featHost.querySelectorAll('.feat').forEach(function(el){ el.setAttribute('data-v7r',''); });
  if(window.V7) try{ V7.reveal(); }catch(_){}
  initGrow();
  initPlayback();
  return rows.length;
}

/* films grow from a small box to full bleed as they scroll in */
var stages = [];
function initGrow(){
  stages = Array.prototype.slice.call(featHost.querySelectorAll('.feat-stage'));
  if(REDUCED) return;
  var ticking = false;
  function ease(t){ return t < .5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2) / 2; }
  function update(){
    ticking = false;
    var vh = window.innerHeight;
    stages.forEach(function(st){
      var r = st.getBoundingClientRect();
      if(r.bottom < -80 || r.top > vh + 80) return;
      /* 0 when the stage's top enters the viewport bottom,
         1 by the time its middle reaches the viewport middle */
      var p = (vh - r.top) / (vh * .55 + r.height * .5);
      p = Math.max(0, Math.min(1, p));
      st.style.setProperty('--grow', ease(p).toFixed(4));
    });
  }
  function onScroll(){ if(!ticking){ ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);
  update();
}

/* play films only while on screen */
function initPlayback(){
  var pio = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      var v = en.target.querySelector('video');
      if(!v) return;
      if(en.isIntersecting) v.play().catch(function(){});
      else v.pause();
    });
  }, {threshold:.25});
  stages.forEach(function(st){ pio.observe(st); });
}

/* ── loader: waits until every home film is fully bufferable ──
   Progress = fonts (10%) + works sheet (10%) + films (80%). A film
   counts by its buffered/duration ratio and completes on
   canplaythrough, so the reveal happens with full-quality playback. */
var loader  = document.getElementById('loader'),
    fill    = document.getElementById('loaderFill'),
    pctEl   = document.getElementById('loaderPct'),
    noteEl  = document.getElementById('loaderNote'),
    fontsOK = 0, sheetOK = 0, films = [], doneFlag = false;

function filmProgress(v){
  if(v._done) return 1;
  try{
    if(v.duration > 0 && v.buffered && v.buffered.length)
      return Math.min(1, v.buffered.end(v.buffered.length - 1) / v.duration);
  }catch(_){}
  return Math.min(1, (v.readyState || 0) / 4);
}
function trackFilm(v){
  films.push(v);
  var done = function(){ v._done = 1; };
  v.addEventListener('canplaythrough', done, {once:true});
  /* load errors fire on the <video> for src=… but on the <source> child
     when sources are used, listen to both so a dead CDN never traps us */
  v.addEventListener('error', done, {once:true});
  Array.prototype.forEach.call(v.querySelectorAll('source'), function(s){
    s.addEventListener('error', done, {once:true});
  });
  setTimeout(function(){
    if(!v._done && (v.readyState >= 3 || v.networkState === 3)) v._done = 1;
  }, 12000);
  setTimeout(done, 30000);   /* per-film cap: one stalled file can't hold the page */
  try{ v.load(); }catch(_){}
}
function overall(){
  /* v7.2 · films no longer hold the door: the page opens on type +
     data, the films surface behind it when ready (same final
     quality, seconds earlier first meaningful view). */
  return 30 * fontsOK + 70 * sheetOK;
}
function setPct(p){
  p = Math.max(0, Math.min(100, p));
  fill.style.transform = 'scaleX(' + (p/100) + ')';
  pctEl.textContent = (p < 10 ? '0' : '') + Math.round(p);
}
function finish(){
  if(doneFlag) return;
  doneFlag = true;
  setPct(100);
  setTimeout(function(){
    /* the film appears and the loader lets go AT ONCE, no lingering */
    loader.classList.add('fuse');
    document.getElementById('hero').classList.add('on');
    setTimeout(function(){ loader.classList.add('done'); }, 450);
  }, 100);
}
var poll = setInterval(function(){
  if(doneFlag){ clearInterval(poll); return; }
  var p = overall();
  setPct(p);
  if(sheetOK && fontsOK){ clearInterval(poll); finish(); }
}, 200);

if(document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ fontsOK = 1; });
else fontsOK = 1;

/* shared hls.js loader (Safari plays m3u8 natively, no script needed) */
var hlsLib = null;
function loadHls(){
  if(hlsLib) return hlsLib;
  hlsLib = new Promise(function(res){
    var s = document.createElement('script');
    s.src = '/lib/hls.min.js';
    s.onload = res; s.onerror = res;
    document.head.appendChild(s);
  });
  return hlsLib;
}
function wireHls(v, url){
  /* hls.js FIRST, even where native HLS exists (Safari/iPhone): only
     hls.js can pin the top rung. Loading stays OFF until the manifest
     arrives and the top level is chosen, so not a single low-res
     fragment is ever fetched: no blurry open, no blurry loop replay. */
  loadHls().then(function(){
    if(window.Hls && Hls.isSupported()){
      /* iPhone runs hls.js over ManagedMediaSource, it refuses to
         open unless remote playback is off */
      try{ v.disableRemotePlayback = true; }catch(_){}
      /* phone: AUTOMATIC quality sized to the element, fast and
         light. Desktop: loading waits for the top rung, so the films
         can never open or loop blurry on the big screen. */
      var mob = window.innerWidth <= 860;
      var hls = new Hls(mob
        ? {capLevelToPlayerSize: true, maxBufferLength: 12}
        : {autoStartLoad: false, maxBufferLength: 30});
      hls.loadSource(url);
      hls.attachMedia(v);
      hls.on(Hls.Events.MANIFEST_PARSED, function(){
        if(!mob){
          try{
            hls.startLevel = hls.levels.length - 1;
            hls.currentLevel = hls.levels.length - 1;
          }catch(_){}
          hls.startLoad(0);
        }
        v.play().catch(function(){});
      });
      hls.on(Hls.Events.ERROR, function(_, data){ if(data.fatal) v._done = 1; });
      /* safety net: if nothing has arrived shortly, hand the film to
         the native player, ANY quality beats a black screen */
      setTimeout(function(){
        if(v.readyState !== 0) return;
        if(!v.canPlayType('application/vnd.apple.mpegurl')) return;
        try{ hls.destroy(); }catch(_){}
        v.src = url;
        v.play().catch(function(){});
      }, mob ? 4000 : 10000);
    } else if(v.canPlayType('application/vnd.apple.mpegurl')){
      v.src = url;                       /* old iPhones: native, ABR-ruled */
      v.play().catch(function(){});
    } else {
      v._done = 1;                       /* no HLS path, do not hold the loader */
    }
  });
}

/* opening film, the HOMEPAGE section's hero row (H1). Falls back to
   the previous hardcoded stream if the sheet has no hero media.      */
var HERO_HLS = '/assets/offline/4ffd4941e270bddf.mp4';
function initHero(heroRow){
  var v = document.getElementById('heroVideo');
  var src = (heroRow && mediaFor(heroRow)) || HERO_HLS;
  if(isHlsUrl(src)) wireHls(v, src);
  else { v.src = VEA.videoSrc(src); v.play().catch(function(){}); }
  trackFilm(v);
  /* the hero opens the page named by the sheet's "page" column */
  if(heroRow && heroRow.page){
    var go = document.createElement('a');
    go.className = 'hero-go';
    go.href = workHref(heroRow.page);
    go.setAttribute('aria-label', 'Open the featured work');
    document.getElementById('hero').appendChild(go);
  }
}

/* the HOMEPAGE section of the showcase sheet drives hero + featured */
VEA.loadShowcase(function(data){
  showItems = data.items || [];
  var home = data.home || [];
  var hero = null, rows = [];
  home.forEach(function(t){
    if(!hero && (VEA.norm(t.type) === 'hero' || VEA.norm(t.code) === 'h1')) hero = t;
    else rows.push(t);
  });
  if(sheetOK){
    /* a fresher sheet after the cached one: refresh the featured list
       in place so new texts/medias never wait for the next visit */
    renderFeatured(rows);
    return;
  }
  sheetOK = 1;                      /* first delivery drives the loader */
  noteEl.textContent = 'Building a virtual space';
  initHero(hero);
  var count = renderFeatured(rows);
  featHost.querySelectorAll('.feat-stage video').forEach(function(v){ trackFilm(v); });
  if(!count) noteEl.textContent = 'Preparing';
});

/* absolute safety net, never trap the visitor */
setTimeout(finish, 45000);
if(REDUCED) finish();
})();
