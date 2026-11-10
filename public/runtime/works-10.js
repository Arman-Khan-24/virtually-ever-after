
(function(){
'use strict';

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

function esc(s){
  return String(s).replace(/[&<>"']/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
  });
}
var POSTER = '/assets/img/example.png';
var cats = document.getElementById('scCats'),
    stage = document.getElementById('scStage'),
    state = {cat: null, items: []};
window.__v3state = state;   /* the v3 layer (own script) reads the list */

function isVideo(u){ return /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(u); }
function isHls(u){ return /\.m3u8(\?|#|$)/i.test(u); }

/* video thumbnails simply run: autoplay, muted, looping.
   .mp4/.webm load natively (GitHub releases via the proxy), Bunny
   Stream .m3u8 goes through hls.js; anything else is an image. */
function thumbEl(it){
  var src = it.thumb || POSTER;
  if(isVideo(src)){
    return '<video muted loop playsinline autoplay preload="auto" src="' + esc(VEA.videoSrc(src)) + '"></video>';
  }
  if(isHls(src)){
    return '<video muted loop playsinline autoplay preload="auto" data-hls="' + esc(src) + '"></video>';
  }
  return '<img src="' + esc(src) + '" alt="' + esc(it.client + ' · ' + it.name) +
         '" loading="lazy" onerror="this.src=\'' + POSTER + '\'"/>';
}

var hlsLib = null;
function wireThumb(v){
  if(v._wired) return;
  v._wired = true;
  (function(){
    var url = v.dataset.hls;
    if(!url) return;
    var wire = function(){
      /* hls.js first, only it can pin the top rung; nothing loads
         until the pin is set, so thumbnails never open or loop blurry */
      if(window.Hls && Hls.isSupported()){
        /* iPhone runs hls.js over ManagedMediaSource, it refuses to
           open unless remote playback is off */
        try{ v.disableRemotePlayback = true; }catch(_){}
        /* phone: AUTOMATIC quality sized to the element, fast, light.
           Desktop: pinned to the top rung, never blurry. */
        var mob = window.innerWidth <= 860;
        var h = new Hls(mob
          ? {capLevelToPlayerSize: true, maxBufferLength: 8}
          : {autoStartLoad: false, maxBufferLength: 10});
        h.loadSource(url);
        h.attachMedia(v);
        h.on(Hls.Events.MANIFEST_PARSED, function(){
          if(!mob){
            try{
              h.startLevel = h.levels.length - 1;
              h.currentLevel = h.levels.length - 1;
            }catch(_){}
            h.startLoad(0);
          }
          v.play().catch(function(){});
        });
        /* safety net: if nothing has arrived shortly, hand the film to
           the native player, ANY quality beats a black screen */
        setTimeout(function(){
          if(v.readyState !== 0) return;
          if(!v.canPlayType('application/vnd.apple.mpegurl')) return;
          try{ h.destroy(); }catch(_){}
          v.src = url;
          v.play().catch(function(){});
        }, mob ? 4000 : 10000);
      } else if(v.canPlayType('application/vnd.apple.mpegurl')){
        v.src = url;
      }
    };
    if(window.Hls){ wire(); return; }
    if(!hlsLib){
      hlsLib = new Promise(function(res){
        var s = document.createElement('script');
        s.src = '/lib/hls.min.js';
        s.onload = res; s.onerror = res;
        document.head.appendChild(s);
      });
    }
    hlsLib.then(wire);
  })();
}
function initHlsThumbs(){
  var pend = stage.querySelectorAll('video[data-hls]');
  if(!pend.length) return;
  if(window.innerWidth > 860){ pend.forEach(wireThumb); return; }
  /* phone: only the opening slides load, many full-quality streams
     at once fight for the radio and the decoder, and it reads as lag */
  pend.forEach(function(v, i){ if(i < 2) wireThumb(v); });
}
/* phone: the slide on stage plays, its neighbours stand wired and
   ready, everything else rests (and stays resting through tap-wake) */
function syncCarouselVids(i){
  if(window.innerWidth > 860) return;
  Array.prototype.forEach.call(stage.querySelectorAll('.sc-item'), function(it, j){
    var v = it.querySelector('video');
    if(!v) return;
    v.autoplay = false;
    if(Math.abs(j - i) <= 1) wireThumb(v);
    if(j === i){
      v._userPaused = false;
      v.play().catch(function(){});
    } else {
      v._userPaused = true;
      v.pause();
    }
  });
}



/* up to 5 pieces: ONE centred row with bigger pieces (~1.5x);
   more than 5: two balanced rows (6=3-3, 7=3-4, 8=4-4 ...) */
var SZ_SINGLE = 56;   /* % of the full stage height, small counts must still fill the wall */
var SZ_DOUBLE = 72;   /* % of a half-stage row      */

function itemHtml(it, i, sz){
  var meta = [it.venue, it.date].filter(Boolean).join(' · ');
  /* the caption is display:none on desktop and only surfaces on hover, so the
     link itself carried NO text: screen readers read the whole wall as
     "link, link, link", and every anchor pointing at a work page went out
     with empty text. The label is the same client + name already sitting in
     the data-* attributes, so nothing on screen changes. */
  return '<a class="sc-item" aria-label="' + esc([it.client, it.name].filter(Boolean).join(' · ') || 'Work') +
    '" href="' + esc(VEA.workUrl(it)) +
    '" data-client="' + esc(it.client) + '" data-name="' + esc(it.name) + '" data-meta="' + esc(meta) + '"' +
    ' style="--sz:' + sz + '">' +
    '<span class="sc-box"><span class="sc-thumb">' + thumbEl(it) + '</span>' +
    '<span class="sc-cap"><span class="cap-client">' + esc(it.client) + '</span>' +
    '<span class="cap-name">' + esc(it.name) + '</span>' +
    '<span class="cap-meta">' + esc(meta) + '</span>' +
    '</span></span></a>';
}

/* the fixed bottom line follows whichever piece the mouse is on, and the record DECODES onto the line, like an archive being read */
var scInfo = document.getElementById('scInfo'),
    siClient = document.getElementById('siClient'),
    siName = document.getElementById('siName'),
    siMeta = document.getElementById('siMeta');
function v3Scramble(el, txt){ VEA.scrambleTo(el, txt); }
document.addEventListener('mouseover', function(e){
  var it = e.target.closest && e.target.closest('.sc-item');
  if(!it) return;
  v3Scramble(siClient, it.dataset.client || '');
  v3Scramble(siName, it.dataset.name || '');
  v3Scramble(siMeta, it.dataset.meta || '');
  scInfo.classList.add('show');
});
document.addEventListener('mouseout', function(e){
  var it = e.target.closest && e.target.closest('.sc-item');
  if(!it) return;
  var to = e.relatedTarget;
  if(to && to.closest && to.closest('.sc-item')) return;
  scInfo.classList.remove('show');
});

/* shrink a strip's pieces until they fit the width, never a scroller */
function fitRows(){
  if(window.innerWidth <= 860) return;
  stage.querySelectorAll('.sc-row').forEach(function(row){
    if(row.hidden) return;
    row.style.setProperty('--fit','1');
    var gap = parseFloat(getComputedStyle(row).gap) || 0;
    /* the fixed gaps never shrink with --fit, so one ratio pass
       under-corrects a crowded row — iterate until it truly fits */
    for(var i = 0; i < 6; i++){
      /* measure LAYOUT widths (offsetWidth), never scrollWidth: the fit
         runs while the pieces still wear their enter scale(0), and a
         scaled-down piece spills no scroll area, so scrollWidth swore
         a five-piece row fit — then the pieces grew past both edges */
      var need = gap * Math.max(0, row.children.length - 1), have = row.clientWidth, k;
      for(k = 0; k < row.children.length; k++) need += row.children[k].offsetWidth;
      if(need <= have + 1) break;
      var cur = parseFloat(getComputedStyle(row).getPropertyValue('--fit')) || 1;
      row.style.setProperty('--fit', Math.max(.3, cur * (have / need) * .98).toFixed(3));
    }
  });
}
window.addEventListener('resize', fitRows);

/* ── mobile carousel dots: one per piece, the active one is white ── */
var scDots = document.getElementById('scDots');
function renderDots(){
  var items = stage.querySelectorAll('.sc-item');
  scDots.innerHTML = Array.prototype.map.call(items, function(_, i){
    return '<i' + (i === 0 ? ' class="on"' : '') + '></i>';
  }).join('');
}
var dotI = 0;
function updateDots(){
  var w = stage.clientWidth || 1;
  var i = Math.round(stage.scrollLeft / w);
  Array.prototype.forEach.call(scDots.children, function(d, j){
    d.classList.toggle('on', j === i);
  });
  if(i !== dotI){ dotI = i; VEA.tick(); syncCarouselVids(i); }
}
stage.addEventListener('scroll', function(){ requestAnimationFrame(updateDots); }, {passive:true});
VEA.initParallax(stage, '.sc-item', '.sc-thumb video, .sc-thumb img', true);

function render(){
  var items = state.items.filter(function(it){ return it.category === state.cat; });
  var single = items.length <= 5;
  var top = single ? items : items.slice(0, Math.floor(items.length / 2));
  var bottom = single ? [] : items.slice(Math.floor(items.length / 2));
  /* v7: two or three pieces must still hold the wall, they grow larger
     (fitRows keeps trimming any overflow, so nothing can spill) */
  var sz = single ? (items.length <= 3 ? SZ_SINGLE + 12 : SZ_SINGLE) : SZ_DOUBLE;
  stage.classList.toggle('single', single);
  stage.innerHTML =
    '<div class="sc-row">' +
      top.map(function(it, i){ return itemHtml(it, i, sz); }).join('') + '</div>' +
    '<div class="sc-row"' + (bottom.length ? '' : ' hidden') + '>' +
      bottom.map(function(it, i){ return itemHtml(it, i + top.length, sz); }).join('') + '</div>';
  stage.querySelectorAll('.sc-item').forEach(function(el){ el.classList.add('enter'); });
  if(!items.length) stage.innerHTML = '<p class="sc-status">Nothing here yet.</p>';
  initHlsThumbs();
  if(window.innerWidth > 860){
    stage.querySelectorAll('video').forEach(function(v){ v.play().catch(function(){}); });
  } else {
    syncCarouselVids(0);
  }
  /* a fresh category ALWAYS opens on its first piece, the carousel
     must never inherit the previous category's swipe position */
  stage.scrollLeft = 0;
  renderDots();
  requestAnimationFrame(fitRows);
}

var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var scWait = document.getElementById('scWait');

/* resolve once every visible thumb has its first frame */
function firstFrames(cb){
  var media = Array.prototype.slice.call(stage.querySelectorAll('.sc-thumb img, .sc-thumb video'));
  if(!media.length) return cb();
  var left = media.length, fired = false;
  var finish = function(){ if(!fired){ fired = true; cb(); } };
  var one = function(el){
    var did = false;
    var ok = function(){ if(did) return; did = true; if(--left <= 0) finish(); };
    if(el.tagName === 'IMG'){
      if(el.complete) return ok();
      el.addEventListener('load', ok, {once:true});
      el.addEventListener('error', ok, {once:true});
    } else {
      if(el.readyState >= 2) return ok();
      el.addEventListener('loadeddata', ok, {once:true});
      el.addEventListener('error', ok, {once:true});
    }
    setTimeout(ok, 2600);      /* one slow file must not hold the page */
  };
  media.forEach(one);
  setTimeout(finish, 3200);    /* absolute cap */
}

/* let the fresh pieces grow from their centres, gently staggered */
function revealPieces(){
  requestAnimationFrame(function(){ requestAnimationFrame(function(){
    stage.querySelectorAll('.sc-item.enter').forEach(function(el, i){
      setTimeout(function(){ el.classList.remove('enter'); }, i * 40);
    });
  }); });
}

function swapTo(cat){
  state.cat = cat;
  render();
  scWait.classList.add('on');      /* hold at zero while first frames land */
  firstFrames(function(){
    scWait.classList.remove('on');
    revealPieces();
  });
}

function setCat(cat){
  cats.querySelectorAll('.sc-cat').forEach(function(b){
    b.setAttribute('aria-selected', String(b.dataset.cat === cat));
  });
  VEA.fitCats(cats);
  /* keep foreign params (force3d / no3d / g3…), only the cat changes.
     the FIRST (mount) selection must NOT rewrite the bar: the address
     reflects a category only once the VISITOR has picked one */
  if(state.cat !== null) try{
    var u = new URL(location.href);
    u.searchParams.set('cat', cat);
    history.replaceState(null, '', u.pathname + '?' + u.searchParams.toString());
  }catch(_){}
  if(REDUCED || state.cat === null){ swapTo(cat); return; }
  if(state.cat === cat) return;
  /* everything shrinks to its centre first */
  stage.classList.add('closing');
  setTimeout(function(){
    stage.classList.remove('closing');
    stage.classList.add('rgb-pop');           /* one chromatic beat */
    setTimeout(function(){ stage.classList.remove('rgb-pop'); }, 480);
    swapTo(cat);
  }, 520);
}

/* clicking a piece (v3): where the browser can morph across pages,
   the clicked film itself GROWS into the work page's stage, one
   continuous space, no page break. Elsewhere: the old collapse. */
var VT_OK = 'onpagereveal' in window &&
            window.matchMedia('(min-width:861px) and (pointer: fine)').matches &&
            window.CSS && CSS.supports('view-transition-name', 'work-hero');
stage.addEventListener('click', function(e){
  if(window.__g3on) return;
  var a = e.target.closest && e.target.closest('.sc-item');
  if(!a || REDUCED) return;
  e.preventDefault();
  /* EDITORIAL 2D keeps the v2 gesture: the room collapses to its centre
     and the page turns, the cross-page morph belongs to the other tiers */
  if(VT_OK && window.__vflat !== true){
    var m = a.querySelector('.sc-thumb video, .sc-thumb img') || a;
    m.style.viewTransitionName = 'work-hero';
    window.location.href = a.href;
    return;
  }
  stage.classList.add('closing');
  setTimeout(function(){ window.location.href = a.href; }, 300);
});

/* the dead wheel turns the catalogue: down = the next category, up =
   the previous, the same collapse/bloom the tabs play.
   (in the v4 salon the wheel is the WALK, the flat page stands down) */
var wheelT = 0;
window.addEventListener('wheel', function(e){
  if(window.__g3on) return;
  if(window.innerWidth <= 860 || REDUCED) return;
  if(Math.abs(e.deltaY) < 24) return;
  var now = performance.now();
  if(now - wheelT < 1100) return;
  var order = Array.prototype.map.call(cats.querySelectorAll('.sc-cat'), function(b){ return b.dataset.cat; });
  if(order.length < 2 || !state.cat) return;
  wheelT = now;
  var i = order.indexOf(state.cat);
  setCat(order[(i + (e.deltaY > 0 ? 1 : -1) + order.length) % order.length]);
}, {passive:true});

/* deep-links from About / the services blocks speak the SERVICES vocabulary
   (WEBSITE, LOGO DESIGN, EXHIBITION DESIGN…); the Works chips speak the five
   the sheet actually carries: WEB · EVENT · MOTION · IDENTITY · PRINT. Map one
   onto the other so a category link lands on the RIGHT tab.
   The right-hand side of this map must only ever name those five. It used to
   also name BRANDING and ARCHITECTURAL, categories the sheet retired, which
   sent IDENTITY, the live token, away to a tab that no longer existed. */
var CAT_ALIAS = {
  'WEBSITE':'WEB','WEB':'WEB','SPATIAL':'WEB','INTERACTIVE':'WEB','INTERACTIVE 3D':'WEB','SPATIAL WEB':'WEB',
  'IDENTITY':'IDENTITY','BRAND STRATEGY':'IDENTITY','BRANDING':'IDENTITY','LOGO DESIGN':'IDENTITY','BRAND':'IDENTITY',
  'REEL FORMATTED VIDEO':'MOTION','MOTION':'MOTION','FILM':'MOTION','VIDEO':'MOTION','REEL':'MOTION',
  'BOOKLET PDF':'PRINT','PRINT':'PRINT','GRAPHICS':'PRINT','BOOKLET':'PRINT','GRAPHIC DESIGN':'PRINT',
  'EXHIBITION DESIGN':'EVENT','EXHIBITION':'EVENT','ARCHITECTURAL':'EVENT','SPATIAL DESIGN':'EVENT','ARCHITECTURE':'EVENT',
  'EVENT':'EVENT','WEDDING':'EVENT'
};
function resolveCat(q, order){
  if(!q) return null;
  var up = String(q).trim().toUpperCase();
  var cand = CAT_ALIAS[up] || up;
  var i;
  for(i = 0; i < order.length; i++){ if(order[i].toUpperCase() === cand) return order[i]; }
  for(i = 0; i < order.length; i++){ if(order[i].toUpperCase() === up)  return order[i]; }
  return null;
}
VEA.loadShowcase(function(data){
  state.items = data.items;
  /* distinct categories, sheet order */
  var seen = [], order = [];
  data.items.forEach(function(it){
    if(it.category && seen.indexOf(it.category) < 0){ seen.push(it.category); order.push(it.category); }
  });
  cats.innerHTML = order.map(function(c){
    return '<button class="sc-cat" type="button" role="tab" data-cat="' + esc(c) +
           '" aria-selected="false">' + esc(c) + '</button>';
  }).join('');
  cats.querySelectorAll('.sc-cat').forEach(function(b){
    b.addEventListener('click', function(){ setCat(b.dataset.cat); });
  });
  VEA.fitCats(cats);
  window.addEventListener('resize', function(){ VEA.fitCats(cats); });
  var st = document.getElementById('scStatus'); if(st) st.remove();
  var q = null;
  try{ q = new URLSearchParams(location.search).get('cat'); }catch(_){}
  setCat(resolveCat(q, order) || order[0]);
});
})();
