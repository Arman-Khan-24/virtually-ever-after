
/* ── the logo animation loads ONCE, and only where it is actually seen ──
   Three surfaces wear the same 1.7MB mark: the boot plate, the site loader and
   the hero. They are mutually exclusive, the plate belongs to a 3D boot, the
   loader to the film wait, the hero to the flat page, yet every one of them
   fetched the file, so a flat visit paid for two marks it would never show and
   the home page pulled the same bytes three times over.

   The sources sit in data-src and are attached the moment a mark becomes
   genuinely visible, whatever route the visit took. Nothing is coupled to the
   mode logic: this only ever asks "can it be seen right now?", so it stays
   correct through the ask, the flat gate, a room-to-room bridge and the boot
   rescue alike. A second mark that lights up later re-uses the browser cache
   instead of the network. */
(function(){
  function seen(v){
    if(!v || !v.isConnected) return false;
    for(var e = v; e && e.nodeType === 1; e = e.parentElement){
      if(e.hasAttribute('hidden')) return false;
      var cs = getComputedStyle(e);
      if(cs.display === 'none' || cs.visibility === 'hidden') return false;
    }
    var r = v.getBoundingClientRect();
    if(!(r.width > 0 && r.height > 0)) return false;
    /* the boot plate is a full-screen cover: while it stands, the loader mark
       and the hero mark are behind it and nobody is looking at them. Only the
       plate's own mark counts as seen. */
    var plate = document.getElementById('g3boot');
    if(plate && !plate.hidden && !plate.contains(v)) return false;
    return true;
  }
  function arm(v){
    if(v.__armed) return; v.__armed = 1;
    var got = 0;
    v.querySelectorAll('source[data-src]').forEach(function(s){ s.src = s.getAttribute('data-src'); got++; });
    if(!got) return;
    try{ v.load(); }catch(_){}
    var p = v.play(); if(p && p.catch) p.catch(function(){});
  }
  var stop = 0;
  (function watch(){
    var left = 0;
    document.querySelectorAll('video source[data-src]').forEach(function(s){
      var v = s.parentNode;
      if(v.__armed) return;
      left++;
      if(seen(v)) arm(v);
    });
    if(left && ++stop < 2400) requestAnimationFrame(watch);   /* ~40s, then let it be */
  })();
})();
