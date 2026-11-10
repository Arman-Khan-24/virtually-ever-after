
(function(){
  /* ── the site's own invert-dot cursor (desktop) ── */
  (function(){
    if(!window.matchMedia || !matchMedia('(min-width:861px) and (hover:hover) and (pointer:fine)').matches) return;
    var boot = function(){
      var cur = document.createElement('div'); cur.id = 'cur'; cur.innerHTML = '<span></span>';
      document.body.appendChild(cur);
      document.documentElement.classList.add('hascur');   /* only now may the OS pointer hide */
      var mx = innerWidth/2, my = innerHeight/2, cx = mx, cy = my;
      document.addEventListener('mousemove', function(e){ mx = e.clientX; my = e.clientY; }, {passive:true});
      document.addEventListener('mouseover', function(e){
        var t = e.target;
        if(t.closest && t.closest('input,textarea')){ cur.className = 'off'; return; }   /* let the caret lead */
        if(t.closest && t.closest('a,button,select,[role="button"]')){ cur.className = 'mid'; return; }
        cur.className = '';
      });
      (function glide(){ cx += (mx-cx)*.22; cy += (my-cy)*.22;
        cur.style.left = cx.toFixed(1)+'px'; cur.style.top = cy.toFixed(1)+'px';
        requestAnimationFrame(glide); })();
    };
    if(document.body) boot(); else document.addEventListener('DOMContentLoaded', boot);
  })();

  /* ── menu (modal, focus-trapped) ── */
  var menu = document.getElementById('menu'), menuBtn = document.getElementById('menuBtn');
  try{ menu.setAttribute('aria-hidden', 'true'); }catch(_){}
  function menuSet(open){
    menu.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
    if(open){
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
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && menu.classList.contains('open')) menuSet(false); });

  /* ── the wizard: one question at a time, Send at the end ── */
  var form = document.getElementById('wiz'),
      steps = [].slice.call(form.querySelectorAll('.wiz-step')),
      count = document.getElementById('wizCount'),
      fill = document.getElementById('wizFill'),
      nextB = document.getElementById('wizNext'),
      backB = document.getElementById('wizBack'),
      top = document.getElementById('wizTop'),
      done = document.getElementById('wizDone'),
      doneMsg = document.getElementById('wizDoneMsg'),
      alt = document.querySelector('.wiz-alt'),
      idx = 0, total = steps.length;

  function val(n){ var el = form.elements[n]; return el ? String(el.value || '').trim() : ''; }
  function pad(n){ return (n < 10 ? '0' : '') + n; }
  function setErr(step, msg){ var e = step.querySelector('[data-err]'); if(e) e.textContent = msg || ''; }

  function validStep(i){
    var step = steps[i], field = step.getAttribute('data-field');
    if(field === 'name'){ if(!val('name')){ setErr(step, 'A name, however short.'); return false; } }
    if(field === 'email'){
      var e = val('email');
      if(!e || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){ setErr(step, 'A valid email, so we can reply.'); return false; }
    }
    if(field === 'message'){ if(!val('message')){ setErr(step, 'Even one line helps us begin.'); return false; } }
    setErr(step, '');
    return true;
  }

  function show(i){
    steps.forEach(function(s, n){ s.classList.toggle('active', n === i); });
    idx = i;
    count.textContent = 'Question ' + pad(i + 1) + ' of ' + pad(total);
    fill.style.width = ((i + 1) / total * 100) + '%';
    backB.hidden = i === 0;
    nextB.textContent = i === total - 1 ? 'Send it ✉' : 'Next →';
    var f = steps[i].querySelector('input,select,textarea');
    if(f){ setTimeout(function(){ try{ f.focus(); }catch(_){} }, 60); }
  }

  function advance(){
    if(!validStep(idx)) return;
    if(idx < total - 1){ show(idx + 1); }
    else submit();
  }

  nextB.addEventListener('click', advance);
  backB.addEventListener('click', function(){ if(idx > 0) show(idx - 1); });
  form.addEventListener('keydown', function(e){
    if(e.key !== 'Enter') return;
    var t = e.target;
    if(t && t.tagName === 'TEXTAREA' && !(e.metaKey || e.ctrlKey)) return;   /* newline in the message */
    e.preventDefault(); advance();
  });

  function finish(msg){
    form.style.display = 'none'; top.style.display = 'none';
    if(alt) alt.style.display = 'none';
    doneMsg.textContent = msg; done.classList.add('on');
  }
  function submit(){
    try{
      var payload = {name:val('name'),email:val('email'),project_type:val('project_type'),budget:val('budget'),message:val('message')};
      window.saveLocalDraft('project',payload);
      finish('Saved on this device. Your project draft has been downloaded; no message was sent.');
    }catch(error){ setErr(steps[idx], 'The draft could not be saved. Please try again.'); }
  }
  show(0);
})();
