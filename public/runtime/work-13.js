
/* ── v3: the works UI under a piece carries the SAME desktop manners as
      the works page, magnetic names, liquid strokes, keyboard walk,
      idle attract, all of it awake only while it is on screen ── */
(function(){
  if(!window.matchMedia('(min-width:861px) and (hover:hover) and (pointer:fine)').matches) return;
  var mainEl2 = document.querySelector('main');
  function dexOn(){
    return mainEl2.getBoundingClientRect().bottom < window.innerHeight - 1;
  }
  function dexStageEl(){ return document.getElementById('dexStage'); }
  var mx = innerWidth / 2, my = innerHeight / 2;
  var lastX = mx, lastY = my, lastT = performance.now();
  document.addEventListener('mousemove', function(e){ mx = e.clientX; my = e.clientY; }, {passive:true});

  /* R16: magnet drift, liquid bend and the chromatic beat are retired on
     desktop, scale and light only. */

  /* idle attract, only while the works UI holds the screen */
  var AT = parseInt(new URLSearchParams(location.search).get('attract') || '20000', 10);
  var idleT = null, attrT = null, attrI = -1;
  function stopAttract(){
    clearInterval(attrT); attrT = null;
    var st = dexStageEl();
    if(st) st.querySelectorAll('.sc-item.breathe').forEach(function(el){ el.classList.remove('breathe'); });
  }
  function startAttract(){
    if(attrT || !dexOn()) return;
    attrT = setInterval(function(){
      var st = dexStageEl();
      if(!st || !dexOn()) return;
      var all = st.querySelectorAll('.sc-item');
      if(!all.length) return;
      attrI = (attrI + 1) % all.length;
      st.querySelectorAll('.sc-item.breathe').forEach(function(el){ el.classList.remove('breathe'); });
      all[attrI].classList.add('breathe');
    }, 1600);
  }
  function armIdle(){
    stopAttract();
    clearTimeout(idleT);
    idleT = setTimeout(startAttract, AT);
  }
  ['mousemove','mousedown','keydown','wheel','touchstart','scroll'].forEach(function(ev){
    document.addEventListener(ev, armIdle, {passive:true});
  });
  armIdle();

  /* arrows walk the pieces, Enter opens, while the works UI shows */
  var kbdI = -1;
  document.addEventListener('keydown', function(e){
    if(!dexOn()) return;
    var st = dexStageEl();
    if(!st) return;
    var all = st.querySelectorAll('.sc-item');
    if(!all.length) return;
    if(e.key === 'ArrowRight' || e.key === 'ArrowLeft'){
      e.preventDefault();
      kbdI = e.key === 'ArrowRight'
        ? (kbdI + 1) % all.length
        : (kbdI - 1 + all.length) % all.length;
      st.querySelectorAll('.sc-item.kbd').forEach(function(el){ el.classList.remove('kbd'); });
      var it = all[kbdI];
      it.classList.add('kbd');
      it.dispatchEvent(new MouseEvent('mouseover', {bubbles:true}));
    } else if(e.key === 'Enter' && kbdI >= 0){
      e.preventDefault();
      all[kbdI].click();
    }
  });
})();
