
(function(){
  var ROOM_SAY = {
    'Lobby':'The building in street view. Scroll to step inside.',
    'Gallery':'The works, hung along the nave. Click a screen to enter one.',
    'Office':'About the studio: who we are, what we make, how we work.',
    'Archive':'Every project we have made, indexed in full.',
    'Rotunda':'One work, up close, turning in the round.'
  };
  var MODE_SAY = {
    auto:'Auto: the best mode for this device.',
    full:'Space: the walkable real time 3D building.',
    lite:'Space, lighter: the 3D building with fewer effects.',
    flat:'Page: the fast, quiet 2D edition.',
    space:'Space: the walkable real time 3D building.',
    page:'Page: the fast, quiet 2D edition.'
  };
  var zone = document.createElement('div');
  zone.id = 'veaDecipher'; zone.setAttribute('aria-hidden','true');
  (document.body || document.documentElement).appendChild(zone);
  var restT = 0, scrT = 0, GL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/:.,';
  function clearTimers(){ if(restT){ clearTimeout(restT); restT = 0; } if(scrT){ clearInterval(scrT); scrT = 0; } }
  function say(txt){
    clearTimers();
    if(!txt){ zone.classList.remove('on'); zone.classList.remove('struck'); zone.textContent = ''; return; }
    zone.classList.add('on');
    var steps = Math.min(20, txt.length + 6), frame = 0;   /* decode-on-reveal */
    scrT = setInterval(function(){
      frame++;
      var cut = Math.floor(txt.length * (frame / steps)), out = '';
      for(var i = 0; i < txt.length; i++){
        var c = txt.charAt(i);
        out += (i < cut || c === ' ') ? c : GL.charAt((Math.random() * GL.length) | 0);
      }
      zone.textContent = out;
      if(frame >= steps){ clearInterval(scrT); scrT = 0; zone.textContent = txt; }
    }, 24);
  }
  function rest(){ if(restT) clearTimeout(restT); restT = setTimeout(function(){ say(''); }, 90); }
  /* #4 · in 3D the room already owns a bottom-centre info line (#g3info) that
     scrambles in the media in front of you; feed room-label and mode hovers
     into THAT same line so there is only ever one. In flat there is none, so
     fall back to our own zone. */
  var giPrev = null;
  function roomLine(){
    /* the room's own bottom line: gallery/hall/work carry #g3info; the office room carries #info */
    return document.getElementById('g3info') ||
           ((document.body && document.body.classList.contains('g3')) ? document.getElementById('info') : null);
  }
  function emit(txt, struck){
    var gi = roomLine();
    if(gi){
      if(!window.__veaHoldInfo){ giPrev = (gi._scrGoal != null ? gi._scrGoal : gi.textContent); }   /* the STABLE target, never mid-scramble garbage */
      window.__veaHoldInfo = true;
      try{ if(window.VEA && VEA.scrambleTo){ VEA.scrambleTo(gi, txt, 520); } else { gi.textContent = txt; } }catch(_){ try{ gi.textContent = txt; }catch(__){} }
      try{ gi.style.textDecoration = struck ? 'line-through' : ''; }catch(_){}
      clearTimers(); zone.classList.remove('on');
    } else {
      zone.classList.toggle('struck', !!struck); say(txt);
    }
  }
  function release(){
    var gi = roomLine();
    if(window.__veaHoldInfo){
      window.__veaHoldInfo = false;
      if(gi){ try{ gi.style.textDecoration = '';
        var back = (giPrev != null ? giPrev : '');
        if(window.VEA && VEA.scrambleTo){ VEA.scrambleTo(gi, back, 420); } else { gi.textContent = back; }
      }catch(_){} }
      giPrev = null;
    }
    rest();
  }
  /* the three chrome controls read out too, a second-level line only while hovered */
  var CHROME_SAY = {
    g3look:'Auto-look: the walk eases and the gaze turns toward the works. Untick to hold dead straight.',
    g3ctl:'The controls lesson again: how to move, look, and open a work.',
    sndT:'Immersive sound, on or off.'
  };
  document.addEventListener('mouseover', function(e){
    var t = e.target; if(!t || !t.closest) return;
    var room = t.closest('#g3rooms a'); if(room){ emit(ROOM_SAY[(room.textContent||'').trim()] || '', false); return; }
    var mode = t.closest('#g3q a[data-q], #menuMode a[data-q]'); if(mode){ emit(MODE_SAY[mode.getAttribute('data-q')] || '', mode.dataset.active === '1'); return; }
    var chr = t.closest('#g3look, #g3ctl, #sndT'); if(chr){ emit(CHROME_SAY[chr.id] || '', false); return; }
  }, true);
  document.addEventListener('mouseout', function(e){
    var t = e.target; if(t && t.closest && t.closest('#g3rooms a, #g3q a, #menuMode a, #g3look, #g3ctl, #sndT')) release();
  }, true);
  /* v8 · TOUCH: a tap synthesizes mouseover but never mouseout, the tapped
     control's description used to PIN the bottom line until the next tap
     landed somewhere else. On a coarse pointer every emit is answered by its
     own release a beat later, so the line reads out and then breathes back. */
  if(window.matchMedia && matchMedia('(pointer: coarse)').matches){
    var _tapT = 0;
    document.addEventListener('mouseover', function(e){
      var t = e.target; if(!t || !t.closest) return;
      if(t.closest('#g3rooms a, #g3q a, #menuMode a, #g3look, #g3ctl, #sndT')){
        clearTimeout(_tapT); _tapT = setTimeout(release, 2600);
      }
    }, true);
  }
  document.addEventListener('click', function(e){
    var t = e.target; if(t && t.closest && t.closest('#g3rooms a, #g3q a, #menuMode a, .menu-link, .menu-cta')){ clearTimers(); zone.classList.remove('on'); }
  }, true);
  window.addEventListener('pagehide', function(){ clearTimers(); zone.classList.remove('on'); });
  window.__veaDecipher = function(txt){ if(txt) say(txt); else rest(); };
})();
