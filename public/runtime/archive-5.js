
/* v8 · the archive is the ONE page where the corner bar is a pure INDICATOR,
   not a control: it can never BE a room, so tapping "space" here used to open
   the lobby AS space, surprising. Instead the bar simply SHOWS the mode the
   session is in (space if you came from space), the active word struck, the
   whole thing unclickable. To actually move, the ROOM INDEX bottom-left
   (LOBBY / GALLERY / OFFICE / ARCHIVE, archive current) carries you, and a
   room opens in whatever mode the session holds. */
(function(){
  if(document.getElementById('g3q')) return;
  var MSW = window.innerWidth <= 860 || (window.matchMedia && matchMedia('(pointer: coarse)').matches);
  /* ── the mode INDICATOR (spans, never links, nothing to click) ── */
  var w = document.createElement('div');
  w.id = 'g3q'; w.setAttribute('data-nodec','');
  w.style.cssText = 'position:fixed;right:16px;bottom:18px;z-index:2147483000;font-family:var(--font-mono,monospace);font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:#fff;mix-blend-mode:difference;opacity:.8;pointer-events:none;display:inline-flex;align-items:center;justify-content:flex-end';
  /* v8 · two words only, space · page (no AUTO) */
  var LBL = MSW ? { lite:'space', flat:'page' } : { full:'space', flat:'page' };
  var LIST = MSW ? ['lite','flat'] : ['full','flat'];
  var lock = null; try{ lock = sessionStorage.getItem('g3lock'); }catch(_){}
  /* the active rung = the SESSION mode; no lock → page */
  var act = (lock === 'full' || lock === 'lite') ? (MSW ? 'lite' : 'full') : 'flat';
  w.innerHTML = LIST.map(function(k){
    var is = k === act;
    return '<span data-q="'+k+'" style="color:#fff;text-decoration:'+(is?'line-through':'none')+';opacity:'+(is?'.95':'.5')+'">'+LBL[k]+'</span>'; })
    .join('<i class="qsl" style="font-style:normal;opacity:.35;margin:0 6px">/</i>');
  document.body.appendChild(w);
  /* ── the ROOM INDEX bottom-left, the real navigation (desktop; the phone
     hides it by CSS, same as inside a room). Archive is the current room.

     It speaks the BUILDING's language (LOBBY · GALLERY · OFFICE · ARCHIVE)
     for the same four places the menu calls Home · Works · About · Archive.
     That reads naturally to someone who walked here out of a room and is
     still inside the space interface. To a visitor who chose PAGE, or who
     landed here straight from a search result and has never seen the
     building, it is a second, unexplained set of names for the same links.
     So it appears only when the session is actually in space.            ── */
  if(act !== 'flat' && !document.getElementById('g3rooms')){
    var rooms = [['Lobby','./'],['Gallery','works.html'],['Office','about.html'],['Archive','archive.html']];
    var nav = document.createElement('nav');
    nav.id = 'g3rooms'; nav.setAttribute('aria-label','Rooms'); nav.setAttribute('data-nodec','');
    nav.innerHTML = rooms.map(function(r){
      return r[0] === 'Archive'
        ? '<a aria-current="true">'+r[0]+'</a>'
        : '<a href="'+r[1]+'">'+r[0]+'</a>'; }).join('');
    document.body.appendChild(nav);
    requestAnimationFrame(function(){ nav.classList.add('on'); });
  }
})();
