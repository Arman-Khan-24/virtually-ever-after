
/* ═══ v5 FLAT-SKIP GATE, a flat visitor never downloads the 3D bundle.
   The 561K three+g3core chunk and dist/spa.js load ONLY when the
   visitor will actually run 3D. build.mjs stamps CH with the hashed
   chunk paths for this page. A standalone quality switch always
   stands (module-independent) so a flat-locked machine can escape. ═══ */
(function(){
  var qs = new URLSearchParams(location.search), q = qs.get('g3q');
  if (q === 'full' || q === 'lite') { try { sessionStorage.setItem('g3lock',q); sessionStorage.setItem('veaMode','immersive'); } catch(_) {} }
  var force = q==='full' || q==='lite' || qs.has('force3d') || (function(){try{var s=sessionStorage.getItem('g3lock');return s==='full'||s==='lite';}catch(_){return false;}})();
  var CH = ['/dist/chunk-CT4AYSS2.js','/dist/gallery-UWNHRWRQ.js'];
  function mountSwitch(){
    if(!document.body || document.getElementById('g3q')) return;
    /* v8 · the switch rides mobile too, the phone's rungs are AUTO · LITE · 2D
       (FULL stays a desktop word; a manual LITE tap on a phone MUST open, and does) */
    var MSW = window.innerWidth <= 860 || (window.matchMedia && matchMedia('(pointer: coarse)').matches);
    var cur; try{ cur = sessionStorage.getItem('g3q') || 'auto'; }catch(e){ cur = 'auto'; }
    var w = document.createElement('div');
    w.id = 'g3q'; w.setAttribute('data-nodec','');
    w.style.cssText = 'position:fixed;right:14px;bottom:14px;z-index:2147483000;font-family:var(--font-mono,monospace);font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:#fff;mix-blend-mode:difference;opacity:.8;display:flex;align-items:center;justify-content:flex-end;gap:7px;'
    /* v8 · ONE language everywhere: space · light_spc · page (phone: space · page).
       The bar STATES REALITY, never a stale click: __veaSwSync reads whether a
       room is truly standing and marks the ACTIVE word (underlined, UNCLICKABLE);
       a MutationObserver re-reads it on every body-class turn, the bar can no
       longer lie, no matter which door the mode came through. */
    /* mode → session state. AUTO benchmarks (full/lite, NEVER flat); the room
       always commits via FORCE (g3lock), so a space pick can't fall to page. */
    var MAP = { auto:{q:'auto',lock:'full'}, full:{q:'full',lock:'full'}, lite:{q:'lite',lock:'lite'}, flat:{q:'flat',lock:'flat'} };
    /* COLLAPSED reads space / page (space = the smart AUTO); the arrow OPENS the
       granular auto / space / space lite / page. Mobile stays two words. */
    var COLLAPSED = MSW ? [['lite','space'],['flat','page']] : [['auto','space'],['flat','page']];
    var EXPANDED  = MSW ? [['lite','space'],['flat','page']]
                        : [['auto','auto'],['full','space'],['lite','space lite'],['flat','page']];
    var TIP = { auto:'Auto: benchmark this machine, full or lite, never the flat page',
                full:'Space: the full real-time 3D building',
                lite:'Space, lighter: the 3D building with fewer effects',
                flat:'Page: the fast, quiet 2D edition' };
    var expanded = false;
    function activeQ(on3d){
      if(!on3d) return 'flat';
      var qv=''; try{ qv = sessionStorage.getItem('g3q')||''; }catch(_){}
      var lk=''; try{ lk = sessionStorage.getItem('g3lock')||''; }catch(_){}
      if(qv==='auto') return 'auto';
      if(qv==='lite'||lk==='lite') return 'lite';
      return 'full';
    }
    /* the UNFOLD css: the extra rungs live in the DOM always and OPEN OUT to
       their places on a max-width transition (never a fade, never a snap); the
       reverse folds them away. The 'space' word becomes 'auto' as it opens. */
    if(!document.getElementById('g3qUnfoldCss')){
      var _uc = document.createElement('style'); _uc.id = 'g3qUnfoldCss';
      _uc.textContent =
        '#g3q .qr-x{display:inline-flex;align-items:center;max-width:0;opacity:0;overflow:hidden;white-space:nowrap;' +
        'transition:max-width .7s cubic-bezier(.34,0,.2,1),opacity .55s ease;}' +
        '#g3q.qexp .qr-x{max-width:130px;opacity:1;}' +
        '#g3q .qr-a .l-e{display:none;}#g3q.qexp .qr-a .l-c{display:none;}#g3q.qexp .qr-a .l-e{display:inline;}' +
        '#g3q .qs-x{transition:transform .5s ease;}#g3q.qexp .qs-x{transform:rotate(180deg);}';
      (document.head||document.documentElement).appendChild(_uc);
    }
    function paintSwitch(){
      var sep = '<i class="qsl" style="font-style:normal;opacity:.35;margin:0 3px">/</i>';
      var A = function(q,lbl,cls){ return '<a href="#" data-q="'+q+'"'+(cls?' class="'+cls+'"':'')+' aria-label="'+TIP[q]+'" style="color:#fff;text-decoration:none">'+lbl+'</a>'; };
      var arrow = MSW ? '<i class="qslot" aria-hidden="true"></i>' :
        '<button type="button" class="qs-x" data-nodec="" aria-label="More / fewer options"' +
        ' style="appearance:none;background:none;border:0;color:#fff;font-family:inherit;font-size:12px;line-height:1;cursor:pointer;opacity:.5;padding:6px 3px;">\u2039</button>';
      if(MSW){
        w.innerHTML = arrow + A('lite','space') + sep + A('flat','page');
      } else {
        w.innerHTML = arrow +
          '<a href="#" data-q="auto" class="qr-a" aria-label="'+TIP.auto+'" style="color:#fff;text-decoration:none"><span class="l-c">space</span><span class="l-e">auto</span></a>' +
          '<span class="qr-x">' + sep + A('full','space') + '</span>' +
          '<span class="qr-x">' + sep + A('lite','space lite') + '</span>' +
          sep + A('flat','page');
      }
      w.classList.toggle('qexp', expanded);
      try{ window.__veaSwSync(); }catch(_){}
    }
    /* OPEN / CLOSE: the extras UNFOLD into place, just flip the class, the css
       transition does the sliding; the DOM (and the current rungs) never rebuild */
    function render(gentle){
      w.classList.toggle('qexp', expanded);
      try{ window.__veaSwSync(); }catch(_){}
    }
    window.__veaSwSync = function(){
      try{
        var on3d = !!(window.__g3on || (document.body && document.body.classList.contains('g3')));
        /* while the boot plate is still up we are ON THE WAY into space, show
           the pending mode (space) as active, never page. Fixes 'I clicked
           SPACE but PAGE reads struck' during the boot window. */
        try{ var _bb = document.getElementById('g3boot'); if(_bb && !_bb.hidden) on3d = true; }catch(_){}
        var act = activeQ(on3d);
        document.querySelectorAll('#g3q a[data-q], #menuMode a[data-q]').forEach(function(a2){
          var k2 = a2.getAttribute('data-q');
          /* the menu's pair reads the ROOM, not the rung: space when a room
             stands, page when the flat page does */
          if(a2.hasAttribute('data-mm')){
            var mis = a2.getAttribute('data-mm') === (on3d ? 'space' : 'page');
            a2.style.textDecoration = mis ? 'line-through' : 'none';
            a2.style.pointerEvents = 'auto';        /* still hoverable so the decipher can read it */
            a2.dataset.active = mis ? '1' : '';
            a2.style.opacity = mis ? '.95' : '.7';
            return;
          }
          /* collapsed desktop: the 'space' rung (data-q=auto) marks ANY 3D tier */
          var is = (!expanded && !MSW) ? (k2==='flat' ? act==='flat' : act!=='flat') : (k2 === act);
          a2.style.textDecoration = is ? 'line-through' : 'none';
          a2.style.pointerEvents = 'auto';
          a2.dataset.active = is ? '1' : '';
          a2.style.opacity = is ? '.95' : '.7';
        });
      }catch(_){}
    };
    window.__veaSwSync();
    try{
      new MutationObserver(function(){ window.__veaSwSync(); })
        .observe(document.body, { attributes: true, attributeFilter: ['class'] });
    }catch(_){}
    var onPick = function(e){
      var x = e.target.closest && e.target.closest('.qs-x');
      if(x){ e.preventDefault(); expanded = !expanded; render(true); return; }   /* the arrow OPENS / CLOSES the granular menu */
      var a = e.target.closest('a[data-q]'); if(!a) return; e.preventDefault();
      var k = a.getAttribute('data-q');
      if(a.dataset && a.dataset.active === '1') return;   /* active mode: hover explains it, a click no-ops */
      try{ sessionStorage.setItem('veaAsked','1'); }catch(_){}   /* a hand on the switch is an answered question */
      if(MSW && k === 'lite' && !window.__g3on){ window.__veaXfade('#000', function(){ try{ window.__veaSpaceNow(); }catch(_){ try{ location.reload(); }catch(__){} } }, 260); return; }
      var m = MAP[k] || MAP.full;
      try{
        sessionStorage.setItem('g3q', m.q); sessionStorage.setItem('g3lock', m.lock);
        sessionStorage.setItem('veaMode', m.q==='flat' ? 'print' : 'immersive');
        if(MSW && m.q!=='flat'){ sessionStorage.setItem('g3ok','1'); sessionStorage.setItem('veaSnd','1'); }
        sessionStorage.removeItem('g3off');
      }catch(_){}
      var u = new URL(location.href); u.searchParams.delete('g3q'); u.searchParams.delete('no3d');
      var goFlat = function(){ location.href = u.toString(); };
      if(MSW){ var pbg = (getComputedStyle(document.documentElement).getPropertyValue('--bg') || '').trim() || '#000'; window.__veaXfade(pbg, goFlat); }
      else { goFlat(); }
    };
    w.addEventListener('click', onPick);
    document.body.appendChild(w);
    paintSwitch();
    /* v8 · the same toggle rides the OPEN MENU's right flank, the menu
       plate covers the corner bar, so the menu carries its own words */
    try{
      var mn = document.getElementById('menu');
      if(mn && !document.getElementById('menuMode')){
        var mm = document.createElement('div');
        mm.id = 'menuMode'; mm.setAttribute('data-nodec','');
        /* the menu speaks TWO words only, SPACE and PAGE, larger */
        mm.innerHTML = '<span class="mm-t">mode</span>' +
          '<a href="#" data-q="' + (MSW ? 'lite' : 'auto') + '" data-mm="space">space</a>' +
          '<a href="#" data-q="flat" data-mm="page">page</a>';
        mm.addEventListener('click', onPick);
        mn.appendChild(mm);
        window.__veaSwSync();
      }
    }catch(_){}
  }
  document.addEventListener('DOMContentLoaded', mountSwitch);
  /* The shared boot rescue in src/boot-rescue.js owns retries on every room page. */
  /* v8 · SPACE, IN PLACE: the choice tap IS the audio gesture, the context
     is born inside it, the engine re-arms, and the room injects into THIS
     page (the desktop door's own trick), no reload, sound at THAT instant. */
  /* v8 · MOBILE MODE CROSSFADE, the phone's space<->page swap is a hard cut
     (a reload one way, an in-place boot the other). A brief BLACK veil bridges
     it: fade IN over the cut, then (for the in-place boot) fade OUT onto the
     rising room. Desktop keeps its instant switch, only the MSW paths wrap. */
  window.__veaXfade = window.__veaXfade || function(bg, atCover, holdOut){
    try{
      if(!document.body){ atCover && atCover(); return; }
      var v = document.createElement('div');
      v.id = 'veaXfade'; v.setAttribute('data-nodec', '');
      v.style.cssText = 'position:fixed;inset:0;z-index:2147483400;background:' + (bg || '#000') +
        ';opacity:0;transition:opacity .34s ease;pointer-events:auto;';
      document.body.appendChild(v);
      void v.offsetWidth;
      v.style.opacity = '1';
      setTimeout(function(){
        try{ atCover && atCover(); }catch(_){}
        if(holdOut){ setTimeout(function(){ v.style.opacity = '0';
          setTimeout(function(){ try{ v.remove(); }catch(_){} }, 400); }, holdOut); }
      }, 360);
    }catch(_){ try{ atCover && atCover(); }catch(__){} }
  };
  window.__veaSpaceNow = function(){
    try{
      sessionStorage.setItem('g3q','lite'); sessionStorage.setItem('g3lock','lite');
      sessionStorage.setItem('veaMode','immersive'); sessionStorage.setItem('g3ok','1');
      sessionStorage.setItem('veaSnd','1'); sessionStorage.removeItem('g3off');
    }catch(_){}
    try{ window.__vflat = false; }catch(_){}
    try{
      var bb = document.getElementById('g3boot');
      if(bb) bb.hidden = false;
      document.documentElement.className += ' spaceboot';
      var sb2 = document.createElement('style');
      sb2.textContent = 'html.spaceboot main,html.spaceboot .w-foot,html.spaceboot .topbar,html.spaceboot header{visibility:hidden!important}';
      (document.head || document.documentElement).appendChild(sb2);
    }catch(_){}
    try{ if(!window.__veaCtx){ var AC = window.AudioContext || window.webkitAudioContext; if(AC){ window.__veaCtx = new AC(); } } if(window.__veaCtx && window.__veaCtx.resume) window.__veaCtx.resume(); }catch(_){}
    try{
      window.VEASND = undefined;
      var s2 = document.createElement('script'); s2.src = '/sound.js?v=2&sb=2'; document.body.appendChild(s2);
    }catch(_){}
    try{ var vw = document.getElementById('vWake'); if(vw) vw.remove(); var p3 = document.getElementById('v3dPill'); if(p3) p3.remove(); }catch(_){}
    try{ window.__veaSwSync && window.__veaSwSync(); setTimeout(function(){ try{ window.__veaSwSync(); }catch(_){} }, 1500); }catch(_){}
    /* bfcache / re-entry: a module of the same URL NEVER re-runs, so a stale
       spa.js already in the DOM would strand the plate at 90% forever, a
       clean reload is the only correct boot (a fresh flat page has no module
       yet and still gets the instant in-place boot with in-gesture sound) */
    try{ if(window.__g3on || document.querySelector('script[src*="/dist/spa.js"]')){ location.reload(); return; } }catch(_){}
    try{
      if(typeof inject === 'function'){ inject(); }
      else if(typeof CH !== 'undefined' && CH && CH.length){
        /* self-contained injection, the same two-chunk boot the gate does */
        CH.forEach(function(hh){ var l = document.createElement('link'); l.rel = 'modulepreload'; l.href = hh; document.head.appendChild(l); });
        var s3 = document.createElement('script'); s3.type = 'module'; s3.src = '/dist/spa.js';
        document.body.appendChild(s3);
      }
      else location.reload();
    }catch(_){ try{ location.reload(); }catch(__){} }
    /* watchdog: if the room never commits while the plate still stands, a
       boot stalled, reload once so the visitor never sits stuck at 90% */
    /* (the old 6s reload watchdog lived here, on a machine whose boot takes
       longer than 6s it reloaded MID-BOOT forever, pinning the plate at ~90%.
       The shared rescue owns progress-aware, bounded stall handling now.) */
  };
  /* v8 · bfcache back-button: iOS can restore a space page with a DEAD WebGL
     context (a blank/flat-looking room). If we are space-locked but no room is
     actually running on that restore, reload for a clean boot. */
  window.addEventListener('pageshow', function(e){
    if(!e || !e.persisted) return;
    try{ var lk = sessionStorage.getItem('g3lock'); if((lk==='lite'||lk==='full') && !window.__g3on) location.reload(); }catch(_){}
  });
  var skip = false;
  try{ window.__vflat = false; }catch(e){}
  var noGL = false;
  /* EXPLICIT FLAT INTENT always wins, even over a stale space lock (force):
     a page choice (g3q=flat / veaMode=print), ?no3d or ?…=flat lands flat and
     never boots 3D. Computed UNCONDITIONALLY so a leftover g3lock can't bypass
     the flat path and strand the page black. */
  try{
    skip = sessionStorage.getItem('g3q')==='flat' || q==='flat' || qs.has('no3d')
        || sessionStorage.getItem('veaMode')==='print';
  }catch(e){}
  if(!force) try{
    noGL = (function(){
      try{
        var c = document.createElement('canvas');
        var gl = c.getContext('webgl2') || c.getContext('webgl');
        /* noGL means ONLY: no WebGL context at all → 3D truly can't run. A
           software rasterizer is slow but DOES render, v8 no longer flattens it. */
        return !gl;
      }catch(e){ return true; }
    })();
    skip = skip
        || matchMedia('(prefers-reduced-motion: reduce)').matches
        || (navigator.connection && navigator.connection.saveData)
        || noGL || matchMedia('(pointer: coarse)').matches
        || sessionStorage.getItem('g3off');
  }catch(e){}
  /* ═══ v8 · THE FIRST QUESTION, a brand-new visit is ASKED, not guessed:
     one white screen, the wordmark, two doors, space or page. Whichever
     is tapped opens DIRECTLY (the tap itself births the audio context, so
     space starts SOUNDED). Machines that cannot hold a room (no GL,
     reduced motion, data-saver) are never offered a door they can't open,
     and explicit URLs / already-answered sessions are never re-asked. ═══ */
  var ASK = false;
  try{
    ASK = !force && !noGL
       && !sessionStorage.getItem('veaAsked') && !sessionStorage.getItem('g3q')
       && !sessionStorage.getItem('g3lock') && !sessionStorage.getItem('veaMode')
       && !sessionStorage.getItem('g3off')
       && !q && !qs.has('no3d')
       && !matchMedia('(prefers-reduced-motion: reduce)').matches
       && !(navigator.connection && navigator.connection.saveData);
  }catch(e){ ASK = false; }
  if(ASK){
    window.__veaAskPend = true;
    try{
      document.documentElement.className += ' veaask';
      var av = document.createElement('style');
      av.textContent = 'html.veaask,html.veaask body{background:#fff!important}' +
        'html.veaask main,html.veaask header,html.veaask .topbar,html.veaask .w-foot,' +
        'html.veaask #loader,html.veaask .sc-wait{visibility:hidden!important}';
      (document.head || document.documentElement).appendChild(av);
    }catch(e){}
    var askOff = function(){
      window.__veaAskPend = false;
      try{ document.documentElement.className = document.documentElement.className.replace(/\s*\bveaask\b/, ''); }catch(e){}
    };
    var flatDress = function(){
      try{ window.__vflat = true; }catch(e){}
      try{
        document.documentElement.className += ' vflat';
        var vs2 = document.createElement('style');
        vs2.textContent =
          'html.vflat #loader{opacity:0!important;visibility:hidden!important;pointer-events:none!important;transition:none!important}' +
          'html.vflat .sc-wait{display:none!important}' +
          'html.vflat [data-reveal],html.vflat .reveal{opacity:1!important;transform:none!important}';
        (document.head || document.documentElement).appendChild(vs2);
      }catch(e){}
    };
    var mountAsk = function(){
      if(document.getElementById('veaAsk') || !document.body) return;
      var d = document.createElement('div');
      d.id = 'veaAsk'; d.setAttribute('data-nodec', ''); d.setAttribute('role', 'dialog');
      d.setAttribute('aria-label', 'Choose how to visit: space (3D) or page (2D)');
      d.innerHTML =
        '<img class="va-mark" src="/assets/img/veacrop.webp" alt="Virtually Ever After" width="576" height="81"/>' +
        '<div class="va-opts">' +
        '<button type="button" class="va-opt" data-va="space"><span class="va-k">space</span>' +
        '<span class="va-d">a real-time 3d gallery \u00b7 walk the rooms, sound on</span></button>' +
        '<button type="button" class="va-opt" data-va="page"><span class="va-k">page</span>' +
        '<span class="va-d">the 2d editorial \u00b7 fast, quiet, reads like print</span></button>' +
        '</div>' +
        '<p class="va-say"></p>' +
        '<div class="va-foot">your pick holds for this visit \u00b7 swap anytime, bottom right</div>';
      /* THE PHONE'S FIRST SCREEN SAYS WHAT WE DO. On the desktop the studio
         sentence rides the lobby's 360 card, but the phone is hard-set to lite
         and never plays that overture, so a phone visitor met two doors and no
         idea what was behind them. Same sentence, from content/about.md through
         window.__VEA, sized to the space that is actually left so the screen
         never scrolls. */
      try{
        var _sayEl = d.querySelector('.va-say');
        var _a = (window.__VEA && window.__VEA.about) || '';
        _sayEl.textContent = Array.isArray(_a) ? _a.join(' ') : String(_a || '');
      }catch(_){}
      d.addEventListener('click', function(e){
        var b = e.target.closest && e.target.closest('.va-opt'); if(!b) return;
        var va = b.getAttribute('data-va');
        try{ sessionStorage.setItem('veaAsked', '1'); }catch(_){}
        d.classList.add('bye');
        setTimeout(function(){ try{ d.remove(); }catch(_){} }, 520);
        if(va === 'space'){
          askOff();
          if(matchMedia('(pointer: coarse)').matches || innerWidth <= 860){
            try{ window.__veaSpaceNow(); }catch(_){ location.reload(); }
          } else {
            /* desktop: immersive on AUTO's ladder, the plate rises, the
               chunks stream; the tap itself births the audio context */
            try{
              sessionStorage.setItem('veaMode', 'immersive'); sessionStorage.setItem('g3ok', '1');
              sessionStorage.setItem('g3q', 'auto'); sessionStorage.setItem('g3lock', 'full');
              sessionStorage.setItem('veaSnd', '1'); sessionStorage.removeItem('g3off');
            }catch(_){}
            try{ if(!window.__veaCtx){ var AC2 = window.AudioContext || window.webkitAudioContext; if(AC2){ window.__veaCtx = new AC2(); } } if(window.__veaCtx && window.__veaCtx.resume) window.__veaCtx.resume(); }catch(_){}
            /* IMMERSIVE = SOUND ON: the tap that births the context also
               starts the engine (sound.js already inited before the choice,
               so it never re-arms itself here) */
            try{ if(window.VEASND && window.VEASND.enable) window.VEASND.enable(); }catch(_){}
            try{ var bb2 = document.getElementById('g3boot'); if(bb2) bb2.hidden = false; }catch(_){}
            try{ if(typeof inject === 'function'){ inject(); } else { v7go(); } }catch(_){ try{ location.reload(); }catch(__){} }
          }
        } else {
          try{
            sessionStorage.setItem('g3q', 'flat'); sessionStorage.setItem('g3lock', 'flat');
            sessionStorage.setItem('veaMode', 'print'); sessionStorage.removeItem('g3off');
          }catch(_){}
          var dirty = false;
          try{ dirty = !!(window.__g3on || (document.body && document.body.classList.contains('g3')) ||
                          document.querySelector('script[src*="/dist/spa"]') ||
                          (document.getElementById('g3boot') && !document.getElementById('g3boot').hidden)); }catch(_){}
          if(dirty){ askOff(); try{ location.reload(); }catch(_){} return; }   /* a 3D attempt already touched this page, only a clean load lands flat right */
          /* the page door answers too: one word while the editorial dresses */
          try{ var _n = document.getElementById('loaderNote'); if(_n) _n.textContent = 'Thinking\u2026'; }catch(_){}
          flatDress();
          try{ window.__veaWake && window.__veaWake(); }catch(_){}   /* grant video playback in THIS tap, no LAUNCH gate */
          askOff();
          try{ window.__veaSwSync && window.__veaSwSync(); }catch(_){}
        }
      });
      document.body.appendChild(d);
      /* KEYBOARD FOCUS-TRAP · Tab stays on the two doors, it never escapes to
         the page behind (where a keystroke could open or navigate something).
         The trap self-removes the moment the question leaves the DOM. */
      (function(m){
        m.setAttribute('tabindex', '-1');
        var onKey = function(e){
          if(!m.isConnected){ document.removeEventListener('keydown', onKey, true); return; }
          if(e.key !== 'Tab') return;
          var f = [].slice.call(m.querySelectorAll('button:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])'));
          if(!f.length){ e.preventDefault(); return; }
          var first = f[0], last = f[f.length - 1], a = document.activeElement, inside = m.contains(a) && a !== m;
          if(e.shiftKey){ if(!inside || a === first){ e.preventDefault(); last.focus(); } }
          else { if(!inside || a === last){ e.preventDefault(); first.focus(); } }
        };
        document.addEventListener('keydown', onKey, true);
        try{ m.focus(); }catch(_){}
      })(d);
      requestAnimationFrame(function(){ requestAnimationFrame(function(){ d.classList.add('on'); }); });
    };
    if(document.body) mountAsk();
    else {
      /* the question must be the FIRST paint, catch <body> the moment it
         parses; DOMContentLoaded is the fallback (mountAsk self-guards) */
      try{
        var mo2 = new MutationObserver(function(){
          if(document.body){ try{ mo2.disconnect(); }catch(_){} mountAsk(); }
        });
        mo2.observe(document.documentElement, { childList: true });
      }catch(e){}
      document.addEventListener('DOMContentLoaded', mountAsk);
    }
    /* ── FAILSAFE ── the veil hides ALL content until a door is picked; if a
       script error stops the question from mounting, lift it to the flat site
       rather than strand the visitor on a blank wordmark screen. (1) 8s: still
       pending and never entered the DOM; (2) absolute 45s guard. Neither fires
       while a mounted question is merely being read. */
    var veaRescue = function(){
      try{
        if(!window.__veaAskPend) return;
        flatDress(); askOff();
        try{ var dd = document.getElementById('veaAsk'); if(dd) dd.remove(); }catch(_){}
        try{ window.__veaWake && window.__veaWake(); }catch(_){}
        try{ window.__veaSwSync && window.__veaSwSync(); }catch(_){}
      }catch(_){ try{ askOff(); }catch(__){} }
    };
    setTimeout(function(){ if(window.__veaAskPend && !document.getElementById('veaAsk')) veaRescue(); }, 8000);
    setTimeout(veaRescue, 45000);
  }
  if(skip && !ASK){
    /* flat → not one byte of 3D, AND content shows at first paint: the
       3D-page reveal ceremonies (the #loader overlay, the scale-to-0
       entrance hold, the media-wait spinner) exist to make the 3D
       arrival polished, pure overhead for a flat 2D visitor. Neutralise
       them in the <head>, before first paint, so the page flies. */
    try{ window.__vflat = true; }catch(e){}
    try{
      document.documentElement.className += ' vflat';
      var vs = document.createElement('style');
      vs.textContent =
        'html.vflat #loader{opacity:0!important;visibility:hidden!important;pointer-events:none!important;transition:none!important}' +
        'html.vflat .sc-wait{display:none!important}' +
        'html.vflat [data-reveal],html.vflat .reveal{opacity:1!important;transform:none!important}';
      /* v8 · the phone's arrival blur is ON from the very first paint, the
         page may never flash sharp before the LAUNCH echo (flat-ui sharpens
         and lifts the class) */
      try{
        if(matchMedia('(pointer: coarse)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches){
          document.documentElement.className += ' v7pre';
          vs.textContent += 'html.v7pre main{filter:blur(5px);opacity:.6;}';
        }
      }catch(e){}
      (document.head || document.documentElement).appendChild(vs);
    }catch(e){}
    /* v8 · the 3D INVITATION: a phone's default stays the instant flat page, a small pill offers the lite room instead of a blocking door. Tapping it
       is a MANUAL choice (g3lock): the watchdog may thin the room afterwards
       but can never eject the visitor back to 2D. */
    try{
      if((matchMedia('(pointer: coarse)').matches || innerWidth <= 860) && !noGL
         && !qs.has('no3d') && !sessionStorage.getItem('g3off')){
        var mkPill = function(){
          if(!document.body || document.getElementById('v3dPill')) return;
          /* the pill belongs to the ARRIVAL alone, the home page, beside
             LAUNCH; every later page offers 3D through the space·page switch */
          if(!document.getElementById('loader')) return;
          var b3 = document.createElement('button');
          b3.id = 'v3dPill'; b3.type = 'button'; b3.setAttribute('data-nodec','');
          b3.textContent = '3D \u2192';
          b3.setAttribute('aria-label','Enter the 3D building (lite)');
          b3.style.cssText = 'position:fixed;right:calc(12px + env(safe-area-inset-right,0px));bottom:calc(58px + env(safe-area-inset-bottom,0px));z-index:2147482000;background:rgba(0,0,0,.72);color:#fff;border:1px solid rgba(255,255,255,.28);font-family:var(--font-mono,monospace);font-size:11px;letter-spacing:.22em;text-transform:uppercase;padding:12px 16px;border-radius:999px;min-height:44px;cursor:pointer;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);';
          b3.addEventListener('click', function(){
            try{ window.__veaSpaceNow(); }catch(_){ location.reload(); }
          });
          document.body.appendChild(b3);
        };
        if(document.body) mkPill(); else document.addEventListener('DOMContentLoaded', mkPill);
      }
    }catch(e){}
    return;                                 /* flat → the flat 2D site, fast */
  }
  /* ═══ THE DOOR (R14), a COLD deep link no longer waits behind a GPU
     guard: it ASKS which edition to open, instantly, and opens exactly
     what is clicked, no benchmark, no test. Skipped when the session
     already knows (a committed room → g3ok, a stored tier → g3q, a
     collapse → g3off, or a previous door choice → veaMode). If the room
     lags IN USE, the live watchdog can still step it down afterwards. */
  function inject(){
    /* v7.2 · the 3D engine yields the wire to FIRST PAINT: preloads and
       the module start only after the first frame is up (plus a breath),
       so CSS, fonts and the sheet never race the big chunk. */
    var v7go = function(){
      var boot = function(){ if(window.__vlog) window.__vlog('gate: booting dist/spa.js (bar → 90%)'); var s = document.createElement('script'); s.type = 'module'; s.src = '/dist/spa.js'; s.onerror = function(){ if(window.__vlog) window.__vlog('gate: dist/spa.js FAILED TO LOAD (module 404 / parse error)'); }; document.body.appendChild(s); };
      /* the REAL % loader: stream the 3D chunks so the bar tracks true bytes on
         the wire, the module import then reads them from cache, no second
         download. On a room-to-room bridge, or where streaming can't run, just
         boot; the plate lifts on the room's real first frame, never on a timer. */
      if(window.__g3bridge || !window.fetch || !window.ReadableStream){ CH.forEach(function(h){ var l = document.createElement('link'); l.rel = 'modulepreload'; l.href = h; document.head.appendChild(l); }); boot(); return; }
      var setPct = function(p){ p = p<0?0:p>100?100:p; var f = document.getElementById('g3fill'), t = document.getElementById('g3pct'); if(f) f.style.transform = 'scaleX(' + (p/100) + ')'; if(t) t.textContent = (p<10?'0':'') + Math.round(p); };
      var tot = [], got = [], kn = [], done = 0, sent = false;
      var go = function(){ if(sent) return; sent = true; if(window.__vlog) window.__vlog('gate: all chunks streamed → boot'); setPct(90); boot(); };
      for(var i=0;i<CH.length;i++){ tot[i]=0; got[i]=0; kn[i]=0; }
      var bump = function(){ if(window.__veaBootProgress) window.__veaBootProgress(); var T=0,G=0,any=false; for(var j=0;j<CH.length;j++){ if(kn[j]){ T+=tot[j]; G+=got[j]; any=true; } } if(any && T>0) setPct(Math.min(90, G/T*90)); };
      if(window.__vlog) window.__vlog('gate: streaming ' + CH.length + ' chunk(s)', CH.join(', '));
      CH.forEach(function(url, i){
        fetch(url).then(function(res){
          if(window.__vlog) window.__vlog('gate: chunk ' + (res.ok ? 'OK' : 'HTTP ' + res.status) + (res.ok ? '' : ' ✗'), url + ' (' + (res.headers.get('content-length') || '?') + 'b)');
          tot[i] = +res.headers.get('content-length') || 0; kn[i] = tot[i]>0 ? 1 : 0;
          if(!res.body || !res.body.getReader){ if(++done>=CH.length) go(); return; }
          var rd = res.body.getReader();
          (function pump(){ rd.read().then(function(r){ if(r.done){ if(++done>=CH.length) go(); return; } got[i]+=r.value.length; bump(); pump(); }).catch(function(){ if(++done>=CH.length) go(); }); })();
        }).catch(function(e){ if(window.__vlog) window.__vlog('gate: chunk FETCH FAILED', url + ' · ' + (e && e.message)); if(++done>=CH.length) go(); });
      });
      setTimeout(function(){ if(!sent && window.__vlog) window.__vlog('gate: 20s hang-guard fired → boot anyway'); go(); }, 20000);
    };
    var v7arm = function(){
      requestAnimationFrame(function(){ requestAnimationFrame(function(){ setTimeout(v7go, 40); }); });
    };
    if(document.body) v7arm();
    else document.addEventListener('DOMContentLoaded', v7arm);
  }
  var known = false;
  try{ known = !!(sessionStorage.getItem('g3ok') || sessionStorage.getItem('g3q') ||
                  sessionStorage.getItem('g3off') || sessionStorage.getItem('veaMode')); }catch(e){}
  if(skip && !window.__vflat){
    window.__vlog && window.__vlog('gate → FLAT (guard before inject)');
    try{ window.__vflat = true; document.documentElement.className += ' vflat';
      var _vs = document.createElement('style');
      _vs.textContent = 'html.vflat #loader{opacity:0!important;visibility:hidden!important}' +
        'html.vflat .sc-wait{display:none!important}' +
        'html.vflat [data-reveal],html.vflat .reveal{opacity:1!important;transform:none!important}';
      (document.head || document.documentElement).appendChild(_vs);
    }catch(_){}
    try{ window.__veaWake && window.__veaWake(); }catch(_){}
    return;
  }
  if(force || known){ window.__vlog && window.__vlog('gate → 3D (force=' + force + ' known=' + known + ') → inject'); inject(); return; }
  function chooser(){
    if(!document.body || document.getElementById('vDoor')) return;
    var d = document.createElement('div');
    d.id = 'vDoor'; d.setAttribute('data-nodec','');
    d.style.cssText = 'position:fixed;inset:0;z-index:2147483200;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:38px;font-family:var(--font-mono,monospace);color:#fff;text-transform:uppercase;text-align:center;';
    d.innerHTML =
      '<span style="font-size:10px;letter-spacing:.34em;opacity:.5">HOW WOULD YOU LIKE TO ENTER?</span>' +
      '<button type="button" data-mode="im" style="background:none;border:0;color:#fff;cursor:none;font-family:inherit;text-transform:uppercase;font-size:clamp(1.6rem,4.4vw,3rem);letter-spacing:.06em;line-height:1">IMMERSIVE' +
        '<span style="display:block;font-size:9px;letter-spacing:.3em;opacity:.45;margin-top:10px">REAL-TIME 3D · WALK THE BUILDING</span></button>' +
      '<button type="button" data-mode="pr" style="background:none;border:0;color:#fff;cursor:none;font-family:inherit;text-transform:uppercase;font-size:clamp(1.6rem,4.4vw,3rem);letter-spacing:.06em;line-height:1;opacity:.82">2D' +
        '<span style="display:block;font-size:9px;letter-spacing:.3em;opacity:.45;margin-top:10px">THE FLAT EDITION · INSTANT</span></button>';
    /* R14.1 · the door OWNS the invert-ball, so the branded cursor rides from
       the very first frame of a cold deep link, even on about.html, whose flat
       cursor (data.js) is deliberately skipped in 3D mode. Reuse the page's #cur
       when it already exists (works/work: data.js drives it); else mint one here
       and hand it to the room on entry. */
    var killCur = function(){};
    if(matchMedia('(min-width:861px) and (hover:hover) and (pointer:fine)').matches && !document.getElementById('cur')){
      var cc = document.createElement('div'); cc.id = 'cur'; cc.innerHTML = '<span></span>';
      document.body.appendChild(cc);
      var mx = innerWidth/2, my = innerHeight/2, cx = mx, cy = my, raf = 0;
      var onMove = function(e){ mx = e.clientX; my = e.clientY; };
      var onOver = function(e){ cc.className = (e.target.closest && e.target.closest('a,button')) ? 'mid' : ''; };
      document.addEventListener('mousemove', onMove, {passive:true});
      document.addEventListener('mouseover', onOver);
      (function g(){ cx += (mx-cx)*.22; cy += (my-cy)*.22; cc.style.left = cx.toFixed(1)+'px'; cc.style.top = cy.toFixed(1)+'px'; raf = requestAnimationFrame(g); })();
      /* on dismiss stop only THIS driver (keep the element): the room reuses
         #cur and attaches its own glide, two glide loops on one ball jitter */
      killCur = function(){ cancelAnimationFrame(raf); document.removeEventListener('mousemove', onMove); document.removeEventListener('mouseover', onOver); };
    }
    d.addEventListener('click', function(e){
      var b = e.target.closest('button[data-mode]'); if(!b) return;
      var im = b.getAttribute('data-mode') === 'im';
      try{ sessionStorage.setItem('veaMode', im ? 'immersive' : 'print'); }catch(_){}
      if(im){
        /* straight in: a WARM, LOCKED commit, no fps guard, no benchmark,
           no drop to flat */
        try{ sessionStorage.setItem('g3ok', '1');
             sessionStorage.setItem('g3q', 'auto'); sessionStorage.setItem('g3lock', 'full'); }catch(_){}
        killCur(); d.remove();
        inject();
      } else {
        try{ sessionStorage.setItem('g3q', 'flat'); sessionStorage.setItem('g3lock', 'flat'); }catch(_){}
        killCur(); location.replace(location.href);   /* flat-skip serves it at first paint */
      }
    });
    document.body.appendChild(d);
  }
  if(window.__veaAskPend){ /* THE FIRST QUESTION replaced the old door */ }
  else if(document.body) chooser();
  else document.addEventListener('DOMContentLoaded', chooser);
})();
