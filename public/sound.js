/* ═════════════════════════════════════════════════════════════════════
   VEA SOUND v5, the site's voice. One plain file; the synthesis is
   WebAudio, plus SAMPLED voices fetched lazily from the studio's file
   CDN (a gallery murmur for the figures, per-founder/story themes in
   the office, the launch bell). Every fetch fails SOFT: absent files
   fall back to synthesis or silence, never an error.

   v5, after the fourth listening session:
   · the head-turn sample is RETIRED: the motion voice is now designed
     in-house, a slight synthesised air-glide, and it is driven by the
     camera's TRUE per-frame velocity (turn + travel), so a mouse turn,
     a held W-walk and a momentum glide after a hard scroll all speak,
     exactly while the picture moves, never after it
   · the intro orbit has its own bed: a light cityscape air, deep air,
     far hums, soft panned passers-by, gently tempo-varied, that walks
     out under the launch bell as the room's own chord walks in
   · the lobby now ARRIVES audibly: the build-up after the intro plays
     the gather, the floor lands with a settle, the screens chime home
   · services pages carry a barely-uptempo synthesised pulse at 40%
     while the room air settles to 50%
   · the corner ring only turns WHILE sound is on; off, it stands
     still as a hollow closed circle (the big invitation still breathes)
   · route pace: the ash tempo is per-journey (salon↔work 1.7×, any→
     archive .8×) and every voice stretches with it, set in g3core
   ═════════════════════════════════════════════════════════════════ */
