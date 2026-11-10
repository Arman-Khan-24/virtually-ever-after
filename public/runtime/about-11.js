/* the site's flat cursor + behaviours, FLAT mode only; in 3D the office has
   its own invert cursor, so loading data.js here would spawn a second one */
if(window.__vflat !== false || (window.matchMedia && matchMedia('(pointer: coarse)').matches)){
  if(window.__veaNeedFlatData) window.__veaNeedFlatData();
  else if(!document.querySelector('script[data-veadata]')){
    var _d = document.createElement('script'); _d.src = '/data.js?v=28'; _d.defer = true;
    _d.setAttribute('data-veadata', ''); document.head.appendChild(_d);
  }
}