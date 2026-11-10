
/* ── v3 desktop behaviours: cursor, magnetism, liquid, prefetch,
      idle attract, keyboard walk ── */
(function(){
  if(!window.matchMedia('(min-width:861px) and (hover:hover) and (pointer:fine)').matches) return;
  var stage = document.getElementById('scStage'),
      cats = document.getElementById('scCats');

  /* the hand's position (feeds the liquid), the cursor itself lives
     in data.js, on every page */
  var mx = innerWidth / 2, my = innerHeight / 2;
  var lastX = mx, lastY = my, lastT = performance.now();
  document.addEventListener('mousemove', function(e){ mx = e.clientX; my = e.clientY; }, {passive:true});

  /* R16: the magnetic name drift, the liquid displacement bend and the
     chromatic beat are RETIRED on desktop, no distortion, no shape play,
     no frame; the carousel speaks with scale and light alone. */

  /* a hovered category warms its first stills, the door opens onto a
     room that is already lit */
  document.addEventListener('mouseover', function(e){
    var b = e.target.closest && e.target.closest('.sc-cat');
    if(!b || b._warm) return;
    b._warm = true;
    ((window.__v3state && __v3state.items) || []).filter(function(it){ return it.category === b.dataset.cat; })
      .slice(0, 8).forEach(function(it){
        if(it.thumb && /\.(jpe?g|png|webp|avif|gif)(\?|#|$)/i.test(it.thumb)){
          var im = new Image(); im.src = it.thumb;
        }
      });
  });

  /* idle attract: left alone, the pieces breathe in turn, the site
     presents itself. Any input hands the room back. */
  var AT = parseInt(new URLSearchParams(location.search).get('attract') || '20000', 10);
  var idleT = null, attrT = null, attrI = -1;
  function stopAttract(){
    clearInterval(attrT); attrT = null;
    stage.querySelectorAll('.sc-item.breathe').forEach(function(el){ el.classList.remove('breathe'); });
  }
  function startAttract(){
    if(attrT) return;
    attrT = setInterval(function(){
      var all = stage.querySelectorAll('.sc-item');
      if(!all.length) return;
      attrI = (attrI + 1) % all.length;
      stage.querySelectorAll('.sc-item.breathe').forEach(function(el){ el.classList.remove('breathe'); });
      all[attrI].classList.add('breathe');
    }, 1600);
  }
  function armIdle(){
    stopAttract();
    clearTimeout(idleT);
    idleT = setTimeout(startAttract, AT);
  }
  ['mousemove','mousedown','keydown','wheel','touchstart'].forEach(function(ev){
    document.addEventListener(ev, armIdle, {passive:true});
  });
  armIdle();

  /* arrows walk the pieces, Enter opens the one under the ring */
  var kbdI = -1;
  document.addEventListener('keydown', function(e){
    var all = stage.querySelectorAll('.sc-item');
    if(!all.length) return;
    if(e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
      e.preventDefault();
      kbdI = e.key === 'ArrowRight'
        ? (kbdI + 1) % all.length
        : (kbdI - 1 + all.length) % all.length;
      stage.querySelectorAll('.sc-item.kbd').forEach(function(el){ el.classList.remove('kbd'); });
      var it = all[kbdI];
      it.classList.add('kbd');
      it.dispatchEvent(new MouseEvent('mouseover', {bubbles:true}));
    } else if(e.key === 'Enter' && kbdI >= 0){
      e.preventDefault();
      all[kbdI].click();
    }
  });
})();
