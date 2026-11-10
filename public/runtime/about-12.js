
/* sections reveal as they enter the viewport, once each, gently staggered */
(function(){
  if(document.body && document.body.classList.contains('g3')) return;   /* a live 3D room hides the flat page anyway */
  var els = Array.prototype.slice.call(document.querySelectorAll('.works-head,.acc,.w-foot'));
  if(!('IntersectionObserver' in window) ||
     (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches)){
    els.forEach(function(el){ el.classList.add('on'); });
    return;
  }
  var seen = 0;
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(!en.isIntersecting) return;
      var el = en.target;
      io.unobserve(el);
      el.style.transitionDelay = Math.min(seen++ * 90, 360) + 'ms';
      el.classList.add('on');
      setTimeout(function(){ el.style.transitionDelay = ''; }, 1200);
    });
  }, {threshold: .12});
  els.forEach(function(el){ io.observe(el); });
})();
