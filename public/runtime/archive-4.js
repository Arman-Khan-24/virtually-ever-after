
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

/* ── big screen (lightbox) ── */
var lb = document.getElementById('lb'),
    lbStage = document.getElementById('lbStage'),
    lbTitle = document.getElementById('lbTitle'),
    lbExt = document.getElementById('lbExt');
function lbClose(){
  lb.classList.remove('open');
  lbStage.innerHTML = '';
  document.body.style.overflow = '';
}
function lbOpen(m, w){
  stopCards();
  lbTitle.textContent = w.client + (w.title ? ' · ' + w.title : '');
  /* ── GİZLİ ÖZELLİK, ŞİMDİLİK GİZLENDİ, SİLİNMESİ YASAKTIR ───────────
     Büyük ekranda "open ↗" yeni-sekme tuşu vardı; artık hiçbir medyada
     (pdf, video, görsel) yeni sekmede açma tuşu gösterilmiyor. Geri
     açmak için bu iki satırı geri al:
       lbExt.hidden = false;
       lbExt.href = m.src;
     ─────────────────────────────────────────────────────────────────── */
  lbExt.hidden = true;
  lbStage.innerHTML = '';
  if(m.k === 'video'){
    var v = document.createElement('video');
    v.autoplay = true; v.loop = true; v.playsInline = true;   /* no controls */
    v.setAttribute('playsinline','');
    v.style.cursor = 'pointer';
    VEA.attachVideo(v, m.src, true, true);   /* .m3u8, big screen pins TOP quality */
    v.addEventListener('click', function(){ if(v.paused) v.play().catch(function(){}); else v.pause(); });
    lbStage.appendChild(v);
    v.play().catch(function(){ v.muted = true; v.play().catch(function(){}); });
  } else if(m.k === 'embed'){
    var f = document.createElement('iframe');
    f.src = m.src;
    f.allow = 'autoplay; fullscreen; encrypted-media';
    f.allowFullscreen = true;
    f.title = w.client + ' · video';
    lbStage.appendChild(f);
  } else if(m.k === 'image'){
    var img = document.createElement('img');
    img.src = m.src; img.alt = w.client + ' · ' + w.title;
    lbStage.appendChild(img);
  } else if(m.k === 'pdf'){
    /* PDFs open straight as the FLIPBOOK, the same page-curl booklet the
       work pages use (flipbook.html?pdf=…), inside the archive lightbox.
       (The old inline pdf.js page-scroll reader is retired here.) */
    var fb = document.createElement('iframe');
    fb.className = 'flip-frame';
    fb.src = '/flipbook.html?pdf=' + encodeURIComponent(m.src);
    fb.title = w.client + ' · booklet';
    fb.allow = 'fullscreen';
    lbStage.appendChild(fb);
  } else if(m.k === 'web'){
    /* websites follow the SAME protocol as the immersive rotunda: the
       sheet's M column ("yes" = wlive) explores IN PLACE, empty launches
       a new tab */
    if(w.wlive){
      var wf = document.createElement('iframe');
      wf.className = 'flip-frame';
      wf.src = m.src;
      wf.title = w.client + ' · website';
      wf.allow = 'fullscreen';
      lbStage.appendChild(wf);
    } else {
      window.open(m.src, '_blank', 'noopener'); return;
    }
  } else {
    window.open(m.src, '_blank', 'noopener'); return;
  }
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
document.getElementById('lbClose').addEventListener('click', lbClose);
lb.addEventListener('click', function(e){ if(e.target === lb || e.target === lbStage) lbClose(); });
document.addEventListener('keydown', function(e){
  if(e.key !== 'Escape') return;
  if(lb.classList.contains('open')) lbClose(); else menuSet(false);
});
function stopCards(){
  document.querySelectorAll('.card-poster video:not(.thumb-loop)').forEach(function(v){ v.pause(); });
}

var stack   = document.getElementById('stack'),
    countEl = document.getElementById('worksCount'),
    swCat   = document.getElementById('swCat'),
    swCli   = document.getElementById('swCli'),
    norm    = VEA.norm,
    POSTER  = '/assets/img/example.png',
    state   = {view:'category', openName:null, works:[]};

function esc(s){
  return String(s).replace(/[&<>"']/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
  });
}
var KIND_LABEL = {video:'Film', embed:'Film', web:'Website', pdf:'PDF', image:'Image'};

/* ── grouping: identical rules to works3 ── */
function groupsFor(view, works){
  var map = new Map();
  works.forEach(function(w){
    (view === 'client' ? [w.client] : w.tags).forEach(function(k){
      var key = String(k||'').trim(); if(!key) return;
      if(!map.has(key)) map.set(key, []);
      map.get(key).push(w);
    });
  });
  var groups = Array.from(map.entries()).map(function(e){ return {name:e[0], works:e[1]}; });
  if(view === 'client'){
    var orderOf = function(g){
      return g.works.reduce(function(m,w){
        return Math.min(m, (w.cnum === null || w.cnum === undefined) ? Infinity : w.cnum);
      }, Infinity);
    };
    groups = groups.map(function(g,i){ return {g:g, i:i, o:orderOf(g)}; })
      .sort(function(a,b){ return a.o === b.o ? a.i - b.i : a.o - b.o; })
      .map(function(x){ return x.g; });
  }
  return groups;
}

/* ── filter dimensions: identical rules to works3 ──
   Category view: clients (left) + column-F tags (right).
   Client view: works types, unless the client has a single type,
   then the finer column-F tags. Selections combine with AND.       */
function filterDims(view, group){
  if(view === 'client'){
    var types = new Set();
    group.works.forEach(function(w){ (w.tags||[]).forEach(function(t){
      var k = norm(t); if(k) types.add(k);
    }); });
    var byTags = types.size < 2;
    return [ {id:'type', val:function(w){ return byTags ? (w.sub||[]) : w.tags; }} ];
  }
  return [ {id:'client', val:function(w){ return [w.client]; }},
           {id:'tag',    val:function(w){ return w.sub || []; }} ];
}

function buildChips(section, group){
  section._filters = {};
  var wrap = document.createElement('div');
  wrap.className = 'chips';
  var any = false;
  filterDims(state.view, group).forEach(function(dim, di){
    var seen = new Map();
    group.works.forEach(function(w){ dim.val(w).forEach(function(t){
      var k = norm(t);
      if(k && !seen.has(k)) seen.set(k, t);
    }); });
    if(seen.size < 2) return;
    any = true;
    if(di > 0){ var gap = document.createElement('span'); gap.className = 'dim-gap'; wrap.appendChild(gap); }
    seen.forEach(function(display, key){
      var chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'tag-chip';
      chip.textContent = display;
      chip.setAttribute('aria-pressed','false');
      chip.addEventListener('click', function(){
        var on = !chip.classList.contains('active');
        wrap.querySelectorAll('.tag-chip[data-dim="' + dim.id + '"]').forEach(function(c){
          c.classList.remove('active'); c.setAttribute('aria-pressed','false');
        });
        if(on){ chip.classList.add('active'); chip.setAttribute('aria-pressed','true'); }
        section._filters[dim.id] = on ? key : null;
        applyFilters(section, group);
      });
      chip.dataset.dim = dim.id;
      wrap.appendChild(chip);
    });
  });
  return any ? wrap : null;
}
function applyFilters(section, group){
  var rail = section.querySelector('.rail');
  if(!rail) return;
  var dims = filterDims(state.view, group);
  Array.prototype.forEach.call(rail.children, function(card, i){
    var w = group.works[i];
    var ok = dims.every(function(dim){
      var key = section._filters[dim.id];
      return !key || dim.val(w).some(function(t){ return norm(t) === key; });
    });
    card.style.display = ok ? '' : 'none';
  });
  rail.scrollLeft = 0;
  setBodyHeight(section);
}

/* ── cards: caption mirrors works3 (client + year, then title) ── */
function buildCard(w){
  var m = w.media[0];
  /* ── GİZLİ ÖZELLİK, ŞİMDİLİK GİZLENDİ, SİLİNMESİ YASAKTIR ─────────────
     Karta tıklayınca work.html?p=<slug> detay sayfası açılıyordu.
     Bu özellik şimdilik devre dışı: kart artık link değil, sadece
     Launch / Enlarge / Play tuşları çalışıyor. Geri açmak için aşağıdaki
     div yerine bu satırları kullan:
       var card = document.createElement('a');
       card.className = 'card';
       card.href = 'work.html?p=' + encodeURIComponent(w.slug);
     ──────────────────────────────────────────────────────────────────── */
  var card = document.createElement('div');
  card.className = 'card';

  var poster = document.createElement('div');
  poster.className = 'card-poster';
  var kind = document.createElement('span');
  kind.className = 'card-kind';
  kind.textContent = (KIND_LABEL[m.k] || '') + (w.media.length > 1 ? ' +' + (w.media.length - 1) : '');
  poster.appendChild(kind);

  /* chips = works3 card behaviour: preview in place, enlarge to big screen */
  function chip(cls, text, label, fn){
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'card-chip ' + cls;
    b.textContent = text;
    b.setAttribute('aria-label', label);
    b.addEventListener('click', function(e){
      e.preventDefault(); e.stopPropagation(); fn(b);
    });
    return b;
  }

  /* thumbnails can be any format here too: a video/.m3u8 thumb becomes
     a running preview, an image thumb stays an image */
  function isVidLike(u){ return /\.(mp4|webm|mov|m4v|m3u8)(\?|#|$)/i.test(String(u||'')); }
  function thumbMedia(src){
    if(src && isVidLike(src)){
      var tv = document.createElement('video');
      tv.muted = true; tv.loop = true; tv.autoplay = true; tv.playsInline = true;
      tv.setAttribute('playsinline',''); tv.preload = 'metadata';
      tv.className = 'thumb-loop';   /* ambient loop, outside the one-preview policy */
      VEA.attachVideo(tv, src, true);
      return tv;
    }
    var im = document.createElement('img');
    im.src = src || POSTER; im.alt = ''; im.loading = 'lazy';
    im.onerror = function(){ im.src = POSTER; };
    return im;
  }

  if(m.k === 'video'){
    var v = document.createElement('video');
    v.muted = true; v.loop = true; v.playsInline = true;
    v.setAttribute('playsinline',''); v.preload = 'metadata';
    v.dataset.nowake = '';   /* card previews start on demand, never by the tap-wake */
    if(w.thumb && !isVidLike(w.thumb)) v.poster = w.thumb;   /* posters must be images */
    VEA.attachVideo(v, m.src, false);   /* .m3u8 counts as video too */
    poster.appendChild(v);
    var playChip = chip('chip-play', '▶ Play', 'Play preview', function(){
      if(v.paused){ v._userPaused = false; v.play().catch(function(){}); }
      else { v._userPaused = true; v.pause(); }
    });
    /* the chip mirrors the video's REAL state (hover, chip, or another
       card starting all land here), and only one preview plays at once */
    v.addEventListener('play', function(){
      document.querySelectorAll('.card-poster video:not(.thumb-loop)').forEach(function(o){
        if(o !== v) o.pause();
      });
      playChip.textContent = '❚❚ Pause';
      playChip.setAttribute('aria-label','Pause preview');
    });
    v.addEventListener('pause', function(){
      playChip.textContent = '▶ Play';
      playChip.setAttribute('aria-label','Play preview');
    });
    card.addEventListener('mouseenter', function(){ v.play().catch(function(){}); });
    card.addEventListener('mouseleave', function(){ v.pause(); });
    poster.appendChild(playChip);
    poster.appendChild(chip('chip-zoom', 'Enlarge ⤢', 'Open on the big screen', function(){ lbOpen(m, w); }));
  } else if(m.k === 'image'){
    var img = document.createElement('img');
    img.src = m.src; img.alt = ''; img.loading = 'lazy';
    poster.appendChild(img);
    poster.appendChild(chip('chip-zoom', 'Enlarge ⤢', 'Open on the big screen', function(){ lbOpen(m, w); }));
  } else if(m.k === 'pdf'){
    var host = document.createElement('div');
    host.className = 'pdf-cover';
    host.innerHTML = '<img src="' + POSTER + '" alt="" loading="lazy"/>';
    poster.appendChild(host);
    /* first page painted as the cover, works3-style, never a download */
    VEA.paintPdfCover(host, m.src).catch(function(){});
    poster.appendChild(chip('chip-zoom', 'Read ⤢', 'Read on the big screen', function(){ lbOpen(m, w); }));
  } else if(m.k === 'embed'){
    poster.appendChild(thumbMedia(w.thumb));
    poster.appendChild(chip('chip-play', '▶ Play', 'Play on the big screen', function(){ lbOpen(m, w); }));
  } else {
    poster.appendChild(thumbMedia(w.lprev || w.thumb));
    /* immersive protocol: wlive explores in place, otherwise a new tab */
    poster.appendChild(chip('chip-zoom', w.wlive ? 'Explore ⤢' : 'Launch ↗',
      w.wlive ? 'Walk the site on the big screen' : 'Open the live site',
      function(){ lbOpen(m, w); }));
  }
  card.appendChild(poster);

  var cap = document.createElement('div');
  cap.className = 'card-cap';
  var tt = document.createElement('span');
  tt.className = 'c-title';
  /* client leads; title follows when it says something different */
  tt.innerHTML = esc(w.client) +
    (w.title && norm(w.title) !== norm(w.client)
      ? '<small style="display:block;font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;color:var(--ink-dim);margin-top:4px;text-transform:none;">' + esc(w.title) + '</small>'
      : '');
  var yr = document.createElement('span');
  yr.className = 'c-year';
  yr.textContent = w.year || '';
  cap.append(tt, yr);
  card.appendChild(cap);

  /* the line under each content, straight from the sheet's description */
  if(w.desc){
    var d = document.createElement('p');
    d.className = 'c-desc';
    d.textContent = w.desc;
    card.appendChild(d);
  }
  return card;
}

/* ── accordion (one group open, works3 behaviour) ── */
function setBodyHeight(section){
  var body = section.querySelector('.group-body');
  if(section.classList.contains('open')) body.style.maxHeight = body.scrollHeight + 'px';
  else body.style.maxHeight = '0px';
}
function closeAll(except){
  stack.querySelectorAll('.group.open').forEach(function(s){
    if(s === except) return;
    s.classList.remove('open');
    s.querySelector('.group-head').setAttribute('aria-expanded','false');
    setBodyHeight(s);
    s.querySelectorAll('video').forEach(function(v){ v.pause(); });
  });
}
function toggleGroup(section, group){
  var open = section.classList.contains('open');
  if(open){
    section.classList.remove('open');
    section.querySelector('.group-head').setAttribute('aria-expanded','false');
    state.openName = null;
  } else {
    closeAll(section);
    if(!section._built){
      var body = section.querySelector('.group-body');
      var chips = buildChips(section, group);
      if(chips) body.appendChild(chips);
      var rail = document.createElement('div');
      rail.className = 'rail';
      group.works.forEach(function(w){ rail.appendChild(buildCard(w)); });
      body.appendChild(rail);
      section._built = true;
    }
    section.classList.add('open');
    section.querySelector('.group-head').setAttribute('aria-expanded','true');
    state.openName = group.name;
  }
  setBodyHeight(section);
  syncURL();
}

/* a place to rename a sheet category on the wall without touching the URL
   or the state. It is empty on purpose: the sheet's five categories, WEB, EVENT, MOTION, IDENTITY, PRINT, already read as they should. Its two
   old entries ("REEL FORMATTED VIDEO", "BOOKLET PDF") named categories the
   sheet no longer has, so they could only ever fire against stale data. */
var CAT_LABEL = {};
function groupLabel(g){
  if(state.view !== 'category') return g.name;
  return CAT_LABEL[String(g.name).trim().toUpperCase()] || g.name;
}

function render(){
  stack.innerHTML = '';
  var groups = groupsFor(state.view, state.works);
  groups.forEach(function(g){
    var section = document.createElement('section');
    section.className = 'group';
    section.dataset.name = g.name;

    var head = document.createElement('button');
    head.type = 'button';
    head.className = 'group-head';
    head.setAttribute('aria-expanded','false');
    head.innerHTML = '<span class="g-name">' + esc(groupLabel(g)) + '</span>' +
      '<span class="g-count">' + g.works.length + '</span>' +
      '<span class="g-ind" aria-hidden="true">+</span>';
    head.addEventListener('click', function(){ toggleGroup(section, g); });

    var body = document.createElement('div');
    body.className = 'group-body';

    section.append(head, body);
    stack.appendChild(section);
  });
  countEl.textContent = state.works.length + ' works · ' + groups.length +
    (state.view === 'client' ? ' clients' : ' categories');

  /* restore the open group when it survives a view switch / refresh */
  if(state.openName){
    var section = Array.prototype.find.call(stack.children, function(s){
      return s.dataset.name === state.openName;
    });
    var g = groups.find(function(x){ return x.name === state.openName; });
    if(section && g){ state.openName = null; toggleGroup(section, g); }
    else state.openName = null;
  }
}

function syncURL(){
  try{
    var q = new URLSearchParams();
    if(state.view !== 'category') q.set('view', state.view);
    if(state.openName) q.set('open', state.openName);
    var s = q.toString();
    history.replaceState(null, '', location.pathname + (s ? '?' + s : ''));
  }catch(_){}
}
function applyURL(){
  try{
    var q = new URLSearchParams(location.search);
    if(q.get('view') === 'client') state.view = 'client';
    if(q.get('open')) state.openName = q.get('open');
  }catch(_){}
}

function setView(v){
  state.view = v;
  swCat.setAttribute('aria-selected', String(v === 'category'));
  swCli.setAttribute('aria-selected', String(v === 'client'));
  render();
  syncURL();
}
swCat.addEventListener('click', function(){ setView('category'); });
swCli.addEventListener('click', function(){ setView('client'); });
window.addEventListener('resize', function(){
  stack.querySelectorAll('.group.open').forEach(setBodyHeight);
});

applyURL();
swCat.setAttribute('aria-selected', String(state.view === 'category'));
swCli.setAttribute('aria-selected', String(state.view === 'client'));

VEA.loadWorks(function(works){
  state.works = works;
  var st = document.getElementById('worksStatus');
  if(st) st.remove();
  render();
});
})();
