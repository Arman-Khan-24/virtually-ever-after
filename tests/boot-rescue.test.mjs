import assert from 'node:assert/strict';
import test from 'node:test';
import { startBootRescue } from '../src/boot-rescue.js';
function scenario(attempt = null, blocked = false) {
  let now = 0, tick, stopped = false, reloads = 0;
  const stored = new Map(attempt === null ? [] : [['__veaBootTry', String(attempt)]]);
  const note = { textContent: 'Building a virtual space' };
  const buttons = [];
  const plate = {
    hidden: false,
    setAttribute() {},
    append(button) { buttons.push(button); },
  };
  globalThis.window = {};
  globalThis.performance = { now: () => now };
  globalThis.document = {
    body: { classList: { contains: () => false } },
    getElementById: id => id === 'g3boot' ? plate : id === 'g3note' ? note : null,
    createElement: () => ({ style: {}, addEventListener(_, cb) { this.click = cb; } })
  };
  globalThis.sessionStorage = {
    getItem: key => {
      if (blocked) throw Error('storage blocked');
      return stored.get(key) ?? null;
    },
    setItem: (key, value) => stored.set(key, value),
    removeItem: key => stored.delete(key)
  };
  globalThis.location = { reload: () => reloads++ };
  globalThis.setInterval = cb => { tick = cb; return 1; };
  globalThis.clearInterval = () => stopped = true;
  startBootRescue();
  return {
    stored, buttons, plate, note,
    step(ms, progress = false) {
      now = ms;
      if (progress) window.__veaBootProgress();
      if (!stopped) tick();
    },
    get reloads() { return reloads; },
  };
}
test('boot rescue waits for inactivity and bounds automatic retries', () => {
  let s = scenario();
  for (let t = 3000; t <= 90000; t += 3000) s.step(t, true);
  assert.equal(s.reloads, 0, 'continuous progress must not reload even after 90 seconds');
  s.step(119999);
  assert.equal(s.reloads, 0);
  s.step(120000);
  assert.equal(s.reloads, 1);
  assert.equal(s.stored.get('__veaBootTry'), '1');

  s = scenario(1);
  s.step(30000);
  assert.equal(s.reloads, 1);
  assert.equal(s.stored.get('__veaBootTry'), '2');
  assert.equal(s.stored.get('g3lock'), 'lite');

  s = scenario(2);
  s.step(30000);
  s.step(60000);
  assert.equal(s.reloads, 0);
  assert.equal(s.buttons.length, 1);
  assert.match(s.note.textContent, /could not load/);
  s.buttons[0].click();
  assert.equal(s.reloads, 1);
  assert.equal(s.stored.has('__veaBootTry'), false);

  s = scenario(2);
  window.__g3on = true;
  document.body.classList.contains = () => true;
  s.step(30000);
  assert.equal(s.reloads, 0);
  assert.equal(s.stored.has('__veaBootTry'), false);

  s = scenario(null, true);
  s.step(30000);
  assert.equal(s.reloads, 0);
  assert.equal(s.buttons.length, 1);

  s = scenario();
  s.plate.hidden = true;
  s.step(90000);
  s.plate.hidden = false;
  s.step(93000);
  assert.equal(s.reloads, 0);
});