(function(){
'use strict';
if(window.VEASND) return;

/* PHONES ARE SILENT: no engine, no control, no audio, the mobile site is
   flat and quiet by design. A full no-op API keeps every caller safe. */
var MOBQ = false;
try{ MOBQ = window.innerWidth <= 860 || matchMedia('(pointer: coarse)').matches; }catch(_){}
/* v8 · SPACE mode on a phone DOES sing: the manual immersive lock means the
   visitor chose the room, sound starts at the first touch and a tiny
   speaker toggle rides the corner. PAGE mode keeps the old silence: no
   engine, no control, no audio. */
var SPACEQ = false;
/* v8.x · space mode is g3lock 'lite' OR 'full' (auto/space both lock 'full'),
   and veaMode 'immersive'. The old check only accepted 'lite', so a narrow
   viewport in FULL/AUTO killed the sound toggle entirely, "where is sound?". */
try{ var _lk = sessionStorage.getItem('g3lock');
     SPACEQ = (_lk === 'lite' || _lk === 'full') && sessionStorage.getItem('veaMode') === 'immersive'; }catch(_){}
if(MOBQ && !SPACEQ){
  var noop = function(){};
  window.VEASND = { enable: noop, disable: noop, toggle: noop,
    on: function(){ return false; },
    room: noop, duck: noop, veil: noop, theme: noop,
    ash: noop, condense: noop, settle: noop,
    click: noop, hover: noop, open: noop, close: noop,
    slide: noop, motion: noop, wind: noop, presence: noop,
    fadeOut: noop, launch: noop, entered: noop };
  return;
}
/* FLAT pages (no live 3D room): the room airs never play, flat is a
   quiet, editorial surface. UI blips survive at 30%. (__vflat is set by
   the head gate before this deferred script; undefined = pure-flat page.) */
function FLATQ(){ return window.__vflat !== false; }

var PREF = 'veaSnd';
var SAMPLES = {
  murmur: "/assets/offline/ae8399a61a56c7f1.mp3",
  deniz:  "/assets/offline/6c7f8f2a592022da.mp3",
  yigit:  "/assets/offline/139fa317f6813ecf.mp3",
  story:  "/assets/offline/138c2c54c0c3df80.mp3",
  launch: "/assets/offline/a08bad65f0e1d5ce.mp3"
};

var ctx = null, master = null, masterLP = null, ambBus = null, sfxBus = null, analyser = null;
var on = false, want = false, curMood = null, ambNodes = [], ambOscs = [], colorTimer = null, bloomTimer = null;
var sndLeft = false;   /* a depart's walk-away must not be resurrected by a tab return */

function pref(){ try{ return sessionStorage.getItem(PREF); }catch(_){ return null; } }
function setPref(v){ try{ sessionStorage.setItem(PREF, v); }catch(_){} }
var REDUCED = false;
try{ REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches; }catch(_){}

/* ── the ease: every gain change rides a cosine curve, never a step ── */
function glide(param, to, dur){
  if(!ctx) return;
  var from = param.value, t0 = ctx.currentTime;
  try{ param.cancelScheduledValues(t0); }catch(_){}
  if(dur <= 0.02){ param.setValueAtTime(to, t0); return; }
  var N = 24, curve = new Float32Array(N);
  for(var i = 0; i < N; i++){
    var p = i / (N - 1);
    curve[i] = from + (to - from) * (0.5 - 0.5 * Math.cos(Math.PI * p));
  }
  try{ param.setValueCurveAtTime(curve, t0, dur); }
  catch(_){ param.linearRampToValueAtTime(to, t0 + dur); }
}

function bootCtx(){
  if(ctx) return true;
  /* v8 · adopt the context BORN IN THE CHOICE TAP (__veaSpaceNow), it is
     already running, so the air starts the very instant SPACE was chosen */
  if(window.__veaCtx){ ctx = window.__veaCtx; }
  var AC = window.AudioContext || window.webkitAudioContext;
  if(!ctx){ if(!AC) return false; ctx = new AC(); }
  master = ctx.createGain(); master.gain.value = 0;
  masterLP = ctx.createBiquadFilter(); masterLP.type = 'lowpass';
  masterLP.frequency.value = 18000; masterLP.Q.value = .2;
  var comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -22; comp.ratio.value = 5; comp.knee.value = 18;
  analyser = ctx.createAnalyser(); analyser.fftSize = 64; analyser.smoothingTimeConstant = .82;
  master.connect(masterLP); masterLP.connect(comp); comp.connect(analyser); analyser.connect(ctx.destination);
  ambBus = ctx.createGain(); ambBus.gain.value = 1; ambBus.connect(master);
  sfxBus = ctx.createGain(); sfxBus.gain.value = FLATQ() ? .3 : 1; sfxBus.connect(master);
  /* the BROWSER-TAB fade: leaving the tab eases the whole mix to 10%,
     coming back breathes it in over 2 seconds */
  document.addEventListener('visibilitychange', function(){
    if(!ctx || !on || sndLeft) return;
    if(document.hidden) glide(master.gain, .09, .6);
    else glide(master.gain, .9, 2);
  });
  return true;
}

/* ── sampled voices: lazy fetch + decode, cached; a 404 is SILENCE ── */
var bufCache = {};
function fetchBuf(key){
  if(bufCache[key] !== undefined) return Promise.resolve(bufCache[key]);
  if(!ctx) return Promise.resolve(null);
  return fetch(SAMPLES[key], { mode: 'cors' })
    .then(function(r){ if(!r.ok) throw 0; return r.arrayBuffer(); })
    .then(function(ab){ return ctx.decodeAudioData(ab); })
    .then(function(b){ bufCache[key] = b; return b; })
    .catch(function(){ bufCache[key] = null; return null; });
}
/* a hall's breath, synthesised: exponential-decay noise as reverb IR */
var irCache = null;
function reverbIR(){
  if(irCache) return irCache;
  var secs = 2.8, len = Math.floor(ctx.sampleRate * secs);
  var b = ctx.createBuffer(2, len, ctx.sampleRate);
  for(var ch = 0; ch < 2; ch++){
    var d = b.getChannelData(ch);
    for(var i = 0; i < len; i++)
      d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2);
  }
  irCache = b; return b;
}

/* ── primitives ── */
var noiseBuf = null;
function noise(){
  if(noiseBuf) return noiseBuf;
  var len = ctx.sampleRate * 2, b = ctx.createBuffer(1, len, ctx.sampleRate), d = b.getChannelData(0);
  for(var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
  noiseBuf = b; return b;
}
function envGain(peak, a, d, t0){
  var g = ctx.createGain();
  g.gain.setValueAtTime(0, t0);
  g.gain.linearRampToValueAtTime(peak, t0 + a);
  g.gain.setTargetAtTime(0, t0 + a, Math.max(.008, d / 3));
  return g;
}
function tone(freq, type, peak, a, d, dest, t0, bend){
  var o = ctx.createOscillator(); o.type = type || 'sine';
  o.frequency.setValueAtTime(freq, t0);
  if(bend) o.frequency.exponentialRampToValueAtTime(Math.max(20, bend), t0 + a + d);
  var g = envGain(peak, a, d, t0);
  o.connect(g); g.connect(dest);
  o.start(t0); o.stop(t0 + a + d + .3);
}
function hiss(peak, a, d, f0, f1, q, dest, t0){
  var s = ctx.createBufferSource(); s.buffer = noise(); s.loop = true;
  var bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = q || .8;
  bp.frequency.setValueAtTime(f0, t0);
  bp.frequency.exponentialRampToValueAtTime(Math.max(30, f1), t0 + a + d);
  var g = envGain(peak, a, d, t0);
  s.connect(bp); bp.connect(g); g.connect(dest);
  s.start(t0); s.stop(t0 + a + d + .3);
}

/* ── micro voices ── */
var lastHover = 0, lastClick = 0, lastSlide = 0;
function sClick(){
  if(!on) return;
  var now = performance.now(); if(now - lastClick < 70) return; lastClick = now;
  tone(1760, 'sine', .04, .004, .05, sfxBus, ctx.currentTime, 1320);
}
function sHover(){
  if(!on) return;
  var now = performance.now(); if(now - lastHover < 130) return; lastHover = now;
  tone(2350, 'sine', .009, .003, .026, sfxBus, ctx.currentTime);
}
function sOpen(){
  if(!on) return;
  var t0 = ctx.currentTime;
  tone(520, 'sine', .022, .1, .16, sfxBus, t0, 980);
  tone(780, 'sine', .013, .12, .18, sfxBus, t0, 1480);
}
function sClose(){
  if(!on) return;
  tone(960, 'sine', .018, .07, .16, sfxBus, ctx.currentTime, 460);
}
function sSlide(){
  if(!on) return;
  var now = performance.now(); if(now - lastSlide < 160) return; lastSlide = now;
  var t0 = ctx.currentTime;
  tone(740, 'sine', .022, .03, .12, sfxBus, t0, 990);
  tone(1480, 'sine', .008, .02, .08, sfxBus, t0 + .02);
}
function sAsh(ms){
  if(!on) return;
  var dur = Math.min(6, Math.max(.25, (ms || 1600) / 1000));
  var t0 = ctx.currentTime;
  hiss(.05, dur * .18, dur * .82, 2100, 150, .7, sfxBus, t0);
  tone(72, 'sine', .038, .02, dur * .35, sfxBus, t0, 38);
  var grains = Math.round(Math.min(12, 4 + dur * 3.5));
  for(var i = 0; i < grains; i++){
    var gt = t0 + (dur * .14) + Math.pow(i / grains, 1.4) * dur * .6;
    hiss(.010 + Math.random() * .008, .006, .05, 800 + Math.random() * 2200, 480, 1.6, sfxBus, gt);
  }
}
function sCondense(ms){
  if(!on) return;
  var dur = Math.min(6, Math.max(.25, (ms || 1600) / 1000));
  var t0 = ctx.currentTime;
  hiss(.042, dur * .55, dur * .45, 180, 1900, .7, sfxBus, t0);
  tone(880,  'sine', .012, dur * .8, .5, sfxBus, t0);
  tone(1318, 'sine', .008, dur * .85, .55, sfxBus, t0);
}
function sSettle(scaleMs){
  if(!on) return;
  var w = Math.min(3, Math.max(.3, (scaleMs || 1000) / 1000));
  var t0 = ctx.currentTime;
  tone(52, 'sine', .085, .014, .24, sfxBus, t0, 36);
  tone(196, 'sine', .026, .02, .12, sfxBus, t0 + .02);
  tone(330,   'sine', .022, w * .25, w * .4, sfxBus, t0 + w * .15);
  tone(415.3, 'sine', .018, w * .3,  w * .45, sfxBus, t0 + w * .35);
  tone(523.3, 'sine', .014, w * .3,  w * .5,  sfxBus, t0 + w * .55);
}

/* ══ the room airs, warm add6/9 places, stereo drift, wandering colour ══ */
var MOODS = {
  lobby:    { root: 220.00, filt: 3400, amp: .026, breath: .05 },
  salon:    { root: 261.63, filt: 3800, amp: .023, breath: .06 },
  work:     { root: 196.00, filt: 3000, amp: .024, breath: .04 },
  office:   { root: 246.94, filt: 3200, amp: .026, breath: .09 },
  services: { root: 246.94, filt: 3200, amp: .026, breath: .09 },
  archive:  { root: 174.61, filt: 2600, amp: .021, breath: .03 }
};
var VOICES = [
  { iv: 1,     type: 'sine',     share: .42, pan: -.30 },
  { iv: 1.5,   type: 'sine',     share: .24, pan:  .26 },
  { iv: 1.681, type: 'sine',     share: .18, pan: -.12 },
  { iv: 2.25,  type: 'triangle', share: .16, pan:  .34 }
];
var cityTimer = null;
function stopAmb(fade){
  clearInterval(colorTimer); clearInterval(bloomTimer); clearTimeout(cityTimer);
  colorTimer = bloomTimer = cityTimer = null;
  ambNodes.forEach(function(n){
    try{ glide(n.g.gain, 0, fade); }catch(_){}
    try{ n.src.stop(ctx.currentTime + fade + .3); }catch(_){}
  });
  ambNodes = []; ambOscs = [];
}
function ambVoice(freq, type, gainTo, panAt, M, fade){
  var o = ctx.createOscillator(); o.type = type;
  o.frequency.value = freq + (Math.random() * .6 - .3);
  var lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = M.filt; lp.Q.value = .3;
  var g = ctx.createGain(); g.gain.value = 0;
  var lfo = ctx.createOscillator(), lg = ctx.createGain();
  lfo.frequency.value = M.breath * (0.8 + Math.random() * .5);
  lg.gain.value = gainTo * .22;
  lfo.connect(lg); lg.connect(g.gain);
  var pan = null;
  if(ctx.createStereoPanner){
    pan = ctx.createStereoPanner(); pan.pan.value = panAt;
    var plfo = ctx.createOscillator(), plg = ctx.createGain();
    plfo.frequency.value = .015 + Math.random() * .03;
    plg.gain.value = .22;
    plfo.connect(plg); plg.connect(pan.pan);
    plfo.start();
    ambNodes.push({ src: plfo, g: plg });
    o.connect(lp); lp.connect(g); g.connect(pan); pan.connect(ambBus);
  } else {
    o.connect(lp); lp.connect(g); g.connect(ambBus);
  }
  o.start(); lfo.start();
  glide(g.gain, gainTo, fade);
  ambNodes.push({ src: o, g: g });
  ambNodes.push({ src: lfo, g: lg });
  ambOscs.push(o);                        /* the time-slow bends these */
  return { osc: o, g: g };
}
/* ── the INTRO ORBIT bed, v2, after "kirli motor gibi": the rumble is
      GONE. What plays over the model now is digital zen with a spine:
      a slow PAD that breathes between two chords (Am9 ↔ Fmaj9, the
      voices GLIDE, nothing retriggers), a koto-like pentatonic motif
      that answers itself with a softer echo on the other side of the
      stereo field, and only a high airy shimmer above, no low noise
      at all. It leaves under the launch bell as the lobby's own chord
      arrives. ── */
function startCity(fade){
  /* high airy shimmer, the only noise, and it floats, never growls */
  var s = ctx.createBufferSource(); s.buffer = noise(); s.loop = true;
  var shb = ctx.createBiquadFilter(); shb.type = 'bandpass'; shb.frequency.value = 950; shb.Q.value = .6;
  var ag = ctx.createGain(); ag.gain.value = 0;
  s.connect(shb); shb.connect(ag); ag.connect(ambBus);
  s.start(); glide(ag.gain, .0055, fade * 1.3);
  ambNodes.push({ src: s, g: ag });
  /* the PAD: four voices, each with its own breath and its own side;
     every ~9s the chord leans Am9 ↔ Fmaj9 by GLIDING each voice */
  var CH_A = [110.00, 164.81, 246.94, 329.63];   /* A2 E3 B3 E4  (Am9 colour) */
  var CH_F = [ 87.31, 174.61, 261.63, 349.23];   /* F2 F3 C4 F4  (Fmaj9)      */
  var padOsc = [];
  [[.011, -.3, .05], [.008, .25, .04], [.007, -.15, .065], [.0045, .35, .03]].forEach(function(row, i){
    var o = ctx.createOscillator(); o.type = i === 3 ? 'triangle' : 'sine';
    o.frequency.value = CH_A[i];
    var g = ctx.createGain(); g.gain.value = 0;
    var lfo = ctx.createOscillator(), lg = ctx.createGain();
    lfo.frequency.value = row[2]; lg.gain.value = row[0] * .4;
    lfo.connect(lg); lg.connect(g.gain);
    if(ctx.createStereoPanner){
      var pan = ctx.createStereoPanner(); pan.pan.value = row[1];
      o.connect(g); g.connect(pan); pan.connect(ambBus);
    } else { o.connect(g); g.connect(ambBus); }
    o.start(); lfo.start();
    glide(g.gain, row[0], fade * (1 + i * .25));
    ambNodes.push({ src: o, g: g }); ambNodes.push({ src: lfo, g: lg });
    ambOscs.push(o); padOsc.push(o);
  });
  var onF = false;
  colorTimer = setInterval(function(){
    if(!on) return;
    onF = !onF;
    var CH = onF ? CH_F : CH_A;
    padOsc.forEach(function(o, i){
      try{ o.frequency.setTargetAtTime(CH[i], ctx.currentTime, 2.4); }catch(_){}
    });
  }, 9000);
  /* the MOTIF: koto-like phrases from A pentatonic, answering themselves
     with a softer echo panned to the other side, pace wanders */
  var evG = ctx.createGain(); evG.gain.value = 1;
  var panL = null, panR = null;
  if(ctx.createStereoPanner){
    panL = ctx.createStereoPanner(); panL.pan.value = -.5; panL.connect(evG);
    panR = ctx.createStereoPanner(); panR.pan.value = .5; panR.connect(evG);
  }
  evG.connect(ambBus);
  ambNodes.push({ src: { stop: function(){} }, g: evG });
  var PENTA = [440, 493.88, 587.33, 659.25, 783.99];
  (function ev(){
    cityTimer = setTimeout(function(){
      if(on && curMood === 'intro'){
        var n = 2 + Math.floor(Math.random() * 3);         /* 2,4 notes  */
        var left = Math.random() < .5;
        var dest = (left ? panL : panR) || evG;
        var echo = (left ? panR : panL) || evG;
        var t0 = ctx.currentTime, idx = Math.floor(Math.random() * PENTA.length);
        for(var i2 = 0; i2 < n; i2++){
          idx = Math.max(0, Math.min(PENTA.length - 1, idx + (Math.random() < .5 ? -1 : 1)));
          var f = PENTA[idx], at = t0 + i2 * .417;         /* eighths at ~72 BPM */
          tone(f, 'sine', .011, .012, .5, dest, at);
          tone(f, 'sine', .005, .012, .55, echo, at + .35); /* the answer */
        }
      }
      ev();
    }, 3200 + Math.random() * 2600);   /* the pace itself wanders */
  })();
}
function startMood(key, fade){
  if(key === 'intro'){ startCity(fade); return; }
  var M = MOODS[key] || MOODS.lobby;
  var colorRef = null;
  VOICES.forEach(function(v, i){
    var h = ambVoice(M.root * v.iv, v.type, M.amp * v.share, v.pan, M, fade + i * .4);
    if(v.iv === 1.681) colorRef = h;
  });
  var high = false;
  colorTimer = setInterval(function(){
    if(!colorRef || !on) return;
    high = !high;
    try{
      colorRef.osc.frequency.setTargetAtTime(M.root * (high ? 1.875 : 1.681),
        ctx.currentTime, 3.5);
    }catch(_){}
  }, 12000 + Math.random() * 6000);
  var PENT = [2, 2.25, 3, 3.375, 4];
  bloomTimer = setInterval(function(){
    if(!on || Math.random() < .35) return;
    var f = M.root * PENT[Math.floor(Math.random() * PENT.length)];
    tone(f, 'sine', .011, 1.1, 1.6, ambBus, ctx.currentTime);
  }, 9000 + Math.random() * 6000);
}
function room(key){
  /* the office's SONGS (a founder's theme, the story) live and die with the
     office, checked before ANY early return, so a same-room call, a muted
     engine or the flat path can none of them carry one out. On the phone a
     room swap keeps the document (and the song) alive; desktop never leaked
     only because its page turn killed the whole context. */
  if(key !== 'office' && (th.key === 'deniz' || th.key === 'yigit' || th.key === 'story')) theme(null);
  if(key === 'office') try{ prefetch(['deniz', 'yigit', 'story']); }catch(_){}
  if(key === curMood && ambNodes.length) return;
  var wasSvc = curMood === 'services';
  curMood = key;
  if(!on) return;
  if(FLATQ()){                        /* flat: no room air, ever */
    if(key === 'services') theme('services');
    else if(wasSvc && th.key === 'services') theme(null);
    return;
  }
  stopAmb(2.2);
  startMood(key, 2.6);
  /* the services pulse belongs to the services room alone */
  if(key === 'services') theme('services');
  else if(wasSvc && th.key === 'services') theme(null);
}
function pageMood(){
  var f = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if(f === '' || f === 'index.html') return 'lobby';
  if(f === 'works.html') return 'salon';
  if(f === 'work.html' || /\/work\//.test(location.pathname)) return 'work';
  if(f === 'about.html') return 'office';
  if(f === 'archive.html') return 'archive';
  if(/^services-/.test(f)) return 'services';
  if(f === 'test-transition.html') return 'work';
  return 'lobby';
}

/* ── ducks, veils and the office themes share one ambience level ── */
var ducked = false, veiled = false, veilLevel = .03, themeOn = false, thAmb = .2;
function ambLevel(){
  var v = veiled ? veilLevel : (ducked ? .22 : 1);
  if(themeOn) v = Math.min(v, thAmb);     /* a playing song holds the room down:
                                             founder songs to 20%, services to 50% */
  return v;
}
function applyAmb(dur){ if(ctx) glide(ambBus.gain, ambLevel(), dur || 1.2); }
function duck(onQ){
  if(!ctx || onQ === ducked) return;
  ducked = onQ;
  applyAmb(onQ ? .9 : 1.6);
}
/* a descending overlay: films take the room fully down (.03), a PDF only
   to 30%, eased to the curtain's own roll; a fall/rise rides it */
function veil(onQ, rollMs, level){
  if(!ctx){ veiled = onQ; return; }
  veilLevel = (level == null ? .03 : level);
  if(veiled === onQ){ applyAmb(.8); return; }
  veiled = onQ;
  var d = Math.min(2.4, Math.max(.5, (rollMs || 1200) / 1400));
  applyAmb(onQ ? d : d * 1.3);
  if(!on) return;
  var t0 = ctx.currentTime;
  if(onQ) tone(1100, 'sine', .016, d * .35, d * .6, sfxBus, t0, 300);
  else    tone(340,  'sine', .014, d * .3,  d * .55, sfxBus, t0, 1050);
}
function anyLoudVideo(){
  var vs = document.querySelectorAll('video');
  for(var i = 0; i < vs.length; i++)
    if(!vs[i].paused && !vs[i].muted && vs[i].volume > 0) return true;
  return false;
}
['play','pause','ended','volumechange'].forEach(function(ev){
  document.addEventListener(ev, function(e){
    if(!(e.target instanceof HTMLVideoElement)) return;
    duck(anyLoudVideo());
  }, true);
});

/* ══ the MOTION VOICE, v3, after "çok yüksek": quartered and drowned.
      Still pure AIR (no body, no rumble, a highpass floors it at 300),
      but the level is now a whisper (max .014, ¼ of before) and it is
      MOSTLY reverb (dry .15 / wet .9, twice the tail). It mirrors the
      camera's speed 1:1: tight attack, short release, the loudness IS
      the velocity. The time-slow rides the same envelope, but a
      click-navigation or a transition HALVES it (a flung camera under a
      page turn shouldn't bend the room as hard as a hand look does). ══ */
var wd = { built: false, g: null, bp: null,
           inV: 0, lastIn: 0, lvl: 0, charge: 0, timer: null, nav: false };
function motionBuild(){
  if(wd.built) return;
  wd.built = true;
  var s = ctx.createBufferSource(); s.buffer = noise(); s.loop = true;
  var hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 300; hp.Q.value = .5;
  var bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 420; bp.Q.value = .7;
  var g = ctx.createGain(); g.gain.value = 0;
  var dry = ctx.createGain(); dry.gain.value = .15;   /* half the dry: it is nearly all tail now */
  var conv = ctx.createConvolver(); conv.buffer = reverbIR();
  var wet = ctx.createGain(); wet.gain.value = .9;     /* twice the reverb */
  s.connect(hp); hp.connect(bp);
  bp.connect(dry); dry.connect(g);
  bp.connect(conv); conv.connect(wet); wet.connect(g);
  g.connect(sfxBus);
  s.start();
  wd.g = g; wd.bp = bp;
}
function motionPump(){
  if(wd.timer) return;
  var last = performance.now();
  wd.timer = setInterval(function(){
    var now = performance.now(), dt = Math.min(.25, (now - last) / 1000); last = now;
    var fresh = now - wd.lastIn < 160;      /* fed every frame: older = the camera stopped */
    var inV = fresh ? wd.inV : 0;
    /* 1:1, the level shadows the camera's speed, tight both ways */
    var k = inV > wd.lvl ? Math.min(1, dt / .09) : Math.min(1, dt / .45);
    wd.lvl += (inV - wd.lvl) * k;
    if(inV > .12) wd.charge = Math.min(1, wd.charge + dt / 2.5);
    else          wd.charge = Math.max(0, wd.charge - dt / 1.2);
    var e = wd.lvl * (.85 + .15 * wd.charge);   /* a whisper more when sustained */
    glide(wd.g.gain, e * .0028, .09);           /* ⅕ of before ("1 ise 0.2"), a breath;
                                                   the time-slow below stays untouched */
    try{ wd.bp.frequency.setTargetAtTime(420 + e * 930, ctx.currentTime, .1); }catch(_){}
    /* the time-slow rides the SAME envelope, full for a free look, but
       HALVED while a click-nav / transition is flinging the camera */
    var det = -66 * e * ((fresh && wd.nav) ? .5 : 1);   /* time-slow effect reduced 40% (was -110c) */
    ambOscs.forEach(function(o){ try{ o.detune.setTargetAtTime(det, ctx.currentTime, .4); }catch(_){} });
    if(wd.lvl < .003 && !fresh && now - wd.lastIn > 4000){
      clearInterval(wd.timer); wd.timer = null; wd.lvl = 0; wd.charge = 0; wd.nav = false;
      try{ glide(wd.g.gain, 0, .3); }catch(_){}
    }
  }, 50);
}
function motion(v, nav){
  if(!on) return;
  wd.lastIn = performance.now();
  wd.inV = Math.max(0, Math.min(1, v || 0));
  wd.nav = !!nav;                             /* a fly-in / depart marks itself */
  motionBuild();
  motionPump();
}

/* ══ the MURMUR: the gallery-talk recording, heavy reverb (deep wet),
      band-filtered so it is never raw, panned to the figure, and even
      at its nearest, barely there. Synth flutter as the fallback. ══ */
var pr = { gain: null, pan: null, mode: null, last: 0, timer: null };
function presenceStart(){
  if(pr.mode) return;
  pr.mode = 'loading';
  fetchBuf('murmur').then(function(b){
    var g = ctx.createGain(); g.gain.value = 0;
    var pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    if(b){
      var src = ctx.createBufferSource(); src.buffer = b; src.loop = true;
      src.playbackRate.value = .96;
      var hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 260;
      var lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1350;
      var conv = ctx.createConvolver(); conv.buffer = reverbIR();
      var dry = ctx.createGain(); dry.gain.value = .12;    /* almost all hall, no raw voice */
      var wet = ctx.createGain(); wet.gain.value = .95;
      src.connect(hp); hp.connect(lp);
      lp.connect(dry); lp.connect(conv); conv.connect(wet);
      var sum = ctx.createGain();
      dry.connect(sum); wet.connect(sum);
      if(pan){ sum.connect(pan); pan.connect(g); } else sum.connect(g);
      g.connect(sfxBus);
      src.start();
      pr.mode = 'sample';
    } else {
      var s = ctx.createBufferSource(); s.buffer = noise(); s.loop = true;
      var bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 470; bp.Q.value = 1.3;
      var am = ctx.createGain(); am.gain.value = .55;
      var alfo = ctx.createOscillator(), alg = ctx.createGain();
      alfo.frequency.value = 5.1; alg.gain.value = .4;
      alfo.connect(alg); alg.connect(am.gain); alfo.start();
      s.connect(bp); bp.connect(am);
      if(pan){ am.connect(pan); pan.connect(g); } else am.connect(g);
      g.connect(sfxBus);
      s.start();
      pr.mode = 'synth';
    }
    pr.gain = g; pr.pan = pan;
    pr.timer = setInterval(function(){
      if(pr.gain && performance.now() - pr.last > 420) glide(pr.gain.gain, 0, .9);
    }, 250);
  });
}
function presence(g, pan){
  if(!on) return;
  presenceStart();
  if(!pr.gain) return;
  pr.last = performance.now();
  glide(pr.gain.gain, Math.min(1, g || 0) * (pr.mode === 'sample' ? .0715 : .00605), .3);   /* proximity master -45% (was .13/.011) */
  if(pr.pan) glide(pr.pan.pan, Math.max(-1, Math.min(1, pan || 0)), .3);
}
setInterval(function(){
  if(!on) return;
  var w = window.__veaFig;
  if(!w || w.d >= 8) return;
  presence((1 - w.d / 8) * .8, Math.max(-1, Math.min(1, (w.x || 0) / 8)));
  w.d = 9;
}, 200);

/* ══ the THEMES: Deniz / Yigit / the story each carry a song (5s in,
      2s out, the room at 20%), and SERVICES carries a synthesised
      pulse of its own: barely uptempo (~96 BPM), soft plucks over a
      whisper of a tick, low-passed to stay behind the room. It plays
      at 40% while the room air settles to 50%, motion, not music. ══ */
var THEME_CONF = {
  deniz:    { gain: .58, amb: .2, tin: 5, tout: 2 },
  yigit:    { gain: .58, amb: .2, tin: 5, tout: 2 },
  story:    { gain: .58, amb: .2, tin: 5, tout: 2 },
  services: { gain: .7,  amb: .3, tin: 3.5, tout: 1.6, synth: true }
};
var svc = { g: null, lp: null, timer: null, step: 0, next: 0 };
function svcStart(conf){
  if(svc.timer) return;
  var g = ctx.createGain(); g.gain.value = 0;
  var lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3600; lp.Q.value = .3;
  lp.connect(g); g.connect(master);
  svc.g = g; svc.lp = lp; svc.step = 0;
  svc.next = ctx.currentTime + .12;
  glide(g.gain, conf.gain, conf.tin);
  /* v2, an actual (soft) LOOP now, 104 BPM in 16ths: a felt kick on the
     downbeats, hats on the off-eighths with ghost 16ths, a low pulse
     alternating E2/G2 by bar, and futuristic UI pips answering with a
     quantised echo. Rhythmic and legible, still behind the voice. */
  var S16 = 60 / 104 / 4;
  var PIPS = [987.77, 1174.66, 1318.51, 1567.98];
  svc.timer = setInterval(function(){
    if(!svc.g) return;
    while(svc.next < ctx.currentTime + .4){
      var i = svc.step % 16, bar = (svc.step / 16) | 0, t0 = svc.next;
      /* kick: felt, not club, a fast 92→46 sine drop */
      if(i === 0 || i === 8) tone(92, 'sine', .09, .004, .1, svc.lp, t0, 46);
      if(i === 11 && Math.random() < .4) tone(88, 'sine', .05, .004, .08, svc.lp, t0, 48);
      /* hats: off-eighths, plus breathing ghost 16ths */
      if(i === 2 || i === 6 || i === 10 || i === 14) hiss(.013, .002, .028, 8200, 6600, 1.4, svc.lp, t0);
      if((i === 4 || i === 12) && Math.random() < .5) hiss(.007, .002, .02, 9000, 7400, 1.6, svc.lp, t0);
      /* the low pulse: E2 / G2 by bar */
      if(i === 0 || i === 10) tone(bar % 2 ? 98 : 82.41, 'sine', .05, .01, .14, svc.lp, t0);
      /* UI pips: one or two per bar, each with a quantised softer echo */
      if((i === 4 && Math.random() < .8) || (i === 13 && Math.random() < .45)){
        var f = PIPS[Math.floor(Math.random() * PIPS.length)];
        tone(f, 'triangle', .024, .004, .07, svc.lp, t0);
        tone(f, 'triangle', .011, .004, .07, svc.lp, t0 + S16 * 2);
      }
      svc.step++; svc.next += S16;
    }
  }, 140);
}
function svcStop(out){
  if(svc.timer){ clearInterval(svc.timer); svc.timer = null; }
  var g = svc.g; svc.g = null; svc.lp = null;
  if(g){
    glide(g.gain, 0, out || 1.6);
    setTimeout(function(){ try{ g.disconnect(); }catch(_){} }, (out || 1.6) * 1000 + 400);
  }
}
var th = { key: null, src: null, gain: null, startAt: 0, startPos: 0, pos: {} };
function themeStop(){
  themeOn = false; applyAmb(2.2);
  if(th.key === 'services'){ th.key = null; svcStop(THEME_CONF.services.tout); }
  if(th.src){
    var s = th.src, g = th.gain, key = th.key;
    /* remember WHERE the song is, reopening resumes, never restarts
       (the 2s farewell keeps playing, so it counts into the position) */
    try{
      var played = ctx.currentTime - th.startAt + 2;
      var dur = s.buffer ? s.buffer.duration : 0;
      if(dur) th.pos[key] = (th.startPos + played) % dur;
    }catch(_){}
    th.src = null; th.gain = null;
    glide(g.gain, 0, 2);                              /* 2s farewell */
    setTimeout(function(){ try{ s.stop(); }catch(_){} }, 2300);
  }
  /* ALWAYS clear the key, not only when a source is already sounding. A stop
     must also cancel a song still on its way in: fetchBuf checks th.key when
     the buffer lands, and with the key left behind a fast exit from the
     office let the song START after the visitor had already gone. */
  th.key = null;
}
function theme(key){
  if(!ctx || !on){ if(!key) themeStop(); return; }
  if(!key){ themeStop(); return; }
  if(th.key === key) return;
  themeStop();
  var conf = THEME_CONF[key] || { gain: .58, amb: .2, tin: 5, tout: 2 };
  if(conf.synth){                                     /* the services pulse is OURS */
    th.key = key;
    svcStart(conf);
    thAmb = conf.amb; themeOn = true; applyAmb(3);
    return;
  }
  var my = key; th.key = key;
  fetchBuf(key).then(function(b){
    if(!b || th.key !== my) return;                   /* missing file or superseded: silence */
    var src = ctx.createBufferSource(); src.buffer = b; src.loop = true;
    var lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 6500; lp.Q.value = .3;
    var g = ctx.createGain(); g.gain.value = 0;
    src.connect(lp); lp.connect(g); g.connect(master);
    var from = (th.pos[my] || 0) % b.duration;        /* pick up where it left */
    src.start(0, from);
    th.src = src; th.gain = g; th.startAt = ctx.currentTime; th.startPos = from;
    glide(g.gain, conf.gain, conf.tin);               /* 5s arrival */
    thAmb = conf.amb; themeOn = true; applyAmb(3);    /* the room settles under it */
  });
}

/* ── the LAUNCH bell: rings the instant the big ball is pressed (the
      buffer is prefetched at page load, it can never arrive late). A
      declined pref stays silent; an undecided visitor hears the bell, the press is their own gesture. ── */
function launch(){
  if(pref() === '0') return;
  if(!bootCtx()) return;
  var ring = function(){
    fetchBuf('launch').then(function(b){
      if(!b) return;
      var src = ctx.createBufferSource(); src.buffer = b;
      var g = ctx.createGain(); g.gain.value = .6;
      src.connect(g); g.connect(master);
      if(master.gain.value < .05) glide(master.gain, .9, .3);
      src.start();
    });
  };
  if(ctx.state === 'suspended') ctx.resume().then(ring).catch(function(){});
  else ring();
}

/* ── the WALK-AWAY ── */
function fadeOut(ms){
  if(!ctx) return;
  sndLeft = true;                     /* a tab return must not resurrect this */
  var d = Math.min(4, Math.max(.3, (ms || 1800) / 1000));
  glide(master.gain, 0, d);
  try{ masterLP.frequency.setTargetAtTime(420, ctx.currentTime, d / 3); }catch(_){}
}

/* ── master ── */
function enable(){
  want = true; setPref('1');
  if(!bootCtx()){ return; }
  var go = function(){
    if(!want) return;                                  /* toggled off before resume */
    on = true; sndLeft = false;
    try{ masterLP.frequency.setTargetAtTime(18000, ctx.currentTime, .3); }catch(_){}
    glide(master.gain, .9, .8);
    if(!curMood) curMood = pageMood();
    /* FLAT pages carry NO room air, ambience is blocked outright there;
       only the services pulse (a theme, not an air) may speak */
    if(!FLATQ()){ stopAmb(.6); startMood(curMood, 2.2); }
    if(curMood === 'services') theme('services');
    syncUI();
  };
  if(ctx.state === 'suspended') ctx.resume().then(go).catch(function(){});
  else go();
}
function disable(){
  want = false; on = false; setPref('0');
  themeStop();
  if(ctx) glide(master.gain, 0, .8);
  setTimeout(function(){ if(!on) stopAmb(.1); }, 900);
  syncUI();
}
function toggle(){ (want ? disable : enable)(); }      /* intent, not the async state */
/* v8 · phone SPACE mode: no pref stored yet → the FIRST touch starts the
   sound directly (autoplay policy satisfied by the gesture itself) */
if(MOBQ){
  /* the iPhone's RING/SILENT switch mutes 'ambient' WebAudio, declare the
     page a PLAYBACK app (iOS 16.4+) and nudge the category with a silent
     media element on the first gesture, then start the engine in-gesture. */
  try{ if(navigator.audioSession) navigator.audioSession.type = 'playback'; }catch(_){}
  var _sndBoot = function(ev){
    /* the toggle owns its own click, the booter must not race it */
    try{ if(ev && ev.target && ev.target.closest && ev.target.closest('#sndT')) return; }catch(_){}
    try{
      var a = new Audio('data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAACAAACcQCA//////////////////////////////////////////////////////////////////8AAABhTEFNRTMuMTAwA8MAAAAAAAAAABQgJAUHQQAB9AAAAnGMHkkIAAAAAAD/+xDEAAPAAAGkAAAAIAAANIAAAAQVTEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV');
      a.setAttribute('playsinline',''); a.volume = .01;
      var pr = a.play(); if(pr && pr.catch) pr.catch(function(){});
      setTimeout(function(){ try{ a.pause(); }catch(_){} }, 400);
    }catch(_){}
    try{ if(ctx && ctx.state === 'suspended') ctx.resume(); }catch(_){}
    try{ if(pref() !== '0' && !on) enable(); }catch(_){}
    /* let go ONLY once the engine audibly runs, otherwise every next touch
       tries again (an iOS context can need a second gesture) */
    setTimeout(function(){
      try{ if(on && ctx && ctx.state === 'running') document.removeEventListener('pointerdown', _sndBoot); }catch(_){}
    }, 700);
  };
  document.addEventListener('pointerdown', _sndBoot, { passive: true });
  /* v8 · SPACE mode defaults to SOUND ON (any legacy lock included): raise
     only the WANT + the icon here, the AudioContext itself is created
     INSIDE the first touch (_sndBoot → enable). An iOS context born outside
     a gesture can stay silent forever; one born in the gesture never does. */
  try{
    if(pref() !== '0'){
      want = true; setPref('1');
      /* a gesture-born context is already RUNNING → start the air NOW;
         otherwise only the icon arms and the first touch does the rest */
      if(window.__veaCtx) setTimeout(function(){ try{ enable(); }catch(_){} }, 0);
      else setTimeout(function(){ try{ syncUI(); }catch(_){} }, 0);
    }
  }catch(_){}
  /* v8 · handheld discipline: the room is silent the moment the screen
     locks, Safari hides or the tab changes, and returns with the page.
     (Desktop keeps its own behaviour.) */
  document.addEventListener('visibilitychange', function(){
    try{
      if(document.hidden){ if(ctx && ctx.state === 'running') ctx.suspend(); }
      else if(want && ctx && ctx.state === 'suspended') ctx.resume();
    }catch(_){}
  });
  window.addEventListener('pagehide', function(){ try{ if(ctx && ctx.state === 'running') ctx.suspend(); }catch(_){} });
}

/* ══ the INVITATION: a ring whose rim IS the live spectrum. Idle it
      breathes a slow wave; with sound on, the lobes ride the music.
      Clicking the big ring shrinks it straight to the corner. ══ */
var el = null, ringPath = null, mode = null, morphed = false, ringRaf = null;
var MOB = false;
try{ MOB = window.innerWidth <= 860 || matchMedia('(pointer: coarse)').matches; }catch(_){}

var RING_N = 72, RING_R = 15.5, specArr = null, ringStill = false;
function ringD(t){
  var d = '', i, th, x, y;
  if(want){
    /* sound ON: an OPEN ring, a 288° arc whose GAP orbits the rim, one
       turn ≈ 14s. The turning reads instantly; the radius only breathes
       a little on the live spectrum, it never becomes a blob. */
    var rot = (t || 0) * .00045;
    var SW = Math.PI * 2 * .8, N2 = 58;
    for(i = 0; i <= N2; i++){
      th = rot + i / N2 * SW;
      var amp;
      if(specArr && on){
        var bin = Math.floor(i / N2 * 12) % 12;
        amp = (specArr[2 + bin] / 255) * 1.4;
      } else {
        amp = .5 + Math.sin(th * 3 - (t || 0) * .001) * .4;
      }
      var r = RING_R + .6 + amp;
      x = 22 + Math.cos(th) * r; y = 22 + Math.sin(th) * r;
      d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
    }
    return d;                       /* open, the gap IS the state */
  }
  /* not chosen yet (the big invitation): the old travelling wave */
  for(i = 0; i <= RING_N; i++){
    th = i / RING_N * Math.PI * 2;
    var a2 = 1.1 + Math.sin(th * 5 - t * .0016) * .75;
    var r2 = RING_R + Math.sin(th * 7 + t * .0004) * .35 + a2;
    x = 22 + Math.cos(th) * r2; y = 22 + Math.sin(th) * r2;
    d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
  }
  return d + 'Z';
}
function circleD(){
  /* the OFF state: a plain hollow circle, perfectly still */
  var d = '';
  for(var i = 0; i <= RING_N; i++){
    var th = i / RING_N * Math.PI * 2;
    var x = 22 + Math.cos(th) * (RING_R + 1), y = 22 + Math.sin(th) * (RING_R + 1);
    d += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
  }
  return d + 'Z';
}
function ringLoop(t){
  ringRaf = requestAnimationFrame(ringLoop);
  if(!ringPath || document.hidden) return;
  /* sound off in the corner: a hollow closed circle that does NOT turn.
     (The big invitation keeps breathing, it must invite.) */
  if(!want && mode === 'corner'){
    if(!ringStill){ ringStill = true; ringPath.setAttribute('d', circleD()); }
    return;
  }
  ringStill = false;
  if(analyser && on){
    if(!specArr) specArr = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(specArr);
  }
  ringPath.setAttribute('d', ringD(t || 0));
}
function injectCss(){
  if(document.getElementById('sndCss')) return;
  var st = document.createElement('style');
  st.id = 'sndCss';
  st.textContent =
    '#sndT{position:fixed;z-index:2147483000;background:none;border:0;cursor:pointer;height:max-content;max-height:88px;width:max-content;max-width:360px;inset:auto;' +
      'font-family:var(--font-mono,monospace);letter-spacing:.22em;text-transform:uppercase;' +
      'color:#fff;mix-blend-mode:difference;display:flex;align-items:center;gap:13px;padding:10px 0;}' +
    '#sndT:focus-visible{outline:2px solid #fff;outline-offset:4px;}' +
    '#sndT .rg{display:block;width:46px;height:46px;opacity:.9;}' +
    '#sndT.snd-hero{right:clamp(18px,4vw,64px);left:auto;top:calc(50vh - 32px);bottom:auto;font-size:12px;opacity:.92;flex-direction:row-reverse;}' +
    '#sndT.snd-hero .lb{text-align:right;line-height:1.9;}' +
    '#sndT.snd-corner{left:auto;top:auto;right:calc(14px + env(safe-area-inset-right,0px));top:auto;font-size:' + (MOB ? '9px' : '10px') + ';letter-spacing:.18em;opacity:.8;flex-direction:row;box-sizing:border-box;' +
      (MOB ? 'bottom:calc(44px + env(safe-area-inset-bottom,0px));gap:6px;width:90px;padding:6px 0;justify-content:flex-start;' : 'bottom:44px;gap:6px;width:98px;padding:6px 0;justify-content:flex-start;') + '}' +
    /* JUSTIFIED with CONTROLS / AUTO-LOOK: the ring sits left, the word pushes
       to the right edge so all three controls read as one tidy column */
    '#sndT.snd-corner .lb{text-align:left;}' +
    '#sndT.snd-corner .rg{width:16px;height:16px;flex:0 0 19px;box-sizing:content-box;}' +
    '#sndT.snd-off{opacity:.55;}' +
    '#sndT.snd-on .lb{text-decoration:underline;text-underline-offset:4px;}';
  document.head.appendChild(st);
}
function mount(){
  if(el) return;
  injectCss();
  el = document.createElement('button');
  el.id = 'sndT'; el.type = 'button'; el.setAttribute('data-nodec','');
  el.setAttribute('aria-label', 'Sound on / off');
  el.innerHTML = '<svg class="rg" viewBox="0 0 44 44" aria-hidden="true"><path d="" fill="none" stroke="#fff" stroke-width="1.3" stroke-linejoin="round"/></svg>' +
    '<svg class="spk" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.2v5.6h4.2L14 19.4V4.6L8.2 9.2H4z"/></svg>' +
    '<span class="lb"></span>';
  if(MOBQ) el.classList.add('msnd');   /* the phone shows the SPEAKER alone, no word, no ring */
  ringPath = el.querySelector('path');
  /* v8 · the big "ENTER WITH SOUND" invitation belongs to the entry hero only
     (the lobby/home). Land INSIDE the space (about/works/work/archive/project)
     and you have already stepped in, show the small corner toggle, not the
     mid-screen ceremony. */
  var INNER = false;
  try{ INNER = /\/(about|works|work|archive|project)\.html$/i.test(location.pathname); }catch(_){}
  mode = (pref() == null && !REDUCED && !MOBQ && !INNER) ? 'hero' : 'corner';   /* the phone: tiny corner speaker only */
  el.classList.add('snd-' + mode);
  el.addEventListener('click', function(){
    toggle();
    /* the chosen big ring shrinks HOME at once, the standard small size */
    if(mode === 'hero') morphToCorner();
  });
  document.body.appendChild(el);
  mountT = performance.now();
  syncUI();
  ringPath.setAttribute('d', (mode === 'corner' && pref() !== '1') ? circleD() : ringD(0));
  if(!REDUCED && !ringRaf) ringRaf = requestAnimationFrame(ringLoop);
  if(mode === 'hero') watchReveal();
}
function syncUI(){
  if(!el) return;
  var lb = el.querySelector('.lb');
  if(lb) lb.textContent = mode === 'hero' ? (want ? 'SOUND ON' : 'ENTER WITH SOUND') : 'sound';
  el.classList.toggle('snd-on', want);
  el.classList.toggle('snd-off', !want && mode === 'corner');
  el.setAttribute('aria-pressed', String(want));
  /* reduced-motion never runs the loop, repaint the state by hand */
  if(REDUCED && ringPath)
    ringPath.setAttribute('d', (!want && mode === 'corner') ? circleD() : ringD(0));
}
var enteredFlag = false, mountT = 0;
function entered(){ enteredFlag = true; try{ if(el && mode === 'hero') morphToCorner(); }catch(_){} }
function watchReveal(){
  var fired = false;
  var iv = setInterval(check, 350);
  var to = setTimeout(function(){ if(!window.__veaIntro) fire(); }, 22000);
  function check(){
    if(morphed) return fire();
    if(enteredFlag) return fire();
    /* the 360° ceremony HOLDS the invitation in place, it comes down
       only when the visitor presses it, presses LAUNCH, or steps in */
    if(window.__veaIntro) return;
    var L = document.getElementById('loader');
    var lDone = !L || L.classList.contains('done') || L.classList.contains('fuse');
    var veilEl = document.getElementById('g3boot');
    var vGone = !veilEl || veilEl.hidden || veilEl.classList.contains('lift');
    if(!lDone || !vGone) return;
    var min = document.body.classList.contains('g3') ? 12000 : 1800;
    if(performance.now() - mountT > min) fire();
  }
  function fire(){
    if(fired) return; fired = true;
    clearInterval(iv); clearTimeout(to);
    morphToCorner();
  }
}
function morphToCorner(){
  if(!el || mode !== 'hero' || morphed) return;
  morphed = true;
  var r0 = el.getBoundingClientRect();
  el.classList.remove('snd-hero'); el.classList.add('snd-corner');
  mode = 'corner'; syncUI();
  var r1 = el.getBoundingClientRect();
  if(REDUCED) return;
  var dx = r0.right - r1.right, dy = r0.top - r1.top;
  var sc = Math.max(.2, r0.height / Math.max(1, r1.height));
  el.style.transformOrigin = 'right top';
  el.style.transition = 'none';
  el.style.transform = 'translate(' + dx + 'px,' + dy + 'px) scale(' + sc + ')';
  void el.offsetWidth;
  el.style.transition = 'transform 1.25s cubic-bezier(.22,.9,.24,1)';
  el.style.transform = 'none';
  setTimeout(function(){ if(el){ el.style.transition = ''; el.style.transform = ''; } }, 1400);
}

/* ── generic wiring ── */
document.addEventListener('click', function(e){
  var t = e.target;
  if(!t || !t.closest) return;
  if(t.closest('#sndT')) return;
  if(t.closest('a,button,[role="button"],.sc-item,.group-head,.acc-head,summary')) sClick();
}, true);
if(matchMedia && matchMedia('(pointer: fine)').matches){
  document.addEventListener('mouseover', function(e){
    var t = e.target;
    if(!t || !t.closest) return;
    if(t.closest('a,button,[role="button"],.sc-item')) sHover();
  }, true);
}
function watchClass(sel, cls, openFn, closeFn){
  var tries = 0;
  var seek = setInterval(function(){
    var node = document.querySelector(sel);
    if(!node){ if(++tries > 40) clearInterval(seek); return; }
    clearInterval(seek);
    if(!window.MutationObserver) return;
    var was = node.classList.contains(cls);
    new MutationObserver(function(){
      var is = node.classList.contains(cls);
      if(is === was) return;
      was = is;
      (is ? openFn : closeFn)();
    }).observe(node, { attributes: true, attributeFilter: ['class'] });
  }, 700);
}
function wireOverlays(){
  watchClass('#menu', 'open', sOpen, sClose);
  watchClass('#reader', 'on', sOpen, sClose);
  watchClass('#film', 'on', function(){ sOpen(); duck(true); },
                            function(){ sClose(); duck(anyLoudVideo()); });
  watchClass('#lov', 'open', sOpen, sClose);
}
function arrivalVoice(){
  var seed = null;
  try{ seed = sessionStorage.getItem('g3hand') || sessionStorage.getItem('g3seed'); }catch(_){}
  if(seed == null) return;
  setTimeout(function(){ if(on) sCondense(1400); }, 350);
}

/* ── boot ── */
function prefetch(keys){
  if(!bootCtx()) return;
  keys.forEach(function(k){ try{ fetchBuf(k); }catch(_){} });
}
function init(){
  /* the sound control belongs to a LIVE, RUNNING 3D room ONLY, and it
     appears nowhere else and no sooner:
       · flat tier or any page with no 3D (__vflat !== false): never mount, no "enter with sound", no toggle, nothing to click
       · a page that WILL run 3D (__vflat === false): mount only once the
         room has actually COMMITTED (window.__g3on === true), never
         during the black boot / loader ceremony. If the visitor bails to
         flat while it loads, or the 3D never comes up, __g3on stays false
         and the control is never created at all.
     Audio already enabled in a full / lite / auto session keeps playing
     untouched, this gates the visible control, not the engine. */
  var CAN3D = (window.__vflat === false);
  if(CAN3D){
    if(window.__g3on) mount();
    else {
      var mtimer = setInterval(function(){
        if(window.__g3on){ clearInterval(mtimer); mtimer = null; mount(); }
      }, 180);
      /* a very slow room can only commit after a minute on a weak device;
         wait long, and even at the deadline take ONE last look, a room
         that came up right at the boundary still gets its control. Past
         this, 3D either committed or the page already reloaded to flat. */
      setTimeout(function(){
        if(mtimer){ clearInterval(mtimer); mtimer = null; if(window.__g3on) mount(); }
      }, 120000);
    }
  }
  wireOverlays();
  if(!curMood) curMood = pageMood();
  /* everything this page may voice is fetched EARLY, but OFF the
     entry's critical path: the bell shortly after load (still long
     before any LAUNCH can be pressed), the rest at first idle, so the
     mp3s never race the room chunk on the wire */
  if(pref() !== '0'){
    setTimeout(function(){ try{ prefetch(['launch']); }catch(_){} }, 600);
    var lazy = function(){
      var keys = [];
      try{
        if(matchMedia('(pointer: fine)').matches && window.innerWidth > 860)
          keys.push('murmur');
      }catch(_){}
      if(pageMood() === 'office') keys.push('deniz', 'yigit', 'story');
      if(keys.length) try{ prefetch(keys); }catch(_){}
    };
    if(window.requestIdleCallback) requestIdleCallback(lazy, { timeout: 4000 });
    else setTimeout(lazy, 2500);
  }
  if(pref() === '1'){
    want = true; syncUI();   /* no-op until the control mounts on commit */
    var reDone = false;
    var re = function(ev){
      /* the toggle button owns its own click, never race it (the old
         double-click bug: rejoin enabled on pointerdown, the click then
         toggled straight back off) */
      if(ev && ev.target && ev.target.closest && ev.target.closest('#sndT')){
        document.removeEventListener('pointerdown', re, true);
        document.removeEventListener('keydown', re, true);
        return;
      }
      document.removeEventListener('pointerdown', re, true);
      document.removeEventListener('keydown', re, true);
      if(reDone) return; reDone = true;
      enable(); arrivalVoice();
    };
    /* v8 · IMMERSIVE means SOUND ON, on the desktop too: the ask / door tap
       BIRTHED the audio context inside a real gesture, so the autoplay gate
       is already satisfied, start the air NOW, no second click required.
       (A cold deep link has no such context and still waits for one move.) */
    if(window.__veaCtx){
      reDone = true;
      setTimeout(function(){ try{ enable(); arrivalVoice(); }catch(_){} }, 0);
    } else {
      document.addEventListener('pointerdown', re, true);
      document.addEventListener('keydown', re, true);
    }
  }
}
if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

window.VEASND = {
  enable: enable, disable: disable, toggle: toggle,
  on: function(){ return on; },
  room: room, duck: duck, veil: veil, theme: theme,
  ash: sAsh, condense: sCondense, settle: sSettle,
  click: sClick, hover: sHover, open: sOpen, close: sClose,
  slide: sSlide, motion: motion, wind: motion, presence: presence,
  fadeOut: fadeOut, launch: launch,
  entered: entered,
  themeKey: function(){ return th.key; }
};
})();
