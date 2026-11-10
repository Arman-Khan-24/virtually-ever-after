
(function(){
'use strict';
/* the DOM menu belongs to the HOST page on every route (v6): the office
   room no longer wires its own copy, so one binding serves flat and 3D */
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
document.addEventListener('keydown', function(e){ if(e.key === 'Escape') menuSet(false); });

/* the accordion + reveal are the FLAT page's own, skip under the office */
/* only a COMMITTED 3D room skips this, NOT a pending ASK. Under body.g3 the
   flat main is opacity:0/visibility:hidden anyway, so setting up the accordion
   + reveal here is harmless; and it means a later ASK→PAGE has working sections
   instead of a page frozen black because the reveal bailed at load. */
if(document.body && document.body.classList.contains('g3')){ window.__vlog && window.__vlog('flat reveal skipped · 3D room committed'); return; }
window.__vlog && window.__vlog('flat reveal ACTIVE · accordion + reveal set up');

/* ── accordion: one section open at a time ── */
function setOpen(acc, open){
  var body = acc.querySelector('.acc-body');
  acc.classList.toggle('open', open);
  acc.querySelector('.acc-head').setAttribute('aria-expanded', String(open));
  body.style.maxHeight = open ? body.scrollHeight + 'px' : '0px';
}
var accs = Array.prototype.slice.call(document.querySelectorAll('.acc'));

/* v7.1 · an accordion OPENS DOWNWARD, so a low section can unfold out
   of sight: once the fold finishes (.6s ease), the page glides so the
   opened title sits right under the top bar. */
function v7AccTop(host){
  setTimeout(function(){
    try{
      var r = host.getBoundingClientRect();
      var y = r.top + (window.scrollY || window.pageYOffset) - 88;
      var rm = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: Math.max(0, y), behavior: rm ? 'auto' : 'smooth' });
    }catch(_){}
  }, 620);
}
accs.forEach(function(acc){
  acc.querySelector('.acc-head').addEventListener('click', function(){
    var willOpen = !acc.classList.contains('open');
    accs.forEach(function(o){ if(o !== acc) setOpen(o, false); });
    setOpen(acc, willOpen);
    if(willOpen) v7AccTop(acc);
  });
});

/* ── About ⇄ Services: two tabs, one flat page ── */
var tabAbout = document.getElementById('tab-about'),
    tabServices = document.getElementById('tab-services'),
    panelAbout = document.getElementById('panel-about'),
    panelServices = document.getElementById('panel-services');
var svcShown = false;
function showTab(which){
  var toSvc = which === 'services';
  if(panelServices) panelServices.hidden = !toSvc;
  if(panelAbout) panelAbout.hidden = toSvc;
  if(tabServices){ tabServices.classList.toggle('is-on', toSvc); tabServices.setAttribute('aria-selected', String(toSvc)); }
  if(tabAbout){ tabAbout.classList.toggle('is-on', !toSvc); tabAbout.setAttribute('aria-selected', String(!toSvc)); }
  /* the service sections sit under the same reveal system but start hidden,
     so the viewport observer never lights them, reveal on first show */
  if(toSvc && !svcShown){
    svcShown = true;
    if(panelServices) Array.prototype.forEach.call(
      panelServices.querySelectorAll('.acc,.abs-start'),
      function(el){ el.classList.add('on'); });
  }
  /* a fresh panel opens with everything closed, heights honest */
  accs.forEach(function(o){ setOpen(o, false); });
}
/* the tabs are anchored at the top and NEVER move: a click swaps only the
   content below, and lands you back at the top so the header sits at the
   exact same place every time (whichever tab, whatever the panel height).
   The jump is INSTANT, the page has html{scroll-behavior:smooth}, which
   would otherwise ANIMATE scrollTo(0,0) and make the header glide down into
   place after a scrolled switch; a temporary inline scroll-behavior:auto
   (which beats the stylesheet) forces a hard snap, so the bar never slides. */
function pickTab(which){
  showTab(which);
  try{
    var de = document.documentElement, prev = de.style.scrollBehavior;
    de.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    de.style.scrollBehavior = prev;
  }catch(_){ try{ window.scrollTo(0, 0); }catch(__){} }
}
if(tabAbout) tabAbout.addEventListener('click', function(){ pickTab('about'); });
if(tabServices) tabServices.addEventListener('click', function(){ pickTab('services'); });
window.addEventListener('resize', function(){
  accs.forEach(function(acc){
    if(acc.classList.contains('open'))
      acc.querySelector('.acc-body').style.maxHeight =
        acc.querySelector('.acc-body').scrollHeight + 'px';
  });
});
/* the story image loads late, keep the open section's height honest */
document.addEventListener('load', function(e){
  if(e.target.tagName !== 'IMG') return;
  var acc = e.target.closest('.acc');
  if(acc && acc.classList.contains('open'))
    acc.querySelector('.acc-body').style.maxHeight =
      acc.querySelector('.acc-body').scrollHeight + 'px';
}, true);

/* deep links: #contact opens that section; #services / #about pick a tab;
   a #hash on a service accordion switches to the Services tab first */
function openHash(){
  var id = location.hash.replace('#','');
  if(!id) return;
  if(id === 'services'){ showTab('services'); return; }
  if(id === 'about'){ showTab('about'); return; }
  var acc = document.getElementById(id) || document.getElementById('acc-' + id);
  if(acc && acc.classList.contains('acc')){
    showTab(panelServices && panelServices.contains(acc) ? 'services' : 'about');
    accs.forEach(function(o){ if(o !== acc) setOpen(o, false); });
    setOpen(acc, true);
    setTimeout(function(){ acc.scrollIntoView({behavior:'smooth', block:'start'}); }, 80);
  }
}
window.addEventListener('hashchange', openHash);
openHash();   /* everything closed on load unless a #hash targets a section */
})();
