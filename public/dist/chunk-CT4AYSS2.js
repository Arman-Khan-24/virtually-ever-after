var Ra = "185";
var Fh = 0,
  Vl = 1,
  Oh = 2;
var Gs = 1,
  Bh = 2,
  ns = 3,
  Fn = 0,
  Ve = 1,
  wn = 2,
  En = 0,
  xi = 1,
  bi = 2,
  Gl = 3,
  Hl = 4,
  zh = 5;
var Qn = 100,
  kh = 101,
  Vh = 102,
  Gh = 103,
  Hh = 104,
  Wh = 200,
  Xh = 201,
  qh = 202,
  Yh = 203,
  zr = 204,
  kr = 205,
  Zh = 206,
  Jh = 207,
  $h = 208,
  Kh = 209,
  Qh = 210,
  jh = 211,
  tu = 212,
  eu = 213,
  nu = 214,
  Vr = 0,
  Gr = 1,
  Hr = 2,
  yi = 3,
  Wr = 4,
  Xr = 5,
  qr = 6,
  Yr = 7,
  Wl = 0,
  iu = 1,
  su = 2,
  on = 0,
  Xl = 1,
  ql = 2,
  Yl = 3,
  Zl = 4,
  Jl = 5,
  $l = 6,
  Kl = 7;
var Ql = 300,
  ri = 301,
  wi = 302,
  Ia = 303,
  Pa = 304,
  Hs = 306,
  Zr = 1e3,
  gn = 1001,
  Jr = 1002,
  Re = 1003,
  ru = 1004;
var Ws = 1005;
var we = 1006,
  La = 1007;
var ai = 1008;
var He = 1009,
  jl = 1010,
  tc = 1011,
  is = 1012,
  Da = 1013,
  ln = 1014,
  cn = 1015,
  Tn = 1016,
  Na = 1017,
  Ua = 1018,
  ss = 1020,
  ec = 35902,
  nc = 35899,
  ic = 1021,
  sc = 1022,
  tn = 1023,
  yn = 1026,
  oi = 1027,
  rc = 1028,
  Fa = 1029,
  li = 1030,
  Oa = 1031;
var Ba = 1033,
  Xs = 33776,
  qs = 33777,
  Ys = 33778,
  Zs = 33779,
  za = 35840,
  ka = 35841,
  Va = 35842,
  Ga = 35843,
  Ha = 36196,
  Wa = 37492,
  Xa = 37496,
  qa = 37488,
  Ya = 37489,
  Js = 37490,
  Za = 37491,
  Ja = 37808,
  $a = 37809,
  Ka = 37810,
  Qa = 37811,
  ja = 37812,
  to = 37813,
  eo = 37814,
  no = 37815,
  io = 37816,
  so = 37817,
  ro = 37818,
  ao = 37819,
  oo = 37820,
  lo = 37821,
  co = 36492,
  ho = 36494,
  uo = 36495,
  fo = 36283,
  po = 36284,
  $s = 36285,
  mo = 36286;
var xs = 2300,
  $r = 2301,
  Fr = 2302,
  ul = 2303,
  dl = 2400,
  fl = 2401,
  pl = 2402;
var au = 3200;
var go = 0,
  ou = 1,
  kn = "",
  Le = "srgb",
  ys = "srgb-linear",
  vs = "linear",
  re = "srgb";
var gi = 7680;
var ml = 519,
  lu = 512,
  cu = 513,
  hu = 514,
  _o = 515,
  uu = 516,
  du = 517,
  xo = 518,
  fu = 519,
  gl = 35044;
var ac = "300 es",
  rn = 2e3,
  Wi = 2001;
function Ed(i) {
  for (let t = i.length - 1; t >= 0; --t) if (i[t] >= 65535) return !0;
  return !1;
}
function Td(i) {
  return ArrayBuffer.isView(i) && !(i instanceof DataView);
}
function Xi(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function pu() {
  let i = Xi("canvas");
  return ((i.style.display = "block"), i);
}
var eh = {},
  qi = null;
function oc(...i) {
  let t = "THREE." + i.shift();
  qi ? qi("log", t, ...i) : console.log(t, ...i);
}
function mu(i) {
  let t = i[0];
  if (typeof t == "string" && t.startsWith("TSL:")) {
    let e = i[1];
    e && e.isStackTrace
      ? (i[0] += " " + e.getLocation())
      : (i[1] =
          'Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.');
  }
  return i;
}
function Nt(...i) {
  i = mu(i);
  let t = "THREE." + i.shift();
  if (qi) qi("warn", t, ...i);
  else {
    let e = i[0];
    e && e.isStackTrace ? console.warn(e.getError(t)) : console.warn(t, ...i);
  }
}
function Ot(...i) {
  i = mu(i);
  let t = "THREE." + i.shift();
  if (qi) qi("error", t, ...i);
  else {
    let e = i[0];
    e && e.isStackTrace ? console.error(e.getError(t)) : console.error(t, ...i);
  }
}
function _i(...i) {
  let t = i.join(" ");
  t in eh || ((eh[t] = !0), Nt(...i));
}
function gu(i, t, e) {
  return new Promise(function (n, s) {
    function r() {
      switch (i.clientWaitSync(t, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          s();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(r, e);
          break;
        default:
          n();
      }
    }
    setTimeout(r, e);
  });
}
var _u = {
    [Vr]: Gr,
    [Hr]: qr,
    [Wr]: Yr,
    [yi]: Xr,
    [Gr]: Vr,
    [qr]: Hr,
    [Yr]: Wr,
    [Xr]: yi,
  },
  vn = class {
    addEventListener(t, e) {
      this._listeners === void 0 && (this._listeners = {});
      let n = this._listeners;
      (n[t] === void 0 && (n[t] = []), n[t].indexOf(e) === -1 && n[t].push(e));
    }
    hasEventListener(t, e) {
      let n = this._listeners;
      return n === void 0 ? !1 : n[t] !== void 0 && n[t].indexOf(e) !== -1;
    }
    removeEventListener(t, e) {
      let n = this._listeners;
      if (n === void 0) return;
      let s = n[t];
      if (s !== void 0) {
        let r = s.indexOf(e);
        r !== -1 && s.splice(r, 1);
      }
    }
    dispatchEvent(t) {
      let e = this._listeners;
      if (e === void 0) return;
      let n = e[t.type];
      if (n !== void 0) {
        t.target = this;
        let s = n.slice(0);
        for (let r = 0, a = s.length; r < a; r++) s[r].call(this, t);
        t.target = null;
      }
    }
  },
  Ue = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ];
var Or = Math.PI / 180,
  Ms = 180 / Math.PI;
function rs() {
  let i = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    Ue[i & 255] +
    Ue[(i >> 8) & 255] +
    Ue[(i >> 16) & 255] +
    Ue[(i >> 24) & 255] +
    "-" +
    Ue[t & 255] +
    Ue[(t >> 8) & 255] +
    "-" +
    Ue[((t >> 16) & 15) | 64] +
    Ue[(t >> 24) & 255] +
    "-" +
    Ue[(e & 63) | 128] +
    Ue[(e >> 8) & 255] +
    "-" +
    Ue[(e >> 16) & 255] +
    Ue[(e >> 24) & 255] +
    Ue[n & 255] +
    Ue[(n >> 8) & 255] +
    Ue[(n >> 16) & 255] +
    Ue[(n >> 24) & 255]
  ).toLowerCase();
}
function te(i, t, e) {
  return Math.max(t, Math.min(e, i));
}
function Ad(i, t) {
  return ((i % t) + t) % t;
}
function Oo(i, t, e) {
  return (1 - e) * i + e * t;
}
function cs(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("THREE.MathUtils: Invalid component type.");
  }
}
function Ge(i, t) {
  switch (t.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("THREE.MathUtils: Invalid component type.");
  }
}
var fc = class fc {
  constructor(t = 0, e = 0) {
    ((this.x = t), (this.y = e));
  }
  get width() {
    return this.x;
  }
  set width(t) {
    this.x = t;
  }
  get height() {
    return this.y;
  }
  set height(t) {
    this.y = t;
  }
  set(t, e) {
    return ((this.x = t), (this.y = e), this);
  }
  setScalar(t) {
    return ((this.x = t), (this.y = t), this);
  }
  setX(t) {
    return ((this.x = t), this);
  }
  setY(t) {
    return ((this.y = t), this);
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      default:
        throw new Error("THREE.Vector2: index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("THREE.Vector2: index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(t) {
    return ((this.x = t.x), (this.y = t.y), this);
  }
  add(t) {
    return ((this.x += t.x), (this.y += t.y), this);
  }
  addScalar(t) {
    return ((this.x += t), (this.y += t), this);
  }
  addVectors(t, e) {
    return ((this.x = t.x + e.x), (this.y = t.y + e.y), this);
  }
  addScaledVector(t, e) {
    return ((this.x += t.x * e), (this.y += t.y * e), this);
  }
  sub(t) {
    return ((this.x -= t.x), (this.y -= t.y), this);
  }
  subScalar(t) {
    return ((this.x -= t), (this.y -= t), this);
  }
  subVectors(t, e) {
    return ((this.x = t.x - e.x), (this.y = t.y - e.y), this);
  }
  multiply(t) {
    return ((this.x *= t.x), (this.y *= t.y), this);
  }
  multiplyScalar(t) {
    return ((this.x *= t), (this.y *= t), this);
  }
  divide(t) {
    return ((this.x /= t.x), (this.y /= t.y), this);
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  applyMatrix3(t) {
    let e = this.x,
      n = this.y,
      s = t.elements;
    return (
      (this.x = s[0] * e + s[3] * n + s[6]),
      (this.y = s[1] * e + s[4] * n + s[7]),
      this
    );
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      this
    );
  }
  clamp(t, e) {
    return (
      (this.x = te(this.x, t.x, e.x)),
      (this.y = te(this.y, t.y, e.y)),
      this
    );
  }
  clampScalar(t, e) {
    return ((this.x = te(this.x, t, e)), (this.y = te(this.y, t, e)), this);
  }
  clampLength(t, e) {
    let n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(te(n, t, e));
  }
  floor() {
    return ((this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this);
  }
  ceil() {
    return ((this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this);
  }
  round() {
    return ((this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this);
  }
  roundToZero() {
    return ((this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this);
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), this);
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  cross(t) {
    return this.x * t.y - this.y * t.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(t) {
    let e = Math.sqrt(this.lengthSq() * t.lengthSq());
    if (e === 0) return Math.PI / 2;
    let n = this.dot(t) / e;
    return Math.acos(te(n, -1, 1));
  }
  distanceTo(t) {
    return Math.sqrt(this.distanceToSquared(t));
  }
  distanceToSquared(t) {
    let e = this.x - t.x,
      n = this.y - t.y;
    return e * e + n * n;
  }
  manhattanDistanceTo(t) {
    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      this
    );
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n),
      (this.y = t.y + (e.y - t.y) * n),
      this
    );
  }
  equals(t) {
    return t.x === this.x && t.y === this.y;
  }
  fromArray(t, e = 0) {
    return ((this.x = t[e]), (this.y = t[e + 1]), this);
  }
  toArray(t = [], e = 0) {
    return ((t[e] = this.x), (t[e + 1] = this.y), t);
  }
  fromBufferAttribute(t, e) {
    return ((this.x = t.getX(e)), (this.y = t.getY(e)), this);
  }
  rotateAround(t, e) {
    let n = Math.cos(e),
      s = Math.sin(e),
      r = this.x - t.x,
      a = this.y - t.y;
    return (
      (this.x = r * n - a * s + t.x),
      (this.y = r * s + a * n + t.y),
      this
    );
  }
  random() {
    return ((this.x = Math.random()), (this.y = Math.random()), this);
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y);
  }
};
fc.prototype.isVector2 = !0;
var ut = fc,
  Mn = class {
    constructor(t = 0, e = 0, n = 0, s = 1) {
      ((this.isQuaternion = !0),
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._w = s));
    }
    static slerpFlat(t, e, n, s, r, a, o) {
      let c = n[s + 0],
        l = n[s + 1],
        h = n[s + 2],
        d = n[s + 3],
        u = r[a + 0],
        f = r[a + 1],
        g = r[a + 2],
        y = r[a + 3];
      if (d !== y || c !== u || l !== f || h !== g) {
        let m = c * u + l * f + h * g + d * y;
        m < 0 && ((u = -u), (f = -f), (g = -g), (y = -y), (m = -m));
        let p = 1 - o;
        if (m < 0.9995) {
          let b = Math.acos(m),
            w = Math.sin(b);
          ((p = Math.sin(p * b) / w),
            (o = Math.sin(o * b) / w),
            (c = c * p + u * o),
            (l = l * p + f * o),
            (h = h * p + g * o),
            (d = d * p + y * o));
        } else {
          ((c = c * p + u * o),
            (l = l * p + f * o),
            (h = h * p + g * o),
            (d = d * p + y * o));
          let b = 1 / Math.sqrt(c * c + l * l + h * h + d * d);
          ((c *= b), (l *= b), (h *= b), (d *= b));
        }
      }
      ((t[e] = c), (t[e + 1] = l), (t[e + 2] = h), (t[e + 3] = d));
    }
    static multiplyQuaternionsFlat(t, e, n, s, r, a) {
      let o = n[s],
        c = n[s + 1],
        l = n[s + 2],
        h = n[s + 3],
        d = r[a],
        u = r[a + 1],
        f = r[a + 2],
        g = r[a + 3];
      return (
        (t[e] = o * g + h * d + c * f - l * u),
        (t[e + 1] = c * g + h * u + l * d - o * f),
        (t[e + 2] = l * g + h * f + o * u - c * d),
        (t[e + 3] = h * g - o * d - c * u - l * f),
        t
      );
    }
    get x() {
      return this._x;
    }
    set x(t) {
      ((this._x = t), this._onChangeCallback());
    }
    get y() {
      return this._y;
    }
    set y(t) {
      ((this._y = t), this._onChangeCallback());
    }
    get z() {
      return this._z;
    }
    set z(t) {
      ((this._z = t), this._onChangeCallback());
    }
    get w() {
      return this._w;
    }
    set w(t) {
      ((this._w = t), this._onChangeCallback());
    }
    set(t, e, n, s) {
      return (
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._w = s),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(t) {
      return (
        (this._x = t.x),
        (this._y = t.y),
        (this._z = t.z),
        (this._w = t.w),
        this._onChangeCallback(),
        this
      );
    }
    setFromEuler(t, e = !0) {
      let n = t._x,
        s = t._y,
        r = t._z,
        a = t._order,
        o = Math.cos,
        c = Math.sin,
        l = o(n / 2),
        h = o(s / 2),
        d = o(r / 2),
        u = c(n / 2),
        f = c(s / 2),
        g = c(r / 2);
      switch (a) {
        case "XYZ":
          ((this._x = u * h * d + l * f * g),
            (this._y = l * f * d - u * h * g),
            (this._z = l * h * g + u * f * d),
            (this._w = l * h * d - u * f * g));
          break;
        case "YXZ":
          ((this._x = u * h * d + l * f * g),
            (this._y = l * f * d - u * h * g),
            (this._z = l * h * g - u * f * d),
            (this._w = l * h * d + u * f * g));
          break;
        case "ZXY":
          ((this._x = u * h * d - l * f * g),
            (this._y = l * f * d + u * h * g),
            (this._z = l * h * g + u * f * d),
            (this._w = l * h * d - u * f * g));
          break;
        case "ZYX":
          ((this._x = u * h * d - l * f * g),
            (this._y = l * f * d + u * h * g),
            (this._z = l * h * g - u * f * d),
            (this._w = l * h * d + u * f * g));
          break;
        case "YZX":
          ((this._x = u * h * d + l * f * g),
            (this._y = l * f * d + u * h * g),
            (this._z = l * h * g - u * f * d),
            (this._w = l * h * d - u * f * g));
          break;
        case "XZY":
          ((this._x = u * h * d - l * f * g),
            (this._y = l * f * d - u * h * g),
            (this._z = l * h * g + u * f * d),
            (this._w = l * h * d + u * f * g));
          break;
        default:
          Nt("Quaternion: .setFromEuler() encountered an unknown order: " + a);
      }
      return (e === !0 && this._onChangeCallback(), this);
    }
    setFromAxisAngle(t, e) {
      let n = e / 2,
        s = Math.sin(n);
      return (
        (this._x = t.x * s),
        (this._y = t.y * s),
        (this._z = t.z * s),
        (this._w = Math.cos(n)),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(t) {
      let e = t.elements,
        n = e[0],
        s = e[4],
        r = e[8],
        a = e[1],
        o = e[5],
        c = e[9],
        l = e[2],
        h = e[6],
        d = e[10],
        u = n + o + d;
      if (u > 0) {
        let f = 0.5 / Math.sqrt(u + 1);
        ((this._w = 0.25 / f),
          (this._x = (h - c) * f),
          (this._y = (r - l) * f),
          (this._z = (a - s) * f));
      } else if (n > o && n > d) {
        let f = 2 * Math.sqrt(1 + n - o - d);
        ((this._w = (h - c) / f),
          (this._x = 0.25 * f),
          (this._y = (s + a) / f),
          (this._z = (r + l) / f));
      } else if (o > d) {
        let f = 2 * Math.sqrt(1 + o - n - d);
        ((this._w = (r - l) / f),
          (this._x = (s + a) / f),
          (this._y = 0.25 * f),
          (this._z = (c + h) / f));
      } else {
        let f = 2 * Math.sqrt(1 + d - n - o);
        ((this._w = (a - s) / f),
          (this._x = (r + l) / f),
          (this._y = (c + h) / f),
          (this._z = 0.25 * f));
      }
      return (this._onChangeCallback(), this);
    }
    setFromUnitVectors(t, e) {
      let n = t.dot(e) + 1;
      return (
        n < 1e-8
          ? ((n = 0),
            Math.abs(t.x) > Math.abs(t.z)
              ? ((this._x = -t.y),
                (this._y = t.x),
                (this._z = 0),
                (this._w = n))
              : ((this._x = 0),
                (this._y = -t.z),
                (this._z = t.y),
                (this._w = n)))
          : ((this._x = t.y * e.z - t.z * e.y),
            (this._y = t.z * e.x - t.x * e.z),
            (this._z = t.x * e.y - t.y * e.x),
            (this._w = n)),
        this.normalize()
      );
    }
    angleTo(t) {
      return 2 * Math.acos(Math.abs(te(this.dot(t), -1, 1)));
    }
    rotateTowards(t, e) {
      let n = this.angleTo(t);
      if (n === 0) return this;
      let s = Math.min(1, e / n);
      return (this.slerp(t, s), this);
    }
    identity() {
      return this.set(0, 0, 0, 1);
    }
    invert() {
      return this.conjugate();
    }
    conjugate() {
      return (
        (this._x *= -1),
        (this._y *= -1),
        (this._z *= -1),
        this._onChangeCallback(),
        this
      );
    }
    dot(t) {
      return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
    }
    lengthSq() {
      return (
        this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
      );
    }
    length() {
      return Math.sqrt(
        this._x * this._x +
          this._y * this._y +
          this._z * this._z +
          this._w * this._w,
      );
    }
    normalize() {
      let t = this.length();
      return (
        t === 0
          ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
          : ((t = 1 / t),
            (this._x = this._x * t),
            (this._y = this._y * t),
            (this._z = this._z * t),
            (this._w = this._w * t)),
        this._onChangeCallback(),
        this
      );
    }
    multiply(t) {
      return this.multiplyQuaternions(this, t);
    }
    premultiply(t) {
      return this.multiplyQuaternions(t, this);
    }
    multiplyQuaternions(t, e) {
      let n = t._x,
        s = t._y,
        r = t._z,
        a = t._w,
        o = e._x,
        c = e._y,
        l = e._z,
        h = e._w;
      return (
        (this._x = n * h + a * o + s * l - r * c),
        (this._y = s * h + a * c + r * o - n * l),
        (this._z = r * h + a * l + n * c - s * o),
        (this._w = a * h - n * o - s * c - r * l),
        this._onChangeCallback(),
        this
      );
    }
    slerp(t, e) {
      let n = t._x,
        s = t._y,
        r = t._z,
        a = t._w,
        o = this.dot(t);
      o < 0 && ((n = -n), (s = -s), (r = -r), (a = -a), (o = -o));
      let c = 1 - e;
      if (o < 0.9995) {
        let l = Math.acos(o),
          h = Math.sin(l);
        ((c = Math.sin(c * l) / h),
          (e = Math.sin(e * l) / h),
          (this._x = this._x * c + n * e),
          (this._y = this._y * c + s * e),
          (this._z = this._z * c + r * e),
          (this._w = this._w * c + a * e),
          this._onChangeCallback());
      } else
        ((this._x = this._x * c + n * e),
          (this._y = this._y * c + s * e),
          (this._z = this._z * c + r * e),
          (this._w = this._w * c + a * e),
          this.normalize());
      return this;
    }
    slerpQuaternions(t, e, n) {
      return this.copy(t).slerp(e, n);
    }
    random() {
      let t = 2 * Math.PI * Math.random(),
        e = 2 * Math.PI * Math.random(),
        n = Math.random(),
        s = Math.sqrt(1 - n),
        r = Math.sqrt(n);
      return this.set(
        s * Math.sin(t),
        s * Math.cos(t),
        r * Math.sin(e),
        r * Math.cos(e),
      );
    }
    equals(t) {
      return (
        t._x === this._x &&
        t._y === this._y &&
        t._z === this._z &&
        t._w === this._w
      );
    }
    fromArray(t, e = 0) {
      return (
        (this._x = t[e]),
        (this._y = t[e + 1]),
        (this._z = t[e + 2]),
        (this._w = t[e + 3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this._x),
        (t[e + 1] = this._y),
        (t[e + 2] = this._z),
        (t[e + 3] = this._w),
        t
      );
    }
    fromBufferAttribute(t, e) {
      return (
        (this._x = t.getX(e)),
        (this._y = t.getY(e)),
        (this._z = t.getZ(e)),
        (this._w = t.getW(e)),
        this._onChangeCallback(),
        this
      );
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(t) {
      return ((this._onChangeCallback = t), this);
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      (yield this._x, yield this._y, yield this._z, yield this._w);
    }
  },
  pc = class pc {
    constructor(t = 0, e = 0, n = 0) {
      ((this.x = t), (this.y = e), (this.z = n));
    }
    set(t, e, n) {
      return (
        n === void 0 && (n = this.z),
        (this.x = t),
        (this.y = e),
        (this.z = n),
        this
      );
    }
    setScalar(t) {
      return ((this.x = t), (this.y = t), (this.z = t), this);
    }
    setX(t) {
      return ((this.x = t), this);
    }
    setY(t) {
      return ((this.y = t), this);
    }
    setZ(t) {
      return ((this.z = t), this);
    }
    setComponent(t, e) {
      switch (t) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        default:
          throw new Error("THREE.Vector3: index is out of range: " + t);
      }
      return this;
    }
    getComponent(t) {
      switch (t) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("THREE.Vector3: index is out of range: " + t);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(t) {
      return ((this.x = t.x), (this.y = t.y), (this.z = t.z), this);
    }
    add(t) {
      return ((this.x += t.x), (this.y += t.y), (this.z += t.z), this);
    }
    addScalar(t) {
      return ((this.x += t), (this.y += t), (this.z += t), this);
    }
    addVectors(t, e) {
      return (
        (this.x = t.x + e.x),
        (this.y = t.y + e.y),
        (this.z = t.z + e.z),
        this
      );
    }
    addScaledVector(t, e) {
      return (
        (this.x += t.x * e),
        (this.y += t.y * e),
        (this.z += t.z * e),
        this
      );
    }
    sub(t) {
      return ((this.x -= t.x), (this.y -= t.y), (this.z -= t.z), this);
    }
    subScalar(t) {
      return ((this.x -= t), (this.y -= t), (this.z -= t), this);
    }
    subVectors(t, e) {
      return (
        (this.x = t.x - e.x),
        (this.y = t.y - e.y),
        (this.z = t.z - e.z),
        this
      );
    }
    multiply(t) {
      return ((this.x *= t.x), (this.y *= t.y), (this.z *= t.z), this);
    }
    multiplyScalar(t) {
      return ((this.x *= t), (this.y *= t), (this.z *= t), this);
    }
    multiplyVectors(t, e) {
      return (
        (this.x = t.x * e.x),
        (this.y = t.y * e.y),
        (this.z = t.z * e.z),
        this
      );
    }
    applyEuler(t) {
      return this.applyQuaternion(nh.setFromEuler(t));
    }
    applyAxisAngle(t, e) {
      return this.applyQuaternion(nh.setFromAxisAngle(t, e));
    }
    applyMatrix3(t) {
      let e = this.x,
        n = this.y,
        s = this.z,
        r = t.elements;
      return (
        (this.x = r[0] * e + r[3] * n + r[6] * s),
        (this.y = r[1] * e + r[4] * n + r[7] * s),
        (this.z = r[2] * e + r[5] * n + r[8] * s),
        this
      );
    }
    applyNormalMatrix(t) {
      return this.applyMatrix3(t).normalize();
    }
    applyMatrix4(t) {
      let e = this.x,
        n = this.y,
        s = this.z,
        r = t.elements,
        a = 1 / (r[3] * e + r[7] * n + r[11] * s + r[15]);
      return (
        (this.x = (r[0] * e + r[4] * n + r[8] * s + r[12]) * a),
        (this.y = (r[1] * e + r[5] * n + r[9] * s + r[13]) * a),
        (this.z = (r[2] * e + r[6] * n + r[10] * s + r[14]) * a),
        this
      );
    }
    applyQuaternion(t) {
      let e = this.x,
        n = this.y,
        s = this.z,
        r = t.x,
        a = t.y,
        o = t.z,
        c = t.w,
        l = 2 * (a * s - o * n),
        h = 2 * (o * e - r * s),
        d = 2 * (r * n - a * e);
      return (
        (this.x = e + c * l + a * d - o * h),
        (this.y = n + c * h + o * l - r * d),
        (this.z = s + c * d + r * h - a * l),
        this
      );
    }
    project(t) {
      return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(
        t.projectionMatrix,
      );
    }
    unproject(t) {
      return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(
        t.matrixWorld,
      );
    }
    transformDirection(t) {
      let e = this.x,
        n = this.y,
        s = this.z,
        r = t.elements;
      return (
        (this.x = r[0] * e + r[4] * n + r[8] * s),
        (this.y = r[1] * e + r[5] * n + r[9] * s),
        (this.z = r[2] * e + r[6] * n + r[10] * s),
        this.normalize()
      );
    }
    divide(t) {
      return ((this.x /= t.x), (this.y /= t.y), (this.z /= t.z), this);
    }
    divideScalar(t) {
      return this.multiplyScalar(1 / t);
    }
    min(t) {
      return (
        (this.x = Math.min(this.x, t.x)),
        (this.y = Math.min(this.y, t.y)),
        (this.z = Math.min(this.z, t.z)),
        this
      );
    }
    max(t) {
      return (
        (this.x = Math.max(this.x, t.x)),
        (this.y = Math.max(this.y, t.y)),
        (this.z = Math.max(this.z, t.z)),
        this
      );
    }
    clamp(t, e) {
      return (
        (this.x = te(this.x, t.x, e.x)),
        (this.y = te(this.y, t.y, e.y)),
        (this.z = te(this.z, t.z, e.z)),
        this
      );
    }
    clampScalar(t, e) {
      return (
        (this.x = te(this.x, t, e)),
        (this.y = te(this.y, t, e)),
        (this.z = te(this.z, t, e)),
        this
      );
    }
    clampLength(t, e) {
      let n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(te(n, t, e));
    }
    floor() {
      return (
        (this.x = Math.floor(this.x)),
        (this.y = Math.floor(this.y)),
        (this.z = Math.floor(this.z)),
        this
      );
    }
    ceil() {
      return (
        (this.x = Math.ceil(this.x)),
        (this.y = Math.ceil(this.y)),
        (this.z = Math.ceil(this.z)),
        this
      );
    }
    round() {
      return (
        (this.x = Math.round(this.x)),
        (this.y = Math.round(this.y)),
        (this.z = Math.round(this.z)),
        this
      );
    }
    roundToZero() {
      return (
        (this.x = Math.trunc(this.x)),
        (this.y = Math.trunc(this.y)),
        (this.z = Math.trunc(this.z)),
        this
      );
    }
    negate() {
      return ((this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this);
    }
    dot(t) {
      return this.x * t.x + this.y * t.y + this.z * t.z;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    manhattanLength() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    normalize() {
      return this.divideScalar(this.length() || 1);
    }
    setLength(t) {
      return this.normalize().multiplyScalar(t);
    }
    lerp(t, e) {
      return (
        (this.x += (t.x - this.x) * e),
        (this.y += (t.y - this.y) * e),
        (this.z += (t.z - this.z) * e),
        this
      );
    }
    lerpVectors(t, e, n) {
      return (
        (this.x = t.x + (e.x - t.x) * n),
        (this.y = t.y + (e.y - t.y) * n),
        (this.z = t.z + (e.z - t.z) * n),
        this
      );
    }
    cross(t) {
      return this.crossVectors(this, t);
    }
    crossVectors(t, e) {
      let n = t.x,
        s = t.y,
        r = t.z,
        a = e.x,
        o = e.y,
        c = e.z;
      return (
        (this.x = s * c - r * o),
        (this.y = r * a - n * c),
        (this.z = n * o - s * a),
        this
      );
    }
    projectOnVector(t) {
      let e = t.lengthSq();
      if (e === 0) return this.set(0, 0, 0);
      let n = t.dot(this) / e;
      return this.copy(t).multiplyScalar(n);
    }
    projectOnPlane(t) {
      return (Bo.copy(this).projectOnVector(t), this.sub(Bo));
    }
    reflect(t) {
      return this.sub(Bo.copy(t).multiplyScalar(2 * this.dot(t)));
    }
    angleTo(t) {
      let e = Math.sqrt(this.lengthSq() * t.lengthSq());
      if (e === 0) return Math.PI / 2;
      let n = this.dot(t) / e;
      return Math.acos(te(n, -1, 1));
    }
    distanceTo(t) {
      return Math.sqrt(this.distanceToSquared(t));
    }
    distanceToSquared(t) {
      let e = this.x - t.x,
        n = this.y - t.y,
        s = this.z - t.z;
      return e * e + n * n + s * s;
    }
    manhattanDistanceTo(t) {
      return (
        Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
      );
    }
    setFromSpherical(t) {
      return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
    }
    setFromSphericalCoords(t, e, n) {
      let s = Math.sin(e) * t;
      return (
        (this.x = s * Math.sin(n)),
        (this.y = Math.cos(e) * t),
        (this.z = s * Math.cos(n)),
        this
      );
    }
    setFromCylindrical(t) {
      return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
    }
    setFromCylindricalCoords(t, e, n) {
      return (
        (this.x = t * Math.sin(e)),
        (this.y = n),
        (this.z = t * Math.cos(e)),
        this
      );
    }
    setFromMatrixPosition(t) {
      let e = t.elements;
      return ((this.x = e[12]), (this.y = e[13]), (this.z = e[14]), this);
    }
    setFromMatrixScale(t) {
      let e = this.setFromMatrixColumn(t, 0).length(),
        n = this.setFromMatrixColumn(t, 1).length(),
        s = this.setFromMatrixColumn(t, 2).length();
      return ((this.x = e), (this.y = n), (this.z = s), this);
    }
    setFromMatrixColumn(t, e) {
      return this.fromArray(t.elements, e * 4);
    }
    setFromMatrix3Column(t, e) {
      return this.fromArray(t.elements, e * 3);
    }
    setFromEuler(t) {
      return ((this.x = t._x), (this.y = t._y), (this.z = t._z), this);
    }
    setFromColor(t) {
      return ((this.x = t.r), (this.y = t.g), (this.z = t.b), this);
    }
    equals(t) {
      return t.x === this.x && t.y === this.y && t.z === this.z;
    }
    fromArray(t, e = 0) {
      return ((this.x = t[e]), (this.y = t[e + 1]), (this.z = t[e + 2]), this);
    }
    toArray(t = [], e = 0) {
      return ((t[e] = this.x), (t[e + 1] = this.y), (t[e + 2] = this.z), t);
    }
    fromBufferAttribute(t, e) {
      return (
        (this.x = t.getX(e)),
        (this.y = t.getY(e)),
        (this.z = t.getZ(e)),
        this
      );
    }
    random() {
      return (
        (this.x = Math.random()),
        (this.y = Math.random()),
        (this.z = Math.random()),
        this
      );
    }
    randomDirection() {
      let t = Math.random() * Math.PI * 2,
        e = Math.random() * 2 - 1,
        n = Math.sqrt(1 - e * e);
      return (
        (this.x = n * Math.cos(t)),
        (this.y = e),
        (this.z = n * Math.sin(t)),
        this
      );
    }
    *[Symbol.iterator]() {
      (yield this.x, yield this.y, yield this.z);
    }
  };
pc.prototype.isVector3 = !0;
var L = pc,
  Bo = new L(),
  nh = new Mn(),
  mc = class mc {
    constructor(t, e, n, s, r, a, o, c, l) {
      ((this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
        t !== void 0 && this.set(t, e, n, s, r, a, o, c, l));
    }
    set(t, e, n, s, r, a, o, c, l) {
      let h = this.elements;
      return (
        (h[0] = t),
        (h[1] = s),
        (h[2] = o),
        (h[3] = e),
        (h[4] = r),
        (h[5] = c),
        (h[6] = n),
        (h[7] = a),
        (h[8] = l),
        this
      );
    }
    identity() {
      return (this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this);
    }
    copy(t) {
      let e = this.elements,
        n = t.elements;
      return (
        (e[0] = n[0]),
        (e[1] = n[1]),
        (e[2] = n[2]),
        (e[3] = n[3]),
        (e[4] = n[4]),
        (e[5] = n[5]),
        (e[6] = n[6]),
        (e[7] = n[7]),
        (e[8] = n[8]),
        this
      );
    }
    extractBasis(t, e, n) {
      return (
        t.setFromMatrix3Column(this, 0),
        e.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
      );
    }
    setFromMatrix4(t) {
      let e = t.elements;
      return (
        this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
        this
      );
    }
    multiply(t) {
      return this.multiplyMatrices(this, t);
    }
    premultiply(t) {
      return this.multiplyMatrices(t, this);
    }
    multiplyMatrices(t, e) {
      let n = t.elements,
        s = e.elements,
        r = this.elements,
        a = n[0],
        o = n[3],
        c = n[6],
        l = n[1],
        h = n[4],
        d = n[7],
        u = n[2],
        f = n[5],
        g = n[8],
        y = s[0],
        m = s[3],
        p = s[6],
        b = s[1],
        w = s[4],
        v = s[7],
        A = s[2],
        T = s[5],
        R = s[8];
      return (
        (r[0] = a * y + o * b + c * A),
        (r[3] = a * m + o * w + c * T),
        (r[6] = a * p + o * v + c * R),
        (r[1] = l * y + h * b + d * A),
        (r[4] = l * m + h * w + d * T),
        (r[7] = l * p + h * v + d * R),
        (r[2] = u * y + f * b + g * A),
        (r[5] = u * m + f * w + g * T),
        (r[8] = u * p + f * v + g * R),
        this
      );
    }
    multiplyScalar(t) {
      let e = this.elements;
      return (
        (e[0] *= t),
        (e[3] *= t),
        (e[6] *= t),
        (e[1] *= t),
        (e[4] *= t),
        (e[7] *= t),
        (e[2] *= t),
        (e[5] *= t),
        (e[8] *= t),
        this
      );
    }
    determinant() {
      let t = this.elements,
        e = t[0],
        n = t[1],
        s = t[2],
        r = t[3],
        a = t[4],
        o = t[5],
        c = t[6],
        l = t[7],
        h = t[8];
      return (
        e * a * h - e * o * l - n * r * h + n * o * c + s * r * l - s * a * c
      );
    }
    invert() {
      let t = this.elements,
        e = t[0],
        n = t[1],
        s = t[2],
        r = t[3],
        a = t[4],
        o = t[5],
        c = t[6],
        l = t[7],
        h = t[8],
        d = h * a - o * l,
        u = o * c - h * r,
        f = l * r - a * c,
        g = e * d + n * u + s * f;
      if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      let y = 1 / g;
      return (
        (t[0] = d * y),
        (t[1] = (s * l - h * n) * y),
        (t[2] = (o * n - s * a) * y),
        (t[3] = u * y),
        (t[4] = (h * e - s * c) * y),
        (t[5] = (s * r - o * e) * y),
        (t[6] = f * y),
        (t[7] = (n * c - l * e) * y),
        (t[8] = (a * e - n * r) * y),
        this
      );
    }
    transpose() {
      let t,
        e = this.elements;
      return (
        (t = e[1]),
        (e[1] = e[3]),
        (e[3] = t),
        (t = e[2]),
        (e[2] = e[6]),
        (e[6] = t),
        (t = e[5]),
        (e[5] = e[7]),
        (e[7] = t),
        this
      );
    }
    getNormalMatrix(t) {
      return this.setFromMatrix4(t).invert().transpose();
    }
    transposeIntoArray(t) {
      let e = this.elements;
      return (
        (t[0] = e[0]),
        (t[1] = e[3]),
        (t[2] = e[6]),
        (t[3] = e[1]),
        (t[4] = e[4]),
        (t[5] = e[7]),
        (t[6] = e[2]),
        (t[7] = e[5]),
        (t[8] = e[8]),
        this
      );
    }
    setUvTransform(t, e, n, s, r, a, o) {
      let c = Math.cos(r),
        l = Math.sin(r);
      return (
        this.set(
          n * c,
          n * l,
          -n * (c * a + l * o) + a + t,
          -s * l,
          s * c,
          -s * (-l * a + c * o) + o + e,
          0,
          0,
          1,
        ),
        this
      );
    }
    scale(t, e) {
      return (
        _i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),
        this.premultiply(zo.makeScale(t, e)),
        this
      );
    }
    rotate(t) {
      return (
        _i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),
        this.premultiply(zo.makeRotation(-t)),
        this
      );
    }
    translate(t, e) {
      return (
        _i(
          "Matrix3: .translate() is deprecated. Use .makeTranslation() instead.",
        ),
        this.premultiply(zo.makeTranslation(t, e)),
        this
      );
    }
    makeTranslation(t, e) {
      return (
        t.isVector2
          ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1)
          : this.set(1, 0, t, 0, 1, e, 0, 0, 1),
        this
      );
    }
    makeRotation(t) {
      let e = Math.cos(t),
        n = Math.sin(t);
      return (this.set(e, -n, 0, n, e, 0, 0, 0, 1), this);
    }
    makeScale(t, e) {
      return (this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this);
    }
    equals(t) {
      let e = this.elements,
        n = t.elements;
      for (let s = 0; s < 9; s++) if (e[s] !== n[s]) return !1;
      return !0;
    }
    fromArray(t, e = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = t[n + e];
      return this;
    }
    toArray(t = [], e = 0) {
      let n = this.elements;
      return (
        (t[e] = n[0]),
        (t[e + 1] = n[1]),
        (t[e + 2] = n[2]),
        (t[e + 3] = n[3]),
        (t[e + 4] = n[4]),
        (t[e + 5] = n[5]),
        (t[e + 6] = n[6]),
        (t[e + 7] = n[7]),
        (t[e + 8] = n[8]),
        t
      );
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  };
mc.prototype.isMatrix3 = !0;
var Ht = mc,
  zo = new Ht(),
  ih = new Ht().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322,
  ),
  sh = new Ht().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715,
  );
function Cd() {
  let i = {
      enabled: !0,
      workingColorSpace: ys,
      spaces: {},
      convert: function (s, r, a) {
        return (
          this.enabled === !1 ||
            r === a ||
            !r ||
            !a ||
            (this.spaces[r].transfer === re &&
              ((s.r = Un(s.r)), (s.g = Un(s.g)), (s.b = Un(s.b))),
            this.spaces[r].primaries !== this.spaces[a].primaries &&
              (s.applyMatrix3(this.spaces[r].toXYZ),
              s.applyMatrix3(this.spaces[a].fromXYZ)),
            this.spaces[a].transfer === re &&
              ((s.r = Hi(s.r)), (s.g = Hi(s.g)), (s.b = Hi(s.b)))),
          s
        );
      },
      workingToColorSpace: function (s, r) {
        return this.convert(s, this.workingColorSpace, r);
      },
      colorSpaceToWorking: function (s, r) {
        return this.convert(s, r, this.workingColorSpace);
      },
      getPrimaries: function (s) {
        return this.spaces[s].primaries;
      },
      getTransfer: function (s) {
        return s === kn ? vs : this.spaces[s].transfer;
      },
      getToneMappingMode: function (s) {
        return (
          this.spaces[s].outputColorSpaceConfig.toneMappingMode || "standard"
        );
      },
      getLuminanceCoefficients: function (s, r = this.workingColorSpace) {
        return s.fromArray(this.spaces[r].luminanceCoefficients);
      },
      define: function (s) {
        Object.assign(this.spaces, s);
      },
      _getMatrix: function (s, r, a) {
        return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (s) {
        return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (s = this.workingColorSpace) {
        return this.spaces[s].workingColorSpaceConfig.unpackColorSpace;
      },
      fromWorkingColorSpace: function (s, r) {
        return (
          _i(
            "ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().",
          ),
          i.workingToColorSpace(s, r)
        );
      },
      toWorkingColorSpace: function (s, r) {
        return (
          _i(
            "ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().",
          ),
          i.colorSpaceToWorking(s, r)
        );
      },
    },
    t = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    e = [0.2126, 0.7152, 0.0722],
    n = [0.3127, 0.329];
  return (
    i.define({
      [ys]: {
        primaries: t,
        whitePoint: n,
        transfer: vs,
        toXYZ: ih,
        fromXYZ: sh,
        luminanceCoefficients: e,
        workingColorSpaceConfig: { unpackColorSpace: Le },
        outputColorSpaceConfig: { drawingBufferColorSpace: Le },
      },
      [Le]: {
        primaries: t,
        whitePoint: n,
        transfer: re,
        toXYZ: ih,
        fromXYZ: sh,
        luminanceCoefficients: e,
        outputColorSpaceConfig: { drawingBufferColorSpace: Le },
      },
    }),
    i
  );
}
var ee = Cd();
function Un(i) {
  return i < 0.04045
    ? i * 0.0773993808
    : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Hi(i) {
  return i < 0.0031308 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
var Ii,
  Kr = class {
    static getDataURL(t, e = "image/png") {
      if (/^data:/i.test(t.src) || typeof HTMLCanvasElement > "u") return t.src;
      let n;
      if (t instanceof HTMLCanvasElement) n = t;
      else {
        (Ii === void 0 && (Ii = Xi("canvas")),
          (Ii.width = t.width),
          (Ii.height = t.height));
        let s = Ii.getContext("2d");
        (t instanceof ImageData
          ? s.putImageData(t, 0, 0)
          : s.drawImage(t, 0, 0, t.width, t.height),
          (n = Ii));
      }
      return n.toDataURL(e);
    }
    static sRGBToLinear(t) {
      if (
        (typeof HTMLImageElement < "u" && t instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && t instanceof ImageBitmap)
      ) {
        let e = Xi("canvas");
        ((e.width = t.width), (e.height = t.height));
        let n = e.getContext("2d");
        n.drawImage(t, 0, 0, t.width, t.height);
        let s = n.getImageData(0, 0, t.width, t.height),
          r = s.data;
        for (let a = 0; a < r.length; a++) r[a] = Un(r[a] / 255) * 255;
        return (n.putImageData(s, 0, 0), e);
      } else if (t.data) {
        let e = t.data.slice(0);
        for (let n = 0; n < e.length; n++)
          e instanceof Uint8Array || e instanceof Uint8ClampedArray
            ? (e[n] = Math.floor(Un(e[n] / 255) * 255))
            : (e[n] = Un(e[n]));
        return { data: e, width: t.width, height: t.height };
      } else
        return (
          Nt(
            "ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.",
          ),
          t
        );
    }
  },
  Rd = 0,
  Yi = class {
    constructor(t = null) {
      ((this.isSource = !0),
        Object.defineProperty(this, "id", { value: Rd++ }),
        (this.uuid = rs()),
        (this.data = t),
        (this.dataReady = !0),
        (this.version = 0));
    }
    getSize(t) {
      let e = this.data;
      return (
        typeof HTMLVideoElement < "u" && e instanceof HTMLVideoElement
          ? t.set(e.videoWidth, e.videoHeight, 0)
          : typeof VideoFrame < "u" && e instanceof VideoFrame
            ? t.set(e.displayWidth, e.displayHeight, 0)
            : e !== null
              ? t.set(e.width, e.height, e.depth || 0)
              : t.set(0, 0, 0),
        t
      );
    }
    set needsUpdate(t) {
      t === !0 && this.version++;
    }
    toJSON(t) {
      let e = t === void 0 || typeof t == "string";
      if (!e && t.images[this.uuid] !== void 0) return t.images[this.uuid];
      let n = { uuid: this.uuid, url: "" },
        s = this.data;
      if (s !== null) {
        let r;
        if (Array.isArray(s)) {
          r = [];
          for (let a = 0, o = s.length; a < o; a++)
            s[a].isDataTexture ? r.push(ko(s[a].image)) : r.push(ko(s[a]));
        } else r = ko(s);
        n.url = r;
      }
      return (e || (t.images[this.uuid] = n), n);
    }
  };
function ko(i) {
  return (typeof HTMLImageElement < "u" && i instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && i instanceof ImageBitmap)
    ? Kr.getDataURL(i)
    : i.data
      ? {
          data: Array.from(i.data),
          width: i.width,
          height: i.height,
          type: i.data.constructor.name,
        }
      : (Nt("Texture: Unable to serialize Texture."), {});
}
var Id = 0,
  Vo = new L(),
  De = class i extends vn {
    constructor(
      t = i.DEFAULT_IMAGE,
      e = i.DEFAULT_MAPPING,
      n = gn,
      s = gn,
      r = we,
      a = ai,
      o = tn,
      c = He,
      l = i.DEFAULT_ANISOTROPY,
      h = kn,
    ) {
      (super(),
        (this.isTexture = !0),
        Object.defineProperty(this, "id", { value: Id++ }),
        (this.uuid = rs()),
        (this.name = ""),
        (this.source = new Yi(t)),
        (this.mipmaps = []),
        (this.mapping = e),
        (this.channel = 0),
        (this.wrapS = n),
        (this.wrapT = s),
        (this.magFilter = r),
        (this.minFilter = a),
        (this.anisotropy = l),
        (this.format = o),
        (this.internalFormat = null),
        (this.type = c),
        (this.offset = new ut(0, 0)),
        (this.repeat = new ut(1, 1)),
        (this.center = new ut(0, 0)),
        (this.rotation = 0),
        (this.matrixAutoUpdate = !0),
        (this.matrix = new Ht()),
        (this.generateMipmaps = !0),
        (this.premultiplyAlpha = !1),
        (this.flipY = !0),
        (this.unpackAlignment = 4),
        (this.colorSpace = h),
        (this.userData = {}),
        (this.updateRanges = []),
        (this.version = 0),
        (this.onUpdate = null),
        (this.renderTarget = null),
        (this.isRenderTargetTexture = !1),
        (this.isArrayTexture = !!(t && t.depth && t.depth > 1)),
        (this.pmremVersion = 0),
        (this.normalized = !1));
    }
    get width() {
      return this.source.getSize(Vo).x;
    }
    get height() {
      return this.source.getSize(Vo).y;
    }
    get depth() {
      return this.source.getSize(Vo).z;
    }
    get image() {
      return this.source.data;
    }
    set image(t) {
      this.source.data = t;
    }
    updateMatrix() {
      this.matrix.setUvTransform(
        this.offset.x,
        this.offset.y,
        this.repeat.x,
        this.repeat.y,
        this.rotation,
        this.center.x,
        this.center.y,
      );
    }
    addUpdateRange(t, e) {
      this.updateRanges.push({ start: t, count: e });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return (
        (this.name = t.name),
        (this.source = t.source),
        (this.mipmaps = t.mipmaps.slice(0)),
        (this.mapping = t.mapping),
        (this.channel = t.channel),
        (this.wrapS = t.wrapS),
        (this.wrapT = t.wrapT),
        (this.magFilter = t.magFilter),
        (this.minFilter = t.minFilter),
        (this.anisotropy = t.anisotropy),
        (this.format = t.format),
        (this.internalFormat = t.internalFormat),
        (this.type = t.type),
        (this.normalized = t.normalized),
        this.offset.copy(t.offset),
        this.repeat.copy(t.repeat),
        this.center.copy(t.center),
        (this.rotation = t.rotation),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        this.matrix.copy(t.matrix),
        (this.generateMipmaps = t.generateMipmaps),
        (this.premultiplyAlpha = t.premultiplyAlpha),
        (this.flipY = t.flipY),
        (this.unpackAlignment = t.unpackAlignment),
        (this.colorSpace = t.colorSpace),
        (this.renderTarget = t.renderTarget),
        (this.isRenderTargetTexture = t.isRenderTargetTexture),
        (this.isArrayTexture = t.isArrayTexture),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        (this.needsUpdate = !0),
        this
      );
    }
    setValues(t) {
      for (let e in t) {
        let n = t[e];
        if (n === void 0) {
          Nt(`Texture.setValues(): parameter '${e}' has value of undefined.`);
          continue;
        }
        let s = this[e];
        if (s === void 0) {
          Nt(`Texture.setValues(): property '${e}' does not exist.`);
          continue;
        }
        (s && n && s.isVector2 && n.isVector2) ||
        (s && n && s.isVector3 && n.isVector3) ||
        (s && n && s.isMatrix3 && n.isMatrix3)
          ? s.copy(n)
          : (this[e] = n);
      }
    }
    toJSON(t) {
      let e = t === void 0 || typeof t == "string";
      if (!e && t.textures[this.uuid] !== void 0) return t.textures[this.uuid];
      let n = {
        metadata: {
          version: 4.7,
          type: "Texture",
          generator: "Texture.toJSON",
        },
        uuid: this.uuid,
        name: this.name,
        image: this.source.toJSON(t).uuid,
        mapping: this.mapping,
        channel: this.channel,
        repeat: [this.repeat.x, this.repeat.y],
        offset: [this.offset.x, this.offset.y],
        center: [this.center.x, this.center.y],
        rotation: this.rotation,
        wrap: [this.wrapS, this.wrapT],
        format: this.format,
        internalFormat: this.internalFormat,
        type: this.type,
        normalized: this.normalized,
        colorSpace: this.colorSpace,
        minFilter: this.minFilter,
        magFilter: this.magFilter,
        anisotropy: this.anisotropy,
        flipY: this.flipY,
        generateMipmaps: this.generateMipmaps,
        premultiplyAlpha: this.premultiplyAlpha,
        unpackAlignment: this.unpackAlignment,
      };
      return (
        Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        e || (t.textures[this.uuid] = n),
        n
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(t) {
      if (this.mapping !== Ql) return t;
      if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
        switch (this.wrapS) {
          case Zr:
            t.x = t.x - Math.floor(t.x);
            break;
          case gn:
            t.x = t.x < 0 ? 0 : 1;
            break;
          case Jr:
            Math.abs(Math.floor(t.x) % 2) === 1
              ? (t.x = Math.ceil(t.x) - t.x)
              : (t.x = t.x - Math.floor(t.x));
            break;
        }
      if (t.y < 0 || t.y > 1)
        switch (this.wrapT) {
          case Zr:
            t.y = t.y - Math.floor(t.y);
            break;
          case gn:
            t.y = t.y < 0 ? 0 : 1;
            break;
          case Jr:
            Math.abs(Math.floor(t.y) % 2) === 1
              ? (t.y = Math.ceil(t.y) - t.y)
              : (t.y = t.y - Math.floor(t.y));
            break;
        }
      return (this.flipY && (t.y = 1 - t.y), t);
    }
    set needsUpdate(t) {
      t === !0 && (this.version++, (this.source.needsUpdate = !0));
    }
    set needsPMREMUpdate(t) {
      t === !0 && this.pmremVersion++;
    }
  };
De.DEFAULT_IMAGE = null;
De.DEFAULT_MAPPING = Ql;
De.DEFAULT_ANISOTROPY = 1;
var gc = class gc {
  constructor(t = 0, e = 0, n = 0, s = 1) {
    ((this.x = t), (this.y = e), (this.z = n), (this.w = s));
  }
  get width() {
    return this.z;
  }
  set width(t) {
    this.z = t;
  }
  get height() {
    return this.w;
  }
  set height(t) {
    this.w = t;
  }
  set(t, e, n, s) {
    return ((this.x = t), (this.y = e), (this.z = n), (this.w = s), this);
  }
  setScalar(t) {
    return ((this.x = t), (this.y = t), (this.z = t), (this.w = t), this);
  }
  setX(t) {
    return ((this.x = t), this);
  }
  setY(t) {
    return ((this.y = t), this);
  }
  setZ(t) {
    return ((this.z = t), this);
  }
  setW(t) {
    return ((this.w = t), this);
  }
  setComponent(t, e) {
    switch (t) {
      case 0:
        this.x = e;
        break;
      case 1:
        this.y = e;
        break;
      case 2:
        this.z = e;
        break;
      case 3:
        this.w = e;
        break;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + t);
    }
    return this;
  }
  getComponent(t) {
    switch (t) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("THREE.Vector4: index is out of range: " + t);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(t) {
    return (
      (this.x = t.x),
      (this.y = t.y),
      (this.z = t.z),
      (this.w = t.w !== void 0 ? t.w : 1),
      this
    );
  }
  add(t) {
    return (
      (this.x += t.x),
      (this.y += t.y),
      (this.z += t.z),
      (this.w += t.w),
      this
    );
  }
  addScalar(t) {
    return ((this.x += t), (this.y += t), (this.z += t), (this.w += t), this);
  }
  addVectors(t, e) {
    return (
      (this.x = t.x + e.x),
      (this.y = t.y + e.y),
      (this.z = t.z + e.z),
      (this.w = t.w + e.w),
      this
    );
  }
  addScaledVector(t, e) {
    return (
      (this.x += t.x * e),
      (this.y += t.y * e),
      (this.z += t.z * e),
      (this.w += t.w * e),
      this
    );
  }
  sub(t) {
    return (
      (this.x -= t.x),
      (this.y -= t.y),
      (this.z -= t.z),
      (this.w -= t.w),
      this
    );
  }
  subScalar(t) {
    return ((this.x -= t), (this.y -= t), (this.z -= t), (this.w -= t), this);
  }
  subVectors(t, e) {
    return (
      (this.x = t.x - e.x),
      (this.y = t.y - e.y),
      (this.z = t.z - e.z),
      (this.w = t.w - e.w),
      this
    );
  }
  multiply(t) {
    return (
      (this.x *= t.x),
      (this.y *= t.y),
      (this.z *= t.z),
      (this.w *= t.w),
      this
    );
  }
  multiplyScalar(t) {
    return ((this.x *= t), (this.y *= t), (this.z *= t), (this.w *= t), this);
  }
  applyMatrix4(t) {
    let e = this.x,
      n = this.y,
      s = this.z,
      r = this.w,
      a = t.elements;
    return (
      (this.x = a[0] * e + a[4] * n + a[8] * s + a[12] * r),
      (this.y = a[1] * e + a[5] * n + a[9] * s + a[13] * r),
      (this.z = a[2] * e + a[6] * n + a[10] * s + a[14] * r),
      (this.w = a[3] * e + a[7] * n + a[11] * s + a[15] * r),
      this
    );
  }
  divide(t) {
    return (
      (this.x /= t.x),
      (this.y /= t.y),
      (this.z /= t.z),
      (this.w /= t.w),
      this
    );
  }
  divideScalar(t) {
    return this.multiplyScalar(1 / t);
  }
  setAxisAngleFromQuaternion(t) {
    this.w = 2 * Math.acos(t.w);
    let e = Math.sqrt(1 - t.w * t.w);
    return (
      e < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = t.x / e), (this.y = t.y / e), (this.z = t.z / e)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(t) {
    let e,
      n,
      s,
      r,
      c = t.elements,
      l = c[0],
      h = c[4],
      d = c[8],
      u = c[1],
      f = c[5],
      g = c[9],
      y = c[2],
      m = c[6],
      p = c[10];
    if (
      Math.abs(h - u) < 0.01 &&
      Math.abs(d - y) < 0.01 &&
      Math.abs(g - m) < 0.01
    ) {
      if (
        Math.abs(h + u) < 0.1 &&
        Math.abs(d + y) < 0.1 &&
        Math.abs(g + m) < 0.1 &&
        Math.abs(l + f + p - 3) < 0.1
      )
        return (this.set(1, 0, 0, 0), this);
      e = Math.PI;
      let w = (l + 1) / 2,
        v = (f + 1) / 2,
        A = (p + 1) / 2,
        T = (h + u) / 4,
        R = (d + y) / 4,
        _ = (g + m) / 4;
      return (
        w > v && w > A
          ? w < 0.01
            ? ((n = 0), (s = 0.707106781), (r = 0.707106781))
            : ((n = Math.sqrt(w)), (s = T / n), (r = R / n))
          : v > A
            ? v < 0.01
              ? ((n = 0.707106781), (s = 0), (r = 0.707106781))
              : ((s = Math.sqrt(v)), (n = T / s), (r = _ / s))
            : A < 0.01
              ? ((n = 0.707106781), (s = 0.707106781), (r = 0))
              : ((r = Math.sqrt(A)), (n = R / r), (s = _ / r)),
        this.set(n, s, r, e),
        this
      );
    }
    let b = Math.sqrt(
      (m - g) * (m - g) + (d - y) * (d - y) + (u - h) * (u - h),
    );
    return (
      Math.abs(b) < 0.001 && (b = 1),
      (this.x = (m - g) / b),
      (this.y = (d - y) / b),
      (this.z = (u - h) / b),
      (this.w = Math.acos((l + f + p - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(t) {
    let e = t.elements;
    return (
      (this.x = e[12]),
      (this.y = e[13]),
      (this.z = e[14]),
      (this.w = e[15]),
      this
    );
  }
  min(t) {
    return (
      (this.x = Math.min(this.x, t.x)),
      (this.y = Math.min(this.y, t.y)),
      (this.z = Math.min(this.z, t.z)),
      (this.w = Math.min(this.w, t.w)),
      this
    );
  }
  max(t) {
    return (
      (this.x = Math.max(this.x, t.x)),
      (this.y = Math.max(this.y, t.y)),
      (this.z = Math.max(this.z, t.z)),
      (this.w = Math.max(this.w, t.w)),
      this
    );
  }
  clamp(t, e) {
    return (
      (this.x = te(this.x, t.x, e.x)),
      (this.y = te(this.y, t.y, e.y)),
      (this.z = te(this.z, t.z, e.z)),
      (this.w = te(this.w, t.w, e.w)),
      this
    );
  }
  clampScalar(t, e) {
    return (
      (this.x = te(this.x, t, e)),
      (this.y = te(this.y, t, e)),
      (this.z = te(this.z, t, e)),
      (this.w = te(this.w, t, e)),
      this
    );
  }
  clampLength(t, e) {
    let n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(te(n, t, e));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(t) {
    return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(t) {
    return this.normalize().multiplyScalar(t);
  }
  lerp(t, e) {
    return (
      (this.x += (t.x - this.x) * e),
      (this.y += (t.y - this.y) * e),
      (this.z += (t.z - this.z) * e),
      (this.w += (t.w - this.w) * e),
      this
    );
  }
  lerpVectors(t, e, n) {
    return (
      (this.x = t.x + (e.x - t.x) * n),
      (this.y = t.y + (e.y - t.y) * n),
      (this.z = t.z + (e.z - t.z) * n),
      (this.w = t.w + (e.w - t.w) * n),
      this
    );
  }
  equals(t) {
    return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
  }
  fromArray(t, e = 0) {
    return (
      (this.x = t[e]),
      (this.y = t[e + 1]),
      (this.z = t[e + 2]),
      (this.w = t[e + 3]),
      this
    );
  }
  toArray(t = [], e = 0) {
    return (
      (t[e] = this.x),
      (t[e + 1] = this.y),
      (t[e + 2] = this.z),
      (t[e + 3] = this.w),
      t
    );
  }
  fromBufferAttribute(t, e) {
    return (
      (this.x = t.getX(e)),
      (this.y = t.getY(e)),
      (this.z = t.getZ(e)),
      (this.w = t.getW(e)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z, yield this.w);
  }
};
gc.prototype.isVector4 = !0;
var _e = gc,
  Qr = class extends vn {
    constructor(t = 1, e = 1, n = {}) {
      (super(),
        (n = Object.assign(
          {
            generateMipmaps: !1,
            internalFormat: null,
            minFilter: we,
            depthBuffer: !0,
            stencilBuffer: !1,
            resolveDepthBuffer: !0,
            resolveStencilBuffer: !0,
            depthTexture: null,
            samples: 0,
            count: 1,
            depth: 1,
            multiview: !1,
            useArrayDepthTexture: !1,
          },
          n,
        )),
        (this.isRenderTarget = !0),
        (this.width = t),
        (this.height = e),
        (this.depth = n.depth),
        (this.scissor = new _e(0, 0, t, e)),
        (this.scissorTest = !1),
        (this.viewport = new _e(0, 0, t, e)),
        (this.textures = []));
      let s = { width: t, height: e, depth: n.depth },
        r = new De(s),
        a = n.count;
      for (let o = 0; o < a; o++)
        ((this.textures[o] = r.clone()),
          (this.textures[o].isRenderTargetTexture = !0),
          (this.textures[o].renderTarget = this));
      (this._setTextureOptions(n),
        (this.depthBuffer = n.depthBuffer),
        (this.stencilBuffer = n.stencilBuffer),
        (this.resolveDepthBuffer = n.resolveDepthBuffer),
        (this.resolveStencilBuffer = n.resolveStencilBuffer),
        (this._depthTexture = null),
        (this.depthTexture = n.depthTexture),
        (this.samples = n.samples),
        (this.multiview = n.multiview),
        (this.useArrayDepthTexture = n.useArrayDepthTexture));
    }
    _setTextureOptions(t = {}) {
      let e = {
        minFilter: we,
        generateMipmaps: !1,
        flipY: !1,
        internalFormat: null,
      };
      (t.mapping !== void 0 && (e.mapping = t.mapping),
        t.wrapS !== void 0 && (e.wrapS = t.wrapS),
        t.wrapT !== void 0 && (e.wrapT = t.wrapT),
        t.wrapR !== void 0 && (e.wrapR = t.wrapR),
        t.magFilter !== void 0 && (e.magFilter = t.magFilter),
        t.minFilter !== void 0 && (e.minFilter = t.minFilter),
        t.format !== void 0 && (e.format = t.format),
        t.type !== void 0 && (e.type = t.type),
        t.anisotropy !== void 0 && (e.anisotropy = t.anisotropy),
        t.colorSpace !== void 0 && (e.colorSpace = t.colorSpace),
        t.flipY !== void 0 && (e.flipY = t.flipY),
        t.generateMipmaps !== void 0 && (e.generateMipmaps = t.generateMipmaps),
        t.internalFormat !== void 0 && (e.internalFormat = t.internalFormat));
      for (let n = 0; n < this.textures.length; n++)
        this.textures[n].setValues(e);
    }
    get texture() {
      return this.textures[0];
    }
    set texture(t) {
      this.textures[0] = t;
    }
    set depthTexture(t) {
      (this._depthTexture !== null && (this._depthTexture.renderTarget = null),
        t !== null && (t.renderTarget = this),
        (this._depthTexture = t));
    }
    get depthTexture() {
      return this._depthTexture;
    }
    setSize(t, e, n = 1) {
      if (this.width !== t || this.height !== e || this.depth !== n) {
        ((this.width = t), (this.height = e), (this.depth = n));
        for (let s = 0, r = this.textures.length; s < r; s++)
          ((this.textures[s].image.width = t),
            (this.textures[s].image.height = e),
            (this.textures[s].image.depth = n),
            this.textures[s].isData3DTexture !== !0 &&
              (this.textures[s].isArrayTexture =
                this.textures[s].image.depth > 1));
        this.dispose();
      }
      (this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e));
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      ((this.width = t.width),
        (this.height = t.height),
        (this.depth = t.depth),
        this.scissor.copy(t.scissor),
        (this.scissorTest = t.scissorTest),
        this.viewport.copy(t.viewport),
        (this.textures.length = 0));
      for (let e = 0, n = t.textures.length; e < n; e++) {
        ((this.textures[e] = t.textures[e].clone()),
          (this.textures[e].isRenderTargetTexture = !0),
          (this.textures[e].renderTarget = this));
        let s = Object.assign({}, t.textures[e].image);
        this.textures[e].source = new Yi(s);
      }
      return (
        (this.depthBuffer = t.depthBuffer),
        (this.stencilBuffer = t.stencilBuffer),
        (this.resolveDepthBuffer = t.resolveDepthBuffer),
        (this.resolveStencilBuffer = t.resolveStencilBuffer),
        t.depthTexture !== null && (this.depthTexture = t.depthTexture.clone()),
        (this.samples = t.samples),
        (this.multiview = t.multiview),
        (this.useArrayDepthTexture = t.useArrayDepthTexture),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  },
  Ye = class extends Qr {
    constructor(t = 1, e = 1, n = {}) {
      (super(t, e, n), (this.isWebGLRenderTarget = !0));
    }
  },
  Ss = class extends De {
    constructor(t = null, e = 1, n = 1, s = 1) {
      (super(null),
        (this.isDataArrayTexture = !0),
        (this.image = { data: t, width: e, height: n, depth: s }),
        (this.magFilter = Re),
        (this.minFilter = Re),
        (this.wrapR = gn),
        (this.generateMipmaps = !1),
        (this.flipY = !1),
        (this.unpackAlignment = 1),
        (this.layerUpdates = new Set()));
    }
    addLayerUpdate(t) {
      this.layerUpdates.add(t);
    }
    clearLayerUpdates() {
      this.layerUpdates.clear();
    }
  };
var jr = class extends De {
  constructor(t = null, e = 1, n = 1, s = 1) {
    (super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: t, width: e, height: n, depth: s }),
      (this.magFilter = Re),
      (this.minFilter = Re),
      (this.wrapR = gn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
};
var Ca = class Ca {
  constructor(t, e, n, s, r, a, o, c, l, h, d, u, f, g, y, m) {
    ((this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      t !== void 0 && this.set(t, e, n, s, r, a, o, c, l, h, d, u, f, g, y, m));
  }
  set(t, e, n, s, r, a, o, c, l, h, d, u, f, g, y, m) {
    let p = this.elements;
    return (
      (p[0] = t),
      (p[4] = e),
      (p[8] = n),
      (p[12] = s),
      (p[1] = r),
      (p[5] = a),
      (p[9] = o),
      (p[13] = c),
      (p[2] = l),
      (p[6] = h),
      (p[10] = d),
      (p[14] = u),
      (p[3] = f),
      (p[7] = g),
      (p[11] = y),
      (p[15] = m),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  clone() {
    return new Ca().fromArray(this.elements);
  }
  copy(t) {
    let e = this.elements,
      n = t.elements;
    return (
      (e[0] = n[0]),
      (e[1] = n[1]),
      (e[2] = n[2]),
      (e[3] = n[3]),
      (e[4] = n[4]),
      (e[5] = n[5]),
      (e[6] = n[6]),
      (e[7] = n[7]),
      (e[8] = n[8]),
      (e[9] = n[9]),
      (e[10] = n[10]),
      (e[11] = n[11]),
      (e[12] = n[12]),
      (e[13] = n[13]),
      (e[14] = n[14]),
      (e[15] = n[15]),
      this
    );
  }
  copyPosition(t) {
    let e = this.elements,
      n = t.elements;
    return ((e[12] = n[12]), (e[13] = n[13]), (e[14] = n[14]), this);
  }
  setFromMatrix3(t) {
    let e = t.elements;
    return (
      this.set(
        e[0],
        e[3],
        e[6],
        0,
        e[1],
        e[4],
        e[7],
        0,
        e[2],
        e[5],
        e[8],
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractBasis(t, e, n) {
    return this.determinantAffine() === 0
      ? (t.set(1, 0, 0), e.set(0, 1, 0), n.set(0, 0, 1), this)
      : (t.setFromMatrixColumn(this, 0),
        e.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this);
  }
  makeBasis(t, e, n) {
    return (
      this.set(
        t.x,
        e.x,
        n.x,
        0,
        t.y,
        e.y,
        n.y,
        0,
        t.z,
        e.z,
        n.z,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractRotation(t) {
    if (t.determinantAffine() === 0) return this.identity();
    let e = this.elements,
      n = t.elements,
      s = 1 / Pi.setFromMatrixColumn(t, 0).length(),
      r = 1 / Pi.setFromMatrixColumn(t, 1).length(),
      a = 1 / Pi.setFromMatrixColumn(t, 2).length();
    return (
      (e[0] = n[0] * s),
      (e[1] = n[1] * s),
      (e[2] = n[2] * s),
      (e[3] = 0),
      (e[4] = n[4] * r),
      (e[5] = n[5] * r),
      (e[6] = n[6] * r),
      (e[7] = 0),
      (e[8] = n[8] * a),
      (e[9] = n[9] * a),
      (e[10] = n[10] * a),
      (e[11] = 0),
      (e[12] = 0),
      (e[13] = 0),
      (e[14] = 0),
      (e[15] = 1),
      this
    );
  }
  makeRotationFromEuler(t) {
    let e = this.elements,
      n = t.x,
      s = t.y,
      r = t.z,
      a = Math.cos(n),
      o = Math.sin(n),
      c = Math.cos(s),
      l = Math.sin(s),
      h = Math.cos(r),
      d = Math.sin(r);
    if (t.order === "XYZ") {
      let u = a * h,
        f = a * d,
        g = o * h,
        y = o * d;
      ((e[0] = c * h),
        (e[4] = -c * d),
        (e[8] = l),
        (e[1] = f + g * l),
        (e[5] = u - y * l),
        (e[9] = -o * c),
        (e[2] = y - u * l),
        (e[6] = g + f * l),
        (e[10] = a * c));
    } else if (t.order === "YXZ") {
      let u = c * h,
        f = c * d,
        g = l * h,
        y = l * d;
      ((e[0] = u + y * o),
        (e[4] = g * o - f),
        (e[8] = a * l),
        (e[1] = a * d),
        (e[5] = a * h),
        (e[9] = -o),
        (e[2] = f * o - g),
        (e[6] = y + u * o),
        (e[10] = a * c));
    } else if (t.order === "ZXY") {
      let u = c * h,
        f = c * d,
        g = l * h,
        y = l * d;
      ((e[0] = u - y * o),
        (e[4] = -a * d),
        (e[8] = g + f * o),
        (e[1] = f + g * o),
        (e[5] = a * h),
        (e[9] = y - u * o),
        (e[2] = -a * l),
        (e[6] = o),
        (e[10] = a * c));
    } else if (t.order === "ZYX") {
      let u = a * h,
        f = a * d,
        g = o * h,
        y = o * d;
      ((e[0] = c * h),
        (e[4] = g * l - f),
        (e[8] = u * l + y),
        (e[1] = c * d),
        (e[5] = y * l + u),
        (e[9] = f * l - g),
        (e[2] = -l),
        (e[6] = o * c),
        (e[10] = a * c));
    } else if (t.order === "YZX") {
      let u = a * c,
        f = a * l,
        g = o * c,
        y = o * l;
      ((e[0] = c * h),
        (e[4] = y - u * d),
        (e[8] = g * d + f),
        (e[1] = d),
        (e[5] = a * h),
        (e[9] = -o * h),
        (e[2] = -l * h),
        (e[6] = f * d + g),
        (e[10] = u - y * d));
    } else if (t.order === "XZY") {
      let u = a * c,
        f = a * l,
        g = o * c,
        y = o * l;
      ((e[0] = c * h),
        (e[4] = -d),
        (e[8] = l * h),
        (e[1] = u * d + y),
        (e[5] = a * h),
        (e[9] = f * d - g),
        (e[2] = g * d - f),
        (e[6] = o * h),
        (e[10] = y * d + u));
    }
    return (
      (e[3] = 0),
      (e[7] = 0),
      (e[11] = 0),
      (e[12] = 0),
      (e[13] = 0),
      (e[14] = 0),
      (e[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(t) {
    return this.compose(Pd, t, Ld);
  }
  lookAt(t, e, n) {
    let s = this.elements;
    return (
      Xe.subVectors(t, e),
      Xe.lengthSq() === 0 && (Xe.z = 1),
      Xe.normalize(),
      qn.crossVectors(n, Xe),
      qn.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (Xe.x += 1e-4) : (Xe.z += 1e-4),
        Xe.normalize(),
        qn.crossVectors(n, Xe)),
      qn.normalize(),
      or.crossVectors(Xe, qn),
      (s[0] = qn.x),
      (s[4] = or.x),
      (s[8] = Xe.x),
      (s[1] = qn.y),
      (s[5] = or.y),
      (s[9] = Xe.y),
      (s[2] = qn.z),
      (s[6] = or.z),
      (s[10] = Xe.z),
      this
    );
  }
  multiply(t) {
    return this.multiplyMatrices(this, t);
  }
  premultiply(t) {
    return this.multiplyMatrices(t, this);
  }
  multiplyMatrices(t, e) {
    let n = t.elements,
      s = e.elements,
      r = this.elements,
      a = n[0],
      o = n[4],
      c = n[8],
      l = n[12],
      h = n[1],
      d = n[5],
      u = n[9],
      f = n[13],
      g = n[2],
      y = n[6],
      m = n[10],
      p = n[14],
      b = n[3],
      w = n[7],
      v = n[11],
      A = n[15],
      T = s[0],
      R = s[4],
      _ = s[8],
      S = s[12],
      C = s[1],
      I = s[5],
      U = s[9],
      Z = s[13],
      k = s[2],
      F = s[6],
      X = s[10],
      V = s[14],
      D = s[3],
      B = s[7],
      q = s[11],
      K = s[15];
    return (
      (r[0] = a * T + o * C + c * k + l * D),
      (r[4] = a * R + o * I + c * F + l * B),
      (r[8] = a * _ + o * U + c * X + l * q),
      (r[12] = a * S + o * Z + c * V + l * K),
      (r[1] = h * T + d * C + u * k + f * D),
      (r[5] = h * R + d * I + u * F + f * B),
      (r[9] = h * _ + d * U + u * X + f * q),
      (r[13] = h * S + d * Z + u * V + f * K),
      (r[2] = g * T + y * C + m * k + p * D),
      (r[6] = g * R + y * I + m * F + p * B),
      (r[10] = g * _ + y * U + m * X + p * q),
      (r[14] = g * S + y * Z + m * V + p * K),
      (r[3] = b * T + w * C + v * k + A * D),
      (r[7] = b * R + w * I + v * F + A * B),
      (r[11] = b * _ + w * U + v * X + A * q),
      (r[15] = b * S + w * Z + v * V + A * K),
      this
    );
  }
  multiplyScalar(t) {
    let e = this.elements;
    return (
      (e[0] *= t),
      (e[4] *= t),
      (e[8] *= t),
      (e[12] *= t),
      (e[1] *= t),
      (e[5] *= t),
      (e[9] *= t),
      (e[13] *= t),
      (e[2] *= t),
      (e[6] *= t),
      (e[10] *= t),
      (e[14] *= t),
      (e[3] *= t),
      (e[7] *= t),
      (e[11] *= t),
      (e[15] *= t),
      this
    );
  }
  determinant() {
    let t = this.elements,
      e = t[0],
      n = t[4],
      s = t[8],
      r = t[12],
      a = t[1],
      o = t[5],
      c = t[9],
      l = t[13],
      h = t[2],
      d = t[6],
      u = t[10],
      f = t[14],
      g = t[3],
      y = t[7],
      m = t[11],
      p = t[15],
      b = c * f - l * u,
      w = o * f - l * d,
      v = o * u - c * d,
      A = a * f - l * h,
      T = a * u - c * h,
      R = a * d - o * h;
    return (
      e * (y * b - m * w + p * v) -
      n * (g * b - m * A + p * T) +
      s * (g * w - y * A + p * R) -
      r * (g * v - y * T + m * R)
    );
  }
  determinantAffine() {
    let t = this.elements,
      e = t[0],
      n = t[4],
      s = t[8],
      r = t[1],
      a = t[5],
      o = t[9],
      c = t[2],
      l = t[6],
      h = t[10];
    return e * (a * h - o * l) - n * (r * h - o * c) + s * (r * l - a * c);
  }
  transpose() {
    let t = this.elements,
      e;
    return (
      (e = t[1]),
      (t[1] = t[4]),
      (t[4] = e),
      (e = t[2]),
      (t[2] = t[8]),
      (t[8] = e),
      (e = t[6]),
      (t[6] = t[9]),
      (t[9] = e),
      (e = t[3]),
      (t[3] = t[12]),
      (t[12] = e),
      (e = t[7]),
      (t[7] = t[13]),
      (t[13] = e),
      (e = t[11]),
      (t[11] = t[14]),
      (t[14] = e),
      this
    );
  }
  setPosition(t, e, n) {
    let s = this.elements;
    return (
      t.isVector3
        ? ((s[12] = t.x), (s[13] = t.y), (s[14] = t.z))
        : ((s[12] = t), (s[13] = e), (s[14] = n)),
      this
    );
  }
  invert() {
    let t = this.elements,
      e = t[0],
      n = t[1],
      s = t[2],
      r = t[3],
      a = t[4],
      o = t[5],
      c = t[6],
      l = t[7],
      h = t[8],
      d = t[9],
      u = t[10],
      f = t[11],
      g = t[12],
      y = t[13],
      m = t[14],
      p = t[15],
      b = e * o - n * a,
      w = e * c - s * a,
      v = e * l - r * a,
      A = n * c - s * o,
      T = n * l - r * o,
      R = s * l - r * c,
      _ = h * y - d * g,
      S = h * m - u * g,
      C = h * p - f * g,
      I = d * m - u * y,
      U = d * p - f * y,
      Z = u * p - f * m,
      k = b * Z - w * U + v * I + A * C - T * S + R * _;
    if (k === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    let F = 1 / k;
    return (
      (t[0] = (o * Z - c * U + l * I) * F),
      (t[1] = (s * U - n * Z - r * I) * F),
      (t[2] = (y * R - m * T + p * A) * F),
      (t[3] = (u * T - d * R - f * A) * F),
      (t[4] = (c * C - a * Z - l * S) * F),
      (t[5] = (e * Z - s * C + r * S) * F),
      (t[6] = (m * v - g * R - p * w) * F),
      (t[7] = (h * R - u * v + f * w) * F),
      (t[8] = (a * U - o * C + l * _) * F),
      (t[9] = (n * C - e * U - r * _) * F),
      (t[10] = (g * T - y * v + p * b) * F),
      (t[11] = (d * v - h * T - f * b) * F),
      (t[12] = (o * S - a * I - c * _) * F),
      (t[13] = (e * I - n * S + s * _) * F),
      (t[14] = (y * w - g * A - m * b) * F),
      (t[15] = (h * A - d * w + u * b) * F),
      this
    );
  }
  scale(t) {
    let e = this.elements,
      n = t.x,
      s = t.y,
      r = t.z;
    return (
      (e[0] *= n),
      (e[4] *= s),
      (e[8] *= r),
      (e[1] *= n),
      (e[5] *= s),
      (e[9] *= r),
      (e[2] *= n),
      (e[6] *= s),
      (e[10] *= r),
      (e[3] *= n),
      (e[7] *= s),
      (e[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    let t = this.elements,
      e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
      n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
      s = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
    return Math.sqrt(Math.max(e, n, s));
  }
  makeTranslation(t, e, n) {
    return (
      t.isVector3
        ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(t) {
    let e = Math.cos(t),
      n = Math.sin(t);
    return (this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this);
  }
  makeRotationY(t) {
    let e = Math.cos(t),
      n = Math.sin(t);
    return (this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this);
  }
  makeRotationZ(t) {
    let e = Math.cos(t),
      n = Math.sin(t);
    return (this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  makeRotationAxis(t, e) {
    let n = Math.cos(e),
      s = Math.sin(e),
      r = 1 - n,
      a = t.x,
      o = t.y,
      c = t.z,
      l = r * a,
      h = r * o;
    return (
      this.set(
        l * a + n,
        l * o - s * c,
        l * c + s * o,
        0,
        l * o + s * c,
        h * o + n,
        h * c - s * a,
        0,
        l * c - s * o,
        h * c + s * a,
        r * c * c + n,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  makeScale(t, e, n) {
    return (this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this);
  }
  makeShear(t, e, n, s, r, a) {
    return (this.set(1, n, r, 0, t, 1, a, 0, e, s, 1, 0, 0, 0, 0, 1), this);
  }
  compose(t, e, n) {
    let s = this.elements,
      r = e._x,
      a = e._y,
      o = e._z,
      c = e._w,
      l = r + r,
      h = a + a,
      d = o + o,
      u = r * l,
      f = r * h,
      g = r * d,
      y = a * h,
      m = a * d,
      p = o * d,
      b = c * l,
      w = c * h,
      v = c * d,
      A = n.x,
      T = n.y,
      R = n.z;
    return (
      (s[0] = (1 - (y + p)) * A),
      (s[1] = (f + v) * A),
      (s[2] = (g - w) * A),
      (s[3] = 0),
      (s[4] = (f - v) * T),
      (s[5] = (1 - (u + p)) * T),
      (s[6] = (m + b) * T),
      (s[7] = 0),
      (s[8] = (g + w) * R),
      (s[9] = (m - b) * R),
      (s[10] = (1 - (u + y)) * R),
      (s[11] = 0),
      (s[12] = t.x),
      (s[13] = t.y),
      (s[14] = t.z),
      (s[15] = 1),
      this
    );
  }
  decompose(t, e, n) {
    let s = this.elements;
    ((t.x = s[12]), (t.y = s[13]), (t.z = s[14]));
    let r = this.determinantAffine();
    if (r === 0) return (n.set(1, 1, 1), e.identity(), this);
    let a = Pi.set(s[0], s[1], s[2]).length(),
      o = Pi.set(s[4], s[5], s[6]).length(),
      c = Pi.set(s[8], s[9], s[10]).length();
    (r < 0 && (a = -a), en.copy(this));
    let l = 1 / a,
      h = 1 / o,
      d = 1 / c;
    return (
      (en.elements[0] *= l),
      (en.elements[1] *= l),
      (en.elements[2] *= l),
      (en.elements[4] *= h),
      (en.elements[5] *= h),
      (en.elements[6] *= h),
      (en.elements[8] *= d),
      (en.elements[9] *= d),
      (en.elements[10] *= d),
      e.setFromRotationMatrix(en),
      (n.x = a),
      (n.y = o),
      (n.z = c),
      this
    );
  }
  makePerspective(t, e, n, s, r, a, o = rn, c = !1) {
    let l = this.elements,
      h = (2 * r) / (e - t),
      d = (2 * r) / (n - s),
      u = (e + t) / (e - t),
      f = (n + s) / (n - s),
      g,
      y;
    if (c) ((g = r / (a - r)), (y = (a * r) / (a - r)));
    else if (o === rn) ((g = -(a + r) / (a - r)), (y = (-2 * a * r) / (a - r)));
    else if (o === Wi) ((g = -a / (a - r)), (y = (-a * r) / (a - r)));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o,
      );
    return (
      (l[0] = h),
      (l[4] = 0),
      (l[8] = u),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = d),
      (l[9] = f),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = g),
      (l[14] = y),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(t, e, n, s, r, a, o = rn, c = !1) {
    let l = this.elements,
      h = 2 / (e - t),
      d = 2 / (n - s),
      u = -(e + t) / (e - t),
      f = -(n + s) / (n - s),
      g,
      y;
    if (c) ((g = 1 / (a - r)), (y = a / (a - r)));
    else if (o === rn) ((g = -2 / (a - r)), (y = -(a + r) / (a - r)));
    else if (o === Wi) ((g = -1 / (a - r)), (y = -r / (a - r)));
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o,
      );
    return (
      (l[0] = h),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = u),
      (l[1] = 0),
      (l[5] = d),
      (l[9] = 0),
      (l[13] = f),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = g),
      (l[14] = y),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(t) {
    let e = this.elements,
      n = t.elements;
    for (let s = 0; s < 16; s++) if (e[s] !== n[s]) return !1;
    return !0;
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = t[n + e];
    return this;
  }
  toArray(t = [], e = 0) {
    let n = this.elements;
    return (
      (t[e] = n[0]),
      (t[e + 1] = n[1]),
      (t[e + 2] = n[2]),
      (t[e + 3] = n[3]),
      (t[e + 4] = n[4]),
      (t[e + 5] = n[5]),
      (t[e + 6] = n[6]),
      (t[e + 7] = n[7]),
      (t[e + 8] = n[8]),
      (t[e + 9] = n[9]),
      (t[e + 10] = n[10]),
      (t[e + 11] = n[11]),
      (t[e + 12] = n[12]),
      (t[e + 13] = n[13]),
      (t[e + 14] = n[14]),
      (t[e + 15] = n[15]),
      t
    );
  }
};
Ca.prototype.isMatrix4 = !0;
var he = Ca,
  Pi = new L(),
  en = new he(),
  Pd = new L(0, 0, 0),
  Ld = new L(1, 1, 1),
  qn = new L(),
  or = new L(),
  Xe = new L(),
  rh = new he(),
  ah = new Mn(),
  On = class i {
    constructor(t = 0, e = 0, n = 0, s = i.DEFAULT_ORDER) {
      ((this.isEuler = !0),
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._order = s));
    }
    get x() {
      return this._x;
    }
    set x(t) {
      ((this._x = t), this._onChangeCallback());
    }
    get y() {
      return this._y;
    }
    set y(t) {
      ((this._y = t), this._onChangeCallback());
    }
    get z() {
      return this._z;
    }
    set z(t) {
      ((this._z = t), this._onChangeCallback());
    }
    get order() {
      return this._order;
    }
    set order(t) {
      ((this._order = t), this._onChangeCallback());
    }
    set(t, e, n, s = this._order) {
      return (
        (this._x = t),
        (this._y = e),
        (this._z = n),
        (this._order = s),
        this._onChangeCallback(),
        this
      );
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(t) {
      return (
        (this._x = t._x),
        (this._y = t._y),
        (this._z = t._z),
        (this._order = t._order),
        this._onChangeCallback(),
        this
      );
    }
    setFromRotationMatrix(t, e = this._order, n = !0) {
      let s = t.elements,
        r = s[0],
        a = s[4],
        o = s[8],
        c = s[1],
        l = s[5],
        h = s[9],
        d = s[2],
        u = s[6],
        f = s[10];
      switch (e) {
        case "XYZ":
          ((this._y = Math.asin(te(o, -1, 1))),
            Math.abs(o) < 0.9999999
              ? ((this._x = Math.atan2(-h, f)), (this._z = Math.atan2(-a, r)))
              : ((this._x = Math.atan2(u, l)), (this._z = 0)));
          break;
        case "YXZ":
          ((this._x = Math.asin(-te(h, -1, 1))),
            Math.abs(h) < 0.9999999
              ? ((this._y = Math.atan2(o, f)), (this._z = Math.atan2(c, l)))
              : ((this._y = Math.atan2(-d, r)), (this._z = 0)));
          break;
        case "ZXY":
          ((this._x = Math.asin(te(u, -1, 1))),
            Math.abs(u) < 0.9999999
              ? ((this._y = Math.atan2(-d, f)), (this._z = Math.atan2(-a, l)))
              : ((this._y = 0), (this._z = Math.atan2(c, r))));
          break;
        case "ZYX":
          ((this._y = Math.asin(-te(d, -1, 1))),
            Math.abs(d) < 0.9999999
              ? ((this._x = Math.atan2(u, f)), (this._z = Math.atan2(c, r)))
              : ((this._x = 0), (this._z = Math.atan2(-a, l))));
          break;
        case "YZX":
          ((this._z = Math.asin(te(c, -1, 1))),
            Math.abs(c) < 0.9999999
              ? ((this._x = Math.atan2(-h, l)), (this._y = Math.atan2(-d, r)))
              : ((this._x = 0), (this._y = Math.atan2(o, f))));
          break;
        case "XZY":
          ((this._z = Math.asin(-te(a, -1, 1))),
            Math.abs(a) < 0.9999999
              ? ((this._x = Math.atan2(u, l)), (this._y = Math.atan2(o, r)))
              : ((this._x = Math.atan2(-h, f)), (this._y = 0)));
          break;
        default:
          Nt(
            "Euler: .setFromRotationMatrix() encountered an unknown order: " +
              e,
          );
      }
      return ((this._order = e), n === !0 && this._onChangeCallback(), this);
    }
    setFromQuaternion(t, e, n) {
      return (
        rh.makeRotationFromQuaternion(t),
        this.setFromRotationMatrix(rh, e, n)
      );
    }
    setFromVector3(t, e = this._order) {
      return this.set(t.x, t.y, t.z, e);
    }
    reorder(t) {
      return (ah.setFromEuler(this), this.setFromQuaternion(ah, t));
    }
    equals(t) {
      return (
        t._x === this._x &&
        t._y === this._y &&
        t._z === this._z &&
        t._order === this._order
      );
    }
    fromArray(t) {
      return (
        (this._x = t[0]),
        (this._y = t[1]),
        (this._z = t[2]),
        t[3] !== void 0 && (this._order = t[3]),
        this._onChangeCallback(),
        this
      );
    }
    toArray(t = [], e = 0) {
      return (
        (t[e] = this._x),
        (t[e + 1] = this._y),
        (t[e + 2] = this._z),
        (t[e + 3] = this._order),
        t
      );
    }
    _onChange(t) {
      return ((this._onChangeCallback = t), this);
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
      (yield this._x, yield this._y, yield this._z, yield this._order);
    }
  };
On.DEFAULT_ORDER = "XYZ";
var Zi = class {
    constructor() {
      this.mask = 1;
    }
    set(t) {
      this.mask = ((1 << t) | 0) >>> 0;
    }
    enable(t) {
      this.mask |= (1 << t) | 0;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(t) {
      this.mask ^= (1 << t) | 0;
    }
    disable(t) {
      this.mask &= ~((1 << t) | 0);
    }
    disableAll() {
      this.mask = 0;
    }
    test(t) {
      return (this.mask & t.mask) !== 0;
    }
    isEnabled(t) {
      return (this.mask & ((1 << t) | 0)) !== 0;
    }
  },
  Dd = 0,
  oh = new L(),
  Li = new Mn(),
  Rn = new he(),
  lr = new L(),
  hs = new L(),
  Nd = new L(),
  Ud = new Mn(),
  lh = new L(1, 0, 0),
  ch = new L(0, 1, 0),
  hh = new L(0, 0, 1),
  uh = { type: "added" },
  Fd = { type: "removed" },
  Di = { type: "childadded", child: null },
  Go = { type: "childremoved", child: null },
  Ie = class i extends vn {
    constructor() {
      (super(),
        (this.isObject3D = !0),
        Object.defineProperty(this, "id", { value: Dd++ }),
        (this.uuid = rs()),
        (this.name = ""),
        (this.type = "Object3D"),
        (this.parent = null),
        (this.children = []),
        (this.up = i.DEFAULT_UP.clone()));
      let t = new L(),
        e = new On(),
        n = new Mn(),
        s = new L(1, 1, 1);
      function r() {
        n.setFromEuler(e, !1);
      }
      function a() {
        e.setFromQuaternion(n, void 0, !1);
      }
      (e._onChange(r),
        n._onChange(a),
        Object.defineProperties(this, {
          position: { configurable: !0, enumerable: !0, value: t },
          rotation: { configurable: !0, enumerable: !0, value: e },
          quaternion: { configurable: !0, enumerable: !0, value: n },
          scale: { configurable: !0, enumerable: !0, value: s },
          modelViewMatrix: { value: new he() },
          normalMatrix: { value: new Ht() },
        }),
        (this.matrix = new he()),
        (this.matrixWorld = new he()),
        (this.matrixAutoUpdate = i.DEFAULT_MATRIX_AUTO_UPDATE),
        (this.matrixWorldAutoUpdate = i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
        (this.matrixWorldNeedsUpdate = !1),
        (this.layers = new Zi()),
        (this.visible = !0),
        (this.castShadow = !1),
        (this.receiveShadow = !1),
        (this.frustumCulled = !0),
        (this.renderOrder = 0),
        (this.animations = []),
        (this.customDepthMaterial = void 0),
        (this.customDistanceMaterial = void 0),
        (this.static = !1),
        (this.userData = {}),
        (this.pivot = null));
    }
    onBeforeShadow() {}
    onAfterShadow() {}
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(t) {
      (this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(t),
        this.matrix.decompose(this.position, this.quaternion, this.scale));
    }
    applyQuaternion(t) {
      return (this.quaternion.premultiply(t), this);
    }
    setRotationFromAxisAngle(t, e) {
      this.quaternion.setFromAxisAngle(t, e);
    }
    setRotationFromEuler(t) {
      this.quaternion.setFromEuler(t, !0);
    }
    setRotationFromMatrix(t) {
      this.quaternion.setFromRotationMatrix(t);
    }
    setRotationFromQuaternion(t) {
      this.quaternion.copy(t);
    }
    rotateOnAxis(t, e) {
      return (Li.setFromAxisAngle(t, e), this.quaternion.multiply(Li), this);
    }
    rotateOnWorldAxis(t, e) {
      return (Li.setFromAxisAngle(t, e), this.quaternion.premultiply(Li), this);
    }
    rotateX(t) {
      return this.rotateOnAxis(lh, t);
    }
    rotateY(t) {
      return this.rotateOnAxis(ch, t);
    }
    rotateZ(t) {
      return this.rotateOnAxis(hh, t);
    }
    translateOnAxis(t, e) {
      return (
        oh.copy(t).applyQuaternion(this.quaternion),
        this.position.add(oh.multiplyScalar(e)),
        this
      );
    }
    translateX(t) {
      return this.translateOnAxis(lh, t);
    }
    translateY(t) {
      return this.translateOnAxis(ch, t);
    }
    translateZ(t) {
      return this.translateOnAxis(hh, t);
    }
    localToWorld(t) {
      return (this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld));
    }
    worldToLocal(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        t.applyMatrix4(Rn.copy(this.matrixWorld).invert())
      );
    }
    lookAt(t, e, n) {
      t.isVector3 ? lr.copy(t) : lr.set(t, e, n);
      let s = this.parent;
      (this.updateWorldMatrix(!0, !1),
        hs.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight
          ? Rn.lookAt(hs, lr, this.up)
          : Rn.lookAt(lr, hs, this.up),
        this.quaternion.setFromRotationMatrix(Rn),
        s &&
          (Rn.extractRotation(s.matrixWorld),
          Li.setFromRotationMatrix(Rn),
          this.quaternion.premultiply(Li.invert())));
    }
    add(t) {
      if (arguments.length > 1) {
        for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
        return this;
      }
      return t === this
        ? (Ot("Object3D.add: object can't be added as a child of itself.", t),
          this)
        : (t && t.isObject3D
            ? (t.removeFromParent(),
              (t.parent = this),
              this.children.push(t),
              t.dispatchEvent(uh),
              (Di.child = t),
              this.dispatchEvent(Di),
              (Di.child = null))
            : Ot("Object3D.add: object not an instance of THREE.Object3D.", t),
          this);
    }
    remove(t) {
      if (arguments.length > 1) {
        for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
        return this;
      }
      let e = this.children.indexOf(t);
      return (
        e !== -1 &&
          ((t.parent = null),
          this.children.splice(e, 1),
          t.dispatchEvent(Fd),
          (Go.child = t),
          this.dispatchEvent(Go),
          (Go.child = null)),
        this
      );
    }
    removeFromParent() {
      let t = this.parent;
      return (t !== null && t.remove(this), this);
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        Rn.copy(this.matrixWorld).invert(),
        t.parent !== null &&
          (t.parent.updateWorldMatrix(!0, !1),
          Rn.multiply(t.parent.matrixWorld)),
        t.applyMatrix4(Rn),
        t.removeFromParent(),
        (t.parent = this),
        this.children.push(t),
        t.updateWorldMatrix(!1, !0),
        t.dispatchEvent(uh),
        (Di.child = t),
        this.dispatchEvent(Di),
        (Di.child = null),
        this
      );
    }
    getObjectById(t) {
      return this.getObjectByProperty("id", t);
    }
    getObjectByName(t) {
      return this.getObjectByProperty("name", t);
    }
    getObjectByProperty(t, e) {
      if (this[t] === e) return this;
      for (let n = 0, s = this.children.length; n < s; n++) {
        let a = this.children[n].getObjectByProperty(t, e);
        if (a !== void 0) return a;
      }
    }
    getObjectsByProperty(t, e, n = []) {
      this[t] === e && n.push(this);
      let s = this.children;
      for (let r = 0, a = s.length; r < a; r++)
        s[r].getObjectsByProperty(t, e, n);
      return n;
    }
    getWorldPosition(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        t.setFromMatrixPosition(this.matrixWorld)
      );
    }
    getWorldQuaternion(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(hs, t, Nd),
        t
      );
    }
    getWorldScale(t) {
      return (
        this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(hs, Ud, t),
        t
      );
    }
    getWorldDirection(t) {
      this.updateWorldMatrix(!0, !1);
      let e = this.matrixWorld.elements;
      return t.set(e[8], e[9], e[10]).normalize();
    }
    raycast() {}
    traverse(t) {
      t(this);
      let e = this.children;
      for (let n = 0, s = e.length; n < s; n++) e[n].traverse(t);
    }
    traverseVisible(t) {
      if (this.visible === !1) return;
      t(this);
      let e = this.children;
      for (let n = 0, s = e.length; n < s; n++) e[n].traverseVisible(t);
    }
    traverseAncestors(t) {
      let e = this.parent;
      e !== null && (t(e), e.traverseAncestors(t));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale);
      let t = this.pivot;
      if (t !== null) {
        let e = t.x,
          n = t.y,
          s = t.z,
          r = this.matrix.elements;
        ((r[12] += e - r[0] * e - r[4] * n - r[8] * s),
          (r[13] += n - r[1] * e - r[5] * n - r[9] * s),
          (r[14] += s - r[2] * e - r[6] * n - r[10] * s));
      }
      this.matrixWorldNeedsUpdate = !0;
    }
    updateMatrixWorld(t) {
      (this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || t) &&
          (this.matrixWorldAutoUpdate === !0 &&
            (this.parent === null
              ? this.matrixWorld.copy(this.matrix)
              : this.matrixWorld.multiplyMatrices(
                  this.parent.matrixWorld,
                  this.matrix,
                )),
          (this.matrixWorldNeedsUpdate = !1),
          (t = !0)));
      let e = this.children;
      for (let n = 0, s = e.length; n < s; n++) e[n].updateMatrixWorld(t);
    }
    updateWorldMatrix(t, e, n = !1) {
      let s = this.parent;
      if (
        (t === !0 && s !== null && s.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || n) &&
          (this.matrixWorldAutoUpdate === !0 &&
            (this.parent === null
              ? this.matrixWorld.copy(this.matrix)
              : this.matrixWorld.multiplyMatrices(
                  this.parent.matrixWorld,
                  this.matrix,
                )),
          (this.matrixWorldNeedsUpdate = !1),
          (n = !0)),
        e === !0)
      ) {
        let r = this.children;
        for (let a = 0, o = r.length; a < o; a++)
          r[a].updateWorldMatrix(!1, !0, n);
      }
    }
    toJSON(t) {
      let e = t === void 0 || typeof t == "string",
        n = {};
      e &&
        ((t = {
          geometries: {},
          materials: {},
          textures: {},
          images: {},
          shapes: {},
          skeletons: {},
          animations: {},
          nodes: {},
        }),
        (n.metadata = {
          version: 4.7,
          type: "Object",
          generator: "Object3D.toJSON",
        }));
      let s = {};
      ((s.uuid = this.uuid),
        (s.type = this.type),
        this.name !== "" && (s.name = this.name),
        this.castShadow === !0 && (s.castShadow = !0),
        this.receiveShadow === !0 && (s.receiveShadow = !0),
        this.visible === !1 && (s.visible = !1),
        this.frustumCulled === !1 && (s.frustumCulled = !1),
        this.renderOrder !== 0 && (s.renderOrder = this.renderOrder),
        this.static !== !1 && (s.static = this.static),
        Object.keys(this.userData).length > 0 && (s.userData = this.userData),
        (s.layers = this.layers.mask),
        (s.matrix = this.matrix.toArray()),
        (s.up = this.up.toArray()),
        this.pivot !== null && (s.pivot = this.pivot.toArray()),
        this.matrixAutoUpdate === !1 && (s.matrixAutoUpdate = !1),
        this.morphTargetDictionary !== void 0 &&
          (s.morphTargetDictionary = Object.assign(
            {},
            this.morphTargetDictionary,
          )),
        this.morphTargetInfluences !== void 0 &&
          (s.morphTargetInfluences = this.morphTargetInfluences.slice()),
        this.isInstancedMesh &&
          ((s.type = "InstancedMesh"),
          (s.count = this.count),
          (s.instanceMatrix = this.instanceMatrix.toJSON()),
          this.instanceColor !== null &&
            (s.instanceColor = this.instanceColor.toJSON())),
        this.isBatchedMesh &&
          ((s.type = "BatchedMesh"),
          (s.perObjectFrustumCulled = this.perObjectFrustumCulled),
          (s.sortObjects = this.sortObjects),
          (s.drawRanges = this._drawRanges),
          (s.reservedRanges = this._reservedRanges),
          (s.geometryInfo = this._geometryInfo.map((o) => ({
            ...o,
            boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
            boundingSphere: o.boundingSphere
              ? o.boundingSphere.toJSON()
              : void 0,
          }))),
          (s.instanceInfo = this._instanceInfo.map((o) => ({ ...o }))),
          (s.availableInstanceIds = this._availableInstanceIds.slice()),
          (s.availableGeometryIds = this._availableGeometryIds.slice()),
          (s.nextIndexStart = this._nextIndexStart),
          (s.nextVertexStart = this._nextVertexStart),
          (s.geometryCount = this._geometryCount),
          (s.maxInstanceCount = this._maxInstanceCount),
          (s.maxVertexCount = this._maxVertexCount),
          (s.maxIndexCount = this._maxIndexCount),
          (s.geometryInitialized = this._geometryInitialized),
          (s.matricesTexture = this._matricesTexture.toJSON(t)),
          (s.indirectTexture = this._indirectTexture.toJSON(t)),
          this._colorsTexture !== null &&
            (s.colorsTexture = this._colorsTexture.toJSON(t)),
          this.boundingSphere !== null &&
            (s.boundingSphere = this.boundingSphere.toJSON()),
          this.boundingBox !== null &&
            (s.boundingBox = this.boundingBox.toJSON())));
      function r(o, c) {
        return (o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(t)), c.uuid);
      }
      if (this.isScene)
        (this.background &&
          (this.background.isColor
            ? (s.background = this.background.toJSON())
            : this.background.isTexture &&
              (s.background = this.background.toJSON(t).uuid)),
          this.environment &&
            this.environment.isTexture &&
            this.environment.isRenderTargetTexture !== !0 &&
            (s.environment = this.environment.toJSON(t).uuid));
      else if (this.isMesh || this.isLine || this.isPoints) {
        s.geometry = r(t.geometries, this.geometry);
        let o = this.geometry.parameters;
        if (o !== void 0 && o.shapes !== void 0) {
          let c = o.shapes;
          if (Array.isArray(c))
            for (let l = 0, h = c.length; l < h; l++) {
              let d = c[l];
              r(t.shapes, d);
            }
          else r(t.shapes, c);
        }
      }
      if (
        (this.isSkinnedMesh &&
          ((s.bindMode = this.bindMode),
          (s.bindMatrix = this.bindMatrix.toArray()),
          this.skeleton !== void 0 &&
            (r(t.skeletons, this.skeleton), (s.skeleton = this.skeleton.uuid))),
        this.material !== void 0)
      )
        if (Array.isArray(this.material)) {
          let o = [];
          for (let c = 0, l = this.material.length; c < l; c++)
            o.push(r(t.materials, this.material[c]));
          s.material = o;
        } else s.material = r(t.materials, this.material);
      if (this.children.length > 0) {
        s.children = [];
        for (let o = 0; o < this.children.length; o++)
          s.children.push(this.children[o].toJSON(t).object);
      }
      if (this.animations.length > 0) {
        s.animations = [];
        for (let o = 0; o < this.animations.length; o++) {
          let c = this.animations[o];
          s.animations.push(r(t.animations, c));
        }
      }
      if (e) {
        let o = a(t.geometries),
          c = a(t.materials),
          l = a(t.textures),
          h = a(t.images),
          d = a(t.shapes),
          u = a(t.skeletons),
          f = a(t.animations),
          g = a(t.nodes);
        (o.length > 0 && (n.geometries = o),
          c.length > 0 && (n.materials = c),
          l.length > 0 && (n.textures = l),
          h.length > 0 && (n.images = h),
          d.length > 0 && (n.shapes = d),
          u.length > 0 && (n.skeletons = u),
          f.length > 0 && (n.animations = f),
          g.length > 0 && (n.nodes = g));
      }
      return ((n.object = s), n);
      function a(o) {
        let c = [];
        for (let l in o) {
          let h = o[l];
          (delete h.metadata, c.push(h));
        }
        return c;
      }
    }
    clone(t) {
      return new this.constructor().copy(this, t);
    }
    copy(t, e = !0) {
      if (
        ((this.name = t.name),
        this.up.copy(t.up),
        this.position.copy(t.position),
        (this.rotation.order = t.rotation.order),
        this.quaternion.copy(t.quaternion),
        this.scale.copy(t.scale),
        (this.pivot = t.pivot !== null ? t.pivot.clone() : null),
        this.matrix.copy(t.matrix),
        this.matrixWorld.copy(t.matrixWorld),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        (this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate),
        (this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate),
        (this.layers.mask = t.layers.mask),
        (this.visible = t.visible),
        (this.castShadow = t.castShadow),
        (this.receiveShadow = t.receiveShadow),
        (this.frustumCulled = t.frustumCulled),
        (this.renderOrder = t.renderOrder),
        (this.static = t.static),
        (this.animations = t.animations.slice()),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        e === !0)
      )
        for (let n = 0; n < t.children.length; n++) {
          let s = t.children[n];
          this.add(s.clone());
        }
      return this;
    }
  };
Ie.DEFAULT_UP = new L(0, 1, 0);
Ie.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var _n = class extends Ie {
    constructor() {
      (super(), (this.isGroup = !0), (this.type = "Group"));
    }
  },
  Od = { type: "move" },
  Ji = class {
    constructor() {
      ((this._targetRay = null), (this._grip = null), (this._hand = null));
    }
    getHandSpace() {
      return (
        this._hand === null &&
          ((this._hand = new _n()),
          (this._hand.matrixAutoUpdate = !1),
          (this._hand.visible = !1),
          (this._hand.joints = {}),
          (this._hand.inputState = { pinching: !1 })),
        this._hand
      );
    }
    getTargetRaySpace() {
      return (
        this._targetRay === null &&
          ((this._targetRay = new _n()),
          (this._targetRay.matrixAutoUpdate = !1),
          (this._targetRay.visible = !1),
          (this._targetRay.hasLinearVelocity = !1),
          (this._targetRay.linearVelocity = new L()),
          (this._targetRay.hasAngularVelocity = !1),
          (this._targetRay.angularVelocity = new L())),
        this._targetRay
      );
    }
    getGripSpace() {
      return (
        this._grip === null &&
          ((this._grip = new _n()),
          (this._grip.matrixAutoUpdate = !1),
          (this._grip.visible = !1),
          (this._grip.hasLinearVelocity = !1),
          (this._grip.linearVelocity = new L()),
          (this._grip.hasAngularVelocity = !1),
          (this._grip.angularVelocity = new L()),
          (this._grip.eventsEnabled = !1)),
        this._grip
      );
    }
    dispatchEvent(t) {
      return (
        this._targetRay !== null && this._targetRay.dispatchEvent(t),
        this._grip !== null && this._grip.dispatchEvent(t),
        this._hand !== null && this._hand.dispatchEvent(t),
        this
      );
    }
    connect(t) {
      if (t && t.hand) {
        let e = this._hand;
        if (e) for (let n of t.hand.values()) this._getHandJoint(e, n);
      }
      return (this.dispatchEvent({ type: "connected", data: t }), this);
    }
    disconnect(t) {
      return (
        this.dispatchEvent({ type: "disconnected", data: t }),
        this._targetRay !== null && (this._targetRay.visible = !1),
        this._grip !== null && (this._grip.visible = !1),
        this._hand !== null && (this._hand.visible = !1),
        this
      );
    }
    update(t, e, n) {
      let s = null,
        r = null,
        a = null,
        o = this._targetRay,
        c = this._grip,
        l = this._hand;
      if (t && e.session.visibilityState !== "visible-blurred") {
        if (l && t.hand) {
          a = !0;
          for (let y of t.hand.values()) {
            let m = e.getJointPose(y, n),
              p = this._getHandJoint(l, y);
            (m !== null &&
              (p.matrix.fromArray(m.transform.matrix),
              p.matrix.decompose(p.position, p.rotation, p.scale),
              (p.matrixWorldNeedsUpdate = !0),
              (p.jointRadius = m.radius)),
              (p.visible = m !== null));
          }
          let h = l.joints["index-finger-tip"],
            d = l.joints["thumb-tip"],
            u = h.position.distanceTo(d.position),
            f = 0.02,
            g = 0.005;
          l.inputState.pinching && u > f + g
            ? ((l.inputState.pinching = !1),
              this.dispatchEvent({
                type: "pinchend",
                handedness: t.handedness,
                target: this,
              }))
            : !l.inputState.pinching &&
              u <= f - g &&
              ((l.inputState.pinching = !0),
              this.dispatchEvent({
                type: "pinchstart",
                handedness: t.handedness,
                target: this,
              }));
        } else
          c !== null &&
            t.gripSpace &&
            ((r = e.getPose(t.gripSpace, n)),
            r !== null &&
              (c.matrix.fromArray(r.transform.matrix),
              c.matrix.decompose(c.position, c.rotation, c.scale),
              (c.matrixWorldNeedsUpdate = !0),
              r.linearVelocity
                ? ((c.hasLinearVelocity = !0),
                  c.linearVelocity.copy(r.linearVelocity))
                : (c.hasLinearVelocity = !1),
              r.angularVelocity
                ? ((c.hasAngularVelocity = !0),
                  c.angularVelocity.copy(r.angularVelocity))
                : (c.hasAngularVelocity = !1),
              c.eventsEnabled &&
                c.dispatchEvent({
                  type: "gripUpdated",
                  data: t,
                  target: this,
                })));
        o !== null &&
          ((s = e.getPose(t.targetRaySpace, n)),
          s === null && r !== null && (s = r),
          s !== null &&
            (o.matrix.fromArray(s.transform.matrix),
            o.matrix.decompose(o.position, o.rotation, o.scale),
            (o.matrixWorldNeedsUpdate = !0),
            s.linearVelocity
              ? ((o.hasLinearVelocity = !0),
                o.linearVelocity.copy(s.linearVelocity))
              : (o.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((o.hasAngularVelocity = !0),
                o.angularVelocity.copy(s.angularVelocity))
              : (o.hasAngularVelocity = !1),
            this.dispatchEvent(Od)));
      }
      return (
        o !== null && (o.visible = s !== null),
        c !== null && (c.visible = r !== null),
        l !== null && (l.visible = a !== null),
        this
      );
    }
    _getHandJoint(t, e) {
      if (t.joints[e.jointName] === void 0) {
        let n = new _n();
        ((n.matrixAutoUpdate = !1),
          (n.visible = !1),
          (t.joints[e.jointName] = n),
          t.add(n));
      }
      return t.joints[e.jointName];
    }
  },
  xu = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  Yn = { h: 0, s: 0, l: 0 },
  cr = { h: 0, s: 0, l: 0 };
function Ho(i, t, e) {
  return (
    e < 0 && (e += 1),
    e > 1 && (e -= 1),
    e < 1 / 6
      ? i + (t - i) * 6 * e
      : e < 1 / 2
        ? t
        : e < 2 / 3
          ? i + (t - i) * 6 * (2 / 3 - e)
          : i
  );
}
var Jt = class {
    constructor(t, e, n) {
      return (
        (this.isColor = !0),
        (this.r = 1),
        (this.g = 1),
        (this.b = 1),
        this.set(t, e, n)
      );
    }
    set(t, e, n) {
      if (e === void 0 && n === void 0) {
        let s = t;
        s && s.isColor
          ? this.copy(s)
          : typeof s == "number"
            ? this.setHex(s)
            : typeof s == "string" && this.setStyle(s);
      } else this.setRGB(t, e, n);
      return this;
    }
    setScalar(t) {
      return ((this.r = t), (this.g = t), (this.b = t), this);
    }
    setHex(t, e = Le) {
      return (
        (t = Math.floor(t)),
        (this.r = ((t >> 16) & 255) / 255),
        (this.g = ((t >> 8) & 255) / 255),
        (this.b = (t & 255) / 255),
        ee.colorSpaceToWorking(this, e),
        this
      );
    }
    setRGB(t, e, n, s = ee.workingColorSpace) {
      return (
        (this.r = t),
        (this.g = e),
        (this.b = n),
        ee.colorSpaceToWorking(this, s),
        this
      );
    }
    setHSL(t, e, n, s = ee.workingColorSpace) {
      if (((t = Ad(t, 1)), (e = te(e, 0, 1)), (n = te(n, 0, 1)), e === 0))
        this.r = this.g = this.b = n;
      else {
        let r = n <= 0.5 ? n * (1 + e) : n + e - n * e,
          a = 2 * n - r;
        ((this.r = Ho(a, r, t + 1 / 3)),
          (this.g = Ho(a, r, t)),
          (this.b = Ho(a, r, t - 1 / 3)));
      }
      return (ee.colorSpaceToWorking(this, s), this);
    }
    setStyle(t, e = Le) {
      function n(r) {
        r !== void 0 &&
          parseFloat(r) < 1 &&
          Nt("Color: Alpha component of " + t + " will be ignored.");
      }
      let s;
      if ((s = /^(\w+)\(([^\)]*)\)/.exec(t))) {
        let r,
          a = s[1],
          o = s[2];
        switch (a) {
          case "rgb":
          case "rgba":
            if (
              (r =
                /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  o,
                ))
            )
              return (
                n(r[4]),
                this.setRGB(
                  Math.min(255, parseInt(r[1], 10)) / 255,
                  Math.min(255, parseInt(r[2], 10)) / 255,
                  Math.min(255, parseInt(r[3], 10)) / 255,
                  e,
                )
              );
            if (
              (r =
                /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  o,
                ))
            )
              return (
                n(r[4]),
                this.setRGB(
                  Math.min(100, parseInt(r[1], 10)) / 100,
                  Math.min(100, parseInt(r[2], 10)) / 100,
                  Math.min(100, parseInt(r[3], 10)) / 100,
                  e,
                )
              );
            break;
          case "hsl":
          case "hsla":
            if (
              (r =
                /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                  o,
                ))
            )
              return (
                n(r[4]),
                this.setHSL(
                  parseFloat(r[1]) / 360,
                  parseFloat(r[2]) / 100,
                  parseFloat(r[3]) / 100,
                  e,
                )
              );
            break;
          default:
            Nt("Color: Unknown color model " + t);
        }
      } else if ((s = /^\#([A-Fa-f\d]+)$/.exec(t))) {
        let r = s[1],
          a = r.length;
        if (a === 3)
          return this.setRGB(
            parseInt(r.charAt(0), 16) / 15,
            parseInt(r.charAt(1), 16) / 15,
            parseInt(r.charAt(2), 16) / 15,
            e,
          );
        if (a === 6) return this.setHex(parseInt(r, 16), e);
        Nt("Color: Invalid hex color " + t);
      } else if (t && t.length > 0) return this.setColorName(t, e);
      return this;
    }
    setColorName(t, e = Le) {
      let n = xu[t.toLowerCase()];
      return (
        n !== void 0 ? this.setHex(n, e) : Nt("Color: Unknown color " + t),
        this
      );
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(t) {
      return ((this.r = t.r), (this.g = t.g), (this.b = t.b), this);
    }
    copySRGBToLinear(t) {
      return ((this.r = Un(t.r)), (this.g = Un(t.g)), (this.b = Un(t.b)), this);
    }
    copyLinearToSRGB(t) {
      return ((this.r = Hi(t.r)), (this.g = Hi(t.g)), (this.b = Hi(t.b)), this);
    }
    convertSRGBToLinear() {
      return (this.copySRGBToLinear(this), this);
    }
    convertLinearToSRGB() {
      return (this.copyLinearToSRGB(this), this);
    }
    getHex(t = Le) {
      return (
        ee.workingToColorSpace(Fe.copy(this), t),
        Math.round(te(Fe.r * 255, 0, 255)) * 65536 +
          Math.round(te(Fe.g * 255, 0, 255)) * 256 +
          Math.round(te(Fe.b * 255, 0, 255))
      );
    }
    getHexString(t = Le) {
      return ("000000" + this.getHex(t).toString(16)).slice(-6);
    }
    getHSL(t, e = ee.workingColorSpace) {
      ee.workingToColorSpace(Fe.copy(this), e);
      let n = Fe.r,
        s = Fe.g,
        r = Fe.b,
        a = Math.max(n, s, r),
        o = Math.min(n, s, r),
        c,
        l,
        h = (o + a) / 2;
      if (o === a) ((c = 0), (l = 0));
      else {
        let d = a - o;
        switch (((l = h <= 0.5 ? d / (a + o) : d / (2 - a - o)), a)) {
          case n:
            c = (s - r) / d + (s < r ? 6 : 0);
            break;
          case s:
            c = (r - n) / d + 2;
            break;
          case r:
            c = (n - s) / d + 4;
            break;
        }
        c /= 6;
      }
      return ((t.h = c), (t.s = l), (t.l = h), t);
    }
    getRGB(t, e = ee.workingColorSpace) {
      return (
        ee.workingToColorSpace(Fe.copy(this), e),
        (t.r = Fe.r),
        (t.g = Fe.g),
        (t.b = Fe.b),
        t
      );
    }
    getStyle(t = Le) {
      ee.workingToColorSpace(Fe.copy(this), t);
      let e = Fe.r,
        n = Fe.g,
        s = Fe.b;
      return t !== Le
        ? `color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`
        : `rgb(${Math.round(e * 255)},${Math.round(n * 255)},${Math.round(s * 255)})`;
    }
    offsetHSL(t, e, n) {
      return (this.getHSL(Yn), this.setHSL(Yn.h + t, Yn.s + e, Yn.l + n));
    }
    add(t) {
      return ((this.r += t.r), (this.g += t.g), (this.b += t.b), this);
    }
    addColors(t, e) {
      return (
        (this.r = t.r + e.r),
        (this.g = t.g + e.g),
        (this.b = t.b + e.b),
        this
      );
    }
    addScalar(t) {
      return ((this.r += t), (this.g += t), (this.b += t), this);
    }
    sub(t) {
      return (
        (this.r = Math.max(0, this.r - t.r)),
        (this.g = Math.max(0, this.g - t.g)),
        (this.b = Math.max(0, this.b - t.b)),
        this
      );
    }
    multiply(t) {
      return ((this.r *= t.r), (this.g *= t.g), (this.b *= t.b), this);
    }
    multiplyScalar(t) {
      return ((this.r *= t), (this.g *= t), (this.b *= t), this);
    }
    lerp(t, e) {
      return (
        (this.r += (t.r - this.r) * e),
        (this.g += (t.g - this.g) * e),
        (this.b += (t.b - this.b) * e),
        this
      );
    }
    lerpColors(t, e, n) {
      return (
        (this.r = t.r + (e.r - t.r) * n),
        (this.g = t.g + (e.g - t.g) * n),
        (this.b = t.b + (e.b - t.b) * n),
        this
      );
    }
    lerpHSL(t, e) {
      (this.getHSL(Yn), t.getHSL(cr));
      let n = Oo(Yn.h, cr.h, e),
        s = Oo(Yn.s, cr.s, e),
        r = Oo(Yn.l, cr.l, e);
      return (this.setHSL(n, s, r), this);
    }
    setFromVector3(t) {
      return ((this.r = t.x), (this.g = t.y), (this.b = t.z), this);
    }
    applyMatrix3(t) {
      let e = this.r,
        n = this.g,
        s = this.b,
        r = t.elements;
      return (
        (this.r = r[0] * e + r[3] * n + r[6] * s),
        (this.g = r[1] * e + r[4] * n + r[7] * s),
        (this.b = r[2] * e + r[5] * n + r[8] * s),
        this
      );
    }
    equals(t) {
      return t.r === this.r && t.g === this.g && t.b === this.b;
    }
    fromArray(t, e = 0) {
      return ((this.r = t[e]), (this.g = t[e + 1]), (this.b = t[e + 2]), this);
    }
    toArray(t = [], e = 0) {
      return ((t[e] = this.r), (t[e + 1] = this.g), (t[e + 2] = this.b), t);
    }
    fromBufferAttribute(t, e) {
      return (
        (this.r = t.getX(e)),
        (this.g = t.getY(e)),
        (this.b = t.getZ(e)),
        this
      );
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      (yield this.r, yield this.g, yield this.b);
    }
  },
  Fe = new Jt();
Jt.NAMES = xu;
var _l = class i {
  constructor(t, e = 25e-5) {
    ((this.isFogExp2 = !0),
      (this.name = ""),
      (this.color = new Jt(t)),
      (this.density = e));
  }
  clone() {
    return new i(this.color, this.density);
  }
  toJSON() {
    return {
      type: "FogExp2",
      name: this.name,
      color: this.color.getHex(),
      density: this.density,
    };
  }
};
var xl = class extends Ie {
    constructor() {
      (super(),
        (this.isScene = !0),
        (this.type = "Scene"),
        (this.background = null),
        (this.environment = null),
        (this.fog = null),
        (this.backgroundBlurriness = 0),
        (this.backgroundIntensity = 1),
        (this.backgroundRotation = new On()),
        (this.environmentIntensity = 1),
        (this.environmentRotation = new On()),
        (this.overrideMaterial = null),
        typeof __THREE_DEVTOOLS__ < "u" &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent("observe", { detail: this }),
          ));
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        t.background !== null && (this.background = t.background.clone()),
        t.environment !== null && (this.environment = t.environment.clone()),
        t.fog !== null && (this.fog = t.fog.clone()),
        (this.backgroundBlurriness = t.backgroundBlurriness),
        (this.backgroundIntensity = t.backgroundIntensity),
        this.backgroundRotation.copy(t.backgroundRotation),
        (this.environmentIntensity = t.environmentIntensity),
        this.environmentRotation.copy(t.environmentRotation),
        t.overrideMaterial !== null &&
          (this.overrideMaterial = t.overrideMaterial.clone()),
        (this.matrixAutoUpdate = t.matrixAutoUpdate),
        this
      );
    }
    toJSON(t) {
      let e = super.toJSON(t);
      return (
        this.fog !== null && (e.object.fog = this.fog.toJSON()),
        this.backgroundBlurriness > 0 &&
          (e.object.backgroundBlurriness = this.backgroundBlurriness),
        this.backgroundIntensity !== 1 &&
          (e.object.backgroundIntensity = this.backgroundIntensity),
        (e.object.backgroundRotation = this.backgroundRotation.toArray()),
        this.environmentIntensity !== 1 &&
          (e.object.environmentIntensity = this.environmentIntensity),
        (e.object.environmentRotation = this.environmentRotation.toArray()),
        e
      );
    }
  },
  nn = new L(),
  In = new L(),
  Wo = new L(),
  Pn = new L(),
  Ni = new L(),
  Ui = new L(),
  dh = new L(),
  Xo = new L(),
  qo = new L(),
  Yo = new L(),
  Zo = new _e(),
  Jo = new _e(),
  $o = new _e(),
  Nn = class i {
    constructor(t = new L(), e = new L(), n = new L()) {
      ((this.a = t), (this.b = e), (this.c = n));
    }
    static getNormal(t, e, n, s) {
      (s.subVectors(n, e), nn.subVectors(t, e), s.cross(nn));
      let r = s.lengthSq();
      return r > 0 ? s.multiplyScalar(1 / Math.sqrt(r)) : s.set(0, 0, 0);
    }
    static getBarycoord(t, e, n, s, r) {
      (nn.subVectors(s, e), In.subVectors(n, e), Wo.subVectors(t, e));
      let a = nn.dot(nn),
        o = nn.dot(In),
        c = nn.dot(Wo),
        l = In.dot(In),
        h = In.dot(Wo),
        d = a * l - o * o;
      if (d === 0) return (r.set(0, 0, 0), null);
      let u = 1 / d,
        f = (l * c - o * h) * u,
        g = (a * h - o * c) * u;
      return r.set(1 - f - g, g, f);
    }
    static containsPoint(t, e, n, s) {
      return this.getBarycoord(t, e, n, s, Pn) === null
        ? !1
        : Pn.x >= 0 && Pn.y >= 0 && Pn.x + Pn.y <= 1;
    }
    static getInterpolation(t, e, n, s, r, a, o, c) {
      return this.getBarycoord(t, e, n, s, Pn) === null
        ? ((c.x = 0),
          (c.y = 0),
          "z" in c && (c.z = 0),
          "w" in c && (c.w = 0),
          null)
        : (c.setScalar(0),
          c.addScaledVector(r, Pn.x),
          c.addScaledVector(a, Pn.y),
          c.addScaledVector(o, Pn.z),
          c);
    }
    static getInterpolatedAttribute(t, e, n, s, r, a) {
      return (
        Zo.setScalar(0),
        Jo.setScalar(0),
        $o.setScalar(0),
        Zo.fromBufferAttribute(t, e),
        Jo.fromBufferAttribute(t, n),
        $o.fromBufferAttribute(t, s),
        a.setScalar(0),
        a.addScaledVector(Zo, r.x),
        a.addScaledVector(Jo, r.y),
        a.addScaledVector($o, r.z),
        a
      );
    }
    static isFrontFacing(t, e, n, s) {
      return (
        nn.subVectors(n, e),
        In.subVectors(t, e),
        nn.cross(In).dot(s) < 0
      );
    }
    set(t, e, n) {
      return (this.a.copy(t), this.b.copy(e), this.c.copy(n), this);
    }
    setFromPointsAndIndices(t, e, n, s) {
      return (this.a.copy(t[e]), this.b.copy(t[n]), this.c.copy(t[s]), this);
    }
    setFromAttributeAndIndices(t, e, n, s) {
      return (
        this.a.fromBufferAttribute(t, e),
        this.b.fromBufferAttribute(t, n),
        this.c.fromBufferAttribute(t, s),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return (this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this);
    }
    getArea() {
      return (
        nn.subVectors(this.c, this.b),
        In.subVectors(this.a, this.b),
        nn.cross(In).length() * 0.5
      );
    }
    getMidpoint(t) {
      return t
        .addVectors(this.a, this.b)
        .add(this.c)
        .multiplyScalar(1 / 3);
    }
    getNormal(t) {
      return i.getNormal(this.a, this.b, this.c, t);
    }
    getPlane(t) {
      return t.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t, e) {
      return i.getBarycoord(t, this.a, this.b, this.c, e);
    }
    getInterpolation(t, e, n, s, r) {
      return i.getInterpolation(t, this.a, this.b, this.c, e, n, s, r);
    }
    containsPoint(t) {
      return i.containsPoint(t, this.a, this.b, this.c);
    }
    isFrontFacing(t) {
      return i.isFrontFacing(this.a, this.b, this.c, t);
    }
    intersectsBox(t) {
      return t.intersectsTriangle(this);
    }
    closestPointToPoint(t, e) {
      let n = this.a,
        s = this.b,
        r = this.c,
        a,
        o;
      (Ni.subVectors(s, n), Ui.subVectors(r, n), Xo.subVectors(t, n));
      let c = Ni.dot(Xo),
        l = Ui.dot(Xo);
      if (c <= 0 && l <= 0) return e.copy(n);
      qo.subVectors(t, s);
      let h = Ni.dot(qo),
        d = Ui.dot(qo);
      if (h >= 0 && d <= h) return e.copy(s);
      let u = c * d - h * l;
      if (u <= 0 && c >= 0 && h <= 0)
        return ((a = c / (c - h)), e.copy(n).addScaledVector(Ni, a));
      Yo.subVectors(t, r);
      let f = Ni.dot(Yo),
        g = Ui.dot(Yo);
      if (g >= 0 && f <= g) return e.copy(r);
      let y = f * l - c * g;
      if (y <= 0 && l >= 0 && g <= 0)
        return ((o = l / (l - g)), e.copy(n).addScaledVector(Ui, o));
      let m = h * g - f * d;
      if (m <= 0 && d - h >= 0 && f - g >= 0)
        return (
          dh.subVectors(r, s),
          (o = (d - h) / (d - h + (f - g))),
          e.copy(s).addScaledVector(dh, o)
        );
      let p = 1 / (m + y + u);
      return (
        (a = y * p),
        (o = u * p),
        e.copy(n).addScaledVector(Ni, a).addScaledVector(Ui, o)
      );
    }
    equals(t) {
      return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c);
    }
  },
  jn = class {
    constructor(
      t = new L(1 / 0, 1 / 0, 1 / 0),
      e = new L(-1 / 0, -1 / 0, -1 / 0),
    ) {
      ((this.isBox3 = !0), (this.min = t), (this.max = e));
    }
    set(t, e) {
      return (this.min.copy(t), this.max.copy(e), this);
    }
    setFromArray(t) {
      this.makeEmpty();
      for (let e = 0, n = t.length; e < n; e += 3)
        this.expandByPoint(sn.fromArray(t, e));
      return this;
    }
    setFromBufferAttribute(t) {
      this.makeEmpty();
      for (let e = 0, n = t.count; e < n; e++)
        this.expandByPoint(sn.fromBufferAttribute(t, e));
      return this;
    }
    setFromPoints(t) {
      this.makeEmpty();
      for (let e = 0, n = t.length; e < n; e++) this.expandByPoint(t[e]);
      return this;
    }
    setFromCenterAndSize(t, e) {
      let n = sn.copy(e).multiplyScalar(0.5);
      return (this.min.copy(t).sub(n), this.max.copy(t).add(n), this);
    }
    setFromObject(t, e = !1) {
      return (this.makeEmpty(), this.expandByObject(t, e));
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return (this.min.copy(t.min), this.max.copy(t.max), this);
    }
    makeEmpty() {
      return (
        (this.min.x = this.min.y = this.min.z = 1 / 0),
        (this.max.x = this.max.y = this.max.z = -1 / 0),
        this
      );
    }
    isEmpty() {
      return (
        this.max.x < this.min.x ||
        this.max.y < this.min.y ||
        this.max.z < this.min.z
      );
    }
    getCenter(t) {
      return this.isEmpty()
        ? t.set(0, 0, 0)
        : t.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(t) {
      return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
    }
    expandByPoint(t) {
      return (this.min.min(t), this.max.max(t), this);
    }
    expandByVector(t) {
      return (this.min.sub(t), this.max.add(t), this);
    }
    expandByScalar(t) {
      return (this.min.addScalar(-t), this.max.addScalar(t), this);
    }
    expandByObject(t, e = !1) {
      t.updateWorldMatrix(!1, !1);
      let n = t.geometry;
      if (n !== void 0) {
        let r = n.getAttribute("position");
        if (e === !0 && r !== void 0 && t.isInstancedMesh !== !0)
          for (let a = 0, o = r.count; a < o; a++)
            (t.isMesh === !0
              ? t.getVertexPosition(a, sn)
              : sn.fromBufferAttribute(r, a),
              sn.applyMatrix4(t.matrixWorld),
              this.expandByPoint(sn));
        else
          (t.boundingBox !== void 0
            ? (t.boundingBox === null && t.computeBoundingBox(),
              hr.copy(t.boundingBox))
            : (n.boundingBox === null && n.computeBoundingBox(),
              hr.copy(n.boundingBox)),
            hr.applyMatrix4(t.matrixWorld),
            this.union(hr));
      }
      let s = t.children;
      for (let r = 0, a = s.length; r < a; r++) this.expandByObject(s[r], e);
      return this;
    }
    containsPoint(t) {
      return (
        t.x >= this.min.x &&
        t.x <= this.max.x &&
        t.y >= this.min.y &&
        t.y <= this.max.y &&
        t.z >= this.min.z &&
        t.z <= this.max.z
      );
    }
    containsBox(t) {
      return (
        this.min.x <= t.min.x &&
        t.max.x <= this.max.x &&
        this.min.y <= t.min.y &&
        t.max.y <= this.max.y &&
        this.min.z <= t.min.z &&
        t.max.z <= this.max.z
      );
    }
    getParameter(t, e) {
      return e.set(
        (t.x - this.min.x) / (this.max.x - this.min.x),
        (t.y - this.min.y) / (this.max.y - this.min.y),
        (t.z - this.min.z) / (this.max.z - this.min.z),
      );
    }
    intersectsBox(t) {
      return (
        t.max.x >= this.min.x &&
        t.min.x <= this.max.x &&
        t.max.y >= this.min.y &&
        t.min.y <= this.max.y &&
        t.max.z >= this.min.z &&
        t.min.z <= this.max.z
      );
    }
    intersectsSphere(t) {
      return (
        this.clampPoint(t.center, sn),
        sn.distanceToSquared(t.center) <= t.radius * t.radius
      );
    }
    intersectsPlane(t) {
      let e, n;
      return (
        t.normal.x > 0
          ? ((e = t.normal.x * this.min.x), (n = t.normal.x * this.max.x))
          : ((e = t.normal.x * this.max.x), (n = t.normal.x * this.min.x)),
        t.normal.y > 0
          ? ((e += t.normal.y * this.min.y), (n += t.normal.y * this.max.y))
          : ((e += t.normal.y * this.max.y), (n += t.normal.y * this.min.y)),
        t.normal.z > 0
          ? ((e += t.normal.z * this.min.z), (n += t.normal.z * this.max.z))
          : ((e += t.normal.z * this.max.z), (n += t.normal.z * this.min.z)),
        e <= -t.constant && n >= -t.constant
      );
    }
    intersectsTriangle(t) {
      if (this.isEmpty()) return !1;
      (this.getCenter(us),
        ur.subVectors(this.max, us),
        Fi.subVectors(t.a, us),
        Oi.subVectors(t.b, us),
        Bi.subVectors(t.c, us),
        Zn.subVectors(Oi, Fi),
        Jn.subVectors(Bi, Oi),
        di.subVectors(Fi, Bi));
      let e = [
        0,
        -Zn.z,
        Zn.y,
        0,
        -Jn.z,
        Jn.y,
        0,
        -di.z,
        di.y,
        Zn.z,
        0,
        -Zn.x,
        Jn.z,
        0,
        -Jn.x,
        di.z,
        0,
        -di.x,
        -Zn.y,
        Zn.x,
        0,
        -Jn.y,
        Jn.x,
        0,
        -di.y,
        di.x,
        0,
      ];
      return !Ko(e, Fi, Oi, Bi, ur) ||
        ((e = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Ko(e, Fi, Oi, Bi, ur))
        ? !1
        : (dr.crossVectors(Zn, Jn),
          (e = [dr.x, dr.y, dr.z]),
          Ko(e, Fi, Oi, Bi, ur));
    }
    clampPoint(t, e) {
      return e.copy(t).clamp(this.min, this.max);
    }
    distanceToPoint(t) {
      return this.clampPoint(t, sn).distanceTo(t);
    }
    getBoundingSphere(t) {
      return (
        this.isEmpty()
          ? t.makeEmpty()
          : (this.getCenter(t.center),
            (t.radius = this.getSize(sn).length() * 0.5)),
        t
      );
    }
    intersect(t) {
      return (
        this.min.max(t.min),
        this.max.min(t.max),
        this.isEmpty() && this.makeEmpty(),
        this
      );
    }
    union(t) {
      return (this.min.min(t.min), this.max.max(t.max), this);
    }
    applyMatrix4(t) {
      return this.isEmpty()
        ? this
        : (Ln[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
          Ln[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
          Ln[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
          Ln[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
          Ln[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
          Ln[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
          Ln[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
          Ln[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
          this.setFromPoints(Ln),
          this);
    }
    translate(t) {
      return (this.min.add(t), this.max.add(t), this);
    }
    equals(t) {
      return t.min.equals(this.min) && t.max.equals(this.max);
    }
    toJSON() {
      return { min: this.min.toArray(), max: this.max.toArray() };
    }
    fromJSON(t) {
      return (this.min.fromArray(t.min), this.max.fromArray(t.max), this);
    }
  },
  Ln = [new L(), new L(), new L(), new L(), new L(), new L(), new L(), new L()],
  sn = new L(),
  hr = new jn(),
  Fi = new L(),
  Oi = new L(),
  Bi = new L(),
  Zn = new L(),
  Jn = new L(),
  di = new L(),
  us = new L(),
  ur = new L(),
  dr = new L(),
  fi = new L();
function Ko(i, t, e, n, s) {
  for (let r = 0, a = i.length - 3; r <= a; r += 3) {
    fi.fromArray(i, r);
    let o = s.x * Math.abs(fi.x) + s.y * Math.abs(fi.y) + s.z * Math.abs(fi.z),
      c = t.dot(fi),
      l = e.dot(fi),
      h = n.dot(fi);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o) return !1;
  }
  return !0;
}
var be = new L(),
  fr = new ut(),
  Bd = 0,
  Be = class extends vn {
    constructor(t, e, n = !1) {
      if ((super(), Array.isArray(t)))
        throw new TypeError(
          "THREE.BufferAttribute: array should be a Typed Array.",
        );
      ((this.isBufferAttribute = !0),
        Object.defineProperty(this, "id", { value: Bd++ }),
        (this.name = ""),
        (this.array = t),
        (this.itemSize = e),
        (this.count = t !== void 0 ? t.length / e : 0),
        (this.normalized = n),
        (this.usage = gl),
        (this.updateRanges = []),
        (this.gpuType = cn),
        (this.version = 0));
    }
    onUploadCallback() {}
    set needsUpdate(t) {
      t === !0 && this.version++;
    }
    setUsage(t) {
      return ((this.usage = t), this);
    }
    addUpdateRange(t, e) {
      this.updateRanges.push({ start: t, count: e });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(t) {
      return (
        (this.name = t.name),
        (this.array = new t.array.constructor(t.array)),
        (this.itemSize = t.itemSize),
        (this.count = t.count),
        (this.normalized = t.normalized),
        (this.usage = t.usage),
        (this.gpuType = t.gpuType),
        this
      );
    }
    copyAt(t, e, n) {
      ((t *= this.itemSize), (n *= e.itemSize));
      for (let s = 0, r = this.itemSize; s < r; s++)
        this.array[t + s] = e.array[n + s];
      return this;
    }
    copyArray(t) {
      return (this.array.set(t), this);
    }
    applyMatrix3(t) {
      if (this.itemSize === 2)
        for (let e = 0, n = this.count; e < n; e++)
          (fr.fromBufferAttribute(this, e),
            fr.applyMatrix3(t),
            this.setXY(e, fr.x, fr.y));
      else if (this.itemSize === 3)
        for (let e = 0, n = this.count; e < n; e++)
          (be.fromBufferAttribute(this, e),
            be.applyMatrix3(t),
            this.setXYZ(e, be.x, be.y, be.z));
      return this;
    }
    applyMatrix4(t) {
      for (let e = 0, n = this.count; e < n; e++)
        (be.fromBufferAttribute(this, e),
          be.applyMatrix4(t),
          this.setXYZ(e, be.x, be.y, be.z));
      return this;
    }
    applyNormalMatrix(t) {
      for (let e = 0, n = this.count; e < n; e++)
        (be.fromBufferAttribute(this, e),
          be.applyNormalMatrix(t),
          this.setXYZ(e, be.x, be.y, be.z));
      return this;
    }
    transformDirection(t) {
      for (let e = 0, n = this.count; e < n; e++)
        (be.fromBufferAttribute(this, e),
          be.transformDirection(t),
          this.setXYZ(e, be.x, be.y, be.z));
      return this;
    }
    set(t, e = 0) {
      return (this.array.set(t, e), this);
    }
    getComponent(t, e) {
      let n = this.array[t * this.itemSize + e];
      return (this.normalized && (n = cs(n, this.array)), n);
    }
    setComponent(t, e, n) {
      return (
        this.normalized && (n = Ge(n, this.array)),
        (this.array[t * this.itemSize + e] = n),
        this
      );
    }
    getX(t) {
      let e = this.array[t * this.itemSize];
      return (this.normalized && (e = cs(e, this.array)), e);
    }
    setX(t, e) {
      return (
        this.normalized && (e = Ge(e, this.array)),
        (this.array[t * this.itemSize] = e),
        this
      );
    }
    getY(t) {
      let e = this.array[t * this.itemSize + 1];
      return (this.normalized && (e = cs(e, this.array)), e);
    }
    setY(t, e) {
      return (
        this.normalized && (e = Ge(e, this.array)),
        (this.array[t * this.itemSize + 1] = e),
        this
      );
    }
    getZ(t) {
      let e = this.array[t * this.itemSize + 2];
      return (this.normalized && (e = cs(e, this.array)), e);
    }
    setZ(t, e) {
      return (
        this.normalized && (e = Ge(e, this.array)),
        (this.array[t * this.itemSize + 2] = e),
        this
      );
    }
    getW(t) {
      let e = this.array[t * this.itemSize + 3];
      return (this.normalized && (e = cs(e, this.array)), e);
    }
    setW(t, e) {
      return (
        this.normalized && (e = Ge(e, this.array)),
        (this.array[t * this.itemSize + 3] = e),
        this
      );
    }
    setXY(t, e, n) {
      return (
        (t *= this.itemSize),
        this.normalized && ((e = Ge(e, this.array)), (n = Ge(n, this.array))),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        this
      );
    }
    setXYZ(t, e, n, s) {
      return (
        (t *= this.itemSize),
        this.normalized &&
          ((e = Ge(e, this.array)),
          (n = Ge(n, this.array)),
          (s = Ge(s, this.array))),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        (this.array[t + 2] = s),
        this
      );
    }
    setXYZW(t, e, n, s, r) {
      return (
        (t *= this.itemSize),
        this.normalized &&
          ((e = Ge(e, this.array)),
          (n = Ge(n, this.array)),
          (s = Ge(s, this.array)),
          (r = Ge(r, this.array))),
        (this.array[t + 0] = e),
        (this.array[t + 1] = n),
        (this.array[t + 2] = s),
        (this.array[t + 3] = r),
        this
      );
    }
    onUpload(t) {
      return ((this.onUploadCallback = t), this);
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      let t = {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: Array.from(this.array),
        normalized: this.normalized,
      };
      return (
        this.name !== "" && (t.name = this.name),
        this.usage !== gl && (t.usage = this.usage),
        t
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
var bs = class extends Be {
  constructor(t, e, n) {
    super(new Uint16Array(t), e, n);
  }
};
var ws = class extends Be {
  constructor(t, e, n) {
    super(new Uint32Array(t), e, n);
  }
};
var ne = class extends Be {
    constructor(t, e, n) {
      super(new Float32Array(t), e, n);
    }
  },
  zd = new jn(),
  ds = new L(),
  Qo = new L(),
  ti = class {
    constructor(t = new L(), e = -1) {
      ((this.isSphere = !0), (this.center = t), (this.radius = e));
    }
    set(t, e) {
      return (this.center.copy(t), (this.radius = e), this);
    }
    setFromPoints(t, e) {
      let n = this.center;
      e !== void 0 ? n.copy(e) : zd.setFromPoints(t).getCenter(n);
      let s = 0;
      for (let r = 0, a = t.length; r < a; r++)
        s = Math.max(s, n.distanceToSquared(t[r]));
      return ((this.radius = Math.sqrt(s)), this);
    }
    copy(t) {
      return (this.center.copy(t.center), (this.radius = t.radius), this);
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return (this.center.set(0, 0, 0), (this.radius = -1), this);
    }
    containsPoint(t) {
      return t.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(t) {
      return t.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(t) {
      let e = this.radius + t.radius;
      return t.center.distanceToSquared(this.center) <= e * e;
    }
    intersectsBox(t) {
      return t.intersectsSphere(this);
    }
    intersectsPlane(t) {
      return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(t, e) {
      let n = this.center.distanceToSquared(t);
      return (
        e.copy(t),
        n > this.radius * this.radius &&
          (e.sub(this.center).normalize(),
          e.multiplyScalar(this.radius).add(this.center)),
        e
      );
    }
    getBoundingBox(t) {
      return this.isEmpty()
        ? (t.makeEmpty(), t)
        : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
    }
    applyMatrix4(t) {
      return (
        this.center.applyMatrix4(t),
        (this.radius = this.radius * t.getMaxScaleOnAxis()),
        this
      );
    }
    translate(t) {
      return (this.center.add(t), this);
    }
    expandByPoint(t) {
      if (this.isEmpty()) return (this.center.copy(t), (this.radius = 0), this);
      ds.subVectors(t, this.center);
      let e = ds.lengthSq();
      if (e > this.radius * this.radius) {
        let n = Math.sqrt(e),
          s = (n - this.radius) * 0.5;
        (this.center.addScaledVector(ds, s / n), (this.radius += s));
      }
      return this;
    }
    union(t) {
      return t.isEmpty()
        ? this
        : this.isEmpty()
          ? (this.copy(t), this)
          : (this.center.equals(t.center) === !0
              ? (this.radius = Math.max(this.radius, t.radius))
              : (Qo.subVectors(t.center, this.center).setLength(t.radius),
                this.expandByPoint(ds.copy(t.center).add(Qo)),
                this.expandByPoint(ds.copy(t.center).sub(Qo))),
            this);
    }
    equals(t) {
      return t.center.equals(this.center) && t.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      return { radius: this.radius, center: this.center.toArray() };
    }
    fromJSON(t) {
      return ((this.radius = t.radius), this.center.fromArray(t.center), this);
    }
  },
  kd = 0,
  je = new he(),
  jo = new Ie(),
  zi = new L(),
  qe = new jn(),
  fs = new jn(),
  Ce = new L(),
  me = class i extends vn {
    constructor() {
      (super(),
        (this.isBufferGeometry = !0),
        Object.defineProperty(this, "id", { value: kd++ }),
        (this.uuid = rs()),
        (this.name = ""),
        (this.type = "BufferGeometry"),
        (this.index = null),
        (this.indirect = null),
        (this.indirectOffset = 0),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.morphTargetsRelative = !1),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null),
        (this.drawRange = { start: 0, count: 1 / 0 }),
        (this.userData = {}),
        (this._transformed = !1));
    }
    getIndex() {
      return this.index;
    }
    setIndex(t) {
      return (
        Array.isArray(t)
          ? (this.index = new (Ed(t) ? ws : bs)(t, 1))
          : (this.index = t),
        this
      );
    }
    setIndirect(t, e = 0) {
      return ((this.indirect = t), (this.indirectOffset = e), this);
    }
    getIndirect() {
      return this.indirect;
    }
    getAttribute(t) {
      return this.attributes[t];
    }
    setAttribute(t, e) {
      return ((this.attributes[t] = e), this);
    }
    deleteAttribute(t) {
      return (delete this.attributes[t], this);
    }
    hasAttribute(t) {
      return this.attributes[t] !== void 0;
    }
    addGroup(t, e, n = 0) {
      this.groups.push({ start: t, count: e, materialIndex: n });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(t, e) {
      ((this.drawRange.start = t), (this.drawRange.count = e));
    }
    applyMatrix4(t) {
      let e = this.attributes.position;
      e !== void 0 && (e.applyMatrix4(t), (e.needsUpdate = !0));
      let n = this.attributes.normal;
      if (n !== void 0) {
        let r = new Ht().getNormalMatrix(t);
        (n.applyNormalMatrix(r), (n.needsUpdate = !0));
      }
      let s = this.attributes.tangent;
      return (
        s !== void 0 && (s.transformDirection(t), (s.needsUpdate = !0)),
        this.boundingBox !== null && this.computeBoundingBox(),
        this.boundingSphere !== null && this.computeBoundingSphere(),
        (this._transformed = !0),
        this
      );
    }
    applyQuaternion(t) {
      return (je.makeRotationFromQuaternion(t), this.applyMatrix4(je), this);
    }
    rotateX(t) {
      return (je.makeRotationX(t), this.applyMatrix4(je), this);
    }
    rotateY(t) {
      return (je.makeRotationY(t), this.applyMatrix4(je), this);
    }
    rotateZ(t) {
      return (je.makeRotationZ(t), this.applyMatrix4(je), this);
    }
    translate(t, e, n) {
      return (je.makeTranslation(t, e, n), this.applyMatrix4(je), this);
    }
    scale(t, e, n) {
      return (je.makeScale(t, e, n), this.applyMatrix4(je), this);
    }
    lookAt(t) {
      return (
        jo.lookAt(t),
        jo.updateMatrix(),
        this.applyMatrix4(jo.matrix),
        this
      );
    }
    center() {
      return (
        this.computeBoundingBox(),
        this.boundingBox.getCenter(zi).negate(),
        this.translate(zi.x, zi.y, zi.z),
        this
      );
    }
    setFromPoints(t) {
      let e = this.getAttribute("position");
      if (e === void 0) {
        let n = [];
        for (let s = 0, r = t.length; s < r; s++) {
          let a = t[s];
          n.push(a.x, a.y, a.z || 0);
        }
        this.setAttribute("position", new ne(n, 3));
      } else {
        let n = Math.min(t.length, e.count);
        for (let s = 0; s < n; s++) {
          let r = t[s];
          e.setXYZ(s, r.x, r.y, r.z || 0);
        }
        (t.length > e.count &&
          Nt(
            "BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.",
          ),
          (e.needsUpdate = !0));
      }
      return this;
    }
    computeBoundingBox() {
      this.boundingBox === null && (this.boundingBox = new jn());
      let t = this.attributes.position,
        e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute) {
        (Ot(
          "BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
          this,
        ),
          this.boundingBox.set(
            new L(-1 / 0, -1 / 0, -1 / 0),
            new L(1 / 0, 1 / 0, 1 / 0),
          ));
        return;
      }
      if (t !== void 0) {
        if ((this.boundingBox.setFromBufferAttribute(t), e))
          for (let n = 0, s = e.length; n < s; n++) {
            let r = e[n];
            (qe.setFromBufferAttribute(r),
              this.morphTargetsRelative
                ? (Ce.addVectors(this.boundingBox.min, qe.min),
                  this.boundingBox.expandByPoint(Ce),
                  Ce.addVectors(this.boundingBox.max, qe.max),
                  this.boundingBox.expandByPoint(Ce))
                : (this.boundingBox.expandByPoint(qe.min),
                  this.boundingBox.expandByPoint(qe.max)));
          }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) ||
        isNaN(this.boundingBox.min.y) ||
        isNaN(this.boundingBox.min.z)) &&
        Ot(
          'BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
          this,
        );
    }
    computeBoundingSphere() {
      this.boundingSphere === null && (this.boundingSphere = new ti());
      let t = this.attributes.position,
        e = this.morphAttributes.position;
      if (t && t.isGLBufferAttribute) {
        (Ot(
          "BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
          this,
        ),
          this.boundingSphere.set(new L(), 1 / 0));
        return;
      }
      if (t) {
        let n = this.boundingSphere.center;
        if ((qe.setFromBufferAttribute(t), e))
          for (let r = 0, a = e.length; r < a; r++) {
            let o = e[r];
            (fs.setFromBufferAttribute(o),
              this.morphTargetsRelative
                ? (Ce.addVectors(qe.min, fs.min),
                  qe.expandByPoint(Ce),
                  Ce.addVectors(qe.max, fs.max),
                  qe.expandByPoint(Ce))
                : (qe.expandByPoint(fs.min), qe.expandByPoint(fs.max)));
          }
        qe.getCenter(n);
        let s = 0;
        for (let r = 0, a = t.count; r < a; r++)
          (Ce.fromBufferAttribute(t, r),
            (s = Math.max(s, n.distanceToSquared(Ce))));
        if (e)
          for (let r = 0, a = e.length; r < a; r++) {
            let o = e[r],
              c = this.morphTargetsRelative;
            for (let l = 0, h = o.count; l < h; l++)
              (Ce.fromBufferAttribute(o, l),
                c && (zi.fromBufferAttribute(t, l), Ce.add(zi)),
                (s = Math.max(s, n.distanceToSquared(Ce))));
          }
        ((this.boundingSphere.radius = Math.sqrt(s)),
          isNaN(this.boundingSphere.radius) &&
            Ot(
              'BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
              this,
            ));
      }
    }
    computeTangents() {
      let t = this.index,
        e = this.attributes;
      if (
        t === null ||
        e.position === void 0 ||
        e.normal === void 0 ||
        e.uv === void 0
      ) {
        Ot(
          "BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)",
        );
        return;
      }
      let n = e.position,
        s = e.normal,
        r = e.uv,
        a = this.getAttribute("tangent");
      (a === void 0 || a.count !== n.count) &&
        ((a = new Be(new Float32Array(4 * n.count), 4)),
        this.setAttribute("tangent", a));
      let o = [],
        c = [];
      for (let _ = 0; _ < n.count; _++) ((o[_] = new L()), (c[_] = new L()));
      let l = new L(),
        h = new L(),
        d = new L(),
        u = new ut(),
        f = new ut(),
        g = new ut(),
        y = new L(),
        m = new L();
      function p(_, S, C) {
        (l.fromBufferAttribute(n, _),
          h.fromBufferAttribute(n, S),
          d.fromBufferAttribute(n, C),
          u.fromBufferAttribute(r, _),
          f.fromBufferAttribute(r, S),
          g.fromBufferAttribute(r, C),
          h.sub(l),
          d.sub(l),
          f.sub(u),
          g.sub(u));
        let I = 1 / (f.x * g.y - g.x * f.y);
        isFinite(I) &&
          (y
            .copy(h)
            .multiplyScalar(g.y)
            .addScaledVector(d, -f.y)
            .multiplyScalar(I),
          m
            .copy(d)
            .multiplyScalar(f.x)
            .addScaledVector(h, -g.x)
            .multiplyScalar(I),
          o[_].add(y),
          o[S].add(y),
          o[C].add(y),
          c[_].add(m),
          c[S].add(m),
          c[C].add(m));
      }
      let b = this.groups;
      b.length === 0 && (b = [{ start: 0, count: t.count }]);
      for (let _ = 0, S = b.length; _ < S; ++_) {
        let C = b[_],
          I = C.start,
          U = C.count;
        for (let Z = I, k = I + U; Z < k; Z += 3)
          p(t.getX(Z + 0), t.getX(Z + 1), t.getX(Z + 2));
      }
      let w = new L(),
        v = new L(),
        A = new L(),
        T = new L();
      function R(_) {
        (A.fromBufferAttribute(s, _), T.copy(A));
        let S = o[_];
        (w.copy(S),
          w.sub(A.multiplyScalar(A.dot(S))).normalize(),
          v.crossVectors(T, S));
        let I = v.dot(c[_]) < 0 ? -1 : 1;
        a.setXYZW(_, w.x, w.y, w.z, I);
      }
      for (let _ = 0, S = b.length; _ < S; ++_) {
        let C = b[_],
          I = C.start,
          U = C.count;
        for (let Z = I, k = I + U; Z < k; Z += 3)
          (R(t.getX(Z + 0)), R(t.getX(Z + 1)), R(t.getX(Z + 2)));
      }
      this._transformed = !0;
    }
    computeVertexNormals() {
      let t = this.index,
        e = this.getAttribute("position");
      if (e !== void 0) {
        let n = this.getAttribute("normal");
        if (n === void 0 || n.count !== e.count)
          ((n = new Be(new Float32Array(e.count * 3), 3)),
            this.setAttribute("normal", n));
        else for (let u = 0, f = n.count; u < f; u++) n.setXYZ(u, 0, 0, 0);
        let s = new L(),
          r = new L(),
          a = new L(),
          o = new L(),
          c = new L(),
          l = new L(),
          h = new L(),
          d = new L();
        if (t)
          for (let u = 0, f = t.count; u < f; u += 3) {
            let g = t.getX(u + 0),
              y = t.getX(u + 1),
              m = t.getX(u + 2);
            (s.fromBufferAttribute(e, g),
              r.fromBufferAttribute(e, y),
              a.fromBufferAttribute(e, m),
              h.subVectors(a, r),
              d.subVectors(s, r),
              h.cross(d),
              o.fromBufferAttribute(n, g),
              c.fromBufferAttribute(n, y),
              l.fromBufferAttribute(n, m),
              o.add(h),
              c.add(h),
              l.add(h),
              n.setXYZ(g, o.x, o.y, o.z),
              n.setXYZ(y, c.x, c.y, c.z),
              n.setXYZ(m, l.x, l.y, l.z));
          }
        else
          for (let u = 0, f = e.count; u < f; u += 3)
            (s.fromBufferAttribute(e, u + 0),
              r.fromBufferAttribute(e, u + 1),
              a.fromBufferAttribute(e, u + 2),
              h.subVectors(a, r),
              d.subVectors(s, r),
              h.cross(d),
              n.setXYZ(u + 0, h.x, h.y, h.z),
              n.setXYZ(u + 1, h.x, h.y, h.z),
              n.setXYZ(u + 2, h.x, h.y, h.z));
        (this.normalizeNormals(), (n.needsUpdate = !0));
      }
    }
    normalizeNormals() {
      let t = this.attributes.normal;
      for (let e = 0, n = t.count; e < n; e++)
        (Ce.fromBufferAttribute(t, e),
          Ce.normalize(),
          t.setXYZ(e, Ce.x, Ce.y, Ce.z));
    }
    toNonIndexed() {
      function t(o, c) {
        let l = o.array,
          h = o.itemSize,
          d = o.normalized,
          u = new l.constructor(c.length * h),
          f = 0,
          g = 0;
        for (let y = 0, m = c.length; y < m; y++) {
          o.isInterleavedBufferAttribute
            ? (f = c[y] * o.data.stride + o.offset)
            : (f = c[y] * h);
          for (let p = 0; p < h; p++) u[g++] = l[f++];
        }
        return new Be(u, h, d);
      }
      if (this.index === null)
        return (
          Nt(
            "BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.",
          ),
          this
        );
      let e = new i(),
        n = this.index.array,
        s = this.attributes;
      for (let o in s) {
        let c = s[o],
          l = t(c, n);
        e.setAttribute(o, l);
      }
      let r = this.morphAttributes;
      for (let o in r) {
        let c = [],
          l = r[o];
        for (let h = 0, d = l.length; h < d; h++) {
          let u = l[h],
            f = t(u, n);
          c.push(f);
        }
        e.morphAttributes[o] = c;
      }
      e.morphTargetsRelative = this.morphTargetsRelative;
      let a = this.groups;
      for (let o = 0, c = a.length; o < c; o++) {
        let l = a[o];
        e.addGroup(l.start, l.count, l.materialIndex);
      }
      return e;
    }
    toJSON() {
      let t = {
        metadata: {
          version: 4.7,
          type: "BufferGeometry",
          generator: "BufferGeometry.toJSON",
        },
      };
      if (
        ((t.uuid = this.uuid),
        (t.type =
          this.parameters !== void 0 && this._transformed === !0
            ? "BufferGeometry"
            : this.type),
        this.name !== "" && (t.name = this.name),
        Object.keys(this.userData).length > 0 && (t.userData = this.userData),
        this.parameters !== void 0 && this._transformed !== !0)
      ) {
        let c = this.parameters;
        for (let l in c) c[l] !== void 0 && (t[l] = c[l]);
        return t;
      }
      t.data = { attributes: {} };
      let e = this.index;
      e !== null &&
        (t.data.index = {
          type: e.array.constructor.name,
          array: Array.prototype.slice.call(e.array),
        });
      let n = this.attributes;
      for (let c in n) {
        let l = n[c];
        t.data.attributes[c] = l.toJSON(t.data);
      }
      let s = {},
        r = !1;
      for (let c in this.morphAttributes) {
        let l = this.morphAttributes[c],
          h = [];
        for (let d = 0, u = l.length; d < u; d++) {
          let f = l[d];
          h.push(f.toJSON(t.data));
        }
        h.length > 0 && ((s[c] = h), (r = !0));
      }
      r &&
        ((t.data.morphAttributes = s),
        (t.data.morphTargetsRelative = this.morphTargetsRelative));
      let a = this.groups;
      a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
      let o = this.boundingSphere;
      return (o !== null && (t.data.boundingSphere = o.toJSON()), t);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      ((this.index = null),
        (this.attributes = {}),
        (this.morphAttributes = {}),
        (this.groups = []),
        (this.boundingBox = null),
        (this.boundingSphere = null));
      let e = {};
      this.name = t.name;
      let n = t.index;
      n !== null && this.setIndex(n.clone());
      let s = t.attributes;
      for (let l in s) {
        let h = s[l];
        this.setAttribute(l, h.clone(e));
      }
      let r = t.morphAttributes;
      for (let l in r) {
        let h = [],
          d = r[l];
        for (let u = 0, f = d.length; u < f; u++) h.push(d[u].clone(e));
        this.morphAttributes[l] = h;
      }
      this.morphTargetsRelative = t.morphTargetsRelative;
      let a = t.groups;
      for (let l = 0, h = a.length; l < h; l++) {
        let d = a[l];
        this.addGroup(d.start, d.count, d.materialIndex);
      }
      let o = t.boundingBox;
      o !== null && (this.boundingBox = o.clone());
      let c = t.boundingSphere;
      return (
        c !== null && (this.boundingSphere = c.clone()),
        (this.drawRange.start = t.drawRange.start),
        (this.drawRange.count = t.drawRange.count),
        (this.userData = t.userData),
        (this._transformed = t._transformed),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
var Vd = 0,
  Sn = class extends vn {
    constructor() {
      (super(),
        (this.isMaterial = !0),
        Object.defineProperty(this, "id", { value: Vd++ }),
        (this.uuid = rs()),
        (this.name = ""),
        (this.type = "Material"),
        (this.blending = xi),
        (this.side = Fn),
        (this.vertexColors = !1),
        (this.opacity = 1),
        (this.transparent = !1),
        (this.alphaHash = !1),
        (this.blendSrc = zr),
        (this.blendDst = kr),
        (this.blendEquation = Qn),
        (this.blendSrcAlpha = null),
        (this.blendDstAlpha = null),
        (this.blendEquationAlpha = null),
        (this.blendColor = new Jt(0, 0, 0)),
        (this.blendAlpha = 0),
        (this.depthFunc = yi),
        (this.depthTest = !0),
        (this.depthWrite = !0),
        (this.stencilWriteMask = 255),
        (this.stencilFunc = ml),
        (this.stencilRef = 0),
        (this.stencilFuncMask = 255),
        (this.stencilFail = gi),
        (this.stencilZFail = gi),
        (this.stencilZPass = gi),
        (this.stencilWrite = !1),
        (this.clippingPlanes = null),
        (this.clipIntersection = !1),
        (this.clipShadows = !1),
        (this.shadowSide = null),
        (this.colorWrite = !0),
        (this.precision = null),
        (this.polygonOffset = !1),
        (this.polygonOffsetFactor = 0),
        (this.polygonOffsetUnits = 0),
        (this.dithering = !1),
        (this.alphaToCoverage = !1),
        (this.premultipliedAlpha = !1),
        (this.forceSinglePass = !1),
        (this.allowOverride = !0),
        (this.visible = !0),
        (this.toneMapped = !0),
        (this.userData = {}),
        (this.version = 0),
        (this._alphaTest = 0));
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(t) {
      (this._alphaTest > 0 != t > 0 && this.version++, (this._alphaTest = t));
    }
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(t) {
      if (t !== void 0)
        for (let e in t) {
          let n = t[e];
          if (n === void 0) {
            Nt(`Material: parameter '${e}' has value of undefined.`);
            continue;
          }
          let s = this[e];
          if (s === void 0) {
            Nt(`Material: '${e}' is not a property of THREE.${this.type}.`);
            continue;
          }
          s && s.isColor
            ? s.set(n)
            : (s && s.isVector2 && n && n.isVector2) ||
                (s && s.isEuler && n && n.isEuler) ||
                (s && s.isVector3 && n && n.isVector3)
              ? s.copy(n)
              : (this[e] = n);
        }
    }
    toJSON(t) {
      let e = t === void 0 || typeof t == "string";
      e && (t = { textures: {}, images: {} });
      let n = {
        metadata: {
          version: 4.7,
          type: "Material",
          generator: "Material.toJSON",
        },
      };
      ((n.uuid = this.uuid),
        (n.type = this.type),
        this.name !== "" && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        this.roughness !== void 0 && (n.roughness = this.roughness),
        this.metalness !== void 0 && (n.metalness = this.metalness),
        this.sheen !== void 0 && (n.sheen = this.sheen),
        this.sheenColor &&
          this.sheenColor.isColor &&
          (n.sheenColor = this.sheenColor.getHex()),
        this.sheenRoughness !== void 0 &&
          (n.sheenRoughness = this.sheenRoughness),
        this.emissive &&
          this.emissive.isColor &&
          (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity !== void 0 &&
          this.emissiveIntensity !== 1 &&
          (n.emissiveIntensity = this.emissiveIntensity),
        this.specular &&
          this.specular.isColor &&
          (n.specular = this.specular.getHex()),
        this.specularIntensity !== void 0 &&
          (n.specularIntensity = this.specularIntensity),
        this.specularColor &&
          this.specularColor.isColor &&
          (n.specularColor = this.specularColor.getHex()),
        this.shininess !== void 0 && (n.shininess = this.shininess),
        this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
        this.clearcoatRoughness !== void 0 &&
          (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap &&
          this.clearcoatMap.isTexture &&
          (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
        this.clearcoatRoughnessMap &&
          this.clearcoatRoughnessMap.isTexture &&
          (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
        this.clearcoatNormalMap &&
          this.clearcoatNormalMap.isTexture &&
          ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid),
          (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
        this.sheenColorMap &&
          this.sheenColorMap.isTexture &&
          (n.sheenColorMap = this.sheenColorMap.toJSON(t).uuid),
        this.sheenRoughnessMap &&
          this.sheenRoughnessMap.isTexture &&
          (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(t).uuid),
        this.dispersion !== void 0 && (n.dispersion = this.dispersion),
        this.iridescence !== void 0 && (n.iridescence = this.iridescence),
        this.iridescenceIOR !== void 0 &&
          (n.iridescenceIOR = this.iridescenceIOR),
        this.iridescenceThicknessRange !== void 0 &&
          (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap &&
          this.iridescenceMap.isTexture &&
          (n.iridescenceMap = this.iridescenceMap.toJSON(t).uuid),
        this.iridescenceThicknessMap &&
          this.iridescenceThicknessMap.isTexture &&
          (n.iridescenceThicknessMap =
            this.iridescenceThicknessMap.toJSON(t).uuid),
        this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
        this.anisotropyRotation !== void 0 &&
          (n.anisotropyRotation = this.anisotropyRotation),
        this.anisotropyMap &&
          this.anisotropyMap.isTexture &&
          (n.anisotropyMap = this.anisotropyMap.toJSON(t).uuid),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
        this.matcap &&
          this.matcap.isTexture &&
          (n.matcap = this.matcap.toJSON(t).uuid),
        this.alphaMap &&
          this.alphaMap.isTexture &&
          (n.alphaMap = this.alphaMap.toJSON(t).uuid),
        this.lightMap &&
          this.lightMap.isTexture &&
          ((n.lightMap = this.lightMap.toJSON(t).uuid),
          (n.lightMapIntensity = this.lightMapIntensity)),
        this.aoMap &&
          this.aoMap.isTexture &&
          ((n.aoMap = this.aoMap.toJSON(t).uuid),
          (n.aoMapIntensity = this.aoMapIntensity)),
        this.bumpMap &&
          this.bumpMap.isTexture &&
          ((n.bumpMap = this.bumpMap.toJSON(t).uuid),
          (n.bumpScale = this.bumpScale)),
        this.normalMap &&
          this.normalMap.isTexture &&
          ((n.normalMap = this.normalMap.toJSON(t).uuid),
          (n.normalMapType = this.normalMapType),
          (n.normalScale = this.normalScale.toArray())),
        this.displacementMap &&
          this.displacementMap.isTexture &&
          ((n.displacementMap = this.displacementMap.toJSON(t).uuid),
          (n.displacementScale = this.displacementScale),
          (n.displacementBias = this.displacementBias)),
        this.roughnessMap &&
          this.roughnessMap.isTexture &&
          (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
        this.metalnessMap &&
          this.metalnessMap.isTexture &&
          (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
        this.emissiveMap &&
          this.emissiveMap.isTexture &&
          (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
        this.specularMap &&
          this.specularMap.isTexture &&
          (n.specularMap = this.specularMap.toJSON(t).uuid),
        this.specularIntensityMap &&
          this.specularIntensityMap.isTexture &&
          (n.specularIntensityMap = this.specularIntensityMap.toJSON(t).uuid),
        this.specularColorMap &&
          this.specularColorMap.isTexture &&
          (n.specularColorMap = this.specularColorMap.toJSON(t).uuid),
        this.envMap &&
          this.envMap.isTexture &&
          ((n.envMap = this.envMap.toJSON(t).uuid),
          this.combine !== void 0 && (n.combine = this.combine)),
        this.envMapRotation !== void 0 &&
          (n.envMapRotation = this.envMapRotation.toArray()),
        this.envMapIntensity !== void 0 &&
          (n.envMapIntensity = this.envMapIntensity),
        this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
        this.refractionRatio !== void 0 &&
          (n.refractionRatio = this.refractionRatio),
        this.gradientMap &&
          this.gradientMap.isTexture &&
          (n.gradientMap = this.gradientMap.toJSON(t).uuid),
        this.transmission !== void 0 && (n.transmission = this.transmission),
        this.transmissionMap &&
          this.transmissionMap.isTexture &&
          (n.transmissionMap = this.transmissionMap.toJSON(t).uuid),
        this.thickness !== void 0 && (n.thickness = this.thickness),
        this.thicknessMap &&
          this.thicknessMap.isTexture &&
          (n.thicknessMap = this.thicknessMap.toJSON(t).uuid),
        this.attenuationDistance !== void 0 &&
          this.attenuationDistance !== 1 / 0 &&
          (n.attenuationDistance = this.attenuationDistance),
        this.attenuationColor !== void 0 &&
          (n.attenuationColor = this.attenuationColor.getHex()),
        this.size !== void 0 && (n.size = this.size),
        this.shadowSide !== null && (n.shadowSide = this.shadowSide),
        this.sizeAttenuation !== void 0 &&
          (n.sizeAttenuation = this.sizeAttenuation),
        this.blending !== xi && (n.blending = this.blending),
        this.side !== Fn && (n.side = this.side),
        this.vertexColors === !0 && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        this.transparent === !0 && (n.transparent = !0),
        this.blendSrc !== zr && (n.blendSrc = this.blendSrc),
        this.blendDst !== kr && (n.blendDst = this.blendDst),
        this.blendEquation !== Qn && (n.blendEquation = this.blendEquation),
        this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
        this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
        this.blendEquationAlpha !== null &&
          (n.blendEquationAlpha = this.blendEquationAlpha),
        this.blendColor &&
          this.blendColor.isColor &&
          (n.blendColor = this.blendColor.getHex()),
        this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
        this.depthFunc !== yi && (n.depthFunc = this.depthFunc),
        this.depthTest === !1 && (n.depthTest = this.depthTest),
        this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
        this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
        this.stencilWriteMask !== 255 &&
          (n.stencilWriteMask = this.stencilWriteMask),
        this.stencilFunc !== ml && (n.stencilFunc = this.stencilFunc),
        this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
        this.stencilFuncMask !== 255 &&
          (n.stencilFuncMask = this.stencilFuncMask),
        this.stencilFail !== gi && (n.stencilFail = this.stencilFail),
        this.stencilZFail !== gi && (n.stencilZFail = this.stencilZFail),
        this.stencilZPass !== gi && (n.stencilZPass = this.stencilZPass),
        this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
        this.rotation !== void 0 &&
          this.rotation !== 0 &&
          (n.rotation = this.rotation),
        this.polygonOffset === !0 && (n.polygonOffset = !0),
        this.polygonOffsetFactor !== 0 &&
          (n.polygonOffsetFactor = this.polygonOffsetFactor),
        this.polygonOffsetUnits !== 0 &&
          (n.polygonOffsetUnits = this.polygonOffsetUnits),
        this.linewidth !== void 0 &&
          this.linewidth !== 1 &&
          (n.linewidth = this.linewidth),
        this.dashSize !== void 0 && (n.dashSize = this.dashSize),
        this.gapSize !== void 0 && (n.gapSize = this.gapSize),
        this.scale !== void 0 && (n.scale = this.scale),
        this.dithering === !0 && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        this.alphaHash === !0 && (n.alphaHash = !0),
        this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
        this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
        this.forceSinglePass === !0 && (n.forceSinglePass = !0),
        this.allowOverride === !1 && (n.allowOverride = !1),
        this.wireframe === !0 && (n.wireframe = !0),
        this.wireframeLinewidth > 1 &&
          (n.wireframeLinewidth = this.wireframeLinewidth),
        this.wireframeLinecap !== "round" &&
          (n.wireframeLinecap = this.wireframeLinecap),
        this.wireframeLinejoin !== "round" &&
          (n.wireframeLinejoin = this.wireframeLinejoin),
        this.flatShading === !0 && (n.flatShading = !0),
        this.visible === !1 && (n.visible = !1),
        this.toneMapped === !1 && (n.toneMapped = !1),
        this.fog === !1 && (n.fog = !1),
        Object.keys(this.userData).length > 0 && (n.userData = this.userData));
      function s(r) {
        let a = [];
        for (let o in r) {
          let c = r[o];
          (delete c.metadata, a.push(c));
        }
        return a;
      }
      if (e) {
        let r = s(t.textures),
          a = s(t.images);
        (r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a));
      }
      return n;
    }
    fromJSON(t, e) {
      if (
        (t.uuid !== void 0 && (this.uuid = t.uuid),
        t.name !== void 0 && (this.name = t.name),
        t.color !== void 0 &&
          this.color !== void 0 &&
          this.color.setHex(t.color),
        t.roughness !== void 0 && (this.roughness = t.roughness),
        t.metalness !== void 0 && (this.metalness = t.metalness),
        t.sheen !== void 0 && (this.sheen = t.sheen),
        t.sheenColor !== void 0 &&
          (this.sheenColor = new Jt().setHex(t.sheenColor)),
        t.sheenRoughness !== void 0 && (this.sheenRoughness = t.sheenRoughness),
        t.emissive !== void 0 &&
          this.emissive !== void 0 &&
          this.emissive.setHex(t.emissive),
        t.specular !== void 0 &&
          this.specular !== void 0 &&
          this.specular.setHex(t.specular),
        t.specularIntensity !== void 0 &&
          (this.specularIntensity = t.specularIntensity),
        t.specularColor !== void 0 &&
          this.specularColor !== void 0 &&
          this.specularColor.setHex(t.specularColor),
        t.shininess !== void 0 && (this.shininess = t.shininess),
        t.clearcoat !== void 0 && (this.clearcoat = t.clearcoat),
        t.clearcoatRoughness !== void 0 &&
          (this.clearcoatRoughness = t.clearcoatRoughness),
        t.dispersion !== void 0 && (this.dispersion = t.dispersion),
        t.iridescence !== void 0 && (this.iridescence = t.iridescence),
        t.iridescenceIOR !== void 0 && (this.iridescenceIOR = t.iridescenceIOR),
        t.iridescenceThicknessRange !== void 0 &&
          (this.iridescenceThicknessRange = t.iridescenceThicknessRange),
        t.transmission !== void 0 && (this.transmission = t.transmission),
        t.thickness !== void 0 && (this.thickness = t.thickness),
        t.attenuationDistance !== void 0 &&
          (this.attenuationDistance = t.attenuationDistance),
        t.attenuationColor !== void 0 &&
          this.attenuationColor !== void 0 &&
          this.attenuationColor.setHex(t.attenuationColor),
        t.anisotropy !== void 0 && (this.anisotropy = t.anisotropy),
        t.anisotropyRotation !== void 0 &&
          (this.anisotropyRotation = t.anisotropyRotation),
        t.fog !== void 0 && (this.fog = t.fog),
        t.flatShading !== void 0 && (this.flatShading = t.flatShading),
        t.blending !== void 0 && (this.blending = t.blending),
        t.combine !== void 0 && (this.combine = t.combine),
        t.side !== void 0 && (this.side = t.side),
        t.shadowSide !== void 0 && (this.shadowSide = t.shadowSide),
        t.opacity !== void 0 && (this.opacity = t.opacity),
        t.transparent !== void 0 && (this.transparent = t.transparent),
        t.alphaTest !== void 0 && (this.alphaTest = t.alphaTest),
        t.alphaHash !== void 0 && (this.alphaHash = t.alphaHash),
        t.depthFunc !== void 0 && (this.depthFunc = t.depthFunc),
        t.depthTest !== void 0 && (this.depthTest = t.depthTest),
        t.depthWrite !== void 0 && (this.depthWrite = t.depthWrite),
        t.colorWrite !== void 0 && (this.colorWrite = t.colorWrite),
        t.blendSrc !== void 0 && (this.blendSrc = t.blendSrc),
        t.blendDst !== void 0 && (this.blendDst = t.blendDst),
        t.blendEquation !== void 0 && (this.blendEquation = t.blendEquation),
        t.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = t.blendSrcAlpha),
        t.blendDstAlpha !== void 0 && (this.blendDstAlpha = t.blendDstAlpha),
        t.blendEquationAlpha !== void 0 &&
          (this.blendEquationAlpha = t.blendEquationAlpha),
        t.blendColor !== void 0 &&
          this.blendColor !== void 0 &&
          this.blendColor.setHex(t.blendColor),
        t.blendAlpha !== void 0 && (this.blendAlpha = t.blendAlpha),
        t.stencilWriteMask !== void 0 &&
          (this.stencilWriteMask = t.stencilWriteMask),
        t.stencilFunc !== void 0 && (this.stencilFunc = t.stencilFunc),
        t.stencilRef !== void 0 && (this.stencilRef = t.stencilRef),
        t.stencilFuncMask !== void 0 &&
          (this.stencilFuncMask = t.stencilFuncMask),
        t.stencilFail !== void 0 && (this.stencilFail = t.stencilFail),
        t.stencilZFail !== void 0 && (this.stencilZFail = t.stencilZFail),
        t.stencilZPass !== void 0 && (this.stencilZPass = t.stencilZPass),
        t.stencilWrite !== void 0 && (this.stencilWrite = t.stencilWrite),
        t.wireframe !== void 0 && (this.wireframe = t.wireframe),
        t.wireframeLinewidth !== void 0 &&
          (this.wireframeLinewidth = t.wireframeLinewidth),
        t.wireframeLinecap !== void 0 &&
          (this.wireframeLinecap = t.wireframeLinecap),
        t.wireframeLinejoin !== void 0 &&
          (this.wireframeLinejoin = t.wireframeLinejoin),
        t.rotation !== void 0 && (this.rotation = t.rotation),
        t.linewidth !== void 0 && (this.linewidth = t.linewidth),
        t.dashSize !== void 0 && (this.dashSize = t.dashSize),
        t.gapSize !== void 0 && (this.gapSize = t.gapSize),
        t.scale !== void 0 && (this.scale = t.scale),
        t.polygonOffset !== void 0 && (this.polygonOffset = t.polygonOffset),
        t.polygonOffsetFactor !== void 0 &&
          (this.polygonOffsetFactor = t.polygonOffsetFactor),
        t.polygonOffsetUnits !== void 0 &&
          (this.polygonOffsetUnits = t.polygonOffsetUnits),
        t.dithering !== void 0 && (this.dithering = t.dithering),
        t.alphaToCoverage !== void 0 &&
          (this.alphaToCoverage = t.alphaToCoverage),
        t.premultipliedAlpha !== void 0 &&
          (this.premultipliedAlpha = t.premultipliedAlpha),
        t.forceSinglePass !== void 0 &&
          (this.forceSinglePass = t.forceSinglePass),
        t.allowOverride !== void 0 && (this.allowOverride = t.allowOverride),
        t.visible !== void 0 && (this.visible = t.visible),
        t.toneMapped !== void 0 && (this.toneMapped = t.toneMapped),
        t.userData !== void 0 && (this.userData = t.userData),
        t.vertexColors !== void 0 &&
          (typeof t.vertexColors == "number"
            ? (this.vertexColors = t.vertexColors > 0)
            : (this.vertexColors = t.vertexColors)),
        t.size !== void 0 && (this.size = t.size),
        t.sizeAttenuation !== void 0 &&
          (this.sizeAttenuation = t.sizeAttenuation),
        t.map !== void 0 && (this.map = e[t.map] || null),
        t.matcap !== void 0 && (this.matcap = e[t.matcap] || null),
        t.alphaMap !== void 0 && (this.alphaMap = e[t.alphaMap] || null),
        t.bumpMap !== void 0 && (this.bumpMap = e[t.bumpMap] || null),
        t.bumpScale !== void 0 && (this.bumpScale = t.bumpScale),
        t.normalMap !== void 0 && (this.normalMap = e[t.normalMap] || null),
        t.normalMapType !== void 0 && (this.normalMapType = t.normalMapType),
        t.normalScale !== void 0)
      ) {
        let n = t.normalScale;
        (Array.isArray(n) === !1 && (n = [n, n]),
          (this.normalScale = new ut().fromArray(n)));
      }
      return (
        t.displacementMap !== void 0 &&
          (this.displacementMap = e[t.displacementMap] || null),
        t.displacementScale !== void 0 &&
          (this.displacementScale = t.displacementScale),
        t.displacementBias !== void 0 &&
          (this.displacementBias = t.displacementBias),
        t.roughnessMap !== void 0 &&
          (this.roughnessMap = e[t.roughnessMap] || null),
        t.metalnessMap !== void 0 &&
          (this.metalnessMap = e[t.metalnessMap] || null),
        t.emissiveMap !== void 0 &&
          (this.emissiveMap = e[t.emissiveMap] || null),
        t.emissiveIntensity !== void 0 &&
          (this.emissiveIntensity = t.emissiveIntensity),
        t.specularMap !== void 0 &&
          (this.specularMap = e[t.specularMap] || null),
        t.specularIntensityMap !== void 0 &&
          (this.specularIntensityMap = e[t.specularIntensityMap] || null),
        t.specularColorMap !== void 0 &&
          (this.specularColorMap = e[t.specularColorMap] || null),
        t.envMap !== void 0 && (this.envMap = e[t.envMap] || null),
        t.envMapRotation !== void 0 &&
          this.envMapRotation.fromArray(t.envMapRotation),
        t.envMapIntensity !== void 0 &&
          (this.envMapIntensity = t.envMapIntensity),
        t.reflectivity !== void 0 && (this.reflectivity = t.reflectivity),
        t.refractionRatio !== void 0 &&
          (this.refractionRatio = t.refractionRatio),
        t.lightMap !== void 0 && (this.lightMap = e[t.lightMap] || null),
        t.lightMapIntensity !== void 0 &&
          (this.lightMapIntensity = t.lightMapIntensity),
        t.aoMap !== void 0 && (this.aoMap = e[t.aoMap] || null),
        t.aoMapIntensity !== void 0 && (this.aoMapIntensity = t.aoMapIntensity),
        t.gradientMap !== void 0 &&
          (this.gradientMap = e[t.gradientMap] || null),
        t.clearcoatMap !== void 0 &&
          (this.clearcoatMap = e[t.clearcoatMap] || null),
        t.clearcoatRoughnessMap !== void 0 &&
          (this.clearcoatRoughnessMap = e[t.clearcoatRoughnessMap] || null),
        t.clearcoatNormalMap !== void 0 &&
          (this.clearcoatNormalMap = e[t.clearcoatNormalMap] || null),
        t.clearcoatNormalScale !== void 0 &&
          (this.clearcoatNormalScale = new ut().fromArray(
            t.clearcoatNormalScale,
          )),
        t.iridescenceMap !== void 0 &&
          (this.iridescenceMap = e[t.iridescenceMap] || null),
        t.iridescenceThicknessMap !== void 0 &&
          (this.iridescenceThicknessMap = e[t.iridescenceThicknessMap] || null),
        t.transmissionMap !== void 0 &&
          (this.transmissionMap = e[t.transmissionMap] || null),
        t.thicknessMap !== void 0 &&
          (this.thicknessMap = e[t.thicknessMap] || null),
        t.anisotropyMap !== void 0 &&
          (this.anisotropyMap = e[t.anisotropyMap] || null),
        t.sheenColorMap !== void 0 &&
          (this.sheenColorMap = e[t.sheenColorMap] || null),
        t.sheenRoughnessMap !== void 0 &&
          (this.sheenRoughnessMap = e[t.sheenRoughnessMap] || null),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      ((this.name = t.name),
        (this.blending = t.blending),
        (this.side = t.side),
        (this.vertexColors = t.vertexColors),
        (this.opacity = t.opacity),
        (this.transparent = t.transparent),
        (this.blendSrc = t.blendSrc),
        (this.blendDst = t.blendDst),
        (this.blendEquation = t.blendEquation),
        (this.blendSrcAlpha = t.blendSrcAlpha),
        (this.blendDstAlpha = t.blendDstAlpha),
        (this.blendEquationAlpha = t.blendEquationAlpha),
        this.blendColor.copy(t.blendColor),
        (this.blendAlpha = t.blendAlpha),
        (this.depthFunc = t.depthFunc),
        (this.depthTest = t.depthTest),
        (this.depthWrite = t.depthWrite),
        (this.stencilWriteMask = t.stencilWriteMask),
        (this.stencilFunc = t.stencilFunc),
        (this.stencilRef = t.stencilRef),
        (this.stencilFuncMask = t.stencilFuncMask),
        (this.stencilFail = t.stencilFail),
        (this.stencilZFail = t.stencilZFail),
        (this.stencilZPass = t.stencilZPass),
        (this.stencilWrite = t.stencilWrite));
      let e = t.clippingPlanes,
        n = null;
      if (e !== null) {
        let s = e.length;
        n = new Array(s);
        for (let r = 0; r !== s; ++r) n[r] = e[r].clone();
      }
      return (
        (this.clippingPlanes = n),
        (this.clipIntersection = t.clipIntersection),
        (this.clipShadows = t.clipShadows),
        (this.shadowSide = t.shadowSide),
        (this.colorWrite = t.colorWrite),
        (this.precision = t.precision),
        (this.polygonOffset = t.polygonOffset),
        (this.polygonOffsetFactor = t.polygonOffsetFactor),
        (this.polygonOffsetUnits = t.polygonOffsetUnits),
        (this.dithering = t.dithering),
        (this.alphaTest = t.alphaTest),
        (this.alphaHash = t.alphaHash),
        (this.alphaToCoverage = t.alphaToCoverage),
        (this.premultipliedAlpha = t.premultipliedAlpha),
        (this.forceSinglePass = t.forceSinglePass),
        (this.allowOverride = t.allowOverride),
        (this.visible = t.visible),
        (this.toneMapped = t.toneMapped),
        (this.userData = JSON.parse(JSON.stringify(t.userData))),
        this
      );
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(t) {
      t === !0 && this.version++;
    }
  };
var Dn = new L(),
  tl = new L(),
  pr = new L(),
  $n = new L(),
  el = new L(),
  mr = new L(),
  nl = new L(),
  vi = class {
    constructor(t = new L(), e = new L(0, 0, -1)) {
      ((this.origin = t), (this.direction = e));
    }
    set(t, e) {
      return (this.origin.copy(t), this.direction.copy(e), this);
    }
    copy(t) {
      return (
        this.origin.copy(t.origin),
        this.direction.copy(t.direction),
        this
      );
    }
    at(t, e) {
      return e.copy(this.origin).addScaledVector(this.direction, t);
    }
    lookAt(t) {
      return (this.direction.copy(t).sub(this.origin).normalize(), this);
    }
    recast(t) {
      return (this.origin.copy(this.at(t, Dn)), this);
    }
    closestPointToPoint(t, e) {
      e.subVectors(t, this.origin);
      let n = e.dot(this.direction);
      return n < 0
        ? e.copy(this.origin)
        : e.copy(this.origin).addScaledVector(this.direction, n);
    }
    distanceToPoint(t) {
      return Math.sqrt(this.distanceSqToPoint(t));
    }
    distanceSqToPoint(t) {
      let e = Dn.subVectors(t, this.origin).dot(this.direction);
      return e < 0
        ? this.origin.distanceToSquared(t)
        : (Dn.copy(this.origin).addScaledVector(this.direction, e),
          Dn.distanceToSquared(t));
    }
    distanceSqToSegment(t, e, n, s) {
      (tl.copy(t).add(e).multiplyScalar(0.5),
        pr.copy(e).sub(t).normalize(),
        $n.copy(this.origin).sub(tl));
      let r = t.distanceTo(e) * 0.5,
        a = -this.direction.dot(pr),
        o = $n.dot(this.direction),
        c = -$n.dot(pr),
        l = $n.lengthSq(),
        h = Math.abs(1 - a * a),
        d,
        u,
        f,
        g;
      if (h > 0)
        if (((d = a * c - o), (u = a * o - c), (g = r * h), d >= 0))
          if (u >= -g)
            if (u <= g) {
              let y = 1 / h;
              ((d *= y),
                (u *= y),
                (f = d * (d + a * u + 2 * o) + u * (a * d + u + 2 * c) + l));
            } else
              ((u = r),
                (d = Math.max(0, -(a * u + o))),
                (f = -d * d + u * (u + 2 * c) + l));
          else
            ((u = -r),
              (d = Math.max(0, -(a * u + o))),
              (f = -d * d + u * (u + 2 * c) + l));
        else
          u <= -g
            ? ((d = Math.max(0, -(-a * r + o))),
              (u = d > 0 ? -r : Math.min(Math.max(-r, -c), r)),
              (f = -d * d + u * (u + 2 * c) + l))
            : u <= g
              ? ((d = 0),
                (u = Math.min(Math.max(-r, -c), r)),
                (f = u * (u + 2 * c) + l))
              : ((d = Math.max(0, -(a * r + o))),
                (u = d > 0 ? r : Math.min(Math.max(-r, -c), r)),
                (f = -d * d + u * (u + 2 * c) + l));
      else
        ((u = a > 0 ? -r : r),
          (d = Math.max(0, -(a * u + o))),
          (f = -d * d + u * (u + 2 * c) + l));
      return (
        n && n.copy(this.origin).addScaledVector(this.direction, d),
        s && s.copy(tl).addScaledVector(pr, u),
        f
      );
    }
    intersectSphere(t, e) {
      Dn.subVectors(t.center, this.origin);
      let n = Dn.dot(this.direction),
        s = Dn.dot(Dn) - n * n,
        r = t.radius * t.radius;
      if (s > r) return null;
      let a = Math.sqrt(r - s),
        o = n - a,
        c = n + a;
      return c < 0 ? null : o < 0 ? this.at(c, e) : this.at(o, e);
    }
    intersectsSphere(t) {
      return t.radius < 0
        ? !1
        : this.distanceSqToPoint(t.center) <= t.radius * t.radius;
    }
    distanceToPlane(t) {
      let e = t.normal.dot(this.direction);
      if (e === 0) return t.distanceToPoint(this.origin) === 0 ? 0 : null;
      let n = -(this.origin.dot(t.normal) + t.constant) / e;
      return n >= 0 ? n : null;
    }
    intersectPlane(t, e) {
      let n = this.distanceToPlane(t);
      return n === null ? null : this.at(n, e);
    }
    intersectsPlane(t) {
      let e = t.distanceToPoint(this.origin);
      return e === 0 || t.normal.dot(this.direction) * e < 0;
    }
    intersectBox(t, e) {
      let n,
        s,
        r,
        a,
        o,
        c,
        l = 1 / this.direction.x,
        h = 1 / this.direction.y,
        d = 1 / this.direction.z,
        u = this.origin;
      return (
        l >= 0
          ? ((n = (t.min.x - u.x) * l), (s = (t.max.x - u.x) * l))
          : ((n = (t.max.x - u.x) * l), (s = (t.min.x - u.x) * l)),
        h >= 0
          ? ((r = (t.min.y - u.y) * h), (a = (t.max.y - u.y) * h))
          : ((r = (t.max.y - u.y) * h), (a = (t.min.y - u.y) * h)),
        n > a ||
        r > s ||
        ((r > n || isNaN(n)) && (n = r),
        (a < s || isNaN(s)) && (s = a),
        d >= 0
          ? ((o = (t.min.z - u.z) * d), (c = (t.max.z - u.z) * d))
          : ((o = (t.max.z - u.z) * d), (c = (t.min.z - u.z) * d)),
        n > c || o > s) ||
        ((o > n || n !== n) && (n = o), (c < s || s !== s) && (s = c), s < 0)
          ? null
          : this.at(n >= 0 ? n : s, e)
      );
    }
    intersectsBox(t) {
      return this.intersectBox(t, Dn) !== null;
    }
    intersectTriangle(t, e, n, s, r) {
      (el.subVectors(e, t), mr.subVectors(n, t), nl.crossVectors(el, mr));
      let a = this.direction.dot(nl),
        o;
      if (a > 0) {
        if (s) return null;
        o = 1;
      } else if (a < 0) ((o = -1), (a = -a));
      else return null;
      $n.subVectors(this.origin, t);
      let c = o * this.direction.dot(mr.crossVectors($n, mr));
      if (c < 0) return null;
      let l = o * this.direction.dot(el.cross($n));
      if (l < 0 || c + l > a) return null;
      let h = -o * $n.dot(nl);
      return h < 0 ? null : this.at(h / a, r);
    }
    applyMatrix4(t) {
      return (
        this.origin.applyMatrix4(t),
        this.direction.transformDirection(t),
        this
      );
    }
    equals(t) {
      return t.origin.equals(this.origin) && t.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  },
  an = class extends Sn {
    constructor(t) {
      (super(),
        (this.isMeshBasicMaterial = !0),
        (this.type = "MeshBasicMaterial"),
        (this.color = new Jt(16777215)),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.specularMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.envMapRotation = new On()),
        (this.combine = Wl),
        (this.reflectivity = 1),
        (this.refractionRatio = 0.98),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.fog = !0),
        this.setValues(t));
    }
    copy(t) {
      return (
        super.copy(t),
        this.color.copy(t.color),
        (this.map = t.map),
        (this.lightMap = t.lightMap),
        (this.lightMapIntensity = t.lightMapIntensity),
        (this.aoMap = t.aoMap),
        (this.aoMapIntensity = t.aoMapIntensity),
        (this.specularMap = t.specularMap),
        (this.alphaMap = t.alphaMap),
        (this.envMap = t.envMap),
        this.envMapRotation.copy(t.envMapRotation),
        (this.combine = t.combine),
        (this.reflectivity = t.reflectivity),
        (this.refractionRatio = t.refractionRatio),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.wireframeLinecap = t.wireframeLinecap),
        (this.wireframeLinejoin = t.wireframeLinejoin),
        (this.fog = t.fog),
        this
      );
    }
  },
  fh = new he(),
  pi = new vi(),
  gr = new ti(),
  ph = new L(),
  _r = new L(),
  xr = new L(),
  yr = new L(),
  il = new L(),
  vr = new L(),
  mh = new L(),
  Mr = new L(),
  fe = class extends Ie {
    constructor(t = new me(), e = new an()) {
      (super(),
        (this.isMesh = !0),
        (this.type = "Mesh"),
        (this.geometry = t),
        (this.material = e),
        (this.morphTargetDictionary = void 0),
        (this.morphTargetInfluences = void 0),
        (this.count = 1),
        this.updateMorphTargets());
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        t.morphTargetInfluences !== void 0 &&
          (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
        t.morphTargetDictionary !== void 0 &&
          (this.morphTargetDictionary = Object.assign(
            {},
            t.morphTargetDictionary,
          )),
        (this.material = Array.isArray(t.material)
          ? t.material.slice()
          : t.material),
        (this.geometry = t.geometry),
        this
      );
    }
    updateMorphTargets() {
      let e = this.geometry.morphAttributes,
        n = Object.keys(e);
      if (n.length > 0) {
        let s = e[n[0]];
        if (s !== void 0) {
          ((this.morphTargetInfluences = []),
            (this.morphTargetDictionary = {}));
          for (let r = 0, a = s.length; r < a; r++) {
            let o = s[r].name || String(r);
            (this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[o] = r));
          }
        }
      }
    }
    getVertexPosition(t, e) {
      let n = this.geometry,
        s = n.attributes.position,
        r = n.morphAttributes.position,
        a = n.morphTargetsRelative;
      e.fromBufferAttribute(s, t);
      let o = this.morphTargetInfluences;
      if (r && o) {
        vr.set(0, 0, 0);
        for (let c = 0, l = r.length; c < l; c++) {
          let h = o[c],
            d = r[c];
          h !== 0 &&
            (il.fromBufferAttribute(d, t),
            a ? vr.addScaledVector(il, h) : vr.addScaledVector(il.sub(e), h));
        }
        e.add(vr);
      }
      return e;
    }
    raycast(t, e) {
      let n = this.geometry,
        s = this.material,
        r = this.matrixWorld;
      s !== void 0 &&
        (n.boundingSphere === null && n.computeBoundingSphere(),
        gr.copy(n.boundingSphere),
        gr.applyMatrix4(r),
        pi.copy(t.ray).recast(t.near),
        !(
          gr.containsPoint(pi.origin) === !1 &&
          (pi.intersectSphere(gr, ph) === null ||
            pi.origin.distanceToSquared(ph) > (t.far - t.near) ** 2)
        ) &&
          (fh.copy(r).invert(),
          pi.copy(t.ray).applyMatrix4(fh),
          !(n.boundingBox !== null && pi.intersectsBox(n.boundingBox) === !1) &&
            this._computeIntersections(t, e, pi)));
    }
    _computeIntersections(t, e, n) {
      let s,
        r = this.geometry,
        a = this.material,
        o = r.index,
        c = r.attributes.position,
        l = r.attributes.uv,
        h = r.attributes.uv1,
        d = r.attributes.normal,
        u = r.groups,
        f = r.drawRange;
      if (o !== null)
        if (Array.isArray(a))
          for (let g = 0, y = u.length; g < y; g++) {
            let m = u[g],
              p = a[m.materialIndex],
              b = Math.max(m.start, f.start),
              w = Math.min(
                o.count,
                Math.min(m.start + m.count, f.start + f.count),
              );
            for (let v = b, A = w; v < A; v += 3) {
              let T = o.getX(v),
                R = o.getX(v + 1),
                _ = o.getX(v + 2);
              ((s = Sr(this, p, t, n, l, h, d, T, R, _)),
                s &&
                  ((s.faceIndex = Math.floor(v / 3)),
                  (s.face.materialIndex = m.materialIndex),
                  e.push(s)));
            }
          }
        else {
          let g = Math.max(0, f.start),
            y = Math.min(o.count, f.start + f.count);
          for (let m = g, p = y; m < p; m += 3) {
            let b = o.getX(m),
              w = o.getX(m + 1),
              v = o.getX(m + 2);
            ((s = Sr(this, a, t, n, l, h, d, b, w, v)),
              s && ((s.faceIndex = Math.floor(m / 3)), e.push(s)));
          }
        }
      else if (c !== void 0)
        if (Array.isArray(a))
          for (let g = 0, y = u.length; g < y; g++) {
            let m = u[g],
              p = a[m.materialIndex],
              b = Math.max(m.start, f.start),
              w = Math.min(
                c.count,
                Math.min(m.start + m.count, f.start + f.count),
              );
            for (let v = b, A = w; v < A; v += 3) {
              let T = v,
                R = v + 1,
                _ = v + 2;
              ((s = Sr(this, p, t, n, l, h, d, T, R, _)),
                s &&
                  ((s.faceIndex = Math.floor(v / 3)),
                  (s.face.materialIndex = m.materialIndex),
                  e.push(s)));
            }
          }
        else {
          let g = Math.max(0, f.start),
            y = Math.min(c.count, f.start + f.count);
          for (let m = g, p = y; m < p; m += 3) {
            let b = m,
              w = m + 1,
              v = m + 2;
            ((s = Sr(this, a, t, n, l, h, d, b, w, v)),
              s && ((s.faceIndex = Math.floor(m / 3)), e.push(s)));
          }
        }
    }
  };
function Gd(i, t, e, n, s, r, a, o) {
  let c;
  if (
    (t.side === Ve
      ? (c = n.intersectTriangle(a, r, s, !0, o))
      : (c = n.intersectTriangle(s, r, a, t.side === Fn, o)),
    c === null)
  )
    return null;
  (Mr.copy(o), Mr.applyMatrix4(i.matrixWorld));
  let l = e.ray.origin.distanceTo(Mr);
  return l < e.near || l > e.far
    ? null
    : { distance: l, point: Mr.clone(), object: i };
}
function Sr(i, t, e, n, s, r, a, o, c, l) {
  (i.getVertexPosition(o, _r),
    i.getVertexPosition(c, xr),
    i.getVertexPosition(l, yr));
  let h = Gd(i, t, e, n, _r, xr, yr, mh);
  if (h) {
    let d = new L();
    (Nn.getBarycoord(mh, _r, xr, yr, d),
      s && (h.uv = Nn.getInterpolatedAttribute(s, o, c, l, d, new ut())),
      r && (h.uv1 = Nn.getInterpolatedAttribute(r, o, c, l, d, new ut())),
      a &&
        ((h.normal = Nn.getInterpolatedAttribute(a, o, c, l, d, new L())),
        h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1)));
    let u = { a: o, b: c, c: l, normal: new L(), materialIndex: 0 };
    (Nn.getNormal(_r, xr, yr, u.normal), (h.face = u), (h.barycoord = d));
  }
  return h;
}
var ta = class extends De {
  constructor(t = null, e = 1, n = 1, s, r, a, o, c, l = Re, h = Re, d, u) {
    (super(null, a, o, c, l, h, s, r, d, u),
      (this.isDataTexture = !0),
      (this.image = { data: t, width: e, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
};
var sl = new L(),
  Hd = new L(),
  Wd = new Ht(),
  mn = class {
    constructor(t = new L(1, 0, 0), e = 0) {
      ((this.isPlane = !0), (this.normal = t), (this.constant = e));
    }
    set(t, e) {
      return (this.normal.copy(t), (this.constant = e), this);
    }
    setComponents(t, e, n, s) {
      return (this.normal.set(t, e, n), (this.constant = s), this);
    }
    setFromNormalAndCoplanarPoint(t, e) {
      return (this.normal.copy(t), (this.constant = -e.dot(this.normal)), this);
    }
    setFromCoplanarPoints(t, e, n) {
      let s = sl.subVectors(n, e).cross(Hd.subVectors(t, e)).normalize();
      return (this.setFromNormalAndCoplanarPoint(s, t), this);
    }
    copy(t) {
      return (this.normal.copy(t.normal), (this.constant = t.constant), this);
    }
    normalize() {
      let t = 1 / this.normal.length();
      return (this.normal.multiplyScalar(t), (this.constant *= t), this);
    }
    negate() {
      return ((this.constant *= -1), this.normal.negate(), this);
    }
    distanceToPoint(t) {
      return this.normal.dot(t) + this.constant;
    }
    distanceToSphere(t) {
      return this.distanceToPoint(t.center) - t.radius;
    }
    projectPoint(t, e) {
      return e.copy(t).addScaledVector(this.normal, -this.distanceToPoint(t));
    }
    intersectLine(t, e, n = !0) {
      let s = t.delta(sl),
        r = this.normal.dot(s);
      if (r === 0)
        return this.distanceToPoint(t.start) === 0 ? e.copy(t.start) : null;
      let a = -(t.start.dot(this.normal) + this.constant) / r;
      return n === !0 && (a < 0 || a > 1)
        ? null
        : e.copy(t.start).addScaledVector(s, a);
    }
    intersectsLine(t) {
      let e = this.distanceToPoint(t.start),
        n = this.distanceToPoint(t.end);
      return (e < 0 && n > 0) || (n < 0 && e > 0);
    }
    intersectsBox(t) {
      return t.intersectsPlane(this);
    }
    intersectsSphere(t) {
      return t.intersectsPlane(this);
    }
    coplanarPoint(t) {
      return t.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(t, e) {
      let n = e || Wd.getNormalMatrix(t),
        s = this.coplanarPoint(sl).applyMatrix4(t),
        r = this.normal.applyMatrix3(n).normalize();
      return ((this.constant = -s.dot(r)), this);
    }
    translate(t) {
      return ((this.constant -= t.dot(this.normal)), this);
    }
    equals(t) {
      return t.normal.equals(this.normal) && t.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  },
  mi = new ti(),
  Xd = new ut(0.5, 0.5),
  br = new L(),
  $i = class {
    constructor(
      t = new mn(),
      e = new mn(),
      n = new mn(),
      s = new mn(),
      r = new mn(),
      a = new mn(),
    ) {
      this.planes = [t, e, n, s, r, a];
    }
    set(t, e, n, s, r, a) {
      let o = this.planes;
      return (
        o[0].copy(t),
        o[1].copy(e),
        o[2].copy(n),
        o[3].copy(s),
        o[4].copy(r),
        o[5].copy(a),
        this
      );
    }
    copy(t) {
      let e = this.planes;
      for (let n = 0; n < 6; n++) e[n].copy(t.planes[n]);
      return this;
    }
    setFromProjectionMatrix(t, e = rn, n = !1) {
      let s = this.planes,
        r = t.elements,
        a = r[0],
        o = r[1],
        c = r[2],
        l = r[3],
        h = r[4],
        d = r[5],
        u = r[6],
        f = r[7],
        g = r[8],
        y = r[9],
        m = r[10],
        p = r[11],
        b = r[12],
        w = r[13],
        v = r[14],
        A = r[15];
      if (
        (s[0].setComponents(l - a, f - h, p - g, A - b).normalize(),
        s[1].setComponents(l + a, f + h, p + g, A + b).normalize(),
        s[2].setComponents(l + o, f + d, p + y, A + w).normalize(),
        s[3].setComponents(l - o, f - d, p - y, A - w).normalize(),
        n)
      )
        (s[4].setComponents(c, u, m, v).normalize(),
          s[5].setComponents(l - c, f - u, p - m, A - v).normalize());
      else if (
        (s[4].setComponents(l - c, f - u, p - m, A - v).normalize(), e === rn)
      )
        s[5].setComponents(l + c, f + u, p + m, A + v).normalize();
      else if (e === Wi) s[5].setComponents(c, u, m, v).normalize();
      else
        throw new Error(
          "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
            e,
        );
      return this;
    }
    intersectsObject(t) {
      if (t.boundingSphere !== void 0)
        (t.boundingSphere === null && t.computeBoundingSphere(),
          mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld));
      else {
        let e = t.geometry;
        (e.boundingSphere === null && e.computeBoundingSphere(),
          mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld));
      }
      return this.intersectsSphere(mi);
    }
    intersectsSprite(t) {
      mi.center.set(0, 0, 0);
      let e = Xd.distanceTo(t.center);
      return (
        (mi.radius = 0.7071067811865476 + e),
        mi.applyMatrix4(t.matrixWorld),
        this.intersectsSphere(mi)
      );
    }
    intersectsSphere(t) {
      let e = this.planes,
        n = t.center,
        s = -t.radius;
      for (let r = 0; r < 6; r++) if (e[r].distanceToPoint(n) < s) return !1;
      return !0;
    }
    intersectsBox(t) {
      let e = this.planes;
      for (let n = 0; n < 6; n++) {
        let s = e[n];
        if (
          ((br.x = s.normal.x > 0 ? t.max.x : t.min.x),
          (br.y = s.normal.y > 0 ? t.max.y : t.min.y),
          (br.z = s.normal.z > 0 ? t.max.z : t.min.z),
          s.distanceToPoint(br) < 0)
        )
          return !1;
      }
      return !0;
    }
    containsPoint(t) {
      let e = this.planes;
      for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t) < 0) return !1;
      return !0;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
var ei = class extends Sn {
    constructor(t) {
      (super(),
        (this.isLineBasicMaterial = !0),
        (this.type = "LineBasicMaterial"),
        (this.color = new Jt(16777215)),
        (this.map = null),
        (this.linewidth = 1),
        (this.linecap = "round"),
        (this.linejoin = "round"),
        (this.fog = !0),
        this.setValues(t));
    }
    copy(t) {
      return (
        super.copy(t),
        this.color.copy(t.color),
        (this.map = t.map),
        (this.linewidth = t.linewidth),
        (this.linecap = t.linecap),
        (this.linejoin = t.linejoin),
        (this.fog = t.fog),
        this
      );
    }
  },
  ea = new L(),
  na = new L(),
  gh = new he(),
  ps = new vi(),
  wr = new ti(),
  rl = new L(),
  _h = new L(),
  ia = class extends Ie {
    constructor(t = new me(), e = new ei()) {
      (super(),
        (this.isLine = !0),
        (this.type = "Line"),
        (this.geometry = t),
        (this.material = e),
        (this.morphTargetDictionary = void 0),
        (this.morphTargetInfluences = void 0),
        this.updateMorphTargets());
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        (this.material = Array.isArray(t.material)
          ? t.material.slice()
          : t.material),
        (this.geometry = t.geometry),
        this
      );
    }
    computeLineDistances() {
      let t = this.geometry;
      if (t.index === null) {
        let e = t.attributes.position,
          n = [0];
        for (let s = 1, r = e.count; s < r; s++)
          (ea.fromBufferAttribute(e, s - 1),
            na.fromBufferAttribute(e, s),
            (n[s] = n[s - 1]),
            (n[s] += ea.distanceTo(na)));
        t.setAttribute("lineDistance", new ne(n, 1));
      } else
        Nt(
          "Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.",
        );
      return this;
    }
    raycast(t, e) {
      let n = this.geometry,
        s = this.matrixWorld,
        r = t.params.Line.threshold,
        a = n.drawRange;
      if (
        (n.boundingSphere === null && n.computeBoundingSphere(),
        wr.copy(n.boundingSphere),
        wr.applyMatrix4(s),
        (wr.radius += r),
        t.ray.intersectsSphere(wr) === !1)
      )
        return;
      (gh.copy(s).invert(), ps.copy(t.ray).applyMatrix4(gh));
      let o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        c = o * o,
        l = this.isLineSegments ? 2 : 1,
        h = n.index,
        u = n.attributes.position;
      if (h !== null) {
        let f = Math.max(0, a.start),
          g = Math.min(h.count, a.start + a.count);
        for (let y = f, m = g - 1; y < m; y += l) {
          let p = h.getX(y),
            b = h.getX(y + 1),
            w = Er(this, t, ps, c, p, b, y);
          w && e.push(w);
        }
        if (this.isLineLoop) {
          let y = h.getX(g - 1),
            m = h.getX(f),
            p = Er(this, t, ps, c, y, m, g - 1);
          p && e.push(p);
        }
      } else {
        let f = Math.max(0, a.start),
          g = Math.min(u.count, a.start + a.count);
        for (let y = f, m = g - 1; y < m; y += l) {
          let p = Er(this, t, ps, c, y, y + 1, y);
          p && e.push(p);
        }
        if (this.isLineLoop) {
          let y = Er(this, t, ps, c, g - 1, f, g - 1);
          y && e.push(y);
        }
      }
    }
    updateMorphTargets() {
      let e = this.geometry.morphAttributes,
        n = Object.keys(e);
      if (n.length > 0) {
        let s = e[n[0]];
        if (s !== void 0) {
          ((this.morphTargetInfluences = []),
            (this.morphTargetDictionary = {}));
          for (let r = 0, a = s.length; r < a; r++) {
            let o = s[r].name || String(r);
            (this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[o] = r));
          }
        }
      }
    }
  };
function Er(i, t, e, n, s, r, a) {
  let o = i.geometry.attributes.position;
  if (
    (ea.fromBufferAttribute(o, s),
    na.fromBufferAttribute(o, r),
    e.distanceSqToSegment(ea, na, rl, _h) > n)
  )
    return;
  rl.applyMatrix4(i.matrixWorld);
  let l = t.ray.origin.distanceTo(rl);
  if (!(l < t.near || l > t.far))
    return {
      distance: l,
      point: _h.clone().applyMatrix4(i.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: i,
    };
}
var xh = new L(),
  yh = new L(),
  Es = class extends ia {
    constructor(t, e) {
      (super(t, e), (this.isLineSegments = !0), (this.type = "LineSegments"));
    }
    computeLineDistances() {
      let t = this.geometry;
      if (t.index === null) {
        let e = t.attributes.position,
          n = [];
        for (let s = 0, r = e.count; s < r; s += 2)
          (xh.fromBufferAttribute(e, s),
            yh.fromBufferAttribute(e, s + 1),
            (n[s] = s === 0 ? 0 : n[s - 1]),
            (n[s + 1] = n[s] + xh.distanceTo(yh)));
        t.setAttribute("lineDistance", new ne(n, 1));
      } else
        Nt(
          "LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.",
        );
      return this;
    }
  };
var Ki = class extends Sn {
    constructor(t) {
      (super(),
        (this.isPointsMaterial = !0),
        (this.type = "PointsMaterial"),
        (this.color = new Jt(16777215)),
        (this.map = null),
        (this.alphaMap = null),
        (this.size = 1),
        (this.sizeAttenuation = !0),
        (this.fog = !0),
        this.setValues(t));
    }
    copy(t) {
      return (
        super.copy(t),
        this.color.copy(t.color),
        (this.map = t.map),
        (this.alphaMap = t.alphaMap),
        (this.size = t.size),
        (this.sizeAttenuation = t.sizeAttenuation),
        (this.fog = t.fog),
        this
      );
    }
  },
  vh = new he(),
  yl = new vi(),
  Tr = new ti(),
  Ar = new L(),
  bn = class extends Ie {
    constructor(t = new me(), e = new Ki()) {
      (super(),
        (this.isPoints = !0),
        (this.type = "Points"),
        (this.geometry = t),
        (this.material = e),
        (this.morphTargetDictionary = void 0),
        (this.morphTargetInfluences = void 0),
        this.updateMorphTargets());
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        (this.material = Array.isArray(t.material)
          ? t.material.slice()
          : t.material),
        (this.geometry = t.geometry),
        this
      );
    }
    raycast(t, e) {
      let n = this.geometry,
        s = this.matrixWorld,
        r = t.params.Points.threshold,
        a = n.drawRange;
      if (
        (n.boundingSphere === null && n.computeBoundingSphere(),
        Tr.copy(n.boundingSphere),
        Tr.applyMatrix4(s),
        (Tr.radius += r),
        t.ray.intersectsSphere(Tr) === !1)
      )
        return;
      (vh.copy(s).invert(), yl.copy(t.ray).applyMatrix4(vh));
      let o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
        c = o * o,
        l = n.index,
        d = n.attributes.position;
      if (l !== null) {
        let u = Math.max(0, a.start),
          f = Math.min(l.count, a.start + a.count);
        for (let g = u, y = f; g < y; g++) {
          let m = l.getX(g);
          (Ar.fromBufferAttribute(d, m), Mh(Ar, m, c, s, t, e, this));
        }
      } else {
        let u = Math.max(0, a.start),
          f = Math.min(d.count, a.start + a.count);
        for (let g = u, y = f; g < y; g++)
          (Ar.fromBufferAttribute(d, g), Mh(Ar, g, c, s, t, e, this));
      }
    }
    updateMorphTargets() {
      let e = this.geometry.morphAttributes,
        n = Object.keys(e);
      if (n.length > 0) {
        let s = e[n[0]];
        if (s !== void 0) {
          ((this.morphTargetInfluences = []),
            (this.morphTargetDictionary = {}));
          for (let r = 0, a = s.length; r < a; r++) {
            let o = s[r].name || String(r);
            (this.morphTargetInfluences.push(0),
              (this.morphTargetDictionary[o] = r));
          }
        }
      }
    }
  };
function Mh(i, t, e, n, s, r, a) {
  let o = yl.distanceSqToPoint(i);
  if (o < e) {
    let c = new L();
    (yl.closestPointToPoint(i, c), c.applyMatrix4(n));
    let l = s.ray.origin.distanceTo(c);
    if (l < s.near || l > s.far) return;
    r.push({
      distance: l,
      distanceToRay: Math.sqrt(o),
      point: c,
      index: t,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a,
    });
  }
}
var vl = class extends De {
  constructor(t, e, n, s, r = we, a = we, o, c, l) {
    (super(t, e, n, s, r, a, o, c, l),
      (this.isVideoTexture = !0),
      (this.generateMipmaps = !1),
      (this._requestVideoFrameCallbackId = 0));
    let h = this;
    function d() {
      ((h.needsUpdate = !0),
        (h._requestVideoFrameCallbackId = t.requestVideoFrameCallback(d)));
    }
    "requestVideoFrameCallback" in t &&
      (this._requestVideoFrameCallbackId = t.requestVideoFrameCallback(d));
  }
  clone() {
    return new this.constructor(this.image).copy(this);
  }
  update() {
    let t = this.image;
    "requestVideoFrameCallback" in t === !1 &&
      t.readyState >= t.HAVE_CURRENT_DATA &&
      (this.needsUpdate = !0);
  }
  dispose() {
    (this._requestVideoFrameCallbackId !== 0 &&
      (this.source.data.cancelVideoFrameCallback(
        this._requestVideoFrameCallbackId,
      ),
      (this._requestVideoFrameCallbackId = 0)),
      super.dispose());
  }
};
var Ts = class extends De {
    constructor(t = [], e = ri, n, s, r, a, o, c, l, h) {
      (super(t, e, n, s, r, a, o, c, l, h),
        (this.isCubeTexture = !0),
        (this.flipY = !1));
    }
    get images() {
      return this.image;
    }
    set images(t) {
      this.image = t;
    }
  },
  Bn = class extends De {
    constructor(t, e, n, s, r, a, o, c, l) {
      (super(t, e, n, s, r, a, o, c, l),
        (this.isCanvasTexture = !0),
        (this.needsUpdate = !0));
    }
  };
var zn = class extends De {
    constructor(t, e, n = ln, s, r, a, o = Re, c = Re, l, h = yn, d = 1) {
      if (h !== yn && h !== oi)
        throw new Error(
          "THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat",
        );
      let u = { width: t, height: e, depth: d };
      (super(u, s, r, a, o, c, h, n, l),
        (this.isDepthTexture = !0),
        (this.flipY = !1),
        (this.generateMipmaps = !1),
        (this.compareFunction = null));
    }
    copy(t) {
      return (
        super.copy(t),
        (this.source = new Yi(Object.assign({}, t.image))),
        (this.compareFunction = t.compareFunction),
        this
      );
    }
    toJSON(t) {
      let e = super.toJSON(t);
      return (
        this.compareFunction !== null &&
          (e.compareFunction = this.compareFunction),
        e
      );
    }
  },
  sa = class extends zn {
    constructor(t, e = ln, n = ri, s, r, a = Re, o = Re, c, l = yn) {
      let h = { width: t, height: t, depth: 1 },
        d = [h, h, h, h, h, h];
      (super(t, t, e, n, s, r, a, o, c, l),
        (this.image = d),
        (this.isCubeDepthTexture = !0),
        (this.isCubeTexture = !0));
    }
    get images() {
      return this.image;
    }
    set images(t) {
      this.image = t;
    }
  },
  As = class extends De {
    constructor(t = null) {
      (super(), (this.sourceTexture = t), (this.isExternalTexture = !0));
    }
    copy(t) {
      return (super.copy(t), (this.sourceTexture = t.sourceTexture), this);
    }
  },
  Qi = class i extends me {
    constructor(t = 1, e = 1, n = 1, s = 1, r = 1, a = 1) {
      (super(),
        (this.type = "BoxGeometry"),
        (this.parameters = {
          width: t,
          height: e,
          depth: n,
          widthSegments: s,
          heightSegments: r,
          depthSegments: a,
        }));
      let o = this;
      ((s = Math.floor(s)), (r = Math.floor(r)), (a = Math.floor(a)));
      let c = [],
        l = [],
        h = [],
        d = [],
        u = 0,
        f = 0;
      (g("z", "y", "x", -1, -1, n, e, t, a, r, 0),
        g("z", "y", "x", 1, -1, n, e, -t, a, r, 1),
        g("x", "z", "y", 1, 1, t, n, e, s, a, 2),
        g("x", "z", "y", 1, -1, t, n, -e, s, a, 3),
        g("x", "y", "z", 1, -1, t, e, n, s, r, 4),
        g("x", "y", "z", -1, -1, t, e, -n, s, r, 5),
        this.setIndex(c),
        this.setAttribute("position", new ne(l, 3)),
        this.setAttribute("normal", new ne(h, 3)),
        this.setAttribute("uv", new ne(d, 2)));
      function g(y, m, p, b, w, v, A, T, R, _, S) {
        let C = v / R,
          I = A / _,
          U = v / 2,
          Z = A / 2,
          k = T / 2,
          F = R + 1,
          X = _ + 1,
          V = 0,
          D = 0,
          B = new L();
        for (let q = 0; q < X; q++) {
          let K = q * I - Z;
          for (let it = 0; it < F; it++) {
            let lt = it * C - U;
            ((B[y] = lt * b),
              (B[m] = K * w),
              (B[p] = k),
              l.push(B.x, B.y, B.z),
              (B[y] = 0),
              (B[m] = 0),
              (B[p] = T > 0 ? 1 : -1),
              h.push(B.x, B.y, B.z),
              d.push(it / R),
              d.push(1 - q / _),
              (V += 1));
          }
        }
        for (let q = 0; q < _; q++)
          for (let K = 0; K < R; K++) {
            let it = u + K + F * q,
              lt = u + K + F * (q + 1),
              Vt = u + (K + 1) + F * (q + 1),
              Kt = u + (K + 1) + F * q;
            (c.push(it, lt, Kt), c.push(lt, Vt, Kt), (D += 6));
          }
        (o.addGroup(f, D, S), (f += D), (u += V));
      }
    }
    copy(t) {
      return (
        super.copy(t),
        (this.parameters = Object.assign({}, t.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new i(
        t.width,
        t.height,
        t.depth,
        t.widthSegments,
        t.heightSegments,
        t.depthSegments,
      );
    }
  };
var Ml = class i extends me {
    constructor(t = 1, e = 32, n = 0, s = Math.PI * 2) {
      (super(),
        (this.type = "CircleGeometry"),
        (this.parameters = {
          radius: t,
          segments: e,
          thetaStart: n,
          thetaLength: s,
        }),
        (e = Math.max(3, e)));
      let r = [],
        a = [],
        o = [],
        c = [],
        l = new L(),
        h = new ut();
      (a.push(0, 0, 0), o.push(0, 0, 1), c.push(0.5, 0.5));
      for (let d = 0, u = 3; d <= e; d++, u += 3) {
        let f = n + (d / e) * s;
        ((l.x = t * Math.cos(f)),
          (l.y = t * Math.sin(f)),
          a.push(l.x, l.y, l.z),
          o.push(0, 0, 1),
          (h.x = (a[u] / t + 1) / 2),
          (h.y = (a[u + 1] / t + 1) / 2),
          c.push(h.x, h.y));
      }
      for (let d = 1; d <= e; d++) r.push(d, d + 1, 0);
      (this.setIndex(r),
        this.setAttribute("position", new ne(a, 3)),
        this.setAttribute("normal", new ne(o, 3)),
        this.setAttribute("uv", new ne(c, 2)));
    }
    copy(t) {
      return (
        super.copy(t),
        (this.parameters = Object.assign({}, t.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new i(t.radius, t.segments, t.thetaStart, t.thetaLength);
    }
  },
  ra = class i extends me {
    constructor(
      t = 1,
      e = 1,
      n = 1,
      s = 32,
      r = 1,
      a = !1,
      o = 0,
      c = Math.PI * 2,
    ) {
      (super(),
        (this.type = "CylinderGeometry"),
        (this.parameters = {
          radiusTop: t,
          radiusBottom: e,
          height: n,
          radialSegments: s,
          heightSegments: r,
          openEnded: a,
          thetaStart: o,
          thetaLength: c,
        }));
      let l = this;
      ((s = Math.floor(s)), (r = Math.floor(r)));
      let h = [],
        d = [],
        u = [],
        f = [],
        g = 0,
        y = [],
        m = n / 2,
        p = 0;
      (b(),
        a === !1 && (t > 0 && w(!0), e > 0 && w(!1)),
        this.setIndex(h),
        this.setAttribute("position", new ne(d, 3)),
        this.setAttribute("normal", new ne(u, 3)),
        this.setAttribute("uv", new ne(f, 2)));
      function b() {
        let v = new L(),
          A = new L(),
          T = 0,
          R = (e - t) / n;
        for (let _ = 0; _ <= r; _++) {
          let S = [],
            C = _ / r,
            I = C * (e - t) + t;
          for (let U = 0; U <= s; U++) {
            let Z = U / s,
              k = Z * c + o,
              F = Math.sin(k),
              X = Math.cos(k);
            ((A.x = I * F),
              (A.y = -C * n + m),
              (A.z = I * X),
              d.push(A.x, A.y, A.z),
              v.set(F, R, X).normalize(),
              u.push(v.x, v.y, v.z),
              f.push(Z, 1 - C),
              S.push(g++));
          }
          y.push(S);
        }
        for (let _ = 0; _ < s; _++)
          for (let S = 0; S < r; S++) {
            let C = y[S][_],
              I = y[S + 1][_],
              U = y[S + 1][_ + 1],
              Z = y[S][_ + 1];
            ((t > 0 || S !== 0) && (h.push(C, I, Z), (T += 3)),
              (e > 0 || S !== r - 1) && (h.push(I, U, Z), (T += 3)));
          }
        (l.addGroup(p, T, 0), (p += T));
      }
      function w(v) {
        let A = g,
          T = new ut(),
          R = new L(),
          _ = 0,
          S = v === !0 ? t : e,
          C = v === !0 ? 1 : -1;
        for (let U = 1; U <= s; U++)
          (d.push(0, m * C, 0), u.push(0, C, 0), f.push(0.5, 0.5), g++);
        let I = g;
        for (let U = 0; U <= s; U++) {
          let k = (U / s) * c + o,
            F = Math.cos(k),
            X = Math.sin(k);
          ((R.x = S * X),
            (R.y = m * C),
            (R.z = S * F),
            d.push(R.x, R.y, R.z),
            u.push(0, C, 0),
            (T.x = F * 0.5 + 0.5),
            (T.y = X * 0.5 * C + 0.5),
            f.push(T.x, T.y),
            g++);
        }
        for (let U = 0; U < s; U++) {
          let Z = A + U,
            k = I + U;
          (v === !0 ? h.push(k, k + 1, Z) : h.push(k + 1, k, Z), (_ += 3));
        }
        (l.addGroup(p, _, v === !0 ? 1 : 2), (p += _));
      }
    }
    copy(t) {
      return (
        super.copy(t),
        (this.parameters = Object.assign({}, t.parameters)),
        this
      );
    }
    static fromJSON(t) {
      return new i(
        t.radiusTop,
        t.radiusBottom,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength,
      );
    }
  },
  Sl = class i extends ra {
    constructor(t = 1, e = 1, n = 32, s = 1, r = !1, a = 0, o = Math.PI * 2) {
      (super(0, t, e, n, s, r, a, o),
        (this.type = "ConeGeometry"),
        (this.parameters = {
          radius: t,
          height: e,
          radialSegments: n,
          heightSegments: s,
          openEnded: r,
          thetaStart: a,
          thetaLength: o,
        }));
    }
    static fromJSON(t) {
      return new i(
        t.radius,
        t.height,
        t.radialSegments,
        t.heightSegments,
        t.openEnded,
        t.thetaStart,
        t.thetaLength,
      );
    }
  };
var Cr = new L(),
  Rr = new L(),
  al = new L(),
  Ir = new Nn(),
  bl = class extends me {
    constructor(t = null, e = 1) {
      if (
        (super(),
        (this.type = "EdgesGeometry"),
        (this.parameters = { geometry: t, thresholdAngle: e }),
        t !== null)
      ) {
        let s = Math.pow(10, 4),
          r = Math.cos(Or * e),
          a = t.getIndex(),
          o = t.getAttribute("position"),
          c = a ? a.count : o.count,
          l = [0, 0, 0],
          h = ["a", "b", "c"],
          d = new Array(3),
          u = {},
          f = [];
        for (let g = 0; g < c; g += 3) {
          a
            ? ((l[0] = a.getX(g)),
              (l[1] = a.getX(g + 1)),
              (l[2] = a.getX(g + 2)))
            : ((l[0] = g), (l[1] = g + 1), (l[2] = g + 2));
          let { a: y, b: m, c: p } = Ir;
          if (
            (y.fromBufferAttribute(o, l[0]),
            m.fromBufferAttribute(o, l[1]),
            p.fromBufferAttribute(o, l[2]),
            Ir.getNormal(al),
            (d[0] = `${Math.round(y.x * s)},${Math.round(y.y * s)},${Math.round(y.z * s)}`),
            (d[1] = `${Math.round(m.x * s)},${Math.round(m.y * s)},${Math.round(m.z * s)}`),
            (d[2] = `${Math.round(p.x * s)},${Math.round(p.y * s)},${Math.round(p.z * s)}`),
            !(d[0] === d[1] || d[1] === d[2] || d[2] === d[0]))
          )
            for (let b = 0; b < 3; b++) {
              let w = (b + 1) % 3,
                v = d[b],
                A = d[w],
                T = Ir[h[b]],
                R = Ir[h[w]],
                _ = `${v}_${A}`,
                S = `${A}_${v}`;
              S in u && u[S]
                ? (al.dot(u[S].normal) <= r &&
                    (f.push(T.x, T.y, T.z), f.push(R.x, R.y, R.z)),
                  (u[S] = null))
                : _ in u ||
                  (u[_] = { index0: l[b], index1: l[w], normal: al.clone() });
            }
        }
        for (let g in u)
          if (u[g]) {
            let { index0: y, index1: m } = u[g];
            (Cr.fromBufferAttribute(o, y),
              Rr.fromBufferAttribute(o, m),
              f.push(Cr.x, Cr.y, Cr.z),
              f.push(Rr.x, Rr.y, Rr.z));
          }
        this.setAttribute("position", new ne(f, 3));
      }
    }
    copy(t) {
      return (
        super.copy(t),
        (this.parameters = Object.assign({}, t.parameters)),
        this
      );
    }
  },
  Ze = class {
    constructor() {
      ((this.type = "Curve"),
        (this.arcLengthDivisions = 200),
        (this.needsUpdate = !1),
        (this.cacheArcLengths = null));
    }
    getPoint() {
      Nt("Curve: .getPoint() not implemented.");
    }
    getPointAt(t, e) {
      let n = this.getUtoTmapping(t);
      return this.getPoint(n, e);
    }
    getPoints(t = 5) {
      let e = [];
      for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
      return e;
    }
    getSpacedPoints(t = 5) {
      let e = [];
      for (let n = 0; n <= t; n++) e.push(this.getPointAt(n / t));
      return e;
    }
    getLength() {
      let t = this.getLengths();
      return t[t.length - 1];
    }
    getLengths(t = this.arcLengthDivisions) {
      if (
        this.cacheArcLengths &&
        this.cacheArcLengths.length === t + 1 &&
        !this.needsUpdate
      )
        return this.cacheArcLengths;
      this.needsUpdate = !1;
      let e = [],
        n,
        s = this.getPoint(0),
        r = 0;
      e.push(0);
      for (let a = 1; a <= t; a++)
        ((n = this.getPoint(a / t)),
          (r += n.distanceTo(s)),
          e.push(r),
          (s = n));
      return ((this.cacheArcLengths = e), e);
    }
    updateArcLengths() {
      ((this.needsUpdate = !0), this.getLengths());
    }
    getUtoTmapping(t, e = null) {
      let n = this.getLengths(),
        s = 0,
        r = n.length,
        a;
      e ? (a = e) : (a = t * n[r - 1]);
      let o = 0,
        c = r - 1,
        l;
      for (; o <= c;)
        if (((s = Math.floor(o + (c - o) / 2)), (l = n[s] - a), l < 0))
          o = s + 1;
        else if (l > 0) c = s - 1;
        else {
          c = s;
          break;
        }
      if (((s = c), n[s] === a)) return s / (r - 1);
      let h = n[s],
        u = n[s + 1] - h,
        f = (a - h) / u;
      return (s + f) / (r - 1);
    }
    getTangent(t, e) {
      let s = t - 1e-4,
        r = t + 1e-4;
      (s < 0 && (s = 0), r > 1 && (r = 1));
      let a = this.getPoint(s),
        o = this.getPoint(r),
        c = e || (a.isVector2 ? new ut() : new L());
      return (c.copy(o).sub(a).normalize(), c);
    }
    getTangentAt(t, e) {
      let n = this.getUtoTmapping(t);
      return this.getTangent(n, e);
    }
    computeFrenetFrames(t, e = !1) {
      let n = new L(),
        s = [],
        r = [],
        a = [],
        o = new L(),
        c = new he();
      for (let f = 0; f <= t; f++) {
        let g = f / t;
        s[f] = this.getTangentAt(g, new L());
      }
      ((r[0] = new L()), (a[0] = new L()));
      let l = Number.MAX_VALUE,
        h = Math.abs(s[0].x),
        d = Math.abs(s[0].y),
        u = Math.abs(s[0].z);
      (h <= l && ((l = h), n.set(1, 0, 0)),
        d <= l && ((l = d), n.set(0, 1, 0)),
        u <= l && n.set(0, 0, 1),
        o.crossVectors(s[0], n).normalize(),
        r[0].crossVectors(s[0], o),
        a[0].crossVectors(s[0], r[0]));
      for (let f = 1; f <= t; f++) {
        if (
          ((r[f] = r[f - 1].clone()),
          (a[f] = a[f - 1].clone()),
          o.crossVectors(s[f - 1], s[f]),
          o.length() > Number.EPSILON)
        ) {
          o.normalize();
          let g = Math.acos(te(s[f - 1].dot(s[f]), -1, 1));
          r[f].applyMatrix4(c.makeRotationAxis(o, g));
        }
        a[f].crossVectors(s[f], r[f]);
      }
      if (e === !0) {
        let f = Math.acos(te(r[0].dot(r[t]), -1, 1));
        ((f /= t), s[0].dot(o.crossVectors(r[0], r[t])) > 0 && (f = -f));
        for (let g = 1; g <= t; g++)
          (r[g].applyMatrix4(c.makeRotationAxis(s[g], f * g)),
            a[g].crossVectors(s[g], r[g]));
      }
      return { tangents: s, normals: r, binormals: a };
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t) {
      return ((this.arcLengthDivisions = t.arcLengthDivisions), this);
    }
    toJSON() {
      let t = {
        metadata: { version: 4.7, type: "Curve", generator: "Curve.toJSON" },
      };
      return (
        (t.arcLengthDivisions = this.arcLengthDivisions),
        (t.type = this.type),
        t
      );
    }
    fromJSON(t) {
      return ((this.arcLengthDivisions = t.arcLengthDivisions), this);
    }
  },
  ji = class extends Ze {
    constructor(
      t = 0,
      e = 0,
      n = 1,
      s = 1,
      r = 0,
      a = Math.PI * 2,
      o = !1,
      c = 0,
    ) {
      (super(),
        (this.isEllipseCurve = !0),
        (this.type = "EllipseCurve"),
        (this.aX = t),
        (this.aY = e),
        (this.xRadius = n),
        (this.yRadius = s),
        (this.aStartAngle = r),
        (this.aEndAngle = a),
        (this.aClockwise = o),
        (this.aRotation = c));
    }
    getPoint(t, e = new ut()) {
      let n = e,
        s = Math.PI * 2,
        r = this.aEndAngle - this.aStartAngle,
        a = Math.abs(r) < Number.EPSILON;
      for (; r < 0;) r += s;
      for (; r > s;) r -= s;
      (r < Number.EPSILON && (a ? (r = 0) : (r = s)),
        this.aClockwise === !0 && !a && (r === s ? (r = -s) : (r = r - s)));
      let o = this.aStartAngle + t * r,
        c = this.aX + this.xRadius * Math.cos(o),
        l = this.aY + this.yRadius * Math.sin(o);
      if (this.aRotation !== 0) {
        let h = Math.cos(this.aRotation),
          d = Math.sin(this.aRotation),
          u = c - this.aX,
          f = l - this.aY;
        ((c = u * h - f * d + this.aX), (l = u * d + f * h + this.aY));
      }
      return n.set(c, l);
    }
    copy(t) {
      return (
        super.copy(t),
        (this.aX = t.aX),
        (this.aY = t.aY),
        (this.xRadius = t.xRadius),
        (this.yRadius = t.yRadius),
        (this.aStartAngle = t.aStartAngle),
        (this.aEndAngle = t.aEndAngle),
        (this.aClockwise = t.aClockwise),
        (this.aRotation = t.aRotation),
        this
      );
    }
    toJSON() {
      let t = super.toJSON();
      return (
        (t.aX = this.aX),
        (t.aY = this.aY),
        (t.xRadius = this.xRadius),
        (t.yRadius = this.yRadius),
        (t.aStartAngle = this.aStartAngle),
        (t.aEndAngle = this.aEndAngle),
        (t.aClockwise = this.aClockwise),
        (t.aRotation = this.aRotation),
        t
      );
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        (this.aX = t.aX),
        (this.aY = t.aY),
        (this.xRadius = t.xRadius),
        (this.yRadius = t.yRadius),
        (this.aStartAngle = t.aStartAngle),
        (this.aEndAngle = t.aEndAngle),
        (this.aClockwise = t.aClockwise),
        (this.aRotation = t.aRotation),
        this
      );
    }
  },
  aa = class extends ji {
    constructor(t, e, n, s, r, a) {
      (super(t, e, n, n, s, r, a),
        (this.isArcCurve = !0),
        (this.type = "ArcCurve"));
    }
  };
function lc() {
  let i = 0,
    t = 0,
    e = 0,
    n = 0;
  function s(r, a, o, c) {
    ((i = r),
      (t = o),
      (e = -3 * r + 3 * a - 2 * o - c),
      (n = 2 * r - 2 * a + o + c));
  }
  return {
    initCatmullRom: function (r, a, o, c, l) {
      s(a, o, l * (o - r), l * (c - a));
    },
    initNonuniformCatmullRom: function (r, a, o, c, l, h, d) {
      let u = (a - r) / l - (o - r) / (l + h) + (o - a) / h,
        f = (o - a) / h - (c - a) / (h + d) + (c - o) / d;
      ((u *= h), (f *= h), s(a, o, u, f));
    },
    calc: function (r) {
      let a = r * r,
        o = a * r;
      return i + t * r + e * a + n * o;
    },
  };
}
var Sh = new L(),
  bh = new L(),
  ol = new lc(),
  ll = new lc(),
  cl = new lc(),
  oa = class extends Ze {
    constructor(t = [], e = !1, n = "centripetal", s = 0.5) {
      (super(),
        (this.isCatmullRomCurve3 = !0),
        (this.type = "CatmullRomCurve3"),
        (this.points = t),
        (this.closed = e),
        (this.curveType = n),
        (this.tension = s));
    }
    getPoint(t, e = new L()) {
      let n = e,
        s = this.points,
        r = s.length,
        a = (r - (this.closed ? 0 : 1)) * t,
        o = Math.floor(a),
        c = a - o;
      this.closed
        ? (o += o > 0 ? 0 : (Math.floor(Math.abs(o) / r) + 1) * r)
        : c === 0 && o === r - 1 && ((o = r - 2), (c = 1));
      let l, h;
      this.closed || o > 0
        ? (l = s[(o - 1) % r])
        : (bh.subVectors(s[0], s[1]).add(s[0]), (l = bh));
      let d = s[o % r],
        u = s[(o + 1) % r];
      if (
        (this.closed || o + 2 < r
          ? (h = s[(o + 2) % r])
          : (Sh.subVectors(s[r - 1], s[r - 2]).add(s[r - 1]), (h = Sh)),
        this.curveType === "centripetal" || this.curveType === "chordal")
      ) {
        let f = this.curveType === "chordal" ? 0.5 : 0.25,
          g = Math.pow(l.distanceToSquared(d), f),
          y = Math.pow(d.distanceToSquared(u), f),
          m = Math.pow(u.distanceToSquared(h), f);
        (y < 1e-4 && (y = 1),
          g < 1e-4 && (g = y),
          m < 1e-4 && (m = y),
          ol.initNonuniformCatmullRom(l.x, d.x, u.x, h.x, g, y, m),
          ll.initNonuniformCatmullRom(l.y, d.y, u.y, h.y, g, y, m),
          cl.initNonuniformCatmullRom(l.z, d.z, u.z, h.z, g, y, m));
      } else
        this.curveType === "catmullrom" &&
          (ol.initCatmullRom(l.x, d.x, u.x, h.x, this.tension),
          ll.initCatmullRom(l.y, d.y, u.y, h.y, this.tension),
          cl.initCatmullRom(l.z, d.z, u.z, h.z, this.tension));
      return (n.set(ol.calc(c), ll.calc(c), cl.calc(c)), n);
    }
    copy(t) {
      (super.copy(t), (this.points = []));
      for (let e = 0, n = t.points.length; e < n; e++) {
        let s = t.points[e];
        this.points.push(s.clone());
      }
      return (
        (this.closed = t.closed),
        (this.curveType = t.curveType),
        (this.tension = t.tension),
        this
      );
    }
    toJSON() {
      let t = super.toJSON();
      t.points = [];
      for (let e = 0, n = this.points.length; e < n; e++) {
        let s = this.points[e];
        t.points.push(s.toArray());
      }
      return (
        (t.closed = this.closed),
        (t.curveType = this.curveType),
        (t.tension = this.tension),
        t
      );
    }
    fromJSON(t) {
      (super.fromJSON(t), (this.points = []));
      for (let e = 0, n = t.points.length; e < n; e++) {
        let s = t.points[e];
        this.points.push(new L().fromArray(s));
      }
      return (
        (this.closed = t.closed),
        (this.curveType = t.curveType),
        (this.tension = t.tension),
        this
      );
    }
  };
function wh(i, t, e, n, s) {
  let r = (n - t) * 0.5,
    a = (s - e) * 0.5,
    o = i * i,
    c = i * o;
  return (
    (2 * e - 2 * n + r + a) * c + (-3 * e + 3 * n - 2 * r - a) * o + r * i + e
  );
}
function qd(i, t) {
  let e = 1 - i;
  return e * e * t;
}
function Yd(i, t) {
  return 2 * (1 - i) * i * t;
}
function Zd(i, t) {
  return i * i * t;
}
function gs(i, t, e, n) {
  return qd(i, t) + Yd(i, e) + Zd(i, n);
}
function Jd(i, t) {
  let e = 1 - i;
  return e * e * e * t;
}
function $d(i, t) {
  let e = 1 - i;
  return 3 * e * e * i * t;
}
function Kd(i, t) {
  return 3 * (1 - i) * i * i * t;
}
function Qd(i, t) {
  return i * i * i * t;
}
function _s(i, t, e, n, s) {
  return Jd(i, t) + $d(i, e) + Kd(i, n) + Qd(i, s);
}
var Cs = class extends Ze {
    constructor(t = new ut(), e = new ut(), n = new ut(), s = new ut()) {
      (super(),
        (this.isCubicBezierCurve = !0),
        (this.type = "CubicBezierCurve"),
        (this.v0 = t),
        (this.v1 = e),
        (this.v2 = n),
        (this.v3 = s));
    }
    getPoint(t, e = new ut()) {
      let n = e,
        s = this.v0,
        r = this.v1,
        a = this.v2,
        o = this.v3;
      return (n.set(_s(t, s.x, r.x, a.x, o.x), _s(t, s.y, r.y, a.y, o.y)), n);
    }
    copy(t) {
      return (
        super.copy(t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this.v3.copy(t.v3),
        this
      );
    }
    toJSON() {
      let t = super.toJSON();
      return (
        (t.v0 = this.v0.toArray()),
        (t.v1 = this.v1.toArray()),
        (t.v2 = this.v2.toArray()),
        (t.v3 = this.v3.toArray()),
        t
      );
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this.v3.fromArray(t.v3),
        this
      );
    }
  },
  la = class extends Ze {
    constructor(t = new L(), e = new L(), n = new L(), s = new L()) {
      (super(),
        (this.isCubicBezierCurve3 = !0),
        (this.type = "CubicBezierCurve3"),
        (this.v0 = t),
        (this.v1 = e),
        (this.v2 = n),
        (this.v3 = s));
    }
    getPoint(t, e = new L()) {
      let n = e,
        s = this.v0,
        r = this.v1,
        a = this.v2,
        o = this.v3;
      return (
        n.set(
          _s(t, s.x, r.x, a.x, o.x),
          _s(t, s.y, r.y, a.y, o.y),
          _s(t, s.z, r.z, a.z, o.z),
        ),
        n
      );
    }
    copy(t) {
      return (
        super.copy(t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this.v3.copy(t.v3),
        this
      );
    }
    toJSON() {
      let t = super.toJSON();
      return (
        (t.v0 = this.v0.toArray()),
        (t.v1 = this.v1.toArray()),
        (t.v2 = this.v2.toArray()),
        (t.v3 = this.v3.toArray()),
        t
      );
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this.v3.fromArray(t.v3),
        this
      );
    }
  },
  Rs = class extends Ze {
    constructor(t = new ut(), e = new ut()) {
      (super(),
        (this.isLineCurve = !0),
        (this.type = "LineCurve"),
        (this.v1 = t),
        (this.v2 = e));
    }
    getPoint(t, e = new ut()) {
      let n = e;
      return (
        t === 1
          ? n.copy(this.v2)
          : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
        n
      );
    }
    getPointAt(t, e) {
      return this.getPoint(t, e);
    }
    getTangent(t, e = new ut()) {
      return e.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t, e) {
      return this.getTangent(t, e);
    }
    copy(t) {
      return (super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this);
    }
    toJSON() {
      let t = super.toJSON();
      return ((t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t);
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
      );
    }
  },
  ca = class extends Ze {
    constructor(t = new L(), e = new L()) {
      (super(),
        (this.isLineCurve3 = !0),
        (this.type = "LineCurve3"),
        (this.v1 = t),
        (this.v2 = e));
    }
    getPoint(t, e = new L()) {
      let n = e;
      return (
        t === 1
          ? n.copy(this.v2)
          : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t).add(this.v1)),
        n
      );
    }
    getPointAt(t, e) {
      return this.getPoint(t, e);
    }
    getTangent(t, e = new L()) {
      return e.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t, e) {
      return this.getTangent(t, e);
    }
    copy(t) {
      return (super.copy(t), this.v1.copy(t.v1), this.v2.copy(t.v2), this);
    }
    toJSON() {
      let t = super.toJSON();
      return ((t.v1 = this.v1.toArray()), (t.v2 = this.v2.toArray()), t);
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
      );
    }
  },
  Is = class extends Ze {
    constructor(t = new ut(), e = new ut(), n = new ut()) {
      (super(),
        (this.isQuadraticBezierCurve = !0),
        (this.type = "QuadraticBezierCurve"),
        (this.v0 = t),
        (this.v1 = e),
        (this.v2 = n));
    }
    getPoint(t, e = new ut()) {
      let n = e,
        s = this.v0,
        r = this.v1,
        a = this.v2;
      return (n.set(gs(t, s.x, r.x, a.x), gs(t, s.y, r.y, a.y)), n);
    }
    copy(t) {
      return (
        super.copy(t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
      );
    }
    toJSON() {
      let t = super.toJSON();
      return (
        (t.v0 = this.v0.toArray()),
        (t.v1 = this.v1.toArray()),
        (t.v2 = this.v2.toArray()),
        t
      );
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
      );
    }
  },
  ha = class extends Ze {
    constructor(t = new L(), e = new L(), n = new L()) {
      (super(),
        (this.isQuadraticBezierCurve3 = !0),
        (this.type = "QuadraticBezierCurve3"),
        (this.v0 = t),
        (this.v1 = e),
        (this.v2 = n));
    }
    getPoint(t, e = new L()) {
      let n = e,
        s = this.v0,
        r = this.v1,
        a = this.v2;
      return (
        n.set(gs(t, s.x, r.x, a.x), gs(t, s.y, r.y, a.y), gs(t, s.z, r.z, a.z)),
        n
      );
    }
    copy(t) {
      return (
        super.copy(t),
        this.v0.copy(t.v0),
        this.v1.copy(t.v1),
        this.v2.copy(t.v2),
        this
      );
    }
    toJSON() {
      let t = super.toJSON();
      return (
        (t.v0 = this.v0.toArray()),
        (t.v1 = this.v1.toArray()),
        (t.v2 = this.v2.toArray()),
        t
      );
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        this.v0.fromArray(t.v0),
        this.v1.fromArray(t.v1),
        this.v2.fromArray(t.v2),
        this
      );
    }
  },
  Ps = class extends Ze {
    constructor(t = []) {
      (super(),
        (this.isSplineCurve = !0),
        (this.type = "SplineCurve"),
        (this.points = t));
    }
    getPoint(t, e = new ut()) {
      let n = e,
        s = this.points,
        r = (s.length - 1) * t,
        a = Math.floor(r),
        o = r - a,
        c = s[a === 0 ? a : a - 1],
        l = s[a],
        h = s[a > s.length - 2 ? s.length - 1 : a + 1],
        d = s[a > s.length - 3 ? s.length - 1 : a + 2];
      return (n.set(wh(o, c.x, l.x, h.x, d.x), wh(o, c.y, l.y, h.y, d.y)), n);
    }
    copy(t) {
      (super.copy(t), (this.points = []));
      for (let e = 0, n = t.points.length; e < n; e++) {
        let s = t.points[e];
        this.points.push(s.clone());
      }
      return this;
    }
    toJSON() {
      let t = super.toJSON();
      t.points = [];
      for (let e = 0, n = this.points.length; e < n; e++) {
        let s = this.points[e];
        t.points.push(s.toArray());
      }
      return t;
    }
    fromJSON(t) {
      (super.fromJSON(t), (this.points = []));
      for (let e = 0, n = t.points.length; e < n; e++) {
        let s = t.points[e];
        this.points.push(new ut().fromArray(s));
      }
      return this;
    }
  },
  wl = Object.freeze({
    __proto__: null,
    ArcCurve: aa,
    CatmullRomCurve3: oa,
    CubicBezierCurve: Cs,
    CubicBezierCurve3: la,
    EllipseCurve: ji,
    LineCurve: Rs,
    LineCurve3: ca,
    QuadraticBezierCurve: Is,
    QuadraticBezierCurve3: ha,
    SplineCurve: Ps,
  }),
  ua = class extends Ze {
    constructor() {
      (super(),
        (this.type = "CurvePath"),
        (this.curves = []),
        (this.autoClose = !1));
    }
    add(t) {
      this.curves.push(t);
    }
    closePath() {
      let t = this.curves[0].getPoint(0),
        e = this.curves[this.curves.length - 1].getPoint(1);
      if (!t.equals(e)) {
        let n = t.isVector2 === !0 ? "LineCurve" : "LineCurve3";
        this.curves.push(new wl[n](e, t));
      }
      return this;
    }
    getPoint(t, e) {
      let n = t * this.getLength(),
        s = this.getCurveLengths(),
        r = 0;
      for (; r < s.length;) {
        if (s[r] >= n) {
          let a = s[r] - n,
            o = this.curves[r],
            c = o.getLength(),
            l = c === 0 ? 0 : 1 - a / c;
          return o.getPointAt(l, e);
        }
        r++;
      }
      return null;
    }
    getLength() {
      let t = this.getCurveLengths();
      return t[t.length - 1];
    }
    updateArcLengths() {
      ((this.needsUpdate = !0),
        (this.cacheLengths = null),
        this.getCurveLengths());
    }
    getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
        return this.cacheLengths;
      let t = [],
        e = 0;
      for (let n = 0, s = this.curves.length; n < s; n++)
        ((e += this.curves[n].getLength()), t.push(e));
      return ((this.cacheLengths = t), t);
    }
    getSpacedPoints(t = 40) {
      let e = [];
      for (let n = 0; n <= t; n++) e.push(this.getPoint(n / t));
      return (this.autoClose && e.push(e[0]), e);
    }
    getPoints(t = 12) {
      let e = [],
        n;
      for (let s = 0, r = this.curves; s < r.length; s++) {
        let a = r[s],
          o = a.isEllipseCurve
            ? t * 2
            : a.isLineCurve || a.isLineCurve3
              ? 1
              : a.isSplineCurve
                ? t * a.points.length
                : t,
          c = a.getPoints(o);
        for (let l = 0; l < c.length; l++) {
          let h = c[l];
          (n && n.equals(h)) || (e.push(h), (n = h));
        }
      }
      return (
        this.autoClose &&
          e.length > 1 &&
          !e[e.length - 1].equals(e[0]) &&
          e.push(e[0]),
        e
      );
    }
    copy(t) {
      (super.copy(t), (this.curves = []));
      for (let e = 0, n = t.curves.length; e < n; e++) {
        let s = t.curves[e];
        this.curves.push(s.clone());
      }
      return ((this.autoClose = t.autoClose), this);
    }
    toJSON() {
      let t = super.toJSON();
      ((t.autoClose = this.autoClose), (t.curves = []));
      for (let e = 0, n = this.curves.length; e < n; e++) {
        let s = this.curves[e];
        t.curves.push(s.toJSON());
      }
      return t;
    }
    fromJSON(t) {
      (super.fromJSON(t), (this.autoClose = t.autoClose), (this.curves = []));
      for (let e = 0, n = t.curves.length; e < n; e++) {
        let s = t.curves[e];
        this.curves.push(new wl[s.type]().fromJSON(s));
      }
      return this;
    }
  },
  Ls = class extends ua {
    constructor(t) {
      (super(),
        (this.type = "Path"),
        (this.currentPoint = new ut()),
        t && this.setFromPoints(t));
    }
    setFromPoints(t) {
      this.moveTo(t[0].x, t[0].y);
      for (let e = 1, n = t.length; e < n; e++) this.lineTo(t[e].x, t[e].y);
      return this;
    }
    moveTo(t, e) {
      return (this.currentPoint.set(t, e), this);
    }
    lineTo(t, e) {
      let n = new Rs(this.currentPoint.clone(), new ut(t, e));
      return (this.curves.push(n), this.currentPoint.set(t, e), this);
    }
    quadraticCurveTo(t, e, n, s) {
      let r = new Is(this.currentPoint.clone(), new ut(t, e), new ut(n, s));
      return (this.curves.push(r), this.currentPoint.set(n, s), this);
    }
    bezierCurveTo(t, e, n, s, r, a) {
      let o = new Cs(
        this.currentPoint.clone(),
        new ut(t, e),
        new ut(n, s),
        new ut(r, a),
      );
      return (this.curves.push(o), this.currentPoint.set(r, a), this);
    }
    splineThru(t) {
      let e = [this.currentPoint.clone()].concat(t),
        n = new Ps(e);
      return (
        this.curves.push(n),
        this.currentPoint.copy(t[t.length - 1]),
        this
      );
    }
    arc(t, e, n, s, r, a) {
      let o = this.currentPoint.x,
        c = this.currentPoint.y;
      return (this.absarc(t + o, e + c, n, s, r, a), this);
    }
    absarc(t, e, n, s, r, a) {
      return (this.absellipse(t, e, n, n, s, r, a), this);
    }
    ellipse(t, e, n, s, r, a, o, c) {
      let l = this.currentPoint.x,
        h = this.currentPoint.y;
      return (this.absellipse(t + l, e + h, n, s, r, a, o, c), this);
    }
    absellipse(t, e, n, s, r, a, o, c) {
      let l = new ji(t, e, n, s, r, a, o, c);
      if (this.curves.length > 0) {
        let d = l.getPoint(0);
        d.equals(this.currentPoint) || this.lineTo(d.x, d.y);
      }
      this.curves.push(l);
      let h = l.getPoint(1);
      return (this.currentPoint.copy(h), this);
    }
    copy(t) {
      return (super.copy(t), this.currentPoint.copy(t.currentPoint), this);
    }
    toJSON() {
      let t = super.toJSON();
      return ((t.currentPoint = this.currentPoint.toArray()), t);
    }
    fromJSON(t) {
      return (
        super.fromJSON(t),
        this.currentPoint.fromArray(t.currentPoint),
        this
      );
    }
  },
  Ds = class extends Ls {
    constructor(t) {
      (super(t), (this.uuid = rs()), (this.type = "Shape"), (this.holes = []));
    }
    getPointsHoles(t) {
      let e = [];
      for (let n = 0, s = this.holes.length; n < s; n++)
        e[n] = this.holes[n].getPoints(t);
      return e;
    }
    extractPoints(t) {
      return { shape: this.getPoints(t), holes: this.getPointsHoles(t) };
    }
    copy(t) {
      (super.copy(t), (this.holes = []));
      for (let e = 0, n = t.holes.length; e < n; e++) {
        let s = t.holes[e];
        this.holes.push(s.clone());
      }
      return this;
    }
    toJSON() {
      let t = super.toJSON();
      ((t.uuid = this.uuid), (t.holes = []));
      for (let e = 0, n = this.holes.length; e < n; e++) {
        let s = this.holes[e];
        t.holes.push(s.toJSON());
      }
      return t;
    }
    fromJSON(t) {
      (super.fromJSON(t), (this.uuid = t.uuid), (this.holes = []));
      for (let e = 0, n = t.holes.length; e < n; e++) {
        let s = t.holes[e];
        this.holes.push(new Ls().fromJSON(s));
      }
      return this;
    }
  };
function jd(i, t, e = 2) {
  let n = t && t.length,
    s = n ? t[0] * e : i.length,
    r = yu(i, 0, s, e, !0),
    a = [];
  if (!r || r.next === r.prev) return a;
  let o, c, l;
  if ((n && (r = rf(i, t, r, e)), i.length > 80 * e)) {
    ((o = i[0]), (c = i[1]));
    let h = o,
      d = c;
    for (let u = e; u < s; u += e) {
      let f = i[u],
        g = i[u + 1];
      (f < o && (o = f), g < c && (c = g), f > h && (h = f), g > d && (d = g));
    }
    ((l = Math.max(h - o, d - c)), (l = l !== 0 ? 32767 / l : 0));
  }
  return (Ns(r, a, e, o, c, l, 0), a);
}
function yu(i, t, e, n, s) {
  let r;
  if (s === gf(i, t, e, n) > 0)
    for (let a = t; a < e; a += n) r = Eh((a / n) | 0, i[a], i[a + 1], r);
  else
    for (let a = e - n; a >= t; a -= n) r = Eh((a / n) | 0, i[a], i[a + 1], r);
  return (r && ts(r, r.next) && (Fs(r), (r = r.next)), r);
}
function Mi(i, t) {
  if (!i) return i;
  t || (t = i);
  let e = i,
    n;
  do
    if (
      ((n = !1), !e.steiner && (ts(e, e.next) || xe(e.prev, e, e.next) === 0))
    ) {
      if ((Fs(e), (e = t = e.prev), e === e.next)) break;
      n = !0;
    } else e = e.next;
  while (n || e !== t);
  return t;
}
function Ns(i, t, e, n, s, r, a) {
  if (!i) return;
  !a && r && hf(i, n, s, r);
  let o = i;
  for (; i.prev !== i.next;) {
    let c = i.prev,
      l = i.next;
    if (r ? ef(i, n, s, r) : tf(i)) {
      (t.push(c.i, i.i, l.i), Fs(i), (i = l.next), (o = l.next));
      continue;
    }
    if (((i = l), i === o)) {
      a
        ? a === 1
          ? ((i = nf(Mi(i), t)), Ns(i, t, e, n, s, r, 2))
          : a === 2 && sf(i, t, e, n, s, r)
        : Ns(Mi(i), t, e, n, s, r, 1);
      break;
    }
  }
}
function tf(i) {
  let t = i.prev,
    e = i,
    n = i.next;
  if (xe(t, e, n) >= 0) return !1;
  let s = t.x,
    r = e.x,
    a = n.x,
    o = t.y,
    c = e.y,
    l = n.y,
    h = Math.min(s, r, a),
    d = Math.min(o, c, l),
    u = Math.max(s, r, a),
    f = Math.max(o, c, l),
    g = n.next;
  for (; g !== t;) {
    if (
      g.x >= h &&
      g.x <= u &&
      g.y >= d &&
      g.y <= f &&
      ms(s, o, r, c, a, l, g.x, g.y) &&
      xe(g.prev, g, g.next) >= 0
    )
      return !1;
    g = g.next;
  }
  return !0;
}
function ef(i, t, e, n) {
  let s = i.prev,
    r = i,
    a = i.next;
  if (xe(s, r, a) >= 0) return !1;
  let o = s.x,
    c = r.x,
    l = a.x,
    h = s.y,
    d = r.y,
    u = a.y,
    f = Math.min(o, c, l),
    g = Math.min(h, d, u),
    y = Math.max(o, c, l),
    m = Math.max(h, d, u),
    p = El(f, g, t, e, n),
    b = El(y, m, t, e, n),
    w = i.prevZ,
    v = i.nextZ;
  for (; w && w.z >= p && v && v.z <= b;) {
    if (
      (w.x >= f &&
        w.x <= y &&
        w.y >= g &&
        w.y <= m &&
        w !== s &&
        w !== a &&
        ms(o, h, c, d, l, u, w.x, w.y) &&
        xe(w.prev, w, w.next) >= 0) ||
      ((w = w.prevZ),
      v.x >= f &&
        v.x <= y &&
        v.y >= g &&
        v.y <= m &&
        v !== s &&
        v !== a &&
        ms(o, h, c, d, l, u, v.x, v.y) &&
        xe(v.prev, v, v.next) >= 0)
    )
      return !1;
    v = v.nextZ;
  }
  for (; w && w.z >= p;) {
    if (
      w.x >= f &&
      w.x <= y &&
      w.y >= g &&
      w.y <= m &&
      w !== s &&
      w !== a &&
      ms(o, h, c, d, l, u, w.x, w.y) &&
      xe(w.prev, w, w.next) >= 0
    )
      return !1;
    w = w.prevZ;
  }
  for (; v && v.z <= b;) {
    if (
      v.x >= f &&
      v.x <= y &&
      v.y >= g &&
      v.y <= m &&
      v !== s &&
      v !== a &&
      ms(o, h, c, d, l, u, v.x, v.y) &&
      xe(v.prev, v, v.next) >= 0
    )
      return !1;
    v = v.nextZ;
  }
  return !0;
}
function nf(i, t) {
  let e = i;
  do {
    let n = e.prev,
      s = e.next.next;
    (!ts(n, s) &&
      Mu(n, e, e.next, s) &&
      Us(n, s) &&
      Us(s, n) &&
      (t.push(n.i, e.i, s.i), Fs(e), Fs(e.next), (e = i = s)),
      (e = e.next));
  } while (e !== i);
  return Mi(e);
}
function sf(i, t, e, n, s, r) {
  let a = i;
  do {
    let o = a.next.next;
    for (; o !== a.prev;) {
      if (a.i !== o.i && ff(a, o)) {
        let c = Su(a, o);
        ((a = Mi(a, a.next)),
          (c = Mi(c, c.next)),
          Ns(a, t, e, n, s, r, 0),
          Ns(c, t, e, n, s, r, 0));
        return;
      }
      o = o.next;
    }
    a = a.next;
  } while (a !== i);
}
function rf(i, t, e, n) {
  let s = [];
  for (let r = 0, a = t.length; r < a; r++) {
    let o = t[r] * n,
      c = r < a - 1 ? t[r + 1] * n : i.length,
      l = yu(i, o, c, n, !1);
    (l === l.next && (l.steiner = !0), s.push(df(l)));
  }
  s.sort(af);
  for (let r = 0; r < s.length; r++) e = of(s[r], e);
  return e;
}
function af(i, t) {
  let e = i.x - t.x;
  if (e === 0 && ((e = i.y - t.y), e === 0)) {
    let n = (i.next.y - i.y) / (i.next.x - i.x),
      s = (t.next.y - t.y) / (t.next.x - t.x);
    e = n - s;
  }
  return e;
}
function of(i, t) {
  let e = lf(i, t);
  if (!e) return t;
  let n = Su(e, i);
  return (Mi(n, n.next), Mi(e, e.next));
}
function lf(i, t) {
  let e = t,
    n = i.x,
    s = i.y,
    r = -1 / 0,
    a;
  if (ts(i, e)) return e;
  do {
    if (ts(i, e.next)) return e.next;
    if (s <= e.y && s >= e.next.y && e.next.y !== e.y) {
      let d = e.x + ((s - e.y) * (e.next.x - e.x)) / (e.next.y - e.y);
      if (
        d <= n &&
        d > r &&
        ((r = d), (a = e.x < e.next.x ? e : e.next), d === n)
      )
        return a;
    }
    e = e.next;
  } while (e !== t);
  if (!a) return null;
  let o = a,
    c = a.x,
    l = a.y,
    h = 1 / 0;
  e = a;
  do {
    if (
      n >= e.x &&
      e.x >= c &&
      n !== e.x &&
      vu(s < l ? n : r, s, c, l, s < l ? r : n, s, e.x, e.y)
    ) {
      let d = Math.abs(s - e.y) / (n - e.x);
      Us(e, i) &&
        (d < h || (d === h && (e.x > a.x || (e.x === a.x && cf(a, e))))) &&
        ((a = e), (h = d));
    }
    e = e.next;
  } while (e !== o);
  return a;
}
function cf(i, t) {
  return xe(i.prev, i, t.prev) < 0 && xe(t.next, i, i.next) < 0;
}
function hf(i, t, e, n) {
  let s = i;
  do
    (s.z === 0 && (s.z = El(s.x, s.y, t, e, n)),
      (s.prevZ = s.prev),
      (s.nextZ = s.next),
      (s = s.next));
  while (s !== i);
  ((s.prevZ.nextZ = null), (s.prevZ = null), uf(s));
}
function uf(i) {
  let t,
    e = 1;
  do {
    let n = i,
      s;
    i = null;
    let r = null;
    for (t = 0; n;) {
      t++;
      let a = n,
        o = 0;
      for (let l = 0; l < e && (o++, (a = a.nextZ), !!a); l++);
      let c = e;
      for (; o > 0 || (c > 0 && a);)
        (o !== 0 && (c === 0 || !a || n.z <= a.z)
          ? ((s = n), (n = n.nextZ), o--)
          : ((s = a), (a = a.nextZ), c--),
          r ? (r.nextZ = s) : (i = s),
          (s.prevZ = r),
          (r = s));
      n = a;
    }
    ((r.nextZ = null), (e *= 2));
  } while (t > 1);
  return i;
}
function El(i, t, e, n, s) {
  return (
    (i = ((i - e) * s) | 0),
    (t = ((t - n) * s) | 0),
    (i = (i | (i << 8)) & 16711935),
    (i = (i | (i << 4)) & 252645135),
    (i = (i | (i << 2)) & 858993459),
    (i = (i | (i << 1)) & 1431655765),
    (t = (t | (t << 8)) & 16711935),
    (t = (t | (t << 4)) & 252645135),
    (t = (t | (t << 2)) & 858993459),
    (t = (t | (t << 1)) & 1431655765),
    i | (t << 1)
  );
}
function df(i) {
  let t = i,
    e = i;
  do ((t.x < e.x || (t.x === e.x && t.y < e.y)) && (e = t), (t = t.next));
  while (t !== i);
  return e;
}
function vu(i, t, e, n, s, r, a, o) {
  return (
    (s - a) * (t - o) >= (i - a) * (r - o) &&
    (i - a) * (n - o) >= (e - a) * (t - o) &&
    (e - a) * (r - o) >= (s - a) * (n - o)
  );
}
function ms(i, t, e, n, s, r, a, o) {
  return !(i === a && t === o) && vu(i, t, e, n, s, r, a, o);
}
function ff(i, t) {
  return (
    i.next.i !== t.i &&
    i.prev.i !== t.i &&
    !pf(i, t) &&
    ((Us(i, t) &&
      Us(t, i) &&
      mf(i, t) &&
      (xe(i.prev, i, t.prev) || xe(i, t.prev, t))) ||
      (ts(i, t) && xe(i.prev, i, i.next) > 0 && xe(t.prev, t, t.next) > 0))
  );
}
function xe(i, t, e) {
  return (t.y - i.y) * (e.x - t.x) - (t.x - i.x) * (e.y - t.y);
}
function ts(i, t) {
  return i.x === t.x && i.y === t.y;
}
function Mu(i, t, e, n) {
  let s = Lr(xe(i, t, e)),
    r = Lr(xe(i, t, n)),
    a = Lr(xe(e, n, i)),
    o = Lr(xe(e, n, t));
  return !!(
    (s !== r && a !== o) ||
    (s === 0 && Pr(i, e, t)) ||
    (r === 0 && Pr(i, n, t)) ||
    (a === 0 && Pr(e, i, n)) ||
    (o === 0 && Pr(e, t, n))
  );
}
function Pr(i, t, e) {
  return (
    t.x <= Math.max(i.x, e.x) &&
    t.x >= Math.min(i.x, e.x) &&
    t.y <= Math.max(i.y, e.y) &&
    t.y >= Math.min(i.y, e.y)
  );
}
function Lr(i) {
  return i > 0 ? 1 : i < 0 ? -1 : 0;
}
function pf(i, t) {
  let e = i;
  do {
    if (
      e.i !== i.i &&
      e.next.i !== i.i &&
      e.i !== t.i &&
      e.next.i !== t.i &&
      Mu(e, e.next, i, t)
    )
      return !0;
    e = e.next;
  } while (e !== i);
  return !1;
}
function Us(i, t) {
  return xe(i.prev, i, i.next) < 0
    ? xe(i, t, i.next) >= 0 && xe(i, i.prev, t) >= 0
    : xe(i, t, i.prev) < 0 || xe(i, i.next, t) < 0;
}
function mf(i, t) {
  let e = i,
    n = !1,
    s = (i.x + t.x) / 2,
    r = (i.y + t.y) / 2;
  do
    (e.y > r != e.next.y > r &&
      e.next.y !== e.y &&
      s < ((e.next.x - e.x) * (r - e.y)) / (e.next.y - e.y) + e.x &&
      (n = !n),
      (e = e.next));
  while (e !== i);
  return n;
}
function Su(i, t) {
  let e = Tl(i.i, i.x, i.y),
    n = Tl(t.i, t.x, t.y),
    s = i.next,
    r = t.prev;
  return (
    (i.next = t),
    (t.prev = i),
    (e.next = s),
    (s.prev = e),
    (n.next = e),
    (e.prev = n),
    (r.next = n),
    (n.prev = r),
    n
  );
}
function Eh(i, t, e, n) {
  let s = Tl(i, t, e);
  return (
    n
      ? ((s.next = n.next), (s.prev = n), (n.next.prev = s), (n.next = s))
      : ((s.prev = s), (s.next = s)),
    s
  );
}
function Fs(i) {
  ((i.next.prev = i.prev),
    (i.prev.next = i.next),
    i.prevZ && (i.prevZ.nextZ = i.nextZ),
    i.nextZ && (i.nextZ.prevZ = i.prevZ));
}
function Tl(i, t, e) {
  return {
    i,
    x: t,
    y: e,
    prev: null,
    next: null,
    z: 0,
    prevZ: null,
    nextZ: null,
    steiner: !1,
  };
}
function gf(i, t, e, n) {
  let s = 0;
  for (let r = t, a = e - n; r < e; r += n)
    ((s += (i[a] - i[r]) * (i[r + 1] + i[a + 1])), (a = r));
  return s;
}
var Al = class {
    static triangulate(t, e, n = 2) {
      return jd(t, e, n);
    }
  },
  xn = class i {
    static area(t) {
      let e = t.length,
        n = 0;
      for (let s = e - 1, r = 0; r < e; s = r++)
        n += t[s].x * t[r].y - t[r].x * t[s].y;
      return n * 0.5;
    }
    static isClockWise(t) {
      return i.area(t) < 0;
    }
    static triangulateShape(t, e) {
      let n = [],
        s = [],
        r = [];
      (Th(t), Ah(n, t));
      let a = t.length;
      e.forEach(Th);
      for (let c = 0; c < e.length; c++)
        (s.push(a), (a += e[c].length), Ah(n, e[c]));
      let o = Al.triangulate(n, s);
      for (let c = 0; c < o.length; c += 3) r.push(o.slice(c, c + 3));
      return r;
    }
  };
function Th(i) {
  let t = i.length;
  t > 2 && i[t - 1].equals(i[0]) && i.pop();
}
function Ah(i, t) {
  for (let e = 0; e < t.length; e++) (i.push(t[e].x), i.push(t[e].y));
}
var Cl = class i extends me {
    constructor(
      t = new Ds([
        new ut(0.5, 0.5),
        new ut(-0.5, 0.5),
        new ut(-0.5, -0.5),
        new ut(0.5, -0.5),
      ]),
      e = {},
    ) {
      (super(),
        (this.type = "ExtrudeGeometry"),
        (this.parameters = { shapes: t, options: e }),
        (t = Array.isArray(t) ? t : [t]));
      let n = this,
        s = [],
        r = [];
      for (let o = 0, c = t.length; o < c; o++) {
        let l = t[o];
        a(l);
      }
      (this.setAttribute("position", new ne(s, 3)),
        this.setAttribute("uv", new ne(r, 2)),
        this.computeVertexNormals());
      function a(o) {
        let c = [],
          l = e.curveSegments !== void 0 ? e.curveSegments : 12,
          h = e.steps !== void 0 ? e.steps : 1,
          d = e.depth !== void 0 ? e.depth : 1,
          u = e.bevelEnabled !== void 0 ? e.bevelEnabled : !0,
          f = e.bevelThickness !== void 0 ? e.bevelThickness : 0.2,
          g = e.bevelSize !== void 0 ? e.bevelSize : f - 0.1,
          y = e.bevelOffset !== void 0 ? e.bevelOffset : 0,
          m = e.bevelSegments !== void 0 ? e.bevelSegments : 3,
          p = e.extrudePath,
          b = e.UVGenerator !== void 0 ? e.UVGenerator : _f,
          w,
          v = !1,
          A,
          T,
          R,
          _;
        if (p) {
          ((w = p.getSpacedPoints(h)), (v = !0), (u = !1));
          let et = p.isCatmullRomCurve3 ? p.closed : !1;
          ((A = p.computeFrenetFrames(h, et)),
            (T = new L()),
            (R = new L()),
            (_ = new L()));
        }
        u || ((m = 0), (f = 0), (g = 0), (y = 0));
        let S = o.extractPoints(l),
          C = S.shape,
          I = S.holes;
        if (!xn.isClockWise(C)) {
          C = C.reverse();
          for (let et = 0, rt = I.length; et < rt; et++) {
            let st = I[et];
            xn.isClockWise(st) && (I[et] = st.reverse());
          }
        }
        function Z(et) {
          let st = 10000000000000001e-36,
            yt = et[0];
          for (let gt = 1; gt <= et.length; gt++) {
            let Ft = gt % et.length,
              Rt = et[Ft],
              kt = Rt.x - yt.x,
              Xt = Rt.y - yt.y,
              P = kt * kt + Xt * Xt,
              ae = Math.max(
                Math.abs(Rt.x),
                Math.abs(Rt.y),
                Math.abs(yt.x),
                Math.abs(yt.y),
              ),
              jt = st * ae * ae;
            if (P <= jt) {
              (et.splice(Ft, 1), gt--);
              continue;
            }
            yt = Rt;
          }
        }
        (Z(C), I.forEach(Z));
        let k = I.length,
          F = C;
        for (let et = 0; et < k; et++) {
          let rt = I[et];
          C = C.concat(rt);
        }
        function X(et, rt, st) {
          return (
            rt || Ot("ExtrudeGeometry: vec does not exist"),
            et.clone().addScaledVector(rt, st)
          );
        }
        let V = C.length;
        function D(et, rt, st) {
          let yt,
            gt,
            Ft,
            Rt = et.x - rt.x,
            kt = et.y - rt.y,
            Xt = st.x - et.x,
            P = st.y - et.y,
            ae = Rt * Rt + kt * kt,
            jt = Rt * P - kt * Xt;
          if (Math.abs(jt) > Number.EPSILON) {
            let E = Math.sqrt(ae),
              x = Math.sqrt(Xt * Xt + P * P),
              z = rt.x - kt / E,
              W = rt.y + Rt / E,
              J = st.x - P / x,
              ot = st.y + Xt / x,
              ht = ((J - z) * P - (ot - W) * Xt) / (Rt * P - kt * Xt);
            ((yt = z + Rt * ht - et.x), (gt = W + kt * ht - et.y));
            let $ = yt * yt + gt * gt;
            if ($ <= 2) return new ut(yt, gt);
            Ft = Math.sqrt($ / 2);
          } else {
            let E = !1;
            (Rt > Number.EPSILON
              ? Xt > Number.EPSILON && (E = !0)
              : Rt < -Number.EPSILON
                ? Xt < -Number.EPSILON && (E = !0)
                : Math.sign(kt) === Math.sign(P) && (E = !0),
              E
                ? ((yt = -kt), (gt = Rt), (Ft = Math.sqrt(ae)))
                : ((yt = Rt), (gt = kt), (Ft = Math.sqrt(ae / 2))));
          }
          return new ut(yt / Ft, gt / Ft);
        }
        let B = [];
        for (
          let et = 0, rt = F.length, st = rt - 1, yt = et + 1;
          et < rt;
          et++, st++, yt++
        )
          (st === rt && (st = 0),
            yt === rt && (yt = 0),
            (B[et] = D(F[et], F[st], F[yt])));
        let q = [],
          K,
          it = B.concat();
        for (let et = 0, rt = k; et < rt; et++) {
          let st = I[et];
          K = [];
          for (
            let yt = 0, gt = st.length, Ft = gt - 1, Rt = yt + 1;
            yt < gt;
            yt++, Ft++, Rt++
          )
            (Ft === gt && (Ft = 0),
              Rt === gt && (Rt = 0),
              (K[yt] = D(st[yt], st[Ft], st[Rt])));
          (q.push(K), (it = it.concat(K)));
        }
        let lt;
        if (m === 0) lt = xn.triangulateShape(F, I);
        else {
          let et = [],
            rt = [];
          for (let st = 0; st < m; st++) {
            let yt = st / m,
              gt = f * Math.cos((yt * Math.PI) / 2),
              Ft = g * Math.sin((yt * Math.PI) / 2) + y;
            for (let Rt = 0, kt = F.length; Rt < kt; Rt++) {
              let Xt = X(F[Rt], B[Rt], Ft);
              (At(Xt.x, Xt.y, -gt), yt === 0 && et.push(Xt));
            }
            for (let Rt = 0, kt = k; Rt < kt; Rt++) {
              let Xt = I[Rt];
              K = q[Rt];
              let P = [];
              for (let ae = 0, jt = Xt.length; ae < jt; ae++) {
                let E = X(Xt[ae], K[ae], Ft);
                (At(E.x, E.y, -gt), yt === 0 && P.push(E));
              }
              yt === 0 && rt.push(P);
            }
          }
          lt = xn.triangulateShape(et, rt);
        }
        let Vt = lt.length,
          Kt = g + y;
        for (let et = 0; et < V; et++) {
          let rt = u ? X(C[et], it[et], Kt) : C[et];
          v
            ? (R.copy(A.normals[0]).multiplyScalar(rt.x),
              T.copy(A.binormals[0]).multiplyScalar(rt.y),
              _.copy(w[0]).add(R).add(T),
              At(_.x, _.y, _.z))
            : At(rt.x, rt.y, 0);
        }
        for (let et = 1; et <= h; et++)
          for (let rt = 0; rt < V; rt++) {
            let st = u ? X(C[rt], it[rt], Kt) : C[rt];
            v
              ? (R.copy(A.normals[et]).multiplyScalar(st.x),
                T.copy(A.binormals[et]).multiplyScalar(st.y),
                _.copy(w[et]).add(R).add(T),
                At(_.x, _.y, _.z))
              : At(st.x, st.y, (d / h) * et);
          }
        for (let et = m - 1; et >= 0; et--) {
          let rt = et / m,
            st = f * Math.cos((rt * Math.PI) / 2),
            yt = g * Math.sin((rt * Math.PI) / 2) + y;
          for (let gt = 0, Ft = F.length; gt < Ft; gt++) {
            let Rt = X(F[gt], B[gt], yt);
            At(Rt.x, Rt.y, d + st);
          }
          for (let gt = 0, Ft = I.length; gt < Ft; gt++) {
            let Rt = I[gt];
            K = q[gt];
            for (let kt = 0, Xt = Rt.length; kt < Xt; kt++) {
              let P = X(Rt[kt], K[kt], yt);
              v
                ? At(P.x, P.y + w[h - 1].y, w[h - 1].x + st)
                : At(P.x, P.y, d + st);
            }
          }
        }
        (Q(), ct());
        function Q() {
          let et = s.length / 3;
          if (u) {
            let rt = 0,
              st = V * rt;
            for (let yt = 0; yt < Vt; yt++) {
              let gt = lt[yt];
              zt(gt[2] + st, gt[1] + st, gt[0] + st);
            }
            ((rt = h + m * 2), (st = V * rt));
            for (let yt = 0; yt < Vt; yt++) {
              let gt = lt[yt];
              zt(gt[0] + st, gt[1] + st, gt[2] + st);
            }
          } else {
            for (let rt = 0; rt < Vt; rt++) {
              let st = lt[rt];
              zt(st[2], st[1], st[0]);
            }
            for (let rt = 0; rt < Vt; rt++) {
              let st = lt[rt];
              zt(st[0] + V * h, st[1] + V * h, st[2] + V * h);
            }
          }
          n.addGroup(et, s.length / 3 - et, 0);
        }
        function ct() {
          let et = s.length / 3,
            rt = 0;
          (at(F, rt), (rt += F.length));
          for (let st = 0, yt = I.length; st < yt; st++) {
            let gt = I[st];
            (at(gt, rt), (rt += gt.length));
          }
          n.addGroup(et, s.length / 3 - et, 1);
        }
        function at(et, rt) {
          let st = et.length;
          for (; --st >= 0;) {
            let yt = st,
              gt = st - 1;
            gt < 0 && (gt = et.length - 1);
            for (let Ft = 0, Rt = h + m * 2; Ft < Rt; Ft++) {
              let kt = V * Ft,
                Xt = V * (Ft + 1),
                P = rt + yt + kt,
                ae = rt + gt + kt,
                jt = rt + gt + Xt,
                E = rt + yt + Xt;
              Ut(P, ae, jt, E);
            }
          }
        }
        function At(et, rt, st) {
          (c.push(et), c.push(rt), c.push(st));
        }
        function zt(et, rt, st) {
          (se(et), se(rt), se(st));
          let yt = s.length / 3,
            gt = b.generateTopUV(n, s, yt - 3, yt - 2, yt - 1);
          (Gt(gt[0]), Gt(gt[1]), Gt(gt[2]));
        }
        function Ut(et, rt, st, yt) {
          (se(et), se(rt), se(yt), se(rt), se(st), se(yt));
          let gt = s.length / 3,
            Ft = b.generateSideWallUV(n, s, gt - 6, gt - 3, gt - 2, gt - 1);
          (Gt(Ft[0]), Gt(Ft[1]), Gt(Ft[3]), Gt(Ft[1]), Gt(Ft[2]), Gt(Ft[3]));
        }
        function se(et) {
          (s.push(c[et * 3 + 0]), s.push(c[et * 3 + 1]), s.push(c[et * 3 + 2]));
        }
        function Gt(et) {
          (r.push(et.x), r.push(et.y));
        }
      }
    }
    copy(t) {
      return (
        super.copy(t),
        (this.parameters = Object.assign({}, t.parameters)),
        this
      );
    }
    toJSON() {
      let t = super.toJSON(),
        e = this.parameters.shapes,
        n = this.parameters.options;
      return xf(e, n, t);
    }
    static fromJSON(t, e) {
      let n = [];
      for (let r = 0, a = t.shapes.length; r < a; r++) {
        let o = e[t.shapes[r]];
        n.push(o);
      }
      let s = t.options.extrudePath;
      return (
        s !== void 0 && (t.options.extrudePath = new wl[s.type]().fromJSON(s)),
        new i(n, t.options)
      );
    }
  },
  _f = {
    generateTopUV: function (i, t, e, n, s) {
      let r = t[e * 3],
        a = t[e * 3 + 1],
        o = t[n * 3],
        c = t[n * 3 + 1],
        l = t[s * 3],
        h = t[s * 3 + 1];
      return [new ut(r, a), new ut(o, c), new ut(l, h)];
    },
    generateSideWallUV: function (i, t, e, n, s, r) {
      let a = t[e * 3],
        o = t[e * 3 + 1],
        c = t[e * 3 + 2],
        l = t[n * 3],
        h = t[n * 3 + 1],
        d = t[n * 3 + 2],
        u = t[s * 3],
        f = t[s * 3 + 1],
        g = t[s * 3 + 2],
        y = t[r * 3],
        m = t[r * 3 + 1],
        p = t[r * 3 + 2];
      return Math.abs(o - h) < Math.abs(a - l)
        ? [
            new ut(a, 1 - c),
            new ut(l, 1 - d),
            new ut(u, 1 - g),
            new ut(y, 1 - p),
          ]
        : [
            new ut(o, 1 - c),
            new ut(h, 1 - d),
            new ut(f, 1 - g),
            new ut(m, 1 - p),
          ];
    },
  };
function xf(i, t, e) {
  if (((e.shapes = []), Array.isArray(i)))
    for (let n = 0, s = i.length; n < s; n++) {
      let r = i[n];
      e.shapes.push(r.uuid);
    }
  else e.shapes.push(i.uuid);
  return (
    (e.options = Object.assign({}, t)),
    t.extrudePath !== void 0 &&
      (e.options.extrudePath = t.extrudePath.toJSON()),
    e
  );
}
var Ee = class i extends me {
  constructor(t = 1, e = 1, n = 1, s = 1) {
    (super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: t,
        height: e,
        widthSegments: n,
        heightSegments: s,
      }));
    let r = t / 2,
      a = e / 2,
      o = Math.floor(n),
      c = Math.floor(s),
      l = o + 1,
      h = c + 1,
      d = t / o,
      u = e / c,
      f = [],
      g = [],
      y = [],
      m = [];
    for (let p = 0; p < h; p++) {
      let b = p * u - a;
      for (let w = 0; w < l; w++) {
        let v = w * d - r;
        (g.push(v, -b, 0), y.push(0, 0, 1), m.push(w / o), m.push(1 - p / c));
      }
    }
    for (let p = 0; p < c; p++)
      for (let b = 0; b < o; b++) {
        let w = b + l * p,
          v = b + l * (p + 1),
          A = b + 1 + l * (p + 1),
          T = b + 1 + l * p;
        (f.push(w, v, T), f.push(v, A, T));
      }
    (this.setIndex(f),
      this.setAttribute("position", new ne(g, 3)),
      this.setAttribute("normal", new ne(y, 3)),
      this.setAttribute("uv", new ne(m, 2)));
  }
  copy(t) {
    return (
      super.copy(t),
      (this.parameters = Object.assign({}, t.parameters)),
      this
    );
  }
  static fromJSON(t) {
    return new i(t.width, t.height, t.widthSegments, t.heightSegments);
  }
};
var Rl = class i extends me {
  constructor(
    t = new Ds([new ut(0, 0.5), new ut(-0.5, -0.5), new ut(0.5, -0.5)]),
    e = 12,
  ) {
    (super(),
      (this.type = "ShapeGeometry"),
      (this.parameters = { shapes: t, curveSegments: e }));
    let n = [],
      s = [],
      r = [],
      a = [],
      o = 0,
      c = 0;
    if (Array.isArray(t) === !1) l(t);
    else
      for (let h = 0; h < t.length; h++)
        (l(t[h]), this.addGroup(o, c, h), (o += c), (c = 0));
    (this.setIndex(n),
      this.setAttribute("position", new ne(s, 3)),
      this.setAttribute("normal", new ne(r, 3)),
      this.setAttribute("uv", new ne(a, 2)));
    function l(h) {
      let d = s.length / 3,
        u = h.extractPoints(e),
        f = u.shape,
        g = u.holes;
      xn.isClockWise(f) === !1 && (f = f.reverse());
      for (let m = 0, p = g.length; m < p; m++) {
        let b = g[m];
        xn.isClockWise(b) === !0 && (g[m] = b.reverse());
      }
      let y = xn.triangulateShape(f, g);
      for (let m = 0, p = g.length; m < p; m++) {
        let b = g[m];
        f = f.concat(b);
      }
      for (let m = 0, p = f.length; m < p; m++) {
        let b = f[m];
        (s.push(b.x, b.y, 0), r.push(0, 0, 1), a.push(b.x, b.y));
      }
      for (let m = 0, p = y.length; m < p; m++) {
        let b = y[m],
          w = b[0] + d,
          v = b[1] + d,
          A = b[2] + d;
        (n.push(w, v, A), (c += 3));
      }
    }
  }
  copy(t) {
    return (
      super.copy(t),
      (this.parameters = Object.assign({}, t.parameters)),
      this
    );
  }
  toJSON() {
    let t = super.toJSON(),
      e = this.parameters.shapes;
    return yf(e, t);
  }
  static fromJSON(t, e) {
    let n = [];
    for (let s = 0, r = t.shapes.length; s < r; s++) {
      let a = e[t.shapes[s]];
      n.push(a);
    }
    return new i(n, t.curveSegments);
  }
};
function yf(i, t) {
  if (((t.shapes = []), Array.isArray(i)))
    for (let e = 0, n = i.length; e < n; e++) {
      let s = i[e];
      t.shapes.push(s.uuid);
    }
  else t.shapes.push(i.uuid);
  return t;
}
var Os = class i extends me {
  constructor(
    t = 1,
    e = 32,
    n = 16,
    s = 0,
    r = Math.PI * 2,
    a = 0,
    o = Math.PI,
  ) {
    (super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: t,
        widthSegments: e,
        heightSegments: n,
        phiStart: s,
        phiLength: r,
        thetaStart: a,
        thetaLength: o,
      }),
      (e = Math.max(3, Math.floor(e))),
      (n = Math.max(2, Math.floor(n))));
    let c = Math.min(a + o, Math.PI),
      l = 0,
      h = [],
      d = new L(),
      u = new L(),
      f = [],
      g = [],
      y = [],
      m = [];
    for (let p = 0; p <= n; p++) {
      let b = [],
        w = p / n,
        v = a + w * o,
        A = t * Math.cos(v),
        T = Math.sqrt(t * t - A * A),
        R = 0;
      p === 0 && a === 0
        ? (R = 0.5 / e)
        : p === n && c === Math.PI && (R = -0.5 / e);
      for (let _ = 0; _ <= e; _++) {
        let S = _ / e,
          C = s + S * r;
        ((d.x = -T * Math.cos(C)),
          (d.y = A),
          (d.z = T * Math.sin(C)),
          g.push(d.x, d.y, d.z),
          u.copy(d).normalize(),
          y.push(u.x, u.y, u.z),
          m.push(S + R, 1 - w),
          b.push(l++));
      }
      h.push(b);
    }
    for (let p = 0; p < n; p++)
      for (let b = 0; b < e; b++) {
        let w = h[p][b + 1],
          v = h[p][b],
          A = h[p + 1][b],
          T = h[p + 1][b + 1];
        ((p !== 0 || a > 0) && f.push(w, v, T),
          (p !== n - 1 || c < Math.PI) && f.push(v, A, T));
      }
    (this.setIndex(f),
      this.setAttribute("position", new ne(g, 3)),
      this.setAttribute("normal", new ne(y, 3)),
      this.setAttribute("uv", new ne(m, 2)));
  }
  copy(t) {
    return (
      super.copy(t),
      (this.parameters = Object.assign({}, t.parameters)),
      this
    );
  }
  static fromJSON(t) {
    return new i(
      t.radius,
      t.widthSegments,
      t.heightSegments,
      t.phiStart,
      t.phiLength,
      t.thetaStart,
      t.thetaLength,
    );
  }
};
function Ei(i) {
  let t = {};
  for (let e in i) {
    t[e] = {};
    for (let n in i[e]) {
      let s = i[e][n];
      if (Ch(s))
        s.isRenderTargetTexture
          ? (Nt(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().",
            ),
            (t[e][n] = null))
          : (t[e][n] = s.clone());
      else if (Array.isArray(s))
        if (Ch(s[0])) {
          let r = [];
          for (let a = 0, o = s.length; a < o; a++) r[a] = s[a].clone();
          t[e][n] = r;
        } else t[e][n] = s.slice();
      else t[e][n] = s;
    }
  }
  return t;
}
function ze(i) {
  let t = {};
  for (let e = 0; e < i.length; e++) {
    let n = Ei(i[e]);
    for (let s in n) t[s] = n[s];
  }
  return t;
}
function Ch(i) {
  return (
    i &&
    (i.isColor ||
      i.isMatrix3 ||
      i.isMatrix4 ||
      i.isVector2 ||
      i.isVector3 ||
      i.isVector4 ||
      i.isTexture ||
      i.isQuaternion)
  );
}
function vf(i) {
  let t = [];
  for (let e = 0; e < i.length; e++) t.push(i[e].clone());
  return t;
}
function cc(i) {
  let t = i.getRenderTarget();
  return t === null
    ? i.outputColorSpace
    : t.isXRRenderTarget === !0
      ? t.texture.colorSpace
      : ee.workingColorSpace;
}
var bu = { clone: Ei, merge: ze },
  Mf = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Sf = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,
  Je = class extends Sn {
    constructor(t) {
      (super(),
        (this.isShaderMaterial = !0),
        (this.type = "ShaderMaterial"),
        (this.defines = {}),
        (this.uniforms = {}),
        (this.uniformsGroups = []),
        (this.vertexShader = Mf),
        (this.fragmentShader = Sf),
        (this.linewidth = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.fog = !1),
        (this.lights = !1),
        (this.clipping = !1),
        (this.forceSinglePass = !0),
        (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
        (this.defaultAttributeValues = {
          color: [1, 1, 1],
          uv: [0, 0],
          uv1: [0, 0],
        }),
        (this.index0AttributeName = void 0),
        (this.uniformsNeedUpdate = !1),
        (this.glslVersion = null),
        t !== void 0 && this.setValues(t));
    }
    copy(t) {
      return (
        super.copy(t),
        (this.fragmentShader = t.fragmentShader),
        (this.vertexShader = t.vertexShader),
        (this.uniforms = Ei(t.uniforms)),
        (this.uniformsGroups = vf(t.uniformsGroups)),
        (this.defines = Object.assign({}, t.defines)),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.fog = t.fog),
        (this.lights = t.lights),
        (this.clipping = t.clipping),
        (this.extensions = Object.assign({}, t.extensions)),
        (this.glslVersion = t.glslVersion),
        (this.defaultAttributeValues = Object.assign(
          {},
          t.defaultAttributeValues,
        )),
        (this.index0AttributeName = t.index0AttributeName),
        (this.uniformsNeedUpdate = t.uniformsNeedUpdate),
        this
      );
    }
    toJSON(t) {
      let e = super.toJSON(t);
      ((e.glslVersion = this.glslVersion), (e.uniforms = {}));
      for (let s in this.uniforms) {
        let a = this.uniforms[s].value;
        a && a.isTexture
          ? (e.uniforms[s] = { type: "t", value: a.toJSON(t).uuid })
          : a && a.isColor
            ? (e.uniforms[s] = { type: "c", value: a.getHex() })
            : a && a.isVector2
              ? (e.uniforms[s] = { type: "v2", value: a.toArray() })
              : a && a.isVector3
                ? (e.uniforms[s] = { type: "v3", value: a.toArray() })
                : a && a.isVector4
                  ? (e.uniforms[s] = { type: "v4", value: a.toArray() })
                  : a && a.isMatrix3
                    ? (e.uniforms[s] = { type: "m3", value: a.toArray() })
                    : a && a.isMatrix4
                      ? (e.uniforms[s] = { type: "m4", value: a.toArray() })
                      : (e.uniforms[s] = { value: a });
      }
      (Object.keys(this.defines).length > 0 && (e.defines = this.defines),
        (e.vertexShader = this.vertexShader),
        (e.fragmentShader = this.fragmentShader),
        (e.lights = this.lights),
        (e.clipping = this.clipping));
      let n = {};
      for (let s in this.extensions) this.extensions[s] === !0 && (n[s] = !0);
      return (Object.keys(n).length > 0 && (e.extensions = n), e);
    }
    fromJSON(t, e) {
      if ((super.fromJSON(t, e), t.uniforms !== void 0))
        for (let n in t.uniforms) {
          let s = t.uniforms[n];
          switch (((this.uniforms[n] = {}), s.type)) {
            case "t":
              this.uniforms[n].value = e[s.value] || null;
              break;
            case "c":
              this.uniforms[n].value = new Jt().setHex(s.value);
              break;
            case "v2":
              this.uniforms[n].value = new ut().fromArray(s.value);
              break;
            case "v3":
              this.uniforms[n].value = new L().fromArray(s.value);
              break;
            case "v4":
              this.uniforms[n].value = new _e().fromArray(s.value);
              break;
            case "m3":
              this.uniforms[n].value = new Ht().fromArray(s.value);
              break;
            case "m4":
              this.uniforms[n].value = new he().fromArray(s.value);
              break;
            default:
              this.uniforms[n].value = s.value;
          }
        }
      if (
        (t.defines !== void 0 && (this.defines = t.defines),
        t.vertexShader !== void 0 && (this.vertexShader = t.vertexShader),
        t.fragmentShader !== void 0 && (this.fragmentShader = t.fragmentShader),
        t.glslVersion !== void 0 && (this.glslVersion = t.glslVersion),
        t.extensions !== void 0)
      )
        for (let n in t.extensions) this.extensions[n] = t.extensions[n];
      return (
        t.lights !== void 0 && (this.lights = t.lights),
        t.clipping !== void 0 && (this.clipping = t.clipping),
        this
      );
    }
  },
  da = class extends Je {
    constructor(t) {
      (super(t),
        (this.isRawShaderMaterial = !0),
        (this.type = "RawShaderMaterial"));
    }
  },
  Bs = class extends Sn {
    constructor(t) {
      (super(),
        (this.isMeshStandardMaterial = !0),
        (this.type = "MeshStandardMaterial"),
        (this.defines = { STANDARD: "" }),
        (this.color = new Jt(16777215)),
        (this.roughness = 1),
        (this.metalness = 0),
        (this.map = null),
        (this.lightMap = null),
        (this.lightMapIntensity = 1),
        (this.aoMap = null),
        (this.aoMapIntensity = 1),
        (this.emissive = new Jt(0)),
        (this.emissiveIntensity = 1),
        (this.emissiveMap = null),
        (this.bumpMap = null),
        (this.bumpScale = 1),
        (this.normalMap = null),
        (this.normalMapType = go),
        (this.normalScale = new ut(1, 1)),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.roughnessMap = null),
        (this.metalnessMap = null),
        (this.alphaMap = null),
        (this.envMap = null),
        (this.envMapRotation = new On()),
        (this.envMapIntensity = 1),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        (this.wireframeLinecap = "round"),
        (this.wireframeLinejoin = "round"),
        (this.flatShading = !1),
        (this.fog = !0),
        this.setValues(t));
    }
    copy(t) {
      return (
        super.copy(t),
        (this.defines = { STANDARD: "" }),
        this.color.copy(t.color),
        (this.roughness = t.roughness),
        (this.metalness = t.metalness),
        (this.map = t.map),
        (this.lightMap = t.lightMap),
        (this.lightMapIntensity = t.lightMapIntensity),
        (this.aoMap = t.aoMap),
        (this.aoMapIntensity = t.aoMapIntensity),
        this.emissive.copy(t.emissive),
        (this.emissiveMap = t.emissiveMap),
        (this.emissiveIntensity = t.emissiveIntensity),
        (this.bumpMap = t.bumpMap),
        (this.bumpScale = t.bumpScale),
        (this.normalMap = t.normalMap),
        (this.normalMapType = t.normalMapType),
        this.normalScale.copy(t.normalScale),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        (this.roughnessMap = t.roughnessMap),
        (this.metalnessMap = t.metalnessMap),
        (this.alphaMap = t.alphaMap),
        (this.envMap = t.envMap),
        this.envMapRotation.copy(t.envMapRotation),
        (this.envMapIntensity = t.envMapIntensity),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        (this.wireframeLinecap = t.wireframeLinecap),
        (this.wireframeLinejoin = t.wireframeLinejoin),
        (this.flatShading = t.flatShading),
        (this.fog = t.fog),
        this
      );
    }
  };
var fa = class extends Sn {
    constructor(t) {
      (super(),
        (this.isMeshDepthMaterial = !0),
        (this.type = "MeshDepthMaterial"),
        (this.depthPacking = au),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        (this.wireframe = !1),
        (this.wireframeLinewidth = 1),
        this.setValues(t));
    }
    copy(t) {
      return (
        super.copy(t),
        (this.depthPacking = t.depthPacking),
        (this.map = t.map),
        (this.alphaMap = t.alphaMap),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        (this.wireframe = t.wireframe),
        (this.wireframeLinewidth = t.wireframeLinewidth),
        this
      );
    }
  },
  pa = class extends Sn {
    constructor(t) {
      (super(),
        (this.isMeshDistanceMaterial = !0),
        (this.type = "MeshDistanceMaterial"),
        (this.map = null),
        (this.alphaMap = null),
        (this.displacementMap = null),
        (this.displacementScale = 1),
        (this.displacementBias = 0),
        this.setValues(t));
    }
    copy(t) {
      return (
        super.copy(t),
        (this.map = t.map),
        (this.alphaMap = t.alphaMap),
        (this.displacementMap = t.displacementMap),
        (this.displacementScale = t.displacementScale),
        (this.displacementBias = t.displacementBias),
        this
      );
    }
  };
function Dr(i, t) {
  return !i || i.constructor === t
    ? i
    : typeof t.BYTES_PER_ELEMENT == "number"
      ? new t(i)
      : Array.prototype.slice.call(i);
}
var ni = class {
    constructor(t, e, n, s) {
      ((this.parameterPositions = t),
        (this._cachedIndex = 0),
        (this.resultBuffer = s !== void 0 ? s : new e.constructor(n)),
        (this.sampleValues = e),
        (this.valueSize = n),
        (this.settings = null),
        (this.DefaultSettings_ = {}));
    }
    evaluate(t) {
      let e = this.parameterPositions,
        n = this._cachedIndex,
        s = e[n],
        r = e[n - 1];
      n: {
        t: {
          let a;
          e: {
            i: if (!(t < s)) {
              for (let o = n + 2; ;) {
                if (s === void 0) {
                  if (t < r) break i;
                  return (
                    (n = e.length),
                    (this._cachedIndex = n),
                    this.copySampleValue_(n - 1)
                  );
                }
                if (n === o) break;
                if (((r = s), (s = e[++n]), t < s)) break t;
              }
              a = e.length;
              break e;
            }
            if (!(t >= r)) {
              let o = e[1];
              t < o && ((n = 2), (r = o));
              for (let c = n - 2; ;) {
                if (r === void 0)
                  return ((this._cachedIndex = 0), this.copySampleValue_(0));
                if (n === c) break;
                if (((s = r), (r = e[--n - 1]), t >= r)) break t;
              }
              ((a = n), (n = 0));
              break e;
            }
            break n;
          }
          for (; n < a;) {
            let o = (n + a) >>> 1;
            t < e[o] ? (a = o) : (n = o + 1);
          }
          if (((s = e[n]), (r = e[n - 1]), r === void 0))
            return ((this._cachedIndex = 0), this.copySampleValue_(0));
          if (s === void 0)
            return (
              (n = e.length),
              (this._cachedIndex = n),
              this.copySampleValue_(n - 1)
            );
        }
        ((this._cachedIndex = n), this.intervalChanged_(n, r, s));
      }
      return this.interpolate_(n, r, t, s);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(t) {
      let e = this.resultBuffer,
        n = this.sampleValues,
        s = this.valueSize,
        r = t * s;
      for (let a = 0; a !== s; ++a) e[a] = n[r + a];
      return e;
    }
    interpolate_() {
      throw new Error("THREE.Interpolant: Call to abstract method.");
    }
    intervalChanged_() {}
  },
  ma = class extends ni {
    constructor(t, e, n, s) {
      (super(t, e, n, s),
        (this._weightPrev = -0),
        (this._offsetPrev = -0),
        (this._weightNext = -0),
        (this._offsetNext = -0),
        (this.DefaultSettings_ = { endingStart: dl, endingEnd: dl }));
    }
    intervalChanged_(t, e, n) {
      let s = this.parameterPositions,
        r = t - 2,
        a = t + 1,
        o = s[r],
        c = s[a];
      if (o === void 0)
        switch (this.getSettings_().endingStart) {
          case fl:
            ((r = t), (o = 2 * e - n));
            break;
          case pl:
            ((r = s.length - 2), (o = e + s[r] - s[r + 1]));
            break;
          default:
            ((r = t), (o = n));
        }
      if (c === void 0)
        switch (this.getSettings_().endingEnd) {
          case fl:
            ((a = t), (c = 2 * n - e));
            break;
          case pl:
            ((a = 1), (c = n + s[1] - s[0]));
            break;
          default:
            ((a = t - 1), (c = e));
        }
      let l = (n - e) * 0.5,
        h = this.valueSize;
      ((this._weightPrev = l / (e - o)),
        (this._weightNext = l / (c - n)),
        (this._offsetPrev = r * h),
        (this._offsetNext = a * h));
    }
    interpolate_(t, e, n, s) {
      let r = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        c = t * o,
        l = c - o,
        h = this._offsetPrev,
        d = this._offsetNext,
        u = this._weightPrev,
        f = this._weightNext,
        g = (n - e) / (s - e),
        y = g * g,
        m = y * g,
        p = -u * m + 2 * u * y - u * g,
        b = (1 + u) * m + (-1.5 - 2 * u) * y + (-0.5 + u) * g + 1,
        w = (-1 - f) * m + (1.5 + f) * y + 0.5 * g,
        v = f * m - f * y;
      for (let A = 0; A !== o; ++A)
        r[A] = p * a[h + A] + b * a[l + A] + w * a[c + A] + v * a[d + A];
      return r;
    }
  },
  ga = class extends ni {
    constructor(t, e, n, s) {
      super(t, e, n, s);
    }
    interpolate_(t, e, n, s) {
      let r = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        c = t * o,
        l = c - o,
        h = (n - e) / (s - e),
        d = 1 - h;
      for (let u = 0; u !== o; ++u) r[u] = a[l + u] * d + a[c + u] * h;
      return r;
    }
  },
  _a = class extends ni {
    constructor(t, e, n, s) {
      super(t, e, n, s);
    }
    interpolate_(t) {
      return this.copySampleValue_(t - 1);
    }
  },
  xa = class extends ni {
    interpolate_(t, e, n, s) {
      let r = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        c = t * o,
        l = c - o,
        h = this.inTangents,
        d = this.outTangents;
      if (!h || !d) {
        let g = (n - e) / (s - e),
          y = 1 - g;
        for (let m = 0; m !== o; ++m) r[m] = a[l + m] * y + a[c + m] * g;
        return r;
      }
      let u = o * 2,
        f = t - 1;
      for (let g = 0; g !== o; ++g) {
        let y = a[l + g],
          m = a[c + g],
          p = f * u + g * 2,
          b = d[p],
          w = d[p + 1],
          v = t * u + g * 2,
          A = h[v],
          T = h[v + 1],
          R = (n - e) / (s - e),
          _,
          S,
          C,
          I,
          U;
        for (let Z = 0; Z < 8; Z++) {
          ((_ = R * R), (S = _ * R), (C = 1 - R), (I = C * C), (U = I * C));
          let F = U * e + 3 * I * R * b + 3 * C * _ * A + S * s - n;
          if (Math.abs(F) < 1e-10) break;
          let X = 3 * I * (b - e) + 6 * C * R * (A - b) + 3 * _ * (s - A);
          if (Math.abs(X) < 1e-10) break;
          ((R = R - F / X), (R = Math.max(0, Math.min(1, R))));
        }
        r[g] = U * y + 3 * I * R * w + 3 * C * _ * T + S * m;
      }
      return r;
    }
  },
  $e = class {
    constructor(t, e, n, s) {
      if (t === void 0)
        throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (e === void 0 || e.length === 0)
        throw new Error(
          "THREE.KeyframeTrack: no keyframes in track named " + t,
        );
      ((this.name = t),
        (this.times = Dr(e, this.TimeBufferType)),
        (this.values = Dr(n, this.ValueBufferType)),
        this.setInterpolation(s || this.DefaultInterpolation));
    }
    static toJSON(t) {
      let e = t.constructor,
        n;
      if (e.toJSON !== this.toJSON) n = e.toJSON(t);
      else {
        n = {
          name: t.name,
          times: Dr(t.times, Array),
          values: Dr(t.values, Array),
        };
        let s = t.getInterpolation();
        s !== t.DefaultInterpolation && (n.interpolation = s);
      }
      return ((n.type = t.ValueTypeName), n);
    }
    InterpolantFactoryMethodDiscrete(t) {
      return new _a(this.times, this.values, this.getValueSize(), t);
    }
    InterpolantFactoryMethodLinear(t) {
      return new ga(this.times, this.values, this.getValueSize(), t);
    }
    InterpolantFactoryMethodSmooth(t) {
      return new ma(this.times, this.values, this.getValueSize(), t);
    }
    InterpolantFactoryMethodBezier(t) {
      let e = new xa(this.times, this.values, this.getValueSize(), t);
      return (
        this.settings &&
          ((e.inTangents = this.settings.inTangents),
          (e.outTangents = this.settings.outTangents)),
        e
      );
    }
    setInterpolation(t) {
      let e;
      switch (t) {
        case xs:
          e = this.InterpolantFactoryMethodDiscrete;
          break;
        case $r:
          e = this.InterpolantFactoryMethodLinear;
          break;
        case Fr:
          e = this.InterpolantFactoryMethodSmooth;
          break;
        case ul:
          e = this.InterpolantFactoryMethodBezier;
          break;
      }
      if (e === void 0) {
        let n =
          "unsupported interpolation for " +
          this.ValueTypeName +
          " keyframe track named " +
          this.name;
        if (this.createInterpolant === void 0)
          if (t !== this.DefaultInterpolation)
            this.setInterpolation(this.DefaultInterpolation);
          else throw new Error(n);
        return (Nt("KeyframeTrack:", n), this);
      }
      return ((this.createInterpolant = e), this);
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return xs;
        case this.InterpolantFactoryMethodLinear:
          return $r;
        case this.InterpolantFactoryMethodSmooth:
          return Fr;
        case this.InterpolantFactoryMethodBezier:
          return ul;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(t) {
      if (t !== 0) {
        let e = this.times;
        for (let n = 0, s = e.length; n !== s; ++n) e[n] += t;
      }
      return this;
    }
    scale(t) {
      if (t !== 1) {
        let e = this.times;
        for (let n = 0, s = e.length; n !== s; ++n) e[n] *= t;
      }
      return this;
    }
    trim(t, e) {
      let n = this.times,
        s = n.length,
        r = 0,
        a = s - 1;
      for (; r !== s && n[r] < t;) ++r;
      for (; a !== -1 && n[a] > e;) --a;
      if ((++a, r !== 0 || a !== s)) {
        r >= a && ((a = Math.max(a, 1)), (r = a - 1));
        let o = this.getValueSize();
        ((this.times = n.slice(r, a)),
          (this.values = this.values.slice(r * o, a * o)));
      }
      return this;
    }
    validate() {
      let t = !0,
        e = this.getValueSize();
      e - Math.floor(e) !== 0 &&
        (Ot("KeyframeTrack: Invalid value size in track.", this), (t = !1));
      let n = this.times,
        s = this.values,
        r = n.length;
      r === 0 && (Ot("KeyframeTrack: Track is empty.", this), (t = !1));
      let a = null;
      for (let o = 0; o !== r; o++) {
        let c = n[o];
        if (typeof c == "number" && isNaN(c)) {
          (Ot("KeyframeTrack: Time is not a valid number.", this, o, c),
            (t = !1));
          break;
        }
        if (a !== null && a > c) {
          (Ot("KeyframeTrack: Out of order keys.", this, o, c, a), (t = !1));
          break;
        }
        a = c;
      }
      if (s !== void 0 && Td(s))
        for (let o = 0, c = s.length; o !== c; ++o) {
          let l = s[o];
          if (isNaN(l)) {
            (Ot("KeyframeTrack: Value is not a valid number.", this, o, l),
              (t = !1));
            break;
          }
        }
      return t;
    }
    optimize() {
      let t = this.times.slice(),
        e = this.values.slice(),
        n = this.getValueSize(),
        s = this.getInterpolation() === Fr,
        r = t.length - 1,
        a = 1;
      for (let o = 1; o < r; ++o) {
        let c = !1,
          l = t[o],
          h = t[o + 1];
        if (l !== h && (o !== 1 || l !== t[0]))
          if (s) c = !0;
          else {
            let d = o * n,
              u = d - n,
              f = d + n;
            for (let g = 0; g !== n; ++g) {
              let y = e[d + g];
              if (y !== e[u + g] || y !== e[f + g]) {
                c = !0;
                break;
              }
            }
          }
        if (c) {
          if (o !== a) {
            t[a] = t[o];
            let d = o * n,
              u = a * n;
            for (let f = 0; f !== n; ++f) e[u + f] = e[d + f];
          }
          ++a;
        }
      }
      if (r > 0) {
        t[a] = t[r];
        for (let o = r * n, c = a * n, l = 0; l !== n; ++l) e[c + l] = e[o + l];
        ++a;
      }
      return (
        a !== t.length
          ? ((this.times = t.slice(0, a)), (this.values = e.slice(0, a * n)))
          : ((this.times = t), (this.values = e)),
        this
      );
    }
    clone() {
      let t = this.times.slice(),
        e = this.values.slice(),
        n = this.constructor,
        s = new n(this.name, t, e);
      return ((s.createInterpolant = this.createInterpolant), s);
    }
  };
$e.prototype.ValueTypeName = "";
$e.prototype.TimeBufferType = Float32Array;
$e.prototype.ValueBufferType = Float32Array;
$e.prototype.DefaultInterpolation = $r;
var ii = class extends $e {
  constructor(t, e, n) {
    super(t, e, n);
  }
};
ii.prototype.ValueTypeName = "bool";
ii.prototype.ValueBufferType = Array;
ii.prototype.DefaultInterpolation = xs;
ii.prototype.InterpolantFactoryMethodLinear = void 0;
ii.prototype.InterpolantFactoryMethodSmooth = void 0;
var ya = class extends $e {
  constructor(t, e, n, s) {
    super(t, e, n, s);
  }
};
ya.prototype.ValueTypeName = "color";
var va = class extends $e {
  constructor(t, e, n, s) {
    super(t, e, n, s);
  }
};
va.prototype.ValueTypeName = "number";
var Ma = class extends ni {
    constructor(t, e, n, s) {
      super(t, e, n, s);
    }
    interpolate_(t, e, n, s) {
      let r = this.resultBuffer,
        a = this.sampleValues,
        o = this.valueSize,
        c = (n - e) / (s - e),
        l = t * o;
      for (let h = l + o; l !== h; l += 4)
        Mn.slerpFlat(r, 0, a, l - o, a, l, c);
      return r;
    }
  },
  zs = class extends $e {
    constructor(t, e, n, s) {
      super(t, e, n, s);
    }
    InterpolantFactoryMethodLinear(t) {
      return new Ma(this.times, this.values, this.getValueSize(), t);
    }
  };
zs.prototype.ValueTypeName = "quaternion";
zs.prototype.InterpolantFactoryMethodSmooth = void 0;
var si = class extends $e {
  constructor(t, e, n) {
    super(t, e, n);
  }
};
si.prototype.ValueTypeName = "string";
si.prototype.ValueBufferType = Array;
si.prototype.DefaultInterpolation = xs;
si.prototype.InterpolantFactoryMethodLinear = void 0;
si.prototype.InterpolantFactoryMethodSmooth = void 0;
var Sa = class extends $e {
  constructor(t, e, n, s) {
    super(t, e, n, s);
  }
};
Sa.prototype.ValueTypeName = "vector";
var Br = {
  enabled: !1,
  files: {},
  add: function (i, t) {
    this.enabled !== !1 && (Rh(i) || (this.files[i] = t));
  },
  get: function (i) {
    if (this.enabled !== !1 && !Rh(i)) return this.files[i];
  },
  remove: function (i) {
    delete this.files[i];
  },
  clear: function () {
    this.files = {};
  },
};
function Rh(i) {
  try {
    let t = i.slice(i.indexOf(":") + 1);
    return new URL(t).protocol === "blob:";
  } catch {
    return !1;
  }
}
var ba = class {
    constructor(t, e, n) {
      let s = this,
        r = !1,
        a = 0,
        o = 0,
        c,
        l = [];
      ((this.onStart = void 0),
        (this.onLoad = t),
        (this.onProgress = e),
        (this.onError = n),
        (this._abortController = null),
        (this.itemStart = function (h) {
          (o++,
            r === !1 && s.onStart !== void 0 && s.onStart(h, a, o),
            (r = !0));
        }),
        (this.itemEnd = function (h) {
          (a++,
            s.onProgress !== void 0 && s.onProgress(h, a, o),
            a === o && ((r = !1), s.onLoad !== void 0 && s.onLoad()));
        }),
        (this.itemError = function (h) {
          s.onError !== void 0 && s.onError(h);
        }),
        (this.resolveURL = function (h) {
          return ((h = h.normalize("NFC")), c ? c(h) : h);
        }),
        (this.setURLModifier = function (h) {
          return ((c = h), this);
        }),
        (this.addHandler = function (h, d) {
          return (l.push(h, d), this);
        }),
        (this.removeHandler = function (h) {
          let d = l.indexOf(h);
          return (d !== -1 && l.splice(d, 2), this);
        }),
        (this.getHandler = function (h) {
          for (let d = 0, u = l.length; d < u; d += 2) {
            let f = l[d],
              g = l[d + 1];
            if ((f.global && (f.lastIndex = 0), f.test(h))) return g;
          }
          return null;
        }),
        (this.abort = function () {
          return (
            this.abortController.abort(),
            (this._abortController = null),
            this
          );
        }));
    }
    get abortController() {
      return (
        this._abortController ||
          (this._abortController = new AbortController()),
        this._abortController
      );
    }
  },
  wu = new ba(),
  es = class {
    constructor(t) {
      ((this.manager = t !== void 0 ? t : wu),
        (this.crossOrigin = "anonymous"),
        (this.withCredentials = !1),
        (this.path = ""),
        (this.resourcePath = ""),
        (this.requestHeader = {}),
        typeof __THREE_DEVTOOLS__ < "u" &&
          __THREE_DEVTOOLS__.dispatchEvent(
            new CustomEvent("observe", { detail: this }),
          ));
    }
    load() {}
    loadAsync(t, e) {
      let n = this;
      return new Promise(function (s, r) {
        n.load(t, s, e, r);
      });
    }
    parse() {}
    setCrossOrigin(t) {
      return ((this.crossOrigin = t), this);
    }
    setWithCredentials(t) {
      return ((this.withCredentials = t), this);
    }
    setPath(t) {
      return ((this.path = t), this);
    }
    setResourcePath(t) {
      return ((this.resourcePath = t), this);
    }
    setRequestHeader(t) {
      return ((this.requestHeader = t), this);
    }
    abort() {
      return this;
    }
  };
es.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var ki = new WeakMap(),
  wa = class extends es {
    constructor(t) {
      super(t);
    }
    load(t, e, n, s) {
      (this.path !== void 0 && (t = this.path + t),
        (t = this.manager.resolveURL(t)));
      let r = this,
        a = Br.get(`image:${t}`);
      if (a !== void 0) {
        if (a.complete === !0)
          (r.manager.itemStart(t),
            setTimeout(function () {
              (e && e(a), r.manager.itemEnd(t));
            }, 0));
        else {
          let d = ki.get(a);
          (d === void 0 && ((d = []), ki.set(a, d)),
            d.push({ onLoad: e, onError: s }));
        }
        return a;
      }
      let o = Xi("img");
      function c() {
        (h(), e && e(this));
        let d = ki.get(this) || [];
        for (let u = 0; u < d.length; u++) {
          let f = d[u];
          f.onLoad && f.onLoad(this);
        }
        (ki.delete(this), r.manager.itemEnd(t));
      }
      function l(d) {
        (h(), s && s(d), Br.remove(`image:${t}`));
        let u = ki.get(this) || [];
        for (let f = 0; f < u.length; f++) {
          let g = u[f];
          g.onError && g.onError(d);
        }
        (ki.delete(this), r.manager.itemError(t), r.manager.itemEnd(t));
      }
      function h() {
        (o.removeEventListener("load", c, !1),
          o.removeEventListener("error", l, !1));
      }
      return (
        o.addEventListener("load", c, !1),
        o.addEventListener("error", l, !1),
        t.slice(0, 5) !== "data:" &&
          this.crossOrigin !== void 0 &&
          (o.crossOrigin = this.crossOrigin),
        Br.add(`image:${t}`, o),
        r.manager.itemStart(t),
        (o.src = t),
        o
      );
    }
  };
var Il = class extends es {
    constructor(t) {
      super(t);
    }
    load(t, e, n, s) {
      let r = new De(),
        a = new wa(this.manager);
      return (
        a.setCrossOrigin(this.crossOrigin),
        a.setPath(this.path),
        a.load(
          t,
          function (o) {
            ((r.image = o), (r.needsUpdate = !0), e !== void 0 && e(r));
          },
          n,
          s,
        ),
        r
      );
    }
  },
  Si = class extends Ie {
    constructor(t, e = 1) {
      (super(),
        (this.isLight = !0),
        (this.type = "Light"),
        (this.color = new Jt(t)),
        (this.intensity = e));
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        this.color.copy(t.color),
        (this.intensity = t.intensity),
        this
      );
    }
    toJSON(t) {
      let e = super.toJSON(t);
      return (
        (e.object.color = this.color.getHex()),
        (e.object.intensity = this.intensity),
        e
      );
    }
  },
  Pl = class extends Si {
    constructor(t, e, n) {
      (super(t, n),
        (this.isHemisphereLight = !0),
        (this.type = "HemisphereLight"),
        this.position.copy(Ie.DEFAULT_UP),
        this.updateMatrix(),
        (this.groundColor = new Jt(e)));
    }
    copy(t, e) {
      return (super.copy(t, e), this.groundColor.copy(t.groundColor), this);
    }
    toJSON(t) {
      let e = super.toJSON(t);
      return ((e.object.groundColor = this.groundColor.getHex()), e);
    }
  },
  hl = new he(),
  Ih = new L(),
  Ph = new L(),
  Ea = class {
    constructor(t) {
      ((this.camera = t),
        (this.intensity = 1),
        (this.bias = 0),
        (this.biasNode = null),
        (this.normalBias = 0),
        (this.radius = 1),
        (this.blurSamples = 8),
        (this.mapSize = new ut(512, 512)),
        (this.mapType = He),
        (this.map = null),
        (this.mapPass = null),
        (this.matrix = new he()),
        (this.autoUpdate = !0),
        (this.needsUpdate = !1),
        (this._frustum = new $i()),
        (this._frameExtents = new ut(1, 1)),
        (this._viewportCount = 1),
        (this._viewports = [new _e(0, 0, 1, 1)]));
    }
    getViewportCount() {
      return this._viewportCount;
    }
    getFrustum() {
      return this._frustum;
    }
    updateMatrices(t) {
      let e = this.camera,
        n = this.matrix;
      (Ih.setFromMatrixPosition(t.matrixWorld),
        e.position.copy(Ih),
        Ph.setFromMatrixPosition(t.target.matrixWorld),
        e.lookAt(Ph),
        e.updateMatrixWorld(),
        hl.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(
          hl,
          e.coordinateSystem,
          e.reversedDepth,
        ),
        e.coordinateSystem === Wi || e.reversedDepth
          ? n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1)
          : n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
        n.multiply(hl));
    }
    getViewport(t) {
      return this._viewports[t];
    }
    getFrameExtents() {
      return this._frameExtents;
    }
    dispose() {
      (this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose());
    }
    copy(t) {
      return (
        (this.camera = t.camera.clone()),
        (this.intensity = t.intensity),
        (this.bias = t.bias),
        (this.radius = t.radius),
        (this.autoUpdate = t.autoUpdate),
        (this.needsUpdate = t.needsUpdate),
        (this.normalBias = t.normalBias),
        (this.blurSamples = t.blurSamples),
        this.mapSize.copy(t.mapSize),
        (this.biasNode = t.biasNode),
        this
      );
    }
    clone() {
      return new this.constructor().copy(this);
    }
    toJSON() {
      let t = {};
      return (
        this.intensity !== 1 && (t.intensity = this.intensity),
        this.bias !== 0 && (t.bias = this.bias),
        this.normalBias !== 0 && (t.normalBias = this.normalBias),
        this.radius !== 1 && (t.radius = this.radius),
        (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
          (t.mapSize = this.mapSize.toArray()),
        (t.camera = this.camera.toJSON(!1).object),
        delete t.camera.matrix,
        t
      );
    }
  },
  Nr = new L(),
  Ur = new Mn(),
  pn = new L(),
  ks = class extends Ie {
    constructor() {
      (super(),
        (this.isCamera = !0),
        (this.type = "Camera"),
        (this.matrixWorldInverse = new he()),
        (this.projectionMatrix = new he()),
        (this.projectionMatrixInverse = new he()),
        (this.coordinateSystem = rn),
        (this._reversedDepth = !1));
    }
    get reversedDepth() {
      return this._reversedDepth;
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        this.matrixWorldInverse.copy(t.matrixWorldInverse),
        this.projectionMatrix.copy(t.projectionMatrix),
        this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
        (this.coordinateSystem = t.coordinateSystem),
        this
      );
    }
    getWorldDirection(t) {
      return super.getWorldDirection(t).negate();
    }
    updateMatrixWorld(t) {
      (super.updateMatrixWorld(t),
        this.matrixWorld.decompose(Nr, Ur, pn),
        pn.x === 1 && pn.y === 1 && pn.z === 1
          ? this.matrixWorldInverse.copy(this.matrixWorld).invert()
          : this.matrixWorldInverse.compose(Nr, Ur, pn.set(1, 1, 1)).invert());
    }
    updateWorldMatrix(t, e, n = !1) {
      (super.updateWorldMatrix(t, e, n),
        this.matrixWorld.decompose(Nr, Ur, pn),
        pn.x === 1 && pn.y === 1 && pn.z === 1
          ? this.matrixWorldInverse.copy(this.matrixWorld).invert()
          : this.matrixWorldInverse.compose(Nr, Ur, pn.set(1, 1, 1)).invert());
    }
    clone() {
      return new this.constructor().copy(this);
    }
  },
  Kn = new L(),
  Lh = new ut(),
  Dh = new ut(),
  Oe = class extends ks {
    constructor(t = 50, e = 1, n = 0.1, s = 2e3) {
      (super(),
        (this.isPerspectiveCamera = !0),
        (this.type = "PerspectiveCamera"),
        (this.fov = t),
        (this.zoom = 1),
        (this.near = n),
        (this.far = s),
        (this.focus = 10),
        (this.aspect = e),
        (this.view = null),
        (this.filmGauge = 35),
        (this.filmOffset = 0),
        this.updateProjectionMatrix());
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        (this.fov = t.fov),
        (this.zoom = t.zoom),
        (this.near = t.near),
        (this.far = t.far),
        (this.focus = t.focus),
        (this.aspect = t.aspect),
        (this.view = t.view === null ? null : Object.assign({}, t.view)),
        (this.filmGauge = t.filmGauge),
        (this.filmOffset = t.filmOffset),
        this
      );
    }
    setFocalLength(t) {
      let e = (0.5 * this.getFilmHeight()) / t;
      ((this.fov = Ms * 2 * Math.atan(e)), this.updateProjectionMatrix());
    }
    getFocalLength() {
      let t = Math.tan(Or * 0.5 * this.fov);
      return (0.5 * this.getFilmHeight()) / t;
    }
    getEffectiveFOV() {
      return Ms * 2 * Math.atan(Math.tan(Or * 0.5 * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    getViewBounds(t, e, n) {
      (Kn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
        e.set(Kn.x, Kn.y).multiplyScalar(-t / Kn.z),
        Kn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
        n.set(Kn.x, Kn.y).multiplyScalar(-t / Kn.z));
    }
    getViewSize(t, e) {
      return (this.getViewBounds(t, Lh, Dh), e.subVectors(Dh, Lh));
    }
    setViewOffset(t, e, n, s, r, a) {
      ((this.aspect = t / e),
        this.view === null &&
          (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1,
          }),
        (this.view.enabled = !0),
        (this.view.fullWidth = t),
        (this.view.fullHeight = e),
        (this.view.offsetX = n),
        (this.view.offsetY = s),
        (this.view.width = r),
        (this.view.height = a),
        this.updateProjectionMatrix());
    }
    clearViewOffset() {
      (this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix());
    }
    updateProjectionMatrix() {
      let t = this.near,
        e = (t * Math.tan(Or * 0.5 * this.fov)) / this.zoom,
        n = 2 * e,
        s = this.aspect * n,
        r = -0.5 * s,
        a = this.view;
      if (this.view !== null && this.view.enabled) {
        let c = a.fullWidth,
          l = a.fullHeight;
        ((r += (a.offsetX * s) / c),
          (e -= (a.offsetY * n) / l),
          (s *= a.width / c),
          (n *= a.height / l));
      }
      let o = this.filmOffset;
      (o !== 0 && (r += (t * o) / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(
          r,
          r + s,
          e,
          e - n,
          t,
          this.far,
          this.coordinateSystem,
          this.reversedDepth,
        ),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
    }
    toJSON(t) {
      let e = super.toJSON(t);
      return (
        (e.object.fov = this.fov),
        (e.object.zoom = this.zoom),
        (e.object.near = this.near),
        (e.object.far = this.far),
        (e.object.focus = this.focus),
        (e.object.aspect = this.aspect),
        this.view !== null && (e.object.view = Object.assign({}, this.view)),
        (e.object.filmGauge = this.filmGauge),
        (e.object.filmOffset = this.filmOffset),
        e
      );
    }
  },
  Ll = class extends Ea {
    constructor() {
      (super(new Oe(50, 1, 0.5, 500)),
        (this.isSpotLightShadow = !0),
        (this.focus = 1),
        (this.aspect = 1));
    }
    updateMatrices(t) {
      let e = this.camera,
        n = Ms * 2 * t.angle * this.focus,
        s = (this.mapSize.width / this.mapSize.height) * this.aspect,
        r = t.distance || e.far;
      ((n !== e.fov || s !== e.aspect || r !== e.far) &&
        ((e.fov = n), (e.aspect = s), (e.far = r), e.updateProjectionMatrix()),
        super.updateMatrices(t));
    }
    copy(t) {
      return (super.copy(t), (this.focus = t.focus), this);
    }
  },
  Dl = class extends Si {
    constructor(t, e, n = 0, s = Math.PI / 3, r = 0, a = 2) {
      (super(t, e),
        (this.isSpotLight = !0),
        (this.type = "SpotLight"),
        this.position.copy(Ie.DEFAULT_UP),
        this.updateMatrix(),
        (this.target = new Ie()),
        (this.distance = n),
        (this.angle = s),
        (this.penumbra = r),
        (this.decay = a),
        (this.map = null),
        (this.shadow = new Ll()));
    }
    get power() {
      return this.intensity * Math.PI;
    }
    set power(t) {
      this.intensity = t / Math.PI;
    }
    dispose() {
      (super.dispose(), this.shadow.dispose());
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        (this.distance = t.distance),
        (this.angle = t.angle),
        (this.penumbra = t.penumbra),
        (this.decay = t.decay),
        (this.target = t.target.clone()),
        (this.map = t.map),
        (this.shadow = t.shadow.clone()),
        this
      );
    }
    toJSON(t) {
      let e = super.toJSON(t);
      return (
        (e.object.distance = this.distance),
        (e.object.angle = this.angle),
        (e.object.decay = this.decay),
        (e.object.penumbra = this.penumbra),
        (e.object.target = this.target.uuid),
        this.map &&
          this.map.isTexture &&
          (e.object.map = this.map.toJSON(t).uuid),
        (e.object.shadow = this.shadow.toJSON()),
        e
      );
    }
  },
  Nl = class extends Ea {
    constructor() {
      (super(new Oe(90, 1, 0.5, 500)), (this.isPointLightShadow = !0));
    }
  },
  Ul = class extends Si {
    constructor(t, e, n = 0, s = 2) {
      (super(t, e),
        (this.isPointLight = !0),
        (this.type = "PointLight"),
        (this.distance = n),
        (this.decay = s),
        (this.shadow = new Nl()));
    }
    get power() {
      return this.intensity * 4 * Math.PI;
    }
    set power(t) {
      this.intensity = t / (4 * Math.PI);
    }
    dispose() {
      (super.dispose(), this.shadow.dispose());
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        (this.distance = t.distance),
        (this.decay = t.decay),
        (this.shadow = t.shadow.clone()),
        this
      );
    }
    toJSON(t) {
      let e = super.toJSON(t);
      return (
        (e.object.distance = this.distance),
        (e.object.decay = this.decay),
        (e.object.shadow = this.shadow.toJSON()),
        e
      );
    }
  },
  Vs = class extends ks {
    constructor(t = -1, e = 1, n = 1, s = -1, r = 0.1, a = 2e3) {
      (super(),
        (this.isOrthographicCamera = !0),
        (this.type = "OrthographicCamera"),
        (this.zoom = 1),
        (this.view = null),
        (this.left = t),
        (this.right = e),
        (this.top = n),
        (this.bottom = s),
        (this.near = r),
        (this.far = a),
        this.updateProjectionMatrix());
    }
    copy(t, e) {
      return (
        super.copy(t, e),
        (this.left = t.left),
        (this.right = t.right),
        (this.top = t.top),
        (this.bottom = t.bottom),
        (this.near = t.near),
        (this.far = t.far),
        (this.zoom = t.zoom),
        (this.view = t.view === null ? null : Object.assign({}, t.view)),
        this
      );
    }
    setViewOffset(t, e, n, s, r, a) {
      (this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
        (this.view.enabled = !0),
        (this.view.fullWidth = t),
        (this.view.fullHeight = e),
        (this.view.offsetX = n),
        (this.view.offsetY = s),
        (this.view.width = r),
        (this.view.height = a),
        this.updateProjectionMatrix());
    }
    clearViewOffset() {
      (this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix());
    }
    updateProjectionMatrix() {
      let t = (this.right - this.left) / (2 * this.zoom),
        e = (this.top - this.bottom) / (2 * this.zoom),
        n = (this.right + this.left) / 2,
        s = (this.top + this.bottom) / 2,
        r = n - t,
        a = n + t,
        o = s + e,
        c = s - e;
      if (this.view !== null && this.view.enabled) {
        let l = (this.right - this.left) / this.view.fullWidth / this.zoom,
          h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        ((r += l * this.view.offsetX),
          (a = r + l * this.view.width),
          (o -= h * this.view.offsetY),
          (c = o - h * this.view.height));
      }
      (this.projectionMatrix.makeOrthographic(
        r,
        a,
        o,
        c,
        this.near,
        this.far,
        this.coordinateSystem,
        this.reversedDepth,
      ),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
    }
    toJSON(t) {
      let e = super.toJSON(t);
      return (
        (e.object.zoom = this.zoom),
        (e.object.left = this.left),
        (e.object.right = this.right),
        (e.object.top = this.top),
        (e.object.bottom = this.bottom),
        (e.object.near = this.near),
        (e.object.far = this.far),
        this.view !== null && (e.object.view = Object.assign({}, this.view)),
        e
      );
    }
  };
var Fl = class extends Si {
  constructor(t, e) {
    (super(t, e), (this.isAmbientLight = !0), (this.type = "AmbientLight"));
  }
};
var Vi = -90,
  Gi = 1,
  Ta = class extends Ie {
    constructor(t, e, n) {
      (super(),
        (this.type = "CubeCamera"),
        (this.renderTarget = n),
        (this.coordinateSystem = null),
        (this.activeMipmapLevel = 0));
      let s = new Oe(Vi, Gi, t, e);
      ((s.layers = this.layers), this.add(s));
      let r = new Oe(Vi, Gi, t, e);
      ((r.layers = this.layers), this.add(r));
      let a = new Oe(Vi, Gi, t, e);
      ((a.layers = this.layers), this.add(a));
      let o = new Oe(Vi, Gi, t, e);
      ((o.layers = this.layers), this.add(o));
      let c = new Oe(Vi, Gi, t, e);
      ((c.layers = this.layers), this.add(c));
      let l = new Oe(Vi, Gi, t, e);
      ((l.layers = this.layers), this.add(l));
    }
    updateCoordinateSystem() {
      let t = this.coordinateSystem,
        e = this.children.concat(),
        [n, s, r, a, o, c] = e;
      for (let l of e) this.remove(l);
      if (t === rn)
        (n.up.set(0, 1, 0),
          n.lookAt(1, 0, 0),
          s.up.set(0, 1, 0),
          s.lookAt(-1, 0, 0),
          r.up.set(0, 0, -1),
          r.lookAt(0, 1, 0),
          a.up.set(0, 0, 1),
          a.lookAt(0, -1, 0),
          o.up.set(0, 1, 0),
          o.lookAt(0, 0, 1),
          c.up.set(0, 1, 0),
          c.lookAt(0, 0, -1));
      else if (t === Wi)
        (n.up.set(0, -1, 0),
          n.lookAt(-1, 0, 0),
          s.up.set(0, -1, 0),
          s.lookAt(1, 0, 0),
          r.up.set(0, 0, 1),
          r.lookAt(0, 1, 0),
          a.up.set(0, 0, -1),
          a.lookAt(0, -1, 0),
          o.up.set(0, -1, 0),
          o.lookAt(0, 0, 1),
          c.up.set(0, -1, 0),
          c.lookAt(0, 0, -1));
      else
        throw new Error(
          "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
            t,
        );
      for (let l of e) (this.add(l), l.updateMatrixWorld());
    }
    update(t, e) {
      this.parent === null && this.updateMatrixWorld();
      let { renderTarget: n, activeMipmapLevel: s } = this;
      this.coordinateSystem !== t.coordinateSystem &&
        ((this.coordinateSystem = t.coordinateSystem),
        this.updateCoordinateSystem());
      let [r, a, o, c, l, h] = this.children,
        d = t.getRenderTarget(),
        u = t.getActiveCubeFace(),
        f = t.getActiveMipmapLevel(),
        g = t.xr.enabled;
      t.xr.enabled = !1;
      let y = n.texture.generateMipmaps;
      n.texture.generateMipmaps = !1;
      let m = !1;
      (t.isWebGLRenderer === !0
        ? (m = t.state.buffers.depth.getReversed())
        : (m = t.reversedDepthBuffer),
        t.setRenderTarget(n, 0, s),
        m && t.autoClear === !1 && t.clearDepth(),
        t.render(e, r),
        t.setRenderTarget(n, 1, s),
        m && t.autoClear === !1 && t.clearDepth(),
        t.render(e, a),
        t.setRenderTarget(n, 2, s),
        m && t.autoClear === !1 && t.clearDepth(),
        t.render(e, o),
        t.setRenderTarget(n, 3, s),
        m && t.autoClear === !1 && t.clearDepth(),
        t.render(e, c),
        t.setRenderTarget(n, 4, s),
        m && t.autoClear === !1 && t.clearDepth(),
        t.render(e, l),
        (n.texture.generateMipmaps = y),
        t.setRenderTarget(n, 5, s),
        m && t.autoClear === !1 && t.clearDepth(),
        t.render(e, h),
        t.setRenderTarget(d, u, f),
        (t.xr.enabled = g),
        (n.texture.needsPMREMUpdate = !0));
    }
  },
  Aa = class extends Oe {
    constructor(t = []) {
      (super(),
        (this.isArrayCamera = !0),
        (this.isMultiViewCamera = !1),
        (this.cameras = t));
    }
  };
var hc = "\\[\\]\\.:\\/",
  bf = new RegExp("[" + hc + "]", "g"),
  uc = "[^" + hc + "]",
  wf = "[^" + hc.replace("\\.", "") + "]",
  Ef = /((?:WC+[\/:])*)/.source.replace("WC", uc),
  Tf = /(WCOD+)?/.source.replace("WCOD", wf),
  Af = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", uc),
  Cf = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", uc),
  Rf = new RegExp("^" + Ef + Tf + Af + Cf + "$"),
  If = ["material", "materials", "bones", "map"],
  Ol = class {
    constructor(t, e, n) {
      let s = n || pe.parseTrackName(e);
      ((this._targetGroup = t), (this._bindings = t.subscribe_(e, s)));
    }
    getValue(t, e) {
      this.bind();
      let n = this._targetGroup.nCachedObjects_,
        s = this._bindings[n];
      s !== void 0 && s.getValue(t, e);
    }
    setValue(t, e) {
      let n = this._bindings;
      for (
        let s = this._targetGroup.nCachedObjects_, r = n.length;
        s !== r;
        ++s
      )
        n[s].setValue(t, e);
    }
    bind() {
      let t = this._bindings;
      for (
        let e = this._targetGroup.nCachedObjects_, n = t.length;
        e !== n;
        ++e
      )
        t[e].bind();
    }
    unbind() {
      let t = this._bindings;
      for (
        let e = this._targetGroup.nCachedObjects_, n = t.length;
        e !== n;
        ++e
      )
        t[e].unbind();
    }
  },
  pe = class i {
    constructor(t, e, n) {
      ((this.path = e),
        (this.parsedPath = n || i.parseTrackName(e)),
        (this.node = i.findNode(t, this.parsedPath.nodeName)),
        (this.rootNode = t),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound));
    }
    static create(t, e, n) {
      return t && t.isAnimationObjectGroup
        ? new i.Composite(t, e, n)
        : new i(t, e, n);
    }
    static sanitizeNodeName(t) {
      return t.replace(/\s/g, "_").replace(bf, "");
    }
    static parseTrackName(t) {
      let e = Rf.exec(t);
      if (e === null)
        throw new Error("THREE.PropertyBinding: Cannot parse trackName: " + t);
      let n = {
          nodeName: e[2],
          objectName: e[3],
          objectIndex: e[4],
          propertyName: e[5],
          propertyIndex: e[6],
        },
        s = n.nodeName && n.nodeName.lastIndexOf(".");
      if (s !== void 0 && s !== -1) {
        let r = n.nodeName.substring(s + 1);
        If.indexOf(r) !== -1 &&
          ((n.nodeName = n.nodeName.substring(0, s)), (n.objectName = r));
      }
      if (n.propertyName === null || n.propertyName.length === 0)
        throw new Error(
          "THREE.PropertyBinding: can not parse propertyName from trackName: " +
            t,
        );
      return n;
    }
    static findNode(t, e) {
      if (
        e === void 0 ||
        e === "" ||
        e === "." ||
        e === -1 ||
        e === t.name ||
        e === t.uuid
      )
        return t;
      if (t.skeleton) {
        let n = t.skeleton.getBoneByName(e);
        if (n !== void 0) return n;
      }
      if (t.children) {
        let n = function (r) {
            for (let a = 0; a < r.length; a++) {
              let o = r[a];
              if (o.name === e || o.uuid === e) return o;
              let c = n(o.children);
              if (c) return c;
            }
            return null;
          },
          s = n(t.children);
        if (s) return s;
      }
      return null;
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(t, e) {
      t[e] = this.targetObject[this.propertyName];
    }
    _getValue_array(t, e) {
      let n = this.resolvedProperty;
      for (let s = 0, r = n.length; s !== r; ++s) t[e++] = n[s];
    }
    _getValue_arrayElement(t, e) {
      t[e] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(t, e) {
      this.resolvedProperty.toArray(t, e);
    }
    _setValue_direct(t, e) {
      this.targetObject[this.propertyName] = t[e];
    }
    _setValue_direct_setNeedsUpdate(t, e) {
      ((this.targetObject[this.propertyName] = t[e]),
        (this.targetObject.needsUpdate = !0));
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
      ((this.targetObject[this.propertyName] = t[e]),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _setValue_array(t, e) {
      let n = this.resolvedProperty;
      for (let s = 0, r = n.length; s !== r; ++s) n[s] = t[e++];
    }
    _setValue_array_setNeedsUpdate(t, e) {
      let n = this.resolvedProperty;
      for (let s = 0, r = n.length; s !== r; ++s) n[s] = t[e++];
      this.targetObject.needsUpdate = !0;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(t, e) {
      let n = this.resolvedProperty;
      for (let s = 0, r = n.length; s !== r; ++s) n[s] = t[e++];
      this.targetObject.matrixWorldNeedsUpdate = !0;
    }
    _setValue_arrayElement(t, e) {
      this.resolvedProperty[this.propertyIndex] = t[e];
    }
    _setValue_arrayElement_setNeedsUpdate(t, e) {
      ((this.resolvedProperty[this.propertyIndex] = t[e]),
        (this.targetObject.needsUpdate = !0));
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
      ((this.resolvedProperty[this.propertyIndex] = t[e]),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _setValue_fromArray(t, e) {
      this.resolvedProperty.fromArray(t, e);
    }
    _setValue_fromArray_setNeedsUpdate(t, e) {
      (this.resolvedProperty.fromArray(t, e),
        (this.targetObject.needsUpdate = !0));
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
      (this.resolvedProperty.fromArray(t, e),
        (this.targetObject.matrixWorldNeedsUpdate = !0));
    }
    _getValue_unbound(t, e) {
      (this.bind(), this.getValue(t, e));
    }
    _setValue_unbound(t, e) {
      (this.bind(), this.setValue(t, e));
    }
    bind() {
      let t = this.node,
        e = this.parsedPath,
        n = e.objectName,
        s = e.propertyName,
        r = e.propertyIndex;
      if (
        (t || ((t = i.findNode(this.rootNode, e.nodeName)), (this.node = t)),
        (this.getValue = this._getValue_unavailable),
        (this.setValue = this._setValue_unavailable),
        !t)
      ) {
        Nt(
          "PropertyBinding: No target node found for track: " + this.path + ".",
        );
        return;
      }
      if (n) {
        let l = e.objectIndex;
        switch (n) {
          case "materials":
            if (!t.material) {
              Ot(
                "PropertyBinding: Can not bind to material as node does not have a material.",
                this,
              );
              return;
            }
            if (!t.material.materials) {
              Ot(
                "PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
                this,
              );
              return;
            }
            t = t.material.materials;
            break;
          case "bones":
            if (!t.skeleton) {
              Ot(
                "PropertyBinding: Can not bind to bones as node does not have a skeleton.",
                this,
              );
              return;
            }
            t = t.skeleton.bones;
            for (let h = 0; h < t.length; h++)
              if (t[h].name === l) {
                l = h;
                break;
              }
            break;
          case "map":
            if ("map" in t) {
              t = t.map;
              break;
            }
            if (!t.material) {
              Ot(
                "PropertyBinding: Can not bind to material as node does not have a material.",
                this,
              );
              return;
            }
            if (!t.material.map) {
              Ot(
                "PropertyBinding: Can not bind to material.map as node.material does not have a map.",
                this,
              );
              return;
            }
            t = t.material.map;
            break;
          default:
            if (t[n] === void 0) {
              Ot(
                "PropertyBinding: Can not bind to objectName of node undefined.",
                this,
              );
              return;
            }
            t = t[n];
        }
        if (l !== void 0) {
          if (t[l] === void 0) {
            Ot(
              "PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
              this,
              t,
            );
            return;
          }
          t = t[l];
        }
      }
      let a = t[s];
      if (a === void 0) {
        let l = e.nodeName;
        Ot(
          "PropertyBinding: Trying to update property for track: " +
            l +
            "." +
            s +
            " but it wasn't found.",
          t,
        );
        return;
      }
      let o = this.Versioning.None;
      ((this.targetObject = t),
        t.isMaterial === !0
          ? (o = this.Versioning.NeedsUpdate)
          : t.isObject3D === !0 &&
            (o = this.Versioning.MatrixWorldNeedsUpdate));
      let c = this.BindingType.Direct;
      if (r !== void 0) {
        if (s === "morphTargetInfluences") {
          if (!t.geometry) {
            Ot(
              "PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
              this,
            );
            return;
          }
          if (!t.geometry.morphAttributes) {
            Ot(
              "PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
              this,
            );
            return;
          }
          t.morphTargetDictionary[r] !== void 0 &&
            (r = t.morphTargetDictionary[r]);
        }
        ((c = this.BindingType.ArrayElement),
          (this.resolvedProperty = a),
          (this.propertyIndex = r));
      } else
        a.fromArray !== void 0 && a.toArray !== void 0
          ? ((c = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
          : Array.isArray(a)
            ? ((c = this.BindingType.EntireArray), (this.resolvedProperty = a))
            : (this.propertyName = s);
      ((this.getValue = this.GetterByBindingType[c]),
        (this.setValue = this.SetterByBindingTypeAndVersioning[c][o]));
    }
    unbind() {
      ((this.node = null),
        (this.getValue = this._getValue_unbound),
        (this.setValue = this._setValue_unbound));
    }
  };
pe.Composite = Ol;
pe.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3,
};
pe.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2,
};
pe.prototype.GetterByBindingType = [
  pe.prototype._getValue_direct,
  pe.prototype._getValue_array,
  pe.prototype._getValue_arrayElement,
  pe.prototype._getValue_toArray,
];
pe.prototype.SetterByBindingTypeAndVersioning = [
  [
    pe.prototype._setValue_direct,
    pe.prototype._setValue_direct_setNeedsUpdate,
    pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
  ],
  [
    pe.prototype._setValue_array,
    pe.prototype._setValue_array_setNeedsUpdate,
    pe.prototype._setValue_array_setMatrixWorldNeedsUpdate,
  ],
  [
    pe.prototype._setValue_arrayElement,
    pe.prototype._setValue_arrayElement_setNeedsUpdate,
    pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
  ],
  [
    pe.prototype._setValue_fromArray,
    pe.prototype._setValue_fromArray_setNeedsUpdate,
    pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
  ],
];
var H_ = new Float32Array(1);
var Nh = new he(),
  Bl = class {
    constructor(t, e, n = 0, s = 1 / 0) {
      ((this.ray = new vi(t, e)),
        (this.near = n),
        (this.far = s),
        (this.camera = null),
        (this.layers = new Zi()),
        (this.params = {
          Mesh: {},
          Line: { threshold: 1 },
          LOD: {},
          Points: { threshold: 1 },
          Sprite: {},
        }));
    }
    set(t, e) {
      this.ray.set(t, e);
    }
    setFromCamera(t, e) {
      e.isPerspectiveCamera
        ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
          this.ray.direction
            .set(t.x, t.y, 0.5)
            .unproject(e)
            .sub(this.ray.origin)
            .normalize(),
          (this.camera = e))
        : e.isOrthographicCamera
          ? (this.ray.origin
              .set(t.x, t.y, e.projectionMatrix.elements[14])
              .unproject(e),
            this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld),
            (this.camera = e))
          : Ot("Raycaster: Unsupported camera type: " + e.type);
    }
    setFromXRController(t) {
      return (
        Nh.identity().extractRotation(t.matrixWorld),
        this.ray.origin.setFromMatrixPosition(t.matrixWorld),
        this.ray.direction.set(0, 0, -1).applyMatrix4(Nh),
        this
      );
    }
    intersectObject(t, e = !0, n = []) {
      return (zl(t, this, n, e), n.sort(Uh), n);
    }
    intersectObjects(t, e = !0, n = []) {
      for (let s = 0, r = t.length; s < r; s++) zl(t[s], this, n, e);
      return (n.sort(Uh), n);
    }
  };
function Uh(i, t) {
  return i.distance - t.distance;
}
function zl(i, t, e, n) {
  let s = !0;
  if (
    (i.layers.test(t.layers) && i.raycast(t, e) === !1 && (s = !1),
    s === !0 && n === !0)
  ) {
    let r = i.children;
    for (let a = 0, o = r.length; a < o; a++) zl(r[a], t, e, !0);
  }
}
var _c = class _c {
  constructor(t, e, n, s) {
    ((this.elements = [1, 0, 0, 1]), t !== void 0 && this.set(t, e, n, s));
  }
  identity() {
    return (this.set(1, 0, 0, 1), this);
  }
  fromArray(t, e = 0) {
    for (let n = 0; n < 4; n++) this.elements[n] = t[n + e];
    return this;
  }
  set(t, e, n, s) {
    let r = this.elements;
    return ((r[0] = t), (r[2] = e), (r[1] = n), (r[3] = s), this);
  }
};
_c.prototype.isMatrix2 = !0;
var kl = _c;
function dc(i, t, e, n) {
  let s = Pf(n);
  switch (e) {
    case ic:
      return i * t;
    case rc:
      return ((i * t) / s.components) * s.byteLength;
    case Fa:
      return ((i * t) / s.components) * s.byteLength;
    case li:
      return ((i * t * 2) / s.components) * s.byteLength;
    case Oa:
      return ((i * t * 2) / s.components) * s.byteLength;
    case sc:
      return ((i * t * 3) / s.components) * s.byteLength;
    case tn:
      return ((i * t * 4) / s.components) * s.byteLength;
    case Ba:
      return ((i * t * 4) / s.components) * s.byteLength;
    case Xs:
    case qs:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Ys:
    case Zs:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case ka:
    case Ga:
      return (Math.max(i, 16) * Math.max(t, 8)) / 4;
    case za:
    case Va:
      return (Math.max(i, 8) * Math.max(t, 8)) / 2;
    case Ha:
    case Wa:
    case qa:
    case Ya:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 8;
    case Xa:
    case Js:
    case Za:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case Ja:
      return Math.floor((i + 3) / 4) * Math.floor((t + 3) / 4) * 16;
    case $a:
      return Math.floor((i + 4) / 5) * Math.floor((t + 3) / 4) * 16;
    case Ka:
      return Math.floor((i + 4) / 5) * Math.floor((t + 4) / 5) * 16;
    case Qa:
      return Math.floor((i + 5) / 6) * Math.floor((t + 4) / 5) * 16;
    case ja:
      return Math.floor((i + 5) / 6) * Math.floor((t + 5) / 6) * 16;
    case to:
      return Math.floor((i + 7) / 8) * Math.floor((t + 4) / 5) * 16;
    case eo:
      return Math.floor((i + 7) / 8) * Math.floor((t + 5) / 6) * 16;
    case no:
      return Math.floor((i + 7) / 8) * Math.floor((t + 7) / 8) * 16;
    case io:
      return Math.floor((i + 9) / 10) * Math.floor((t + 4) / 5) * 16;
    case so:
      return Math.floor((i + 9) / 10) * Math.floor((t + 5) / 6) * 16;
    case ro:
      return Math.floor((i + 9) / 10) * Math.floor((t + 7) / 8) * 16;
    case ao:
      return Math.floor((i + 9) / 10) * Math.floor((t + 9) / 10) * 16;
    case oo:
      return Math.floor((i + 11) / 12) * Math.floor((t + 9) / 10) * 16;
    case lo:
      return Math.floor((i + 11) / 12) * Math.floor((t + 11) / 12) * 16;
    case co:
    case ho:
    case uo:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
    case fo:
    case po:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 8;
    case $s:
    case mo:
      return Math.ceil(i / 4) * Math.ceil(t / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${e} format.`);
}
function Pf(i) {
  switch (i) {
    case He:
    case jl:
      return { byteLength: 1, components: 1 };
    case is:
    case tc:
    case Tn:
      return { byteLength: 2, components: 1 };
    case Na:
    case Ua:
      return { byteLength: 2, components: 4 };
    case ln:
    case Da:
    case cn:
      return { byteLength: 4, components: 1 };
    case ec:
    case nc:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: Ra } }),
  );
typeof window < "u" &&
  (window.__THREE__
    ? Nt("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = Ra));
function Zu() {
  let i = null,
    t = !1,
    e = null,
    n = null;
  function s(r, a) {
    (e(r, a), (n = i.requestAnimationFrame(s)));
  }
  return {
    start: function () {
      t !== !0 &&
        e !== null &&
        i !== null &&
        ((n = i.requestAnimationFrame(s)), (t = !0));
    },
    stop: function () {
      (i !== null && i.cancelAnimationFrame(n), (t = !1));
    },
    setAnimationLoop: function (r) {
      e = r;
    },
    setContext: function (r) {
      i = r;
    },
  };
}
function Lf(i) {
  let t = new WeakMap();
  function e(o, c) {
    let l = o.array,
      h = o.usage,
      d = l.byteLength,
      u = i.createBuffer();
    (i.bindBuffer(c, u), i.bufferData(c, l, h), o.onUploadCallback());
    let f;
    if (l instanceof Float32Array) f = i.FLOAT;
    else if (typeof Float16Array < "u" && l instanceof Float16Array)
      f = i.HALF_FLOAT;
    else if (l instanceof Uint16Array)
      o.isFloat16BufferAttribute ? (f = i.HALF_FLOAT) : (f = i.UNSIGNED_SHORT);
    else if (l instanceof Int16Array) f = i.SHORT;
    else if (l instanceof Uint32Array) f = i.UNSIGNED_INT;
    else if (l instanceof Int32Array) f = i.INT;
    else if (l instanceof Int8Array) f = i.BYTE;
    else if (l instanceof Uint8Array) f = i.UNSIGNED_BYTE;
    else if (l instanceof Uint8ClampedArray) f = i.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + l,
      );
    return {
      buffer: u,
      type: f,
      bytesPerElement: l.BYTES_PER_ELEMENT,
      version: o.version,
      size: d,
    };
  }
  function n(o, c, l) {
    let h = c.array,
      d = c.updateRanges;
    if ((i.bindBuffer(l, o), d.length === 0)) i.bufferSubData(l, 0, h);
    else {
      d.sort((f, g) => f.start - g.start);
      let u = 0;
      for (let f = 1; f < d.length; f++) {
        let g = d[u],
          y = d[f];
        y.start <= g.start + g.count + 1
          ? (g.count = Math.max(g.count, y.start + y.count - g.start))
          : (++u, (d[u] = y));
      }
      d.length = u + 1;
      for (let f = 0, g = d.length; f < g; f++) {
        let y = d[f];
        i.bufferSubData(l, y.start * h.BYTES_PER_ELEMENT, h, y.start, y.count);
      }
      c.clearUpdateRanges();
    }
    c.onUploadCallback();
  }
  function s(o) {
    return (o.isInterleavedBufferAttribute && (o = o.data), t.get(o));
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    let c = t.get(o);
    c && (i.deleteBuffer(c.buffer), t.delete(o));
  }
  function a(o, c) {
    if (
      (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute)
    ) {
      let h = t.get(o);
      (!h || h.version < o.version) &&
        t.set(o, {
          buffer: o.buffer,
          type: o.type,
          bytesPerElement: o.elementSize,
          version: o.version,
        });
      return;
    }
    let l = t.get(o);
    if (l === void 0) t.set(o, e(o, c));
    else if (l.version < o.version) {
      if (l.size !== o.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.",
        );
      (n(l.buffer, o, c), (l.version = o.version));
    }
  }
  return { get: s, remove: r, update: a };
}
var Df = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  Nf = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  Uf = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  Ff = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Of = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  Bf = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  zf = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  kf = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Vf = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,
  Gf = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  Hf = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  Wf = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  Xf = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  qf = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  Yf = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  Zf = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  Jf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  $f = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  Kf = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Qf = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,
  jf = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,
  tp = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,
  ep = `#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,
  np = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  ip = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  sp = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,
  rp = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  ap = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  op = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  lp = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  cp = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  hp = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  up = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,
  dp = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,
  fp = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  pp = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  mp = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  gp = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  _p = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  xp = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  yp = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  vp = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  Mp = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Sp = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  bp = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  wp = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,
  Ep = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  Tp = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Ap = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Cp = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Rp = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  Ip = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  Pp = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  Lp = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Dp = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  Np = `#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  Up = `#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,
  Fp = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Op = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Bp = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  zp = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  kp = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Vp = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  Gp = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Hp = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Wp = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Xp = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  qp = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  Yp = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Zp = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Jp = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  $p = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Kp = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  Qp = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  jp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  tm = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  em = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,
  nm = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  im = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  sm = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  rm = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  am = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  om = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  lm = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,
  cm = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  hm = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  um = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  dm = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  fm = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  pm = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  mm = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,
  gm = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  _m = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  xm = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  ym = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  vm = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  Mm = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Sm = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  bm = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  wm = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Em = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Tm = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Am = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  Cm = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  Rm = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Im = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Pm = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  Lm = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,
  Dm = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  Nm = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Um = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Fm = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Om = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Bm = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  zm = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  km = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  Vm = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  Gm = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,
  Hm = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Wm = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Xm = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  qm = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Ym = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  Zm = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Jm = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  $m = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Km = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  Qm = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  jm = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  tg = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  eg = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  ng = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  ig = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  sg = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  rg = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  ag = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  og = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  lg = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  cg = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  hg = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  ug = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  dg = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  $t = {
    alphahash_fragment: Df,
    alphahash_pars_fragment: Nf,
    alphamap_fragment: Uf,
    alphamap_pars_fragment: Ff,
    alphatest_fragment: Of,
    alphatest_pars_fragment: Bf,
    aomap_fragment: zf,
    aomap_pars_fragment: kf,
    batching_pars_vertex: Vf,
    batching_vertex: Gf,
    begin_vertex: Hf,
    beginnormal_vertex: Wf,
    bsdfs: Xf,
    iridescence_fragment: qf,
    bumpmap_pars_fragment: Yf,
    clipping_planes_fragment: Zf,
    clipping_planes_pars_fragment: Jf,
    clipping_planes_pars_vertex: $f,
    clipping_planes_vertex: Kf,
    color_fragment: Qf,
    color_pars_fragment: jf,
    color_pars_vertex: tp,
    color_vertex: ep,
    common: np,
    cube_uv_reflection_fragment: ip,
    defaultnormal_vertex: sp,
    displacementmap_pars_vertex: rp,
    displacementmap_vertex: ap,
    emissivemap_fragment: op,
    emissivemap_pars_fragment: lp,
    colorspace_fragment: cp,
    colorspace_pars_fragment: hp,
    envmap_fragment: up,
    envmap_common_pars_fragment: dp,
    envmap_pars_fragment: fp,
    envmap_pars_vertex: pp,
    envmap_physical_pars_fragment: Ep,
    envmap_vertex: mp,
    fog_vertex: gp,
    fog_pars_vertex: _p,
    fog_fragment: xp,
    fog_pars_fragment: yp,
    gradientmap_pars_fragment: vp,
    lightmap_pars_fragment: Mp,
    lights_lambert_fragment: Sp,
    lights_lambert_pars_fragment: bp,
    lights_pars_begin: wp,
    lights_toon_fragment: Tp,
    lights_toon_pars_fragment: Ap,
    lights_phong_fragment: Cp,
    lights_phong_pars_fragment: Rp,
    lights_physical_fragment: Ip,
    lights_physical_pars_fragment: Pp,
    lights_fragment_begin: Lp,
    lights_fragment_maps: Dp,
    lights_fragment_end: Np,
    lightprobes_pars_fragment: Up,
    logdepthbuf_fragment: Fp,
    logdepthbuf_pars_fragment: Op,
    logdepthbuf_pars_vertex: Bp,
    logdepthbuf_vertex: zp,
    map_fragment: kp,
    map_pars_fragment: Vp,
    map_particle_fragment: Gp,
    map_particle_pars_fragment: Hp,
    metalnessmap_fragment: Wp,
    metalnessmap_pars_fragment: Xp,
    morphinstance_vertex: qp,
    morphcolor_vertex: Yp,
    morphnormal_vertex: Zp,
    morphtarget_pars_vertex: Jp,
    morphtarget_vertex: $p,
    normal_fragment_begin: Kp,
    normal_fragment_maps: Qp,
    normal_pars_fragment: jp,
    normal_pars_vertex: tm,
    normal_vertex: em,
    normalmap_pars_fragment: nm,
    clearcoat_normal_fragment_begin: im,
    clearcoat_normal_fragment_maps: sm,
    clearcoat_pars_fragment: rm,
    iridescence_pars_fragment: am,
    opaque_fragment: om,
    packing: lm,
    premultiplied_alpha_fragment: cm,
    project_vertex: hm,
    dithering_fragment: um,
    dithering_pars_fragment: dm,
    roughnessmap_fragment: fm,
    roughnessmap_pars_fragment: pm,
    shadowmap_pars_fragment: mm,
    shadowmap_pars_vertex: gm,
    shadowmap_vertex: _m,
    shadowmask_pars_fragment: xm,
    skinbase_vertex: ym,
    skinning_pars_vertex: vm,
    skinning_vertex: Mm,
    skinnormal_vertex: Sm,
    specularmap_fragment: bm,
    specularmap_pars_fragment: wm,
    tonemapping_fragment: Em,
    tonemapping_pars_fragment: Tm,
    transmission_fragment: Am,
    transmission_pars_fragment: Cm,
    uv_pars_fragment: Rm,
    uv_pars_vertex: Im,
    uv_vertex: Pm,
    worldpos_vertex: Lm,
    background_vert: Dm,
    background_frag: Nm,
    backgroundCube_vert: Um,
    backgroundCube_frag: Fm,
    cube_vert: Om,
    cube_frag: Bm,
    depth_vert: zm,
    depth_frag: km,
    distance_vert: Vm,
    distance_frag: Gm,
    equirect_vert: Hm,
    equirect_frag: Wm,
    linedashed_vert: Xm,
    linedashed_frag: qm,
    meshbasic_vert: Ym,
    meshbasic_frag: Zm,
    meshlambert_vert: Jm,
    meshlambert_frag: $m,
    meshmatcap_vert: Km,
    meshmatcap_frag: Qm,
    meshnormal_vert: jm,
    meshnormal_frag: tg,
    meshphong_vert: eg,
    meshphong_frag: ng,
    meshphysical_vert: ig,
    meshphysical_frag: sg,
    meshtoon_vert: rg,
    meshtoon_frag: ag,
    points_vert: og,
    points_frag: lg,
    shadow_vert: cg,
    shadow_frag: hg,
    sprite_vert: ug,
    sprite_frag: dg,
  },
  xt = {
    common: {
      diffuse: { value: new Jt(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Ht() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ht() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Ht() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new Ht() },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
      dfgLUT: { value: null },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Ht() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Ht() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Ht() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Ht() },
      normalScale: { value: new ut(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Ht() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Ht() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Ht() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Ht() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Jt(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
      probesSH: { value: null },
      probesMin: { value: new L() },
      probesMax: { value: new L() },
      probesResolution: { value: new L() },
    },
    points: {
      diffuse: { value: new Jt(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ht() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Ht() },
    },
    sprite: {
      diffuse: { value: new Jt(16777215) },
      opacity: { value: 1 },
      center: { value: new ut(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Ht() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ht() },
      alphaTest: { value: 0 },
    },
  },
  Cn = {
    basic: {
      uniforms: ze([
        xt.common,
        xt.specularmap,
        xt.envmap,
        xt.aomap,
        xt.lightmap,
        xt.fog,
      ]),
      vertexShader: $t.meshbasic_vert,
      fragmentShader: $t.meshbasic_frag,
    },
    lambert: {
      uniforms: ze([
        xt.common,
        xt.specularmap,
        xt.envmap,
        xt.aomap,
        xt.lightmap,
        xt.emissivemap,
        xt.bumpmap,
        xt.normalmap,
        xt.displacementmap,
        xt.fog,
        xt.lights,
        { emissive: { value: new Jt(0) }, envMapIntensity: { value: 1 } },
      ]),
      vertexShader: $t.meshlambert_vert,
      fragmentShader: $t.meshlambert_frag,
    },
    phong: {
      uniforms: ze([
        xt.common,
        xt.specularmap,
        xt.envmap,
        xt.aomap,
        xt.lightmap,
        xt.emissivemap,
        xt.bumpmap,
        xt.normalmap,
        xt.displacementmap,
        xt.fog,
        xt.lights,
        {
          emissive: { value: new Jt(0) },
          specular: { value: new Jt(1118481) },
          shininess: { value: 30 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: $t.meshphong_vert,
      fragmentShader: $t.meshphong_frag,
    },
    standard: {
      uniforms: ze([
        xt.common,
        xt.envmap,
        xt.aomap,
        xt.lightmap,
        xt.emissivemap,
        xt.bumpmap,
        xt.normalmap,
        xt.displacementmap,
        xt.roughnessmap,
        xt.metalnessmap,
        xt.fog,
        xt.lights,
        {
          emissive: { value: new Jt(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: $t.meshphysical_vert,
      fragmentShader: $t.meshphysical_frag,
    },
    toon: {
      uniforms: ze([
        xt.common,
        xt.aomap,
        xt.lightmap,
        xt.emissivemap,
        xt.bumpmap,
        xt.normalmap,
        xt.displacementmap,
        xt.gradientmap,
        xt.fog,
        xt.lights,
        { emissive: { value: new Jt(0) } },
      ]),
      vertexShader: $t.meshtoon_vert,
      fragmentShader: $t.meshtoon_frag,
    },
    matcap: {
      uniforms: ze([
        xt.common,
        xt.bumpmap,
        xt.normalmap,
        xt.displacementmap,
        xt.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: $t.meshmatcap_vert,
      fragmentShader: $t.meshmatcap_frag,
    },
    points: {
      uniforms: ze([xt.points, xt.fog]),
      vertexShader: $t.points_vert,
      fragmentShader: $t.points_frag,
    },
    dashed: {
      uniforms: ze([
        xt.common,
        xt.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: $t.linedashed_vert,
      fragmentShader: $t.linedashed_frag,
    },
    depth: {
      uniforms: ze([xt.common, xt.displacementmap]),
      vertexShader: $t.depth_vert,
      fragmentShader: $t.depth_frag,
    },
    normal: {
      uniforms: ze([
        xt.common,
        xt.bumpmap,
        xt.normalmap,
        xt.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: $t.meshnormal_vert,
      fragmentShader: $t.meshnormal_frag,
    },
    sprite: {
      uniforms: ze([xt.sprite, xt.fog]),
      vertexShader: $t.sprite_vert,
      fragmentShader: $t.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Ht() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: $t.background_vert,
      fragmentShader: $t.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new Ht() },
      },
      vertexShader: $t.backgroundCube_vert,
      fragmentShader: $t.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: $t.cube_vert,
      fragmentShader: $t.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: $t.equirect_vert,
      fragmentShader: $t.equirect_frag,
    },
    distance: {
      uniforms: ze([
        xt.common,
        xt.displacementmap,
        {
          referencePosition: { value: new L() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: $t.distance_vert,
      fragmentShader: $t.distance_frag,
    },
    shadow: {
      uniforms: ze([
        xt.lights,
        xt.fog,
        { color: { value: new Jt(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: $t.shadow_vert,
      fragmentShader: $t.shadow_frag,
    },
  };
Cn.physical = {
  uniforms: ze([
    Cn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Ht() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Ht() },
      clearcoatNormalScale: { value: new ut(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Ht() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Ht() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Ht() },
      sheen: { value: 0 },
      sheenColor: { value: new Jt(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Ht() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Ht() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Ht() },
      transmissionSamplerSize: { value: new ut() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Ht() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Jt(0) },
      specularColor: { value: new Jt(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Ht() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Ht() },
      anisotropyVector: { value: new ut() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Ht() },
    },
  ]),
  vertexShader: $t.meshphysical_vert,
  fragmentShader: $t.meshphysical_frag,
};
var yo = { r: 0, b: 0, g: 0 },
  fg = new he(),
  Ju = new Ht();
Ju.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function pg(i, t, e, n, s, r) {
  let a = new Jt(0),
    o = s === !0 ? 0 : 1,
    c,
    l,
    h = null,
    d = 0,
    u = null;
  function f(b) {
    let w = b.isScene === !0 ? b.background : null;
    if (w && w.isTexture) {
      let v = b.backgroundBlurriness > 0;
      w = t.get(w, v);
    }
    return w;
  }
  function g(b) {
    let w = !1,
      v = f(b);
    v === null ? m(a, o) : v && v.isColor && (m(v, 1), (w = !0));
    let A = i.xr.getEnvironmentBlendMode();
    (A === "additive"
      ? e.buffers.color.setClear(0, 0, 0, 1, r)
      : A === "alpha-blend" && e.buffers.color.setClear(0, 0, 0, 0, r),
      (i.autoClear || w) &&
        (e.buffers.depth.setTest(!0),
        e.buffers.depth.setMask(!0),
        e.buffers.color.setMask(!0),
        i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil)));
  }
  function y(b, w) {
    let v = f(w);
    v && (v.isCubeTexture || v.mapping === Hs)
      ? (l === void 0 &&
          ((l = new fe(
            new Qi(1, 1, 1),
            new Je({
              name: "BackgroundCubeMaterial",
              uniforms: Ei(Cn.backgroundCube.uniforms),
              vertexShader: Cn.backgroundCube.vertexShader,
              fragmentShader: Cn.backgroundCube.fragmentShader,
              side: Ve,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            }),
          )),
          l.geometry.deleteAttribute("normal"),
          l.geometry.deleteAttribute("uv"),
          (l.onBeforeRender = function (A, T, R) {
            this.matrixWorld.copyPosition(R.matrixWorld);
          }),
          Object.defineProperty(l.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          n.update(l)),
        (l.material.uniforms.envMap.value = v),
        (l.material.uniforms.backgroundBlurriness.value =
          w.backgroundBlurriness),
        (l.material.uniforms.backgroundIntensity.value = w.backgroundIntensity),
        l.material.uniforms.backgroundRotation.value
          .setFromMatrix4(fg.makeRotationFromEuler(w.backgroundRotation))
          .transpose(),
        v.isCubeTexture &&
          v.isRenderTargetTexture === !1 &&
          l.material.uniforms.backgroundRotation.value.premultiply(Ju),
        (l.material.toneMapped = ee.getTransfer(v.colorSpace) !== re),
        (h !== v || d !== v.version || u !== i.toneMapping) &&
          ((l.material.needsUpdate = !0),
          (h = v),
          (d = v.version),
          (u = i.toneMapping)),
        l.layers.enableAll(),
        b.unshift(l, l.geometry, l.material, 0, 0, null))
      : v &&
        v.isTexture &&
        (c === void 0 &&
          ((c = new fe(
            new Ee(2, 2),
            new Je({
              name: "BackgroundMaterial",
              uniforms: Ei(Cn.background.uniforms),
              vertexShader: Cn.background.vertexShader,
              fragmentShader: Cn.background.fragmentShader,
              side: Fn,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            }),
          )),
          c.geometry.deleteAttribute("normal"),
          Object.defineProperty(c.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          n.update(c)),
        (c.material.uniforms.t2D.value = v),
        (c.material.uniforms.backgroundIntensity.value = w.backgroundIntensity),
        (c.material.toneMapped = ee.getTransfer(v.colorSpace) !== re),
        v.matrixAutoUpdate === !0 && v.updateMatrix(),
        c.material.uniforms.uvTransform.value.copy(v.matrix),
        (h !== v || d !== v.version || u !== i.toneMapping) &&
          ((c.material.needsUpdate = !0),
          (h = v),
          (d = v.version),
          (u = i.toneMapping)),
        c.layers.enableAll(),
        b.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function m(b, w) {
    (b.getRGB(yo, cc(i)), e.buffers.color.setClear(yo.r, yo.g, yo.b, w, r));
  }
  function p() {
    (l !== void 0 && (l.geometry.dispose(), l.material.dispose(), (l = void 0)),
      c !== void 0 &&
        (c.geometry.dispose(), c.material.dispose(), (c = void 0)));
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (b, w = 1) {
      (a.set(b), (o = w), m(a, o));
    },
    getClearAlpha: function () {
      return o;
    },
    setClearAlpha: function (b) {
      ((o = b), m(a, o));
    },
    render: g,
    addToRenderList: y,
    dispose: p,
  };
}
function mg(i, t) {
  let e = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    n = {},
    s = u(null),
    r = s,
    a = !1;
  function o(I, U, Z, k, F) {
    let X = !1,
      V = d(I, k, Z, U);
    (r !== V && ((r = V), l(r.object)),
      (X = f(I, k, Z, F)),
      X && g(I, k, Z, F),
      F !== null && t.update(F, i.ELEMENT_ARRAY_BUFFER),
      (X || a) &&
        ((a = !1),
        v(I, U, Z, k),
        F !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(F).buffer)));
  }
  function c() {
    return i.createVertexArray();
  }
  function l(I) {
    return i.bindVertexArray(I);
  }
  function h(I) {
    return i.deleteVertexArray(I);
  }
  function d(I, U, Z, k) {
    let F = k.wireframe === !0,
      X = n[U.id];
    X === void 0 && ((X = {}), (n[U.id] = X));
    let V = I.isInstancedMesh === !0 ? I.id : 0,
      D = X[V];
    D === void 0 && ((D = {}), (X[V] = D));
    let B = D[Z.id];
    B === void 0 && ((B = {}), (D[Z.id] = B));
    let q = B[F];
    return (q === void 0 && ((q = u(c())), (B[F] = q)), q);
  }
  function u(I) {
    let U = [],
      Z = [],
      k = [];
    for (let F = 0; F < e; F++) ((U[F] = 0), (Z[F] = 0), (k[F] = 0));
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: U,
      enabledAttributes: Z,
      attributeDivisors: k,
      object: I,
      attributes: {},
      index: null,
    };
  }
  function f(I, U, Z, k) {
    let F = r.attributes,
      X = U.attributes,
      V = 0,
      D = Z.getAttributes();
    for (let B in D)
      if (D[B].location >= 0) {
        let K = F[B],
          it = X[B];
        if (
          (it === void 0 &&
            (B === "instanceMatrix" &&
              I.instanceMatrix &&
              (it = I.instanceMatrix),
            B === "instanceColor" && I.instanceColor && (it = I.instanceColor)),
          K === void 0 || K.attribute !== it || (it && K.data !== it.data))
        )
          return !0;
        V++;
      }
    return r.attributesNum !== V || r.index !== k;
  }
  function g(I, U, Z, k) {
    let F = {},
      X = U.attributes,
      V = 0,
      D = Z.getAttributes();
    for (let B in D)
      if (D[B].location >= 0) {
        let K = X[B];
        K === void 0 &&
          (B === "instanceMatrix" && I.instanceMatrix && (K = I.instanceMatrix),
          B === "instanceColor" && I.instanceColor && (K = I.instanceColor));
        let it = {};
        ((it.attribute = K),
          K && K.data && (it.data = K.data),
          (F[B] = it),
          V++);
      }
    ((r.attributes = F), (r.attributesNum = V), (r.index = k));
  }
  function y() {
    let I = r.newAttributes;
    for (let U = 0, Z = I.length; U < Z; U++) I[U] = 0;
  }
  function m(I) {
    p(I, 0);
  }
  function p(I, U) {
    let Z = r.newAttributes,
      k = r.enabledAttributes,
      F = r.attributeDivisors;
    ((Z[I] = 1),
      k[I] === 0 && (i.enableVertexAttribArray(I), (k[I] = 1)),
      F[I] !== U && (i.vertexAttribDivisor(I, U), (F[I] = U)));
  }
  function b() {
    let I = r.newAttributes,
      U = r.enabledAttributes;
    for (let Z = 0, k = U.length; Z < k; Z++)
      U[Z] !== I[Z] && (i.disableVertexAttribArray(Z), (U[Z] = 0));
  }
  function w(I, U, Z, k, F, X, V) {
    V === !0
      ? i.vertexAttribIPointer(I, U, Z, F, X)
      : i.vertexAttribPointer(I, U, Z, k, F, X);
  }
  function v(I, U, Z, k) {
    y();
    let F = k.attributes,
      X = Z.getAttributes(),
      V = U.defaultAttributeValues;
    for (let D in X) {
      let B = X[D];
      if (B.location >= 0) {
        let q = F[D];
        if (
          (q === void 0 &&
            (D === "instanceMatrix" &&
              I.instanceMatrix &&
              (q = I.instanceMatrix),
            D === "instanceColor" && I.instanceColor && (q = I.instanceColor)),
          q !== void 0)
        ) {
          let K = q.normalized,
            it = q.itemSize,
            lt = t.get(q);
          if (lt === void 0) continue;
          let Vt = lt.buffer,
            Kt = lt.type,
            Q = lt.bytesPerElement,
            ct = Kt === i.INT || Kt === i.UNSIGNED_INT || q.gpuType === Da;
          if (q.isInterleavedBufferAttribute) {
            let at = q.data,
              At = at.stride,
              zt = q.offset;
            if (at.isInstancedInterleavedBuffer) {
              for (let Ut = 0; Ut < B.locationSize; Ut++)
                p(B.location + Ut, at.meshPerAttribute);
              I.isInstancedMesh !== !0 &&
                k._maxInstanceCount === void 0 &&
                (k._maxInstanceCount = at.meshPerAttribute * at.count);
            } else
              for (let Ut = 0; Ut < B.locationSize; Ut++) m(B.location + Ut);
            i.bindBuffer(i.ARRAY_BUFFER, Vt);
            for (let Ut = 0; Ut < B.locationSize; Ut++)
              w(
                B.location + Ut,
                it / B.locationSize,
                Kt,
                K,
                At * Q,
                (zt + (it / B.locationSize) * Ut) * Q,
                ct,
              );
          } else {
            if (q.isInstancedBufferAttribute) {
              for (let at = 0; at < B.locationSize; at++)
                p(B.location + at, q.meshPerAttribute);
              I.isInstancedMesh !== !0 &&
                k._maxInstanceCount === void 0 &&
                (k._maxInstanceCount = q.meshPerAttribute * q.count);
            } else
              for (let at = 0; at < B.locationSize; at++) m(B.location + at);
            i.bindBuffer(i.ARRAY_BUFFER, Vt);
            for (let at = 0; at < B.locationSize; at++)
              w(
                B.location + at,
                it / B.locationSize,
                Kt,
                K,
                it * Q,
                (it / B.locationSize) * at * Q,
                ct,
              );
          }
        } else if (V !== void 0) {
          let K = V[D];
          if (K !== void 0)
            switch (K.length) {
              case 2:
                i.vertexAttrib2fv(B.location, K);
                break;
              case 3:
                i.vertexAttrib3fv(B.location, K);
                break;
              case 4:
                i.vertexAttrib4fv(B.location, K);
                break;
              default:
                i.vertexAttrib1fv(B.location, K);
            }
        }
      }
    }
    b();
  }
  function A() {
    S();
    for (let I in n) {
      let U = n[I];
      for (let Z in U) {
        let k = U[Z];
        for (let F in k) {
          let X = k[F];
          for (let V in X) (h(X[V].object), delete X[V]);
          delete k[F];
        }
      }
      delete n[I];
    }
  }
  function T(I) {
    if (n[I.id] === void 0) return;
    let U = n[I.id];
    for (let Z in U) {
      let k = U[Z];
      for (let F in k) {
        let X = k[F];
        for (let V in X) (h(X[V].object), delete X[V]);
        delete k[F];
      }
    }
    delete n[I.id];
  }
  function R(I) {
    for (let U in n) {
      let Z = n[U];
      for (let k in Z) {
        let F = Z[k];
        if (F[I.id] === void 0) continue;
        let X = F[I.id];
        for (let V in X) (h(X[V].object), delete X[V]);
        delete F[I.id];
      }
    }
  }
  function _(I) {
    for (let U in n) {
      let Z = n[U],
        k = I.isInstancedMesh === !0 ? I.id : 0,
        F = Z[k];
      if (F !== void 0) {
        for (let X in F) {
          let V = F[X];
          for (let D in V) (h(V[D].object), delete V[D]);
          delete F[X];
        }
        (delete Z[k], Object.keys(Z).length === 0 && delete n[U]);
      }
    }
  }
  function S() {
    (C(), (a = !0), r !== s && ((r = s), l(r.object)));
  }
  function C() {
    ((s.geometry = null), (s.program = null), (s.wireframe = !1));
  }
  return {
    setup: o,
    reset: S,
    resetDefaultState: C,
    dispose: A,
    releaseStatesOfGeometry: T,
    releaseStatesOfObject: _,
    releaseStatesOfProgram: R,
    initAttributes: y,
    enableAttribute: m,
    disableUnusedAttributes: b,
  };
}
function gg(i, t, e) {
  let n;
  function s(c) {
    n = c;
  }
  function r(c, l) {
    (i.drawArrays(n, c, l), e.update(l, n, 1));
  }
  function a(c, l, h) {
    h !== 0 && (i.drawArraysInstanced(n, c, l, h), e.update(l, n, h));
  }
  function o(c, l, h) {
    if (h === 0) return;
    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, l, 0, h);
    let u = 0;
    for (let f = 0; f < h; f++) u += l[f];
    e.update(u, n, 1);
  }
  ((this.setMode = s),
    (this.render = r),
    (this.renderInstances = a),
    (this.renderMultiDraw = o));
}
function _g(i, t, e, n) {
  let s;
  function r() {
    if (s !== void 0) return s;
    if (t.has("EXT_texture_filter_anisotropic") === !0) {
      let R = t.get("EXT_texture_filter_anisotropic");
      s = i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else s = 0;
    return s;
  }
  function a(R) {
    return !(
      R !== tn &&
      n.convert(R) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function o(R) {
    let _ =
      R === Tn &&
      (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
    return !(
      R !== He &&
      n.convert(R) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) &&
      R !== cn &&
      !_
    );
  }
  function c(R) {
    if (R === "highp") {
      if (
        i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision >
          0 &&
        i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      R = "mediump";
    }
    return R === "mediump" &&
      i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision >
        0 &&
      i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let l = e.precision !== void 0 ? e.precision : "highp",
    h = c(l);
  h !== l &&
    (Nt("WebGLRenderer:", l, "not supported, using", h, "instead."), (l = h));
  let d = e.logarithmicDepthBuffer === !0,
    u = e.reversedDepthBuffer === !0 && t.has("EXT_clip_control");
  e.reversedDepthBuffer === !0 &&
    u === !1 &&
    Nt(
      "WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.",
    );
  let f = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),
    g = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    y = i.getParameter(i.MAX_TEXTURE_SIZE),
    m = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),
    p = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    b = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),
    w = i.getParameter(i.MAX_VARYING_VECTORS),
    v = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),
    A = i.getParameter(i.MAX_SAMPLES),
    T = i.getParameter(i.SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: r,
    getMaxPrecision: c,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: l,
    logarithmicDepthBuffer: d,
    reversedDepthBuffer: u,
    maxTextures: f,
    maxVertexTextures: g,
    maxTextureSize: y,
    maxCubemapSize: m,
    maxAttributes: p,
    maxVertexUniforms: b,
    maxVaryings: w,
    maxFragmentUniforms: v,
    maxSamples: A,
    samples: T,
  };
}
function xg(i) {
  let t = this,
    e = null,
    n = 0,
    s = !1,
    r = !1,
    a = new mn(),
    o = new Ht(),
    c = { value: null, needsUpdate: !1 };
  ((this.uniform = c),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (d, u) {
      let f = d.length !== 0 || u || n !== 0 || s;
      return ((s = u), (n = d.length), f);
    }),
    (this.beginShadows = function () {
      ((r = !0), h(null));
    }),
    (this.endShadows = function () {
      r = !1;
    }),
    (this.setGlobalState = function (d, u) {
      e = h(d, u, 0);
    }),
    (this.setState = function (d, u, f) {
      let g = d.clippingPlanes,
        y = d.clipIntersection,
        m = d.clipShadows,
        p = i.get(d);
      if (!s || g === null || g.length === 0 || (r && !m)) r ? h(null) : l();
      else {
        let b = r ? 0 : n,
          w = b * 4,
          v = p.clippingState || null;
        ((c.value = v), (v = h(g, u, w, f)));
        for (let A = 0; A !== w; ++A) v[A] = e[A];
        ((p.clippingState = v),
          (this.numIntersection = y ? this.numPlanes : 0),
          (this.numPlanes += b));
      }
    }));
  function l() {
    (c.value !== e && ((c.value = e), (c.needsUpdate = n > 0)),
      (t.numPlanes = n),
      (t.numIntersection = 0));
  }
  function h(d, u, f, g) {
    let y = d !== null ? d.length : 0,
      m = null;
    if (y !== 0) {
      if (((m = c.value), g !== !0 || m === null)) {
        let p = f + y * 4,
          b = u.matrixWorldInverse;
        (o.getNormalMatrix(b),
          (m === null || m.length < p) && (m = new Float32Array(p)));
        for (let w = 0, v = f; w !== y; ++w, v += 4)
          (a.copy(d[w]).applyMatrix4(b, o),
            a.normal.toArray(m, v),
            (m[v + 3] = a.constant));
      }
      ((c.value = m), (c.needsUpdate = !0));
    }
    return ((t.numPlanes = y), (t.numIntersection = 0), m);
  }
}
var ci = 4,
  Eu = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  Ti = 20,
  yg = 256,
  Ks = new Vs(),
  Tu = new Jt(),
  xc = null,
  yc = 0,
  vc = 0,
  Mc = !1,
  vg = new L(),
  Mo = class {
    constructor(t) {
      ((this._renderer = t),
        (this._pingPongRenderTarget = null),
        (this._lodMax = 0),
        (this._cubeSize = 0),
        (this._sizeLods = []),
        (this._sigmas = []),
        (this._lodMeshes = []),
        (this._backgroundBox = null),
        (this._cubemapMaterial = null),
        (this._equirectMaterial = null),
        (this._blurMaterial = null),
        (this._ggxMaterial = null));
    }
    fromScene(t, e = 0, n = 0.1, s = 100, r = {}) {
      let { size: a = 256, position: o = vg } = r;
      ((xc = this._renderer.getRenderTarget()),
        (yc = this._renderer.getActiveCubeFace()),
        (vc = this._renderer.getActiveMipmapLevel()),
        (Mc = this._renderer.xr.enabled),
        (this._renderer.xr.enabled = !1),
        this._setSize(a));
      let c = this._allocateTargets();
      return (
        (c.depthBuffer = !0),
        this._sceneToCubeUV(t, n, s, c, o),
        e > 0 && this._blur(c, 0, 0, e),
        this._applyPMREM(c),
        this._cleanup(c),
        c
      );
    }
    fromEquirectangular(t, e = null) {
      return this._fromTexture(t, e);
    }
    fromCubemap(t, e = null) {
      return this._fromTexture(t, e);
    }
    compileCubemapShader() {
      this._cubemapMaterial === null &&
        ((this._cubemapMaterial = Ru()),
        this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      this._equirectMaterial === null &&
        ((this._equirectMaterial = Cu()),
        this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      (this._dispose(),
        this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
        this._equirectMaterial !== null && this._equirectMaterial.dispose(),
        this._backgroundBox !== null &&
          (this._backgroundBox.geometry.dispose(),
          this._backgroundBox.material.dispose()));
    }
    _setSize(t) {
      ((this._lodMax = Math.floor(Math.log2(t))),
        (this._cubeSize = Math.pow(2, this._lodMax)));
    }
    _dispose() {
      (this._blurMaterial !== null && this._blurMaterial.dispose(),
        this._ggxMaterial !== null && this._ggxMaterial.dispose(),
        this._pingPongRenderTarget !== null &&
          this._pingPongRenderTarget.dispose());
      for (let t = 0; t < this._lodMeshes.length; t++)
        this._lodMeshes[t].geometry.dispose();
    }
    _cleanup(t) {
      (this._renderer.setRenderTarget(xc, yc, vc),
        (this._renderer.xr.enabled = Mc),
        (t.scissorTest = !1),
        as(t, 0, 0, t.width, t.height));
    }
    _fromTexture(t, e) {
      (t.mapping === ri || t.mapping === wi
        ? this._setSize(
            t.image.length === 0
              ? 16
              : t.image[0].width || t.image[0].image.width,
          )
        : this._setSize(t.image.width / 4),
        (xc = this._renderer.getRenderTarget()),
        (yc = this._renderer.getActiveCubeFace()),
        (vc = this._renderer.getActiveMipmapLevel()),
        (Mc = this._renderer.xr.enabled),
        (this._renderer.xr.enabled = !1));
      let n = e || this._allocateTargets();
      return (
        this._textureToCubeUV(t, n),
        this._applyPMREM(n),
        this._cleanup(n),
        n
      );
    }
    _allocateTargets() {
      let t = 3 * Math.max(this._cubeSize, 112),
        e = 4 * this._cubeSize,
        n = {
          magFilter: we,
          minFilter: we,
          generateMipmaps: !1,
          type: Tn,
          format: tn,
          colorSpace: ys,
          depthBuffer: !1,
        },
        s = Au(t, e, n);
      if (
        this._pingPongRenderTarget === null ||
        this._pingPongRenderTarget.width !== t ||
        this._pingPongRenderTarget.height !== e
      ) {
        (this._pingPongRenderTarget !== null && this._dispose(),
          (this._pingPongRenderTarget = Au(t, e, n)));
        let { _lodMax: r } = this;
        (({
          lodMeshes: this._lodMeshes,
          sizeLods: this._sizeLods,
          sigmas: this._sigmas,
        } = Mg(r)),
          (this._blurMaterial = bg(r, t, e)),
          (this._ggxMaterial = Sg(r, t, e)));
      }
      return s;
    }
    _compileMaterial(t) {
      let e = new fe(new me(), t);
      this._renderer.compile(e, Ks);
    }
    _sceneToCubeUV(t, e, n, s, r) {
      let c = new Oe(90, 1, e, n),
        l = [1, -1, 1, 1, 1, 1],
        h = [1, 1, 1, -1, -1, -1],
        d = this._renderer,
        u = d.autoClear,
        f = d.toneMapping;
      (d.getClearColor(Tu),
        (d.toneMapping = on),
        (d.autoClear = !1),
        d.state.buffers.depth.getReversed() &&
          (d.setRenderTarget(s), d.clearDepth(), d.setRenderTarget(null)),
        this._backgroundBox === null &&
          (this._backgroundBox = new fe(
            new Qi(),
            new an({
              name: "PMREM.Background",
              side: Ve,
              depthWrite: !1,
              depthTest: !1,
            }),
          )));
      let y = this._backgroundBox,
        m = y.material,
        p = !1,
        b = t.background;
      b
        ? b.isColor && (m.color.copy(b), (t.background = null), (p = !0))
        : (m.color.copy(Tu), (p = !0));
      for (let w = 0; w < 6; w++) {
        let v = w % 3;
        v === 0
          ? (c.up.set(0, l[w], 0),
            c.position.set(r.x, r.y, r.z),
            c.lookAt(r.x + h[w], r.y, r.z))
          : v === 1
            ? (c.up.set(0, 0, l[w]),
              c.position.set(r.x, r.y, r.z),
              c.lookAt(r.x, r.y + h[w], r.z))
            : (c.up.set(0, l[w], 0),
              c.position.set(r.x, r.y, r.z),
              c.lookAt(r.x, r.y, r.z + h[w]));
        let A = this._cubeSize;
        (as(s, v * A, w > 2 ? A : 0, A, A),
          d.setRenderTarget(s),
          p && d.render(y, c),
          d.render(t, c));
      }
      ((d.toneMapping = f), (d.autoClear = u), (t.background = b));
    }
    _textureToCubeUV(t, e) {
      let n = this._renderer,
        s = t.mapping === ri || t.mapping === wi;
      s
        ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ru()),
          (this._cubemapMaterial.uniforms.flipEnvMap.value =
            t.isRenderTargetTexture === !1 ? -1 : 1))
        : this._equirectMaterial === null && (this._equirectMaterial = Cu());
      let r = s ? this._cubemapMaterial : this._equirectMaterial,
        a = this._lodMeshes[0];
      a.material = r;
      let o = r.uniforms;
      o.envMap.value = t;
      let c = this._cubeSize;
      (as(e, 0, 0, 3 * c, 2 * c), n.setRenderTarget(e), n.render(a, Ks));
    }
    _applyPMREM(t) {
      let e = this._renderer,
        n = e.autoClear;
      e.autoClear = !1;
      let s = this._lodMeshes.length;
      for (let r = 1; r < s; r++) this._applyGGXFilter(t, r - 1, r);
      e.autoClear = n;
    }
    _applyGGXFilter(t, e, n) {
      let s = this._renderer,
        r = this._pingPongRenderTarget,
        a = this._ggxMaterial,
        o = this._lodMeshes[n];
      o.material = a;
      let c = a.uniforms,
        l = n / (this._lodMeshes.length - 1),
        h = e / (this._lodMeshes.length - 1),
        d = Math.sqrt(l * l - h * h),
        u = 0 + l * 1.25,
        f = d * u,
        { _lodMax: g } = this,
        y = this._sizeLods[n],
        m = 3 * y * (n > g - ci ? n - g + ci : 0),
        p = 4 * (this._cubeSize - y);
      ((c.envMap.value = t.texture),
        (c.roughness.value = f),
        (c.mipInt.value = g - e),
        as(r, m, p, 3 * y, 2 * y),
        s.setRenderTarget(r),
        s.render(o, Ks),
        (c.envMap.value = r.texture),
        (c.roughness.value = 0),
        (c.mipInt.value = g - n),
        as(t, m, p, 3 * y, 2 * y),
        s.setRenderTarget(t),
        s.render(o, Ks));
    }
    _blur(t, e, n, s, r) {
      let a = this._pingPongRenderTarget;
      (this._halfBlur(t, a, e, n, s, "latitudinal", r),
        this._halfBlur(a, t, n, n, s, "longitudinal", r));
    }
    _halfBlur(t, e, n, s, r, a, o) {
      let c = this._renderer,
        l = this._blurMaterial;
      a !== "latitudinal" &&
        a !== "longitudinal" &&
        Ot("blur direction must be either latitudinal or longitudinal!");
      let h = 3,
        d = this._lodMeshes[s];
      d.material = l;
      let u = l.uniforms,
        f = this._sizeLods[n] - 1,
        g = isFinite(r) ? Math.PI / (2 * f) : (2 * Math.PI) / (2 * Ti - 1),
        y = r / g,
        m = isFinite(r) ? 1 + Math.floor(h * y) : Ti;
      m > Ti &&
        Nt(
          `sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ti}`,
        );
      let p = [],
        b = 0;
      for (let R = 0; R < Ti; ++R) {
        let _ = R / y,
          S = Math.exp((-_ * _) / 2);
        (p.push(S), R === 0 ? (b += S) : R < m && (b += 2 * S));
      }
      for (let R = 0; R < p.length; R++) p[R] = p[R] / b;
      ((u.envMap.value = t.texture),
        (u.samples.value = m),
        (u.weights.value = p),
        (u.latitudinal.value = a === "latitudinal"),
        o && (u.poleAxis.value = o));
      let { _lodMax: w } = this;
      ((u.dTheta.value = g), (u.mipInt.value = w - n));
      let v = this._sizeLods[s],
        A = 3 * v * (s > w - ci ? s - w + ci : 0),
        T = 4 * (this._cubeSize - v);
      (as(e, A, T, 3 * v, 2 * v), c.setRenderTarget(e), c.render(d, Ks));
    }
  };
function Mg(i) {
  let t = [],
    e = [],
    n = [],
    s = i,
    r = i - ci + 1 + Eu.length;
  for (let a = 0; a < r; a++) {
    let o = Math.pow(2, s);
    t.push(o);
    let c = 1 / o;
    (a > i - ci ? (c = Eu[a - i + ci - 1]) : a === 0 && (c = 0), e.push(c));
    let l = 1 / (o - 2),
      h = -l,
      d = 1 + l,
      u = [h, h, d, h, d, d, h, h, d, d, h, d],
      f = 6,
      g = 6,
      y = 3,
      m = 2,
      p = 1,
      b = new Float32Array(y * g * f),
      w = new Float32Array(m * g * f),
      v = new Float32Array(p * g * f);
    for (let T = 0; T < f; T++) {
      let R = ((T % 3) * 2) / 3 - 1,
        _ = T > 2 ? 0 : -1,
        S = [
          R,
          _,
          0,
          R + 2 / 3,
          _,
          0,
          R + 2 / 3,
          _ + 1,
          0,
          R,
          _,
          0,
          R + 2 / 3,
          _ + 1,
          0,
          R,
          _ + 1,
          0,
        ];
      (b.set(S, y * g * T), w.set(u, m * g * T));
      let C = [T, T, T, T, T, T];
      v.set(C, p * g * T);
    }
    let A = new me();
    (A.setAttribute("position", new Be(b, y)),
      A.setAttribute("uv", new Be(w, m)),
      A.setAttribute("faceIndex", new Be(v, p)),
      n.push(new fe(A, null)),
      s > ci && s--);
  }
  return { lodMeshes: n, sizeLods: t, sigmas: e };
}
function Au(i, t, e) {
  let n = new Ye(i, t, e);
  return (
    (n.texture.mapping = Hs),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function as(i, t, e, n, s) {
  (i.viewport.set(t, e, n, s), i.scissor.set(t, e, n, s));
}
function Sg(i, t, e) {
  return new Je({
    name: "PMREMGGXConvolution",
    defines: {
      GGX_SAMPLES: yg,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / e,
      CUBEUV_MAX_MIP: `${i}.0`,
    },
    uniforms: {
      envMap: { value: null },
      roughness: { value: 0 },
      mipInt: { value: 0 },
    },
    vertexShader: bo(),
    fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// /about.html
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,
    blending: En,
    depthTest: !1,
    depthWrite: !1,
  });
}
function bg(i, t, e) {
  let n = new Float32Array(Ti),
    s = new L(0, 1, 0);
  return new Je({
    name: "SphericalGaussianBlur",
    defines: {
      n: Ti,
      CUBEUV_TEXEL_WIDTH: 1 / t,
      CUBEUV_TEXEL_HEIGHT: 1 / e,
      CUBEUV_MAX_MIP: `${i}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: s },
    },
    vertexShader: bo(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: En,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Cu() {
  return new Je({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: bo(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: En,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Ru() {
  return new Je({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: bo(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: En,
    depthTest: !1,
    depthWrite: !1,
  });
}
function bo() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
var So = class extends Ye {
  constructor(t = 1, e = {}) {
    (super(t, t, e), (this.isWebGLCubeRenderTarget = !0));
    let n = { width: t, height: t, depth: 1 },
      s = [n, n, n, n, n, n];
    ((this.texture = new Ts(s)),
      this._setTextureOptions(e),
      (this.texture.isRenderTargetTexture = !0));
  }
  fromEquirectangularTexture(t, e) {
    ((this.texture.type = e.type),
      (this.texture.colorSpace = e.colorSpace),
      (this.texture.generateMipmaps = e.generateMipmaps),
      (this.texture.minFilter = e.minFilter),
      (this.texture.magFilter = e.magFilter));
    let n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      s = new Qi(5, 5, 5),
      r = new Je({
        name: "CubemapFromEquirect",
        uniforms: Ei(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Ve,
        blending: En,
      });
    r.uniforms.tEquirect.value = e;
    let a = new fe(s, r),
      o = e.minFilter;
    return (
      e.minFilter === ai && (e.minFilter = we),
      new Ta(1, 10, this).update(t, a),
      (e.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(t, e = !0, n = !0, s = !0) {
    let r = t.getRenderTarget();
    for (let a = 0; a < 6; a++) (t.setRenderTarget(this, a), t.clear(e, n, s));
    t.setRenderTarget(r);
  }
};
function wg(i) {
  let t = new WeakMap(),
    e = new WeakMap(),
    n = null;
  function s(u, f = !1) {
    return u == null ? null : f ? a(u) : r(u);
  }
  function r(u) {
    if (u && u.isTexture) {
      let f = u.mapping;
      if (f === Ia || f === Pa)
        if (t.has(u)) {
          let g = t.get(u).texture;
          return o(g, u.mapping);
        } else {
          let g = u.image;
          if (g && g.height > 0) {
            let y = new So(g.height);
            return (
              y.fromEquirectangularTexture(i, u),
              t.set(u, y),
              u.addEventListener("dispose", l),
              o(y.texture, u.mapping)
            );
          } else return null;
        }
    }
    return u;
  }
  function a(u) {
    if (u && u.isTexture) {
      let f = u.mapping,
        g = f === Ia || f === Pa,
        y = f === ri || f === wi;
      if (g || y) {
        let m = e.get(u),
          p = m !== void 0 ? m.texture.pmremVersion : 0;
        if (u.isRenderTargetTexture && u.pmremVersion !== p)
          return (
            n === null && (n = new Mo(i)),
            (m = g ? n.fromEquirectangular(u, m) : n.fromCubemap(u, m)),
            (m.texture.pmremVersion = u.pmremVersion),
            e.set(u, m),
            m.texture
          );
        if (m !== void 0) return m.texture;
        {
          let b = u.image;
          return (g && b && b.height > 0) || (y && b && c(b))
            ? (n === null && (n = new Mo(i)),
              (m = g ? n.fromEquirectangular(u) : n.fromCubemap(u)),
              (m.texture.pmremVersion = u.pmremVersion),
              e.set(u, m),
              u.addEventListener("dispose", h),
              m.texture)
            : null;
        }
      }
    }
    return u;
  }
  function o(u, f) {
    return (f === Ia ? (u.mapping = ri) : f === Pa && (u.mapping = wi), u);
  }
  function c(u) {
    let f = 0,
      g = 6;
    for (let y = 0; y < g; y++) u[y] !== void 0 && f++;
    return f === g;
  }
  function l(u) {
    let f = u.target;
    f.removeEventListener("dispose", l);
    let g = t.get(f);
    g !== void 0 && (t.delete(f), g.dispose());
  }
  function h(u) {
    let f = u.target;
    f.removeEventListener("dispose", h);
    let g = e.get(f);
    g !== void 0 && (e.delete(f), g.dispose());
  }
  function d() {
    ((t = new WeakMap()),
      (e = new WeakMap()),
      n !== null && (n.dispose(), (n = null)));
  }
  return { get: s, dispose: d };
}
function Eg(i) {
  let t = {};
  function e(n) {
    if (t[n] !== void 0) return t[n];
    let s = i.getExtension(n);
    return ((t[n] = s), s);
  }
  return {
    has: function (n) {
      return e(n) !== null;
    },
    init: function () {
      (e("EXT_color_buffer_float"),
        e("WEBGL_clip_cull_distance"),
        e("OES_texture_float_linear"),
        e("EXT_color_buffer_half_float"),
        e("WEBGL_multisampled_render_to_texture"),
        e("WEBGL_render_shared_exponent"));
    },
    get: function (n) {
      let s = e(n);
      return (
        s === null && _i("WebGLRenderer: " + n + " extension not supported."),
        s
      );
    },
  };
}
function Tg(i, t, e, n) {
  let s = {},
    r = new WeakMap();
  function a(d) {
    let u = d.target;
    u.index !== null && t.remove(u.index);
    for (let g in u.attributes) t.remove(u.attributes[g]);
    (u.removeEventListener("dispose", a), delete s[u.id]);
    let f = r.get(u);
    (f && (t.remove(f), r.delete(u)),
      n.releaseStatesOfGeometry(u),
      u.isInstancedBufferGeometry === !0 && delete u._maxInstanceCount,
      e.memory.geometries--);
  }
  function o(d, u) {
    return (
      s[u.id] === !0 ||
        (u.addEventListener("dispose", a),
        (s[u.id] = !0),
        e.memory.geometries++),
      u
    );
  }
  function c(d) {
    let u = d.attributes;
    for (let f in u) t.update(u[f], i.ARRAY_BUFFER);
  }
  function l(d) {
    let u = [],
      f = d.index,
      g = d.attributes.position,
      y = 0;
    if (g === void 0) return;
    if (f !== null) {
      let b = f.array;
      y = f.version;
      for (let w = 0, v = b.length; w < v; w += 3) {
        let A = b[w + 0],
          T = b[w + 1],
          R = b[w + 2];
        u.push(A, T, T, R, R, A);
      }
    } else {
      let b = g.array;
      y = g.version;
      for (let w = 0, v = b.length / 3 - 1; w < v; w += 3) {
        let A = w + 0,
          T = w + 1,
          R = w + 2;
        u.push(A, T, T, R, R, A);
      }
    }
    let m = new (g.count >= 65535 ? ws : bs)(u, 1);
    m.version = y;
    let p = r.get(d);
    (p && t.remove(p), r.set(d, m));
  }
  function h(d) {
    let u = r.get(d);
    if (u) {
      let f = d.index;
      f !== null && u.version < f.version && l(d);
    } else l(d);
    return r.get(d);
  }
  return { get: o, update: c, getWireframeAttribute: h };
}
function Ag(i, t, e) {
  let n;
  function s(d) {
    n = d;
  }
  let r, a;
  function o(d) {
    ((r = d.type), (a = d.bytesPerElement));
  }
  function c(d, u) {
    (i.drawElements(n, u, r, d * a), e.update(u, n, 1));
  }
  function l(d, u, f) {
    f !== 0 && (i.drawElementsInstanced(n, u, r, d * a, f), e.update(u, n, f));
  }
  function h(d, u, f) {
    if (f === 0) return;
    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, u, 0, r, d, 0, f);
    let y = 0;
    for (let m = 0; m < f; m++) y += u[m];
    e.update(y, n, 1);
  }
  ((this.setMode = s),
    (this.setIndex = o),
    (this.render = c),
    (this.renderInstances = l),
    (this.renderMultiDraw = h));
}
function Cg(i) {
  let t = { geometries: 0, textures: 0 },
    e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, o) {
    switch ((e.calls++, a)) {
      case i.TRIANGLES:
        e.triangles += o * (r / 3);
        break;
      case i.LINES:
        e.lines += o * (r / 2);
        break;
      case i.LINE_STRIP:
        e.lines += o * (r - 1);
        break;
      case i.LINE_LOOP:
        e.lines += o * r;
        break;
      case i.POINTS:
        e.points += o * r;
        break;
      default:
        Ot("WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function s() {
    ((e.calls = 0), (e.triangles = 0), (e.points = 0), (e.lines = 0));
  }
  return {
    memory: t,
    render: e,
    programs: null,
    autoReset: !0,
    reset: s,
    update: n,
  };
}
function Rg(i, t, e) {
  let n = new WeakMap(),
    s = new _e();
  function r(a, o, c) {
    let l = a.morphTargetInfluences,
      h =
        o.morphAttributes.position ||
        o.morphAttributes.normal ||
        o.morphAttributes.color,
      d = h !== void 0 ? h.length : 0,
      u = n.get(o);
    if (u === void 0 || u.count !== d) {
      let S = function () {
        (R.dispose(), n.delete(o), o.removeEventListener("dispose", S));
      };
      u !== void 0 && u.texture.dispose();
      let f = o.morphAttributes.position !== void 0,
        g = o.morphAttributes.normal !== void 0,
        y = o.morphAttributes.color !== void 0,
        m = o.morphAttributes.position || [],
        p = o.morphAttributes.normal || [],
        b = o.morphAttributes.color || [],
        w = 0;
      (f === !0 && (w = 1), g === !0 && (w = 2), y === !0 && (w = 3));
      let v = o.attributes.position.count * w,
        A = 1;
      v > t.maxTextureSize &&
        ((A = Math.ceil(v / t.maxTextureSize)), (v = t.maxTextureSize));
      let T = new Float32Array(v * A * 4 * d),
        R = new Ss(T, v, A, d);
      ((R.type = cn), (R.needsUpdate = !0));
      let _ = w * 4;
      for (let C = 0; C < d; C++) {
        let I = m[C],
          U = p[C],
          Z = b[C],
          k = v * A * 4 * C;
        for (let F = 0; F < I.count; F++) {
          let X = F * _;
          (f === !0 &&
            (s.fromBufferAttribute(I, F),
            (T[k + X + 0] = s.x),
            (T[k + X + 1] = s.y),
            (T[k + X + 2] = s.z),
            (T[k + X + 3] = 0)),
            g === !0 &&
              (s.fromBufferAttribute(U, F),
              (T[k + X + 4] = s.x),
              (T[k + X + 5] = s.y),
              (T[k + X + 6] = s.z),
              (T[k + X + 7] = 0)),
            y === !0 &&
              (s.fromBufferAttribute(Z, F),
              (T[k + X + 8] = s.x),
              (T[k + X + 9] = s.y),
              (T[k + X + 10] = s.z),
              (T[k + X + 11] = Z.itemSize === 4 ? s.w : 1)));
        }
      }
      ((u = { count: d, texture: R, size: new ut(v, A) }),
        n.set(o, u),
        o.addEventListener("dispose", S));
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      c.getUniforms().setValue(i, "morphTexture", a.morphTexture, e);
    else {
      let f = 0;
      for (let y = 0; y < l.length; y++) f += l[y];
      let g = o.morphTargetsRelative ? 1 : 1 - f;
      (c.getUniforms().setValue(i, "morphTargetBaseInfluence", g),
        c.getUniforms().setValue(i, "morphTargetInfluences", l));
    }
    (c.getUniforms().setValue(i, "morphTargetsTexture", u.texture, e),
      c.getUniforms().setValue(i, "morphTargetsTextureSize", u.size));
  }
  return { update: r };
}
function Ig(i, t, e, n, s) {
  let r = new WeakMap();
  function a(l) {
    let h = s.render.frame,
      d = l.geometry,
      u = t.get(l, d);
    if (
      (r.get(u) !== h && (t.update(u), r.set(u, h)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", c) === !1 &&
          l.addEventListener("dispose", c),
        r.get(l) !== h &&
          (e.update(l.instanceMatrix, i.ARRAY_BUFFER),
          l.instanceColor !== null && e.update(l.instanceColor, i.ARRAY_BUFFER),
          r.set(l, h))),
      l.isSkinnedMesh)
    ) {
      let f = l.skeleton;
      r.get(f) !== h && (f.update(), r.set(f, h));
    }
    return u;
  }
  function o() {
    r = new WeakMap();
  }
  function c(l) {
    let h = l.target;
    (h.removeEventListener("dispose", c),
      n.releaseStatesOfObject(h),
      e.remove(h.instanceMatrix),
      h.instanceColor !== null && e.remove(h.instanceColor));
  }
  return { update: a, dispose: o };
}
var Pg = {
  [Xl]: "LINEAR_TONE_MAPPING",
  [ql]: "REINHARD_TONE_MAPPING",
  [Yl]: "CINEON_TONE_MAPPING",
  [Zl]: "ACES_FILMIC_TONE_MAPPING",
  [$l]: "AGX_TONE_MAPPING",
  [Kl]: "NEUTRAL_TONE_MAPPING",
  [Jl]: "CUSTOM_TONE_MAPPING",
};
function Lg(i, t, e, n, s, r) {
  let a = new Ye(t, e, {
      type: i,
      depthBuffer: s,
      stencilBuffer: r,
      samples: n ? 4 : 0,
      depthTexture: s ? new zn(t, e) : void 0,
    }),
    o = new Ye(t, e, { type: Tn, depthBuffer: !1, stencilBuffer: !1 }),
    c = new me();
  (c.setAttribute("position", new ne([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)),
    c.setAttribute("uv", new ne([0, 2, 0, 0, 2, 0], 2)));
  let l = new da({
      uniforms: { tDiffuse: { value: null } },
      vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,
      fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,
      depthTest: !1,
      depthWrite: !1,
    }),
    h = new fe(c, l),
    d = new Vs(-1, 1, 1, -1, 0, 1),
    u = null,
    f = null,
    g = !1,
    y,
    m = null,
    p = [],
    b = !1;
  ((this.setSize = function (w, v) {
    (a.setSize(w, v), o.setSize(w, v));
    for (let A = 0; A < p.length; A++) {
      let T = p[A];
      T.setSize && T.setSize(w, v);
    }
  }),
    (this.setEffects = function (w) {
      ((p = w), (b = p.length > 0 && p[0].isRenderPass === !0));
      let v = a.width,
        A = a.height;
      for (let T = 0; T < p.length; T++) {
        let R = p[T];
        R.setSize && R.setSize(v, A);
      }
    }),
    (this.begin = function (w, v) {
      if (g || (w.toneMapping === on && p.length === 0)) return !1;
      if (((m = v), v !== null)) {
        let A = v.width,
          T = v.height;
        (a.width !== A || a.height !== T) && this.setSize(A, T);
      }
      return (
        b === !1 && w.setRenderTarget(a),
        (y = w.toneMapping),
        (w.toneMapping = on),
        !0
      );
    }),
    (this.hasRenderPass = function () {
      return b;
    }),
    (this.end = function (w, v) {
      ((w.toneMapping = y), (g = !0));
      let A = a,
        T = o;
      for (let R = 0; R < p.length; R++) {
        let _ = p[R];
        if (_.enabled !== !1 && (_.render(w, T, A, v), _.needsSwap !== !1)) {
          let S = A;
          ((A = T), (T = S));
        }
      }
      if (u !== w.outputColorSpace || f !== w.toneMapping) {
        ((u = w.outputColorSpace),
          (f = w.toneMapping),
          (l.defines = {}),
          ee.getTransfer(u) === re && (l.defines.SRGB_TRANSFER = ""));
        let R = Pg[f];
        (R && (l.defines[R] = ""), (l.needsUpdate = !0));
      }
      ((l.uniforms.tDiffuse.value = A.texture),
        w.setRenderTarget(m),
        w.render(h, d),
        (m = null),
        (g = !1));
    }),
    (this.isCompositing = function () {
      return g;
    }),
    (this.dispose = function () {
      (a.depthTexture && a.depthTexture.dispose(),
        a.dispose(),
        o.dispose(),
        c.dispose(),
        l.dispose());
    }));
}
var $u = new De(),
  wc = new zn(1, 1),
  Ku = new Ss(),
  Qu = new jr(),
  ju = new Ts(),
  Iu = [],
  Pu = [],
  Lu = new Float32Array(16),
  Du = new Float32Array(9),
  Nu = new Float32Array(4);
function ls(i, t, e) {
  let n = i[0];
  if (n <= 0 || n > 0) return i;
  let s = t * e,
    r = Iu[s];
  if ((r === void 0 && ((r = new Float32Array(s)), (Iu[s] = r)), t !== 0)) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== t; ++a) ((o += e), i[a].toArray(r, o));
  }
  return r;
}
function Te(i, t) {
  if (i.length !== t.length) return !1;
  for (let e = 0, n = i.length; e < n; e++) if (i[e] !== t[e]) return !1;
  return !0;
}
function Ae(i, t) {
  for (let e = 0, n = t.length; e < n; e++) i[e] = t[e];
}
function wo(i, t) {
  let e = Pu[t];
  e === void 0 && ((e = new Int32Array(t)), (Pu[t] = e));
  for (let n = 0; n !== t; ++n) e[n] = i.allocateTextureUnit();
  return e;
}
function Dg(i, t) {
  let e = this.cache;
  e[0] !== t && (i.uniform1f(this.addr, t), (e[0] = t));
}
function Ng(i, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) &&
      (i.uniform2f(this.addr, t.x, t.y), (e[0] = t.x), (e[1] = t.y));
  else {
    if (Te(e, t)) return;
    (i.uniform2fv(this.addr, t), Ae(e, t));
  }
}
function Ug(i, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) &&
      (i.uniform3f(this.addr, t.x, t.y, t.z),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z));
  else if (t.r !== void 0)
    (e[0] !== t.r || e[1] !== t.g || e[2] !== t.b) &&
      (i.uniform3f(this.addr, t.r, t.g, t.b),
      (e[0] = t.r),
      (e[1] = t.g),
      (e[2] = t.b));
  else {
    if (Te(e, t)) return;
    (i.uniform3fv(this.addr, t), Ae(e, t));
  }
}
function Fg(i, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) &&
      (i.uniform4f(this.addr, t.x, t.y, t.z, t.w),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z),
      (e[3] = t.w));
  else {
    if (Te(e, t)) return;
    (i.uniform4fv(this.addr, t), Ae(e, t));
  }
}
function Og(i, t) {
  let e = this.cache,
    n = t.elements;
  if (n === void 0) {
    if (Te(e, t)) return;
    (i.uniformMatrix2fv(this.addr, !1, t), Ae(e, t));
  } else {
    if (Te(e, n)) return;
    (Nu.set(n), i.uniformMatrix2fv(this.addr, !1, Nu), Ae(e, n));
  }
}
function Bg(i, t) {
  let e = this.cache,
    n = t.elements;
  if (n === void 0) {
    if (Te(e, t)) return;
    (i.uniformMatrix3fv(this.addr, !1, t), Ae(e, t));
  } else {
    if (Te(e, n)) return;
    (Du.set(n), i.uniformMatrix3fv(this.addr, !1, Du), Ae(e, n));
  }
}
function zg(i, t) {
  let e = this.cache,
    n = t.elements;
  if (n === void 0) {
    if (Te(e, t)) return;
    (i.uniformMatrix4fv(this.addr, !1, t), Ae(e, t));
  } else {
    if (Te(e, n)) return;
    (Lu.set(n), i.uniformMatrix4fv(this.addr, !1, Lu), Ae(e, n));
  }
}
function kg(i, t) {
  let e = this.cache;
  e[0] !== t && (i.uniform1i(this.addr, t), (e[0] = t));
}
function Vg(i, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) &&
      (i.uniform2i(this.addr, t.x, t.y), (e[0] = t.x), (e[1] = t.y));
  else {
    if (Te(e, t)) return;
    (i.uniform2iv(this.addr, t), Ae(e, t));
  }
}
function Gg(i, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) &&
      (i.uniform3i(this.addr, t.x, t.y, t.z),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z));
  else {
    if (Te(e, t)) return;
    (i.uniform3iv(this.addr, t), Ae(e, t));
  }
}
function Hg(i, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) &&
      (i.uniform4i(this.addr, t.x, t.y, t.z, t.w),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z),
      (e[3] = t.w));
  else {
    if (Te(e, t)) return;
    (i.uniform4iv(this.addr, t), Ae(e, t));
  }
}
function Wg(i, t) {
  let e = this.cache;
  e[0] !== t && (i.uniform1ui(this.addr, t), (e[0] = t));
}
function Xg(i, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y) &&
      (i.uniform2ui(this.addr, t.x, t.y), (e[0] = t.x), (e[1] = t.y));
  else {
    if (Te(e, t)) return;
    (i.uniform2uiv(this.addr, t), Ae(e, t));
  }
}
function qg(i, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z) &&
      (i.uniform3ui(this.addr, t.x, t.y, t.z),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z));
  else {
    if (Te(e, t)) return;
    (i.uniform3uiv(this.addr, t), Ae(e, t));
  }
}
function Yg(i, t) {
  let e = this.cache;
  if (t.x !== void 0)
    (e[0] !== t.x || e[1] !== t.y || e[2] !== t.z || e[3] !== t.w) &&
      (i.uniform4ui(this.addr, t.x, t.y, t.z, t.w),
      (e[0] = t.x),
      (e[1] = t.y),
      (e[2] = t.z),
      (e[3] = t.w));
  else {
    if (Te(e, t)) return;
    (i.uniform4uiv(this.addr, t), Ae(e, t));
  }
}
function Zg(i, t, e) {
  let n = this.cache,
    s = e.allocateTextureUnit();
  n[0] !== s && (i.uniform1i(this.addr, s), (n[0] = s));
  let r;
  (this.type === i.SAMPLER_2D_SHADOW
    ? ((wc.compareFunction = e.isReversedDepthBuffer() ? xo : _o), (r = wc))
    : (r = $u),
    e.setTexture2D(t || r, s));
}
function Jg(i, t, e) {
  let n = this.cache,
    s = e.allocateTextureUnit();
  (n[0] !== s && (i.uniform1i(this.addr, s), (n[0] = s)),
    e.setTexture3D(t || Qu, s));
}
function $g(i, t, e) {
  let n = this.cache,
    s = e.allocateTextureUnit();
  (n[0] !== s && (i.uniform1i(this.addr, s), (n[0] = s)),
    e.setTextureCube(t || ju, s));
}
function Kg(i, t, e) {
  let n = this.cache,
    s = e.allocateTextureUnit();
  (n[0] !== s && (i.uniform1i(this.addr, s), (n[0] = s)),
    e.setTexture2DArray(t || Ku, s));
}
function Qg(i) {
  switch (i) {
    case 5126:
      return Dg;
    case 35664:
      return Ng;
    case 35665:
      return Ug;
    case 35666:
      return Fg;
    case 35674:
      return Og;
    case 35675:
      return Bg;
    case 35676:
      return zg;
    case 5124:
    case 35670:
      return kg;
    case 35667:
    case 35671:
      return Vg;
    case 35668:
    case 35672:
      return Gg;
    case 35669:
    case 35673:
      return Hg;
    case 5125:
      return Wg;
    case 36294:
      return Xg;
    case 36295:
      return qg;
    case 36296:
      return Yg;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Zg;
    case 35679:
    case 36299:
    case 36307:
      return Jg;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return $g;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Kg;
  }
}
function jg(i, t) {
  i.uniform1fv(this.addr, t);
}
function t0(i, t) {
  let e = ls(t, this.size, 2);
  i.uniform2fv(this.addr, e);
}
function e0(i, t) {
  let e = ls(t, this.size, 3);
  i.uniform3fv(this.addr, e);
}
function n0(i, t) {
  let e = ls(t, this.size, 4);
  i.uniform4fv(this.addr, e);
}
function i0(i, t) {
  let e = ls(t, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, e);
}
function s0(i, t) {
  let e = ls(t, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, e);
}
function r0(i, t) {
  let e = ls(t, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, e);
}
function a0(i, t) {
  i.uniform1iv(this.addr, t);
}
function o0(i, t) {
  i.uniform2iv(this.addr, t);
}
function l0(i, t) {
  i.uniform3iv(this.addr, t);
}
function c0(i, t) {
  i.uniform4iv(this.addr, t);
}
function h0(i, t) {
  i.uniform1uiv(this.addr, t);
}
function u0(i, t) {
  i.uniform2uiv(this.addr, t);
}
function d0(i, t) {
  i.uniform3uiv(this.addr, t);
}
function f0(i, t) {
  i.uniform4uiv(this.addr, t);
}
function p0(i, t, e) {
  let n = this.cache,
    s = t.length,
    r = wo(e, s);
  Te(n, r) || (i.uniform1iv(this.addr, r), Ae(n, r));
  let a;
  this.type === i.SAMPLER_2D_SHADOW ? (a = wc) : (a = $u);
  for (let o = 0; o !== s; ++o) e.setTexture2D(t[o] || a, r[o]);
}
function m0(i, t, e) {
  let n = this.cache,
    s = t.length,
    r = wo(e, s);
  Te(n, r) || (i.uniform1iv(this.addr, r), Ae(n, r));
  for (let a = 0; a !== s; ++a) e.setTexture3D(t[a] || Qu, r[a]);
}
function g0(i, t, e) {
  let n = this.cache,
    s = t.length,
    r = wo(e, s);
  Te(n, r) || (i.uniform1iv(this.addr, r), Ae(n, r));
  for (let a = 0; a !== s; ++a) e.setTextureCube(t[a] || ju, r[a]);
}
function _0(i, t, e) {
  let n = this.cache,
    s = t.length,
    r = wo(e, s);
  Te(n, r) || (i.uniform1iv(this.addr, r), Ae(n, r));
  for (let a = 0; a !== s; ++a) e.setTexture2DArray(t[a] || Ku, r[a]);
}
function x0(i) {
  switch (i) {
    case 5126:
      return jg;
    case 35664:
      return t0;
    case 35665:
      return e0;
    case 35666:
      return n0;
    case 35674:
      return i0;
    case 35675:
      return s0;
    case 35676:
      return r0;
    case 5124:
    case 35670:
      return a0;
    case 35667:
    case 35671:
      return o0;
    case 35668:
    case 35672:
      return l0;
    case 35669:
    case 35673:
      return c0;
    case 5125:
      return h0;
    case 36294:
      return u0;
    case 36295:
      return d0;
    case 36296:
      return f0;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return p0;
    case 35679:
    case 36299:
    case 36307:
      return m0;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return g0;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return _0;
  }
}
var Ec = class {
    constructor(t, e, n) {
      ((this.id = t),
        (this.addr = n),
        (this.cache = []),
        (this.type = e.type),
        (this.setValue = Qg(e.type)));
    }
  },
  Tc = class {
    constructor(t, e, n) {
      ((this.id = t),
        (this.addr = n),
        (this.cache = []),
        (this.type = e.type),
        (this.size = e.size),
        (this.setValue = x0(e.type)));
    }
  },
  Ac = class {
    constructor(t) {
      ((this.id = t), (this.seq = []), (this.map = {}));
    }
    setValue(t, e, n) {
      let s = this.seq;
      for (let r = 0, a = s.length; r !== a; ++r) {
        let o = s[r];
        o.setValue(t, e[o.id], n);
      }
    }
  },
  Sc = /(\w+)(\])?(\[|\.)?/g;
function Uu(i, t) {
  (i.seq.push(t), (i.map[t.id] = t));
}
function y0(i, t, e) {
  let n = i.name,
    s = n.length;
  for (Sc.lastIndex = 0; ;) {
    let r = Sc.exec(n),
      a = Sc.lastIndex,
      o = r[1],
      c = r[2] === "]",
      l = r[3];
    if ((c && (o = o | 0), l === void 0 || (l === "[" && a + 2 === s))) {
      Uu(e, l === void 0 ? new Ec(o, i, t) : new Tc(o, i, t));
      break;
    } else {
      let d = e.map[o];
      (d === void 0 && ((d = new Ac(o)), Uu(e, d)), (e = d));
    }
  }
}
var os = class {
  constructor(t, e) {
    ((this.seq = []), (this.map = {}));
    let n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let a = 0; a < n; ++a) {
      let o = t.getActiveUniform(e, a),
        c = t.getUniformLocation(e, o.name);
      y0(o, c, this);
    }
    let s = [],
      r = [];
    for (let a of this.seq)
      a.type === t.SAMPLER_2D_SHADOW ||
      a.type === t.SAMPLER_CUBE_SHADOW ||
      a.type === t.SAMPLER_2D_ARRAY_SHADOW
        ? s.push(a)
        : r.push(a);
    s.length > 0 && (this.seq = s.concat(r));
  }
  setValue(t, e, n, s) {
    let r = this.map[e];
    r !== void 0 && r.setValue(t, n, s);
  }
  setOptional(t, e, n) {
    let s = e[n];
    s !== void 0 && this.setValue(t, n, s);
  }
  static upload(t, e, n, s) {
    for (let r = 0, a = e.length; r !== a; ++r) {
      let o = e[r],
        c = n[o.id];
      c.needsUpdate !== !1 && o.setValue(t, c.value, s);
    }
  }
  static seqWithValue(t, e) {
    let n = [];
    for (let s = 0, r = t.length; s !== r; ++s) {
      let a = t[s];
      a.id in e && n.push(a);
    }
    return n;
  }
};
function Fu(i, t, e) {
  let n = i.createShader(t);
  return (i.shaderSource(n, e), i.compileShader(n), n);
}
var v0 = 37297,
  M0 = 0;
function S0(i, t) {
  let e = i.split(`
`),
    n = [],
    s = Math.max(t - 6, 0),
    r = Math.min(t + 6, e.length);
  for (let a = s; a < r; a++) {
    let o = a + 1;
    n.push(`${o === t ? ">" : " "} ${o}: ${e[a]}`);
  }
  return n.join(`
`);
}
var Ou = new Ht();
function b0(i) {
  ee._getMatrix(Ou, ee.workingColorSpace, i);
  let t = `mat3( ${Ou.elements.map((e) => e.toFixed(4))} )`;
  switch (ee.getTransfer(i)) {
    case vs:
      return [t, "LinearTransferOETF"];
    case re:
      return [t, "sRGBTransferOETF"];
    default:
      return (
        Nt("WebGLProgram: Unsupported color space: ", i),
        [t, "LinearTransferOETF"]
      );
  }
}
function Bu(i, t, e) {
  let n = i.getShaderParameter(t, i.COMPILE_STATUS),
    r = (i.getShaderInfoLog(t) || "").trim();
  if (n && r === "") return "";
  let a = /ERROR: 0:(\d+)/.exec(r);
  if (a) {
    let o = parseInt(a[1]);
    return (
      e.toUpperCase() +
      `

` +
      r +
      `

` +
      S0(i.getShaderSource(t), o)
    );
  } else return r;
}
function w0(i, t) {
  let e = b0(t);
  return [
    `vec4 ${i}( vec4 value ) {`,
    `	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,
    "}",
  ].join(`
`);
}
var E0 = {
  [Xl]: "Linear",
  [ql]: "Reinhard",
  [Yl]: "Cineon",
  [Zl]: "ACESFilmic",
  [$l]: "AgX",
  [Kl]: "Neutral",
  [Jl]: "Custom",
};
function T0(i, t) {
  let e = E0[t];
  return e === void 0
    ? (Nt("WebGLProgram: Unsupported toneMapping:", t),
      "vec3 " + i + "( vec3 color ) { return LinearToneMapping( color ); }")
    : "vec3 " + i + "( vec3 color ) { return " + e + "ToneMapping( color ); }";
}
var vo = new L();
function A0() {
  ee.getLuminanceCoefficients(vo);
  let i = vo.x.toFixed(4),
    t = vo.y.toFixed(4),
    e = vo.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,
    "	return dot( weights, rgb );",
    "}",
  ].join(`
`);
}
function C0(i) {
  return [
    i.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(js).join(`
`);
}
function R0(i) {
  let t = [];
  for (let e in i) {
    let n = i[e];
    n !== !1 && t.push("#define " + e + " " + n);
  }
  return t.join(`
`);
}
function I0(i, t) {
  let e = {},
    n = i.getProgramParameter(t, i.ACTIVE_ATTRIBUTES);
  for (let s = 0; s < n; s++) {
    let r = i.getActiveAttrib(t, s),
      a = r.name,
      o = 1;
    (r.type === i.FLOAT_MAT2 && (o = 2),
      r.type === i.FLOAT_MAT3 && (o = 3),
      r.type === i.FLOAT_MAT4 && (o = 4),
      (e[a] = {
        type: r.type,
        location: i.getAttribLocation(t, a),
        locationSize: o,
      }));
  }
  return e;
}
function js(i) {
  return i !== "";
}
function zu(i, t) {
  let e =
    t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
  return i
    .replace(/NUM_DIR_LIGHTS/g, t.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, e)
    .replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, t.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function ku(i, t) {
  return i
    .replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      t.numClippingPlanes - t.numClipIntersection,
    );
}
var P0 = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Cc(i) {
  return i.replace(P0, D0);
}
var L0 = new Map();
function D0(i, t) {
  let e = $t[t];
  if (e === void 0) {
    let n = L0.get(t);
    if (n !== void 0)
      ((e = $t[n]),
        Nt(
          'WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          t,
          n,
        ));
    else
      throw new Error(
        "THREE.WebGLProgram: Can not resolve #include <" + t + ">",
      );
  }
  return Cc(e);
}
var N0 =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Vu(i) {
  return i.replace(N0, U0);
}
function U0(i, t, e, n) {
  let s = "";
  for (let r = parseInt(t); r < parseInt(e); r++)
    s += n
      .replace(/\[\s*i\s*\]/g, "[ " + r + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, r);
  return s;
}
function Gu(i) {
  let t = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return (
    i.precision === "highp"
      ? (t += `
#define HIGH_PRECISION`)
      : i.precision === "mediump"
        ? (t += `
#define MEDIUM_PRECISION`)
        : i.precision === "lowp" &&
          (t += `
#define LOW_PRECISION`),
    t
  );
}
var F0 = { [Gs]: "SHADOWMAP_TYPE_PCF", [ns]: "SHADOWMAP_TYPE_VSM" };
function O0(i) {
  return F0[i.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
var B0 = {
  [ri]: "ENVMAP_TYPE_CUBE",
  [wi]: "ENVMAP_TYPE_CUBE",
  [Hs]: "ENVMAP_TYPE_CUBE_UV",
};
function z0(i) {
  return i.envMap === !1
    ? "ENVMAP_TYPE_CUBE"
    : B0[i.envMapMode] || "ENVMAP_TYPE_CUBE";
}
var k0 = { [wi]: "ENVMAP_MODE_REFRACTION" };
function V0(i) {
  return i.envMap === !1
    ? "ENVMAP_MODE_REFLECTION"
    : k0[i.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
var G0 = {
  [Wl]: "ENVMAP_BLENDING_MULTIPLY",
  [iu]: "ENVMAP_BLENDING_MIX",
  [su]: "ENVMAP_BLENDING_ADD",
};
function H0(i) {
  return i.envMap === !1
    ? "ENVMAP_BLENDING_NONE"
    : G0[i.combine] || "ENVMAP_BLENDING_NONE";
}
function W0(i) {
  let t = i.envMapCubeUVHeight;
  if (t === null) return null;
  let e = Math.log2(t) - 2,
    n = 1 / t;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, e), 7 * 16)),
    texelHeight: n,
    maxMip: e,
  };
}
function X0(i, t, e, n) {
  let s = i.getContext(),
    r = e.defines,
    a = e.vertexShader,
    o = e.fragmentShader,
    c = O0(e),
    l = z0(e),
    h = V0(e),
    d = H0(e),
    u = W0(e),
    f = C0(e),
    g = R0(r),
    y = s.createProgram(),
    m,
    p,
    b = e.glslVersion
      ? "#version " +
        e.glslVersion +
        `
`
      : "";
  (e.isRawShaderMaterial
    ? ((m = [
        "#define SHADER_TYPE " + e.shaderType,
        "#define SHADER_NAME " + e.shaderName,
        g,
      ].filter(js).join(`
`)),
      m.length > 0 &&
        (m += `
`),
      (p = [
        "#define SHADER_TYPE " + e.shaderType,
        "#define SHADER_NAME " + e.shaderName,
        g,
      ].filter(js).join(`
`)),
      p.length > 0 &&
        (p += `
`))
    : ((m = [
        Gu(e),
        "#define SHADER_TYPE " + e.shaderType,
        "#define SHADER_NAME " + e.shaderName,
        g,
        e.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        e.batching ? "#define USE_BATCHING" : "",
        e.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        e.instancing ? "#define USE_INSTANCING" : "",
        e.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        e.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        e.useFog && e.fog ? "#define USE_FOG" : "",
        e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
        e.map ? "#define USE_MAP" : "",
        e.envMap ? "#define USE_ENVMAP" : "",
        e.envMap ? "#define " + h : "",
        e.lightMap ? "#define USE_LIGHTMAP" : "",
        e.aoMap ? "#define USE_AOMAP" : "",
        e.bumpMap ? "#define USE_BUMPMAP" : "",
        e.normalMap ? "#define USE_NORMALMAP" : "",
        e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        e.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        e.anisotropy ? "#define USE_ANISOTROPY" : "",
        e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        e.specularMap ? "#define USE_SPECULARMAP" : "",
        e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        e.metalnessMap ? "#define USE_METALNESSMAP" : "",
        e.alphaMap ? "#define USE_ALPHAMAP" : "",
        e.alphaHash ? "#define USE_ALPHAHASH" : "",
        e.transmission ? "#define USE_TRANSMISSION" : "",
        e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        e.mapUv ? "#define MAP_UV " + e.mapUv : "",
        e.alphaMapUv ? "#define ALPHAMAP_UV " + e.alphaMapUv : "",
        e.lightMapUv ? "#define LIGHTMAP_UV " + e.lightMapUv : "",
        e.aoMapUv ? "#define AOMAP_UV " + e.aoMapUv : "",
        e.emissiveMapUv ? "#define EMISSIVEMAP_UV " + e.emissiveMapUv : "",
        e.bumpMapUv ? "#define BUMPMAP_UV " + e.bumpMapUv : "",
        e.normalMapUv ? "#define NORMALMAP_UV " + e.normalMapUv : "",
        e.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + e.displacementMapUv
          : "",
        e.metalnessMapUv ? "#define METALNESSMAP_UV " + e.metalnessMapUv : "",
        e.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + e.roughnessMapUv : "",
        e.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + e.anisotropyMapUv
          : "",
        e.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + e.clearcoatMapUv : "",
        e.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + e.clearcoatNormalMapUv
          : "",
        e.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + e.clearcoatRoughnessMapUv
          : "",
        e.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + e.iridescenceMapUv
          : "",
        e.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + e.iridescenceThicknessMapUv
          : "",
        e.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + e.sheenColorMapUv
          : "",
        e.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + e.sheenRoughnessMapUv
          : "",
        e.specularMapUv ? "#define SPECULARMAP_UV " + e.specularMapUv : "",
        e.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + e.specularColorMapUv
          : "",
        e.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + e.specularIntensityMapUv
          : "",
        e.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + e.transmissionMapUv
          : "",
        e.thicknessMapUv ? "#define THICKNESSMAP_UV " + e.thicknessMapUv : "",
        e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
        e.vertexNormals ? "#define HAS_NORMAL" : "",
        e.vertexColors ? "#define USE_COLOR" : "",
        e.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        e.vertexUv1s ? "#define USE_UV1" : "",
        e.vertexUv2s ? "#define USE_UV2" : "",
        e.vertexUv3s ? "#define USE_UV3" : "",
        e.pointsUvs ? "#define USE_POINTS_UV" : "",
        e.flatShading ? "#define FLAT_SHADED" : "",
        e.skinning ? "#define USE_SKINNING" : "",
        e.morphTargets ? "#define USE_MORPHTARGETS" : "",
        e.morphNormals && e.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        e.morphColors ? "#define USE_MORPHCOLORS" : "",
        e.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + e.morphTextureStride
          : "",
        e.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + e.morphTargetsCount
          : "",
        e.doubleSided ? "#define DOUBLE_SIDED" : "",
        e.flipSided ? "#define FLIP_SIDED" : "",
        e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        e.shadowMapEnabled ? "#define " + c : "",
        e.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
        e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(js).join(`
`)),
      (p = [
        Gu(e),
        "#define SHADER_TYPE " + e.shaderType,
        "#define SHADER_NAME " + e.shaderName,
        g,
        e.useFog && e.fog ? "#define USE_FOG" : "",
        e.useFog && e.fogExp2 ? "#define FOG_EXP2" : "",
        e.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        e.map ? "#define USE_MAP" : "",
        e.matcap ? "#define USE_MATCAP" : "",
        e.envMap ? "#define USE_ENVMAP" : "",
        e.envMap ? "#define " + l : "",
        e.envMap ? "#define " + h : "",
        e.envMap ? "#define " + d : "",
        u ? "#define CUBEUV_TEXEL_WIDTH " + u.texelWidth : "",
        u ? "#define CUBEUV_TEXEL_HEIGHT " + u.texelHeight : "",
        u ? "#define CUBEUV_MAX_MIP " + u.maxMip + ".0" : "",
        e.lightMap ? "#define USE_LIGHTMAP" : "",
        e.aoMap ? "#define USE_AOMAP" : "",
        e.bumpMap ? "#define USE_BUMPMAP" : "",
        e.normalMap ? "#define USE_NORMALMAP" : "",
        e.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        e.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        e.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
        e.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        e.anisotropy ? "#define USE_ANISOTROPY" : "",
        e.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        e.clearcoat ? "#define USE_CLEARCOAT" : "",
        e.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        e.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        e.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        e.dispersion ? "#define USE_DISPERSION" : "",
        e.iridescence ? "#define USE_IRIDESCENCE" : "",
        e.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        e.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        e.specularMap ? "#define USE_SPECULARMAP" : "",
        e.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        e.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        e.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        e.metalnessMap ? "#define USE_METALNESSMAP" : "",
        e.alphaMap ? "#define USE_ALPHAMAP" : "",
        e.alphaTest ? "#define USE_ALPHATEST" : "",
        e.alphaHash ? "#define USE_ALPHAHASH" : "",
        e.sheen ? "#define USE_SHEEN" : "",
        e.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        e.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        e.transmission ? "#define USE_TRANSMISSION" : "",
        e.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        e.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        e.vertexTangents && e.flatShading === !1 ? "#define USE_TANGENT" : "",
        e.vertexColors || e.instancingColor ? "#define USE_COLOR" : "",
        e.vertexAlphas || e.batchingColor ? "#define USE_COLOR_ALPHA" : "",
        e.vertexUv1s ? "#define USE_UV1" : "",
        e.vertexUv2s ? "#define USE_UV2" : "",
        e.vertexUv3s ? "#define USE_UV3" : "",
        e.pointsUvs ? "#define USE_POINTS_UV" : "",
        e.gradientMap ? "#define USE_GRADIENTMAP" : "",
        e.flatShading ? "#define FLAT_SHADED" : "",
        e.doubleSided ? "#define DOUBLE_SIDED" : "",
        e.flipSided ? "#define FLIP_SIDED" : "",
        e.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        e.shadowMapEnabled ? "#define " + c : "",
        e.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        e.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        e.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "",
        e.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        e.decodeVideoTextureEmissive
          ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE"
          : "",
        e.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
        e.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        e.toneMapping !== on ? "#define TONE_MAPPING" : "",
        e.toneMapping !== on ? $t.tonemapping_pars_fragment : "",
        e.toneMapping !== on ? T0("toneMapping", e.toneMapping) : "",
        e.dithering ? "#define DITHERING" : "",
        e.opaque ? "#define OPAQUE" : "",
        $t.colorspace_pars_fragment,
        w0("linearToOutputTexel", e.outputColorSpace),
        A0(),
        e.useDepthPacking ? "#define DEPTH_PACKING " + e.depthPacking : "",
        `
`,
      ].filter(js).join(`
`))),
    (a = Cc(a)),
    (a = zu(a, e)),
    (a = ku(a, e)),
    (o = Cc(o)),
    (o = zu(o, e)),
    (o = ku(o, e)),
    (a = Vu(a)),
    (o = Vu(o)),
    e.isRawShaderMaterial !== !0 &&
      ((b = `#version 300 es
`),
      (m =
        [
          f,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        m),
      (p =
        [
          "#define varying in",
          e.glslVersion === ac
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          e.glslVersion === ac ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        p)));
  let w = b + m + a,
    v = b + p + o,
    A = Fu(s, s.VERTEX_SHADER, w),
    T = Fu(s, s.FRAGMENT_SHADER, v);
  (s.attachShader(y, A),
    s.attachShader(y, T),
    e.index0AttributeName !== void 0
      ? s.bindAttribLocation(y, 0, e.index0AttributeName)
      : e.hasPositionAttribute === !0 && s.bindAttribLocation(y, 0, "position"),
    s.linkProgram(y));
  function R(I) {
    if (i.debug.checkShaderErrors) {
      let U = s.getProgramInfoLog(y) || "",
        Z = s.getShaderInfoLog(A) || "",
        k = s.getShaderInfoLog(T) || "",
        F = U.trim(),
        X = Z.trim(),
        V = k.trim(),
        D = !0,
        B = !0;
      if (s.getProgramParameter(y, s.LINK_STATUS) === !1)
        if (((D = !1), typeof i.debug.onShaderError == "function"))
          i.debug.onShaderError(s, y, A, T);
        else {
          let q = Bu(s, A, "vertex"),
            K = Bu(s, T, "fragment");
          Ot(
            "WebGLProgram: Shader Error " +
              s.getError() +
              " - VALIDATE_STATUS " +
              s.getProgramParameter(y, s.VALIDATE_STATUS) +
              `

Material Name: ` +
              I.name +
              `
Material Type: ` +
              I.type +
              `

Program Info Log: ` +
              F +
              `
` +
              q +
              `
` +
              K,
          );
        }
      else
        F !== ""
          ? Nt("WebGLProgram: Program Info Log:", F)
          : (X === "" || V === "") && (B = !1);
      B &&
        (I.diagnostics = {
          runnable: D,
          programLog: F,
          vertexShader: { log: X, prefix: m },
          fragmentShader: { log: V, prefix: p },
        });
    }
    (s.deleteShader(A), s.deleteShader(T), (_ = new os(s, y)), (S = I0(s, y)));
  }
  let _;
  this.getUniforms = function () {
    return (_ === void 0 && R(this), _);
  };
  let S;
  this.getAttributes = function () {
    return (S === void 0 && R(this), S);
  };
  let C = e.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return (C === !1 && (C = s.getProgramParameter(y, v0)), C);
    }),
    (this.destroy = function () {
      (n.releaseStatesOfProgram(this),
        s.deleteProgram(y),
        (this.program = void 0));
    }),
    (this.type = e.shaderType),
    (this.name = e.shaderName),
    (this.id = M0++),
    (this.cacheKey = t),
    (this.usedTimes = 1),
    (this.program = y),
    (this.vertexShader = A),
    (this.fragmentShader = T),
    this
  );
}
var q0 = 0,
  Rc = class {
    constructor() {
      ((this.shaderCache = new Map()), (this.materialCache = new Map()));
    }
    update(t, e, n) {
      let s = this._getShaderCacheForMaterial(t);
      return (
        s.has(e) === !1 && (s.add(e), e.usedTimes++),
        s.has(n) === !1 && (s.add(n), n.usedTimes++),
        this
      );
    }
    remove(t) {
      let e = this.materialCache.get(t);
      for (let n of e)
        (n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code));
      return (this.materialCache.delete(t), this);
    }
    getVertexShaderStage(t) {
      return this._getShaderStage(t.vertexShader);
    }
    getFragmentShaderStage(t) {
      return this._getShaderStage(t.fragmentShader);
    }
    dispose() {
      (this.shaderCache.clear(), this.materialCache.clear());
    }
    _getShaderCacheForMaterial(t) {
      let e = this.materialCache,
        n = e.get(t);
      return (n === void 0 && ((n = new Set()), e.set(t, n)), n);
    }
    _getShaderStage(t) {
      let e = this.shaderCache,
        n = e.get(t);
      return (n === void 0 && ((n = new Ic(t)), e.set(t, n)), n);
    }
  },
  Ic = class {
    constructor(t) {
      ((this.id = q0++), (this.code = t), (this.usedTimes = 0));
    }
  };
function Y0(i) {
  return i === li || i === Js || i === $s;
}
function Z0(i, t, e, n, s, r) {
  let a = new Zi(),
    o = new Rc(),
    c = new Set(),
    l = [],
    h = new Map(),
    d = n.logarithmicDepthBuffer,
    u = n.precision,
    f = {
      MeshDepthMaterial: "depth",
      MeshDistanceMaterial: "distance",
      MeshNormalMaterial: "normal",
      MeshBasicMaterial: "basic",
      MeshLambertMaterial: "lambert",
      MeshPhongMaterial: "phong",
      MeshToonMaterial: "toon",
      MeshStandardMaterial: "physical",
      MeshPhysicalMaterial: "physical",
      MeshMatcapMaterial: "matcap",
      LineBasicMaterial: "basic",
      LineDashedMaterial: "dashed",
      PointsMaterial: "points",
      ShadowMaterial: "shadow",
      SpriteMaterial: "sprite",
    };
  function g(_) {
    return (c.add(_), _ === 0 ? "uv" : `uv${_}`);
  }
  function y(_, S, C, I, U, Z) {
    let k = I.fog,
      F = U.geometry,
      X =
        _.isMeshStandardMaterial ||
        _.isMeshLambertMaterial ||
        _.isMeshPhongMaterial
          ? I.environment
          : null,
      V =
        _.isMeshStandardMaterial ||
        (_.isMeshLambertMaterial && !_.envMap) ||
        (_.isMeshPhongMaterial && !_.envMap),
      D = t.get(_.envMap || X, V),
      B = D && D.mapping === Hs ? D.image.height : null,
      q = f[_.type];
    _.precision !== null &&
      ((u = n.getMaxPrecision(_.precision)),
      u !== _.precision &&
        Nt(
          "WebGLProgram.getParameters:",
          _.precision,
          "not supported, using",
          u,
          "instead.",
        ));
    let K =
        F.morphAttributes.position ||
        F.morphAttributes.normal ||
        F.morphAttributes.color,
      it = K !== void 0 ? K.length : 0,
      lt = 0;
    (F.morphAttributes.position !== void 0 && (lt = 1),
      F.morphAttributes.normal !== void 0 && (lt = 2),
      F.morphAttributes.color !== void 0 && (lt = 3));
    let Vt, Kt, Q, ct;
    if (q) {
      let Et = Cn[q];
      ((Vt = Et.vertexShader), (Kt = Et.fragmentShader));
    } else {
      ((Vt = _.vertexShader), (Kt = _.fragmentShader));
      let Et = o.getVertexShaderStage(_),
        ye = o.getFragmentShaderStage(_);
      (o.update(_, Et, ye), (Q = Et.id), (ct = ye.id));
    }
    let at = i.getRenderTarget(),
      At = i.state.buffers.depth.getReversed(),
      zt = U.isInstancedMesh === !0,
      Ut = U.isBatchedMesh === !0,
      se = !!_.map,
      Gt = !!_.matcap,
      et = !!D,
      rt = !!_.aoMap,
      st = !!_.lightMap,
      yt = !!_.bumpMap && _.wireframe === !1,
      gt = !!_.normalMap,
      Ft = !!_.displacementMap,
      Rt = !!_.emissiveMap,
      kt = !!_.metalnessMap,
      Xt = !!_.roughnessMap,
      P = _.anisotropy > 0,
      ae = _.clearcoat > 0,
      jt = _.dispersion > 0,
      E = _.iridescence > 0,
      x = _.sheen > 0,
      z = _.transmission > 0,
      W = P && !!_.anisotropyMap,
      J = ae && !!_.clearcoatMap,
      ot = ae && !!_.clearcoatNormalMap,
      ht = ae && !!_.clearcoatRoughnessMap,
      $ = E && !!_.iridescenceMap,
      tt = E && !!_.iridescenceThicknessMap,
      ft = x && !!_.sheenColorMap,
      It = x && !!_.sheenRoughnessMap,
      _t = !!_.specularMap,
      pt = !!_.specularColorMap,
      Dt = !!_.specularIntensityMap,
      Bt = z && !!_.transmissionMap,
      qt = z && !!_.thicknessMap,
      N = !!_.gradientMap,
      dt = !!_.alphaMap,
      j = _.alphaTest > 0,
      mt = !!_.alphaHash,
      St = !!_.extensions,
      nt = on;
    _.toneMapped &&
      (at === null || at.isXRRenderTarget === !0) &&
      (nt = i.toneMapping);
    let Ct = {
      shaderID: q,
      shaderType: _.type,
      shaderName: _.name,
      vertexShader: Vt,
      fragmentShader: Kt,
      defines: _.defines,
      customVertexShaderID: Q,
      customFragmentShaderID: ct,
      isRawShaderMaterial: _.isRawShaderMaterial === !0,
      glslVersion: _.glslVersion,
      precision: u,
      batching: Ut,
      batchingColor: Ut && U._colorsTexture !== null,
      instancing: zt,
      instancingColor: zt && U.instanceColor !== null,
      instancingMorph: zt && U.morphTexture !== null,
      outputColorSpace:
        at === null
          ? i.outputColorSpace
          : at.isXRRenderTarget === !0
            ? at.texture.colorSpace
            : ee.workingColorSpace,
      alphaToCoverage: !!_.alphaToCoverage,
      map: se,
      matcap: Gt,
      envMap: et,
      envMapMode: et && D.mapping,
      envMapCubeUVHeight: B,
      aoMap: rt,
      lightMap: st,
      bumpMap: yt,
      normalMap: gt,
      displacementMap: Ft,
      emissiveMap: Rt,
      normalMapObjectSpace: gt && _.normalMapType === ou,
      normalMapTangentSpace: gt && _.normalMapType === go,
      packedNormalMap: gt && _.normalMapType === go && Y0(_.normalMap.format),
      metalnessMap: kt,
      roughnessMap: Xt,
      anisotropy: P,
      anisotropyMap: W,
      clearcoat: ae,
      clearcoatMap: J,
      clearcoatNormalMap: ot,
      clearcoatRoughnessMap: ht,
      dispersion: jt,
      iridescence: E,
      iridescenceMap: $,
      iridescenceThicknessMap: tt,
      sheen: x,
      sheenColorMap: ft,
      sheenRoughnessMap: It,
      specularMap: _t,
      specularColorMap: pt,
      specularIntensityMap: Dt,
      transmission: z,
      transmissionMap: Bt,
      thicknessMap: qt,
      gradientMap: N,
      opaque:
        _.transparent === !1 && _.blending === xi && _.alphaToCoverage === !1,
      alphaMap: dt,
      alphaTest: j,
      alphaHash: mt,
      combine: _.combine,
      mapUv: se && g(_.map.channel),
      aoMapUv: rt && g(_.aoMap.channel),
      lightMapUv: st && g(_.lightMap.channel),
      bumpMapUv: yt && g(_.bumpMap.channel),
      normalMapUv: gt && g(_.normalMap.channel),
      displacementMapUv: Ft && g(_.displacementMap.channel),
      emissiveMapUv: Rt && g(_.emissiveMap.channel),
      metalnessMapUv: kt && g(_.metalnessMap.channel),
      roughnessMapUv: Xt && g(_.roughnessMap.channel),
      anisotropyMapUv: W && g(_.anisotropyMap.channel),
      clearcoatMapUv: J && g(_.clearcoatMap.channel),
      clearcoatNormalMapUv: ot && g(_.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ht && g(_.clearcoatRoughnessMap.channel),
      iridescenceMapUv: $ && g(_.iridescenceMap.channel),
      iridescenceThicknessMapUv: tt && g(_.iridescenceThicknessMap.channel),
      sheenColorMapUv: ft && g(_.sheenColorMap.channel),
      sheenRoughnessMapUv: It && g(_.sheenRoughnessMap.channel),
      specularMapUv: _t && g(_.specularMap.channel),
      specularColorMapUv: pt && g(_.specularColorMap.channel),
      specularIntensityMapUv: Dt && g(_.specularIntensityMap.channel),
      transmissionMapUv: Bt && g(_.transmissionMap.channel),
      thicknessMapUv: qt && g(_.thicknessMap.channel),
      alphaMapUv: dt && g(_.alphaMap.channel),
      vertexTangents: !!F.attributes.tangent && (gt || P),
      vertexNormals: !!F.attributes.normal,
      vertexColors: _.vertexColors,
      vertexAlphas:
        _.vertexColors === !0 &&
        !!F.attributes.color &&
        F.attributes.color.itemSize === 4,
      pointsUvs: U.isPoints === !0 && !!F.attributes.uv && (se || dt),
      fog: !!k,
      useFog: _.fog === !0,
      fogExp2: !!k && k.isFogExp2,
      flatShading:
        _.wireframe === !1 &&
        (_.flatShading === !0 ||
          (F.attributes.normal === void 0 &&
            gt === !1 &&
            (_.isMeshLambertMaterial ||
              _.isMeshPhongMaterial ||
              _.isMeshStandardMaterial ||
              _.isMeshPhysicalMaterial))),
      sizeAttenuation: _.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      reversedDepthBuffer: At,
      skinning: U.isSkinnedMesh === !0,
      hasPositionAttribute: F.attributes.position !== void 0,
      morphTargets: F.morphAttributes.position !== void 0,
      morphNormals: F.morphAttributes.normal !== void 0,
      morphColors: F.morphAttributes.color !== void 0,
      morphTargetsCount: it,
      morphTextureStride: lt,
      numDirLights: S.directional.length,
      numPointLights: S.point.length,
      numSpotLights: S.spot.length,
      numSpotLightMaps: S.spotLightMap.length,
      numRectAreaLights: S.rectArea.length,
      numHemiLights: S.hemi.length,
      numDirLightShadows: S.directionalShadowMap.length,
      numPointLightShadows: S.pointShadowMap.length,
      numSpotLightShadows: S.spotShadowMap.length,
      numSpotLightShadowsWithMaps: S.numSpotLightShadowsWithMaps,
      numLightProbes: S.numLightProbes,
      numLightProbeGrids: Z.length,
      numClippingPlanes: r.numPlanes,
      numClipIntersection: r.numIntersection,
      dithering: _.dithering,
      shadowMapEnabled: i.shadowMap.enabled && C.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: nt,
      decodeVideoTexture:
        se &&
        _.map.isVideoTexture === !0 &&
        ee.getTransfer(_.map.colorSpace) === re,
      decodeVideoTextureEmissive:
        Rt &&
        _.emissiveMap.isVideoTexture === !0 &&
        ee.getTransfer(_.emissiveMap.colorSpace) === re,
      premultipliedAlpha: _.premultipliedAlpha,
      doubleSided: _.side === wn,
      flipSided: _.side === Ve,
      useDepthPacking: _.depthPacking >= 0,
      depthPacking: _.depthPacking || 0,
      index0AttributeName: _.index0AttributeName,
      extensionClipCullDistance:
        St &&
        _.extensions.clipCullDistance === !0 &&
        e.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw:
        ((St && _.extensions.multiDraw === !0) || Ut) &&
        e.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: e.has(
        "KHR_parallel_shader_compile",
      ),
      customProgramCacheKey: _.customProgramCacheKey(),
    };
    return (
      (Ct.vertexUv1s = c.has(1)),
      (Ct.vertexUv2s = c.has(2)),
      (Ct.vertexUv3s = c.has(3)),
      c.clear(),
      Ct
    );
  }
  function m(_) {
    let S = [];
    if (
      (_.shaderID
        ? S.push(_.shaderID)
        : (S.push(_.customVertexShaderID), S.push(_.customFragmentShaderID)),
      _.defines !== void 0)
    )
      for (let C in _.defines) (S.push(C), S.push(_.defines[C]));
    return (
      _.isRawShaderMaterial === !1 &&
        (p(S, _), b(S, _), S.push(i.outputColorSpace)),
      S.push(_.customProgramCacheKey),
      S.join()
    );
  }
  function p(_, S) {
    (_.push(S.precision),
      _.push(S.outputColorSpace),
      _.push(S.envMapMode),
      _.push(S.envMapCubeUVHeight),
      _.push(S.mapUv),
      _.push(S.alphaMapUv),
      _.push(S.lightMapUv),
      _.push(S.aoMapUv),
      _.push(S.bumpMapUv),
      _.push(S.normalMapUv),
      _.push(S.displacementMapUv),
      _.push(S.emissiveMapUv),
      _.push(S.metalnessMapUv),
      _.push(S.roughnessMapUv),
      _.push(S.anisotropyMapUv),
      _.push(S.clearcoatMapUv),
      _.push(S.clearcoatNormalMapUv),
      _.push(S.clearcoatRoughnessMapUv),
      _.push(S.iridescenceMapUv),
      _.push(S.iridescenceThicknessMapUv),
      _.push(S.sheenColorMapUv),
      _.push(S.sheenRoughnessMapUv),
      _.push(S.specularMapUv),
      _.push(S.specularColorMapUv),
      _.push(S.specularIntensityMapUv),
      _.push(S.transmissionMapUv),
      _.push(S.thicknessMapUv),
      _.push(S.combine),
      _.push(S.fogExp2),
      _.push(S.sizeAttenuation),
      _.push(S.morphTargetsCount),
      _.push(S.morphAttributeCount),
      _.push(S.numDirLights),
      _.push(S.numPointLights),
      _.push(S.numSpotLights),
      _.push(S.numSpotLightMaps),
      _.push(S.numHemiLights),
      _.push(S.numRectAreaLights),
      _.push(S.numDirLightShadows),
      _.push(S.numPointLightShadows),
      _.push(S.numSpotLightShadows),
      _.push(S.numSpotLightShadowsWithMaps),
      _.push(S.numLightProbes),
      _.push(S.shadowMapType),
      _.push(S.toneMapping),
      _.push(S.numClippingPlanes),
      _.push(S.numClipIntersection),
      _.push(S.depthPacking));
  }
  function b(_, S) {
    (a.disableAll(),
      S.instancing && a.enable(0),
      S.instancingColor && a.enable(1),
      S.instancingMorph && a.enable(2),
      S.matcap && a.enable(3),
      S.envMap && a.enable(4),
      S.normalMapObjectSpace && a.enable(5),
      S.normalMapTangentSpace && a.enable(6),
      S.clearcoat && a.enable(7),
      S.iridescence && a.enable(8),
      S.alphaTest && a.enable(9),
      S.vertexColors && a.enable(10),
      S.vertexAlphas && a.enable(11),
      S.vertexUv1s && a.enable(12),
      S.vertexUv2s && a.enable(13),
      S.vertexUv3s && a.enable(14),
      S.vertexTangents && a.enable(15),
      S.anisotropy && a.enable(16),
      S.alphaHash && a.enable(17),
      S.batching && a.enable(18),
      S.dispersion && a.enable(19),
      S.batchingColor && a.enable(20),
      S.gradientMap && a.enable(21),
      S.packedNormalMap && a.enable(22),
      S.vertexNormals && a.enable(23),
      _.push(a.mask),
      a.disableAll(),
      S.fog && a.enable(0),
      S.useFog && a.enable(1),
      S.flatShading && a.enable(2),
      S.logarithmicDepthBuffer && a.enable(3),
      S.reversedDepthBuffer && a.enable(4),
      S.skinning && a.enable(5),
      S.morphTargets && a.enable(6),
      S.morphNormals && a.enable(7),
      S.morphColors && a.enable(8),
      S.premultipliedAlpha && a.enable(9),
      S.shadowMapEnabled && a.enable(10),
      S.doubleSided && a.enable(11),
      S.flipSided && a.enable(12),
      S.useDepthPacking && a.enable(13),
      S.dithering && a.enable(14),
      S.transmission && a.enable(15),
      S.sheen && a.enable(16),
      S.opaque && a.enable(17),
      S.pointsUvs && a.enable(18),
      S.decodeVideoTexture && a.enable(19),
      S.decodeVideoTextureEmissive && a.enable(20),
      S.alphaToCoverage && a.enable(21),
      S.numLightProbeGrids > 0 && a.enable(22),
      S.hasPositionAttribute && a.enable(23),
      _.push(a.mask));
  }
  function w(_) {
    let S = f[_.type],
      C;
    if (S) {
      let I = Cn[S];
      C = bu.clone(I.uniforms);
    } else C = _.uniforms;
    return C;
  }
  function v(_, S) {
    let C = h.get(S);
    return (
      C !== void 0
        ? ++C.usedTimes
        : ((C = new X0(i, S, _, s)), l.push(C), h.set(S, C)),
      C
    );
  }
  function A(_) {
    if (--_.usedTimes === 0) {
      let S = l.indexOf(_);
      ((l[S] = l[l.length - 1]), l.pop(), h.delete(_.cacheKey), _.destroy());
    }
  }
  function T(_) {
    o.remove(_);
  }
  function R() {
    o.dispose();
  }
  return {
    getParameters: y,
    getProgramCacheKey: m,
    getUniforms: w,
    acquireProgram: v,
    releaseProgram: A,
    releaseShaderCache: T,
    programs: l,
    dispose: R,
  };
}
function J0() {
  let i = new WeakMap();
  function t(a) {
    return i.has(a);
  }
  function e(a) {
    let o = i.get(a);
    return (o === void 0 && ((o = {}), i.set(a, o)), o);
  }
  function n(a) {
    i.delete(a);
  }
  function s(a, o, c) {
    i.get(a)[o] = c;
  }
  function r() {
    i = new WeakMap();
  }
  return { has: t, get: e, remove: n, update: s, dispose: r };
}
function $0(i, t) {
  return i.groupOrder !== t.groupOrder
    ? i.groupOrder - t.groupOrder
    : i.renderOrder !== t.renderOrder
      ? i.renderOrder - t.renderOrder
      : i.material.id !== t.material.id
        ? i.material.id - t.material.id
        : i.materialVariant !== t.materialVariant
          ? i.materialVariant - t.materialVariant
          : i.z !== t.z
            ? i.z - t.z
            : i.id - t.id;
}
function Hu(i, t) {
  return i.groupOrder !== t.groupOrder
    ? i.groupOrder - t.groupOrder
    : i.renderOrder !== t.renderOrder
      ? i.renderOrder - t.renderOrder
      : i.z !== t.z
        ? t.z - i.z
        : i.id - t.id;
}
function Wu() {
  let i = [],
    t = 0,
    e = [],
    n = [],
    s = [];
  function r() {
    ((t = 0), (e.length = 0), (n.length = 0), (s.length = 0));
  }
  function a(u) {
    let f = 0;
    return (u.isInstancedMesh && (f += 2), u.isSkinnedMesh && (f += 1), f);
  }
  function o(u, f, g, y, m, p) {
    let b = i[t];
    return (
      b === void 0
        ? ((b = {
            id: u.id,
            object: u,
            geometry: f,
            material: g,
            materialVariant: a(u),
            groupOrder: y,
            renderOrder: u.renderOrder,
            z: m,
            group: p,
          }),
          (i[t] = b))
        : ((b.id = u.id),
          (b.object = u),
          (b.geometry = f),
          (b.material = g),
          (b.materialVariant = a(u)),
          (b.groupOrder = y),
          (b.renderOrder = u.renderOrder),
          (b.z = m),
          (b.group = p)),
      t++,
      b
    );
  }
  function c(u, f, g, y, m, p) {
    let b = o(u, f, g, y, m, p);
    g.transmission > 0
      ? n.push(b)
      : g.transparent === !0
        ? s.push(b)
        : e.push(b);
  }
  function l(u, f, g, y, m, p) {
    let b = o(u, f, g, y, m, p);
    g.transmission > 0
      ? n.unshift(b)
      : g.transparent === !0
        ? s.unshift(b)
        : e.unshift(b);
  }
  function h(u, f, g) {
    (e.length > 1 && e.sort(u || $0),
      n.length > 1 && n.sort(f || Hu),
      s.length > 1 && s.sort(f || Hu),
      g && (e.reverse(), n.reverse(), s.reverse()));
  }
  function d() {
    for (let u = t, f = i.length; u < f; u++) {
      let g = i[u];
      if (g.id === null) break;
      ((g.id = null),
        (g.object = null),
        (g.geometry = null),
        (g.material = null),
        (g.group = null));
    }
  }
  return {
    opaque: e,
    transmissive: n,
    transparent: s,
    init: r,
    push: c,
    unshift: l,
    finish: d,
    sort: h,
  };
}
function K0() {
  let i = new WeakMap();
  function t(n, s) {
    let r = i.get(n),
      a;
    return (
      r === void 0
        ? ((a = new Wu()), i.set(n, [a]))
        : s >= r.length
          ? ((a = new Wu()), r.push(a))
          : (a = r[s]),
      a
    );
  }
  function e() {
    i = new WeakMap();
  }
  return { get: t, dispose: e };
}
function Q0() {
  let i = {};
  return {
    get: function (t) {
      if (i[t.id] !== void 0) return i[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = { direction: new L(), color: new Jt() };
          break;
        case "SpotLight":
          e = {
            position: new L(),
            direction: new L(),
            color: new Jt(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          e = { position: new L(), color: new Jt(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          e = { direction: new L(), skyColor: new Jt(), groundColor: new Jt() };
          break;
        case "RectAreaLight":
          e = {
            color: new Jt(),
            position: new L(),
            halfWidth: new L(),
            halfHeight: new L(),
          };
          break;
      }
      return ((i[t.id] = e), e);
    },
  };
}
function j0() {
  let i = {};
  return {
    get: function (t) {
      if (i[t.id] !== void 0) return i[t.id];
      let e;
      switch (t.type) {
        case "DirectionalLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ut(),
          };
          break;
        case "SpotLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ut(),
          };
          break;
        case "PointLight":
          e = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ut(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return ((i[t.id] = e), e);
    },
  };
}
var t_ = 0;
function e_(i, t) {
  return (
    (t.castShadow ? 2 : 0) -
    (i.castShadow ? 2 : 0) +
    (t.map ? 1 : 0) -
    (i.map ? 1 : 0)
  );
}
function n_(i) {
  let t = new Q0(),
    e = j0(),
    n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let l = 0; l < 9; l++) n.probe.push(new L());
  let s = new L(),
    r = new he(),
    a = new he();
  function o(l) {
    let h = 0,
      d = 0,
      u = 0;
    for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
    let f = 0,
      g = 0,
      y = 0,
      m = 0,
      p = 0,
      b = 0,
      w = 0,
      v = 0,
      A = 0,
      T = 0,
      R = 0;
    l.sort(e_);
    for (let S = 0, C = l.length; S < C; S++) {
      let I = l[S],
        U = I.color,
        Z = I.intensity,
        k = I.distance,
        F = null;
      if (
        (I.shadow &&
          I.shadow.map &&
          (I.shadow.map.texture.format === li
            ? (F = I.shadow.map.texture)
            : (F = I.shadow.map.depthTexture || I.shadow.map.texture)),
        I.isAmbientLight)
      )
        ((h += U.r * Z), (d += U.g * Z), (u += U.b * Z));
      else if (I.isLightProbe) {
        for (let X = 0; X < 9; X++)
          n.probe[X].addScaledVector(I.sh.coefficients[X], Z);
        R++;
      } else if (I.isDirectionalLight) {
        let X = t.get(I);
        if ((X.color.copy(I.color).multiplyScalar(I.intensity), I.castShadow)) {
          let V = I.shadow,
            D = e.get(I);
          ((D.shadowIntensity = V.intensity),
            (D.shadowBias = V.bias),
            (D.shadowNormalBias = V.normalBias),
            (D.shadowRadius = V.radius),
            (D.shadowMapSize = V.mapSize),
            (n.directionalShadow[f] = D),
            (n.directionalShadowMap[f] = F),
            (n.directionalShadowMatrix[f] = I.shadow.matrix),
            b++);
        }
        ((n.directional[f] = X), f++);
      } else if (I.isSpotLight) {
        let X = t.get(I);
        (X.position.setFromMatrixPosition(I.matrixWorld),
          X.color.copy(U).multiplyScalar(Z),
          (X.distance = k),
          (X.coneCos = Math.cos(I.angle)),
          (X.penumbraCos = Math.cos(I.angle * (1 - I.penumbra))),
          (X.decay = I.decay),
          (n.spot[y] = X));
        let V = I.shadow;
        if (
          (I.map &&
            ((n.spotLightMap[A] = I.map),
            A++,
            V.updateMatrices(I),
            I.castShadow && T++),
          (n.spotLightMatrix[y] = V.matrix),
          I.castShadow)
        ) {
          let D = e.get(I);
          ((D.shadowIntensity = V.intensity),
            (D.shadowBias = V.bias),
            (D.shadowNormalBias = V.normalBias),
            (D.shadowRadius = V.radius),
            (D.shadowMapSize = V.mapSize),
            (n.spotShadow[y] = D),
            (n.spotShadowMap[y] = F),
            v++);
        }
        y++;
      } else if (I.isRectAreaLight) {
        let X = t.get(I);
        (X.color.copy(U).multiplyScalar(Z),
          X.halfWidth.set(I.width * 0.5, 0, 0),
          X.halfHeight.set(0, I.height * 0.5, 0),
          (n.rectArea[m] = X),
          m++);
      } else if (I.isPointLight) {
        let X = t.get(I);
        if (
          (X.color.copy(I.color).multiplyScalar(I.intensity),
          (X.distance = I.distance),
          (X.decay = I.decay),
          I.castShadow)
        ) {
          let V = I.shadow,
            D = e.get(I);
          ((D.shadowIntensity = V.intensity),
            (D.shadowBias = V.bias),
            (D.shadowNormalBias = V.normalBias),
            (D.shadowRadius = V.radius),
            (D.shadowMapSize = V.mapSize),
            (D.shadowCameraNear = V.camera.near),
            (D.shadowCameraFar = V.camera.far),
            (n.pointShadow[g] = D),
            (n.pointShadowMap[g] = F),
            (n.pointShadowMatrix[g] = I.shadow.matrix),
            w++);
        }
        ((n.point[g] = X), g++);
      } else if (I.isHemisphereLight) {
        let X = t.get(I);
        (X.skyColor.copy(I.color).multiplyScalar(Z),
          X.groundColor.copy(I.groundColor).multiplyScalar(Z),
          (n.hemi[p] = X),
          p++);
      }
    }
    (m > 0 &&
      (i.has("OES_texture_float_linear") === !0
        ? ((n.rectAreaLTC1 = xt.LTC_FLOAT_1), (n.rectAreaLTC2 = xt.LTC_FLOAT_2))
        : ((n.rectAreaLTC1 = xt.LTC_HALF_1), (n.rectAreaLTC2 = xt.LTC_HALF_2))),
      (n.ambient[0] = h),
      (n.ambient[1] = d),
      (n.ambient[2] = u));
    let _ = n.hash;
    (_.directionalLength !== f ||
      _.pointLength !== g ||
      _.spotLength !== y ||
      _.rectAreaLength !== m ||
      _.hemiLength !== p ||
      _.numDirectionalShadows !== b ||
      _.numPointShadows !== w ||
      _.numSpotShadows !== v ||
      _.numSpotMaps !== A ||
      _.numLightProbes !== R) &&
      ((n.directional.length = f),
      (n.spot.length = y),
      (n.rectArea.length = m),
      (n.point.length = g),
      (n.hemi.length = p),
      (n.directionalShadow.length = b),
      (n.directionalShadowMap.length = b),
      (n.pointShadow.length = w),
      (n.pointShadowMap.length = w),
      (n.spotShadow.length = v),
      (n.spotShadowMap.length = v),
      (n.directionalShadowMatrix.length = b),
      (n.pointShadowMatrix.length = w),
      (n.spotLightMatrix.length = v + A - T),
      (n.spotLightMap.length = A),
      (n.numSpotLightShadowsWithMaps = T),
      (n.numLightProbes = R),
      (_.directionalLength = f),
      (_.pointLength = g),
      (_.spotLength = y),
      (_.rectAreaLength = m),
      (_.hemiLength = p),
      (_.numDirectionalShadows = b),
      (_.numPointShadows = w),
      (_.numSpotShadows = v),
      (_.numSpotMaps = A),
      (_.numLightProbes = R),
      (n.version = t_++));
  }
  function c(l, h) {
    let d = 0,
      u = 0,
      f = 0,
      g = 0,
      y = 0,
      m = h.matrixWorldInverse;
    for (let p = 0, b = l.length; p < b; p++) {
      let w = l[p];
      if (w.isDirectionalLight) {
        let v = n.directional[d];
        (v.direction.setFromMatrixPosition(w.matrixWorld),
          s.setFromMatrixPosition(w.target.matrixWorld),
          v.direction.sub(s),
          v.direction.transformDirection(m),
          d++);
      } else if (w.isSpotLight) {
        let v = n.spot[f];
        (v.position.setFromMatrixPosition(w.matrixWorld),
          v.position.applyMatrix4(m),
          v.direction.setFromMatrixPosition(w.matrixWorld),
          s.setFromMatrixPosition(w.target.matrixWorld),
          v.direction.sub(s),
          v.direction.transformDirection(m),
          f++);
      } else if (w.isRectAreaLight) {
        let v = n.rectArea[g];
        (v.position.setFromMatrixPosition(w.matrixWorld),
          v.position.applyMatrix4(m),
          a.identity(),
          r.copy(w.matrixWorld),
          r.premultiply(m),
          a.extractRotation(r),
          v.halfWidth.set(w.width * 0.5, 0, 0),
          v.halfHeight.set(0, w.height * 0.5, 0),
          v.halfWidth.applyMatrix4(a),
          v.halfHeight.applyMatrix4(a),
          g++);
      } else if (w.isPointLight) {
        let v = n.point[u];
        (v.position.setFromMatrixPosition(w.matrixWorld),
          v.position.applyMatrix4(m),
          u++);
      } else if (w.isHemisphereLight) {
        let v = n.hemi[y];
        (v.direction.setFromMatrixPosition(w.matrixWorld),
          v.direction.transformDirection(m),
          y++);
      }
    }
  }
  return { setup: o, setupView: c, state: n };
}
function Xu(i) {
  let t = new n_(i),
    e = [],
    n = [],
    s = [];
  function r(u) {
    ((d.camera = u), (e.length = 0), (n.length = 0), (s.length = 0));
  }
  function a(u) {
    e.push(u);
  }
  function o(u) {
    n.push(u);
  }
  function c(u) {
    s.push(u);
  }
  function l() {
    t.setup(e);
  }
  function h(u) {
    t.setupView(e, u);
  }
  let d = {
    lightsArray: e,
    shadowsArray: n,
    lightProbeGridArray: s,
    camera: null,
    lights: t,
    transmissionRenderTarget: {},
    textureUnits: 0,
  };
  return {
    init: r,
    state: d,
    setupLights: l,
    setupLightsView: h,
    pushLight: a,
    pushShadow: o,
    pushLightProbeGrid: c,
  };
}
function i_(i) {
  let t = new WeakMap();
  function e(s, r = 0) {
    let a = t.get(s),
      o;
    return (
      a === void 0
        ? ((o = new Xu(i)), t.set(s, [o]))
        : r >= a.length
          ? ((o = new Xu(i)), a.push(o))
          : (o = a[r]),
      o
    );
  }
  function n() {
    t = new WeakMap();
  }
  return { get: e, dispose: n };
}
var s_ = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  r_ = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,
  a_ = [
    new L(1, 0, 0),
    new L(-1, 0, 0),
    new L(0, 1, 0),
    new L(0, -1, 0),
    new L(0, 0, 1),
    new L(0, 0, -1),
  ],
  o_ = [
    new L(0, -1, 0),
    new L(0, -1, 0),
    new L(0, 0, 1),
    new L(0, 0, -1),
    new L(0, -1, 0),
    new L(0, -1, 0),
  ],
  qu = new he(),
  Qs = new L(),
  bc = new L();
function l_(i, t, e) {
  let n = new $i(),
    s = new ut(),
    r = new ut(),
    a = new _e(),
    o = new fa(),
    c = new pa(),
    l = {},
    h = e.maxTextureSize,
    d = { [Fn]: Ve, [Ve]: Fn, [wn]: wn },
    u = new Je({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new ut() },
        radius: { value: 4 },
      },
      vertexShader: s_,
      fragmentShader: r_,
    }),
    f = u.clone();
  f.defines.HORIZONTAL_PASS = 1;
  let g = new me();
  g.setAttribute(
    "position",
    new Be(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3),
  );
  let y = new fe(g, u),
    m = this;
  ((this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Gs));
  let p = this.type;
  this.render = function (T, R, _) {
    if (
      m.enabled === !1 ||
      (m.autoUpdate === !1 && m.needsUpdate === !1) ||
      T.length === 0
    )
      return;
    this.type === Bh &&
      (Nt(
        "WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.",
      ),
      (this.type = Gs));
    let S = i.getRenderTarget(),
      C = i.getActiveCubeFace(),
      I = i.getActiveMipmapLevel(),
      U = i.state;
    (U.setBlending(En),
      U.buffers.depth.getReversed() === !0
        ? U.buffers.color.setClear(0, 0, 0, 0)
        : U.buffers.color.setClear(1, 1, 1, 1),
      U.buffers.depth.setTest(!0),
      U.setScissorTest(!1));
    let Z = p !== this.type;
    Z &&
      R.traverse(function (k) {
        k.material &&
          (Array.isArray(k.material)
            ? k.material.forEach((F) => (F.needsUpdate = !0))
            : (k.material.needsUpdate = !0));
      });
    for (let k = 0, F = T.length; k < F; k++) {
      let X = T[k],
        V = X.shadow;
      if (V === void 0) {
        Nt("WebGLShadowMap:", X, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === !1 && V.needsUpdate === !1) continue;
      s.copy(V.mapSize);
      let D = V.getFrameExtents();
      (s.multiply(D),
        r.copy(V.mapSize),
        (s.x > h || s.y > h) &&
          (s.x > h &&
            ((r.x = Math.floor(h / D.x)),
            (s.x = r.x * D.x),
            (V.mapSize.x = r.x)),
          s.y > h &&
            ((r.y = Math.floor(h / D.y)),
            (s.y = r.y * D.y),
            (V.mapSize.y = r.y))));
      let B = i.state.buffers.depth.getReversed();
      if (((V.camera._reversedDepth = B), V.map === null || Z === !0)) {
        if (
          (V.map !== null &&
            (V.map.depthTexture !== null &&
              (V.map.depthTexture.dispose(), (V.map.depthTexture = null)),
            V.map.dispose()),
          this.type === ns)
        ) {
          if (X.isPointLight) {
            Nt(
              "WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.",
            );
            continue;
          }
          ((V.map = new Ye(s.x, s.y, {
            format: li,
            type: Tn,
            minFilter: we,
            magFilter: we,
            generateMipmaps: !1,
          })),
            (V.map.texture.name = X.name + ".shadowMap"),
            (V.map.depthTexture = new zn(s.x, s.y, cn)),
            (V.map.depthTexture.name = X.name + ".shadowMapDepth"),
            (V.map.depthTexture.format = yn),
            (V.map.depthTexture.compareFunction = null),
            (V.map.depthTexture.minFilter = Re),
            (V.map.depthTexture.magFilter = Re));
        } else
          (X.isPointLight
            ? ((V.map = new So(s.x)), (V.map.depthTexture = new sa(s.x, ln)))
            : ((V.map = new Ye(s.x, s.y)),
              (V.map.depthTexture = new zn(s.x, s.y, ln))),
            (V.map.depthTexture.name = X.name + ".shadowMap"),
            (V.map.depthTexture.format = yn),
            this.type === Gs
              ? ((V.map.depthTexture.compareFunction = B ? xo : _o),
                (V.map.depthTexture.minFilter = we),
                (V.map.depthTexture.magFilter = we))
              : ((V.map.depthTexture.compareFunction = null),
                (V.map.depthTexture.minFilter = Re),
                (V.map.depthTexture.magFilter = Re)));
        V.camera.updateProjectionMatrix();
      }
      let q = V.map.isWebGLCubeRenderTarget ? 6 : 1;
      for (let K = 0; K < q; K++) {
        if (V.map.isWebGLCubeRenderTarget)
          (i.setRenderTarget(V.map, K), i.clear());
        else {
          K === 0 && (i.setRenderTarget(V.map), i.clear());
          let it = V.getViewport(K);
          (a.set(r.x * it.x, r.y * it.y, r.x * it.z, r.y * it.w),
            U.viewport(a));
        }
        if (X.isPointLight) {
          let it = V.camera,
            lt = V.matrix,
            Vt = X.distance || it.far;
          (Vt !== it.far && ((it.far = Vt), it.updateProjectionMatrix()),
            Qs.setFromMatrixPosition(X.matrixWorld),
            it.position.copy(Qs),
            bc.copy(it.position),
            bc.add(a_[K]),
            it.up.copy(o_[K]),
            it.lookAt(bc),
            it.updateMatrixWorld(),
            lt.makeTranslation(-Qs.x, -Qs.y, -Qs.z),
            qu.multiplyMatrices(it.projectionMatrix, it.matrixWorldInverse),
            V._frustum.setFromProjectionMatrix(
              qu,
              it.coordinateSystem,
              it.reversedDepth,
            ));
        } else V.updateMatrices(X);
        ((n = V.getFrustum()), v(R, _, V.camera, X, this.type));
      }
      (V.isPointLightShadow !== !0 && this.type === ns && b(V, _),
        (V.needsUpdate = !1));
    }
    ((p = this.type), (m.needsUpdate = !1), i.setRenderTarget(S, C, I));
  };
  function b(T, R) {
    let _ = t.update(y);
    (u.defines.VSM_SAMPLES !== T.blurSamples &&
      ((u.defines.VSM_SAMPLES = T.blurSamples),
      (f.defines.VSM_SAMPLES = T.blurSamples),
      (u.needsUpdate = !0),
      (f.needsUpdate = !0)),
      T.mapPass === null &&
        (T.mapPass = new Ye(s.x, s.y, { format: li, type: Tn })),
      (u.uniforms.shadow_pass.value = T.map.depthTexture),
      (u.uniforms.resolution.value = T.mapSize),
      (u.uniforms.radius.value = T.radius),
      i.setRenderTarget(T.mapPass),
      i.clear(),
      i.renderBufferDirect(R, null, _, u, y, null),
      (f.uniforms.shadow_pass.value = T.mapPass.texture),
      (f.uniforms.resolution.value = T.mapSize),
      (f.uniforms.radius.value = T.radius),
      i.setRenderTarget(T.map),
      i.clear(),
      i.renderBufferDirect(R, null, _, f, y, null));
  }
  function w(T, R, _, S) {
    let C = null,
      I =
        _.isPointLight === !0
          ? T.customDistanceMaterial
          : T.customDepthMaterial;
    if (I !== void 0) C = I;
    else if (
      ((C = _.isPointLight === !0 ? c : o),
      (i.localClippingEnabled &&
        R.clipShadows === !0 &&
        Array.isArray(R.clippingPlanes) &&
        R.clippingPlanes.length !== 0) ||
        (R.displacementMap && R.displacementScale !== 0) ||
        (R.alphaMap && R.alphaTest > 0) ||
        (R.map && R.alphaTest > 0) ||
        R.alphaToCoverage === !0)
    ) {
      let U = C.uuid,
        Z = R.uuid,
        k = l[U];
      k === void 0 && ((k = {}), (l[U] = k));
      let F = k[Z];
      (F === void 0 &&
        ((F = C.clone()), (k[Z] = F), R.addEventListener("dispose", A)),
        (C = F));
    }
    if (
      ((C.visible = R.visible),
      (C.wireframe = R.wireframe),
      S === ns
        ? (C.side = R.shadowSide !== null ? R.shadowSide : R.side)
        : (C.side = R.shadowSide !== null ? R.shadowSide : d[R.side]),
      (C.alphaMap = R.alphaMap),
      (C.alphaTest = R.alphaToCoverage === !0 ? 0.5 : R.alphaTest),
      (C.map = R.map),
      (C.clipShadows = R.clipShadows),
      (C.clippingPlanes = R.clippingPlanes),
      (C.clipIntersection = R.clipIntersection),
      (C.displacementMap = R.displacementMap),
      (C.displacementScale = R.displacementScale),
      (C.displacementBias = R.displacementBias),
      (C.wireframeLinewidth = R.wireframeLinewidth),
      (C.linewidth = R.linewidth),
      _.isPointLight === !0 && C.isMeshDistanceMaterial === !0)
    ) {
      let U = i.properties.get(C);
      U.light = _;
    }
    return C;
  }
  function v(T, R, _, S, C) {
    if (T.visible === !1) return;
    if (
      T.layers.test(R.layers) &&
      (T.isMesh || T.isLine || T.isPoints) &&
      (T.castShadow || (T.receiveShadow && C === ns)) &&
      (!T.frustumCulled || n.intersectsObject(T))
    ) {
      T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse, T.matrixWorld);
      let Z = t.update(T),
        k = T.material;
      if (Array.isArray(k)) {
        let F = Z.groups;
        for (let X = 0, V = F.length; X < V; X++) {
          let D = F[X],
            B = k[D.materialIndex];
          if (B && B.visible) {
            let q = w(T, B, S, C);
            (T.onBeforeShadow(i, T, R, _, Z, q, D),
              i.renderBufferDirect(_, null, Z, q, T, D),
              T.onAfterShadow(i, T, R, _, Z, q, D));
          }
        }
      } else if (k.visible) {
        let F = w(T, k, S, C);
        (T.onBeforeShadow(i, T, R, _, Z, F, null),
          i.renderBufferDirect(_, null, Z, F, T, null),
          T.onAfterShadow(i, T, R, _, Z, F, null));
      }
    }
    let U = T.children;
    for (let Z = 0, k = U.length; Z < k; Z++) v(U[Z], R, _, S, C);
  }
  function A(T) {
    T.target.removeEventListener("dispose", A);
    for (let _ in l) {
      let S = l[_],
        C = T.target.uuid;
      C in S && (S[C].dispose(), delete S[C]);
    }
  }
}
function c_(i, t) {
  function e() {
    let N = !1,
      dt = new _e(),
      j = null,
      mt = new _e(0, 0, 0, 0);
    return {
      setMask: function (St) {
        j !== St && !N && (i.colorMask(St, St, St, St), (j = St));
      },
      setLocked: function (St) {
        N = St;
      },
      setClear: function (St, nt, Ct, Et, ye) {
        (ye === !0 && ((St *= Et), (nt *= Et), (Ct *= Et)),
          dt.set(St, nt, Ct, Et),
          mt.equals(dt) === !1 && (i.clearColor(St, nt, Ct, Et), mt.copy(dt)));
      },
      reset: function () {
        ((N = !1), (j = null), mt.set(-1, 0, 0, 0));
      },
    };
  }
  function n() {
    let N = !1,
      dt = !1,
      j = null,
      mt = null,
      St = null;
    return {
      setReversed: function (nt) {
        if (dt !== nt) {
          let Ct = t.get("EXT_clip_control");
          (nt
            ? Ct.clipControlEXT(Ct.LOWER_LEFT_EXT, Ct.ZERO_TO_ONE_EXT)
            : Ct.clipControlEXT(Ct.LOWER_LEFT_EXT, Ct.NEGATIVE_ONE_TO_ONE_EXT),
            (dt = nt));
          let Et = St;
          ((St = null), this.setClear(Et));
        }
      },
      getReversed: function () {
        return dt;
      },
      setTest: function (nt) {
        nt ? at(i.DEPTH_TEST) : At(i.DEPTH_TEST);
      },
      setMask: function (nt) {
        j !== nt && !N && (i.depthMask(nt), (j = nt));
      },
      setFunc: function (nt) {
        if ((dt && (nt = _u[nt]), mt !== nt)) {
          switch (nt) {
            case Vr:
              i.depthFunc(i.NEVER);
              break;
            case Gr:
              i.depthFunc(i.ALWAYS);
              break;
            case Hr:
              i.depthFunc(i.LESS);
              break;
            case yi:
              i.depthFunc(i.LEQUAL);
              break;
            case Wr:
              i.depthFunc(i.EQUAL);
              break;
            case Xr:
              i.depthFunc(i.GEQUAL);
              break;
            case qr:
              i.depthFunc(i.GREATER);
              break;
            case Yr:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          mt = nt;
        }
      },
      setLocked: function (nt) {
        N = nt;
      },
      setClear: function (nt) {
        St !== nt && ((St = nt), dt && (nt = 1 - nt), i.clearDepth(nt));
      },
      reset: function () {
        ((N = !1), (j = null), (mt = null), (St = null), (dt = !1));
      },
    };
  }
  function s() {
    let N = !1,
      dt = null,
      j = null,
      mt = null,
      St = null,
      nt = null,
      Ct = null,
      Et = null,
      ye = null;
    return {
      setTest: function (ue) {
        N || (ue ? at(i.STENCIL_TEST) : At(i.STENCIL_TEST));
      },
      setMask: function (ue) {
        dt !== ue && !N && (i.stencilMask(ue), (dt = ue));
      },
      setFunc: function (ue, un, dn) {
        (j !== ue || mt !== un || St !== dn) &&
          (i.stencilFunc(ue, un, dn), (j = ue), (mt = un), (St = dn));
      },
      setOp: function (ue, un, dn) {
        (nt !== ue || Ct !== un || Et !== dn) &&
          (i.stencilOp(ue, un, dn), (nt = ue), (Ct = un), (Et = dn));
      },
      setLocked: function (ue) {
        N = ue;
      },
      setClear: function (ue) {
        ye !== ue && (i.clearStencil(ue), (ye = ue));
      },
      reset: function () {
        ((N = !1),
          (dt = null),
          (j = null),
          (mt = null),
          (St = null),
          (nt = null),
          (Ct = null),
          (Et = null),
          (ye = null));
      },
    };
  }
  let r = new e(),
    a = new n(),
    o = new s(),
    c = new WeakMap(),
    l = new WeakMap(),
    h = {},
    d = {},
    u = {},
    f = new WeakMap(),
    g = [],
    y = null,
    m = !1,
    p = null,
    b = null,
    w = null,
    v = null,
    A = null,
    T = null,
    R = null,
    _ = new Jt(0, 0, 0),
    S = 0,
    C = !1,
    I = null,
    U = null,
    Z = null,
    k = null,
    F = null,
    X = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
    V = !1,
    D = 0,
    B = i.getParameter(i.VERSION);
  B.indexOf("WebGL") !== -1
    ? ((D = parseFloat(/^WebGL (\d)/.exec(B)[1])), (V = D >= 1))
    : B.indexOf("OpenGL ES") !== -1 &&
      ((D = parseFloat(/^OpenGL ES (\d)/.exec(B)[1])), (V = D >= 2));
  let q = null,
    K = {},
    it = i.getParameter(i.SCISSOR_BOX),
    lt = i.getParameter(i.VIEWPORT),
    Vt = new _e().fromArray(it),
    Kt = new _e().fromArray(lt);
  function Q(N, dt, j, mt) {
    let St = new Uint8Array(4),
      nt = i.createTexture();
    (i.bindTexture(N, nt),
      i.texParameteri(N, i.TEXTURE_MIN_FILTER, i.NEAREST),
      i.texParameteri(N, i.TEXTURE_MAG_FILTER, i.NEAREST));
    for (let Ct = 0; Ct < j; Ct++)
      N === i.TEXTURE_3D || N === i.TEXTURE_2D_ARRAY
        ? i.texImage3D(dt, 0, i.RGBA, 1, 1, mt, 0, i.RGBA, i.UNSIGNED_BYTE, St)
        : i.texImage2D(
            dt + Ct,
            0,
            i.RGBA,
            1,
            1,
            0,
            i.RGBA,
            i.UNSIGNED_BYTE,
            St,
          );
    return nt;
  }
  let ct = {};
  ((ct[i.TEXTURE_2D] = Q(i.TEXTURE_2D, i.TEXTURE_2D, 1)),
    (ct[i.TEXTURE_CUBE_MAP] = Q(
      i.TEXTURE_CUBE_MAP,
      i.TEXTURE_CUBE_MAP_POSITIVE_X,
      6,
    )),
    (ct[i.TEXTURE_2D_ARRAY] = Q(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1)),
    (ct[i.TEXTURE_3D] = Q(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)),
    r.setClear(0, 0, 0, 1),
    a.setClear(1),
    o.setClear(0),
    at(i.DEPTH_TEST),
    a.setFunc(yi),
    yt(!1),
    gt(Vl),
    at(i.CULL_FACE),
    rt(En));
  function at(N) {
    h[N] !== !0 && (i.enable(N), (h[N] = !0));
  }
  function At(N) {
    h[N] !== !1 && (i.disable(N), (h[N] = !1));
  }
  function zt(N, dt) {
    return u[N] !== dt
      ? (i.bindFramebuffer(N, dt),
        (u[N] = dt),
        N === i.DRAW_FRAMEBUFFER && (u[i.FRAMEBUFFER] = dt),
        N === i.FRAMEBUFFER && (u[i.DRAW_FRAMEBUFFER] = dt),
        !0)
      : !1;
  }
  function Ut(N, dt) {
    let j = g,
      mt = !1;
    if (N) {
      ((j = f.get(dt)), j === void 0 && ((j = []), f.set(dt, j)));
      let St = N.textures;
      if (j.length !== St.length || j[0] !== i.COLOR_ATTACHMENT0) {
        for (let nt = 0, Ct = St.length; nt < Ct; nt++)
          j[nt] = i.COLOR_ATTACHMENT0 + nt;
        ((j.length = St.length), (mt = !0));
      }
    } else j[0] !== i.BACK && ((j[0] = i.BACK), (mt = !0));
    mt && i.drawBuffers(j);
  }
  function se(N) {
    return y !== N ? (i.useProgram(N), (y = N), !0) : !1;
  }
  let Gt = {
    [Qn]: i.FUNC_ADD,
    [kh]: i.FUNC_SUBTRACT,
    [Vh]: i.FUNC_REVERSE_SUBTRACT,
  };
  ((Gt[Gh] = i.MIN), (Gt[Hh] = i.MAX));
  let et = {
    [Wh]: i.ZERO,
    [Xh]: i.ONE,
    [qh]: i.SRC_COLOR,
    [zr]: i.SRC_ALPHA,
    [Qh]: i.SRC_ALPHA_SATURATE,
    [$h]: i.DST_COLOR,
    [Zh]: i.DST_ALPHA,
    [Yh]: i.ONE_MINUS_SRC_COLOR,
    [kr]: i.ONE_MINUS_SRC_ALPHA,
    [Kh]: i.ONE_MINUS_DST_COLOR,
    [Jh]: i.ONE_MINUS_DST_ALPHA,
    [jh]: i.CONSTANT_COLOR,
    [tu]: i.ONE_MINUS_CONSTANT_COLOR,
    [eu]: i.CONSTANT_ALPHA,
    [nu]: i.ONE_MINUS_CONSTANT_ALPHA,
  };
  function rt(N, dt, j, mt, St, nt, Ct, Et, ye, ue) {
    if (N === En) {
      m === !0 && (At(i.BLEND), (m = !1));
      return;
    }
    if ((m === !1 && (at(i.BLEND), (m = !0)), N !== zh)) {
      if (N !== p || ue !== C) {
        if (
          ((b !== Qn || A !== Qn) &&
            (i.blendEquation(i.FUNC_ADD), (b = Qn), (A = Qn)),
          ue)
        )
          switch (N) {
            case xi:
              i.blendFuncSeparate(
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case bi:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case Gl:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Hl:
              i.blendFuncSeparate(
                i.DST_COLOR,
                i.ONE_MINUS_SRC_ALPHA,
                i.ZERO,
                i.ONE,
              );
              break;
            default:
              Ot("WebGLState: Invalid blending: ", N);
              break;
          }
        else
          switch (N) {
            case xi:
              i.blendFuncSeparate(
                i.SRC_ALPHA,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case bi:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
              break;
            case Gl:
              Ot(
                "WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true",
              );
              break;
            case Hl:
              Ot(
                "WebGLState: MultiplyBlending requires material.premultipliedAlpha = true",
              );
              break;
            default:
              Ot("WebGLState: Invalid blending: ", N);
              break;
          }
        ((w = null),
          (v = null),
          (T = null),
          (R = null),
          _.set(0, 0, 0),
          (S = 0),
          (p = N),
          (C = ue));
      }
      return;
    }
    ((St = St || dt),
      (nt = nt || j),
      (Ct = Ct || mt),
      (dt !== b || St !== A) &&
        (i.blendEquationSeparate(Gt[dt], Gt[St]), (b = dt), (A = St)),
      (j !== w || mt !== v || nt !== T || Ct !== R) &&
        (i.blendFuncSeparate(et[j], et[mt], et[nt], et[Ct]),
        (w = j),
        (v = mt),
        (T = nt),
        (R = Ct)),
      (Et.equals(_) === !1 || ye !== S) &&
        (i.blendColor(Et.r, Et.g, Et.b, ye), _.copy(Et), (S = ye)),
      (p = N),
      (C = !1));
  }
  function st(N, dt) {
    N.side === wn ? At(i.CULL_FACE) : at(i.CULL_FACE);
    let j = N.side === Ve;
    (dt && (j = !j),
      yt(j),
      N.blending === xi && N.transparent === !1
        ? rt(En)
        : rt(
            N.blending,
            N.blendEquation,
            N.blendSrc,
            N.blendDst,
            N.blendEquationAlpha,
            N.blendSrcAlpha,
            N.blendDstAlpha,
            N.blendColor,
            N.blendAlpha,
            N.premultipliedAlpha,
          ),
      a.setFunc(N.depthFunc),
      a.setTest(N.depthTest),
      a.setMask(N.depthWrite),
      r.setMask(N.colorWrite));
    let mt = N.stencilWrite;
    (o.setTest(mt),
      mt &&
        (o.setMask(N.stencilWriteMask),
        o.setFunc(N.stencilFunc, N.stencilRef, N.stencilFuncMask),
        o.setOp(N.stencilFail, N.stencilZFail, N.stencilZPass)),
      Rt(N.polygonOffset, N.polygonOffsetFactor, N.polygonOffsetUnits),
      N.alphaToCoverage === !0
        ? at(i.SAMPLE_ALPHA_TO_COVERAGE)
        : At(i.SAMPLE_ALPHA_TO_COVERAGE));
  }
  function yt(N) {
    I !== N && (N ? i.frontFace(i.CW) : i.frontFace(i.CCW), (I = N));
  }
  function gt(N) {
    (N !== Fh
      ? (at(i.CULL_FACE),
        N !== U &&
          (N === Vl
            ? i.cullFace(i.BACK)
            : N === Oh
              ? i.cullFace(i.FRONT)
              : i.cullFace(i.FRONT_AND_BACK)))
      : At(i.CULL_FACE),
      (U = N));
  }
  function Ft(N) {
    N !== Z && (V && i.lineWidth(N), (Z = N));
  }
  function Rt(N, dt, j) {
    N
      ? (at(i.POLYGON_OFFSET_FILL),
        (k !== dt || F !== j) &&
          ((k = dt),
          (F = j),
          a.getReversed() && (dt = -dt),
          i.polygonOffset(dt, j)))
      : At(i.POLYGON_OFFSET_FILL);
  }
  function kt(N) {
    N ? at(i.SCISSOR_TEST) : At(i.SCISSOR_TEST);
  }
  function Xt(N) {
    (N === void 0 && (N = i.TEXTURE0 + X - 1),
      q !== N && (i.activeTexture(N), (q = N)));
  }
  function P(N, dt, j) {
    j === void 0 && (q === null ? (j = i.TEXTURE0 + X - 1) : (j = q));
    let mt = K[j];
    (mt === void 0 && ((mt = { type: void 0, texture: void 0 }), (K[j] = mt)),
      (mt.type !== N || mt.texture !== dt) &&
        (q !== j && (i.activeTexture(j), (q = j)),
        i.bindTexture(N, dt || ct[N]),
        (mt.type = N),
        (mt.texture = dt)));
  }
  function ae() {
    let N = K[q];
    N !== void 0 &&
      N.type !== void 0 &&
      (i.bindTexture(N.type, null), (N.type = void 0), (N.texture = void 0));
  }
  function jt() {
    try {
      i.compressedTexImage2D(...arguments);
    } catch (N) {
      Ot("WebGLState:", N);
    }
  }
  function E() {
    try {
      i.compressedTexImage3D(...arguments);
    } catch (N) {
      Ot("WebGLState:", N);
    }
  }
  function x() {
    try {
      i.texSubImage2D(...arguments);
    } catch (N) {
      Ot("WebGLState:", N);
    }
  }
  function z() {
    try {
      i.texSubImage3D(...arguments);
    } catch (N) {
      Ot("WebGLState:", N);
    }
  }
  function W() {
    try {
      i.compressedTexSubImage2D(...arguments);
    } catch (N) {
      Ot("WebGLState:", N);
    }
  }
  function J() {
    try {
      i.compressedTexSubImage3D(...arguments);
    } catch (N) {
      Ot("WebGLState:", N);
    }
  }
  function ot() {
    try {
      i.texStorage2D(...arguments);
    } catch (N) {
      Ot("WebGLState:", N);
    }
  }
  function ht() {
    try {
      i.texStorage3D(...arguments);
    } catch (N) {
      Ot("WebGLState:", N);
    }
  }
  function $() {
    try {
      i.texImage2D(...arguments);
    } catch (N) {
      Ot("WebGLState:", N);
    }
  }
  function tt() {
    try {
      i.texImage3D(...arguments);
    } catch (N) {
      Ot("WebGLState:", N);
    }
  }
  function ft(N) {
    return d[N] !== void 0 ? d[N] : i.getParameter(N);
  }
  function It(N, dt) {
    d[N] !== dt && (i.pixelStorei(N, dt), (d[N] = dt));
  }
  function _t(N) {
    Vt.equals(N) === !1 && (i.scissor(N.x, N.y, N.z, N.w), Vt.copy(N));
  }
  function pt(N) {
    Kt.equals(N) === !1 && (i.viewport(N.x, N.y, N.z, N.w), Kt.copy(N));
  }
  function Dt(N, dt) {
    let j = l.get(dt);
    j === void 0 && ((j = new WeakMap()), l.set(dt, j));
    let mt = j.get(N);
    mt === void 0 && ((mt = i.getUniformBlockIndex(dt, N.name)), j.set(N, mt));
  }
  function Bt(N, dt) {
    let mt = l.get(dt).get(N);
    c.get(dt) !== mt &&
      (i.uniformBlockBinding(dt, mt, N.__bindingPointIndex), c.set(dt, mt));
  }
  function qt() {
    (i.disable(i.BLEND),
      i.disable(i.CULL_FACE),
      i.disable(i.DEPTH_TEST),
      i.disable(i.POLYGON_OFFSET_FILL),
      i.disable(i.SCISSOR_TEST),
      i.disable(i.STENCIL_TEST),
      i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
      i.blendEquation(i.FUNC_ADD),
      i.blendFunc(i.ONE, i.ZERO),
      i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
      i.blendColor(0, 0, 0, 0),
      i.colorMask(!0, !0, !0, !0),
      i.clearColor(0, 0, 0, 0),
      i.depthMask(!0),
      i.depthFunc(i.LESS),
      a.setReversed(!1),
      i.clearDepth(1),
      i.stencilMask(4294967295),
      i.stencilFunc(i.ALWAYS, 0, 4294967295),
      i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
      i.clearStencil(0),
      i.cullFace(i.BACK),
      i.frontFace(i.CCW),
      i.polygonOffset(0, 0),
      i.activeTexture(i.TEXTURE0),
      i.bindFramebuffer(i.FRAMEBUFFER, null),
      i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
      i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
      i.useProgram(null),
      i.lineWidth(1),
      i.scissor(0, 0, i.canvas.width, i.canvas.height),
      i.viewport(0, 0, i.canvas.width, i.canvas.height),
      i.pixelStorei(i.PACK_ALIGNMENT, 4),
      i.pixelStorei(i.UNPACK_ALIGNMENT, 4),
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, !1),
      i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1),
      i.pixelStorei(
        i.UNPACK_COLORSPACE_CONVERSION_WEBGL,
        i.BROWSER_DEFAULT_WEBGL,
      ),
      i.pixelStorei(i.PACK_ROW_LENGTH, 0),
      i.pixelStorei(i.PACK_SKIP_PIXELS, 0),
      i.pixelStorei(i.PACK_SKIP_ROWS, 0),
      i.pixelStorei(i.UNPACK_ROW_LENGTH, 0),
      i.pixelStorei(i.UNPACK_IMAGE_HEIGHT, 0),
      i.pixelStorei(i.UNPACK_SKIP_PIXELS, 0),
      i.pixelStorei(i.UNPACK_SKIP_ROWS, 0),
      i.pixelStorei(i.UNPACK_SKIP_IMAGES, 0),
      (h = {}),
      (d = {}),
      (q = null),
      (K = {}),
      (u = {}),
      (f = new WeakMap()),
      (g = []),
      (y = null),
      (m = !1),
      (p = null),
      (b = null),
      (w = null),
      (v = null),
      (A = null),
      (T = null),
      (R = null),
      (_ = new Jt(0, 0, 0)),
      (S = 0),
      (C = !1),
      (I = null),
      (U = null),
      (Z = null),
      (k = null),
      (F = null),
      Vt.set(0, 0, i.canvas.width, i.canvas.height),
      Kt.set(0, 0, i.canvas.width, i.canvas.height),
      r.reset(),
      a.reset(),
      o.reset());
  }
  return {
    buffers: { color: r, depth: a, stencil: o },
    enable: at,
    disable: At,
    bindFramebuffer: zt,
    drawBuffers: Ut,
    useProgram: se,
    setBlending: rt,
    setMaterial: st,
    setFlipSided: yt,
    setCullFace: gt,
    setLineWidth: Ft,
    setPolygonOffset: Rt,
    setScissorTest: kt,
    activeTexture: Xt,
    bindTexture: P,
    unbindTexture: ae,
    compressedTexImage2D: jt,
    compressedTexImage3D: E,
    texImage2D: $,
    texImage3D: tt,
    pixelStorei: It,
    getParameter: ft,
    updateUBOMapping: Dt,
    uniformBlockBinding: Bt,
    texStorage2D: ot,
    texStorage3D: ht,
    texSubImage2D: x,
    texSubImage3D: z,
    compressedTexSubImage2D: W,
    compressedTexSubImage3D: J,
    scissor: _t,
    viewport: pt,
    reset: qt,
  };
}
function h_(i, t, e, n, s, r, a) {
  let o = t.has("WEBGL_multisampled_render_to_texture")
      ? t.get("WEBGL_multisampled_render_to_texture")
      : null,
    c =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    l = new ut(),
    h = new WeakMap(),
    d = new Set(),
    u,
    f = new WeakMap(),
    g = !1;
  try {
    g =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function y(E, x) {
    return g ? new OffscreenCanvas(E, x) : Xi("canvas");
  }
  function m(E, x, z) {
    let W = 1,
      J = jt(E);
    if (
      ((J.width > z || J.height > z) && (W = z / Math.max(J.width, J.height)),
      W < 1)
    )
      if (
        (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && E instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && E instanceof VideoFrame)
      ) {
        let ot = Math.floor(W * J.width),
          ht = Math.floor(W * J.height);
        u === void 0 && (u = y(ot, ht));
        let $ = x ? y(ot, ht) : u;
        return (
          ($.width = ot),
          ($.height = ht),
          $.getContext("2d").drawImage(E, 0, 0, ot, ht),
          Nt(
            "WebGLRenderer: Texture has been resized from (" +
              J.width +
              "x" +
              J.height +
              ") to (" +
              ot +
              "x" +
              ht +
              ").",
          ),
          $
        );
      } else
        return (
          "data" in E &&
            Nt(
              "WebGLRenderer: Image in DataTexture is too big (" +
                J.width +
                "x" +
                J.height +
                ").",
            ),
          E
        );
    return E;
  }
  function p(E) {
    return E.generateMipmaps;
  }
  function b(E) {
    i.generateMipmap(E);
  }
  function w(E) {
    return E.isWebGLCubeRenderTarget
      ? i.TEXTURE_CUBE_MAP
      : E.isWebGL3DRenderTarget
        ? i.TEXTURE_3D
        : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture
          ? i.TEXTURE_2D_ARRAY
          : i.TEXTURE_2D;
  }
  function v(E, x, z, W, J, ot = !1) {
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      Nt(
        "WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          E +
          "'",
      );
    }
    let ht;
    W &&
      ((ht = t.get("EXT_texture_norm16")),
      ht ||
        Nt(
          "WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension",
        ));
    let $ = x;
    if (
      (x === i.RED &&
        (z === i.FLOAT && ($ = i.R32F),
        z === i.HALF_FLOAT && ($ = i.R16F),
        z === i.UNSIGNED_BYTE && ($ = i.R8),
        z === i.UNSIGNED_SHORT && ht && ($ = ht.R16_EXT),
        z === i.SHORT && ht && ($ = ht.R16_SNORM_EXT)),
      x === i.RED_INTEGER &&
        (z === i.UNSIGNED_BYTE && ($ = i.R8UI),
        z === i.UNSIGNED_SHORT && ($ = i.R16UI),
        z === i.UNSIGNED_INT && ($ = i.R32UI),
        z === i.BYTE && ($ = i.R8I),
        z === i.SHORT && ($ = i.R16I),
        z === i.INT && ($ = i.R32I)),
      x === i.RG &&
        (z === i.FLOAT && ($ = i.RG32F),
        z === i.HALF_FLOAT && ($ = i.RG16F),
        z === i.UNSIGNED_BYTE && ($ = i.RG8),
        z === i.UNSIGNED_SHORT && ht && ($ = ht.RG16_EXT),
        z === i.SHORT && ht && ($ = ht.RG16_SNORM_EXT)),
      x === i.RG_INTEGER &&
        (z === i.UNSIGNED_BYTE && ($ = i.RG8UI),
        z === i.UNSIGNED_SHORT && ($ = i.RG16UI),
        z === i.UNSIGNED_INT && ($ = i.RG32UI),
        z === i.BYTE && ($ = i.RG8I),
        z === i.SHORT && ($ = i.RG16I),
        z === i.INT && ($ = i.RG32I)),
      x === i.RGB_INTEGER &&
        (z === i.UNSIGNED_BYTE && ($ = i.RGB8UI),
        z === i.UNSIGNED_SHORT && ($ = i.RGB16UI),
        z === i.UNSIGNED_INT && ($ = i.RGB32UI),
        z === i.BYTE && ($ = i.RGB8I),
        z === i.SHORT && ($ = i.RGB16I),
        z === i.INT && ($ = i.RGB32I)),
      x === i.RGBA_INTEGER &&
        (z === i.UNSIGNED_BYTE && ($ = i.RGBA8UI),
        z === i.UNSIGNED_SHORT && ($ = i.RGBA16UI),
        z === i.UNSIGNED_INT && ($ = i.RGBA32UI),
        z === i.BYTE && ($ = i.RGBA8I),
        z === i.SHORT && ($ = i.RGBA16I),
        z === i.INT && ($ = i.RGBA32I)),
      x === i.RGB &&
        (z === i.UNSIGNED_SHORT && ht && ($ = ht.RGB16_EXT),
        z === i.SHORT && ht && ($ = ht.RGB16_SNORM_EXT),
        z === i.UNSIGNED_INT_5_9_9_9_REV && ($ = i.RGB9_E5),
        z === i.UNSIGNED_INT_10F_11F_11F_REV && ($ = i.R11F_G11F_B10F)),
      x === i.RGBA)
    ) {
      let tt = ot ? vs : ee.getTransfer(J);
      (z === i.FLOAT && ($ = i.RGBA32F),
        z === i.HALF_FLOAT && ($ = i.RGBA16F),
        z === i.UNSIGNED_BYTE && ($ = tt === re ? i.SRGB8_ALPHA8 : i.RGBA8),
        z === i.UNSIGNED_SHORT && ht && ($ = ht.RGBA16_EXT),
        z === i.SHORT && ht && ($ = ht.RGBA16_SNORM_EXT),
        z === i.UNSIGNED_SHORT_4_4_4_4 && ($ = i.RGBA4),
        z === i.UNSIGNED_SHORT_5_5_5_1 && ($ = i.RGB5_A1));
    }
    return (
      ($ === i.R16F ||
        $ === i.R32F ||
        $ === i.RG16F ||
        $ === i.RG32F ||
        $ === i.RGBA16F ||
        $ === i.RGBA32F) &&
        t.get("EXT_color_buffer_float"),
      $
    );
  }
  function A(E, x) {
    let z;
    return (
      E
        ? x === null || x === ln || x === ss
          ? (z = i.DEPTH24_STENCIL8)
          : x === cn
            ? (z = i.DEPTH32F_STENCIL8)
            : x === is &&
              ((z = i.DEPTH24_STENCIL8),
              Nt(
                "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.",
              ))
        : x === null || x === ln || x === ss
          ? (z = i.DEPTH_COMPONENT24)
          : x === cn
            ? (z = i.DEPTH_COMPONENT32F)
            : x === is && (z = i.DEPTH_COMPONENT16),
      z
    );
  }
  function T(E, x) {
    return p(E) === !0 ||
      (E.isFramebufferTexture && E.minFilter !== Re && E.minFilter !== we)
      ? Math.log2(Math.max(x.width, x.height)) + 1
      : E.mipmaps !== void 0 && E.mipmaps.length > 0
        ? E.mipmaps.length
        : E.isCompressedTexture && Array.isArray(E.image)
          ? x.mipmaps.length
          : 1;
  }
  function R(E) {
    let x = E.target;
    (x.removeEventListener("dispose", R),
      S(x),
      x.isVideoTexture && h.delete(x),
      x.isHTMLTexture && d.delete(x));
  }
  function _(E) {
    let x = E.target;
    (x.removeEventListener("dispose", _), I(x));
  }
  function S(E) {
    let x = n.get(E);
    if (x.__webglInit === void 0) return;
    let z = E.source,
      W = f.get(z);
    if (W) {
      let J = W[x.__cacheKey];
      (J.usedTimes--,
        J.usedTimes === 0 && C(E),
        Object.keys(W).length === 0 && f.delete(z));
    }
    n.remove(E);
  }
  function C(E) {
    let x = n.get(E);
    i.deleteTexture(x.__webglTexture);
    let z = E.source,
      W = f.get(z);
    (delete W[x.__cacheKey], a.memory.textures--);
  }
  function I(E) {
    let x = n.get(E);
    if (
      (E.depthTexture && (E.depthTexture.dispose(), n.remove(E.depthTexture)),
      E.isWebGLCubeRenderTarget)
    )
      for (let W = 0; W < 6; W++) {
        if (Array.isArray(x.__webglFramebuffer[W]))
          for (let J = 0; J < x.__webglFramebuffer[W].length; J++)
            i.deleteFramebuffer(x.__webglFramebuffer[W][J]);
        else i.deleteFramebuffer(x.__webglFramebuffer[W]);
        x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer[W]);
      }
    else {
      if (Array.isArray(x.__webglFramebuffer))
        for (let W = 0; W < x.__webglFramebuffer.length; W++)
          i.deleteFramebuffer(x.__webglFramebuffer[W]);
      else i.deleteFramebuffer(x.__webglFramebuffer);
      if (
        (x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer),
        x.__webglMultisampledFramebuffer &&
          i.deleteFramebuffer(x.__webglMultisampledFramebuffer),
        x.__webglColorRenderbuffer)
      )
        for (let W = 0; W < x.__webglColorRenderbuffer.length; W++)
          x.__webglColorRenderbuffer[W] &&
            i.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);
      x.__webglDepthRenderbuffer &&
        i.deleteRenderbuffer(x.__webglDepthRenderbuffer);
    }
    let z = E.textures;
    for (let W = 0, J = z.length; W < J; W++) {
      let ot = n.get(z[W]);
      (ot.__webglTexture &&
        (i.deleteTexture(ot.__webglTexture), a.memory.textures--),
        n.remove(z[W]));
    }
    n.remove(E);
  }
  let U = 0;
  function Z() {
    U = 0;
  }
  function k() {
    return U;
  }
  function F(E) {
    U = E;
  }
  function X() {
    let E = U;
    return (
      E >= s.maxTextures &&
        Nt(
          "WebGLTextures: Trying to use " +
            E +
            " texture units while this GPU supports only " +
            s.maxTextures,
        ),
      (U += 1),
      E
    );
  }
  function V(E) {
    let x = [];
    return (
      x.push(E.wrapS),
      x.push(E.wrapT),
      x.push(E.wrapR || 0),
      x.push(E.magFilter),
      x.push(E.minFilter),
      x.push(E.anisotropy),
      x.push(E.internalFormat),
      x.push(E.format),
      x.push(E.type),
      x.push(E.generateMipmaps),
      x.push(E.premultiplyAlpha),
      x.push(E.flipY),
      x.push(E.unpackAlignment),
      x.push(E.colorSpace),
      x.join()
    );
  }
  function D(E, x) {
    let z = n.get(E);
    if (
      (E.isVideoTexture && P(E),
      E.isRenderTargetTexture === !1 &&
        E.isExternalTexture !== !0 &&
        E.version > 0 &&
        z.__version !== E.version)
    ) {
      let W = E.image;
      if (W === null)
        Nt("WebGLRenderer: Texture marked for update but no image data found.");
      else if (W.complete === !1)
        Nt("WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        At(z, E, x);
        return;
      }
    } else
      E.isExternalTexture &&
        (z.__webglTexture = E.sourceTexture ? E.sourceTexture : null);
    e.bindTexture(i.TEXTURE_2D, z.__webglTexture, i.TEXTURE0 + x);
  }
  function B(E, x) {
    let z = n.get(E);
    if (
      E.isRenderTargetTexture === !1 &&
      E.version > 0 &&
      z.__version !== E.version
    ) {
      At(z, E, x);
      return;
    } else
      E.isExternalTexture &&
        (z.__webglTexture = E.sourceTexture ? E.sourceTexture : null);
    e.bindTexture(i.TEXTURE_2D_ARRAY, z.__webglTexture, i.TEXTURE0 + x);
  }
  function q(E, x) {
    let z = n.get(E);
    if (
      E.isRenderTargetTexture === !1 &&
      E.version > 0 &&
      z.__version !== E.version
    ) {
      At(z, E, x);
      return;
    }
    e.bindTexture(i.TEXTURE_3D, z.__webglTexture, i.TEXTURE0 + x);
  }
  function K(E, x) {
    let z = n.get(E);
    if (
      E.isCubeDepthTexture !== !0 &&
      E.version > 0 &&
      z.__version !== E.version
    ) {
      zt(z, E, x);
      return;
    }
    e.bindTexture(i.TEXTURE_CUBE_MAP, z.__webglTexture, i.TEXTURE0 + x);
  }
  let it = { [Zr]: i.REPEAT, [gn]: i.CLAMP_TO_EDGE, [Jr]: i.MIRRORED_REPEAT },
    lt = {
      [Re]: i.NEAREST,
      [ru]: i.NEAREST_MIPMAP_NEAREST,
      [Ws]: i.NEAREST_MIPMAP_LINEAR,
      [we]: i.LINEAR,
      [La]: i.LINEAR_MIPMAP_NEAREST,
      [ai]: i.LINEAR_MIPMAP_LINEAR,
    },
    Vt = {
      [lu]: i.NEVER,
      [fu]: i.ALWAYS,
      [cu]: i.LESS,
      [_o]: i.LEQUAL,
      [hu]: i.EQUAL,
      [xo]: i.GEQUAL,
      [uu]: i.GREATER,
      [du]: i.NOTEQUAL,
    };
  function Kt(E, x) {
    if (
      (x.type === cn &&
        t.has("OES_texture_float_linear") === !1 &&
        (x.magFilter === we ||
          x.magFilter === La ||
          x.magFilter === Ws ||
          x.magFilter === ai ||
          x.minFilter === we ||
          x.minFilter === La ||
          x.minFilter === Ws ||
          x.minFilter === ai) &&
        Nt(
          "WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.",
        ),
      i.texParameteri(E, i.TEXTURE_WRAP_S, it[x.wrapS]),
      i.texParameteri(E, i.TEXTURE_WRAP_T, it[x.wrapT]),
      (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) &&
        i.texParameteri(E, i.TEXTURE_WRAP_R, it[x.wrapR]),
      i.texParameteri(E, i.TEXTURE_MAG_FILTER, lt[x.magFilter]),
      i.texParameteri(E, i.TEXTURE_MIN_FILTER, lt[x.minFilter]),
      x.compareFunction &&
        (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, Vt[x.compareFunction])),
      t.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        x.magFilter === Re ||
        (x.minFilter !== Ws && x.minFilter !== ai) ||
        (x.type === cn && t.has("OES_texture_float_linear") === !1)
      )
        return;
      if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) {
        let z = t.get("EXT_texture_filter_anisotropic");
        (i.texParameterf(
          E,
          z.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(x.anisotropy, s.getMaxAnisotropy()),
        ),
          (n.get(x).__currentAnisotropy = x.anisotropy));
      }
    }
  }
  function Q(E, x) {
    let z = !1;
    E.__webglInit === void 0 &&
      ((E.__webglInit = !0), x.addEventListener("dispose", R));
    let W = x.source,
      J = f.get(W);
    J === void 0 && ((J = {}), f.set(W, J));
    let ot = V(x);
    if (ot !== E.__cacheKey) {
      (J[ot] === void 0 &&
        ((J[ot] = { texture: i.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (z = !0)),
        J[ot].usedTimes++);
      let ht = J[E.__cacheKey];
      (ht !== void 0 &&
        (J[E.__cacheKey].usedTimes--, ht.usedTimes === 0 && C(x)),
        (E.__cacheKey = ot),
        (E.__webglTexture = J[ot].texture));
    }
    return z;
  }
  function ct(E, x, z) {
    return Math.floor(Math.floor(E / z) / x);
  }
  function at(E, x, z, W) {
    let ot = E.updateRanges;
    if (ot.length === 0)
      e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, x.width, x.height, z, W, x.data);
    else {
      ot.sort((It, _t) => It.start - _t.start);
      let ht = 0;
      for (let It = 1; It < ot.length; It++) {
        let _t = ot[ht],
          pt = ot[It],
          Dt = _t.start + _t.count,
          Bt = ct(pt.start, x.width, 4),
          qt = ct(_t.start, x.width, 4);
        pt.start <= Dt + 1 &&
        Bt === qt &&
        ct(pt.start + pt.count - 1, x.width, 4) === Bt
          ? (_t.count = Math.max(_t.count, pt.start + pt.count - _t.start))
          : (++ht, (ot[ht] = pt));
      }
      ot.length = ht + 1;
      let $ = e.getParameter(i.UNPACK_ROW_LENGTH),
        tt = e.getParameter(i.UNPACK_SKIP_PIXELS),
        ft = e.getParameter(i.UNPACK_SKIP_ROWS);
      e.pixelStorei(i.UNPACK_ROW_LENGTH, x.width);
      for (let It = 0, _t = ot.length; It < _t; It++) {
        let pt = ot[It],
          Dt = Math.floor(pt.start / 4),
          Bt = Math.ceil(pt.count / 4),
          qt = Dt % x.width,
          N = Math.floor(Dt / x.width),
          dt = Bt,
          j = 1;
        (e.pixelStorei(i.UNPACK_SKIP_PIXELS, qt),
          e.pixelStorei(i.UNPACK_SKIP_ROWS, N),
          e.texSubImage2D(i.TEXTURE_2D, 0, qt, N, dt, j, z, W, x.data));
      }
      (E.clearUpdateRanges(),
        e.pixelStorei(i.UNPACK_ROW_LENGTH, $),
        e.pixelStorei(i.UNPACK_SKIP_PIXELS, tt),
        e.pixelStorei(i.UNPACK_SKIP_ROWS, ft));
    }
  }
  function At(E, x, z) {
    let W = i.TEXTURE_2D;
    ((x.isDataArrayTexture || x.isCompressedArrayTexture) &&
      (W = i.TEXTURE_2D_ARRAY),
      x.isData3DTexture && (W = i.TEXTURE_3D));
    let J = Q(E, x),
      ot = x.source;
    e.bindTexture(W, E.__webglTexture, i.TEXTURE0 + z);
    let ht = n.get(ot);
    if (ot.version !== ht.__version || J === !0) {
      if (
        (e.activeTexture(i.TEXTURE0 + z),
        (typeof ImageBitmap < "u" && x.image instanceof ImageBitmap) === !1)
      ) {
        let j = ee.getPrimaries(ee.workingColorSpace),
          mt = x.colorSpace === kn ? null : ee.getPrimaries(x.colorSpace),
          St =
            x.colorSpace === kn || j === mt ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
        (e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY),
          e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha),
          e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, St));
      }
      e.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment);
      let tt = m(x.image, !1, s.maxTextureSize);
      tt = ae(x, tt);
      let ft = r.convert(x.format, x.colorSpace),
        It = r.convert(x.type),
        _t = v(
          x.internalFormat,
          ft,
          It,
          x.normalized,
          x.colorSpace,
          x.isVideoTexture,
        );
      Kt(W, x);
      let pt,
        Dt = x.mipmaps,
        Bt = x.isVideoTexture !== !0,
        qt = ht.__version === void 0 || J === !0,
        N = ot.dataReady,
        dt = T(x, tt);
      if (x.isDepthTexture)
        ((_t = A(x.format === oi, x.type)),
          qt &&
            (Bt
              ? e.texStorage2D(i.TEXTURE_2D, 1, _t, tt.width, tt.height)
              : e.texImage2D(
                  i.TEXTURE_2D,
                  0,
                  _t,
                  tt.width,
                  tt.height,
                  0,
                  ft,
                  It,
                  null,
                )));
      else if (x.isDataTexture)
        if (Dt.length > 0) {
          Bt &&
            qt &&
            e.texStorage2D(i.TEXTURE_2D, dt, _t, Dt[0].width, Dt[0].height);
          for (let j = 0, mt = Dt.length; j < mt; j++)
            ((pt = Dt[j]),
              Bt
                ? N &&
                  e.texSubImage2D(
                    i.TEXTURE_2D,
                    j,
                    0,
                    0,
                    pt.width,
                    pt.height,
                    ft,
                    It,
                    pt.data,
                  )
                : e.texImage2D(
                    i.TEXTURE_2D,
                    j,
                    _t,
                    pt.width,
                    pt.height,
                    0,
                    ft,
                    It,
                    pt.data,
                  ));
          x.generateMipmaps = !1;
        } else
          Bt
            ? (qt && e.texStorage2D(i.TEXTURE_2D, dt, _t, tt.width, tt.height),
              N && at(x, tt, ft, It))
            : e.texImage2D(
                i.TEXTURE_2D,
                0,
                _t,
                tt.width,
                tt.height,
                0,
                ft,
                It,
                tt.data,
              );
      else if (x.isCompressedTexture)
        if (x.isCompressedArrayTexture) {
          Bt &&
            qt &&
            e.texStorage3D(
              i.TEXTURE_2D_ARRAY,
              dt,
              _t,
              Dt[0].width,
              Dt[0].height,
              tt.depth,
            );
          for (let j = 0, mt = Dt.length; j < mt; j++)
            if (((pt = Dt[j]), x.format !== tn))
              if (ft !== null)
                if (Bt) {
                  if (N)
                    if (x.layerUpdates.size > 0) {
                      let St = dc(pt.width, pt.height, x.format, x.type);
                      for (let nt of x.layerUpdates) {
                        let Ct = pt.data.subarray(
                          (nt * St) / pt.data.BYTES_PER_ELEMENT,
                          ((nt + 1) * St) / pt.data.BYTES_PER_ELEMENT,
                        );
                        e.compressedTexSubImage3D(
                          i.TEXTURE_2D_ARRAY,
                          j,
                          0,
                          0,
                          nt,
                          pt.width,
                          pt.height,
                          1,
                          ft,
                          Ct,
                        );
                      }
                      x.clearLayerUpdates();
                    } else
                      e.compressedTexSubImage3D(
                        i.TEXTURE_2D_ARRAY,
                        j,
                        0,
                        0,
                        0,
                        pt.width,
                        pt.height,
                        tt.depth,
                        ft,
                        pt.data,
                      );
                } else
                  e.compressedTexImage3D(
                    i.TEXTURE_2D_ARRAY,
                    j,
                    _t,
                    pt.width,
                    pt.height,
                    tt.depth,
                    0,
                    pt.data,
                    0,
                    0,
                  );
              else
                Nt(
                  "WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                );
            else
              Bt
                ? N &&
                  e.texSubImage3D(
                    i.TEXTURE_2D_ARRAY,
                    j,
                    0,
                    0,
                    0,
                    pt.width,
                    pt.height,
                    tt.depth,
                    ft,
                    It,
                    pt.data,
                  )
                : e.texImage3D(
                    i.TEXTURE_2D_ARRAY,
                    j,
                    _t,
                    pt.width,
                    pt.height,
                    tt.depth,
                    0,
                    ft,
                    It,
                    pt.data,
                  );
        } else {
          Bt &&
            qt &&
            e.texStorage2D(i.TEXTURE_2D, dt, _t, Dt[0].width, Dt[0].height);
          for (let j = 0, mt = Dt.length; j < mt; j++)
            ((pt = Dt[j]),
              x.format !== tn
                ? ft !== null
                  ? Bt
                    ? N &&
                      e.compressedTexSubImage2D(
                        i.TEXTURE_2D,
                        j,
                        0,
                        0,
                        pt.width,
                        pt.height,
                        ft,
                        pt.data,
                      )
                    : e.compressedTexImage2D(
                        i.TEXTURE_2D,
                        j,
                        _t,
                        pt.width,
                        pt.height,
                        0,
                        pt.data,
                      )
                  : Nt(
                      "WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                    )
                : Bt
                  ? N &&
                    e.texSubImage2D(
                      i.TEXTURE_2D,
                      j,
                      0,
                      0,
                      pt.width,
                      pt.height,
                      ft,
                      It,
                      pt.data,
                    )
                  : e.texImage2D(
                      i.TEXTURE_2D,
                      j,
                      _t,
                      pt.width,
                      pt.height,
                      0,
                      ft,
                      It,
                      pt.data,
                    ));
        }
      else if (x.isDataArrayTexture)
        if (Bt) {
          if (
            (qt &&
              e.texStorage3D(
                i.TEXTURE_2D_ARRAY,
                dt,
                _t,
                tt.width,
                tt.height,
                tt.depth,
              ),
            N)
          )
            if (x.layerUpdates.size > 0) {
              let j = dc(tt.width, tt.height, x.format, x.type);
              for (let mt of x.layerUpdates) {
                let St = tt.data.subarray(
                  (mt * j) / tt.data.BYTES_PER_ELEMENT,
                  ((mt + 1) * j) / tt.data.BYTES_PER_ELEMENT,
                );
                e.texSubImage3D(
                  i.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  mt,
                  tt.width,
                  tt.height,
                  1,
                  ft,
                  It,
                  St,
                );
              }
              x.clearLayerUpdates();
            } else
              e.texSubImage3D(
                i.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                tt.width,
                tt.height,
                tt.depth,
                ft,
                It,
                tt.data,
              );
        } else
          e.texImage3D(
            i.TEXTURE_2D_ARRAY,
            0,
            _t,
            tt.width,
            tt.height,
            tt.depth,
            0,
            ft,
            It,
            tt.data,
          );
      else if (x.isData3DTexture)
        Bt
          ? (qt &&
              e.texStorage3D(
                i.TEXTURE_3D,
                dt,
                _t,
                tt.width,
                tt.height,
                tt.depth,
              ),
            N &&
              e.texSubImage3D(
                i.TEXTURE_3D,
                0,
                0,
                0,
                0,
                tt.width,
                tt.height,
                tt.depth,
                ft,
                It,
                tt.data,
              ))
          : e.texImage3D(
              i.TEXTURE_3D,
              0,
              _t,
              tt.width,
              tt.height,
              tt.depth,
              0,
              ft,
              It,
              tt.data,
            );
      else if (x.isFramebufferTexture) {
        if (qt)
          if (Bt) e.texStorage2D(i.TEXTURE_2D, dt, _t, tt.width, tt.height);
          else {
            let j = tt.width,
              mt = tt.height;
            for (let St = 0; St < dt; St++)
              (e.texImage2D(i.TEXTURE_2D, St, _t, j, mt, 0, ft, It, null),
                (j >>= 1),
                (mt >>= 1));
          }
      } else if (x.isHTMLTexture) {
        if ("texElementImage2D" in i) {
          let j = i.canvas;
          if (
            (j.hasAttribute("layoutsubtree") ||
              j.setAttribute("layoutsubtree", "true"),
            tt.parentNode !== j)
          ) {
            (j.appendChild(tt),
              d.add(x),
              (j.onpaint = (mt) => {
                let St = mt.changedElements;
                for (let nt of d)
                  St.includes(nt.image) && (nt.needsUpdate = !0);
              }),
              j.requestPaint());
            return;
          }
          if (i.texElementImage2D.length === 3)
            i.texElementImage2D(i.TEXTURE_2D, i.RGBA8, tt);
          else {
            let St = i.RGBA,
              nt = i.RGBA,
              Ct = i.UNSIGNED_BYTE;
            i.texElementImage2D(i.TEXTURE_2D, 0, St, nt, Ct, tt);
          }
          (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR),
            i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE),
            i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE));
        }
      } else if (Dt.length > 0) {
        if (Bt && qt) {
          let j = jt(Dt[0]);
          e.texStorage2D(i.TEXTURE_2D, dt, _t, j.width, j.height);
        }
        for (let j = 0, mt = Dt.length; j < mt; j++)
          ((pt = Dt[j]),
            Bt
              ? N && e.texSubImage2D(i.TEXTURE_2D, j, 0, 0, ft, It, pt)
              : e.texImage2D(i.TEXTURE_2D, j, _t, ft, It, pt));
        x.generateMipmaps = !1;
      } else if (Bt) {
        if (qt) {
          let j = jt(tt);
          e.texStorage2D(i.TEXTURE_2D, dt, _t, j.width, j.height);
        }
        N && e.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ft, It, tt);
      } else e.texImage2D(i.TEXTURE_2D, 0, _t, ft, It, tt);
      (p(x) && b(W), (ht.__version = ot.version), x.onUpdate && x.onUpdate(x));
    }
    E.__version = x.version;
  }
  function zt(E, x, z) {
    if (x.image.length !== 6) return;
    let W = Q(E, x),
      J = x.source;
    e.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + z);
    let ot = n.get(J);
    if (J.version !== ot.__version || W === !0) {
      e.activeTexture(i.TEXTURE0 + z);
      let ht = ee.getPrimaries(ee.workingColorSpace),
        $ = x.colorSpace === kn ? null : ee.getPrimaries(x.colorSpace),
        tt = x.colorSpace === kn || ht === $ ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      (e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY),
        e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha),
        e.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment),
        e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, tt));
      let ft = x.isCompressedTexture || x.image[0].isCompressedTexture,
        It = x.image[0] && x.image[0].isDataTexture,
        _t = [];
      for (let nt = 0; nt < 6; nt++)
        (!ft && !It
          ? (_t[nt] = m(x.image[nt], !0, s.maxCubemapSize))
          : (_t[nt] = It ? x.image[nt].image : x.image[nt]),
          (_t[nt] = ae(x, _t[nt])));
      let pt = _t[0],
        Dt = r.convert(x.format, x.colorSpace),
        Bt = r.convert(x.type),
        qt = v(x.internalFormat, Dt, Bt, x.normalized, x.colorSpace),
        N = x.isVideoTexture !== !0,
        dt = ot.__version === void 0 || W === !0,
        j = J.dataReady,
        mt = T(x, pt);
      Kt(i.TEXTURE_CUBE_MAP, x);
      let St;
      if (ft) {
        N &&
          dt &&
          e.texStorage2D(i.TEXTURE_CUBE_MAP, mt, qt, pt.width, pt.height);
        for (let nt = 0; nt < 6; nt++) {
          St = _t[nt].mipmaps;
          for (let Ct = 0; Ct < St.length; Ct++) {
            let Et = St[Ct];
            x.format !== tn
              ? Dt !== null
                ? N
                  ? j &&
                    e.compressedTexSubImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + nt,
                      Ct,
                      0,
                      0,
                      Et.width,
                      Et.height,
                      Dt,
                      Et.data,
                    )
                  : e.compressedTexImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + nt,
                      Ct,
                      qt,
                      Et.width,
                      Et.height,
                      0,
                      Et.data,
                    )
                : Nt(
                    "WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()",
                  )
              : N
                ? j &&
                  e.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + nt,
                    Ct,
                    0,
                    0,
                    Et.width,
                    Et.height,
                    Dt,
                    Bt,
                    Et.data,
                  )
                : e.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + nt,
                    Ct,
                    qt,
                    Et.width,
                    Et.height,
                    0,
                    Dt,
                    Bt,
                    Et.data,
                  );
          }
        }
      } else {
        if (((St = x.mipmaps), N && dt)) {
          St.length > 0 && mt++;
          let nt = jt(_t[0]);
          e.texStorage2D(i.TEXTURE_CUBE_MAP, mt, qt, nt.width, nt.height);
        }
        for (let nt = 0; nt < 6; nt++)
          if (It) {
            N
              ? j &&
                e.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + nt,
                  0,
                  0,
                  0,
                  _t[nt].width,
                  _t[nt].height,
                  Dt,
                  Bt,
                  _t[nt].data,
                )
              : e.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + nt,
                  0,
                  qt,
                  _t[nt].width,
                  _t[nt].height,
                  0,
                  Dt,
                  Bt,
                  _t[nt].data,
                );
            for (let Ct = 0; Ct < St.length; Ct++) {
              let ye = St[Ct].image[nt].image;
              N
                ? j &&
                  e.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + nt,
                    Ct + 1,
                    0,
                    0,
                    ye.width,
                    ye.height,
                    Dt,
                    Bt,
                    ye.data,
                  )
                : e.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + nt,
                    Ct + 1,
                    qt,
                    ye.width,
                    ye.height,
                    0,
                    Dt,
                    Bt,
                    ye.data,
                  );
            }
          } else {
            N
              ? j &&
                e.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + nt,
                  0,
                  0,
                  0,
                  Dt,
                  Bt,
                  _t[nt],
                )
              : e.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + nt,
                  0,
                  qt,
                  Dt,
                  Bt,
                  _t[nt],
                );
            for (let Ct = 0; Ct < St.length; Ct++) {
              let Et = St[Ct];
              N
                ? j &&
                  e.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + nt,
                    Ct + 1,
                    0,
                    0,
                    Dt,
                    Bt,
                    Et.image[nt],
                  )
                : e.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + nt,
                    Ct + 1,
                    qt,
                    Dt,
                    Bt,
                    Et.image[nt],
                  );
            }
          }
      }
      (p(x) && b(i.TEXTURE_CUBE_MAP),
        (ot.__version = J.version),
        x.onUpdate && x.onUpdate(x));
    }
    E.__version = x.version;
  }
  function Ut(E, x, z, W, J, ot) {
    let ht = r.convert(z.format, z.colorSpace),
      $ = r.convert(z.type),
      tt = v(z.internalFormat, ht, $, z.normalized, z.colorSpace),
      ft = n.get(x),
      It = n.get(z);
    if (((It.__renderTarget = x), !ft.__hasExternalTextures)) {
      let _t = Math.max(1, x.width >> ot),
        pt = Math.max(1, x.height >> ot);
      J === i.TEXTURE_3D || J === i.TEXTURE_2D_ARRAY
        ? e.texImage3D(J, ot, tt, _t, pt, x.depth, 0, ht, $, null)
        : e.texImage2D(J, ot, tt, _t, pt, 0, ht, $, null);
    }
    (e.bindFramebuffer(i.FRAMEBUFFER, E),
      Xt(x)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            W,
            J,
            It.__webglTexture,
            0,
            kt(x),
          )
        : (J === i.TEXTURE_2D ||
            (J >= i.TEXTURE_CUBE_MAP_POSITIVE_X &&
              J <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          i.framebufferTexture2D(i.FRAMEBUFFER, W, J, It.__webglTexture, ot),
      e.bindFramebuffer(i.FRAMEBUFFER, null));
  }
  function se(E, x, z) {
    if ((i.bindRenderbuffer(i.RENDERBUFFER, E), x.depthBuffer)) {
      let W = x.depthTexture,
        J = W && W.isDepthTexture ? W.type : null,
        ot = A(x.stencilBuffer, J),
        ht = x.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
      (Xt(x)
        ? o.renderbufferStorageMultisampleEXT(
            i.RENDERBUFFER,
            kt(x),
            ot,
            x.width,
            x.height,
          )
        : z
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              kt(x),
              ot,
              x.width,
              x.height,
            )
          : i.renderbufferStorage(i.RENDERBUFFER, ot, x.width, x.height),
        i.framebufferRenderbuffer(i.FRAMEBUFFER, ht, i.RENDERBUFFER, E));
    } else {
      let W = x.textures;
      for (let J = 0; J < W.length; J++) {
        let ot = W[J],
          ht = r.convert(ot.format, ot.colorSpace),
          $ = r.convert(ot.type),
          tt = v(ot.internalFormat, ht, $, ot.normalized, ot.colorSpace);
        Xt(x)
          ? o.renderbufferStorageMultisampleEXT(
              i.RENDERBUFFER,
              kt(x),
              tt,
              x.width,
              x.height,
            )
          : z
            ? i.renderbufferStorageMultisample(
                i.RENDERBUFFER,
                kt(x),
                tt,
                x.width,
                x.height,
              )
            : i.renderbufferStorage(i.RENDERBUFFER, tt, x.width, x.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function Gt(E, x, z) {
    let W = x.isWebGLCubeRenderTarget === !0;
    if (
      (e.bindFramebuffer(i.FRAMEBUFFER, E),
      !(x.depthTexture && x.depthTexture.isDepthTexture))
    )
      throw new Error(
        "THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.",
      );
    let J = n.get(x.depthTexture);
    if (
      ((J.__renderTarget = x),
      (!J.__webglTexture ||
        x.depthTexture.image.width !== x.width ||
        x.depthTexture.image.height !== x.height) &&
        ((x.depthTexture.image.width = x.width),
        (x.depthTexture.image.height = x.height),
        (x.depthTexture.needsUpdate = !0)),
      W)
    ) {
      if (
        (J.__webglInit === void 0 &&
          ((J.__webglInit = !0), x.depthTexture.addEventListener("dispose", R)),
        J.__webglTexture === void 0)
      ) {
        ((J.__webglTexture = i.createTexture()),
          e.bindTexture(i.TEXTURE_CUBE_MAP, J.__webglTexture),
          Kt(i.TEXTURE_CUBE_MAP, x.depthTexture));
        let ft = r.convert(x.depthTexture.format),
          It = r.convert(x.depthTexture.type),
          _t;
        x.depthTexture.format === yn
          ? (_t = i.DEPTH_COMPONENT24)
          : x.depthTexture.format === oi && (_t = i.DEPTH24_STENCIL8);
        for (let pt = 0; pt < 6; pt++)
          i.texImage2D(
            i.TEXTURE_CUBE_MAP_POSITIVE_X + pt,
            0,
            _t,
            x.width,
            x.height,
            0,
            ft,
            It,
            null,
          );
      }
    } else D(x.depthTexture, 0);
    let ot = J.__webglTexture,
      ht = kt(x),
      $ = W ? i.TEXTURE_CUBE_MAP_POSITIVE_X + z : i.TEXTURE_2D,
      tt =
        x.depthTexture.format === oi
          ? i.DEPTH_STENCIL_ATTACHMENT
          : i.DEPTH_ATTACHMENT;
    if (x.depthTexture.format === yn)
      Xt(x)
        ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, tt, $, ot, 0, ht)
        : i.framebufferTexture2D(i.FRAMEBUFFER, tt, $, ot, 0);
    else if (x.depthTexture.format === oi)
      Xt(x)
        ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, tt, $, ot, 0, ht)
        : i.framebufferTexture2D(i.FRAMEBUFFER, tt, $, ot, 0);
    else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.");
  }
  function et(E) {
    let x = n.get(E),
      z = E.isWebGLCubeRenderTarget === !0;
    if (x.__boundDepthTexture !== E.depthTexture) {
      let W = E.depthTexture;
      if ((x.__depthDisposeCallback && x.__depthDisposeCallback(), W)) {
        let J = () => {
          (delete x.__boundDepthTexture,
            delete x.__depthDisposeCallback,
            W.removeEventListener("dispose", J));
        };
        (W.addEventListener("dispose", J), (x.__depthDisposeCallback = J));
      }
      x.__boundDepthTexture = W;
    }
    if (E.depthTexture && !x.__autoAllocateDepthBuffer)
      if (z) for (let W = 0; W < 6; W++) Gt(x.__webglFramebuffer[W], E, W);
      else {
        let W = E.texture.mipmaps;
        W && W.length > 0
          ? Gt(x.__webglFramebuffer[0], E, 0)
          : Gt(x.__webglFramebuffer, E, 0);
      }
    else if (z) {
      x.__webglDepthbuffer = [];
      for (let W = 0; W < 6; W++)
        if (
          (e.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[W]),
          x.__webglDepthbuffer[W] === void 0)
        )
          ((x.__webglDepthbuffer[W] = i.createRenderbuffer()),
            se(x.__webglDepthbuffer[W], E, !1));
        else {
          let J = E.stencilBuffer
              ? i.DEPTH_STENCIL_ATTACHMENT
              : i.DEPTH_ATTACHMENT,
            ot = x.__webglDepthbuffer[W];
          (i.bindRenderbuffer(i.RENDERBUFFER, ot),
            i.framebufferRenderbuffer(i.FRAMEBUFFER, J, i.RENDERBUFFER, ot));
        }
    } else {
      let W = E.texture.mipmaps;
      if (
        (W && W.length > 0
          ? e.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[0])
          : e.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer),
        x.__webglDepthbuffer === void 0)
      )
        ((x.__webglDepthbuffer = i.createRenderbuffer()),
          se(x.__webglDepthbuffer, E, !1));
      else {
        let J = E.stencilBuffer
            ? i.DEPTH_STENCIL_ATTACHMENT
            : i.DEPTH_ATTACHMENT,
          ot = x.__webglDepthbuffer;
        (i.bindRenderbuffer(i.RENDERBUFFER, ot),
          i.framebufferRenderbuffer(i.FRAMEBUFFER, J, i.RENDERBUFFER, ot));
      }
    }
    e.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function rt(E, x, z) {
    let W = n.get(E);
    (x !== void 0 &&
      Ut(
        W.__webglFramebuffer,
        E,
        E.texture,
        i.COLOR_ATTACHMENT0,
        i.TEXTURE_2D,
        0,
      ),
      z !== void 0 && et(E));
  }
  function st(E) {
    let x = E.texture,
      z = n.get(E),
      W = n.get(x);
    E.addEventListener("dispose", _);
    let J = E.textures,
      ot = E.isWebGLCubeRenderTarget === !0,
      ht = J.length > 1;
    if (
      (ht ||
        (W.__webglTexture === void 0 && (W.__webglTexture = i.createTexture()),
        (W.__version = x.version),
        a.memory.textures++),
      ot)
    ) {
      z.__webglFramebuffer = [];
      for (let $ = 0; $ < 6; $++)
        if (x.mipmaps && x.mipmaps.length > 0) {
          z.__webglFramebuffer[$] = [];
          for (let tt = 0; tt < x.mipmaps.length; tt++)
            z.__webglFramebuffer[$][tt] = i.createFramebuffer();
        } else z.__webglFramebuffer[$] = i.createFramebuffer();
    } else {
      if (x.mipmaps && x.mipmaps.length > 0) {
        z.__webglFramebuffer = [];
        for (let $ = 0; $ < x.mipmaps.length; $++)
          z.__webglFramebuffer[$] = i.createFramebuffer();
      } else z.__webglFramebuffer = i.createFramebuffer();
      if (ht)
        for (let $ = 0, tt = J.length; $ < tt; $++) {
          let ft = n.get(J[$]);
          ft.__webglTexture === void 0 &&
            ((ft.__webglTexture = i.createTexture()), a.memory.textures++);
        }
      if (E.samples > 0 && Xt(E) === !1) {
        ((z.__webglMultisampledFramebuffer = i.createFramebuffer()),
          (z.__webglColorRenderbuffer = []),
          e.bindFramebuffer(i.FRAMEBUFFER, z.__webglMultisampledFramebuffer));
        for (let $ = 0; $ < J.length; $++) {
          let tt = J[$];
          ((z.__webglColorRenderbuffer[$] = i.createRenderbuffer()),
            i.bindRenderbuffer(i.RENDERBUFFER, z.__webglColorRenderbuffer[$]));
          let ft = r.convert(tt.format, tt.colorSpace),
            It = r.convert(tt.type),
            _t = v(
              tt.internalFormat,
              ft,
              It,
              tt.normalized,
              tt.colorSpace,
              E.isXRRenderTarget === !0,
            ),
            pt = kt(E);
          (i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            pt,
            _t,
            E.width,
            E.height,
          ),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + $,
              i.RENDERBUFFER,
              z.__webglColorRenderbuffer[$],
            ));
        }
        (i.bindRenderbuffer(i.RENDERBUFFER, null),
          E.depthBuffer &&
            ((z.__webglDepthRenderbuffer = i.createRenderbuffer()),
            se(z.__webglDepthRenderbuffer, E, !0)),
          e.bindFramebuffer(i.FRAMEBUFFER, null));
      }
    }
    if (ot) {
      (e.bindTexture(i.TEXTURE_CUBE_MAP, W.__webglTexture),
        Kt(i.TEXTURE_CUBE_MAP, x));
      for (let $ = 0; $ < 6; $++)
        if (x.mipmaps && x.mipmaps.length > 0)
          for (let tt = 0; tt < x.mipmaps.length; tt++)
            Ut(
              z.__webglFramebuffer[$][tt],
              E,
              x,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_CUBE_MAP_POSITIVE_X + $,
              tt,
            );
        else
          Ut(
            z.__webglFramebuffer[$],
            E,
            x,
            i.COLOR_ATTACHMENT0,
            i.TEXTURE_CUBE_MAP_POSITIVE_X + $,
            0,
          );
      (p(x) && b(i.TEXTURE_CUBE_MAP), e.unbindTexture());
    } else if (ht) {
      for (let $ = 0, tt = J.length; $ < tt; $++) {
        let ft = J[$],
          It = n.get(ft),
          _t = i.TEXTURE_2D;
        ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) &&
          (_t = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
          e.bindTexture(_t, It.__webglTexture),
          Kt(_t, ft),
          Ut(z.__webglFramebuffer, E, ft, i.COLOR_ATTACHMENT0 + $, _t, 0),
          p(ft) && b(_t));
      }
      e.unbindTexture();
    } else {
      let $ = i.TEXTURE_2D;
      if (
        ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) &&
          ($ = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
        e.bindTexture($, W.__webglTexture),
        Kt($, x),
        x.mipmaps && x.mipmaps.length > 0)
      )
        for (let tt = 0; tt < x.mipmaps.length; tt++)
          Ut(z.__webglFramebuffer[tt], E, x, i.COLOR_ATTACHMENT0, $, tt);
      else Ut(z.__webglFramebuffer, E, x, i.COLOR_ATTACHMENT0, $, 0);
      (p(x) && b($), e.unbindTexture());
    }
    E.depthBuffer && et(E);
  }
  function yt(E) {
    let x = E.textures;
    for (let z = 0, W = x.length; z < W; z++) {
      let J = x[z];
      if (p(J)) {
        let ot = w(E),
          ht = n.get(J).__webglTexture;
        (e.bindTexture(ot, ht), b(ot), e.unbindTexture());
      }
    }
  }
  let gt = [],
    Ft = [];
  function Rt(E) {
    if (E.samples > 0) {
      if (Xt(E) === !1) {
        let x = E.textures,
          z = E.width,
          W = E.height,
          J = i.COLOR_BUFFER_BIT,
          ot = E.stencilBuffer
            ? i.DEPTH_STENCIL_ATTACHMENT
            : i.DEPTH_ATTACHMENT,
          ht = n.get(E),
          $ = x.length > 1;
        if ($)
          for (let ft = 0; ft < x.length; ft++)
            (e.bindFramebuffer(
              i.FRAMEBUFFER,
              ht.__webglMultisampledFramebuffer,
            ),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + ft,
                i.RENDERBUFFER,
                null,
              ),
              e.bindFramebuffer(i.FRAMEBUFFER, ht.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + ft,
                i.TEXTURE_2D,
                null,
                0,
              ));
        e.bindFramebuffer(
          i.READ_FRAMEBUFFER,
          ht.__webglMultisampledFramebuffer,
        );
        let tt = E.texture.mipmaps;
        tt && tt.length > 0
          ? e.bindFramebuffer(i.DRAW_FRAMEBUFFER, ht.__webglFramebuffer[0])
          : e.bindFramebuffer(i.DRAW_FRAMEBUFFER, ht.__webglFramebuffer);
        for (let ft = 0; ft < x.length; ft++) {
          if (
            (E.resolveDepthBuffer &&
              (E.depthBuffer && (J |= i.DEPTH_BUFFER_BIT),
              E.stencilBuffer &&
                E.resolveStencilBuffer &&
                (J |= i.STENCIL_BUFFER_BIT)),
            $)
          ) {
            i.framebufferRenderbuffer(
              i.READ_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.RENDERBUFFER,
              ht.__webglColorRenderbuffer[ft],
            );
            let It = n.get(x[ft]).__webglTexture;
            i.framebufferTexture2D(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_2D,
              It,
              0,
            );
          }
          (i.blitFramebuffer(0, 0, z, W, 0, 0, z, W, J, i.NEAREST),
            c === !0 &&
              ((gt.length = 0),
              (Ft.length = 0),
              gt.push(i.COLOR_ATTACHMENT0 + ft),
              E.depthBuffer &&
                E.resolveDepthBuffer === !1 &&
                (gt.push(ot),
                Ft.push(ot),
                i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, Ft)),
              i.invalidateFramebuffer(i.READ_FRAMEBUFFER, gt)));
        }
        if (
          (e.bindFramebuffer(i.READ_FRAMEBUFFER, null),
          e.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
          $)
        )
          for (let ft = 0; ft < x.length; ft++) {
            (e.bindFramebuffer(
              i.FRAMEBUFFER,
              ht.__webglMultisampledFramebuffer,
            ),
              i.framebufferRenderbuffer(
                i.FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + ft,
                i.RENDERBUFFER,
                ht.__webglColorRenderbuffer[ft],
              ));
            let It = n.get(x[ft]).__webglTexture;
            (e.bindFramebuffer(i.FRAMEBUFFER, ht.__webglFramebuffer),
              i.framebufferTexture2D(
                i.DRAW_FRAMEBUFFER,
                i.COLOR_ATTACHMENT0 + ft,
                i.TEXTURE_2D,
                It,
                0,
              ));
          }
        e.bindFramebuffer(
          i.DRAW_FRAMEBUFFER,
          ht.__webglMultisampledFramebuffer,
        );
      } else if (E.depthBuffer && E.resolveDepthBuffer === !1 && c) {
        let x = E.stencilBuffer
          ? i.DEPTH_STENCIL_ATTACHMENT
          : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [x]);
      }
    }
  }
  function kt(E) {
    return Math.min(s.maxSamples, E.samples);
  }
  function Xt(E) {
    let x = n.get(E);
    return (
      E.samples > 0 &&
      t.has("WEBGL_multisampled_render_to_texture") === !0 &&
      x.__useRenderToTexture !== !1
    );
  }
  function P(E) {
    let x = a.render.frame;
    h.get(E) !== x && (h.set(E, x), E.update());
  }
  function ae(E, x) {
    let z = E.colorSpace,
      W = E.format,
      J = E.type;
    return (
      E.isCompressedTexture === !0 ||
        E.isVideoTexture === !0 ||
        (z !== ys &&
          z !== kn &&
          (ee.getTransfer(z) === re
            ? (W !== tn || J !== He) &&
              Nt(
                "WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.",
              )
            : Ot("WebGLTextures: Unsupported texture color space:", z))),
      x
    );
  }
  function jt(E) {
    return (
      typeof HTMLImageElement < "u" && E instanceof HTMLImageElement
        ? ((l.width = E.naturalWidth || E.width),
          (l.height = E.naturalHeight || E.height))
        : typeof VideoFrame < "u" && E instanceof VideoFrame
          ? ((l.width = E.displayWidth), (l.height = E.displayHeight))
          : ((l.width = E.width), (l.height = E.height)),
      l
    );
  }
  ((this.allocateTextureUnit = X),
    (this.resetTextureUnits = Z),
    (this.getTextureUnits = k),
    (this.setTextureUnits = F),
    (this.setTexture2D = D),
    (this.setTexture2DArray = B),
    (this.setTexture3D = q),
    (this.setTextureCube = K),
    (this.rebindTextures = rt),
    (this.setupRenderTarget = st),
    (this.updateRenderTargetMipmap = yt),
    (this.updateMultisampleRenderTarget = Rt),
    (this.setupDepthRenderbuffer = et),
    (this.setupFrameBufferTexture = Ut),
    (this.useMultisampledRTT = Xt),
    (this.isReversedDepthBuffer = function () {
      return e.buffers.depth.getReversed();
    }));
}
function u_(i, t) {
  function e(n, s = kn) {
    let r,
      a = ee.getTransfer(s);
    if (n === He) return i.UNSIGNED_BYTE;
    if (n === Na) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === Ua) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === ec) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === nc) return i.UNSIGNED_INT_10F_11F_11F_REV;
    if (n === jl) return i.BYTE;
    if (n === tc) return i.SHORT;
    if (n === is) return i.UNSIGNED_SHORT;
    if (n === Da) return i.INT;
    if (n === ln) return i.UNSIGNED_INT;
    if (n === cn) return i.FLOAT;
    if (n === Tn) return i.HALF_FLOAT;
    if (n === ic) return i.ALPHA;
    if (n === sc) return i.RGB;
    if (n === tn) return i.RGBA;
    if (n === yn) return i.DEPTH_COMPONENT;
    if (n === oi) return i.DEPTH_STENCIL;
    if (n === rc) return i.RED;
    if (n === Fa) return i.RED_INTEGER;
    if (n === li) return i.RG;
    if (n === Oa) return i.RG_INTEGER;
    if (n === Ba) return i.RGBA_INTEGER;
    if (n === Xs || n === qs || n === Ys || n === Zs)
      if (a === re)
        if (((r = t.get("WEBGL_compressed_texture_s3tc_srgb")), r !== null)) {
          if (n === Xs) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === qs) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Ys) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === Zs) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((r = t.get("WEBGL_compressed_texture_s3tc")), r !== null)) {
        if (n === Xs) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === qs) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Ys) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === Zs) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (n === za || n === ka || n === Va || n === Ga)
      if (((r = t.get("WEBGL_compressed_texture_pvrtc")), r !== null)) {
        if (n === za) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === ka) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === Va) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Ga) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (
      n === Ha ||
      n === Wa ||
      n === Xa ||
      n === qa ||
      n === Ya ||
      n === Js ||
      n === Za
    )
      if (((r = t.get("WEBGL_compressed_texture_etc")), r !== null)) {
        if (n === Ha || n === Wa)
          return a === re ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === Xa)
          return a === re
            ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : r.COMPRESSED_RGBA8_ETC2_EAC;
        if (n === qa) return r.COMPRESSED_R11_EAC;
        if (n === Ya) return r.COMPRESSED_SIGNED_R11_EAC;
        if (n === Js) return r.COMPRESSED_RG11_EAC;
        if (n === Za) return r.COMPRESSED_SIGNED_RG11_EAC;
      } else return null;
    if (
      n === Ja ||
      n === $a ||
      n === Ka ||
      n === Qa ||
      n === ja ||
      n === to ||
      n === eo ||
      n === no ||
      n === io ||
      n === so ||
      n === ro ||
      n === ao ||
      n === oo ||
      n === lo
    )
      if (((r = t.get("WEBGL_compressed_texture_astc")), r !== null)) {
        if (n === Ja)
          return a === re
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === $a)
          return a === re
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === Ka)
          return a === re
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === Qa)
          return a === re
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === ja)
          return a === re
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === to)
          return a === re
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === eo)
          return a === re
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === no)
          return a === re
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === io)
          return a === re
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === so)
          return a === re
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === ro)
          return a === re
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === ao)
          return a === re
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === oo)
          return a === re
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === lo)
          return a === re
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (n === co || n === ho || n === uo)
      if (((r = t.get("EXT_texture_compression_bptc")), r !== null)) {
        if (n === co)
          return a === re
            ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === ho) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === uo) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (n === fo || n === po || n === $s || n === mo)
      if (((r = t.get("EXT_texture_compression_rgtc")), r !== null)) {
        if (n === fo) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === po) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === $s) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === mo) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return n === ss ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: e };
}
var d_ = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  f_ = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,
  Pc = class {
    constructor() {
      ((this.texture = null),
        (this.mesh = null),
        (this.depthNear = 0),
        (this.depthFar = 0));
    }
    init(t, e) {
      if (this.texture === null) {
        let n = new As(t.texture);
        ((t.depthNear !== e.depthNear || t.depthFar !== e.depthFar) &&
          ((this.depthNear = t.depthNear), (this.depthFar = t.depthFar)),
          (this.texture = n));
      }
    }
    getMesh(t) {
      if (this.texture !== null && this.mesh === null) {
        let e = t.cameras[0].viewport,
          n = new Je({
            vertexShader: d_,
            fragmentShader: f_,
            uniforms: {
              depthColor: { value: this.texture },
              depthWidth: { value: e.z },
              depthHeight: { value: e.w },
            },
          });
        this.mesh = new fe(new Ee(20, 20), n);
      }
      return this.mesh;
    }
    reset() {
      ((this.texture = null), (this.mesh = null));
    }
    getDepthTexture() {
      return this.texture;
    }
  },
  Lc = class extends vn {
    constructor(t, e) {
      super();
      let n = this,
        s = null,
        r = 1,
        a = null,
        o = "local-floor",
        c = 1,
        l = null,
        h = null,
        d = null,
        u = null,
        f = null,
        g = null,
        y = typeof XRWebGLBinding < "u",
        m = new Pc(),
        p = {},
        b = e.getContextAttributes(),
        w = null,
        v = null,
        A = [],
        T = [],
        R = new ut(),
        _ = null,
        S = new Oe();
      S.viewport = new _e();
      let C = new Oe();
      C.viewport = new _e();
      let I = [S, C],
        U = new Aa(),
        Z = null,
        k = null;
      ((this.cameraAutoUpdate = !0),
        (this.enabled = !1),
        (this.isPresenting = !1),
        (this.getController = function (Q) {
          let ct = A[Q];
          return (
            ct === void 0 && ((ct = new Ji()), (A[Q] = ct)),
            ct.getTargetRaySpace()
          );
        }),
        (this.getControllerGrip = function (Q) {
          let ct = A[Q];
          return (
            ct === void 0 && ((ct = new Ji()), (A[Q] = ct)),
            ct.getGripSpace()
          );
        }),
        (this.getHand = function (Q) {
          let ct = A[Q];
          return (
            ct === void 0 && ((ct = new Ji()), (A[Q] = ct)),
            ct.getHandSpace()
          );
        }));
      function F(Q) {
        let ct = T.indexOf(Q.inputSource);
        if (ct === -1) return;
        let at = A[ct];
        at !== void 0 &&
          (at.update(Q.inputSource, Q.frame, l || a),
          at.dispatchEvent({ type: Q.type, data: Q.inputSource }));
      }
      function X() {
        (s.removeEventListener("select", F),
          s.removeEventListener("selectstart", F),
          s.removeEventListener("selectend", F),
          s.removeEventListener("squeeze", F),
          s.removeEventListener("squeezestart", F),
          s.removeEventListener("squeezeend", F),
          s.removeEventListener("end", X),
          s.removeEventListener("inputsourceschange", V));
        for (let Q = 0; Q < A.length; Q++) {
          let ct = T[Q];
          ct !== null && ((T[Q] = null), A[Q].disconnect(ct));
        }
        ((Z = null), (k = null), m.reset());
        for (let Q in p) delete p[Q];
        (t.setRenderTarget(w),
          (f = null),
          (u = null),
          (d = null),
          (s = null),
          (v = null),
          Kt.stop(),
          (n.isPresenting = !1),
          t.setPixelRatio(_),
          t.setSize(R.width, R.height, !1),
          n.dispatchEvent({ type: "sessionend" }));
      }
      ((this.setFramebufferScaleFactor = function (Q) {
        ((r = Q),
          n.isPresenting === !0 &&
            Nt(
              "WebXRManager: Cannot change framebuffer scale while presenting.",
            ));
      }),
        (this.setReferenceSpaceType = function (Q) {
          ((o = Q),
            n.isPresenting === !0 &&
              Nt(
                "WebXRManager: Cannot change reference space type while presenting.",
              ));
        }),
        (this.getReferenceSpace = function () {
          return l || a;
        }),
        (this.setReferenceSpace = function (Q) {
          l = Q;
        }),
        (this.getBaseLayer = function () {
          return u !== null ? u : f;
        }),
        (this.getBinding = function () {
          return (d === null && y && (d = new XRWebGLBinding(s, e)), d);
        }),
        (this.getFrame = function () {
          return g;
        }),
        (this.getSession = function () {
          return s;
        }),
        (this.setSession = async function (Q) {
          if (((s = Q), s !== null)) {
            if (
              ((w = t.getRenderTarget()),
              s.addEventListener("select", F),
              s.addEventListener("selectstart", F),
              s.addEventListener("selectend", F),
              s.addEventListener("squeeze", F),
              s.addEventListener("squeezestart", F),
              s.addEventListener("squeezeend", F),
              s.addEventListener("end", X),
              s.addEventListener("inputsourceschange", V),
              b.xrCompatible !== !0 && (await e.makeXRCompatible()),
              (_ = t.getPixelRatio()),
              t.getSize(R),
              y && "createProjectionLayer" in XRWebGLBinding.prototype)
            ) {
              let at = null,
                At = null,
                zt = null;
              b.depth &&
                ((zt = b.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24),
                (at = b.stencil ? oi : yn),
                (At = b.stencil ? ss : ln));
              let Ut = {
                colorFormat: e.RGBA8,
                depthFormat: zt,
                scaleFactor: r,
              };
              ((d = this.getBinding()),
                (u = d.createProjectionLayer(Ut)),
                s.updateRenderState({ layers: [u] }),
                t.setPixelRatio(1),
                t.setSize(u.textureWidth, u.textureHeight, !1),
                (v = new Ye(u.textureWidth, u.textureHeight, {
                  format: tn,
                  type: He,
                  depthTexture: new zn(
                    u.textureWidth,
                    u.textureHeight,
                    At,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    void 0,
                    at,
                  ),
                  stencilBuffer: b.stencil,
                  colorSpace: t.outputColorSpace,
                  samples: b.antialias ? 4 : 0,
                  resolveDepthBuffer: u.ignoreDepthValues === !1,
                  resolveStencilBuffer: u.ignoreDepthValues === !1,
                })));
            } else {
              let at = {
                antialias: b.antialias,
                alpha: !0,
                depth: b.depth,
                stencil: b.stencil,
                framebufferScaleFactor: r,
              };
              ((f = new XRWebGLLayer(s, e, at)),
                s.updateRenderState({ baseLayer: f }),
                t.setPixelRatio(1),
                t.setSize(f.framebufferWidth, f.framebufferHeight, !1),
                (v = new Ye(f.framebufferWidth, f.framebufferHeight, {
                  format: tn,
                  type: He,
                  colorSpace: t.outputColorSpace,
                  stencilBuffer: b.stencil,
                  resolveDepthBuffer: f.ignoreDepthValues === !1,
                  resolveStencilBuffer: f.ignoreDepthValues === !1,
                })));
            }
            ((v.isXRRenderTarget = !0),
              this.setFoveation(c),
              (l = null),
              (a = await s.requestReferenceSpace(o)),
              Kt.setContext(s),
              Kt.start(),
              (n.isPresenting = !0),
              n.dispatchEvent({ type: "sessionstart" }));
          }
        }),
        (this.getEnvironmentBlendMode = function () {
          if (s !== null) return s.environmentBlendMode;
        }),
        (this.getDepthTexture = function () {
          return m.getDepthTexture();
        }));
      function V(Q) {
        for (let ct = 0; ct < Q.removed.length; ct++) {
          let at = Q.removed[ct],
            At = T.indexOf(at);
          At >= 0 && ((T[At] = null), A[At].disconnect(at));
        }
        for (let ct = 0; ct < Q.added.length; ct++) {
          let at = Q.added[ct],
            At = T.indexOf(at);
          if (At === -1) {
            for (let Ut = 0; Ut < A.length; Ut++)
              if (Ut >= T.length) {
                (T.push(at), (At = Ut));
                break;
              } else if (T[Ut] === null) {
                ((T[Ut] = at), (At = Ut));
                break;
              }
            if (At === -1) break;
          }
          let zt = A[At];
          zt && zt.connect(at);
        }
      }
      let D = new L(),
        B = new L();
      function q(Q, ct, at) {
        (D.setFromMatrixPosition(ct.matrixWorld),
          B.setFromMatrixPosition(at.matrixWorld));
        let At = D.distanceTo(B),
          zt = ct.projectionMatrix.elements,
          Ut = at.projectionMatrix.elements,
          se = zt[14] / (zt[10] - 1),
          Gt = zt[14] / (zt[10] + 1),
          et = (zt[9] + 1) / zt[5],
          rt = (zt[9] - 1) / zt[5],
          st = (zt[8] - 1) / zt[0],
          yt = (Ut[8] + 1) / Ut[0],
          gt = se * st,
          Ft = se * yt,
          Rt = At / (-st + yt),
          kt = Rt * -st;
        if (
          (ct.matrixWorld.decompose(Q.position, Q.quaternion, Q.scale),
          Q.translateX(kt),
          Q.translateZ(Rt),
          Q.matrixWorld.compose(Q.position, Q.quaternion, Q.scale),
          Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),
          zt[10] === -1)
        )
          (Q.projectionMatrix.copy(ct.projectionMatrix),
            Q.projectionMatrixInverse.copy(ct.projectionMatrixInverse));
        else {
          let Xt = se + Rt,
            P = Gt + Rt,
            ae = gt - kt,
            jt = Ft + (At - kt),
            E = ((et * Gt) / P) * Xt,
            x = ((rt * Gt) / P) * Xt;
          (Q.projectionMatrix.makePerspective(ae, jt, E, x, Xt, P),
            Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert());
        }
      }
      function K(Q, ct) {
        (ct === null
          ? Q.matrixWorld.copy(Q.matrix)
          : Q.matrixWorld.multiplyMatrices(ct.matrixWorld, Q.matrix),
          Q.matrixWorldInverse.copy(Q.matrixWorld).invert());
      }
      this.updateCamera = function (Q) {
        if (s === null) return;
        let ct = Q.near,
          at = Q.far;
        (m.texture !== null &&
          (m.depthNear > 0 && (ct = m.depthNear),
          m.depthFar > 0 && (at = m.depthFar)),
          (U.near = C.near = S.near = ct),
          (U.far = C.far = S.far = at),
          (Z !== U.near || k !== U.far) &&
            (s.updateRenderState({ depthNear: U.near, depthFar: U.far }),
            (Z = U.near),
            (k = U.far)),
          (U.layers.mask = Q.layers.mask | 6),
          (S.layers.mask = U.layers.mask & -5),
          (C.layers.mask = U.layers.mask & -3));
        let At = Q.parent,
          zt = U.cameras;
        K(U, At);
        for (let Ut = 0; Ut < zt.length; Ut++) K(zt[Ut], At);
        (zt.length === 2
          ? q(U, S, C)
          : U.projectionMatrix.copy(S.projectionMatrix),
          it(Q, U, At));
      };
      function it(Q, ct, at) {
        (at === null
          ? Q.matrix.copy(ct.matrixWorld)
          : (Q.matrix.copy(at.matrixWorld),
            Q.matrix.invert(),
            Q.matrix.multiply(ct.matrixWorld)),
          Q.matrix.decompose(Q.position, Q.quaternion, Q.scale),
          Q.updateMatrixWorld(!0),
          Q.projectionMatrix.copy(ct.projectionMatrix),
          Q.projectionMatrixInverse.copy(ct.projectionMatrixInverse),
          Q.isPerspectiveCamera &&
            ((Q.fov = Ms * 2 * Math.atan(1 / Q.projectionMatrix.elements[5])),
            (Q.zoom = 1)));
      }
      ((this.getCamera = function () {
        return U;
      }),
        (this.getFoveation = function () {
          if (!(u === null && f === null)) return c;
        }),
        (this.setFoveation = function (Q) {
          ((c = Q),
            u !== null && (u.fixedFoveation = Q),
            f !== null &&
              f.fixedFoveation !== void 0 &&
              (f.fixedFoveation = Q));
        }),
        (this.hasDepthSensing = function () {
          return m.texture !== null;
        }),
        (this.getDepthSensingMesh = function () {
          return m.getMesh(U);
        }),
        (this.getCameraTexture = function (Q) {
          return p[Q];
        }));
      let lt = null;
      function Vt(Q, ct) {
        if (((h = ct.getViewerPose(l || a)), (g = ct), h !== null)) {
          let at = h.views;
          f !== null &&
            (t.setRenderTargetFramebuffer(v, f.framebuffer),
            t.setRenderTarget(v));
          let At = !1;
          at.length !== U.cameras.length && ((U.cameras.length = 0), (At = !0));
          for (let Gt = 0; Gt < at.length; Gt++) {
            let et = at[Gt],
              rt = null;
            if (f !== null) rt = f.getViewport(et);
            else {
              let yt = d.getViewSubImage(u, et);
              ((rt = yt.viewport),
                Gt === 0 &&
                  (t.setRenderTargetTextures(
                    v,
                    yt.colorTexture,
                    yt.depthStencilTexture,
                  ),
                  t.setRenderTarget(v)));
            }
            let st = I[Gt];
            (st === void 0 &&
              ((st = new Oe()),
              st.layers.enable(Gt),
              (st.viewport = new _e()),
              (I[Gt] = st)),
              st.matrix.fromArray(et.transform.matrix),
              st.matrix.decompose(st.position, st.quaternion, st.scale),
              st.projectionMatrix.fromArray(et.projectionMatrix),
              st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),
              st.viewport.set(rt.x, rt.y, rt.width, rt.height),
              Gt === 0 &&
                (U.matrix.copy(st.matrix),
                U.matrix.decompose(U.position, U.quaternion, U.scale)),
              At === !0 && U.cameras.push(st));
          }
          let zt = s.enabledFeatures;
          if (
            zt &&
            zt.includes("depth-sensing") &&
            s.depthUsage == "gpu-optimized" &&
            y
          ) {
            d = n.getBinding();
            let Gt = d.getDepthInformation(at[0]);
            Gt && Gt.isValid && Gt.texture && m.init(Gt, s.renderState);
          }
          if (zt && zt.includes("camera-access") && y) {
            (t.state.unbindTexture(), (d = n.getBinding()));
            for (let Gt = 0; Gt < at.length; Gt++) {
              let et = at[Gt].camera;
              if (et) {
                let rt = p[et];
                rt || ((rt = new As()), (p[et] = rt));
                let st = d.getCameraImage(et);
                rt.sourceTexture = st;
              }
            }
          }
        }
        for (let at = 0; at < A.length; at++) {
          let At = T[at],
            zt = A[at];
          At !== null && zt !== void 0 && zt.update(At, ct, l || a);
        }
        (lt && lt(Q, ct),
          ct.detectedPlanes &&
            n.dispatchEvent({ type: "planesdetected", data: ct }),
          (g = null));
      }
      let Kt = new Zu();
      (Kt.setAnimationLoop(Vt),
        (this.setAnimationLoop = function (Q) {
          lt = Q;
        }),
        (this.dispose = function () {}));
    }
  },
  p_ = new he(),
  td = new Ht();
td.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function m_(i, t) {
  function e(m, p) {
    (m.matrixAutoUpdate === !0 && m.updateMatrix(), p.value.copy(m.matrix));
  }
  function n(m, p) {
    (p.color.getRGB(m.fogColor.value, cc(i)),
      p.isFog
        ? ((m.fogNear.value = p.near), (m.fogFar.value = p.far))
        : p.isFogExp2 && (m.fogDensity.value = p.density));
  }
  function s(m, p, b, w, v) {
    p.isNodeMaterial
      ? (p.uniformsNeedUpdate = !1)
      : p.isMeshBasicMaterial
        ? r(m, p)
        : p.isMeshLambertMaterial
          ? (r(m, p), p.envMap && (m.envMapIntensity.value = p.envMapIntensity))
          : p.isMeshToonMaterial
            ? (r(m, p), d(m, p))
            : p.isMeshPhongMaterial
              ? (r(m, p),
                h(m, p),
                p.envMap && (m.envMapIntensity.value = p.envMapIntensity))
              : p.isMeshStandardMaterial
                ? (r(m, p), u(m, p), p.isMeshPhysicalMaterial && f(m, p, v))
                : p.isMeshMatcapMaterial
                  ? (r(m, p), g(m, p))
                  : p.isMeshDepthMaterial
                    ? r(m, p)
                    : p.isMeshDistanceMaterial
                      ? (r(m, p), y(m, p))
                      : p.isMeshNormalMaterial
                        ? r(m, p)
                        : p.isLineBasicMaterial
                          ? (a(m, p), p.isLineDashedMaterial && o(m, p))
                          : p.isPointsMaterial
                            ? c(m, p, b, w)
                            : p.isSpriteMaterial
                              ? l(m, p)
                              : p.isShadowMaterial
                                ? (m.color.value.copy(p.color),
                                  (m.opacity.value = p.opacity))
                                : p.isShaderMaterial &&
                                  (p.uniformsNeedUpdate = !1);
  }
  function r(m, p) {
    ((m.opacity.value = p.opacity),
      p.color && m.diffuse.value.copy(p.color),
      p.emissive &&
        m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),
      p.map && ((m.map.value = p.map), e(p.map, m.mapTransform)),
      p.alphaMap &&
        ((m.alphaMap.value = p.alphaMap), e(p.alphaMap, m.alphaMapTransform)),
      p.bumpMap &&
        ((m.bumpMap.value = p.bumpMap),
        e(p.bumpMap, m.bumpMapTransform),
        (m.bumpScale.value = p.bumpScale),
        p.side === Ve && (m.bumpScale.value *= -1)),
      p.normalMap &&
        ((m.normalMap.value = p.normalMap),
        e(p.normalMap, m.normalMapTransform),
        m.normalScale.value.copy(p.normalScale),
        p.side === Ve && m.normalScale.value.negate()),
      p.displacementMap &&
        ((m.displacementMap.value = p.displacementMap),
        e(p.displacementMap, m.displacementMapTransform),
        (m.displacementScale.value = p.displacementScale),
        (m.displacementBias.value = p.displacementBias)),
      p.emissiveMap &&
        ((m.emissiveMap.value = p.emissiveMap),
        e(p.emissiveMap, m.emissiveMapTransform)),
      p.specularMap &&
        ((m.specularMap.value = p.specularMap),
        e(p.specularMap, m.specularMapTransform)),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest));
    let b = t.get(p),
      w = b.envMap,
      v = b.envMapRotation;
    (w &&
      ((m.envMap.value = w),
      m.envMapRotation.value
        .setFromMatrix4(p_.makeRotationFromEuler(v))
        .transpose(),
      w.isCubeTexture &&
        w.isRenderTargetTexture === !1 &&
        m.envMapRotation.value.premultiply(td),
      (m.reflectivity.value = p.reflectivity),
      (m.ior.value = p.ior),
      (m.refractionRatio.value = p.refractionRatio)),
      p.lightMap &&
        ((m.lightMap.value = p.lightMap),
        (m.lightMapIntensity.value = p.lightMapIntensity),
        e(p.lightMap, m.lightMapTransform)),
      p.aoMap &&
        ((m.aoMap.value = p.aoMap),
        (m.aoMapIntensity.value = p.aoMapIntensity),
        e(p.aoMap, m.aoMapTransform)));
  }
  function a(m, p) {
    (m.diffuse.value.copy(p.color),
      (m.opacity.value = p.opacity),
      p.map && ((m.map.value = p.map), e(p.map, m.mapTransform)));
  }
  function o(m, p) {
    ((m.dashSize.value = p.dashSize),
      (m.totalSize.value = p.dashSize + p.gapSize),
      (m.scale.value = p.scale));
  }
  function c(m, p, b, w) {
    (m.diffuse.value.copy(p.color),
      (m.opacity.value = p.opacity),
      (m.size.value = p.size * b),
      (m.scale.value = w * 0.5),
      p.map && ((m.map.value = p.map), e(p.map, m.uvTransform)),
      p.alphaMap &&
        ((m.alphaMap.value = p.alphaMap), e(p.alphaMap, m.alphaMapTransform)),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest));
  }
  function l(m, p) {
    (m.diffuse.value.copy(p.color),
      (m.opacity.value = p.opacity),
      (m.rotation.value = p.rotation),
      p.map && ((m.map.value = p.map), e(p.map, m.mapTransform)),
      p.alphaMap &&
        ((m.alphaMap.value = p.alphaMap), e(p.alphaMap, m.alphaMapTransform)),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest));
  }
  function h(m, p) {
    (m.specular.value.copy(p.specular),
      (m.shininess.value = Math.max(p.shininess, 1e-4)));
  }
  function d(m, p) {
    p.gradientMap && (m.gradientMap.value = p.gradientMap);
  }
  function u(m, p) {
    ((m.metalness.value = p.metalness),
      p.metalnessMap &&
        ((m.metalnessMap.value = p.metalnessMap),
        e(p.metalnessMap, m.metalnessMapTransform)),
      (m.roughness.value = p.roughness),
      p.roughnessMap &&
        ((m.roughnessMap.value = p.roughnessMap),
        e(p.roughnessMap, m.roughnessMapTransform)),
      p.envMap && (m.envMapIntensity.value = p.envMapIntensity));
  }
  function f(m, p, b) {
    ((m.ior.value = p.ior),
      p.sheen > 0 &&
        (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),
        (m.sheenRoughness.value = p.sheenRoughness),
        p.sheenColorMap &&
          ((m.sheenColorMap.value = p.sheenColorMap),
          e(p.sheenColorMap, m.sheenColorMapTransform)),
        p.sheenRoughnessMap &&
          ((m.sheenRoughnessMap.value = p.sheenRoughnessMap),
          e(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))),
      p.clearcoat > 0 &&
        ((m.clearcoat.value = p.clearcoat),
        (m.clearcoatRoughness.value = p.clearcoatRoughness),
        p.clearcoatMap &&
          ((m.clearcoatMap.value = p.clearcoatMap),
          e(p.clearcoatMap, m.clearcoatMapTransform)),
        p.clearcoatRoughnessMap &&
          ((m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap),
          e(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)),
        p.clearcoatNormalMap &&
          ((m.clearcoatNormalMap.value = p.clearcoatNormalMap),
          e(p.clearcoatNormalMap, m.clearcoatNormalMapTransform),
          m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),
          p.side === Ve && m.clearcoatNormalScale.value.negate())),
      p.dispersion > 0 && (m.dispersion.value = p.dispersion),
      p.iridescence > 0 &&
        ((m.iridescence.value = p.iridescence),
        (m.iridescenceIOR.value = p.iridescenceIOR),
        (m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0]),
        (m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1]),
        p.iridescenceMap &&
          ((m.iridescenceMap.value = p.iridescenceMap),
          e(p.iridescenceMap, m.iridescenceMapTransform)),
        p.iridescenceThicknessMap &&
          ((m.iridescenceThicknessMap.value = p.iridescenceThicknessMap),
          e(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))),
      p.transmission > 0 &&
        ((m.transmission.value = p.transmission),
        (m.transmissionSamplerMap.value = b.texture),
        m.transmissionSamplerSize.value.set(b.width, b.height),
        p.transmissionMap &&
          ((m.transmissionMap.value = p.transmissionMap),
          e(p.transmissionMap, m.transmissionMapTransform)),
        (m.thickness.value = p.thickness),
        p.thicknessMap &&
          ((m.thicknessMap.value = p.thicknessMap),
          e(p.thicknessMap, m.thicknessMapTransform)),
        (m.attenuationDistance.value = p.attenuationDistance),
        m.attenuationColor.value.copy(p.attenuationColor)),
      p.anisotropy > 0 &&
        (m.anisotropyVector.value.set(
          p.anisotropy * Math.cos(p.anisotropyRotation),
          p.anisotropy * Math.sin(p.anisotropyRotation),
        ),
        p.anisotropyMap &&
          ((m.anisotropyMap.value = p.anisotropyMap),
          e(p.anisotropyMap, m.anisotropyMapTransform))),
      (m.specularIntensity.value = p.specularIntensity),
      m.specularColor.value.copy(p.specularColor),
      p.specularColorMap &&
        ((m.specularColorMap.value = p.specularColorMap),
        e(p.specularColorMap, m.specularColorMapTransform)),
      p.specularIntensityMap &&
        ((m.specularIntensityMap.value = p.specularIntensityMap),
        e(p.specularIntensityMap, m.specularIntensityMapTransform)));
  }
  function g(m, p) {
    p.matcap && (m.matcap.value = p.matcap);
  }
  function y(m, p) {
    let b = t.get(p).light;
    (m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),
      (m.nearDistance.value = b.shadow.camera.near),
      (m.farDistance.value = b.shadow.camera.far));
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: s };
}
function g_(i, t, e, n) {
  let s = {},
    r = {},
    a = [],
    o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function c(v, A) {
    let T = A.program;
    n.uniformBlockBinding(v, T);
  }
  function l(v, A) {
    let T = s[v.id];
    T === void 0 &&
      (m(v), (T = h(v)), (s[v.id] = T), v.addEventListener("dispose", b));
    let R = A.program;
    n.updateUBOMapping(v, R);
    let _ = t.render.frame;
    r[v.id] !== _ && (u(v), (r[v.id] = _));
  }
  function h(v) {
    let A = d();
    v.__bindingPointIndex = A;
    let T = i.createBuffer(),
      R = v.__size,
      _ = v.usage;
    return (
      i.bindBuffer(i.UNIFORM_BUFFER, T),
      i.bufferData(i.UNIFORM_BUFFER, R, _),
      i.bindBuffer(i.UNIFORM_BUFFER, null),
      i.bindBufferBase(i.UNIFORM_BUFFER, A, T),
      T
    );
  }
  function d() {
    for (let v = 0; v < o; v++) if (a.indexOf(v) === -1) return (a.push(v), v);
    return (
      Ot(
        "WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.",
      ),
      0
    );
  }
  function u(v) {
    let A = s[v.id],
      T = v.uniforms,
      R = v.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, A);
    for (let _ = 0, S = T.length; _ < S; _++) {
      let C = T[_];
      if (Array.isArray(C))
        for (let I = 0, U = C.length; I < U; I++) f(C[I], _, I, R);
      else f(C, _, 0, R);
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function f(v, A, T, R) {
    if (y(v, A, T, R) === !0) {
      let _ = v.__offset,
        S = v.value;
      if (Array.isArray(S)) {
        let C = 0;
        for (let I = 0; I < S.length; I++) {
          let U = S[I],
            Z = p(U);
          (g(U, v.__data, C),
            typeof U != "number" &&
              typeof U != "boolean" &&
              !U.isMatrix3 &&
              !ArrayBuffer.isView(U) &&
              (C += Z.storage / Float32Array.BYTES_PER_ELEMENT));
        }
      } else g(S, v.__data, 0);
      i.bufferSubData(i.UNIFORM_BUFFER, _, v.__data);
    }
  }
  function g(v, A, T) {
    typeof v == "number" || typeof v == "boolean"
      ? (A[0] = v)
      : v.isMatrix3
        ? ((A[0] = v.elements[0]),
          (A[1] = v.elements[1]),
          (A[2] = v.elements[2]),
          (A[3] = 0),
          (A[4] = v.elements[3]),
          (A[5] = v.elements[4]),
          (A[6] = v.elements[5]),
          (A[7] = 0),
          (A[8] = v.elements[6]),
          (A[9] = v.elements[7]),
          (A[10] = v.elements[8]),
          (A[11] = 0))
        : ArrayBuffer.isView(v)
          ? A.set(new v.constructor(v.buffer, v.byteOffset, A.length))
          : v.toArray(A, T);
  }
  function y(v, A, T, R) {
    let _ = v.value,
      S = A + "_" + T;
    if (R[S] === void 0)
      return (
        typeof _ == "number" || typeof _ == "boolean"
          ? (R[S] = _)
          : ArrayBuffer.isView(_)
            ? (R[S] = _.slice())
            : (R[S] = _.clone()),
        !0
      );
    {
      let C = R[S];
      if (typeof _ == "number" || typeof _ == "boolean") {
        if (C !== _) return ((R[S] = _), !0);
      } else {
        if (ArrayBuffer.isView(_)) return !0;
        if (C.equals(_) === !1) return (C.copy(_), !0);
      }
    }
    return !1;
  }
  function m(v) {
    let A = v.uniforms,
      T = 0,
      R = 16;
    for (let S = 0, C = A.length; S < C; S++) {
      let I = Array.isArray(A[S]) ? A[S] : [A[S]];
      for (let U = 0, Z = I.length; U < Z; U++) {
        let k = I[U],
          F = Array.isArray(k.value) ? k.value : [k.value];
        for (let X = 0, V = F.length; X < V; X++) {
          let D = F[X],
            B = p(D),
            q = T % R,
            K = q % B.boundary,
            it = q + K;
          ((T += K),
            it !== 0 && R - it < B.storage && (T += R - it),
            (k.__data = new Float32Array(
              B.storage / Float32Array.BYTES_PER_ELEMENT,
            )),
            (k.__offset = T),
            (T += B.storage));
        }
      }
    }
    let _ = T % R;
    return (_ > 0 && (T += R - _), (v.__size = T), (v.__cache = {}), this);
  }
  function p(v) {
    let A = { boundary: 0, storage: 0 };
    return (
      typeof v == "number" || typeof v == "boolean"
        ? ((A.boundary = 4), (A.storage = 4))
        : v.isVector2
          ? ((A.boundary = 8), (A.storage = 8))
          : v.isVector3 || v.isColor
            ? ((A.boundary = 16), (A.storage = 12))
            : v.isVector4
              ? ((A.boundary = 16), (A.storage = 16))
              : v.isMatrix3
                ? ((A.boundary = 48), (A.storage = 48))
                : v.isMatrix4
                  ? ((A.boundary = 64), (A.storage = 64))
                  : v.isTexture
                    ? Nt(
                        "WebGLRenderer: Texture samplers can not be part of an uniforms group.",
                      )
                    : ArrayBuffer.isView(v)
                      ? ((A.boundary = 16), (A.storage = v.byteLength))
                      : Nt("WebGLRenderer: Unsupported uniform value type.", v),
      A
    );
  }
  function b(v) {
    let A = v.target;
    A.removeEventListener("dispose", b);
    let T = a.indexOf(A.__bindingPointIndex);
    (a.splice(T, 1), i.deleteBuffer(s[A.id]), delete s[A.id], delete r[A.id]);
  }
  function w() {
    for (let v in s) i.deleteBuffer(s[v]);
    ((a = []), (s = {}), (r = {}));
  }
  return { bind: c, update: l, dispose: w };
}
var __ = new Uint16Array([
    12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545,
    13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829,
    15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880,
    14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410,
    14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958,
    11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039,
    14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743,
    12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751,
    14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764,
    13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387,
    14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782,
    10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831,
    14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886,
    11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600,
    14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104,
    12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205,
    14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603,
    8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451,
    15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932,
    10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381,
    14461, 8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256,
    10631, 15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787,
    14883, 9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411,
    7507, 14279, 7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759,
    15277, 9797, 15229, 9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898,
    8910, 14800, 8539, 14697, 8234, 14590, 7790, 14479, 7409, 14367, 7067,
    14178, 6621, 15337, 8619, 15337, 8631, 15333, 8677, 15325, 8769, 15305,
    8871, 15264, 8940, 15202, 8909, 15119, 8775, 15022, 8565, 14916, 8328,
    14804, 8009, 14688, 7614, 14569, 7287, 14448, 6888, 14321, 6483, 14088,
    6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340, 7613, 15322, 7804,
    15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933, 7611, 14810,
    7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007, 5528,
    15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302,
    6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611,
    14679, 6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359,
    4123, 15359, 4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508,
    15263, 5829, 15188, 6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678,
    5543, 14527, 5287, 14377, 4985, 14133, 4586, 13869, 4257, 15360, 1563,
    15360, 1642, 15358, 2076, 15354, 2636, 15341, 3350, 15317, 4019, 15273,
    4429, 15203, 4732, 15105, 4911, 14981, 4932, 14836, 4818, 14679, 4621,
    14517, 4386, 14359, 4156, 14083, 3795, 13808, 3437, 15360, 122, 15360, 137,
    15358, 285, 15355, 636, 15344, 1274, 15322, 2177, 15281, 2765, 15215, 3223,
    15120, 3451, 14995, 3569, 14846, 3567, 14681, 3466, 14511, 3305, 14344,
    3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1, 15359, 21, 15355, 89,
    15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133, 1492, 15008, 1749,
    14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996, 1398, 13702,
    1183,
  ]),
  An = null;
function x_() {
  return (
    An === null &&
      ((An = new ta(__, 16, 16, li, Tn)),
      (An.name = "DFG_LUT"),
      (An.minFilter = we),
      (An.magFilter = we),
      (An.wrapS = gn),
      (An.wrapT = gn),
      (An.generateMipmaps = !1),
      (An.needsUpdate = !0)),
    An
  );
}
var Yu = class {
  constructor(t = {}) {
    let {
      canvas: e = pu(),
      context: n = null,
      depth: s = !0,
      stencil: r = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: d = !1,
      reversedDepthBuffer: u = !1,
      outputBufferType: f = He,
    } = t;
    this.isWebGLRenderer = !0;
    let g;
    if (n !== null) {
      if (
        typeof WebGLRenderingContext < "u" &&
        n instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163.",
        );
      g = n.getContextAttributes().alpha;
    } else g = a;
    let y = f,
      m = new Set([Ba, Oa, Fa]),
      p = new Set([He, ln, is, ss, Na, Ua]),
      b = new Uint32Array(4),
      w = new Int32Array(4),
      v = new L(),
      A = null,
      T = null,
      R = [],
      _ = [],
      S = null;
    ((this.domElement = e),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.toneMapping = on),
      (this.toneMappingExposure = 1),
      (this.transmissionResolutionScale = 1));
    let C = this,
      I = !1,
      U = null,
      Z = null,
      k = null,
      F = null;
    this._outputColorSpace = Le;
    let X = 0,
      V = 0,
      D = null,
      B = -1,
      q = null,
      K = new _e(),
      it = new _e(),
      lt = null,
      Vt = new Jt(0),
      Kt = 0,
      Q = e.width,
      ct = e.height,
      at = 1,
      At = null,
      zt = null,
      Ut = new _e(0, 0, Q, ct),
      se = new _e(0, 0, Q, ct),
      Gt = !1,
      et = new $i(),
      rt = !1,
      st = !1,
      yt = new he(),
      gt = new L(),
      Ft = new _e(),
      Rt = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      },
      kt = !1;
    function Xt() {
      return D === null ? at : 1;
    }
    let P = n;
    function ae(M, O) {
      return e.getContext(M, O);
    }
    try {
      let M = {
        alpha: !0,
        depth: s,
        stencil: r,
        antialias: o,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: d,
      };
      if (
        ("setAttribute" in e &&
          e.setAttribute("data-engine", `three.js r${Ra}`),
        e.addEventListener("webglcontextlost", ye, !1),
        e.addEventListener("webglcontextrestored", ue, !1),
        e.addEventListener("webglcontextcreationerror", un, !1),
        P === null)
      ) {
        let O = "webgl2";
        if (((P = ae(O, M)), P === null))
          throw ae(O)
            ? new Error(
                "THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.",
              )
            : new Error("THREE.WebGLRenderer: Error creating WebGL context.");
      }
    } catch (M) {
      throw (Ot("WebGLRenderer: " + M.message), M);
    }
    let jt,
      E,
      x,
      z,
      W,
      J,
      ot,
      ht,
      $,
      tt,
      ft,
      It,
      _t,
      pt,
      Dt,
      Bt,
      qt,
      N,
      dt,
      j,
      mt,
      St,
      nt;
    function Ct() {
      ((jt = new Eg(P)),
        jt.init(),
        (mt = new u_(P, jt)),
        (E = new _g(P, jt, t, mt)),
        (x = new c_(P, jt)),
        E.reversedDepthBuffer && u && x.buffers.depth.setReversed(!0),
        (Z = P.createFramebuffer()),
        (k = P.createFramebuffer()),
        (F = P.createFramebuffer()),
        (z = new Cg(P)),
        (W = new J0()),
        (J = new h_(P, jt, x, W, E, mt, z)),
        (ot = new wg(C)),
        (ht = new Lf(P)),
        (St = new mg(P, ht)),
        ($ = new Tg(P, ht, z, St)),
        (tt = new Ig(P, $, ht, St, z)),
        (N = new Rg(P, E, J)),
        (Dt = new xg(W)),
        (ft = new Z0(C, ot, jt, E, St, Dt)),
        (It = new m_(C, W)),
        (_t = new K0()),
        (pt = new i_(jt)),
        (qt = new pg(C, ot, x, tt, g, c)),
        (Bt = new l_(C, tt, E)),
        (nt = new g_(P, z, E, x)),
        (dt = new gg(P, jt, z)),
        (j = new Ag(P, jt, z)),
        (z.programs = ft.programs),
        (C.capabilities = E),
        (C.extensions = jt),
        (C.properties = W),
        (C.renderLists = _t),
        (C.shadowMap = Bt),
        (C.state = x),
        (C.info = z));
    }
    (Ct(), y !== He && (S = new Lg(y, e.width, e.height, o, s, r)));
    let Et = new Lc(C, P);
    ((this.xr = Et),
      (this.getContext = function () {
        return P;
      }),
      (this.getContextAttributes = function () {
        return P.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        let M = jt.get("WEBGL_lose_context");
        M && M.loseContext();
      }),
      (this.forceContextRestore = function () {
        let M = jt.get("WEBGL_lose_context");
        M && M.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return at;
      }),
      (this.setPixelRatio = function (M) {
        M !== void 0 && ((at = M), this.setSize(Q, ct, !1));
      }),
      (this.getSize = function (M) {
        return M.set(Q, ct);
      }),
      (this.setSize = function (M, O, Y = !0) {
        if (Et.isPresenting) {
          Nt("WebGLRenderer: Can't change size while VR device is presenting.");
          return;
        }
        ((Q = M),
          (ct = O),
          (e.width = Math.floor(M * at)),
          (e.height = Math.floor(O * at)),
          Y === !0 && ((e.style.width = M + "px"), (e.style.height = O + "px")),
          S !== null && S.setSize(e.width, e.height),
          this.setViewport(0, 0, M, O));
      }),
      (this.getDrawingBufferSize = function (M) {
        return M.set(Q * at, ct * at).floor();
      }),
      (this.setDrawingBufferSize = function (M, O, Y) {
        ((Q = M),
          (ct = O),
          (at = Y),
          (e.width = Math.floor(M * Y)),
          (e.height = Math.floor(O * Y)),
          this.setViewport(0, 0, M, O));
      }),
      (this.setEffects = function (M) {
        if (y === He) {
          Ot(
            "WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.",
          );
          return;
        }
        if (M) {
          for (let O = 0; O < M.length; O++)
            if (M[O].isOutputPass === !0) {
              Nt(
                "WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.",
              );
              break;
            }
        }
        S.setEffects(M || []);
      }),
      (this.getCurrentViewport = function (M) {
        return M.copy(K);
      }),
      (this.getViewport = function (M) {
        return M.copy(Ut);
      }),
      (this.setViewport = function (M, O, Y, G) {
        (M.isVector4 ? Ut.set(M.x, M.y, M.z, M.w) : Ut.set(M, O, Y, G),
          x.viewport(K.copy(Ut).multiplyScalar(at).round()));
      }),
      (this.getScissor = function (M) {
        return M.copy(se);
      }),
      (this.setScissor = function (M, O, Y, G) {
        (M.isVector4 ? se.set(M.x, M.y, M.z, M.w) : se.set(M, O, Y, G),
          x.scissor(it.copy(se).multiplyScalar(at).round()));
      }),
      (this.getScissorTest = function () {
        return Gt;
      }),
      (this.setScissorTest = function (M) {
        x.setScissorTest((Gt = M));
      }),
      (this.setOpaqueSort = function (M) {
        At = M;
      }),
      (this.setTransparentSort = function (M) {
        zt = M;
      }),
      (this.getClearColor = function (M) {
        return M.copy(qt.getClearColor());
      }),
      (this.setClearColor = function () {
        qt.setClearColor(...arguments);
      }),
      (this.getClearAlpha = function () {
        return qt.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        qt.setClearAlpha(...arguments);
      }),
      (this.clear = function (M = !0, O = !0, Y = !0) {
        let G = 0;
        if (M) {
          let H = !1;
          if (D !== null) {
            let Mt = D.texture.format;
            H = m.has(Mt);
          }
          if (H) {
            let Mt = D.texture.type,
              wt = p.has(Mt),
              vt = qt.getClearColor(),
              Tt = qt.getClearAlpha(),
              Pt = vt.r,
              Yt = vt.g,
              Qt = vt.b;
            wt
              ? ((b[0] = Pt),
                (b[1] = Yt),
                (b[2] = Qt),
                (b[3] = Tt),
                P.clearBufferuiv(P.COLOR, 0, b))
              : ((w[0] = Pt),
                (w[1] = Yt),
                (w[2] = Qt),
                (w[3] = Tt),
                P.clearBufferiv(P.COLOR, 0, w));
          } else G |= P.COLOR_BUFFER_BIT;
        }
        (O && ((G |= P.DEPTH_BUFFER_BIT), this.state.buffers.depth.setMask(!0)),
          Y &&
            ((G |= P.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          G !== 0 && P.clear(G));
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.setNodesHandler = function (M) {
        (M.setRenderer(this), (U = M));
      }),
      (this.dispose = function () {
        (e.removeEventListener("webglcontextlost", ye, !1),
          e.removeEventListener("webglcontextrestored", ue, !1),
          e.removeEventListener("webglcontextcreationerror", un, !1),
          qt.dispose(),
          _t.dispose(),
          pt.dispose(),
          W.dispose(),
          ot.dispose(),
          tt.dispose(),
          St.dispose(),
          nt.dispose(),
          ft.dispose(),
          Et.dispose(),
          Et.removeEventListener("sessionstart", Yc),
          Et.removeEventListener("sessionend", Zc),
          ui.stop());
      }));
    function ye(M) {
      (M.preventDefault(), oc("WebGLRenderer: Context Lost."), (I = !0));
    }
    function ue() {
      (oc("WebGLRenderer: Context Restored."), (I = !1));
      let M = z.autoReset,
        O = Bt.enabled,
        Y = Bt.autoUpdate,
        G = Bt.needsUpdate,
        H = Bt.type;
      (Ct(),
        (z.autoReset = M),
        (Bt.enabled = O),
        (Bt.autoUpdate = Y),
        (Bt.needsUpdate = G),
        (Bt.type = H));
    }
    function un(M) {
      Ot(
        "WebGLRenderer: A WebGL context could not be created. Reason: ",
        M.statusMessage,
      );
    }
    function dn(M) {
      let O = M.target;
      (O.removeEventListener("dispose", dn), xd(O));
    }
    function xd(M) {
      (yd(M), W.remove(M));
    }
    function yd(M) {
      let O = W.get(M).programs;
      O !== void 0 &&
        (O.forEach(function (Y) {
          ft.releaseProgram(Y);
        }),
        M.isShaderMaterial && ft.releaseShaderCache(M));
    }
    this.renderBufferDirect = function (M, O, Y, G, H, Mt) {
      O === null && (O = Rt);
      let wt = H.isMesh && H.matrixWorld.determinantAffine() < 0,
        vt = Sd(M, O, Y, G, H);
      x.setMaterial(G, wt);
      let Tt = Y.index,
        Pt = 1;
      if (G.wireframe === !0) {
        if (((Tt = $.getWireframeAttribute(Y)), Tt === void 0)) return;
        Pt = 2;
      }
      let Yt = Y.drawRange,
        Qt = Y.attributes.position,
        Lt = Yt.start * Pt,
        oe = (Yt.start + Yt.count) * Pt;
      (Mt !== null &&
        ((Lt = Math.max(Lt, Mt.start * Pt)),
        (oe = Math.min(oe, (Mt.start + Mt.count) * Pt))),
        Tt !== null
          ? ((Lt = Math.max(Lt, 0)), (oe = Math.min(oe, Tt.count)))
          : Qt != null &&
            ((Lt = Math.max(Lt, 0)), (oe = Math.min(oe, Qt.count))));
      let Me = oe - Lt;
      if (Me < 0 || Me === 1 / 0) return;
      St.setup(H, G, vt, Y, Tt);
      let ve,
        le = dt;
      if (
        (Tt !== null && ((ve = ht.get(Tt)), (le = j), le.setIndex(ve)),
        H.isMesh)
      )
        G.wireframe === !0
          ? (x.setLineWidth(G.wireframeLinewidth * Xt()), le.setMode(P.LINES))
          : le.setMode(P.TRIANGLES);
      else if (H.isLine) {
        let Ne = G.linewidth;
        (Ne === void 0 && (Ne = 1),
          x.setLineWidth(Ne * Xt()),
          H.isLineSegments
            ? le.setMode(P.LINES)
            : H.isLineLoop
              ? le.setMode(P.LINE_LOOP)
              : le.setMode(P.LINE_STRIP));
      } else
        H.isPoints
          ? le.setMode(P.POINTS)
          : H.isSprite && le.setMode(P.TRIANGLES);
      if (H.isBatchedMesh)
        if (jt.get("WEBGL_multi_draw"))
          le.renderMultiDraw(
            H._multiDrawStarts,
            H._multiDrawCounts,
            H._multiDrawCount,
          );
        else {
          let Ne = H._multiDrawStarts,
            bt = H._multiDrawCounts,
            We = H._multiDrawCount,
            ie = Tt ? ht.get(Tt).bytesPerElement : 1,
            Qe = W.get(G).currentProgram.getUniforms();
          for (let fn = 0; fn < We; fn++)
            (Qe.setValue(P, "_gl_DrawID", fn), le.render(Ne[fn] / ie, bt[fn]));
        }
      else if (H.isInstancedMesh) le.renderInstances(Lt, Me, H.count);
      else if (Y.isInstancedBufferGeometry) {
        let Ne = Y._maxInstanceCount !== void 0 ? Y._maxInstanceCount : 1 / 0,
          bt = Math.min(Y.instanceCount, Ne);
        le.renderInstances(Lt, Me, bt);
      } else le.render(Lt, Me);
    };
    function qc(M, O, Y) {
      M.transparent === !0 && M.side === wn && M.forceSinglePass === !1
        ? ((M.side = Ve),
          (M.needsUpdate = !0),
          ar(M, O, Y),
          (M.side = Fn),
          (M.needsUpdate = !0),
          ar(M, O, Y),
          (M.side = wn))
        : ar(M, O, Y);
    }
    ((this.compile = function (M, O, Y = null) {
      (Y === null && (Y = M),
        (T = pt.get(Y)),
        T.init(O),
        _.push(T),
        Y.traverseVisible(function (H) {
          H.isLight &&
            H.layers.test(O.layers) &&
            (T.pushLight(H), H.castShadow && T.pushShadow(H));
        }),
        M !== Y &&
          M.traverseVisible(function (H) {
            H.isLight &&
              H.layers.test(O.layers) &&
              (T.pushLight(H), H.castShadow && T.pushShadow(H));
          }),
        T.setupLights());
      let G = new Set();
      return (
        M.traverse(function (H) {
          if (!(H.isMesh || H.isPoints || H.isLine || H.isSprite)) return;
          let Mt = H.material;
          if (Mt)
            if (Array.isArray(Mt))
              for (let wt = 0; wt < Mt.length; wt++) {
                let vt = Mt[wt];
                (qc(vt, Y, H), G.add(vt));
              }
            else (qc(Mt, Y, H), G.add(Mt));
        }),
        (T = _.pop()),
        G
      );
    }),
      (this.compileAsync = function (M, O, Y = null) {
        let G = this.compile(M, O, Y);
        return new Promise((H) => {
          function Mt() {
            if (
              (G.forEach(function (wt) {
                W.get(wt).currentProgram.isReady() && G.delete(wt);
              }),
              G.size === 0)
            ) {
              H(M);
              return;
            }
            setTimeout(Mt, 10);
          }
          jt.get("KHR_parallel_shader_compile") !== null
            ? Mt()
            : setTimeout(Mt, 10);
        });
      }));
    let Uo = null;
    function vd(M) {
      Uo && Uo(M);
    }
    function Yc() {
      ui.stop();
    }
    function Zc() {
      ui.start();
    }
    let ui = new Zu();
    (ui.setAnimationLoop(vd),
      typeof self < "u" && ui.setContext(self),
      (this.setAnimationLoop = function (M) {
        ((Uo = M), Et.setAnimationLoop(M), M === null ? ui.stop() : ui.start());
      }),
      Et.addEventListener("sessionstart", Yc),
      Et.addEventListener("sessionend", Zc),
      (this.render = function (M, O) {
        if (O !== void 0 && O.isCamera !== !0) {
          Ot(
            "WebGLRenderer.render: camera is not an instance of THREE.Camera.",
          );
          return;
        }
        if (I === !0) return;
        U !== null && U.renderStart(M, O);
        let Y = Et.enabled === !0 && Et.isPresenting === !0,
          G = S !== null && (D === null || Y) && S.begin(C, D);
        if (
          (M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(),
          O.parent === null &&
            O.matrixWorldAutoUpdate === !0 &&
            O.updateMatrixWorld(),
          Et.enabled === !0 &&
            Et.isPresenting === !0 &&
            (S === null || S.isCompositing() === !1) &&
            (Et.cameraAutoUpdate === !0 && Et.updateCamera(O),
            (O = Et.getCamera())),
          M.isScene === !0 && M.onBeforeRender(C, M, O, D),
          (T = pt.get(M, _.length)),
          T.init(O),
          (T.state.textureUnits = J.getTextureUnits()),
          _.push(T),
          yt.multiplyMatrices(O.projectionMatrix, O.matrixWorldInverse),
          et.setFromProjectionMatrix(yt, rn, O.reversedDepth),
          (st = this.localClippingEnabled),
          (rt = Dt.init(this.clippingPlanes, st)),
          (A = _t.get(M, R.length)),
          A.init(),
          R.push(A),
          Et.enabled === !0 && Et.isPresenting === !0)
        ) {
          let wt = C.xr.getDepthSensingMesh();
          wt !== null && Fo(wt, O, -1 / 0, C.sortObjects);
        }
        (Fo(M, O, 0, C.sortObjects),
          A.finish(),
          C.sortObjects === !0 && A.sort(At, zt, O.reversedDepth),
          (kt =
            Et.enabled === !1 ||
            Et.isPresenting === !1 ||
            Et.hasDepthSensing() === !1),
          kt && qt.addToRenderList(A, M),
          this.info.render.frame++,
          this.info.autoReset === !0 && this.info.reset(),
          rt === !0 && Dt.beginShadows());
        let H = T.state.shadowsArray;
        if (
          (Bt.render(H, M, O),
          rt === !0 && Dt.endShadows(),
          (G && S.hasRenderPass()) === !1)
        ) {
          let wt = A.opaque,
            vt = A.transmissive;
          if ((T.setupLights(), O.isArrayCamera)) {
            let Tt = O.cameras;
            if (vt.length > 0)
              for (let Pt = 0, Yt = Tt.length; Pt < Yt; Pt++) {
                let Qt = Tt[Pt];
                $c(wt, vt, M, Qt);
              }
            kt && qt.render(M);
            for (let Pt = 0, Yt = Tt.length; Pt < Yt; Pt++) {
              let Qt = Tt[Pt];
              Jc(A, M, Qt, Qt.viewport);
            }
          } else
            (vt.length > 0 && $c(wt, vt, M, O),
              kt && qt.render(M),
              Jc(A, M, O));
        }
        (D !== null &&
          V === 0 &&
          (J.updateMultisampleRenderTarget(D), J.updateRenderTargetMipmap(D)),
          G && S.end(C),
          M.isScene === !0 && M.onAfterRender(C, M, O),
          St.resetDefaultState(),
          (B = -1),
          (q = null),
          _.pop(),
          _.length > 0
            ? ((T = _[_.length - 1]),
              J.setTextureUnits(T.state.textureUnits),
              rt === !0 && Dt.setGlobalState(C.clippingPlanes, T.state.camera))
            : (T = null),
          R.pop(),
          R.length > 0 ? (A = R[R.length - 1]) : (A = null),
          U !== null && U.renderEnd());
      }));
    function Fo(M, O, Y, G) {
      if (M.visible === !1) return;
      if (M.layers.test(O.layers)) {
        if (M.isGroup) Y = M.renderOrder;
        else if (M.isLOD) M.autoUpdate === !0 && M.update(O);
        else if (M.isLightProbeGrid) T.pushLightProbeGrid(M);
        else if (M.isLight) (T.pushLight(M), M.castShadow && T.pushShadow(M));
        else if (M.isSprite) {
          if (!M.frustumCulled || et.intersectsSprite(M)) {
            G && Ft.setFromMatrixPosition(M.matrixWorld).applyMatrix4(yt);
            let wt = tt.update(M),
              vt = M.material;
            vt.visible && A.push(M, wt, vt, Y, Ft.z, null);
          }
        } else if (
          (M.isMesh || M.isLine || M.isPoints) &&
          (!M.frustumCulled || et.intersectsObject(M))
        ) {
          let wt = tt.update(M),
            vt = M.material;
          if (
            (G &&
              (M.boundingSphere !== void 0
                ? (M.boundingSphere === null && M.computeBoundingSphere(),
                  Ft.copy(M.boundingSphere.center))
                : (wt.boundingSphere === null && wt.computeBoundingSphere(),
                  Ft.copy(wt.boundingSphere.center)),
              Ft.applyMatrix4(M.matrixWorld).applyMatrix4(yt)),
            Array.isArray(vt))
          ) {
            let Tt = wt.groups;
            for (let Pt = 0, Yt = Tt.length; Pt < Yt; Pt++) {
              let Qt = Tt[Pt],
                Lt = vt[Qt.materialIndex];
              Lt && Lt.visible && A.push(M, wt, Lt, Y, Ft.z, Qt);
            }
          } else vt.visible && A.push(M, wt, vt, Y, Ft.z, null);
        }
      }
      let Mt = M.children;
      for (let wt = 0, vt = Mt.length; wt < vt; wt++) Fo(Mt[wt], O, Y, G);
    }
    function Jc(M, O, Y, G) {
      let { opaque: H, transmissive: Mt, transparent: wt } = M;
      (T.setupLightsView(Y),
        rt === !0 && Dt.setGlobalState(C.clippingPlanes, Y),
        G && x.viewport(K.copy(G)),
        H.length > 0 && rr(H, O, Y),
        Mt.length > 0 && rr(Mt, O, Y),
        wt.length > 0 && rr(wt, O, Y),
        x.buffers.depth.setTest(!0),
        x.buffers.depth.setMask(!0),
        x.buffers.color.setMask(!0),
        x.setPolygonOffset(!1));
    }
    function $c(M, O, Y, G) {
      if ((Y.isScene === !0 ? Y.overrideMaterial : null) !== null) return;
      if (T.state.transmissionRenderTarget[G.id] === void 0) {
        let Lt =
          jt.has("EXT_color_buffer_half_float") ||
          jt.has("EXT_color_buffer_float");
        T.state.transmissionRenderTarget[G.id] = new Ye(1, 1, {
          generateMipmaps: !0,
          type: Lt ? Tn : He,
          minFilter: ai,
          samples: Math.max(4, E.samples),
          stencilBuffer: r,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: ee.workingColorSpace,
        });
      }
      let Mt = T.state.transmissionRenderTarget[G.id],
        wt = G.viewport || K;
      Mt.setSize(
        wt.z * C.transmissionResolutionScale,
        wt.w * C.transmissionResolutionScale,
      );
      let vt = C.getRenderTarget(),
        Tt = C.getActiveCubeFace(),
        Pt = C.getActiveMipmapLevel();
      (C.setRenderTarget(Mt),
        C.getClearColor(Vt),
        (Kt = C.getClearAlpha()),
        Kt < 1 && C.setClearColor(16777215, 0.5),
        C.clear(),
        kt && qt.render(Y));
      let Yt = C.toneMapping;
      C.toneMapping = on;
      let Qt = G.viewport;
      if (
        (G.viewport !== void 0 && (G.viewport = void 0),
        T.setupLightsView(G),
        rt === !0 && Dt.setGlobalState(C.clippingPlanes, G),
        rr(M, Y, G),
        J.updateMultisampleRenderTarget(Mt),
        J.updateRenderTargetMipmap(Mt),
        jt.has("WEBGL_multisampled_render_to_texture") === !1)
      ) {
        let Lt = !1;
        for (let oe = 0, Me = O.length; oe < Me; oe++) {
          let ve = O[oe],
            { object: le, geometry: Ne, material: bt, group: We } = ve;
          if (bt.side === wn && le.layers.test(G.layers)) {
            let ie = bt.side;
            ((bt.side = Ve),
              (bt.needsUpdate = !0),
              Kc(le, Y, G, Ne, bt, We),
              (bt.side = ie),
              (bt.needsUpdate = !0),
              (Lt = !0));
          }
        }
        Lt === !0 &&
          (J.updateMultisampleRenderTarget(Mt), J.updateRenderTargetMipmap(Mt));
      }
      (C.setRenderTarget(vt, Tt, Pt),
        C.setClearColor(Vt, Kt),
        Qt !== void 0 && (G.viewport = Qt),
        (C.toneMapping = Yt));
    }
    function rr(M, O, Y) {
      let G = O.isScene === !0 ? O.overrideMaterial : null;
      for (let H = 0, Mt = M.length; H < Mt; H++) {
        let wt = M[H],
          { object: vt, geometry: Tt, group: Pt } = wt,
          Yt = wt.material;
        (Yt.allowOverride === !0 && G !== null && (Yt = G),
          vt.layers.test(Y.layers) && Kc(vt, O, Y, Tt, Yt, Pt));
      }
    }
    function Kc(M, O, Y, G, H, Mt) {
      (M.onBeforeRender(C, O, Y, G, H, Mt),
        M.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse, M.matrixWorld),
        M.normalMatrix.getNormalMatrix(M.modelViewMatrix),
        H.onBeforeRender(C, O, Y, G, M, Mt),
        H.transparent === !0 && H.side === wn && H.forceSinglePass === !1
          ? ((H.side = Ve),
            (H.needsUpdate = !0),
            C.renderBufferDirect(Y, O, G, H, M, Mt),
            (H.side = Fn),
            (H.needsUpdate = !0),
            C.renderBufferDirect(Y, O, G, H, M, Mt),
            (H.side = wn))
          : C.renderBufferDirect(Y, O, G, H, M, Mt),
        M.onAfterRender(C, O, Y, G, H, Mt));
    }
    function ar(M, O, Y) {
      O.isScene !== !0 && (O = Rt);
      let G = W.get(M),
        H = T.state.lights,
        Mt = T.state.shadowsArray,
        wt = H.state.version,
        vt = ft.getParameters(
          M,
          H.state,
          Mt,
          O,
          Y,
          T.state.lightProbeGridArray,
        ),
        Tt = ft.getProgramCacheKey(vt),
        Pt = G.programs;
      ((G.environment =
        M.isMeshStandardMaterial ||
        M.isMeshLambertMaterial ||
        M.isMeshPhongMaterial
          ? O.environment
          : null),
        (G.fog = O.fog));
      let Yt =
        M.isMeshStandardMaterial ||
        (M.isMeshLambertMaterial && !M.envMap) ||
        (M.isMeshPhongMaterial && !M.envMap);
      ((G.envMap = ot.get(M.envMap || G.environment, Yt)),
        (G.envMapRotation =
          G.environment !== null && M.envMap === null
            ? O.environmentRotation
            : M.envMapRotation),
        Pt === void 0 &&
          (M.addEventListener("dispose", dn),
          (Pt = new Map()),
          (G.programs = Pt)));
      let Qt = Pt.get(Tt);
      if (Qt !== void 0) {
        if (G.currentProgram === Qt && G.lightsStateVersion === wt)
          return (jc(M, vt), Qt);
      } else
        ((vt.uniforms = ft.getUniforms(M)),
          U !== null && M.isNodeMaterial && U.build(M, Y, vt),
          M.onBeforeCompile(vt, C),
          (Qt = ft.acquireProgram(vt, Tt)),
          Pt.set(Tt, Qt),
          (G.uniforms = vt.uniforms));
      let Lt = G.uniforms;
      return (
        ((!M.isShaderMaterial && !M.isRawShaderMaterial) ||
          M.clipping === !0) &&
          (Lt.clippingPlanes = Dt.uniform),
        jc(M, vt),
        (G.needsLights = wd(M)),
        (G.lightsStateVersion = wt),
        G.needsLights &&
          ((Lt.ambientLightColor.value = H.state.ambient),
          (Lt.lightProbe.value = H.state.probe),
          (Lt.directionalLights.value = H.state.directional),
          (Lt.directionalLightShadows.value = H.state.directionalShadow),
          (Lt.spotLights.value = H.state.spot),
          (Lt.spotLightShadows.value = H.state.spotShadow),
          (Lt.rectAreaLights.value = H.state.rectArea),
          (Lt.ltc_1.value = H.state.rectAreaLTC1),
          (Lt.ltc_2.value = H.state.rectAreaLTC2),
          (Lt.pointLights.value = H.state.point),
          (Lt.pointLightShadows.value = H.state.pointShadow),
          (Lt.hemisphereLights.value = H.state.hemi),
          (Lt.directionalShadowMatrix.value = H.state.directionalShadowMatrix),
          (Lt.spotLightMatrix.value = H.state.spotLightMatrix),
          (Lt.spotLightMap.value = H.state.spotLightMap),
          (Lt.pointShadowMatrix.value = H.state.pointShadowMatrix)),
        (G.lightProbeGrid = T.state.lightProbeGridArray.length > 0),
        (G.currentProgram = Qt),
        (G.uniformsList = null),
        Qt
      );
    }
    function Qc(M) {
      if (M.uniformsList === null) {
        let O = M.currentProgram.getUniforms();
        M.uniformsList = os.seqWithValue(O.seq, M.uniforms);
      }
      return M.uniformsList;
    }
    function jc(M, O) {
      let Y = W.get(M);
      ((Y.outputColorSpace = O.outputColorSpace),
        (Y.batching = O.batching),
        (Y.batchingColor = O.batchingColor),
        (Y.instancing = O.instancing),
        (Y.instancingColor = O.instancingColor),
        (Y.instancingMorph = O.instancingMorph),
        (Y.skinning = O.skinning),
        (Y.morphTargets = O.morphTargets),
        (Y.morphNormals = O.morphNormals),
        (Y.morphColors = O.morphColors),
        (Y.morphTargetsCount = O.morphTargetsCount),
        (Y.numClippingPlanes = O.numClippingPlanes),
        (Y.numIntersection = O.numClipIntersection),
        (Y.vertexAlphas = O.vertexAlphas),
        (Y.vertexTangents = O.vertexTangents),
        (Y.toneMapping = O.toneMapping));
    }
    function Md(M, O) {
      if (M.length === 0) return null;
      if (M.length === 1) return M[0].texture !== null ? M[0] : null;
      v.setFromMatrixPosition(O.matrixWorld);
      for (let Y = 0, G = M.length; Y < G; Y++) {
        let H = M[Y];
        if (H.texture !== null && H.boundingBox.containsPoint(v)) return H;
      }
      return null;
    }
    function Sd(M, O, Y, G, H) {
      (O.isScene !== !0 && (O = Rt), J.resetTextureUnits());
      let Mt = O.fog,
        wt =
          G.isMeshStandardMaterial ||
          G.isMeshLambertMaterial ||
          G.isMeshPhongMaterial
            ? O.environment
            : null,
        vt =
          D === null
            ? C.outputColorSpace
            : D.isXRRenderTarget === !0
              ? D.texture.colorSpace
              : ee.workingColorSpace,
        Tt =
          G.isMeshStandardMaterial ||
          (G.isMeshLambertMaterial && !G.envMap) ||
          (G.isMeshPhongMaterial && !G.envMap),
        Pt = ot.get(G.envMap || wt, Tt),
        Yt =
          G.vertexColors === !0 &&
          !!Y.attributes.color &&
          Y.attributes.color.itemSize === 4,
        Qt = !!Y.attributes.tangent && (!!G.normalMap || G.anisotropy > 0),
        Lt = !!Y.morphAttributes.position,
        oe = !!Y.morphAttributes.normal,
        Me = !!Y.morphAttributes.color,
        ve = on;
      G.toneMapped &&
        (D === null || D.isXRRenderTarget === !0) &&
        (ve = C.toneMapping);
      let le =
          Y.morphAttributes.position ||
          Y.morphAttributes.normal ||
          Y.morphAttributes.color,
        Ne = le !== void 0 ? le.length : 0,
        bt = W.get(G),
        We = T.state.lights;
      if (rt === !0 && (st === !0 || M !== q)) {
        let de = M === q && G.id === B;
        Dt.setState(G, M, de);
      }
      let ie = !1;
      G.version === bt.__version
        ? ((bt.needsLights && bt.lightsStateVersion !== We.state.version) ||
            bt.outputColorSpace !== vt ||
            (H.isBatchedMesh && bt.batching === !1) ||
            (!H.isBatchedMesh && bt.batching === !0) ||
            (H.isBatchedMesh &&
              bt.batchingColor === !0 &&
              H.colorTexture === null) ||
            (H.isBatchedMesh &&
              bt.batchingColor === !1 &&
              H.colorTexture !== null) ||
            (H.isInstancedMesh && bt.instancing === !1) ||
            (!H.isInstancedMesh && bt.instancing === !0) ||
            (H.isSkinnedMesh && bt.skinning === !1) ||
            (!H.isSkinnedMesh && bt.skinning === !0) ||
            (H.isInstancedMesh &&
              bt.instancingColor === !0 &&
              H.instanceColor === null) ||
            (H.isInstancedMesh &&
              bt.instancingColor === !1 &&
              H.instanceColor !== null) ||
            (H.isInstancedMesh &&
              bt.instancingMorph === !0 &&
              H.morphTexture === null) ||
            (H.isInstancedMesh &&
              bt.instancingMorph === !1 &&
              H.morphTexture !== null) ||
            bt.envMap !== Pt ||
            (G.fog === !0 && bt.fog !== Mt) ||
            (bt.numClippingPlanes !== void 0 &&
              (bt.numClippingPlanes !== Dt.numPlanes ||
                bt.numIntersection !== Dt.numIntersection)) ||
            bt.vertexAlphas !== Yt ||
            bt.vertexTangents !== Qt ||
            bt.morphTargets !== Lt ||
            bt.morphNormals !== oe ||
            bt.morphColors !== Me ||
            bt.toneMapping !== ve ||
            bt.morphTargetsCount !== Ne ||
            !!bt.lightProbeGrid != T.state.lightProbeGridArray.length > 0) &&
          (ie = !0)
        : ((ie = !0), (bt.__version = G.version));
      let Qe = bt.currentProgram;
      ie === !0 &&
        ((Qe = ar(G, O, H)),
        U && G.isNodeMaterial && U.onUpdateProgram(G, Qe, bt));
      let fn = !1,
        Hn = !1,
        Ci = !1,
        ce = Qe.getUniforms(),
        Se = bt.uniforms;
      if (
        (x.useProgram(Qe.program) && ((fn = !0), (Hn = !0), (Ci = !0)),
        G.id !== B && ((B = G.id), (Hn = !0)),
        bt.needsLights)
      ) {
        let de = Md(T.state.lightProbeGridArray, H);
        bt.lightProbeGrid !== de && ((bt.lightProbeGrid = de), (Hn = !0));
      }
      if (fn || q !== M) {
        (x.buffers.depth.getReversed() &&
          M.reversedDepth !== !0 &&
          ((M._reversedDepth = !0), M.updateProjectionMatrix()),
          ce.setValue(P, "projectionMatrix", M.projectionMatrix),
          ce.setValue(P, "viewMatrix", M.matrixWorldInverse));
        let Xn = ce.map.cameraPosition;
        (Xn !== void 0 &&
          Xn.setValue(P, gt.setFromMatrixPosition(M.matrixWorld)),
          E.logarithmicDepthBuffer &&
            ce.setValue(
              P,
              "logDepthBufFC",
              2 / (Math.log(M.far + 1) / Math.LN2),
            ),
          (G.isMeshPhongMaterial ||
            G.isMeshToonMaterial ||
            G.isMeshLambertMaterial ||
            G.isMeshBasicMaterial ||
            G.isMeshStandardMaterial ||
            G.isShaderMaterial) &&
            ce.setValue(P, "isOrthographic", M.isOrthographicCamera === !0),
          q !== M && ((q = M), (Hn = !0), (Ci = !0)));
      }
      if (
        (bt.needsLights &&
          (We.state.directionalShadowMap.length > 0 &&
            ce.setValue(
              P,
              "directionalShadowMap",
              We.state.directionalShadowMap,
              J,
            ),
          We.state.spotShadowMap.length > 0 &&
            ce.setValue(P, "spotShadowMap", We.state.spotShadowMap, J),
          We.state.pointShadowMap.length > 0 &&
            ce.setValue(P, "pointShadowMap", We.state.pointShadowMap, J)),
        H.isSkinnedMesh)
      ) {
        (ce.setOptional(P, H, "bindMatrix"),
          ce.setOptional(P, H, "bindMatrixInverse"));
        let de = H.skeleton;
        de &&
          (de.boneTexture === null && de.computeBoneTexture(),
          ce.setValue(P, "boneTexture", de.boneTexture, J));
      }
      H.isBatchedMesh &&
        (ce.setOptional(P, H, "batchingTexture"),
        ce.setValue(P, "batchingTexture", H._matricesTexture, J),
        ce.setOptional(P, H, "batchingIdTexture"),
        ce.setValue(P, "batchingIdTexture", H._indirectTexture, J),
        ce.setOptional(P, H, "batchingColorTexture"),
        H._colorsTexture !== null &&
          ce.setValue(P, "batchingColorTexture", H._colorsTexture, J));
      let Wn = Y.morphAttributes;
      if (
        ((Wn.position !== void 0 ||
          Wn.normal !== void 0 ||
          Wn.color !== void 0) &&
          N.update(H, Y, Qe),
        (Hn || bt.receiveShadow !== H.receiveShadow) &&
          ((bt.receiveShadow = H.receiveShadow),
          ce.setValue(P, "receiveShadow", H.receiveShadow)),
        (G.isMeshStandardMaterial ||
          G.isMeshLambertMaterial ||
          G.isMeshPhongMaterial) &&
          G.envMap === null &&
          O.environment !== null &&
          (Se.envMapIntensity.value = O.environmentIntensity),
        Se.dfgLUT !== void 0 && (Se.dfgLUT.value = x_()),
        Hn)
      ) {
        if (
          (ce.setValue(P, "toneMappingExposure", C.toneMappingExposure),
          bt.needsLights && bd(Se, Ci),
          Mt && G.fog === !0 && It.refreshFogUniforms(Se, Mt),
          It.refreshMaterialUniforms(
            Se,
            G,
            at,
            ct,
            T.state.transmissionRenderTarget[M.id],
          ),
          bt.needsLights && bt.lightProbeGrid)
        ) {
          let de = bt.lightProbeGrid;
          ((Se.probesSH.value = de.texture),
            Se.probesMin.value.copy(de.boundingBox.min),
            Se.probesMax.value.copy(de.boundingBox.max),
            Se.probesResolution.value.copy(de.resolution));
        }
        os.upload(P, Qc(bt), Se, J);
      }
      if (
        (G.isShaderMaterial &&
          G.uniformsNeedUpdate === !0 &&
          (os.upload(P, Qc(bt), Se, J), (G.uniformsNeedUpdate = !1)),
        G.isSpriteMaterial && ce.setValue(P, "center", H.center),
        ce.setValue(P, "modelViewMatrix", H.modelViewMatrix),
        ce.setValue(P, "normalMatrix", H.normalMatrix),
        ce.setValue(P, "modelMatrix", H.matrixWorld),
        G.uniformsGroups !== void 0)
      ) {
        let de = G.uniformsGroups;
        for (let Xn = 0, Ri = de.length; Xn < Ri; Xn++) {
          let th = de[Xn];
          (nt.update(th, Qe), nt.bind(th, Qe));
        }
      }
      return Qe;
    }
    function bd(M, O) {
      ((M.ambientLightColor.needsUpdate = O),
        (M.lightProbe.needsUpdate = O),
        (M.directionalLights.needsUpdate = O),
        (M.directionalLightShadows.needsUpdate = O),
        (M.pointLights.needsUpdate = O),
        (M.pointLightShadows.needsUpdate = O),
        (M.spotLights.needsUpdate = O),
        (M.spotLightShadows.needsUpdate = O),
        (M.rectAreaLights.needsUpdate = O),
        (M.hemisphereLights.needsUpdate = O));
    }
    function wd(M) {
      return (
        M.isMeshLambertMaterial ||
        M.isMeshToonMaterial ||
        M.isMeshPhongMaterial ||
        M.isMeshStandardMaterial ||
        M.isShadowMaterial ||
        (M.isShaderMaterial && M.lights === !0)
      );
    }
    ((this.getActiveCubeFace = function () {
      return X;
    }),
      (this.getActiveMipmapLevel = function () {
        return V;
      }),
      (this.getRenderTarget = function () {
        return D;
      }),
      (this.setRenderTargetTextures = function (M, O, Y) {
        let G = W.get(M);
        ((G.__autoAllocateDepthBuffer = M.resolveDepthBuffer === !1),
          G.__autoAllocateDepthBuffer === !1 && (G.__useRenderToTexture = !1),
          (W.get(M.texture).__webglTexture = O),
          (W.get(M.depthTexture).__webglTexture = G.__autoAllocateDepthBuffer
            ? void 0
            : Y),
          (G.__hasExternalTextures = !0));
      }),
      (this.setRenderTargetFramebuffer = function (M, O) {
        let Y = W.get(M);
        ((Y.__webglFramebuffer = O),
          (Y.__useDefaultFramebuffer = O === void 0));
      }),
      (this.setRenderTarget = function (M, O = 0, Y = 0) {
        ((D = M), (X = O), (V = Y));
        let G = null,
          H = !1,
          Mt = !1;
        if (M) {
          let vt = W.get(M);
          if (vt.__useDefaultFramebuffer !== void 0) {
            (x.bindFramebuffer(P.FRAMEBUFFER, vt.__webglFramebuffer),
              K.copy(M.viewport),
              it.copy(M.scissor),
              (lt = M.scissorTest),
              x.viewport(K),
              x.scissor(it),
              x.setScissorTest(lt),
              (B = -1));
            return;
          } else if (vt.__webglFramebuffer === void 0) J.setupRenderTarget(M);
          else if (vt.__hasExternalTextures)
            J.rebindTextures(
              M,
              W.get(M.texture).__webglTexture,
              W.get(M.depthTexture).__webglTexture,
            );
          else if (M.depthBuffer) {
            let Yt = M.depthTexture;
            if (vt.__boundDepthTexture !== Yt) {
              if (
                Yt !== null &&
                W.has(Yt) &&
                (M.width !== Yt.image.width || M.height !== Yt.image.height)
              )
                throw new Error(
                  "THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.",
                );
              J.setupDepthRenderbuffer(M);
            }
          }
          let Tt = M.texture;
          (Tt.isData3DTexture ||
            Tt.isDataArrayTexture ||
            Tt.isCompressedArrayTexture) &&
            (Mt = !0);
          let Pt = W.get(M).__webglFramebuffer;
          (M.isWebGLCubeRenderTarget
            ? (Array.isArray(Pt[O]) ? (G = Pt[O][Y]) : (G = Pt[O]), (H = !0))
            : M.samples > 0 && J.useMultisampledRTT(M) === !1
              ? (G = W.get(M).__webglMultisampledFramebuffer)
              : Array.isArray(Pt)
                ? (G = Pt[Y])
                : (G = Pt),
            K.copy(M.viewport),
            it.copy(M.scissor),
            (lt = M.scissorTest));
        } else
          (K.copy(Ut).multiplyScalar(at).floor(),
            it.copy(se).multiplyScalar(at).floor(),
            (lt = Gt));
        if (
          (Y !== 0 && (G = Z),
          x.bindFramebuffer(P.FRAMEBUFFER, G) && x.drawBuffers(M, G),
          x.viewport(K),
          x.scissor(it),
          x.setScissorTest(lt),
          H)
        ) {
          let vt = W.get(M.texture);
          P.framebufferTexture2D(
            P.FRAMEBUFFER,
            P.COLOR_ATTACHMENT0,
            P.TEXTURE_CUBE_MAP_POSITIVE_X + O,
            vt.__webglTexture,
            Y,
          );
        } else if (Mt) {
          let vt = O;
          for (let Tt = 0; Tt < M.textures.length; Tt++) {
            let Pt = W.get(M.textures[Tt]);
            P.framebufferTextureLayer(
              P.FRAMEBUFFER,
              P.COLOR_ATTACHMENT0 + Tt,
              Pt.__webglTexture,
              Y,
              vt,
            );
          }
        } else if (M !== null && Y !== 0) {
          let vt = W.get(M.texture);
          P.framebufferTexture2D(
            P.FRAMEBUFFER,
            P.COLOR_ATTACHMENT0,
            P.TEXTURE_2D,
            vt.__webglTexture,
            Y,
          );
        }
        B = -1;
      }),
      (this.readRenderTargetPixels = function (M, O, Y, G, H, Mt, wt, vt = 0) {
        if (!(M && M.isWebGLRenderTarget)) {
          Ot(
            "WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
          return;
        }
        let Tt = W.get(M).__webglFramebuffer;
        if ((M.isWebGLCubeRenderTarget && wt !== void 0 && (Tt = Tt[wt]), Tt)) {
          x.bindFramebuffer(P.FRAMEBUFFER, Tt);
          try {
            let Pt = M.textures[vt],
              Yt = Pt.format,
              Qt = Pt.type;
            if (
              (M.textures.length > 1 && P.readBuffer(P.COLOR_ATTACHMENT0 + vt),
              !E.textureFormatReadable(Yt))
            ) {
              Ot(
                "WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.",
              );
              return;
            }
            if (!E.textureTypeReadable(Qt)) {
              Ot(
                "WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
              return;
            }
            O >= 0 &&
              O <= M.width - G &&
              Y >= 0 &&
              Y <= M.height - H &&
              P.readPixels(O, Y, G, H, mt.convert(Yt), mt.convert(Qt), Mt);
          } finally {
            let Pt = D !== null ? W.get(D).__webglFramebuffer : null;
            x.bindFramebuffer(P.FRAMEBUFFER, Pt);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (
        M,
        O,
        Y,
        G,
        H,
        Mt,
        wt,
        vt = 0,
      ) {
        if (!(M && M.isWebGLRenderTarget))
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
        let Tt = W.get(M).__webglFramebuffer;
        if ((M.isWebGLCubeRenderTarget && wt !== void 0 && (Tt = Tt[wt]), Tt))
          if (O >= 0 && O <= M.width - G && Y >= 0 && Y <= M.height - H) {
            x.bindFramebuffer(P.FRAMEBUFFER, Tt);
            let Pt = M.textures[vt],
              Yt = Pt.format,
              Qt = Pt.type;
            if (
              (M.textures.length > 1 && P.readBuffer(P.COLOR_ATTACHMENT0 + vt),
              !E.textureFormatReadable(Yt))
            )
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.",
              );
            if (!E.textureTypeReadable(Qt))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
            let Lt = P.createBuffer();
            (P.bindBuffer(P.PIXEL_PACK_BUFFER, Lt),
              P.bufferData(P.PIXEL_PACK_BUFFER, Mt.byteLength, P.STREAM_READ),
              P.readPixels(O, Y, G, H, mt.convert(Yt), mt.convert(Qt), 0));
            let oe = D !== null ? W.get(D).__webglFramebuffer : null;
            x.bindFramebuffer(P.FRAMEBUFFER, oe);
            let Me = P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return (
              P.flush(),
              await gu(P, Me, 4),
              P.bindBuffer(P.PIXEL_PACK_BUFFER, Lt),
              P.getBufferSubData(P.PIXEL_PACK_BUFFER, 0, Mt),
              P.deleteBuffer(Lt),
              P.deleteSync(Me),
              Mt
            );
          } else
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.",
            );
      }),
      (this.copyFramebufferToTexture = function (M, O = null, Y = 0) {
        let G = Math.pow(2, -Y),
          H = Math.floor(M.image.width * G),
          Mt = Math.floor(M.image.height * G),
          wt = O !== null ? O.x : 0,
          vt = O !== null ? O.y : 0;
        (J.setTexture2D(M, 0),
          P.copyTexSubImage2D(P.TEXTURE_2D, Y, 0, 0, wt, vt, H, Mt),
          x.unbindTexture());
      }),
      (this.copyTextureToTexture = function (
        M,
        O,
        Y = null,
        G = null,
        H = 0,
        Mt = 0,
      ) {
        let wt,
          vt,
          Tt,
          Pt,
          Yt,
          Qt,
          Lt,
          oe,
          Me,
          ve = M.isCompressedTexture ? M.mipmaps[Mt] : M.image;
        if (Y !== null)
          ((wt = Y.max.x - Y.min.x),
            (vt = Y.max.y - Y.min.y),
            (Tt = Y.isBox3 ? Y.max.z - Y.min.z : 1),
            (Pt = Y.min.x),
            (Yt = Y.min.y),
            (Qt = Y.isBox3 ? Y.min.z : 0));
        else {
          let Se = Math.pow(2, -H);
          ((wt = Math.floor(ve.width * Se)),
            (vt = Math.floor(ve.height * Se)),
            M.isDataArrayTexture
              ? (Tt = ve.depth)
              : M.isData3DTexture
                ? (Tt = Math.floor(ve.depth * Se))
                : (Tt = 1),
            (Pt = 0),
            (Yt = 0),
            (Qt = 0));
        }
        G !== null
          ? ((Lt = G.x), (oe = G.y), (Me = G.z))
          : ((Lt = 0), (oe = 0), (Me = 0));
        let le = mt.convert(O.format),
          Ne = mt.convert(O.type),
          bt;
        (O.isData3DTexture
          ? (J.setTexture3D(O, 0), (bt = P.TEXTURE_3D))
          : O.isDataArrayTexture || O.isCompressedArrayTexture
            ? (J.setTexture2DArray(O, 0), (bt = P.TEXTURE_2D_ARRAY))
            : (J.setTexture2D(O, 0), (bt = P.TEXTURE_2D)),
          x.activeTexture(P.TEXTURE0),
          x.pixelStorei(P.UNPACK_FLIP_Y_WEBGL, O.flipY),
          x.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL, O.premultiplyAlpha),
          x.pixelStorei(P.UNPACK_ALIGNMENT, O.unpackAlignment));
        let We = x.getParameter(P.UNPACK_ROW_LENGTH),
          ie = x.getParameter(P.UNPACK_IMAGE_HEIGHT),
          Qe = x.getParameter(P.UNPACK_SKIP_PIXELS),
          fn = x.getParameter(P.UNPACK_SKIP_ROWS),
          Hn = x.getParameter(P.UNPACK_SKIP_IMAGES);
        (x.pixelStorei(P.UNPACK_ROW_LENGTH, ve.width),
          x.pixelStorei(P.UNPACK_IMAGE_HEIGHT, ve.height),
          x.pixelStorei(P.UNPACK_SKIP_PIXELS, Pt),
          x.pixelStorei(P.UNPACK_SKIP_ROWS, Yt),
          x.pixelStorei(P.UNPACK_SKIP_IMAGES, Qt));
        let Ci = M.isDataArrayTexture || M.isData3DTexture,
          ce = O.isDataArrayTexture || O.isData3DTexture;
        if (M.isDepthTexture) {
          let Se = W.get(M),
            Wn = W.get(O),
            de = W.get(Se.__renderTarget),
            Xn = W.get(Wn.__renderTarget);
          (x.bindFramebuffer(P.READ_FRAMEBUFFER, de.__webglFramebuffer),
            x.bindFramebuffer(P.DRAW_FRAMEBUFFER, Xn.__webglFramebuffer));
          for (let Ri = 0; Ri < Tt; Ri++)
            (Ci &&
              (P.framebufferTextureLayer(
                P.READ_FRAMEBUFFER,
                P.COLOR_ATTACHMENT0,
                W.get(M).__webglTexture,
                H,
                Qt + Ri,
              ),
              P.framebufferTextureLayer(
                P.DRAW_FRAMEBUFFER,
                P.COLOR_ATTACHMENT0,
                W.get(O).__webglTexture,
                Mt,
                Me + Ri,
              )),
              P.blitFramebuffer(
                Pt,
                Yt,
                wt,
                vt,
                Lt,
                oe,
                wt,
                vt,
                P.DEPTH_BUFFER_BIT,
                P.NEAREST,
              ));
          (x.bindFramebuffer(P.READ_FRAMEBUFFER, null),
            x.bindFramebuffer(P.DRAW_FRAMEBUFFER, null));
        } else if (H !== 0 || M.isRenderTargetTexture || W.has(M)) {
          let Se = W.get(M),
            Wn = W.get(O);
          (x.bindFramebuffer(P.READ_FRAMEBUFFER, k),
            x.bindFramebuffer(P.DRAW_FRAMEBUFFER, F));
          for (let de = 0; de < Tt; de++)
            (Ci
              ? P.framebufferTextureLayer(
                  P.READ_FRAMEBUFFER,
                  P.COLOR_ATTACHMENT0,
                  Se.__webglTexture,
                  H,
                  Qt + de,
                )
              : P.framebufferTexture2D(
                  P.READ_FRAMEBUFFER,
                  P.COLOR_ATTACHMENT0,
                  P.TEXTURE_2D,
                  Se.__webglTexture,
                  H,
                ),
              ce
                ? P.framebufferTextureLayer(
                    P.DRAW_FRAMEBUFFER,
                    P.COLOR_ATTACHMENT0,
                    Wn.__webglTexture,
                    Mt,
                    Me + de,
                  )
                : P.framebufferTexture2D(
                    P.DRAW_FRAMEBUFFER,
                    P.COLOR_ATTACHMENT0,
                    P.TEXTURE_2D,
                    Wn.__webglTexture,
                    Mt,
                  ),
              H !== 0
                ? P.blitFramebuffer(
                    Pt,
                    Yt,
                    wt,
                    vt,
                    Lt,
                    oe,
                    wt,
                    vt,
                    P.COLOR_BUFFER_BIT,
                    P.NEAREST,
                  )
                : ce
                  ? P.copyTexSubImage3D(bt, Mt, Lt, oe, Me + de, Pt, Yt, wt, vt)
                  : P.copyTexSubImage2D(bt, Mt, Lt, oe, Pt, Yt, wt, vt));
          (x.bindFramebuffer(P.READ_FRAMEBUFFER, null),
            x.bindFramebuffer(P.DRAW_FRAMEBUFFER, null));
        } else
          ce
            ? M.isDataTexture || M.isData3DTexture
              ? P.texSubImage3D(bt, Mt, Lt, oe, Me, wt, vt, Tt, le, Ne, ve.data)
              : O.isCompressedArrayTexture
                ? P.compressedTexSubImage3D(
                    bt,
                    Mt,
                    Lt,
                    oe,
                    Me,
                    wt,
                    vt,
                    Tt,
                    le,
                    ve.data,
                  )
                : P.texSubImage3D(bt, Mt, Lt, oe, Me, wt, vt, Tt, le, Ne, ve)
            : M.isDataTexture
              ? P.texSubImage2D(
                  P.TEXTURE_2D,
                  Mt,
                  Lt,
                  oe,
                  wt,
                  vt,
                  le,
                  Ne,
                  ve.data,
                )
              : M.isCompressedTexture
                ? P.compressedTexSubImage2D(
                    P.TEXTURE_2D,
                    Mt,
                    Lt,
                    oe,
                    ve.width,
                    ve.height,
                    le,
                    ve.data,
                  )
                : P.texSubImage2D(P.TEXTURE_2D, Mt, Lt, oe, wt, vt, le, Ne, ve);
        (x.pixelStorei(P.UNPACK_ROW_LENGTH, We),
          x.pixelStorei(P.UNPACK_IMAGE_HEIGHT, ie),
          x.pixelStorei(P.UNPACK_SKIP_PIXELS, Qe),
          x.pixelStorei(P.UNPACK_SKIP_ROWS, fn),
          x.pixelStorei(P.UNPACK_SKIP_IMAGES, Hn),
          Mt === 0 && O.generateMipmaps && P.generateMipmap(bt),
          x.unbindTexture());
      }),
      (this.initRenderTarget = function (M) {
        W.get(M).__webglFramebuffer === void 0 && J.setupRenderTarget(M);
      }),
      (this.initTexture = function (M) {
        (M.isCubeTexture
          ? J.setTextureCube(M, 0)
          : M.isData3DTexture
            ? J.setTexture3D(M, 0)
            : M.isDataArrayTexture || M.isCompressedArrayTexture
              ? J.setTexture2DArray(M, 0)
              : J.setTexture2D(M, 0),
          x.unbindTexture());
      }),
      (this.resetState = function () {
        ((X = 0), (V = 0), (D = null), x.reset(), St.reset());
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        ));
  }
  get coordinateSystem() {
    return rn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(t) {
    this._outputColorSpace = t;
    let e = this.getContext();
    ((e.drawingBufferColorSpace = ee._getDrawingBufferColorSpace(t)),
      (e.unpackColorSpace = ee._getUnpackColorSpace()));
  }
};
var ed = new URLSearchParams(location.search),
  cd = (() => {
    try {
      return (
        window.innerWidth <= 860 ||
        (window.matchMedia && matchMedia("(pointer: coarse)").matches)
      );
    } catch {
      return !1;
    }
  })(),
  Gn = (() => {
    let i = null;
    try {
      i = sessionStorage.getItem("g3lock");
    } catch {}
    let t = ed.get("g3q");
    if (cd && i === "lite") {
      try {
        (sessionStorage.setItem("g3q", "lite"),
          sessionStorage.removeItem("g3off"));
      } catch {}
      return "lite";
    }
    if (t === "auto") {
      try {
        sessionStorage.removeItem("g3q");
      } catch {}
      return "auto";
    }
    if (t && /^(full|lite|flat)$/.test(t)) {
      try {
        sessionStorage.setItem("g3q", t);
      } catch {}
      return t;
    }
    if (ed.has("force3d")) return "full";
    try {
      let e = sessionStorage.getItem("g3q");
      if (e) return e;
    } catch {}
    return "auto";
  })(),
  v_ = () => Gn,
  hd = () => Gn === "lite";
try {
  window.__g3quality = v_;
} catch {}
function ud(i) {
  Gn = i;
  try {
    sessionStorage.setItem("g3q", i);
  } catch {}
}
var M_ = () => {
    try {
      return (
        (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
        (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
        !!(navigator.connection && navigator.connection.saveData)
      );
    } catch {
      return !1;
    }
  },
  S_ = {
    id: "v0",
    dens: 1.2,
    figFrac: 1,
    dustFrac: 1,
    maxVid: 1,
    freezeWall: !1,
    dprCap: 1,
    figEvery: 1,
    preload: !0,
  },
  b_ = {
    id: "v1",
    dens: 1.2,
    figFrac: 0.5,
    dustFrac: 0.5,
    maxVid: 1,
    freezeWall: !0,
    dprCap: 0.8,
    figEvery: 2,
    preload: !1,
  },
  w_ = {
    id: "m",
    dens: 1.2,
    figFrac: 0.5,
    dustFrac: 0.5,
    maxVid: 1,
    freezeWall: !0,
    dprCap: 1.2,
    figEvery: 2,
    preload: !1,
  },
  Gc = (() => {
    try {
      return (
        window.innerWidth <= 860 ||
        (window.matchMedia && matchMedia("(pointer: coarse)").matches)
      );
    } catch {
      return !1;
    }
  })(),
  Do = Gc ? w_ : b_;
try {
  new URLSearchParams(location.search).has("litev0") && (Do = S_);
} catch {}
var Xv = () => Do;
try {
  window.__g3lite = () => Do.id;
} catch {}
try {
  let i = Gc;
  try {
    let t = localStorage.getItem("veaStraight");
    t !== null && (i = t === "1");
  } catch {}
  window.__veaStraight = i;
} catch {}
var Eo = !1;
function qv({ renderer: i } = {}) {
  if (cd || Gn !== "auto" || Eo) return;
  Eo = !0;
  let t = M_(),
    e = performance.now(),
    n = 0,
    s = 0,
    r = 0,
    a = 0;
  (function o(c) {
    if (Gn !== "auto") {
      Eo = !1;
      return;
    }
    let l = c - e;
    if (document.hidden) {
      ((n = 0), requestAnimationFrame(o));
      return;
    }
    if (l > 500 && n) {
      let f = Math.min(c - n, 250);
      (s++, (r += f), f > 22 && a++);
    }
    if (((n = c), l < 3500)) {
      requestAnimationFrame(o);
      return;
    }
    Eo = !1;
    let h = s ? 1e3 / (r / s) : 60,
      d = s ? a / s : 0,
      u = !t && h >= 52 && d <= 0.2 ? "full" : "lite";
    ud(u);
    try {
      sessionStorage.setItem("g3lock", u);
    } catch {}
    try {
      console.info(
        "[g3] benchmark:",
        Math.round(h) + "fps jank " + Math.round(d * 100) + "% \u2192",
        u,
        "(never flat)",
      );
    } catch {}
    if (u === "lite")
      try {
        i && i.setPixelRatio(Do.dprCap);
      } catch {}
    u === "lite" && !t && setTimeout(() => E_(i), 6e3);
  })(performance.now());
}
function E_(i) {
  if (Gn !== "lite") return;
  let t = performance.now(),
    e = 0,
    n = 0,
    s = 0,
    r = 0;
  (function a(o) {
    if (Gn !== "lite") return;
    if (document.hidden) {
      ((e = 0), requestAnimationFrame(a));
      return;
    }
    if (e) {
      let l = Math.min(o - e, 250);
      (n++, (s += l), l > 22 && r++);
    }
    if (((e = o), o - t < 4e3)) {
      requestAnimationFrame(a);
      return;
    }
    let c = n ? 1e3 / (s / n) : 0;
    if (c >= 55 && (n ? r / n : 1) <= 0.08) {
      ud("full");
      try {
        sessionStorage.setItem("g3lock", "full");
      } catch {}
      try {
        i && i.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
      } catch {}
      try {
        console.info(
          "[g3] second opinion: sustained " +
            Math.round(c) +
            "fps \u2192 promoted to full",
        );
      } catch {}
    }
  })(performance.now());
}
function Oc() {
  if (
    typeof document > "u" ||
    !document.body ||
    document.getElementById("g3q") ||
    window.innerWidth <= 860 ||
    (window.matchMedia && matchMedia("(pointer: coarse)").matches)
  )
    return;
  let i = document.createElement("div");
  ((i.id = "g3q"),
    (i.dataset.nodec = ""),
    (i.style.cssText =
      "position:fixed;right:14px;bottom:10px;z-index:2147483000;font-family:var(--font-mono, monospace);font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:#fff;mix-blend-mode:difference;opacity:.4;"));
  let t = Gn === "full" || Gn === "lite" ? "full" : "flat";
  ((i.innerHTML = [
    ["full", "space"],
    ["flat", "page"],
  ]
    .map(
      ([e, n]) =>
        '<a href="#" data-q="' +
        e +
        '" style="color:#fff;text-decoration:' +
        (e === t ? "underline" : "none") +
        ';margin-left:9px;">' +
        n +
        "</a>",
    )
    .join("")),
    i.addEventListener("click", (e) => {
      let n = e.target.closest("a[data-q]");
      if (!n) return;
      e.preventDefault();
      let s = n.dataset.q;
      try {
        (sessionStorage.setItem("g3q", s),
          sessionStorage.setItem("g3lock", s),
          sessionStorage.removeItem("g3off"));
      } catch {}
      let r = new URL(location.href);
      (r.searchParams.delete("g3q"),
        r.searchParams.delete("no3d"),
        (location.href = r.toString()));
    }),
    document.body.appendChild(i));
}
try {
  typeof document < "u" &&
    (document.readyState === "loading"
      ? document.addEventListener("DOMContentLoaded", Oc, { once: !0 })
      : Oc());
} catch {}
var Wt = {
    hallLength: 46,
    hallWidth: 15,
    naveHalf: 5.1,
    colHeight: 7,
    colEvery: 5.75,
    ceilH: 8.4,
    eyeHeight: 1.65,
    datumHeight: 1.65,
    panelWidth: 3.55,
    panelCenterY: 2.3,
    wallX: 7.5,
  },
  Ke = -Wt.hallWidth / 2 + 3;
function T_() {
  let i = document.createElement("canvas");
  i.width = i.height = 64;
  let t = i.getContext("2d"),
    e = t.createRadialGradient(32, 32, 0, 32, 32, 30);
  return (
    e.addColorStop(0, "rgba(255,255,255,1)"),
    e.addColorStop(0.6, "rgba(255,255,255,.85)"),
    e.addColorStop(1, "rgba(255,255,255,0)"),
    (t.fillStyle = e),
    t.beginPath(),
    t.arc(32, 32, 30, 0, 7),
    t.fill(),
    new Bn(i)
  );
}
var A_ = T_(),
  Ao = [],
  Vn = { fly: 0, t: 0, seed: 0 },
  er = 0;
function nr() {
  if (--er <= 0 && ((er = 0), Vn.fly > 0))
    try {
      sr(0, performance.now() / 1e3);
    } catch {}
}
function C_() {
  er++;
}
function Yv() {
  nr();
}
function Co(i) {
  return (
    (i.userData.uFly = { value: Vn.fly }),
    (i.userData.uT = { value: Vn.t }),
    (i.userData.uSeed = { value: Vn.seed }),
    i.isLineBasicMaterial && (i.userData.__inkable = !0),
    i.isPointsMaterial && (i.userData.__dotable = !0),
    (i.onBeforeCompile = (t) => {
      ((t.uniforms.uAshFly = i.userData.uFly),
        (t.uniforms.uAshT = i.userData.uT),
        (t.uniforms.uAshSeed = i.userData.uSeed),
        (t.vertexShader = t.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
uniform float uAshFly; uniform float uAshT; uniform float uAshSeed;`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
      if(uAshFly > 0.0){
      #if __VERSION__ >= 300
        /* every pixel owns a HANG-POINT around the eye, hashed from its
           VERTEX INDEX and the flight's seed. Camera-relative and
           index-stable: the departing room's airborne cloud and the
           arriving room's starting cloud are THE SAME POINTS \u2014 the
           very pixels that scattered are the ones that build the next
           scene, and nothing black can live between them. */
        float idh = float(gl_VertexID);
        float hA = fract(sin(idh * .1731 + uAshSeed) * 43758.5453);
        float hB = fract(sin(idh * .0913 + uAshSeed * 1.371) * 28461.6547);
        float hC = fract(sin(idh * .0577 + hA * 6.13 + uAshSeed) * 19349.317);
        float rr = 2.6 + 13.0 * hB;
        float th = hA * 6.28318;
        float ph2 = (hC - .5) * 2.4;
        vec3 hang = cameraPosition + vec3(cos(th) * cos(ph2) * rr,
                                          sin(ph2) * rr * .5 + 1.3,
                                          sin(th) * cos(ph2) * rr);
        hang.y = max(hang.y, 0.1);
        hang.x += sin(uAshT * (2.0 + hA * 3.0) + hB * 6.283) * .4;
        hang.z += cos(uAshT * (1.6 + hC * 3.0) + hA * 6.283) * .35;
        /* the EASING lives in the tickers now (scatter decelerates,
           gather accelerates); each pixel keeps its own pace, and a
           fly beyond 1 lets the hung cloud drift gently outward */
        float wA = clamp(uAshFly * (0.8 + hB * 0.4), 0.0, 1.3);
        vec3 wpos0 = (modelMatrix * vec4(transformed, 1.0)).xyz;
        vec3 deltaW = (hang - wpos0) * wA;
        transformed += inverse(mat3(modelMatrix)) * deltaW;
      #else
        /* WebGL1: the offset gust, hashed from the pixel's position */
        float hA = fract(sin(dot(position, vec3(12.9898, 78.233, 45.164)) + uAshSeed) * 43758.5453);
        float hB = fract(sin(dot(position, vec3(93.989, 67.345, 24.123)) + uAshSeed * 1.371) * 28461.6547);
        float hC = fract(hA * 57.31 + hB * 13.7);
        float wA = clamp(uAshFly * (0.8 + hB * 0.4), 0.0, 1.3);
        vec3 gust = vec3(hA - .5, (hB - .5) * .85 + .13, hC - .5);
        transformed += gust * (2.0 + 9.0 * hB) * wA;
        vec4 wAsh = modelMatrix * vec4(transformed, 1.0);
        if(wAsh.y < 0.06) transformed.y += 0.06 - wAsh.y;
      #endif
      }`,
          )));
    }),
    Ao.push(typeof WeakRef == "function" ? new WeakRef(i) : { deref: () => i }),
    i
  );
}
function Zv(i, t) {
  i.userData && i.userData.__inkNow != null
    ? (i.userData.__inkNow = t)
    : (i.opacity = t);
}
function sr(i, t, e) {
  ((Vn.fly = i), (Vn.t = t), e != null && (Vn.seed = e));
  for (let n = Ao.length - 1; n >= 0; n--) {
    let s = Ao[n].deref();
    if (!s) {
      Ao.splice(n, 1);
      continue;
    }
    if (
      ((s.userData.uFly.value = i),
      (s.userData.uT.value = t),
      e != null && (s.userData.uSeed.value = e),
      s.userData.__inkable &&
        (i > 0
          ? (s.userData.__inkNow == null && (s.userData.__inkNow = s.opacity),
            (s.opacity = s.userData.__inkNow * Math.max(0, 1 - Math.min(1, i))))
          : s.userData.__inkNow != null &&
            ((s.opacity = s.userData.__inkNow), (s.userData.__inkNow = null))),
      s.userData.__dotable)
    )
      if (i > 0) {
        s.userData.__dotNow == null &&
          (s.userData.__dotNow = { size: s.size, op: s.opacity });
        let r = Math.max(0, 1 - Math.min(1, i));
        ((s.size = Math.max(1e-4, s.userData.__dotNow.size * r)),
          (s.opacity = s.userData.__dotNow.op * r));
      } else
        s.userData.__dotNow != null &&
          ((s.size = s.userData.__dotNow.size),
          (s.opacity = s.userData.__dotNow.op),
          (s.userData.__dotNow = null));
  }
}
var Ai = (i, t, e) =>
    Co(
      new Ki({
        map: A_,
        alphaTest: 0.18,
        color: i,
        size: t,
        sizeAttenuation: !0,
        transparent: !0,
        opacity: e,
        blending: bi,
        depthWrite: !1,
      }),
    ),
  Pe = {
    ptsMat: Ai(13489892, 0.022, 0.95),
    wallDotMat: Ai(8950188, 0.03, 0.72),
    outsideMat: Ai(7372184, 0.045, 0.42),
    figureMat: Ai(15331323, 0.017, 0.95),
    rustMat: Ai(11566162, 0.036, 0.55),
    lineMat: Co(
      new ei({
        color: 11186884,
        transparent: !0,
        opacity: 0.58,
        blending: bi,
        depthWrite: !1,
      }),
    ),
    dimLineMat: Co(
      new ei({
        color: 7173256,
        transparent: !0,
        opacity: 0.34,
        blending: bi,
        depthWrite: !1,
      }),
    ),
    hairMat: Co(new ei({ color: 16777215, transparent: !0, opacity: 0.85 })),
    glowMat: new an({ color: 15922687 }),
    solidMat: new an({ color: 197380 }),
  };
function Io(i, { stroke: t = !0, px: e = 380, pad: n = 80 } = {}) {
  let s = document.createElement("canvas"),
    r = s.getContext("2d");
  ((r.font = e + "px 'IBM Plex Mono', monospace"),
    (s.width = Math.ceil(r.measureText(i).width) + n * 2),
    (s.height = e + n * 2));
  let a = s.getContext("2d");
  ((a.font = e + "px 'IBM Plex Mono', monospace"),
    (a.textBaseline = "middle"),
    t
      ? ((a.strokeStyle = "rgba(255,255,255,.9)"),
        (a.lineWidth = Math.max(2, e / 110)),
        a.strokeText(i, n, s.height / 2))
      : ((a.fillStyle = "rgba(255,255,255,1)"),
        a.fillText(i, n, s.height / 2)));
  let o = new Bn(s);
  return ((o.anisotropy = 4), { tex: o, aspect: s.width / s.height });
}
function Jv(i, t) {
  let e = document.createElement("canvas");
  ((e.width = 640), (e.height = 480));
  let n = e.getContext("2d"),
    s = 8 + ((t * 37) % 10),
    r = 40 + ((t * 53) % 30),
    a = n.createLinearGradient(0, 0, 640, 480);
  (a.addColorStop(0, `rgb(${s},${s},${s + 3})`),
    a.addColorStop(0.55, `rgb(${r},${r},${r - 3})`),
    a.addColorStop(1, `rgb(${s + 4},${s + 4},${s + 7})`),
    (n.fillStyle = a),
    n.fillRect(0, 0, 640, 480),
    (n.strokeStyle = "rgba(255,255,255,.28)"),
    n.strokeRect(14.5, 14.5, 611, 451),
    (n.fillStyle = "rgba(255,255,255,.55)"),
    (n.font = "500 22px 'IBM Plex Mono', monospace"),
    n.fillText(
      String(i.client || "")
        .toUpperCase()
        .slice(0, 30),
      34,
      66,
    ),
    (n.fillStyle = "rgba(255,255,255,.92)"),
    (n.font = "34px 'IBM Plex Mono', monospace"));
  let o = String(i.name || "").toUpperCase();
  (n.fillText(o.slice(0, 24), 34, 255),
    o.length > 24 && n.fillText(o.slice(24, 48), 34, 295),
    (n.fillStyle = "rgba(255,255,255,.4)"),
    (n.font = "16px 'IBM Plex Mono', monospace"),
    n.fillText(
      [i.venue, i.date].filter(Boolean).join(" \xB7 ").slice(0, 44),
      34,
      436,
    ));
  let c = new Bn(e);
  return ((c.colorSpace = Le), c);
}
function $v(i) {
  let t = document.createElement("canvas");
  ((t.width = 512), (t.height = 330));
  let e = t.getContext("2d"),
    n = (r, a, o, c) => {
      ((e.font = o),
        (e.lineWidth = 7),
        (e.lineJoin = "round"),
        (e.strokeStyle = "rgba(0,0,0,.9)"),
        e.strokeText(r, 36, a),
        (e.fillStyle = "rgba(255,255,255," + c + ")"),
        e.fillText(r, 36, a));
    };
  (n(
    String(i.client || "")
      .toUpperCase()
      .slice(0, 20),
    92,
    "500 34px 'IBM Plex Mono', monospace",
    ".95",
  ),
    n(
      String(i.name || "").slice(0, 22),
      168,
      "30px 'IBM Plex Mono', monospace",
      ".75",
    ),
    n(
      [i.venue, i.date].filter(Boolean).join(" \xB7 ").slice(0, 26),
      244,
      "24px 'IBM Plex Mono', monospace",
      ".5",
    ));
  let s = new Bn(t);
  return ((s.colorSpace = Le), s);
}
function Kv(i, t, e, n) { i.load(t, e, void 0, n || (() => {})); }

function nd(i, t, e) {
  let n = Wt.colHeight,
    s = 24,
    r = 0.66;
  for (let o = 0; o <= 26; o++) {
    let c = (o / 26) * 2 - 1;
    [
      [c * r, -r],
      [c * r, r],
      [-r, c * r],
      [r, c * r],
    ].forEach(([l, h]) => {
      e.push(i + l, 0.02, t + h);
    });
  }
  for (let o = 0; o < s; o++) {
    let c = (o / s) * Math.PI * 2;
    for (let l = 0.55; l < n - 0.78; l += 0.07) {
      let h = l / n,
        d =
          (0.44 - 0.09 * h) *
          (1 + 0.04 * Math.sin(Math.PI * Math.min(1, h * 1.45))),
        u = Math.sin(l * 91 + o * 7) * 0.003;
      e.push(i + Math.cos(c) * (d + u), l, t + Math.sin(c) * (d + u));
    }
  }
  for (let o of [1.35, 2.55, 3.75, 4.95, 6.05]) {
    let c = o / n,
      l =
        (0.44 - 0.09 * c) *
          (1 + 0.04 * Math.sin(Math.PI * Math.min(1, c * 1.45))) +
        0.004,
      h = Math.round(l * 110);
    for (let d = 0; d < h; d++) {
      let u = (d / h) * Math.PI * 2;
      e.push(i + Math.cos(u) * l, o, t + Math.sin(u) * l);
    }
  }
  ([
    [0.06, 0.58],
    [0.2, 0.53],
    [0.36, 0.48],
  ].forEach(([o, c]) => {
    let l = Math.round(c * 80);
    for (let h = 0; h < l; h++) {
      let d = (h / l) * Math.PI * 2;
      e.push(i + Math.cos(d) * c, o, t + Math.sin(d) * c);
    }
  }),
    [
      [n - 0.78, 0.355],
      [n - 0.62, 0.365],
      [n - 0.56, 0.385],
      [n - 0.5, 0.41],
      [n - 0.38, 0.48],
      [n - 0.26, 0.55],
    ].forEach(([o, c]) => {
      let l = Math.round(c * 90);
      for (let h = 0; h < l; h++) {
        let d = (h / l) * Math.PI * 2;
        e.push(i + Math.cos(d) * c, o, t + Math.sin(d) * c);
      }
    }));
  let a = 0.62;
  for (let o of [n - 0.16, n - 0.06])
    for (let c = 0; c <= 22; c++) {
      let l = (c / 22) * 2 - 1;
      [
        [l * a, -a],
        [l * a, a],
        [-a, l * a],
        [a, l * a],
      ].forEach(([h, d]) => {
        e.push(i + h, o, t + d);
      });
    }
}
function tr(i, t, e, n, s) {
  let [r, a, o] = n,
    c = i / 2,
    l = e / 2,
    h = [
      [r - c, a, o - l],
      [r + c, a, o - l],
      [r + c, a, o + l],
      [r - c, a, o + l],
      [r - c, a + t, o - l],
      [r + c, a + t, o - l],
      [r + c, a + t, o + l],
      [r - c, a + t, o + l],
    ];
  [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0],
    [4, 5],
    [5, 6],
    [6, 7],
    [7, 4],
    [0, 4],
    [1, 5],
    [2, 6],
    [3, 7],
  ].forEach(([d, u]) => s.push(...h[d], ...h[u]));
}
function R_(i, t, e, n) {
  (tr(1.9, 0.06, 0.5, [i, 0.44, t], e),
    tr(0.14, 0.44, 0.42, [i - 0.78, 0, t], e),
    tr(0.14, 0.44, 0.42, [i + 0.78, 0, t], e));
  for (let s = 0; s < 30; s++)
    n.push(i - 0.9 + s * 0.062, 0.505, t + Math.sin(s * 5.1) * 0.17);
}
function I_(i, t, e, n) {
  (tr(0.9, 0.95, 0.9, [i, 0, t], e), tr(0.8, 0.55, 0.8, [i, 0.95, t], e));
  for (let s = 0; s < 46; s++) {
    let r = (s / 46) * Math.PI * 2,
      a = 0.1 + Math.sin(s * 3) * 0.03;
    n.push(
      i + Math.cos(r) * a,
      1.18 + Math.sin(s * 1.7) * 0.08,
      t + Math.sin(r) * a,
    );
  }
}
function id(i, t, e, n, s, r) {
  for (let [a, o] of [
    [i, t],
    [e, n],
  ]) {
    s.push(a, 0, o, a, 0.95, o);
    for (let c = 0; c < 10; c++) {
      let l = (c / 10) * Math.PI * 2;
      r.push(a + Math.cos(l) * 0.05, 0.95, o + Math.sin(l) * 0.05);
    }
  }
  for (let a = 0; a <= 16; a++) {
    let o = a / 16;
    r.push(
      i + (e - i) * o,
      0.93 - Math.sin(o * Math.PI) * 0.14,
      t + (n - t) * o,
    );
  }
}
function Dc(i, t, e) {
  let n = 2.6 + Math.abs(Math.sin(i * 3 + t)) * 1.6,
    s = Math.sin(t * 0.7) * 0.15;
  for (let l = 0; l < n; l += 0.045) {
    let h = l / n,
      d = 0.09 * (1 - h * 0.6),
      u = i + s * h,
      f = Math.sin(l * 23 + i),
      g = f + Math.PI;
    (e.push(u + Math.cos(f) * d, l, t + Math.sin(f) * d),
      e.push(u + Math.cos(g) * d, l, t + Math.sin(g) * d),
      Math.sin(l * 57 + t) > 0.3 &&
        e.push(u + Math.cos(f + 1.7) * d, l, t + Math.sin(f + 1.7) * d));
  }
  for (let l = 0; l < 5; l++) {
    let h = (l / 5) * Math.PI * 2 + i;
    for (let d = 0; d < 1; d += 0.2)
      e.push(
        i + Math.cos(h) * d * 0.32,
        0.05 * (1 - d),
        t + Math.sin(h) * d * 0.32,
      );
  }
  let r = 4 + (Math.abs(Math.sin(t)) > 0.5 ? 1 : 0);
  for (let l = 0; l < r; l++) {
    let h = n * (0.42 + l * 0.13),
      d = (l * 2.4 + t) % (Math.PI * 2),
      u = 0.9 - l * 0.08;
    for (let f = 0; f < 1; f += 0.055)
      e.push(
        i + s * (h / n) + Math.cos(d) * f * u,
        h + f * 0.55,
        t + Math.sin(d) * f * u,
      );
    for (let f of [-1, 1]) {
      let g = d + f * 0.8,
        y = i + s * (h / n) + Math.cos(d) * 0.55 * u,
        m = h + 0.3,
        p = t + Math.sin(d) * 0.55 * u;
      for (let b = 0; b < 1; b += 0.13)
        e.push(
          y + Math.cos(g) * b * 0.38,
          m + b * 0.3,
          p + Math.sin(g) * b * 0.38,
        );
    }
  }
  let a = i + s,
    o = n + 0.55,
    c = 1 + Math.abs(Math.sin(i + t * 2)) * 0.7;
  for (let l = 0; l < 170; l++) {
    let h = Math.random() * Math.PI * 2,
      d = Math.acos(2 * Math.random() - 1),
      u = c * (0.55 + Math.random() * 0.45);
    e.push(
      a + Math.sin(d) * Math.cos(h) * u * 1.15,
      o + Math.cos(d) * u * 0.72,
      t + Math.sin(d) * Math.sin(h) * u * 1.15,
    );
  }
  for (let l = 0; l < r; l++) {
    let h = n * (0.42 + l * 0.13),
      d = (l * 2.4 + t) % (Math.PI * 2),
      u = 0.9 - l * 0.08,
      f = i + s * (h / n) + Math.cos(d) * u,
      g = h + 0.62,
      y = t + Math.sin(d) * u;
    for (let m = 0; m < 46; m++) {
      let p = Math.random() * Math.PI * 2,
        b = Math.acos(2 * Math.random() - 1),
        w = 0.42 * (0.6 + Math.random() * 0.4);
      e.push(
        f + Math.sin(b) * Math.cos(p) * w * 1.2,
        g + Math.cos(b) * w * 0.7,
        y + Math.sin(b) * Math.sin(p) * w * 1.2,
      );
    }
  }
  for (let l = 0; l < 14; l++) {
    let h = Math.random() * Math.PI * 2,
      d = 0.4 + Math.random() * c * 1.3;
    e.push(i + Math.cos(h) * d, 0.03, t + Math.sin(h) * d);
  }
}
function Qv(i, t) {
  let e = [],
    n = [],
    s = Math.max(1, Math.round(t / Wt.hallLength));
  for (let a = 6; a > -t - 8; a -= 4.6) Dc(-11.2, a + Math.sin(a) * 0.8, e);
  for (let a = 3; a > -t - 8; a -= 5.9) Dc(-14.6, a + Math.cos(a * 2) * 1.1, e);
  for (let a = 0; a > -t - 8; a -= 7.4)
    Dc(-18.3, a + Math.sin(a * 1.3) * 1.4, e);
  for (let a = 8; a > -t - 10; a -= 0.17)
    (e.push(
      -9.3 + Math.sin(a * 3) * 0.12,
      0.35 + Math.abs(Math.sin(a * 5)) * 0.22,
      a,
    ),
      e.push(
        -9.45 + Math.sin(a * 2.6 + 2) * 0.12,
        0.22 + Math.abs(Math.sin(a * 4.4 + 1)) * 0.3,
        a + 0.09,
      ));
  for (let a = 0; a < 900 * s; a++)
    e.push(-8.6 - Math.random() * 16, 0.02, 14 - Math.random() * (t + 26));
  for (let a = 0; a < 260 * s; a++)
    e.push(
      -8.8 - Math.random() * 14,
      0.1 + Math.random() * 0.16,
      14 - Math.random() * (t + 26),
    );
  for (let a = 0; a < 4 * s; a++) {
    let o = -20 - Math.random() * 5,
      c = 4 - a * 11 - Math.random() * 4,
      l = 1.2 + Math.random() * 1.2,
      h = 0.9 + Math.random() * 0.8;
    for (let u = 0; u <= 14; u++) {
      let f = u / 14;
      (e.push(o, 0.02, c + (f - 0.5) * l),
        e.push(o, 0.02 + h, c + (f - 0.5) * l),
        e.push(o, 0.02 + h * f, c - l / 2),
        e.push(o, 0.02 + h * f, c + l / 2));
    }
    for (let u = 0; u <= 9; u++) {
      let f = u / 9;
      (e.push(o, 0.02 + h + f * 0.4, c - l / 2 + (f * l) / 2),
        e.push(o, 0.02 + h + f * 0.4, c + l / 2 - (f * l) / 2),
        u && e.push(o + 0.12, 0.02 + h + f * 0.38, c - l / 2 + (f * l) / 2));
    }
    let d = 1 + (a % 2);
    for (let u = 0; u < d; u++) {
      let f = c - l / 4 + (u * l) / 2,
        g = 0.28 + (u % 2) * 0.3;
      for (let y = 0; y <= 4; y++) {
        let m = y / 4;
        (n.push(o + 0.02, g, f - 0.08 + m * 0.16),
          n.push(o + 0.02, g + 0.18, f - 0.08 + m * 0.16),
          n.push(o + 0.02, g + m * 0.18, f - 0.08),
          n.push(o + 0.02, g + m * 0.18, f + 0.08));
      }
    }
  }
  for (let a = 0; a < 110; a++) {
    let o = (a / 110) * Math.PI * 2;
    e.push(-30, 6.4 + Math.sin(o) * 0.95, -30 + Math.cos(o) * 0.95);
  }
  for (let a = 0; a < 60; a++) {
    let o = (a / 60) * Math.PI * 2;
    e.push(-30, 6.4 + Math.sin(o) * 1.5, -30 + Math.cos(o) * 1.5);
  }
  for (let a = 0; a < 240; a++)
    e.push(
      -12 - Math.random() * 26,
      8 + Math.random() * 9,
      16 - Math.random() * (t + 40),
    );
  let r = new me();
  if (
    (r.setAttribute("position", new ne(e, 3)),
    i.add(new bn(r, Pe.outsideMat)),
    n.length)
  ) {
    let a = new me();
    (a.setAttribute("position", new ne(n, 3)),
      i.add(new bn(a, Ai(16767392, 0.05, 0.5))));
  }
}
function jv(i, t) {
  let e = t.z0,
    n = t.L || Wt.hallLength,
    s = t.word || "",
    r = Wt.naveHalf,
    a = Wt.colHeight,
    o = Wt.wallX,
    c = new _n(),
    l = [],
    h = [],
    d = [],
    u = [],
    f = [],
    g = [],
    y = [];
  for (let D = e - 2.8; D > e - n + 1.5; D -= Wt.colEvery)
    (y.push(D), nd(-r, D, l), nd(r, D, l));
  for (let D of [-r, r])
    for (let B of [a, a + 0.22, a + 0.44])
      h.push(D, B, e - 2.8, D, B, e - n + 1.5);
  for (let D of y)
    (h.push(-r, a + 0.44, D, r, a + 0.44, D),
      h.push(-r, a + 0.22, D, r, a + 0.22, D));
  let m = e - 3.4,
    p = e - n + 2;
  for (let D = -r; D <= r + 0.01; D += 1.275)
    d.push(D, Wt.ceilH, m, D, Wt.ceilH, p);
  for (let D = m; D > p; D -= 1.44) d.push(-r, Wt.ceilH, D, r, Wt.ceilH, D);
  for (let D = m - 0.72; D > p; D -= 1.44)
    for (let B = -r + 0.637; B < r; B += 1.275)
      for (let K = 0; K <= 6; K++) {
        let it = (K / 6) * 2 - 1;
        (l.push(B + it * 0.38, Wt.ceilH + 0.14, D - 0.38),
          l.push(B + it * 0.38, Wt.ceilH + 0.14, D + 0.38),
          K > 0 &&
            K < 6 &&
            (l.push(B - 0.38, Wt.ceilH + 0.14, D + it * 0.38),
            l.push(B + 0.38, Wt.ceilH + 0.14, D + it * 0.38)));
      }
  if (!hd()) {
    let D = r * 0.72,
      B = Wt.ceilH + D;
    f.push(0, B, m, 0, B, p);
    for (let q = m; q > p; q -= 2.88)
      (d.push(-r, Wt.ceilH, q, 0, B, q), d.push(r, Wt.ceilH, q, 0, B, q));
    for (let q of [m, p])
      (f.push(-r, Wt.ceilH, q, 0, B, q),
        f.push(r, Wt.ceilH, q, 0, B, q),
        f.push(-r, Wt.ceilH, q, r, Wt.ceilH, q));
    for (let q of [0.5]) {
      let K = r * (1 - q),
        it = Wt.ceilH + D * q;
      (d.push(-K, it, m, -K, it, p), d.push(K, it, m, K, it, p));
    }
  }
  let b = Wt.ceilH + 0.6,
    w = 1.7,
    v = 0.95,
    A = 6.3,
    T = [],
    R = (D, B) =>
      D > v - 0.12 &&
      D < A + 0.12 &&
      T.some((q) => Math.abs(B - q) < w / 2 + 0.12);
  for (let D = 0; D < y.length; D++) {
    let B = y[D] - Wt.colEvery / 2;
    if (B < e - n + 1.5) break;
    T.push(B);
    for (let lt of [0, 0.14])
      h.push(
        -o,
        v - lt,
        B - w / 2 - lt,
        -o,
        A + lt,
        B - w / 2 - lt,
        -o,
        A + lt,
        B - w / 2 - lt,
        -o,
        A + lt,
        B + w / 2 + lt,
        -o,
        A + lt,
        B + w / 2 + lt,
        -o,
        v - lt,
        B + w / 2 + lt,
        -o,
        v - lt,
        B + w / 2 + lt,
        -o,
        v - lt,
        B - w / 2 - lt,
      );
    for (let [lt, Vt] of [
      [v, B - w / 2],
      [v, B + w / 2],
      [A, B - w / 2],
      [A, B + w / 2],
    ])
      d.push(-o, lt, Vt, -o - 0.3, lt, Vt);
    (d.push(-o, v, B, -o, A, B),
      d.push(-o, 3.6, B - w / 2, -o, 3.6, B + w / 2),
      h.push(
        -o + 0.04,
        v - 0.05,
        B - w / 2 - 0.22,
        -o + 0.04,
        v - 0.05,
        B + w / 2 + 0.22,
      ));
    let q = new fe(new Ee(Wt.colEvery - w, b), Pe.solidMat);
    ((q.rotation.y = Math.PI / 2),
      q.position.set(-o - 0.02, b / 2, B + w / 2 + (Wt.colEvery - w) / 2));
    let K = new fe(new Ee(w, b - A), Pe.solidMat);
    ((K.rotation.y = Math.PI / 2),
      K.position.set(-o - 0.02, A + (b - A) / 2, B));
    let it = new fe(new Ee(w, v), Pe.solidMat);
    ((it.rotation.y = Math.PI / 2),
      it.position.set(-o - 0.02, v / 2, B),
      c.add(q, K, it));
  }
  let _ = new fe(new Ee(n, b), Pe.solidMat);
  ((_.rotation.y = -Math.PI / 2),
    _.position.set(o + 0.02, b / 2, e - n / 2),
    c.add(_));
  for (let D of y) {
    for (let B of [-0.3, 0.3])
      for (let q = 0.4; q < a - 0.2; q += 0.12)
        u.push(o - 0.04, q, D + B + Math.sin(q * 13) * 0.008);
    (d.push(o - 0.05, a - 0.2, D - 0.38, o - 0.05, a - 0.2, D + 0.38),
      d.push(o - 0.05, a - 0.06, D - 0.44, o - 0.05, a - 0.06, D + 0.44));
  }
  for (let D of [-1, 1]) {
    let B = D < 0 ? -o + 0.03 : o - 0.03;
    for (let q = 0; q < 11; q++) {
      let K = 0.4 + q * 0.72;
      if (K > b - 0.5) break;
      for (let lt = e - 1.2; lt > e - n + 1; lt -= 0.2)
        (D < 0 && R(K, lt)) || u.push(B, K + Math.sin(lt * 9) * 0.006, lt);
      let it = (q % 2) * 0.85;
      for (let lt = e - 1.6 - it; lt > e - n + 1; lt -= 1.7)
        for (let Vt = K + 0.08; Vt < K + 0.68 && Vt < b - 0.4; Vt += 0.1)
          (D < 0 && R(Vt, lt)) || u.push(B, Vt, lt);
    }
  }
  for (let D of [-1, 1]) {
    let B = D < 0 ? -o + 0.035 : o - 0.035;
    for (let q = e - 2.2; q > e - n + 2; q -= 1.75)
      for (let K = 1.15; K < b - 1.1; K += 1.35)
        if (!(D < 0 && R(K, q))) {
          for (let it = 0; it < 10; it++) {
            let lt = (it / 10) * Math.PI * 2;
            u.push(B, K + Math.sin(lt) * 0.055, q + Math.cos(lt) * 0.055);
          }
          if (Math.sin(q * 7.3 + K * 3.1 + D) > 0.25) {
            let it = 0.5 + Math.abs(Math.sin(q * 3 + K)) * 1.7;
            for (let lt = 0; lt < it; lt += 0.042) {
              let Vt = Math.sin(lt * 9 + q) * 0.022;
              Math.sin(lt * 31 + K * 7) > -0.35 &&
                !(D < 0 && R(K - 0.06 - lt, q + Vt)) &&
                g.push(B, K - 0.06 - lt, q + Vt);
            }
          }
        }
    for (let q = 0; q < Math.round((16 * n) / 46); q++) {
      let K = e - 3.5 - ((q * 3.83 + (D + 1) * 1.7) % (n - 7)),
        it = 0.25 + (q % 4) * 0.11;
      for (let lt = 0; lt < 36; lt++) {
        let Vt = Math.random() * Math.PI * 2,
          Kt = Math.sqrt(Math.random()) * it;
        g.push(
          B,
          0.3 + Math.abs(Math.sin(Vt * 2)) * 0.45 + Math.sin(Vt) * Kt * 0.5,
          K + Math.cos(Vt) * Kt,
        );
      }
    }
  }
  for (let D of [-o + 0.04, o - 0.04])
    (h.push(D, b - 0.34, e - 1, D, b - 0.34, e - n + 1),
      h.push(D, b - 0.18, e - 1, D, b - 0.18, e - n + 1),
      d.push(D, 0.18, e - 1, D, 0.18, e - n + 1));
  for (let D of [-o + 0.05, o - 0.05])
    f.push(D, Wt.datumHeight, e - 1, D, Wt.datumHeight, e - n + 1);
  let S = Io((s ? s + "  \xB7  " : "") + "VIRTUALLY EVER AFTER", {
      stroke: !1,
      px: 90,
    }),
    C = 0.2,
    I = C * S.aspect,
    U = new fe(new Ee(I, C), new an({ map: S.tex, transparent: !0 }));
  (U.position.set(o - 0.07, Wt.datumHeight + 0.26, e - 4),
    (U.rotation.y = -Math.PI / 2),
    c.add(U));
  let Z =
    t.benches ||
    [
      [0.2, 12],
      [-0.3, 23.5],
      [0.3, 35],
    ].filter(([, D]) => D < n - 6);
  for (let [D, B] of Z) {
    (R_(D, e - B, h, l), f.push(D, Wt.ceilH, e - B, D, 2.75, e - B));
    let q = new fe(new Os(0.045, 10, 8), Pe.glowMat);
    (q.position.set(D, 2.72, e - B), c.add(q));
  }
  t.vitrine &&
    (I_(2.9, e - 4.6, h, l),
    id(1.95, e - 3.55, 3.85, e - 3.55, h, l),
    id(3.85, e - 3.55, 3.85, e - 5.6, h, l));
  {
    let D = e - n / 2;
    for (let [B, q] of [
      [1.15, 64],
      [1.9, 96],
    ])
      for (let K = 0; K < q; K++) {
        let it = (K / q) * Math.PI * 2;
        u.push(Math.cos(it) * B, 0.018, D + Math.sin(it) * B);
      }
    for (let B = 0; B < 8; B++) {
      let q = (B / 8) * Math.PI * 2;
      for (let K = 0.25; K < 1.9; K += 0.28)
        u.push(Math.cos(q) * K, 0.018, D + Math.sin(q) * K);
    }
  }
  let k = e - n,
    F = Wt.hallWidth / 2,
    X = Wt.ceilH + 0.6;
  if (t.end !== "none") {
    let D = t.end === "slit",
      B = D ? 1.9 : 0.001,
      q = 6,
      K = new fe(new Ee(Ke - B / 2 + F, X), Pe.solidMat);
    K.position.set((-F + Ke - B / 2) / 2, X / 2, k - 0.01);
    let it = new fe(new Ee(F - Ke - B / 2, X), Pe.solidMat);
    if (
      (it.position.set((F + Ke + B / 2) / 2, X / 2, k - 0.01), c.add(K, it), D)
    ) {
      let ct = new fe(new Ee(B, X - q), Pe.solidMat);
      (ct.position.set(Ke, q + (X - q) / 2, k - 0.01), c.add(ct));
      for (let at of [Ke - B / 2 + 0.14, Ke + B / 2 - 0.14]) {
        let At = new fe(new Ee(0.26, q), Pe.glowMat);
        (At.position.set(at, q / 2, k - 0.3), c.add(At));
      }
      h.push(
        Ke - B / 2,
        0,
        k + 0.01,
        Ke - B / 2,
        q,
        k + 0.01,
        Ke - B / 2,
        q,
        k + 0.01,
        Ke + B / 2,
        q,
        k + 0.01,
        Ke + B / 2,
        q,
        k + 0.01,
        Ke + B / 2,
        0,
        k + 0.01,
      );
    }
    let lt = Io(s || "VEA", { stroke: !0, px: 420 }),
      Vt = 3.3,
      Kt = Math.min(Wt.hallWidth - 4, Vt * lt.aspect),
      Q = new fe(
        new Ee(Kt, Vt),
        new an({ map: lt.tex, transparent: !0, opacity: 0.85 }),
      );
    (Q.position.set(1.2, 4.2, k + 0.05), c.add(Q));
  }
  return (
    h.push(
      -F,
      0,
      k,
      -F,
      X,
      k,
      -F,
      X,
      k,
      F,
      X,
      k,
      F,
      X,
      k,
      F,
      0,
      k,
      F,
      0,
      k,
      -F,
      0,
      k,
    ),
    {
      hall: c,
      bays: y,
      dots: l,
      lines: h,
      dimLines: d,
      wallDots: u,
      hair: f,
      rust: g,
      flush: () => {
        let D = (B, q, K) => {
          if (!B.length) return;
          let it = new me();
          (it.setAttribute("position", new ne(B, 3)),
            c.add(K ? new Es(it, q) : new bn(it, q)));
        };
        (D(l, Pe.ptsMat, !1),
          D(u, Pe.wallDotMat, !1),
          D(g, Pe.rustMat, !1),
          D(h, Pe.lineMat, !0),
          D(d, Pe.dimLineMat, !0),
          D(f, Pe.hairMat, !0),
          i.add(c));
      },
    }
  );
}
function tM(i, t, e, n) {
  if (!e && n) {
    let o = new n(new Ee(Wt.hallWidth + 4, t + 12), {
      textureWidth: 1024,
      textureHeight: 1024,
      color: 4802896,
    });
    ((o.rotation.x = -Math.PI / 2), o.position.set(0, 0, -t / 2), i.add(o));
  }
  let s = new fe(
    new Ee(Wt.hallWidth + 4, t + 12),
    new Bs({
      color: 328966,
      roughness: 0.42,
      transparent: !e,
      opacity: e ? 1 : 0.72,
    }),
  );
  ((s.rotation.x = -Math.PI / 2),
    s.position.set(0, e ? 0 : 0.012, -t / 2),
    i.add(s));
  let r = [];
  for (let o = 2; o > -t - 2; o -= 2.875)
    for (let c = -Wt.hallWidth / 2 + 0.4; c < Wt.hallWidth / 2; c += 0.34)
      r.push(c, 0.015, o);
  for (let o = -Wt.hallWidth / 2 + 2.5; o < Wt.hallWidth / 2; o += 2.5)
    for (let c = 2; c > -t - 2; c -= 0.34) r.push(o, 0.015, c);
  let a = new me();
  (a.setAttribute("position", new ne(r, 3)), i.add(new bn(a, Pe.wallDotMat)));
}
function eM(i, t, e, n) {
  let s = e
    ? 500
    : Math.min(2600, Math.max(900, Math.round((900 * t) / Wt.hallLength)));
  n && n > 0 && n < 1 && (s = Math.max(80, Math.round(s * n)));
  let r = new Float32Array(s * 3);
  for (let c = 0; c < s; c++)
    ((r[c * 3] = (Math.random() - 0.5) * 9),
      (r[c * 3 + 1] = Math.random() * Wt.ceilH),
      (r[c * 3 + 2] = -Math.random() * t));
  let a = new me();
  a.setAttribute("position", new Be(r, 3));
  let o = new bn(a, Ai(11187400, 0.015, 0.38));
  return (i.add(o), { dust: o, N: s });
}
var ke = 30,
  P_ = {
    "pelvis-chest": 0.12,
    "chest-neck": 0.055,
    "neck-head": 0.04,
    "shL-elL": 0.045,
    "elL-haL": 0.035,
    "shR-elR": 0.045,
    "elR-haR": 0.035,
    "hipL-knL": 0.064,
    "knL-ftL": 0.047,
    "hipR-knR": 0.064,
    "knR-ftR": 0.047,
    "shL-shR": 0.05,
    "hipL-hipR": 0.072,
    "shL-hipL": 0.072,
    "shR-hipR": 0.072,
  },
  sd = {
    "pelvis-chest": 84,
    "chest-neck": 20,
    "neck-head": 10,
    "shL-elL": 34,
    "elL-haL": 28,
    "shR-elR": 34,
    "elR-haR": 28,
    "hipL-knL": 44,
    "knL-ftL": 34,
    "hipR-knR": 44,
    "knR-ftR": 34,
    "shL-shR": 24,
    "hipL-hipR": 22,
    "shL-hipL": 40,
    "shR-hipR": 40,
  };
function L_(i) {
  i = i || 1;
  let t = [];
  for (let e in sd) {
    let n = Math.round(sd[e] * i);
    for (let s = 0; s < n; s++)
      t.push({
        bone: e,
        t: Math.random(),
        ang: Math.random() * Math.PI * 2,
        rr: 0.86 + Math.random() * 0.14,
      });
  }
  for (let e = 0; e < Math.round(120 * i); e++) {
    let n = Math.random() * Math.PI * 2,
      s = Math.acos(2 * Math.random() - 1);
    t.push({ head: !0, u: n, v: s, rr: 0.92 + Math.random() * 0.08 });
  }
  return t;
}
function D_(i) {
  let {
      x: t,
      z: e,
      rotY: n,
      phase: s,
      speed: r,
      sit: a,
      lean: o,
      headYaw: c,
      headPitch: l,
      armL: h,
      armR: d,
      sway: u,
    } = i,
    f = i.t || 0,
    g = i.seed || 0,
    y = {},
    m = a ? 0 : Math.abs(Math.sin(s * Math.PI * 2)) * 0.032 * r,
    p = a ? 0.62 : 0.96 + m,
    b = Math.sin(f * 1.5 + g * 3.7) * 0.009,
    w =
      !a && r < 0.05
        ? Math.sin(f * 0.21 + g * 5.1) * 0.05 + (i.hipShift || 0)
        : i.hipShift || 0;
  y.pelvis = [w, p, 0];
  let v = (o || 0) + (a ? 0.06 : 0),
    A =
      r > 0.05
        ? Math.sin(s * Math.PI * 2) * 0.16 * r
        : Math.sin(f * 0.37 + g) * 0.03,
    T = Math.sin(A),
    R = Math.cos(A);
  ((y.chest = [w * 0.55 + u * 0.4, p + 0.42 + b, v * 0.35 + b * 0.4]),
    (y.neck = [w * 0.4 + u * 0.55, p + 0.6 + b, v * 0.5]),
    (y.head = [
      w * 0.3 + u * 0.6 + Math.sin(c || 0) * 0.05,
      p + 0.78 + b * 0.7 - (l || 0) * 0.04,
      v * 0.62 + (l || 0) * 0.08,
    ]),
    (y.shL = [
      w * 0.55 - 0.21 * R + u * 0.5,
      p + 0.52 + b,
      v * 0.45 + 0.21 * T,
    ]),
    (y.shR = [
      w * 0.55 + 0.21 * R + u * 0.5,
      p + 0.52 + b,
      v * 0.45 - 0.21 * T,
    ]),
    (y.hipL = [w - 0.12, p, 0]),
    (y.hipR = [w + 0.12, p, 0]));
  let _ = Math.sin(s * Math.PI * 2) * 0.42 * r,
    S = Math.sin(s * Math.PI * 2 + Math.PI) * 0.42 * r;
  a
    ? ((y.knL = [-0.14, 0.52, 0.42]),
      (y.ftL = [-0.14, 0.06, 0.48]),
      (y.knR = [0.14, 0.52, 0.42]),
      (y.ftR = [0.14, 0.06, 0.52]))
    : ((y.knL = [
        -0.12,
        0.5 + Math.max(0, Math.sin(s * Math.PI * 2)) * 0.09 * r,
        _ * 0.5,
      ]),
      (y.ftL = [
        -0.12,
        0.05 + Math.max(0, Math.sin(s * Math.PI * 2)) * 0.12 * r,
        _,
      ]),
      (y.knR = [
        0.12,
        0.5 + Math.max(0, Math.sin(s * Math.PI * 2 + Math.PI)) * 0.09 * r,
        S * 0.5,
      ]),
      (y.ftR = [
        0.12,
        0.05 + Math.max(0, Math.sin(s * Math.PI * 2 + Math.PI)) * 0.12 * r,
        S,
      ]));
  let C = r > 0.05 ? Math.sin(s * Math.PI * 2 + Math.PI) * 0.3 * r : 0,
    I = h || 0,
    U = d || 0;
  ((y.elL = [-0.27, p + 0.28 + I * 0.3, C * 0.5 + I * 0.22]),
    (y.haL = [-0.25 + I * 0.12, p + 0.06 + I * 0.62, C + I * 0.38]));
  let Z = r > 0.05 ? Math.sin(s * Math.PI * 2) * 0.3 * r : 0;
  if (
    ((y.elR = [0.27, p + 0.28 + U * 0.3, Z * 0.5 + U * 0.22]),
    (y.haR = [0.25 - U * 0.12, p + 0.06 + U * 0.62, Z + U * 0.38]),
    i.armsCrossed &&
      ((y.elL = [-0.25, p + 0.3, 0.15]),
      (y.haL = [0.1, p + 0.38, 0.21]),
      (y.elR = [0.25, p + 0.28, 0.13]),
      (y.haR = [-0.09, p + 0.35, 0.2])),
    i.phone > 0)
  ) {
    let V = i.phone;
    ((y.elL = [-0.19, p + 0.3 + V * 0.2, 0.18 * V]),
      (y.haL = [-0.06, p + 0.42 + V * 0.34, 0.3 * V]),
      (y.elR = [0.19, p + 0.3 + V * 0.2, 0.18 * V]),
      (y.haR = [0.06, p + 0.42 + V * 0.34, 0.3 * V]));
  }
  let k = Math.cos(n),
    F = Math.sin(n),
    X = {};
  for (let V in y) {
    let [D, B, q] = y[V];
    X[V] = [t + D * k + q * F, B, e - D * F + q * k];
  }
  return X;
}
function nM(i, t, e) {
  let n = L_(e),
    s = new Float32Array(n.length * 3),
    r = new me();
  r.setAttribute("position", new Be(s, 3));
  let a = new bn(r, Pe.figureMat);
  return (
    (a.frustumCulled = !1),
    i.add(a),
    { dots: n, buf: s, geo: r, behave: t, pts: a }
  );
}
var Nc = new L(),
  rd = new L(),
  To = new L(),
  N_ = new L(0, 1, 0),
  U_ = new L(1, 0, 0);
function iM(i, t, e) {
  let n = i.behave(t);
  try {
    if (e != null) {
      let c = Math.abs(n.z - e),
        l = window.__veaFig || (window.__veaFig = { d: 9, x: 0 });
      c < l.d && ((l.d = c), (l.x = n.x || 0));
    }
  } catch {}
  if (e != null) {
    if (Math.abs(n.z - e) > 30) {
      i.pts.visible && (i.pts.visible = !1);
      return;
    }
    i.pts.visible || (i.pts.visible = !0);
  }
  let s = D_(n),
    r = {
      "pelvis-chest": [s.pelvis, s.chest],
      "chest-neck": [s.chest, s.neck],
      "neck-head": [s.neck, s.head],
      "shL-elL": [s.shL, s.elL],
      "elL-haL": [s.elL, s.haL],
      "shR-elR": [s.shR, s.elR],
      "elR-haR": [s.elR, s.haR],
      "hipL-knL": [s.hipL, s.knL],
      "knL-ftL": [s.knL, s.ftL],
      "hipR-knR": [s.hipR, s.knR],
      "knR-ftR": [s.knR, s.ftR],
      "shL-shR": [s.shL, s.shR],
      "hipL-hipR": [s.hipL, s.hipR],
      "shL-hipL": [s.shL, s.hipL],
      "shR-hipR": [s.shR, s.hipR],
    },
    a = {};
  for (let c in r) {
    let [l, h] = r[c];
    To.set(h[0] - l[0], h[1] - l[1], h[2] - l[2]).normalize();
    let d = Math.abs(To.y) > 0.92 ? U_ : N_;
    (Nc.crossVectors(To, d).normalize(),
      rd.crossVectors(To, Nc),
      (a[c] = [l, h, Nc.clone(), rd.clone()]));
  }
  let o = 0;
  for (let c of i.dots) {
    let l, h, d;
    if (c.head) {
      let [u, f, g] = s.head,
        y = 0.095 * c.rr;
      ((l = u + Math.sin(c.v) * Math.cos(c.u) * y),
        (h = f + 0.04 + Math.cos(c.v) * y * 1.18),
        (d = g + Math.sin(c.v) * Math.sin(c.u) * y));
    } else {
      let [u, f, g, y] = a[c.bone],
        m = P_[c.bone] * c.rr,
        p = Math.cos(c.ang) * m,
        b = Math.sin(c.ang) * m;
      ((l = u[0] + (f[0] - u[0]) * c.t + g.x * p + y.x * b),
        (h = u[1] + (f[1] - u[1]) * c.t + g.y * p + y.y * b),
        (d = u[2] + (f[2] - u[2]) * c.t + g.z * p + y.z * b));
    }
    ((i.buf[o++] = l), (i.buf[o++] = h), (i.buf[o++] = d));
  }
  i.geo.attributes.position.needsUpdate = !0;
}
var ge = (i, t) =>
    Math.sin(i * 0.61 + t) * 0.012 + Math.sin(i * 1.13 + t * 2) * 0.008,
  Zt = (i) => (i < 0 ? 0 : i > 1 ? 1 : i * i * (3 - 2 * i)),
  hi = 1.05,
  sM = {
    guard: (i) => {
      let t = (i + 4) % ke,
        e,
        n,
        s = 1,
        r;
      return (
        t < 12
          ? ((e = t * 2.5), (n = -5 - e), (r = Math.PI))
          : t < 15
            ? ((e = 30),
              (n = -35),
              (s = 0),
              (r = Math.PI * (1 - Zt((t - 12.4) / 2.2))))
            : t < 27
              ? ((e = 30 + (t - 15) * 2.5), (n = -35 + (e - 30)), (r = 0))
              : ((e = 60),
                (n = -5),
                (s = 0),
                (r = Math.PI * Zt((t - 27.4) / 2.2))),
        {
          t: i,
          seed: 1,
          x: 1.35,
          z: n,
          rotY: r,
          phase: e * hi,
          speed: s,
          sway: ge(i, 1),
          headYaw: s ? Math.sin(i * 0.43) * 0.4 : Math.sin(i * 0.8) * 0.8,
        }
      );
    },
    talkerA: (i) => {
      let t = i % ke,
        e =
          Zt((t - 6) / 1.2) * (1 - Zt((t - 10) / 1.4)) +
          Zt((t - 21) / 1.2) * (1 - Zt((t - 25) / 1.4));
      return {
        t: i,
        seed: 3,
        x: -2.3,
        z: -22.6,
        rotY: Math.PI / 2 + 0.3 + ge(i, 3) * 4,
        phase: 0,
        speed: 0,
        sway: ge(i, 3),
        armR: Math.max(0, e) * 0.85,
        headYaw: Math.sin(i * 0.5) * 0.2,
      };
    },
    talkerB: (i) => {
      let t = (i + 9) % ke,
        e =
          Zt((t - 8) / 0.8) * (1 - Zt((t - 10.5) / 1)) +
          Zt((t - 23) / 0.8) * (1 - Zt((t - 25.5) / 1));
      return {
        t: i,
        seed: 7,
        x: -1.15,
        z: -23.6,
        rotY: -Math.PI / 2 + 0.35 + ge(i, 7) * 4,
        phase: 0,
        speed: 0,
        sway: ge(i, 7),
        headPitch: Math.max(0, e) * 0.8,
        armL: 0.12 + ge(i, 11) * 2,
      };
    },
    inspector: (i) => {
      let t = i % ke,
        e = Zt((t - 14) / 3),
        n = t > 14 && t < 17;
      return {
        t: i,
        seed: 5,
        x: 3.55,
        z: -16.9 - e * 1.5,
        rotY: -Math.PI / 2 - 0.18,
        phase: e * 1.5 * hi,
        speed: n ? 0.35 : 0,
        sway: ge(i, 5),
        lean: 0.16,
        armR: 0.68,
        headYaw: Math.sin(i * 0.3) * 0.3,
        headPitch: 0.18,
      };
    },
    sitter: (i) => {
      let t = (i + 17) % ke,
        e = Zt((t - 10) / 2) * (1 - Zt((t - 18) / 2.5));
      return {
        t: i,
        seed: 9,
        x: 0.2,
        z: -12.03,
        rotY: Math.PI + 0.1,
        phase: 0,
        speed: 0,
        sit: !0,
        sway: ge(i, 9),
        headYaw: e * 0.9 - 0.2,
        armL: 0.05,
      };
    },
    wanderer: (i) => {
      let t = (i + 22) % ke,
        e,
        n,
        s,
        r = 0.85;
      return (
        t < 13
          ? ((e = t * 1.5), (n = -4 - e), (s = Math.PI))
          : t < 15
            ? ((e = 19.5),
              (n = -23.5),
              (r = 0),
              (s = Math.PI * (1 - Zt((t - 13.3) / 1.6))))
            : t < 28
              ? ((e = 19.5 + (t - 15) * 1.5), (n = -23.5 + (e - 19.5)), (s = 0))
              : ((e = 39),
                (n = -4),
                (r = 0),
                (s = Math.PI * Zt((t - 28.2) / 1.6))),
        {
          t: i,
          seed: 13,
          x: -3.4,
          z: n,
          rotY: s,
          phase: e * hi,
          speed: r,
          sway: ge(i, 13),
        }
      );
    },
    strollState: (i, t, e, n) => {
      let s = (i + n) % ke,
        r,
        a,
        o = Math.PI,
        c = 0.6;
      s < 12
        ? ((r = s * 1.05), (a = -6 - r))
        : s < 15
          ? ((r = 12.6), (a = -18.6), (c = 0), (o = Math.PI - 0.5))
          : s < 27
            ? ((r = 12.6 + (s - 15) * 1.05), (a = -18.6 + (r - 12.6)), (o = 0))
            : ((r = 25.2),
              (a = -6),
              (c = 0),
              (o = Math.PI * Zt((s - 27.3) / 2)));
      let l = Math.sin(i * 0.35 + t) * 0.35;
      return {
        t: i,
        seed: t,
        x: e,
        z: a,
        rotY: o,
        phase: r * hi,
        speed: c,
        sway: ge(i, t),
        headYaw: l,
      };
    },
    leaner: (i) => ({
      t: i,
      seed: 21,
      x: Wt.naveHalf - 0.72,
      z: -20.2,
      rotY: -Math.PI / 2 + 0.5,
      phase: 0,
      speed: 0,
      sway: ge(i, 21),
      armsCrossed: !0,
      hipShift: 0.06,
      lean: -0.06,
      headYaw: Math.sin(i * 0.27) * 0.7,
    }),
    photog: (i) => {
      let t = i % ke,
        e = Zt((t - 5) / 1.2) * (1 - Zt((t - 13) / 1.1)),
        n = Zt((t - 20) / 2.5);
      return {
        t: i,
        seed: 23,
        x: 2.05,
        z: -28.2 - n * 0.9,
        rotY: -Math.PI / 2 - 0.1,
        phase: n * 0.9 * hi,
        speed: t > 20 && t < 22.5 ? 0.3 : 0,
        sway: ge(i, 23),
        phone: Math.max(0, e),
        headPitch: e * 0.12,
        lean: e * 0.05,
      };
    },
    sketcher: (i) => ({
      t: i,
      seed: 27,
      x: 0.3,
      z: -35.03,
      rotY: Math.PI - 0.15,
      phase: 0,
      speed: 0,
      sit: !0,
      lean: 0.2,
      sway: ge(i, 27),
      armR: 0.5 + Math.sin(i * 2.2) * 0.1 + Math.sin(i * 5.1) * 0.03,
      headPitch: 0.35 + Math.sin(i * 0.9) * 0.05,
    }),
    pacer: (i) => {
      let t = (i + 11) % ke,
        e,
        n,
        s,
        r = 0.5,
        a = !1;
      return (
        t < 8
          ? ((e = t * 0.5), (n = -30 - e), (s = Math.PI))
          : t < 14
            ? ((e = 4),
              (n = -34),
              (r = 0),
              (a = t > 9.5),
              (s = Math.PI * (1 - Zt((t - 8.4) / 2))))
            : t < 22
              ? ((e = 4 + (t - 14) * 0.5), (n = -34 + (e - 4)), (s = 0))
              : ((e = 8),
                (n = -30),
                (r = 0),
                (a = t > 23.5 && t < 28),
                (s = Math.PI * Zt((t - 22.4) / 2))),
        {
          t: i,
          seed: 29,
          x: 2.6,
          z: n,
          rotY: s,
          phase: e * hi,
          speed: r,
          sway: ge(i, 29),
          armsCrossed: a,
          headPitch: 0.12,
        }
      );
    },
    stretcher: (i) => {
      let t = i % ke,
        e =
          Zt((t - 4) / 1.6) * (1 - Zt((t - 9) / 1.8)) +
          Zt((t - 19) / 1.6) * (1 - Zt((t - 24) / 1.8));
      return {
        t: i,
        seed: 31,
        x: -3.1,
        z: -8.6,
        rotY: 0.4 + ge(i, 31) * 3,
        phase: 0,
        speed: 0,
        sway: ge(i, 31),
        armL: e * 0.95,
        armR: e * 0.9,
        headPitch: -e * 0.3,
      };
    },
    watcher: (i) => {
      let t = i % ke,
        e =
          Zt((t - 7) / 0.9) * (1 - Zt((t - 9.5) / 1.1)) +
          Zt((t - 22) / 0.9) * (1 - Zt((t - 24.5) / 1.1));
      return {
        t: i,
        seed: 33,
        x: 1.9,
        z: -37.5,
        rotY: -Math.PI / 2 + 0.2,
        phase: 0,
        speed: 0,
        sway: ge(i, 33),
        armL: e * 0.6,
        headPitch: e * 0.32,
        headYaw: -e * 0.25,
      };
    },
    phoneTalker: (i) => ({
      t: i,
      seed: 37,
      x: -2.9,
      z: -31.2,
      rotY: -0.6 + Math.sin(i * 0.17) * 0.5,
      phase: 0,
      speed: 0,
      sway: ge(i, 37),
      armR: 0.95,
      hipShift: Math.sin(i * 0.33) * 0.05,
      headYaw: Math.sin(i * 0.41) * 0.2,
      headPitch: 0.08,
    }),
    docent: (i) => {
      let t = i % ke,
        e = Zt((t - 3) / 1.1) * (1 - Zt((t - 7) / 1.3)),
        n = Zt((t - 12) / 1.1) * (1 - Zt((t - 17) / 1.3)),
        s = Zt((t - 23) / 1.1) * (1 - Zt((t - 27) / 1.3));
      return {
        t: i,
        seed: 41,
        x: 1.6,
        z: -5.2,
        rotY: Math.PI / 2 - 0.4 + ge(i, 41) * 3,
        phase: 0,
        speed: 0,
        sway: ge(i, 41),
        armL: (e + s) * 0.8,
        armR: n * 0.7,
        headYaw: Math.sin(i * 0.6) * 0.25,
      };
    },
    slowWalker: (i) => {
      let t = (i + 6) % ke,
        e,
        n,
        s,
        r = 0.45;
      return (
        t < 13
          ? ((e = t * 1), (n = -24 - e), (s = Math.PI))
          : t < 15
            ? ((e = 13),
              (n = -37),
              (r = 0),
              (s = Math.PI * (1 - Zt((t - 13.3) / 1.6))))
            : t < 28
              ? ((e = 13 + (t - 15) * 1), (n = -37 + (e - 13)), (s = 0))
              : ((e = 26),
                (n = -24),
                (r = 0),
                (s = Math.PI * Zt((t - 28.2) / 1.6))),
        {
          t: i,
          seed: 43,
          x: 3.1,
          z: n,
          rotY: s,
          phase: e * hi,
          speed: r,
          sway: ge(i, 43),
          headYaw: Math.sin(i * 0.3) * 0.5,
          headPitch: -0.05,
        }
      );
    },
    gazer: (i) => ({
      t: i,
      seed: 47,
      x: 0.7,
      z: -26.8,
      rotY: i * ((Math.PI * 2) / ke),
      phase: 0,
      speed: 0,
      sway: ge(i, 47),
      headPitch: -0.42,
      armL: 0.05,
      armR: 0.05,
    }),
    drifter: (i) => {
      let t = i * ((Math.PI * 2) / ke),
        e = -2 + Math.sin(t) * 1.2,
        n = -18 - Math.cos(t) * 2.5;
      return {
        t: i,
        seed: 53,
        x: e,
        z: n,
        rotY: t + Math.PI / 2,
        phase: i * 0.42 * hi,
        speed: 0.3,
        sway: ge(i, 53),
        headYaw: Math.sin(i * 0.5) * 0.4,
      };
    },
    reader: (i) => {
      let t = (i + 14) % ke,
        e =
          Zt((t - 9) / 0.5) * (1 - Zt((t - 10) / 0.6)) +
          Zt((t - 21) / 0.5) * (1 - Zt((t - 22) / 0.6));
      return {
        t: i,
        seed: 59,
        x: -3.3,
        z: -13.8,
        rotY: 0.9 + ge(i, 59) * 2,
        phase: 0,
        speed: 0,
        sway: ge(i, 59),
        armL: 0.45,
        armR: 0.45 + e * 0.3,
        headPitch: 0.3,
      };
    },
  },
  rM = (i, t, e) => (n) => {
    let s = i(n);
    return ((s.z -= t * (e || Wt.hallLength)), s);
  },
  dd = { scale: 1e3, fly: 3e3 },
  No = 10;
function F_(i) {
  No = Math.min(50, Math.max(1, +i || 10));
}
function aM() {
  return No;
}
function fd(i) {
  let t = 10 / No;
  return { scale: i.scale * t, fly: i.fly * t };
}
function O_(i) {
  let t = String(i || "").toLowerCase();
  return /archive\.html|\/archive(\/|\?|#|$)/.test(t)
    ? "archive"
    : /works\.html|\/works(\/|\?|#|$)/.test(t)
      ? "gallery"
      : /work\.html|\/work\//.test(t)
        ? "work"
        : /about\.html|\/about(\/|\?|#|$)/.test(t)
          ? "office"
          : "hall";
}
function oM(i, t) {
  let e = O_(t),
    n = 10;
  (e === "archive"
    ? (n = 8)
    : ((i === "gallery" && e === "work") ||
        (i === "work" && e === "gallery")) &&
      (n = 17),
    F_(n));
  try {
    window.__ashTempo = n;
  } catch {}
  return n;
}
var ad = new WeakMap(),
  ir = Math.random() * 100;
function Bc(i) {
  let t = [];
  return (
    i.traverse((e) => {
      if (!e.isMesh) return;
      let n = (Array.isArray(e.material) ? e.material : [e.material]).filter(
        Boolean,
      );
      if (!n.length || n.some((r) => r.isShaderMaterial)) return;
      let s = ad.get(e);
      ((!s || Vn.fly === 0) && ((s = { s0: e.scale.clone() }), ad.set(e, s)),
        t.push({ o: e, b: s }));
    }),
    t
  );
}
function od(i) {
  for (let { o: t, b: e } of i) t.scale.copy(e.s0);
  sr(0, 0);
}
function zc(i, t, e, n) {
  for (let { o: s, b: r } of i) {
    let a = Math.max(1e-4, 1 - t * t);
    s.scale.set(r.s0.x * a, r.s0.y * a, r.s0.z * a);
  }
  sr(e, n);
}
function pd(i) {
  return (
    (i.userData.__ashGen = (i.userData.__ashGen || 0) + 1),
    i.userData.__ashGen
  );
}
function lM(i, t, e) {
  e = fd(e || dd);
  let n = pd(i),
    s = Bc(i);
  er++;
  try {
    window.VEASND && VEASND.ash(e.scale + e.fly);
  } catch {}
  ((ir = Math.random() * 100), sr(0, 0, ir));
  let r = performance.now();
  return (
    (function a() {
      if (i.userData.__ashGen !== n) {
        nr();
        return;
      }
      let o = performance.now(),
        c = o - r,
        l = Math.min(1, c / e.scale),
        h = Math.max(0, Math.min(1, (c - e.scale) / e.fly)),
        d = 1 - (1 - h) * (1 - h);
      (zc(s, l, d, o / 1e3),
        c < e.scale + e.fly ? requestAnimationFrame(a) : (t && t(), nr()));
    })(),
    s
  );
}
function cM(i, t, e) {
  if (hd()) {
    od(Bc(i));
    return;
  }
  t = fd(t || dd);
  let n = pd(i),
    s = Bc(i);
  er++;
  try {
    window.VEASND && VEASND.condense(t.fly + t.scale);
  } catch {}
  e != null && (ir = e);
  let r = Math.max(1, Vn.fly || 1);
  (sr(r, performance.now() / 1e3, ir), zc(s, 1, r, performance.now() / 1e3));
  let a = performance.now(),
    o = !1;
  (function c() {
    if (i.userData.__ashGen !== n) {
      nr();
      return;
    }
    let l = performance.now(),
      h = l - a,
      d = Math.min(1, h / t.fly),
      u = r * (1 - d * d);
    if (!o && h >= t.fly) {
      o = !0;
      try {
        window.VEASND && VEASND.settle(t.scale);
      } catch {}
    }
    let f = 1 - Math.max(0, Math.min(1, (h - t.fly) / t.scale));
    (zc(s, f, u, l / 1e3),
      h < t.fly + t.scale ? requestAnimationFrame(c) : (od(s), nr()));
  })();
}
function hM() {
  if (document.getElementById("g3vig")) return;
  let i = document.createElement("div");
  ((i.id = "g3vig"),
    (i.style.cssText =
      "position:fixed;inset:0;z-index:2;pointer-events:none;background:radial-gradient(ellipse at center, transparent 52%, rgba(0,0,0,.16) 74%, rgba(0,0,0,.5) 100%);"));
  let t = document.createElement("div");
  ((t.style.cssText =
    "position:absolute;inset:0;mix-blend-mode:screen;background:radial-gradient(ellipse at 50.6% 50%, transparent 70%, rgba(96,128,255,.055) 90%, rgba(120,150,255,.085) 100%),radial-gradient(ellipse at 49.4% 50%, transparent 70%, rgba(255,96,96,.05) 90%, rgba(255,120,120,.075) 100%);"),
    i.appendChild(t),
    document.body.appendChild(i),
    Oc());
}
function uM() {
  let i = document.getElementById("g3vig");
  i && i.remove();
}
function dM(i, t, e) {
  try {
    sessionStorage.setItem("g3seed", String(ir));
  } catch {}
  try {
    C_();
  } catch {}
  try {
    i.render(t, e);
    let n = i.domElement,
      s = Math.min(1024, n.width),
      r = Math.max(1, Math.round((n.height * s) / n.width)),
      a = document.createElement("canvas");
    ((a.width = s),
      (a.height = r),
      a.getContext("2d").drawImage(n, 0, 0, s, r));
    try {
      sessionStorage.setItem("g3hand", a.toDataURL("image/jpeg", 0.5));
    } catch {
      let c = document.createElement("canvas");
      ((c.width = Math.round(s / 2)),
        (c.height = Math.round(r / 2)),
        c.getContext("2d").drawImage(a, 0, 0, c.width, c.height),
        sessionStorage.setItem("g3hand", c.toDataURL("image/jpeg", 0.42)));
    }
  } catch {}
}
function fM(i) {
  try {
    document.documentElement.classList.remove("spaceboot");
  } catch {}
  try {
    document.documentElement.classList.remove("veaask");
  } catch {}
  try {
    window.__veaSwSync && setTimeout(window.__veaSwSync, 50);
  } catch {}
  let t = document.getElementById("g3boot");
  if (t) {
    try {
      clearTimeout(window.__g3bootT);
    } catch {}
    try {
      let e = document.getElementById("g3fill"),
        n = document.getElementById("g3pct");
      (e && (e.style.transform = "scaleX(1)"), n && (n.textContent = "100"));
    } catch {}
    i
      ? (t.classList.add("lift"),
        setTimeout(() => {
          t.hidden = !0;
        }, 700))
      : (t.hidden = !0);
  }
}
function pM(i) {
  let t = document.getElementById("g3vh");
  t ||
    ((t = document.createElement("div")),
    (t.id = "g3vh"),
    (t.style.cssText =
      "position:fixed;left:-200vw;top:0;pointer-events:none;overflow:hidden;"),
    document.body.appendChild(t));
  let e = document.createElement("video");
  ((e.muted = !0),
    (e.loop = !0),
    (e.playsInline = !0),
    e.setAttribute("playsinline", ""),
    (e.dataset.nowake = ""),
    (e.dataset.g3room = ""),
    (e.crossOrigin = "anonymous"));
  let n = Math.max(320, Math.round(i || innerWidth * 0.6));
  return (
    (e.style.cssText =
      "display:block;width:" +
      n +
      "px;height:" +
      Math.round((n * 9) / 16) +
      "px;"),
    t.appendChild(e),
    e
  );
}
try {
  window.__g3TabWake ||
    ((window.__g3TabWake = 1),
    document.addEventListener("visibilitychange", () => {
      let i = document.querySelectorAll("video");
      document.hidden
        ? Array.prototype.forEach.call(i, (t) => {
            if (!t.paused) {
              t._tabHeld = 1;
              try {
                t.pause();
              } catch {}
            }
          })
        : Array.prototype.forEach.call(i, (t) => {
            if (t._tabHeld) {
              t._tabHeld = 0;
              try {
                t.play().catch(() => {});
              } catch {}
            }
          });
    }));
} catch {}
var kc = new Set(),
  Vc = new Set(),
  Hc = !1,
  Wc = !1,
  Xc = (i) =>
    !!(
      (i.dataset && i.dataset.g3room !== void 0) ||
      (i.closest && i.closest("#g3vh"))
    ),
  Po = (i) => !!(i.closest && i.closest(".vp, #film"));
function Lo(i, t) {
  if (i && !i.paused) {
    t.add(i);
    try {
      i.pause();
    } catch {}
  }
}
function md(i, t) {
  (i.forEach((e) => {
    if (!(t && t(e)))
      try {
        e.play().catch(() => {});
      } catch {}
  }),
    i.clear());
}
function B_(i) {
  ((Hc = !!i),
    i
      ? document.querySelectorAll("video").forEach((t) => {
          !Xc(t) && !Po(t) && Lo(t, kc);
        })
      : md(kc, null));
}
function mM() {
  return Wc;
}
function z_(i) {
  ((Wc = !!i),
    i
      ? document.querySelectorAll("video").forEach((t) => {
          Po(t) || Lo(t, Vc);
        })
      : md(Vc, (t) => Hc && !Xc(t)));
}
try {
  if (!window.__g3BootMark) {
    window.__g3BootMark = 1;
    let i = document.getElementById("g3boot");
    i &&
      new MutationObserver(() => {
        i.querySelectorAll("video").forEach((t) => {
          if (i.hidden)
            try {
              t.pause();
            } catch {}
          else
            try {
              t.play().catch(() => {});
            } catch {}
        });
      }).observe(i, { attributes: !0, attributeFilter: ["hidden"] });
  }
} catch {}
try {
  window.__veaSolo = z_;
} catch {}
try {
  window.__g3Solo ||
    ((window.__g3Solo = 1),
    document.addEventListener(
      "play",
      (i) => {
        let t = i.target;
        if (!(!t || t.tagName !== "VIDEO")) {
          if (Wc) {
            Po(t) || Lo(t, Vc);
            return;
          }
          Hc && !Xc(t) && !Po(t) && Lo(t, kc);
        }
      },
      !0,
    ));
} catch {}
var hn = null;
function gd() {
  return (
    hn ||
    ((hn = document.getElementById("g3black")),
    hn ||
      ((hn = document.createElement("div")),
      (hn.id = "g3black"),
      (hn.dataset.nodec = ""),
      (hn.style.cssText =
        "position:fixed;inset:0;z-index:2;background:#000;opacity:0;pointer-events:none;transition:opacity 1s ease;"),
      document.body.appendChild(hn),
      hn.offsetWidth),
    hn)
  );
}
function gM(i, t) {
  let e = gd(),
    n = t ?? (i ? 1e3 : 450);
  return (
    (e.style.pointerEvents = i ? "auto" : "none"),
    (e.style.transitionDuration = n + "ms"),
    e.offsetWidth,
    (e.style.opacity = i ? "1" : "0"),
    new Promise((s) => {
      let r = !1,
        a = () => {
          if (!r) {
            r = !0;
            try {
              e.removeEventListener("transitionend", a);
            } catch {}
            s();
          }
        };
      try {
        e.addEventListener("transitionend", a);
      } catch {}
      setTimeout(a, n + 800);
    })
  );
}
function _M(i) {
  if (i) {
    try {
      i._hls && (i._hls.destroy(), (i._hls = null));
    } catch {}
    try {
      (i.pause(), i.removeAttribute("src"), i.load());
    } catch {}
    try {
      i.remove();
    } catch {}
  }
}
function xM(i) {
  try {
    if (!i || i.readyState < 2 || !i.videoWidth) return null;
    let t = Math.min(512, i.videoWidth),
      e = Math.round((t * i.videoHeight) / i.videoWidth),
      n = document.createElement("canvas");
    ((n.width = t), (n.height = e));
    let s = n.getContext("2d");
    if (!s) return null;
    (s.drawImage(i, 0, 0, t, e), s.getImageData(0, 0, 1, 1));
    let r = new Bn(n);
    return ((r.colorSpace = Le), r);
  } catch {
    return null;
  }
}
function yM(i) {
  try {
    let t = ((i || 1200) * 10) / No;
    document
      .querySelectorAll(
        "header.topbar, .w-foot, #g3info, #scCats, #g3q, #sndT, #g3rooms, #g3ctl, #g3look",
      )
      .forEach((e) => {
        ((e.style.transition = "opacity " + t / 1e3 + "s ease"),
          (e.style.opacity = "0"));
      });
  } catch {}
}
var k_ = [
  ["lobby", "Lobby", "./"],
  ["salon", "Gallery", "works.html"],
  ["office", "Office", "about.html"],
  ["archive", "Archive", "archive.html"],
];
function vM(i, t) {
  try {
    B_(!0);
  } catch {}
  try {
    gd();
  } catch {}
  try {
    if (t) {
      (t.setAttribute("role", "application"),
        t.hasAttribute("tabindex") || t.setAttribute("tabindex", "0"));
      try {
        let r = [],
          a = document.querySelector("main");
        (a &&
          Array.prototype.forEach.call(a.children, (o) => {
            o.id === "scCats" ||
              (o.classList && o.classList.contains("sc-cats")) ||
              r.push(o);
          }),
          [
            "wkIhud",
            "wkHud",
            "wkHudInfo",
            "wkDex",
            "wkDexSpace",
            "scInfo",
          ].forEach((o) => {
            let c = document.getElementById(o);
            c && r.push(c);
          }),
          r.forEach((o) => {
            try {
              ((o.inert = !0), o.setAttribute("inert", ""));
            } catch {}
          }));
      } catch {}
      let s = {
        lobby: "the lobby, the building in street view",
        salon: "the gallery, the works",
        work: "the rotunda, one work up close",
        office: "the office, about the studio",
      };
      t.setAttribute(
        "aria-label",
        "3D room: " +
          (s[i] || i) +
          (Gc
            ? ". Drag sideways to look, drag down to walk, tap what glows."
            : ". Drag to look, scroll to move, click what glows."),
      );
    }
    let e = document.getElementById("g3rooms");
    (e ||
      ((e = document.createElement("nav")),
      (e.id = "g3rooms"),
      e.setAttribute("aria-label", "Rooms"),
      document.body.appendChild(e)),
      (e.style.transition = e.style.opacity = ""));
    let n = k_.slice();
    (i === "work" && n.splice(2, 0, ["work", "Rotunda", null]),
      (e.innerHTML = n
        .map(([s, r, a]) => {
          let o = s === i ? ' aria-current="true"' : "";
          return a && s !== i
            ? '<a href="' + a + '"' + o + ">" + r + "</a>"
            : "<a" + o + ">" + r + "</a>";
        })
        .join("")),
      requestAnimationFrame(() => e.classList.add("on")));
    try {
      window.__veaSwSync && window.__veaSwSync();
    } catch {}
    try {
      _d(i);
    } catch {}
    try {
      V_(i);
    } catch {}
    if (
      window.matchMedia &&
      matchMedia("(pointer: coarse)").matches &&
      !document.getElementById("g3soc")
    ) {
      let s = document.createElement("div");
      ((s.id = "g3soc"),
        (s.dataset.nodec = ""),
        (s.style.cssText =
          "position:fixed;left:calc(16px + env(safe-area-inset-left,0px));bottom:calc(18px + env(safe-area-inset-bottom,0px));z-index:30;display:flex;gap:14px;mix-blend-mode:difference;"),
        (s.innerHTML =
          '<a href="/about.html" target="_blank" rel="noopener" aria-label="Instagram" style="display:block;width:17px;height:17px;color:#fff;opacity:.6"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="17" height="17"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg></a><a href="/start.html" aria-label="Mail" style="display:block;width:19px;height:17px;color:#fff;opacity:.6"><svg viewBox="0 0 24 20" fill="none" stroke="currentColor" stroke-width="1.6" width="19" height="17"><rect x="2" y="2.5" width="20" height="15" rx="2.5"/><path d="M3 4.5l9 7 9-7"/></svg></a>'),
        document.body.appendChild(s));
    }
    window.matchMedia &&
      matchMedia("(pointer: coarse)").matches &&
      document.querySelectorAll("main video").forEach((s) => {
        try {
          (s.pause(), (s.autoplay = !1), (s.preload = "none"));
        } catch {}
      });
  } catch {}
}
var Uc = !1,
  Ro = "lobby";
function _d(i, t) {
  if (((Ro = i || Ro), Uc)) return;
  let e = (() => {
    try {
      return matchMedia("(pointer: coarse)").matches || innerWidth <= 860;
    } catch {
      return !1;
    }
  })();
  if (!t) {
    if (!e && i !== "lobby") return;
    let _ = e ? "g3tutM" : "g3tutD";
    try {
      if (sessionStorage.getItem(_)) return;
    } catch {}
    try {
      sessionStorage.setItem(_, "1");
    } catch {}
    try {
      sessionStorage.setItem("v7hint", "1");
      let S = document.getElementById("v7hint");
      S && S.remove();
    } catch {}
  }
  if (((Uc = !0), !document.getElementById("g3tutCSS"))) {
    let _ = document.createElement("style");
    ((_.id = "g3tutCSS"),
      (_.textContent =
        '#g3tut{position:fixed;inset:0;z-index:940;pointer-events:none;background:rgba(0,0,0,.6);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);opacity:0;transition:opacity 1s ease;}#g3tut.on{opacity:1;}#g3tut.bye{opacity:0;transition:opacity 1s ease;}#g3tut .tt-body{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:var(--font-mono);opacity:0;transition:opacity .55s ease;}#g3tut .tt-body.on{opacity:1;}#g3tut .tt-stage{position:relative;width:min(64vw,300px);height:min(64vw,300px);transition:opacity .3s ease;}#g3tut .tt-stage svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible;}#g3tut .tt-cap{margin-top:30px;min-height:16px;color:#fff;font-size:12px;letter-spacing:.34em;text-transform:uppercase;opacity:.95;transition:opacity .3s ease;text-align:center;padding-left:.34em;}#g3tut .tt-sub{margin-top:9px;min-height:12px;color:#fff;font-size:9.5px;letter-spacing:.26em;text-transform:uppercase;opacity:.55;transition:opacity .3s ease;text-align:center;padding-left:.26em;}#g3tut .off{opacity:0!important;}#g3tut .tt-skip{pointer-events:auto;position:absolute;left:50%;transform:translateX(-50%);bottom:calc(8vh + env(safe-area-inset-bottom,0px));appearance:none;background:none;border:0;color:#fff;opacity:.5;font-family:var(--font-mono);font-size:10px;letter-spacing:.3em;text-transform:uppercase;padding:14px 24px;cursor:pointer;transition:opacity .3s;}#g3tut .tt-skip:hover{opacity:.95;}#g3tut .tt-grid{display:flex;gap:min(4vw,52px);align-items:flex-start;justify-content:center;width:100%;padding:0 4vw;box-sizing:border-box;}#g3tut .tt-card{display:flex;flex-direction:column;align-items:center;flex:1 1 0;min-width:0;max-width:340px;}#g3tut .tt-card .tt-stage2{position:relative;width:100%;max-width:250px;aspect-ratio:1/1;margin:0 auto;}#g3tut .tt-card .tt-stage2 svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible;}#g3tut.tt-grid-on [style*="animation"]{animation-iteration-count:infinite!important;}#g3tut.tt-grid-on .tt-skip{position:static;left:auto;bottom:auto;transform:none;margin:22px auto 0;}#g3tut.tt-grid-on .tt-body{justify-content:center;padding:4vh 0;}@media (max-width:860px){#g3tut .tt-grid{flex-direction:column;gap:min(3vh,20px);align-items:center;padding:0 4vw;}#g3tut .tt-card{max-width:min(64vw,240px);}#g3tut .tt-card .tt-stage2{max-width:132px;}#g3tut.tt-grid-on .tt-body{justify-content:flex-start;overflow-y:auto;padding:5vh 0 4vh;}#g3tut.tt-grid-on .tt-cap{margin-top:14px;}}@keyframes ttSwUp{0%{transform:translateY(-84px);opacity:0;}10%{opacity:1;}52%{transform:translateY(84px);opacity:1;}64%{opacity:0;}100%{transform:translateY(-84px);opacity:0;}}@keyframes ttSwLR{0%{transform:translateX(88px);opacity:0;}8%{opacity:1;}44%{transform:translateX(-88px);opacity:1;}52%{transform:translateX(-88px);opacity:1;}92%{transform:translateX(88px);opacity:1;}100%{transform:translateX(88px);opacity:0;}}@keyframes ttStep{from{transform:scale(1);opacity:.95;}to{transform:scale(.02);opacity:.8;}}@keyframes ttPress{0%,74%{opacity:0;}86%{opacity:1;}100%{opacity:0;}}@keyframes ttNotch{to{transform:translateY(5.5px);}}@keyframes ttKey{0%,100%{opacity:.4;transform:translateY(0);}50%{opacity:1;transform:translateY(1.5px);}}@keyframes ttTilt{0%,100%{transform:rotate(0deg);}30%{transform:rotate(-10deg);}70%{transform:rotate(10deg);}}@keyframes ttPulse{0%,100%{opacity:.25;}50%{opacity:1;}}@keyframes ttRipple{from{opacity:.7;transform:scale(.25);}to{opacity:0;transform:scale(1.3);}}html.g3tut-on #cur{z-index:2147483647!important;}html.g3tut-on #cur.big,html.g3tut-on #cur.mid{width:18px!important;height:18px!important;}html.g3tut-on #cur.big span,html.g3tut-on #cur.mid span{opacity:0!important;}html.g3tut-on #g3tut .tt-skip{cursor:pointer!important;}#g3tut,#g3tut *{touch-action:manipulation;}'),
      document.head.appendChild(_));
  }
  let n = document.createElement("div");
  ((n.id = "g3tut"),
    (n.dataset.nodec = ""),
    n.setAttribute("role", "dialog"),
    n.setAttribute(
      "aria-label",
      "Controls: how to move, look, and open. Press Escape to skip.",
    ));
  let s = 'stroke="#fff" stroke-width="1.5" stroke-linecap="round" fill="none"',
    r = (_) =>
      '<defs><radialGradient id="' +
      _ +
      '"><stop offset="0%" stop-color="#fff" stop-opacity="1"/><stop offset="38%" stop-color="#fff" stop-opacity=".8"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>',
    a = (_, S) =>
      '<g style="animation:' +
      S +
      '"><circle r="17" fill="url(#' +
      _ +
      ')"/><circle r="5" fill="#fff"/></g><circle r="12" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="1.5" style="animation:' +
      S +
      ';animation-delay:.12s"/><circle r="17" fill="none" stroke="#fff" stroke-opacity=".17" stroke-width="1.2" style="animation:' +
      S +
      ';animation-delay:.22s"/><circle r="22" fill="none" stroke="#fff" stroke-opacity=".08" stroke-width="1" style="animation:' +
      S +
      ';animation-delay:.34s"/>',
    o = (_, S) => {
      let C = S === "body" ? "1" : ".5",
        I = S === "wheel" ? "1" : ".5",
        U =
          S === "wheel"
            ? ' style="animation:ttNotch .55s linear infinite"'
            : "";
      return (
        '<g opacity="' +
        C +
        '"><rect x="' +
        (_ - 22.5) +
        '" y="88" width="45" height="74" rx="22.5" ' +
        s +
        '/></g><g opacity="' +
        I +
        '"><rect x="' +
        (_ - 3) +
        '" y="104" width="6" height="17" rx="3" ' +
        s +
        ' stroke-width="1.2"/><clipPath id="ttw' +
        _ +
        '"><rect x="' +
        (_ - 2.4) +
        '" y="105" width="4.8" height="15"/></clipPath><g clip-path="url(#ttw' +
        _ +
        ')"' +
        U +
        ">" +
        [0, 1, 2, 3, 4]
          .map(
            (Z) =>
              '<line x1="' +
              (_ - 2.4) +
              '" y1="' +
              (102 + Z * 5.5) +
              '" x2="' +
              (_ + 2.4) +
              '" y2="' +
              (102 + Z * 5.5) +
              '" stroke="#fff" stroke-width="1"/>',
          )
          .join("") +
        "</g></g>"
      );
    },
    c = (_, S, C, I) =>
      '<g style="animation:ttKey 1.5s ease infinite' +
      (I === "down" ? ";animation-delay:.75s" : "") +
      '"><rect x="' +
      _ +
      '" y="' +
      S +
      '" width="' +
      C +
      '" height="22" rx="4" ' +
      s +
      ' stroke-width="1.2"/>' +
      (I === "up"
        ? '<path d="M' +
          (_ + C / 2 - 4) +
          " " +
          (S + 13) +
          ' l4 -5 l4 5" ' +
          s +
          ' stroke-width="1.2"/>'
        : I === "down"
          ? '<path d="M' +
            (_ + C / 2 - 4) +
            " " +
            (S + 9) +
            ' l4 5 l4 -5" ' +
            s +
            ' stroke-width="1.2"/>'
          : '<text x="' +
            (_ + C / 2) +
            '" y="' +
            (S + 14.5) +
            '" fill="#fff" font-size="9" letter-spacing="2" text-anchor="middle" stroke="none" style="font-family:var(--font-mono)">' +
            I +
            "</text>") +
      "</g>",
    l = e
      ? [
          [
            '<svg viewBox="0 0 300 300">' +
              r("ttfgA") +
              '<g transform="translate(150,150)">' +
              a("ttfgA", "ttSwUp 2s cubic-bezier(.55,0,.25,1) 2 both") +
              "</g></svg>",
            "move forward",
            "drag down to walk on \xB7 up to step back",
            4e3,
          ],
          [
            '<svg viewBox="0 0 300 300">' +
              r("ttfgB") +
              '<g transform="translate(150,150)">' +
              a("ttfgB", "ttSwLR 4s cubic-bezier(.55,0,.25,1) both") +
              "</g></svg>",
            "rotate your view",
            "swipe left \xB7 right to look around",
            4e3,
          ],
          [
            '<svg viewBox="0 0 300 300">' +
              r("ttfgC") +
              '<g transform="translate(150,150)"><circle r="84" fill="none" stroke="#fff" stroke-width="1.5" style="transform-box:fill-box;transform-origin:center;animation:ttStep 2s steps(50,end) 2 both"/><circle r="2.6" fill="#fff" opacity=".9"/><circle r="16" fill="url(#ttfgC)" style="animation:ttPress 2s ease 2 both"/></g></svg>',
            "touch to open",
            "tap a glowing screen",
            4e3,
          ],
        ]
      : [
          [
            '<svg viewBox="0 0 300 300">' +
              o(150, "wheel") +
              c(116, 196, 22, "up") +
              c(162, 196, 22, "down") +
              "</svg>",
            "move forward",
            "scroll the wheel \xB7 or arrow keys \u2191 \u2193",
            4e3,
          ],
          [
            '<svg viewBox="0 0 300 300"><g style="transform-origin:150px 125px;animation:ttTilt 4s cubic-bezier(.77,0,.18,1) infinite">' +
              o(150, "body") +
              '<path d="M150 88 a22.5 22.5 0 0 0 -22.5 22.5 v15.5 h22.5 z" fill="rgba(255,255,255,.34)" stroke="none"/><circle cx="139" cy="103.5" r="10" ' +
              s +
              ' stroke-width="1" opacity=".55"/></g><path d="M78 196 A 86 86 0 0 1 222 196" ' +
              s +
              ' stroke-width="1" stroke-dasharray="4 8" opacity=".5"/><circle r="3" fill="#fff"><animateMotion dur="4s" repeatCount="indefinite" path="M78 196 A 86 86 0 0 1 222 196" keyPoints="0;1;0" keyTimes="0;.5;1" calcMode="linear"/></circle></svg>',
            "rotate your view",
            "hold the left button and drag",
            4e3,
          ],
          [
            '<svg viewBox="0 0 300 300">' +
              c(64, 132, 74, "ENTER") +
              o(199, "off") +
              '<path d="M199 88 a22.5 22.5 0 0 0 -22.5 22.5 v15.5 h22.5 z" fill="rgba(255,255,255,.3)" stroke="none" style="animation:ttPulse .9s ease infinite"/><circle cx="188" cy="104" r="11" ' +
              s +
              ' stroke-width="1" style="transform-origin:188px 104px;animation:ttRipple 1.15s ease-out infinite"/></svg>',
            "click \xB7 enter to open",
            "click what glows \xB7 or press enter",
            4e3,
          ],
        ],
    d = {
      office: {
        look: [
          "look around",
          e
            ? "swipe left \xB7 right to turn the room"
            : "hold the left button and drag",
        ],
        open: [
          "touch to read",
          e ? "tap a glowing prop" : "click what glows \xB7 or press enter",
        ],
      },
      work: {
        look: [
          "turn the work",
          e ? "swipe left \xB7 right to turn" : "hold the left button and drag",
        ],
        open: [
          "touch to open",
          e ? "tap a screen" : "click a screen \xB7 or press enter",
        ],
      },
    }[Ro];
  (d &&
    l.length >= 3 &&
    (l = [
      [l[1][0], d.look[0], d.look[1], l[1][3]],
      [l[2][0], d.open[0], d.open[1], l[2][3]],
    ]),
    (n.innerHTML = t
      ? '<div class="tt-body"><div class="tt-grid">' +
        l
          .map(
            (_) =>
              '<div class="tt-card"><div class="tt-stage2" aria-hidden="true">' +
              _[0] +
              '</div><div class="tt-cap">' +
              _[1] +
              '</div><div class="tt-sub">' +
              _[2] +
              "</div></div>",
          )
          .join("") +
        '</div><button type="button" class="tt-skip" aria-label="Close the controls reference">close</button></div>'
      : '<div class="tt-body"><div class="tt-stage" aria-hidden="true"></div><div class="tt-cap"></div><div class="tt-sub"></div><button type="button" class="tt-skip" aria-label="Skip the controls lesson">skip</button></div>'));
  let u = n.querySelector(".tt-stage"),
    f = [],
    g = (_, S) => f.push(setTimeout(S, _)),
    y = !1,
    m = null,
    p = !t,
    b = () => {
      if (y) return;
      ((y = !0),
        f.forEach(clearTimeout),
        n.classList.remove("on"),
        n.classList.add("bye"));
      let _ = n.querySelector(".tt-body");
      _ && _.classList.remove("on");
      try {
        document.documentElement.classList.remove("g3tut-on");
      } catch {}
      (window.removeEventListener("pointerdown", w, !0),
        window.removeEventListener("keydown", v, !0),
        m && (window.removeEventListener("keydown", m, !0), (m = null)),
        setTimeout(() => {
          try {
            n.remove();
          } catch {}
          Uc = !1;
        }, 1050));
    },
    w = (_) => {
      (!_.target.closest || !_.target.closest(".tt-skip")) && b();
    },
    v = (_) => {
      if (_.key === "Escape" || _.key === "Esc") {
        try {
          (_.preventDefault(), _.stopPropagation());
        } catch {}
        b();
      }
    },
    A = (_) => {
      let S = n.querySelector(".tt-cap"),
        C = n.querySelector(".tt-sub"),
        I = () => {
          ((u.innerHTML = l[_][0]),
            (S.textContent = l[_][1]),
            (C.textContent = l[_][2]),
            u.classList.remove("off"),
            S.classList.remove("off"),
            C.classList.remove("off"));
        };
      if (_ === 0) {
        I();
        return;
      }
      (u.classList.add("off"),
        S.classList.add("off"),
        C.classList.add("off"),
        setTimeout(I, 300));
    },
    T = () => {
      if (y) return;
      (document.body.appendChild(n),
        n.querySelector(".tt-skip").addEventListener("click", b));
      try {
        document.documentElement.classList.add("g3tut-on");
      } catch {}
      if ((window.addEventListener("keydown", v, !0), t)) {
        (n.classList.add("tt-grid-on"),
          g(30, () => {
            n.classList.add("on");
          }),
          g(360, () => {
            let C = n.querySelector(".tt-body");
            C && C.classList.add("on");
          }),
          g(1e4, b));
        return;
      }
      if (p) {
        try {
          n.style.pointerEvents = "auto";
        } catch {}
        (n.addEventListener("pointerdown", (C) => {
          (C.target && C.target.closest && C.target.closest(".tt-skip")) || b();
        }),
          n.setAttribute("tabindex", "-1"),
          (m = (C) => {
            if (C.key !== "Tab") return;
            let I = [].slice.call(
              n.querySelectorAll(
                'button:not([disabled]),a[href],[tabindex]:not([tabindex="-1"])',
              ),
            );
            if (!I.length) {
              C.preventDefault();
              return;
            }
            let U = I[0],
              Z = I[I.length - 1],
              k = document.activeElement,
              F = n.contains(k) && k !== n;
            C.shiftKey
              ? (!F || k === U) && (C.preventDefault(), Z.focus())
              : (!F || k === Z) && (C.preventDefault(), U.focus());
          }),
          window.addEventListener("keydown", m, !0));
        try {
          n.focus();
        } catch {}
      }
      let _ = n.querySelector(".tt-body");
      g(30, () => {
        n.classList.add("on");
      });
      let S = 1e3;
      g(S, () => {
        (_.classList.add("on"), A(0));
      });
      for (let C = 1; C < l.length; C++) {
        S += l[C - 1][3];
        let I = C;
        g(S, () => {
          (A(I),
            I === l.length - 1 &&
              !p &&
              window.addEventListener("pointerdown", w, !0));
        });
      }
      g(S + l[l.length - 1][3] + 900, b);
    };
  var R = !1;
  try {
    R =
      !e &&
      i === "lobby" &&
      !t &&
      !window.__veaEntered &&
      !!(window.__veaIntroPending || window.__veaIntro);
  } catch {}
  if (R) {
    let _ = setInterval(() => {
      if (y) {
        clearInterval(_);
        return;
      }
      var S = !1;
      try {
        S = !!window.__veaEntered && window.__veaIntro !== !0;
      } catch {}
      S && (clearInterval(_), setTimeout(T, 1200));
    }, 200);
    f.push(_);
  } else setTimeout(T, t ? 40 : 560);
}
function V_(i) {
  try {
    let e = (() => {
      try {
        return matchMedia("(pointer: coarse)").matches || innerWidth <= 860;
      } catch {
        return !1;
      }
    })();
    if (!/archive\.html/i.test(location.pathname)) {
      if (i === "salon") G_(e);
      else if (i !== void 0) {
        let s = document.getElementById("g3look");
        s && s.parentNode && s.parentNode.removeChild(s);
      }
    }
    if (
      document.getElementById("g3ctl") ||
      /archive\.html/i.test(location.pathname)
    )
      return;
    if (!document.getElementById("g3dockCss")) {
      let s = document.createElement("style");
      ((s.id = "g3dockCss"),
        (s.textContent =
          "#g3q,#sndT.snd-corner,#g3ctl,#g3look{position:fixed!important;left:auto!important;right:calc(16px + env(safe-area-inset-right,0px))!important;width:106px!important;box-sizing:border-box!important;display:flex!important;flex-direction:row!important;align-items:center!important;justify-content:flex-end!important;gap:7px!important;padding:5px 0!important;font-size:9px!important;letter-spacing:.18em!important;opacity:.8!important;}#g3q{gap:0!important;}#g3q.qexp{width:max-content!important;max-width:none!important;overflow:visible!important;}#g3q .qr-x{transition:opacity .42s ease,transform .42s cubic-bezier(.34,0,.2,1)!important;}#g3q:not(.qexp) .qr-x{max-width:0!important;opacity:0!important;overflow:hidden!important;transform:translateX(7px)!important;}#g3q.qexp .qr-x{max-width:150px!important;opacity:1!important;overflow:visible!important;transform:none!important;}#g3q{bottom:calc(18px + env(safe-area-inset-bottom,0px))!important;}#sndT.snd-corner{bottom:calc(44px + env(safe-area-inset-bottom,0px))!important;}#g3ctl{bottom:calc(70px + env(safe-area-inset-bottom,0px))!important;}#g3look{bottom:calc(96px + env(safe-area-inset-bottom,0px))!important;}#g3q>.qs-x,#g3q>.qslot,#sndT.snd-corner>.rg,#g3ctl>.ct-ic,#g3look>.ct-ic{flex:0 0 14px!important;box-sizing:border-box!important;padding:0!important;margin:0!important;}#sndT.snd-corner>.rg{display:block!important;width:14px!important;height:14px!important;}#g3ctl>.ct-ic{display:block!important;width:14px!important;height:auto!important;}#g3look>.ct-ic{display:inline-flex!important;align-items:center!important;justify-content:center!important;width:14px!important;font-size:11px!important;line-height:1!important;}#g3q>.qs-x{display:inline-flex!important;align-items:center!important;justify-content:center!important;width:14px!important;height:14px!important;font-size:11px!important;}#g3q>.qslot{display:inline-block!important;width:14px!important;height:1px!important;}#g3q>.qs-x,#g3q>.qslot{margin-right:7px!important;}#sndT.snd-corner .spk{display:none!important;}#sndT.snd-corner{line-height:1!important;}#sndT.snd-corner .lb{display:inline-block!important;line-height:1!important;}#g3q a,#g3q .qsl,#sndT.snd-corner .lb,#g3ctl .ct-lb,#g3look .ct-lb{text-align:right!important;}@media (max-width:860px){#g3q,#sndT.snd-corner,#g3ctl,#g3look{right:calc(var(--pad) + env(safe-area-inset-right,0px))!important;font-size:9px!important;}#g3q,#sndT.snd-corner,#g3ctl,#g3look{width:118px!important;}}"),
        (document.head || document.documentElement).appendChild(s));
    }
    let n = document.createElement("button");
    ((n.id = "g3ctl"), (n.type = "button"), (n.dataset.nodec = ""));
    var t =
      '<svg class="ct-ic" width="19" height="14" viewBox="0 0 19 14" aria-hidden="true" style="display:block;flex:0 0 auto;width:19px;"><g fill="none" stroke="#fff" stroke-width="1" stroke-linejoin="round"><rect x="7" y="0.6" width="4.9" height="4.9" rx="1.1"/><rect x="1.1" y="6.4" width="4.9" height="4.9" rx="1.1"/><rect x="7" y="6.4" width="4.9" height="4.9" rx="1.1"/><rect x="12.9" y="6.4" width="4.9" height="4.9" rx="1.1"/></g><g fill="#fff"><path d="M9.45 2 l1 1.35 h-2 z"/><path d="M2.4 9 l1.35 -1 v2 z"/><path d="M9.45 9.7 l-1 -1.35 h2 z"/><path d="M16.35 9 l-1.35 -1 v2 z"/></g></svg>';
    ((n.innerHTML = t + '<span class="ct-lb">controls</span>'),
      n.setAttribute(
        "aria-label",
        "Replay the controls lesson: how to move, look and open",
      ),
      (n.style.cssText =
        "position:fixed;z-index:30;appearance:none;background:none;border:0;color:#fff;mix-blend-mode:difference;font-family:var(--font-mono);text-transform:uppercase;cursor:pointer;letter-spacing:.18em;transition:opacity .3s;display:inline-flex;align-items:center;justify-content:flex-start;gap:6px;box-sizing:border-box;right:" +
        (e
          ? "calc(4px + env(safe-area-inset-right,0px));bottom:calc(74px + env(safe-area-inset-bottom,0px));font-size:9px;width:90px;padding:6px 0;"
          : "14px;bottom:74px;font-size:10px;width:98px;padding:6px 0;")),
      n.addEventListener("mouseenter", () => {
        n.style.opacity = ".95";
      }),
      n.addEventListener("mouseleave", () => {
        n.style.opacity = "";
      }),
      n.addEventListener("click", () => {
        try {
          _d(Ro, !0);
        } catch {}
      }),
      document.body.appendChild(n));
  } catch {}
}
function G_(i) {
  try {
    if (document.getElementById("g3look")) return;
    let t = document.createElement("button");
    ((t.id = "g3look"), (t.type = "button"), (t.dataset.nodec = ""));
    let e = () => {
      ((t.innerHTML =
        '<span class="ct-ic" aria-hidden="true" style="flex:0 0 auto;width:19px;text-align:center;font-size:1.05em;line-height:1;">' +
        (window.__veaStraight ? "\u25A1" : "\u25A3") +
        '</span><span class="ct-lb">auto-look</span>'),
        t.setAttribute("aria-pressed", String(!window.__veaStraight)),
        t.setAttribute(
          "aria-label",
          window.__veaStraight
            ? "Auto-look is off, the camera holds straight"
            : "Auto-look is on",
        ));
    };
    (e(),
      (t.style.cssText =
        "position:fixed;z-index:30;appearance:none;background:none;border:0;color:#fff;mix-blend-mode:difference;font-family:var(--font-mono);text-transform:uppercase;cursor:pointer;letter-spacing:.18em;transition:opacity .3s;display:inline-flex;align-items:center;justify-content:flex-start;gap:6px;box-sizing:border-box;right:" +
        (i
          ? "calc(4px + env(safe-area-inset-right,0px));bottom:calc(104px + env(safe-area-inset-bottom,0px));font-size:9px;width:90px;padding:6px 0;"
          : "14px;bottom:104px;font-size:10px;width:98px;padding:6px 0;")),
      t.addEventListener("mouseenter", () => {
        t.style.opacity = ".95";
      }),
      t.addEventListener("mouseleave", () => {
        t.style.opacity = "";
      }),
      t.addEventListener("click", () => {
        window.__veaStraight = !window.__veaStraight;
        try {
          localStorage.setItem("veaStraight", window.__veaStraight ? "1" : "0");
        } catch {}
        e();
      }),
      document.body.appendChild(t));
  } catch {}
}
function MM(i) {
  try {
    if (sessionStorage.getItem("v7hint")) return;
    sessionStorage.setItem("v7hint", "1");
    let t = document.createElement("div");
    ((t.id = "v7hint"),
      t.setAttribute("aria-hidden", "true"),
      (t.innerHTML = i + "<small>this fades, the line below stays</small>"),
      document.body.appendChild(t),
      requestAnimationFrame(() =>
        requestAnimationFrame(() => t.classList.add("on")),
      ));
    let e = !1,
      n = () => {
        e ||
          ((e = !0),
          t.classList.remove("on"),
          setTimeout(() => t.remove(), 1100),
          ["pointerdown", "wheel", "keydown", "touchstart"].forEach((s) =>
            window.removeEventListener(s, n),
          ));
      };
    (setTimeout(n, 5200),
      setTimeout(
        () =>
          ["pointerdown", "wheel", "keydown", "touchstart"].forEach((s) =>
            window.addEventListener(s, n, { passive: !0 }),
          ),
        900,
      ));
  } catch {}
}
function SM() {
  let i = [];
  return {
    on(t, e, n, s) {
      return (t.addEventListener(e, n, s), i.push([t, e, n, s]), n);
    },
    offAll() {
      for (let [t, e, n, s] of i)
        try {
          t.removeEventListener(e, n, s);
        } catch {}
      i.length = 0;
    },
  };
}
var Fc = null,
  ld = !1;
function bM(i) {
  ((Fc = i),
    !ld &&
      ((ld = !0),
      document.addEventListener(
        "click",
        (t) => {
          if (!window.__g3on || !Fc) return;
          let e =
            t.target.closest &&
            t.target.closest("header a[href], #menu a[href], nav a[href]");
          if (!e) return;
          let n = e.getAttribute("href");
          if (
            !n ||
            e.target === "_blank" ||
            n.charAt(0) === "#" ||
            /^(https?:)?\/\//i.test(n) ||
            /^mailto:|^tel:/i.test(n)
          )
            return;
          if (!/^(?:[a-z][a-z0-9+.-]*:|\/)/i.test(n))
            try {
              window.VEA &&
                VEA.siteRoot &&
                (n = VEA.siteRoot() + (n === "./" ? "" : n));
            } catch {}
          (t.preventDefault(), t.stopImmediatePropagation());
          let s = document.getElementById("menu");
          (s && s.classList.remove("open"), Fc(n));
        },
        { capture: !0 },
      )));
}
function wM(i) {
  if (!i || i === "./" || i === "/" || /index\.html/i.test(i)) return "Home";
  let t = String(i).match(/([a-z0-9-]+)\.html/i);
  return t ? t[1].charAt(0).toUpperCase() + t[1].slice(1) : String(i);
}
function EM({ scene: i, renderer: t, links: e }) {
  let n = new _n();
  ((n.visible = !1), i.add(n));
  let s = [],
    r = e.map((l, h) => {
      let d = Io(l.label.toUpperCase(), { stroke: !1, px: 300 }),
        u = Io(l.label.toUpperCase(), { stroke: !0, px: 300 }),
        f = 0.92,
        g = f * d.aspect,
        y = new fe(
          new Ee(g, f),
          new an({
            map: d.tex,
            transparent: !0,
            opacity: 0.96,
            toneMapped: !1,
          }),
        );
      return (
        (y.userData.href = l.href),
        (y.userData.label = l.label),
        (y.userData.fillTex = d.tex),
        (y.userData.lineTex = u.tex),
        n.add(y),
        s.push(y),
        y
      );
    }),
    a = !1,
    o = t.toneMappingExposure;
  return {
    targets: s,
    get isOpen() {
      return a;
    },
    open(l) {
      if (a) return;
      ((a = !0), (o = t.toneMappingExposure));
      let h = new L();
      (l.getWorldDirection(h), (h.y = 0), h.normalize());
      let d = l.position.clone().addScaledVector(h, -7.5);
      d.y = 0;
      let u = 2.35 + ((r.length - 1) * 1.12) / 2;
      (r.forEach((f, g) => {
        (f.position.set(d.x, u - g * 1.12, d.z),
          f.lookAt(l.position.x, f.position.y, l.position.z));
      }),
        (n.visible = !0));
    },
    close() {
      a && ((a = !1), (n.visible = !1));
    },
    update(l) {
      let h = a ? o * 0.32 : o,
        d = 1 - Math.pow(0.9, l / 16.7);
      ((t.toneMappingExposure += (h - t.toneMappingExposure) * d),
        !a &&
          Math.abs(t.toneMappingExposure - o) < 0.01 &&
          (t.toneMappingExposure = o));
    },
    setHover(l) {
      r.forEach((h) => {
        let d = h === l;
        ((h.material.map = d ? h.userData.lineTex : h.userData.fillTex),
          (h.material.opacity = d ? 1 : 0.96));
      });
    },
  };
}
export {
  Ve as a,
  wn as b,
  xi as c,
  bi as d,
  Zl as e,
  Zr as f,
  Tn as g,
  Le as h,
  ut as i,
  Mn as j,
  L as k,
  _e as l,
  Ye as m,
  he as n,
  _n as o,
  Jt as p,
  _l as q,
  xl as r,
  Be as s,
  ne as t,
  me as u,
  an as v,
  fe as w,
  mn as x,
  ei as y,
  Es as z,
  bn as A,
  vl as B,
  Bn as C,
  Ml as D,
  ra as E,
  Sl as F,
  bl as G,
  Ds as H,
  Cl as I,
  Ee as J,
  Rl as K,
  Os as L,
  bu as M,
  Je as N,
  Bs as O,
  Il as P,
  Pl as Q,
  Oe as R,
  Dl as S,
  Ul as T,
  Fl as U,
  Bl as V,
  Yu as W,
  v_ as X,
  hd as Y,
  ud as Z,
  M_ as _,
  Xv as $,
  qv as aa,
  Wt as ba,
  Ke as ca,
  C_ as da,
  Yv as ea,
  Co as fa,
  Zv as ga,
  sr as ha,
  Ai as ia,
  Pe as ja,
  Io as ka,
  Jv as la,
  $v as ma,
  Kv as na,
  nd as oa,
  tr as pa,
  Dc as qa,
  Qv as ra,
  jv as sa,
  tM as ta,
  eM as ua,
  nM as va,
  iM as wa,
  Zt as xa,
  sM as ya,
  rM as za,
  F_ as Aa,
  aM as Ba,
  oM as Ca,
  lM as Da,
  cM as Ea,
  hM as Fa,
  uM as Ga,
  dM as Ha,
  fM as Ia,
  pM as Ja,
  B_ as Ka,
  mM as La,
  z_ as Ma,
  gM as Na,
  _M as Oa,
  xM as Pa,
  yM as Qa,
  vM as Ra,
  MM as Sa,
  SM as Ta,
  bM as Ua,
  wM as Va,
  EM as Wa,
};
