
/* ── VEA boot tracer ── console breadcrumbs for the 3D boot pipeline. Filter
   the console by "VEA" to read the stage-by-stage timeline; the last line
   before a stall tells you exactly where it stopped. */
window.__vlog = function(stage, extra){
  try{ console.log('%c[VEA ' + Math.round(performance.now()) + 'ms] ' + stage +
    (extra != null ? ' · ' + extra : ''), 'color:#4cc2ff'); }catch(_){}
};
window.addEventListener('error', function(e){
  try{
    /* resource errors: only the boot-critical ones (scripts / dist chunks), media 404s (posters, logo-anim) are harmless noise, skip them */
    if(e && e.target && e.target.tagName && /^(SCRIPT|LINK)$/.test(e.target.tagName)){
      var u = e.target.src || e.target.href || '';
      window.__vlog('RESOURCE FAILED', u.split('/').pop() || u);
      return;
    }
    if(e && e.target && e.target.tagName) return;   /* img/video/source 404, noise */
    if(e && e.message) window.__vlog('JS ERROR', e.message + ' @ ' + ((e.filename||'').split('/').pop()) + ':' + e.lineno);
  }catch(_){}
}, true);
window.addEventListener('unhandledrejection', function(e){
  try{ window.__vlog('unhandled promise rejection', (e && e.reason && (e.reason.message || e.reason)) || ''); }catch(_){}
});
