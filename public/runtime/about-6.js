
(function(){
  try{
    var q = new URLSearchParams(location.search);
    if(window.__vflat) return;   /* 2D: the gate already chose flat, no boot veil, ever */
    if(window.__veaAskPend) return;   /* the FIRST QUESTION stands, its answer raises the plate */
    var man = (function(){ try{ var s = sessionStorage.getItem('g3lock'); return s === 'full' || s === 'lite'; }catch(_){ return false; } })();
    if(q.has('no3d')) return;
    if(sessionStorage.getItem('g3off') && !man) return;      /* a LOCKED session ignores stale demotions */
    if(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches && !man) return;   /* the plate is a cover, not motion */
    var c = document.createElement('canvas');
    if(!c.getContext('webgl2') && !c.getContext('webgl')) return;
    /* FLAT-SKIP: the boot veil hides the flat→3D hand-over, but in flat
       the 3D never boots, so nothing would ever lift it and it would sit
       forever. Mirror the gate: if 3D won't load, no loader plate. */
    var gq = q.get('g3q');
    if(gq !== 'full' && gq !== 'lite' && !q.has('force3d') && !man){
      if(sessionStorage.getItem('g3q') === 'flat' || gq === 'flat'
         || (window.matchMedia && matchMedia('(pointer: coarse)').matches)
         || (navigator.connection && navigator.connection.saveData)) return;
    }
    var b = document.getElementById('g3boot');
    b.hidden = false;
    /* v8 · SPACE boot on a phone: the flat page may NEVER flash under the
       plate, hide it outright until the room commits (liftBootVeil clears
       this class on commit AND on death, so a real failure still falls
       back to the readable flat page). */
    try{
      if(matchMedia('(pointer: coarse)').matches || innerWidth <= 860){
        document.documentElement.className += ' spaceboot';
        var sb = document.createElement('style');
        sb.textContent = 'html.spaceboot main,html.spaceboot .w-foot,html.spaceboot .topbar,html.spaceboot header{visibility:hidden!important}';
        (document.head || document.documentElement).appendChild(sb);
      }
    }catch(e){}
    try{
      var hand = sessionStorage.getItem('g3hand');
      if(hand){
        sessionStorage.removeItem('g3hand');
        window.__g3bridge = true;   /* room-to-room: bridge the frozen pixels, hide loader chrome */
        b.classList.add('bridge');
        /* a room-to-room turn: the site loader must NOT appear, the
           hanging pixels are the only thing on screen */
        var st = document.createElement('style');
        st.textContent = '#loader{display:none!important;}';
        document.head.appendChild(st);
        var im = document.createElement('img');
        im.src = hand;
        im.alt = '';
        im.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;'
          + 'object-fit:cover;filter:none;opacity:1;';
        b.appendChild(im);
        if(b.firstElementChild !== im) b.firstElementChild.style.display = 'none';
      }
    }catch(_){}
    /* no fixed timer: the veil lifts only when the room actually commits or dies, never an arbitrary countdown */
  }catch(_){}
})();
