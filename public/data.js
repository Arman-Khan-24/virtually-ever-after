/* ═══════════════════════════════════════════════════════════════════
   VEA v2, shared works data pipeline.
   Same Google Sheet + parsing rules as works3.html, exposed as a tiny
   global (window.VEA) shared by index / works / project pages.
   ═══════════════════════════════════════════════════════════════════ */
(function(){
'use strict';

const LS_KEY = 'veaV2Cache3';   /* bumped: works now carry column-P (pinfo) */

/* ──────────────── LOCAL-FIRST data source ────────────────
   The two committed CSVs (vea_files.csv = the archive sheet, and
   vea_files_WORKS.csv = the showcase sheet) sit right next to this
   script on our OWN origin. A same-origin file can never hang, 404 or
   stall the way the Google Sheet endpoints can, so we read the local
   copy FIRST to boot the room instantly, then quietly refresh from the
   live sheet in the background. Their paths are resolved against this
   script's own URL, not the page's, so the pretty /work/<slug>
   addresses (whose document lives one level deeper) still find them. */
const DATA_DIR = (function(){
  try{
    var s = document.currentScript && document.currentScript.src;
    if(s) return s.replace(/[?#].*$/, '').replace(/[^/]*$/, '');
  }catch(_){}
  return '';   /* relative, resolves against <base> (the build root) */
})();
const LOCAL_WORKS    = DATA_DIR + 'vea_files.csv';
const LOCAL_SHOWCASE = DATA_DIR + 'vea_files_WORKS.csv';

/* GitHub *release* videos don't stream on mobile (octet-stream +
   attachment + redirect + no CORS). The deployed Worker proxies them as
   clean CORS video/mp4, see video-proxy-worker.js at the repo root.   */
const VIDEO_PROXY = '/about.html';

/* ═══ GENERATED, do not hand-edit ═══
   The offline fallback is the 4-second hang guard: if neither the local
   CSV nor the sheet answers, this is the whole site. It used to be typed
   by hand and drifted until it served retired categories the sheet no
   longer has. It is now stamped from the committed CSVs by build.mjs, so
   it cannot go stale again. Edit the sheet, run the build. */
/*vea:fallback*/
const FALLBACK = [
["WEB","STATUS CO","STATUS-CO",2026,"STATUS CO was built from nothing, entirely through digital means, and every part of it had to sit under one language. The website carries that logic. The first drop lives on the site as a spatial copy of the pop-up itself: every object modelled in 3D at true scale, optimised for the web, placed exactly where it stood. Visitors who came to the event can walk the room again and catch the details they missed standing in it. Click an object and it opens its photographs, its specs, the thinking behind it. The site introduces the brand and runs as a live digital twin of the space at the same time.","web","/preview.html?id=faed99642daf","W_01"],
["WEB","Selin Gencoglu","SELINGENCOGLU",2026,"Selin Gencoglu paints demons in dark, unsettling rooms. Her work runs on chaos, fear, tension, unease. The website was built as the place those paintings come from: a 3D world rendered as the source of the imagery. A figure was pulled from each canvas, sketched again by the artist, and placed inside an environment constructed from scratch. Visitors step into that atmosphere and move through it themselves, becoming part of the experience the paintings describe.","web","/preview.html?id=490f01db170b","W_02"],
["WEB","Laila","LAILA",2026,"Laila is built around what a date can actually be, and the landing page argues it in film. Joy, movement, and time spent well together are cut into a single sequence, held in an interface stripped back far enough to explain the whole app in one scroll.","web","/preview.html?id=6188fbe1f502","W_03"],
["WEB","C2W2","C2W2ART",2026,"The C2W2 avatar collection and runway left a large body of material behind. The site organises all of it inside an interface everyone already knows: a desktop file system. Folders open, files are clicked through, and the archive is explored the way people sort their own machines every day. Browsing a website usually feels like visiting one. Minimise the window and the desktop underneath feels like home. C2W2 was built to feel like the desktop.","web","/preview.html?id=dac610913065","W_04"],
["WEB","C2W2","C2W2 Avatars Interface",2026,"A viewer interface for the 48 avatars of the C2W2 collection, drawn in a Blade Runner register. Each design turns in full 360 motion with its data sitting alongside it, so the garment can be read and studied in the same moment it is seen.","web","/preview.html?id=18f6cac20bcd","W_05"],
["WEB","Decentralize Design","decentralize*",2026,"decentralize* works across several mediums, and the archive that came out of it carries disorder and structure in equal measure. The site rebuilds that condition digitally. Years of work in different formats are mapped and organised into one navigable environment that holds the mess and the system together.","web","/preview.html?id=709aaccb1f03","W_06"],
["WEB","Decentralize Design","decentralize design",2026,"Built together with the Milan based digital design studio, the site holds their entire output inside a single UI frame and delivers it piece by piece. The structure was approached architecturally, sections flowing into one another in a clear hierarchy, so the site reads like a building you move through floor by floor.","web","/preview.html?id=84f19d715478","W_07"],
["EVENT","160526 Wedding","Table Arrangement Design Recap",2026,"A continuous metal wave ran across the tables and defined their design. The incense holders given out as favours, designed by DAS Pieces, carried the same line. Projected onto the wall during the event, the two objects were shown speaking one language, reflecting each other and the room until the room took on their aura. A flat metal line grows into the table, and tables placed side by side become a universe built from a single gesture. Guests sitting at those tables watched the design they were sitting inside referenced live, and the fourth wall came down.","video","/assets/offline/b348eaa8d5c3bef5.mp4","E_01"],
["EVENT","160526 Wedding","Das Pieces Favors Digital Recap",2026,"The favours designed by DAS Pieces held the shape that defined the bridal bouquet and the visual identity of the entire wedding. Screened during the event, the film follows that shape as it transforms. The favour becomes the bouquet, the bouquet becomes the decor of the ceremony space, and the sequence closes on an abstract reading of the ceremony itself.","video","/assets/offline/89e1887d41acbd59.mp4","E_02"],
["EVENT","160526 Wedding","Logo Artwork Video",2026,"The film ties the couple to the Virtually Ever After logo they built themselves and to the wedding that came out of it. It runs as a loop. The logo opens into the bride and groom, they open into a celebration of rabbits, and the rabbits fold back into the universe the logo came from.","video","/assets/offline/12cf969f35be819a.mp4","E_03"],
["EVENT","160526 Wedding","Various Graphics over Film sample 1",2026,"A condensed cut of what was projected through the night. Graphics were laid over four different films, chosen for their look and style, tuned to the creative direction and set against older black-and-white footage to build contrast. That doubling comes straight out of the name Virtually Ever After: the digital next to the romantic, the new next to the old. Four fully edited films played across the wedding.","video","/assets/offline/4ffd4941e270bddf.mp4","E_04"],
["EVENT","160526 Wedding","Lovers over Film Sample",2026,"Photographs and footage of the couple were reworked in a wireframe register and rebuilt to sit inside the design language of the wedding. They appeared over the films at points and stood alone at others.","video","/assets/offline/4749d9bf0f2db5fb.mp4","E_05"],
["EVENT","160526 Wedding","Stationary Design",2026,"A full stationery system was designed for the event: invitations, menus, signage, seating elements, printed matter, and custom graphic applications. The identity pulled from the architectural concept of the project, working with minimal typography, metallic finishes, and exhibition-style layouts to hold every physical touchpoint in one consistent register.","pdf","/assets/offline/999e08288fa2f764.pdf","E_06"],
["EVENT","160526 Wedding","Artwork remix",2026,"The couple chose the works that mattered most to them, pieces with a place in their relationship and in their own histories. Each one was translated into the inverted monochrome wireframe language of the wedding.","video","/assets/offline/a77ed33157743999.mp4","E_07"],
["EVENT","160526 Wedding","Locations",2026,"The threshold moments of the couple's relationship were rendered as terrain, built from satellite data and contour lines, with drawings of each place laid over the maps.","video","/assets/offline/9c0f94b249280bd6.mp4","E_08"],
["EVENT","STATUS CO","CO- Pop-up Design Recap",2026,"Cut from footage shot across the event, the film shows the STATUS CO world built by Virtually Ever After standing up in a real room.","video","/assets/offline/36a712458dc1e2e4.mp4","E_09"],
["EVENT","STATUS CO","CO - Pop-up Creation",2026,"Two months of work, run entirely through digital process with the client inside every step of it. The film traces the pop-up from zero: an empty file turning into a three day experience.","video","/assets/offline/b3b83bd7d1095d0a.mp4","E_10"],
["EVENT","STATUS CO","Event Photo Gallery",2026,"Photographs from the three days of ArtShow Galeriler Buluşması 2026, documenting the pop-up space and the way visitors moved through it and handled the designs inside.","web","/preview.html?id=f0f75066f1d5","E_11"],
["EVENT","STATUS CO","CO - Pop-up Creation Drafts File",2026,"A two month design study translating the brand identity into a physical pop-up. Over one hundred design objects were modelled at 1:1 scale with realistic material rendering, giving full control of the layout and the space before anything was built.","pdf","/assets/offline/f15e843d98b7c00e.pdf","E_12"],
["MOTION","Laila","LAILA- short film, dating app",2026,"A short film for the New York dating app Laila. It moves the way the app wants its users to move: fast, out in the city, meeting people. The action-first idea plays out as motion, with real encounters at the centre of every cut.","video","/assets/offline/c358b38a47f7cc9c.mp4","M_01"],
["MOTION","Selin Gencoglu","The Sacrifice",2026,"One of the artist's signature paintings, opened out beyond its own frame and animated. The piece runs at the entrance of the website and sets the world the rest of the site is built inside.","video","/assets/offline/428c902134c636fe.mp4","M_02"],
["MOTION","Novantatre","Yearbook",2025,"The first art direction and creative direction piece made with Novantatre. At the close of the year, the buildings completed over those twelve months were gathered into a cut out book, built from borderless cardboard in the Ancora bordeaux of the brand. The yearbook opens onto five projects. Each page lifts into a model, the building appears from the outside, and the camera moves in to walk through it.","video","/assets/offline/63f779885b51fd3e.mp4","M_03"],
["MOTION","Decentralize Design","Short Film",2026,"A three minute short film on what the studio does, how it approaches design and the world around it, and where its thinking breaks from the standard. The language was pitched to stay open to a general audience while holding the register of both Virtually Ever After and Decentralize Design.","video","/assets/offline/6c57fc2618468442.mp4","M_04"],
["MOTION","Novantatre","residential project reel",2026,"Urgency is the key word. The film sets a small story inside the building: someone moving through empty rooms with the sense of being followed, and finally getting out. A small narrative twist carries the project, turning the architecture into the subject of something happening.","video","/assets/offline/e4712ed01566cc9e.mp4","M_05"],
["MOTION","DAS Pieces","product showcase",2025,"The film was designed like an old pull tab children's book. Each pull brings the next page, and the DAS Pieces products arrive one after another in their own photographs.","video","/assets/offline/70210b52d2d4ff5c.mp4","M_06"],
["MOTION","Novantatre","93- residential project draft render",2026,"An early render pass from the Novantatre residential project, produced during the design process to test the massing, the light, and the material direction of the building.","video","/assets/offline/038e356092d3e944.mp4","M_07"],
["MOTION","Novantatre","Residential project interior render",2026,"Rendered out of Blender from a rough draft 3D file, the video gave the client a fast read on the spatial quality of the house before any detail was resolved.","video","/assets/offline/ef5f17bc5bacae6e.mp4","M_08"],
["MOTION","STATUS CO","CO -spatial web gallery",2026,"STATUS CO's experimental 3D gallery site, recorded straight off the screen and cut into a reel, so the site can be seen running before you ever open it.","video","/assets/offline/e8a3de65394102e2.mp4","M_09"],
["MOTION","STATUS CO","CO -anime",2026,"After the event closed, a selection of the photographs was redrawn in anime and edited into a film, standing as an anime documentation of the first pop-up.","video","/assets/offline/3b93ed7d94ee11c8.mp4","M_10"],
["MOTION","STATUS CO","CO- blur launch teaser",2026,"Before the first products were shown, they were cut together blurred and pixelated in rapid succession, timed to the barcode scanner beep everyone hears in a supermarket. The everyday and the accessible were treated as designed material and delivered in a progressive register.","video","/assets/offline/7282e055754bacfc.mp4","M_11"],
["MOTION","STATUS CO","CO- platform - presentation",2026,"A flat gallery floor moves tectonically, dropping and rising until it becomes the exhibition platform of STATUS CO.","video","/assets/offline/ddf9c914c940b9aa.mp4","M_12"],
["MOTION","STATUS CO","CO - New Brand Launch",2026,"The first post on social media. It carries the identity of the brand, its stance, its feeling, its colours, its logo, the launch date, and the information that mattered, delivered in the register the brand was built to hold.","video","/assets/offline/e552683afa1feaf0.mp4","M_13"],
["MOTION","STATUS CO","CO- claw machine",2026,"One of our core intentions was to show a design object as part of daily life, in a playful, slightly childlike pop-art attitude. The claw machine is the digital execution of that idea: a machine loaded with design objects.","video","/assets/offline/83c787cac7c9fd25.mp4","M_14"],
["MOTION","STATUS CO","CO- popcorn",2026,"For the STATUS CO collaboration with ArtShow, a giant box was placed directly opposite the entrance, outside the space assigned to the brand. Inside it sat an unlimited supply of crumpled papers in fifty different types. Through openings in the glass, visitors could reach in and take a collectible away without paying for it. The film is the promotion of that piece.","video","/assets/offline/931e0e05f040a2ee.mp4","M_15"],
["MOTION","STATUS CO","CO- computer reel",2026,"The STATUS CO 3D website filmed through the screen it lives on, showing the interactive environment the way a visitor first meets it.","video","/assets/offline/763c6206b48f350d.mp4","M_16"],
["MOTION","VEA","VEA - once upon a time in a virtual world",2026,"An atmospheric short placing architectural visualisation inside the spatial web as it takes shape.","video","/assets/offline/36680b5c176ea585.mp4","M_17"],
["MOTION","VEA","VEA - virtually grown",2026,"A cinematic study of digital environments growing out of architectural thinking.","video","/assets/offline/3e74c57d829c24e8.mp4","M_18"],
["MOTION","VEA","VEA - telephone booth",2026,"A VEA studio film that sets a single telephone booth inside a digital space, one familiar object used as the door into a place that isn't real.","video","/assets/offline/7801d443bfeadd70.mp4","M_19"],
["MOTION","VEA","VEA - product design",2026,"A product design reel built around engineered form and considered material, working the line between utility and the way people handle an object.","video","/assets/offline/671080fd8186cbca.mp4","M_20"],
["MOTION","infiiorata","Paperjam 10x6 – Solopreneurs",2026,"Virtual spaces, bouquets and floral compositions were designed around INFIORATA’s aesthetic and edited into a film following the flow of Kathlyn’s talk, creating a quiet, imaginative backdrop to her narration.","video","/assets/offline/d7e164a8208a7d42.mp4","M_21"],
["IDENTITY","Edetri","New Era Approach Board",2026,"Edetri is a tableware brand working mainly in glass and ceramic, gathering its community around events built on those products. Ahead of a new line in metal and glass, the identity was studied for where it could go next: graphically, in language, and in attitude. The outcome was a board built specifically for the brand, carrying annotation and comment tools so both sides could mark what worked and what did not, and settle the direction together.","web","/assets/works/edetri/","I_01"],
["MOTION","STATUS CO","Launch",2026,"The first post on social media. The identity of the brand, its stance, its feeling, its colours, its logo, the launch date, and the information that mattered were all carried in a single piece, delivered in the register the brand was built to hold.","video","/assets/offline/e552683afa1feaf0.mp4","I_02"],
["IDENTITY","STATUS CO","Virtual Identıty",2026,"The identity system of STATUS CO carried into its digital surfaces, holding the logo, the type, and the colour steady across every screen the brand appears on.","web","/preview.html?id=04fa31f5a6fa","I_03"],
["IDENTITY","STATUS CO","Packaging",2026,"Packaging designed inside the STATUS CO identity, treating the box and its printed matter as part of the collectible itself.","web","/preview.html?id=a3096013e34d","I_04"],
["IDENTITY","STATUS CO","Stickers",2026,"A sticker set drawn from the STATUS CO identity, taking the logo and its marks into the cheapest and most mobile format the brand has.","video","/assets/offline/e752caaa550dd225.mp4","I_05"],
["PRINT","Edetri","Edetri x VEA Book",2026,"Following the brand strategy work on the board and the study of Edetri's new era, every product and every event was re-visualised under one language and gathered into a booklet. Edetri had been known through its products, and the aim here was to balance that weight editorially by giving the events equal ground. The graphic language comes out of the way metal and glass meet in the new collection, and it marks the first step of the new era: digital and romantic, stripped back and poetic, industrial and felt.","pdf","/assets/offline/382f7b026caf5a31.pdf","G_01"],
["PRINT","Edetri","Edetri Cardboards for Mercado Design Days",2026,"One image was selected from each event in the Edetri book, reworked into a postcard format, printed, and handed to visitors as a gift during Mercado Design Days.","pdf","/assets/offline/2070f9b46d973a17.pdf","G_02"],
["PRINT","C2W2","C2W2 Booklet",2025,"The printed booklet for the C2W2 virtual runway, giving the digital collection a weight you can hold and keep.","pdf","/assets/pdf/PDF_v2-5mbs-c2w2.pdf","G_03"],
["PRINT","SGM","Site Analysis Full Package",2025,"An urban-scale study of the site for a hotel project in Gazipaşa, near Alanya, reading the ground, its setting and its constraints to give the design a factual base to build on.","pdf","/assets/offline/dc33d69b2729f3d3.pdf","G_04"]
];
/*/vea:fallback*/

/* ──────────────── sheet parsing (same rules as works3) ──────────────── */
function norm(s){
  return String(s||'').toLowerCase()
    .replace(/ı/g,'i').replace(/ü/g,'u').replace(/ş/g,'s')
    .replace(/ö/g,'o').replace(/ç/g,'c').replace(/ğ/g,'g')
    .replace(/[^a-z0-9]/g,'');
}
const ALIASES = {
  code:   ['code','kod','ref','id','no','number','workcode'],
  tags:   ['workstype','worktype','typeofwork','istipi','category','categories','kategori','section','folder'],
  sub:    ['tags','tag','etiketler','etiket','keywords','filters','filtre'],
  client: ['client','clients','musteri','customer','brand','for'],
  cnum:   ['clientnumber','clientno','clientorder','clientnr','clientindex','musterino','musterisira','musterinumarasi'],
  title:  ['title','name','project','work','baslik','isim'],
  year:   ['year','yil','date','tarih'],
  desc:   ['description','desc','aciklama','about','text','info'],
  link:   ['link','website','url','web','site','launch','siteurl'],
  thumb:  ['thumb','thumbnail','poster','cover'],
  media:  ['media','mediaurl','medya','video','file','src'],
  mtype:  ['filetype','mediatype','medyatipi','dosyatipi','format','type','kind','tip'],
  visible:['visible','show','active','publish'],
  /* THE FIVE COLUMNS THAT USED TO BE READ BY POSITION. A sheet is edited by
     hand: insert one column and every raw index after it points at the wrong
     thing, silently. The mobile caption is the one that shows: it would start
     reading whatever now sits at that offset, in whatever language. Named
     first, position only as a last resort. */
  pinfo:  ['mobilshortdesc','mobileshortdesc','mobilshortdescription','mobiledescription','shortdesc','mobil'],
  lprev:  ['additionnalmedia','additionalmedia','extramedia','preview','previewmedia'],
  wlive:  ['displaywebsite','websiteinplace','inlinewebsite'],
  ncta:   ['interactionbutton','activationbutton','ctabutton'],
};
function headerRole(h){
  const n = norm(h);
  if(!n) return null;
  let m = n.match(/^media(\d+)type$/);        if(m) return {role:'mt'+m[1], rank:0};
  m = n.match(/^media(\d+)(url|src|link)?$/); if(m) return {role:'mu'+m[1], rank:0};
  for(const role in ALIASES){
    const rank = ALIASES[role].indexOf(n);
    if(rank >= 0) return {role, rank};
  }
  return null;
}
function cellStr(c){
  if(!c) return '';
  let v = (c.v !== undefined && c.v !== null) ? c.v : '';
  if(c.f !== undefined && c.f !== null && typeof v !== 'string') v = c.f;
  if(v === null || v === undefined) return '';
  v = String(v).trim();
  if(/^-?\d+\.0$/.test(v)) v = v.slice(0,-2);
  return v === 'null' ? '' : v;
}
function isPlayerPage(u){
  return u.includes('drive.google.com') || u.includes('docs.google.com') ||
         u.includes('youtube.com') || u.includes('youtu.be') ||
         u.includes('player.vimeo') || u.includes('vimeo.com');
}
function toEmbedUrl(u){
  let m = u.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if(m) return '/about.html' + m[1] + '/preview';
  m = u.match(/(?:youtube\.com\/watch\?.*v=|youtu\.be\/)([\w-]+)/);
  if(m) return '/about.html' + m[1];
  m = u.match(/vimeo\.com\/(\d+)/);
  if(m && !u.includes('player.vimeo')) return '/about.html' + m[1];
  return u;
}
function mediaKind(type, url){
  const t = norm(type), u = String(url||'').toLowerCase();
  if(!u || u === 'null') return null;
  if(t.includes('pdf')) return 'pdf';
  if(t.includes('video') || t.includes('reel') || t.includes('film'))
    return isPlayerPage(u) ? 'embed' : 'video';
  if(t.includes('image') || t.includes('photo')) return 'image';
  if(isPlayerPage(u)) return 'embed';
  if(/\.pdf(\?|#|$)/.test(u)) return 'pdf';
  /* .m3u8 streams count as video EVERYWHERE */
  if(/\.(mp4|webm|mov|m4v|m3u8)(\?|#|$)/.test(u)) return 'video';
  if(/\.(jpe?g|png|gif|webp|avif|svg)(\?|#|$)/.test(u)) return 'image';
  if(t.includes('iframe')|| t.includes('web') || /^https?:/.test(u) || u.includes('.')) return 'web';
  return null;
}
function ensureHttp(u){
  u = String(u || '').trim();
  if (!u || u === 'null' || u === '0') return '';
  if (u.startsWith('/') || u.startsWith('./')) return u;
  return '';
}
function yearOf(){
  for(let i = 0; i < arguments.length; i++){
    const m = String(arguments[i]||'').match(/(20\d\d)(?:\s*[-\u2013\u2014]\s*(20\d\d))?/);
    if(m) return m[2] ? m[1] + '-' + m[2] : m[1];
  }
  return '';
}

function parseGviz(text){
  const json = JSON.parse(text.substring(text.indexOf('(')+1, text.lastIndexOf(')')));
  const rows = (json.table.rows||[]).map(r => (r.c||[]).map(cellStr));
  return rowsToWorks(rows);
}
/* The committed archive CSV (vea_files.csv) IS the same sheet the gviz
   endpoint serves, column for column, so it feeds the identical mapper;
   only the transport differs (a same-origin file that can never stall). */
function parseArchiveCsv(text){
  const rows = parseCsv(text).map(r => r.map(c => {
    c = String(c == null ? '' : c).trim();
    return c === 'null' ? '' : c;
  }));
  return rowsToWorks(rows);
}
function rowsToWorks(rows){
  if(!rows.length) throw new Error('empty sheet');

  let hIdx = -1, hMap = null, best = 0;
  for(let i = 0; i < Math.min(rows.length, 30); i++){
    const ranks = {}, map = {};
    rows[i].forEach((cell, col) => {
      const r = headerRole(cell);
      if(r && (!(r.role in map) || r.rank < ranks[r.role])){ map[r.role] = col; ranks[r.role] = r.rank; }
    });
    const score = Object.keys(map).length;
    if(score > best){ best = score; hIdx = i; hMap = map; }
  }
  if(best < 2) throw new Error('no header row found');
  if(hMap.code  === undefined && !Object.values(hMap).includes(0))  hMap.code  = 0;
  if(hMap.tags  === undefined && !Object.values(hMap).includes(3))  hMap.tags  = 3;
  if(hMap.mtype === undefined && !Object.values(hMap).includes(4))  hMap.mtype = 4;
  if(hMap.sub   === undefined && !Object.values(hMap).includes(5))  hMap.sub   = 5;
  if(hMap.cnum  === undefined && !Object.values(hMap).includes(10)) hMap.cnum  = 10;

  const works = [];
  for(let i = hIdx + 1; i < rows.length; i++){
    const row = rows[i];
    const get = role => hMap[role] !== undefined ? (row[hMap[role]]||'') : '';
    /* by NAME when the header says so, by position only if it does not */
    const at = (role, col) => (hMap[role] !== undefined ? row[hMap[role]] : row[col]) || '';
    const client = get('client');
    const title  = get('title');
    if(!client && !title) continue;
    if(hMap.visible !== undefined &&
       ['0','no','false','hidden','off'].includes(norm(get('visible')))) continue;

    const media = [];
    const addMedia = (type, raw) => {
      const u = ensureHttp(raw); if(!u) return;
      const k = mediaKind(type, u);
      if(k) media.push({k, src: k === 'embed' ? toEmbedUrl(u) : u});
    };
    for(let n = 1; n <= 9; n++) addMedia(get('mt'+n), get('mu'+n));
    if(!media.length) addMedia(get('mtype'), get('media'));
    const link = ensureHttp(get('link'));
    if(!media.length && link) addMedia(get('mtype'), link);
    if(!media.length) continue;

    const tags = get('tags').split(/[,;|/]+/).map(s=>s.trim()).filter(Boolean);
    const sub  = get('sub').split(/[,;|]+/).map(s=>s.trim()).filter(s=>s && s!=='null' && s!=='0');
    works.push({
      code:   get('code'),
      client: client || title,
      title:  title,
      year:   yearOf(get('year'), get('desc'), title),
      desc:   get('desc'),
      tags:   tags.length ? tags : ['WORKS'],
      ftype:  get('mtype'),        /* column E raw, the declared file type */
      jinfo:  at('desc', 9),       /* the sheet's own Description, the media annotation */
      pinfo:  at('pinfo', 15),     /* "mobil short desc": the caption over this media in the
                                      MOBILE carousel and in the phone's rotunda panel */
      lprev:  ensureHttp(at('lprev', 11)),   /* the preview shown inside a website slot */
      wlive:  norm(at('wlive', 12)) === 'yes',  /* yes: the website runs IN PLACE (Explore);
                                                   empty: Launch in a new tab */
      noCta:  norm(at('ncta', 13)) === 'no',    /* activation button: "no" hides the centre
                                                   verb; only the thumbnail + page show */
      sub:    sub,
      cnum:   Number.isFinite(parseFloat(get('cnum'))) ? parseFloat(get('cnum')) : null,
      media:  media, link: link,
      thumb:  ensureHttp(get('thumb')),
    });
  }
  if(!works.length) throw new Error('no work rows parsed');
  return works;
}

function fallbackWorks(){
  return FALLBACK.map(row => ({
    code: row[7] || '', client: row[1], title: row[2], year: String(row[3]), desc: row[4],
    tags: row[0].split(/[,;|/]+/).map(s=>s.trim()),
    ftype: row[5], jinfo: row[4], lprev: '', wlive: false, noCta: false,
    sub: [], cnum: null,
    media: [{k: row[5], src: row[5] === 'embed' ? toEmbedUrl(row[6]) : row[6]}],
    link: row[5] === 'web' ? row[6] : '',
    thumb: '',
  }));
}

/* ──────────────── slugs / helpers shared by the v2 pages ──────────────── */
function slugify(s){
  return String(s||'').toLowerCase()
    .replace(/ı/g,'i').replace(/ü/g,'u').replace(/ş/g,'s')
    .replace(/ö/g,'o').replace(/ç/g,'c').replace(/ğ/g,'g')
    .replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'') || 'work';
}
function withSlugs(works){
  const seen = {};
  works.forEach(w => {
    let s = slugify(w.client + '-' + w.title);
    if(seen[s] !== undefined){ seen[s]++; s = s + '-' + seen[s]; } else seen[s] = 1;
    w.slug = s;
  });
  return works;
}

/* native <video> source, routing GitHub release files through the proxy */
function videoSrc(src){ return src + (src.includes('#') ? '' : '#t=0.001'); }

/* attach ANY video source to an element, .m3u8 goes through hls.js
   (loaded on demand, Safari plays it natively), files play directly */
let _hlsLibP = null;
function loadHlsLib(){
  if(window.Hls) return Promise.resolve();
  if(!_hlsLibP){
    _hlsLibP = new Promise(res => {
      const s = document.createElement('script');
      s.src = '/lib/hls.min.js';
      s.onload = res; s.onerror = res;
      document.head.appendChild(s);
    });
  }
  return _hlsLibP;
}
function attachVideo(v, src, autoplay, hq){
  /* ── STARTING IS A RACE, SO ASK MORE THAN ONCE ────────────────────────────
     A single play() fired the instant a source is attached is the one moment
     it is least likely to take: hls.js has not opened its buffer yet and a
     plain file has not even reached its first frame, so the promise rejects
     and, unless something happens to call again, the film sits on its
     poster looking like a still. That is why a screen could arrive already
     stopped and only start when you touched it.

     So the kick is repeated at each point where starting newly becomes
     possible: right away, when the first data lands, and when the element
     says it can play. They are one-shot and cheap, and a film that is
     already running ignores them. */
  const kick = () => { try{ const p = v.play(); if(p && p.catch) p.catch(() => {}); }catch(_){} };
  if(autoplay){
    v.addEventListener('loadeddata', kick, { once: true });
    v.addEventListener('canplay', kick, { once: true });
  }
  if(/\.m3u8(\?|#|$)/i.test(String(src||''))){
    /* hls.js FIRST even on Safari/iPhone, only it can pin quality.
       hq: loading waits until the top rung is chosen, so the big
       screen never shows (or re-loops) a single blurry fragment. */
    loadHlsLib().then(() => {
      if(window.Hls && Hls.isSupported()){
        /* iPhone runs hls.js over ManagedMediaSource, it refuses to
           open unless remote playback is off */
        try{ v.disableRemotePlayback = true; }catch(_){}
        /* phone: AUTOMATIC quality sized to the element, fast, light.
           hq on desktop: pinned to the top rung, never blurry. */
        const mob = window.innerWidth <= 860;
        const pin = hq && !mob;
        const h = new Hls(pin ? {autoStartLoad: false, maxBufferLength: 10}
                              : {capLevelToPlayerSize: mob, maxBufferLength: 10});
        h.loadSource(src);
        h.attachMedia(v);
        v._hls = h;
        h.on(Hls.Events.MANIFEST_PARSED, () => {
          if(pin){
            try{
              h.startLevel = h.levels.length - 1;
              h.currentLevel = h.levels.length - 1;
            }catch(_){}
            h.startLoad(0);
          }
          if(autoplay) kick();
        });
        /* safety net: if nothing has arrived shortly, hand the film to
           the native player, ANY quality beats a black screen */
        setTimeout(() => {
          if(v.readyState !== 0) return;
          if(!v.canPlayType('application/vnd.apple.mpegurl')) return;
          try{ h.destroy(); }catch(_){}
          v._hls = null;
          v.src = src;
          if(autoplay) kick();
        }, mob ? 4000 : 10000);
      } else if(v.canPlayType('application/vnd.apple.mpegurl')){
        v.src = src;
        if(autoplay) kick();
      }
    });
    return;
  }
  v.src = videoSrc(src);
  if(autoplay) kick();
}

/* cache-first load; onWorks may fire twice (cache, then fresh sheet) */
function loadWorks(onWorks){
  let delivered = false;
  const deliver = (works, fromCache) => {
    if(!works || !works.length) return;
    delivered = true;
    onWorks(withSlugs(works), !!fromCache);
  };
  let cached = null;
  try{ cached = JSON.parse(localStorage.getItem(LS_KEY)||'null'); }catch(_){}
  if(Array.isArray(cached) && cached.length) deliver(cached, true);

  const fetchText = url => fetch(url, {cache:'no-store'}).then(res => {
    if(!res.ok) throw new Error('HTTP ' + res.status); return res.text();
  });

  /* HANG GUARD, the ONLY path that hands over the embedded fallback, and
     only if nothing better has arrived in time. Keeping the fallback out of
     the remote-failure branch is deliberate: a fast sheet failure (offline,
     CORS, 4xx) used to win the race and bury the LOCAL csv under the stale
     hardcoded data. Now local always wins; embedded is a true last resort. */
  let guardT = setTimeout(() => { if(!delivered) deliver(fallbackWorks(), false); }, 4000);

  /* 1) LOCAL FIRST, the committed archive CSV, same-origin, near-instant,
        cannot stall. This is what unblocks the 3D room's boot so SPACE
        always opens, and it's the authoritative data the studio maintains. */
  fetchText(LOCAL_WORKS)
    .then(text => { const fresh = parseArchiveCsv(text);
      clearTimeout(guardT); if(!delivered) deliver(fresh, false); })
    .catch(() => {});   /* guard nets a missing local file */


}

/* ──────────────── SHOWCASE sheet (the curated Works page) ────────────────
   Columns by position: A code, B client, C name, D category, E date,
   F showcase media codes (→ column A codes of the archive sheet),
   G venue, H thumbnail, I services, J products, K client type, L medium,
   M brief info, N long text. Row 1 carries the display labels.

   The same sheet also carries the HOMEPAGE section: every row ABOVE the
   row whose column A reads "HOMEPAGE" is a Works item; below the marker
   comes a fresh header row (code, type, media link, title, sub title,
   client, date, page) and the rows that feed the v2 home page.        */
const LS_SHOWCASE = 'veaShowcase7';   /* bumped: items now carry column-P (mobDesc), old cache had none */

/* offline fallback assembled from the sheet's current rows */
/*vea:showcase-fallback*/
const SHOWCASE_FALLBACK = {
  labels: ["code","client","name","category","date","showcase medias","venue","thumbnail","SERVICES","Products","client type","medium","brief info","long text","link name"],
  items: [
    ["A14","STATUS CO","Website","WEB","2026","W_01","Virtual","/assets/offline/5f77c40f24156510.mp4","Immersive Web Design","Spatial Immersive Website","retail","object","STATUS CO was built from nothing, entirely through digital means, with every part under one language. The website carries that logic and holds the first drop as a true-scale digital twin of the pop-up.","The first drop lives on the site as a spatial copy of the pop-up itself. Every object was modelled in 3D at its real size, optimised for the web, and placed exactly where it stood, so visitors who came to the event can walk the room again and catch the details they missed while standing in it. Every object opens. Click one and it gives its photographs, its specs, and the thinking behind it. The site introduces the brand and runs as a live digital twin of the space at the same time, holding all of STATUS CO under one digital language.","StatusCo_website"],
    ["A19","160526 Wedding","Stationery Design","EVENT","2026","E_06","Tersane Istanbul","/assets/offline/265d7dffad9dfc02.mp4","Graphic Design, Creative Direction","Invitation, Menus, Signages, Table Order","event","wedding","A wedding at the historic Tersane Istanbul shipyard, where every printed piece was designed as one language. The stationery took its cues from the architecture of the building, so the invitation, the menu, the signage, and the seating all belonged to the same world.","The stationery is where the wedding's concept turned into something a guest could hold. Its language came from the shipyard itself, drawn out in minimal typography, metallic finishes, and exhibition-style layouts. That register held across every surface, from the card in a hand to the menu on the table to the signage on the wall. The whole printed side of the night read as one design, tied back to the larger world built for the day.","160526Wedding_stationnary"],
    ["A18","160526 Wedding","Spatial Video","EVENT","2026","E_07, E_01, E_02, E_03, E_04, E_05, E_08","Tersane Istanbul","/assets/offline/01a57ab70a059697.mp4","Videography","Videos to Project to Space","event","wedding","The moving image projected across the shipyard walls through the night. A run of films in the wedding's inverted-monochrome wireframe language, built entirely from the couple's own world: their favourite artworks, the objects on their tables, the shape of the bridal bouquet, and the places their relationship passed through.","Across the evening, the historic walls of Tersane Istanbul became a screen. Every film shared one language, an inverted-monochrome wireframe drawn from architectural plans, and every one came from the couple. Their chosen artworks were remixed into that register. The continuous metal wave that defined the tables was projected beside the DAS Pieces favours until the two objects spoke to each other and the room took on their aura, and the guests watched the design they were sitting inside referenced live. Another film followed the favour's shape as it became the bridal bouquet, then the ceremony decor, then an abstract reading of the ceremony itself. A looping logo film carried the couple from the Virtually Ever After mark they built into a celebration of rabbits and back again. The couple appeared in wireframe over the films, and the thresholds of their relationship were rendered as terrain from satellite data and contour lines. Graphics were laid over four selected films and set against older black-and-white footage, putting the digital next to the romantic and the new next to the old, straight out of the name Virtually Ever After. Four fully edited films played through the night, loosening toward lighter, more playful references as the evening moved into the after-party.","160526Wedding_video"],
    ["A20","infiiorata","Spatial Video","MOTION","2026","M_21","Paperjam 10x6","/assets/offline/0ada75731d995c80.mp4","Art Direction, Motion Design","Short Film","event","media","Virtually Ever After created a six-minute film synchronised with Kathlyn’s talk at Paperjam’s 10x6 Solopreneurs in Luxembourg, giving her story and INFIIORATA’s floral world a restrained visual expression while keeping the focus on her voice.","For Kathlyn’s talk at Paperjam’s 10x6 Solopreneurs, an evening bringing together Luxembourg’s business community, Virtually Ever After created a six-minute film synchronised with her live narration. Her personal story and the floral world of INFIIORATA were approached through a clean, restrained visual language, with each sequence timed to the pace of her words. The film unfolded behind her as a quiet visual accompaniment, giving form to her story while keeping the audience’s attention on her voice and presence.","infiiorata"],
    ["A11","STATUS CO","Motions","MOTION","2026","M_09, M_10, M_11, M_12, M_13, M_14, M_15","Virtual","/assets/offline/637fd08ad8282cd1.mp4","Art Direction, Motion Design, Sound Design","Reels","retail","object","The moving-image library for STATUS CO, built across art direction, motion, and sound. A run of reels that carry the brand from its 3D gallery site to the products, the launch, and the pop-up's most playful pieces.","The reels document the brand's world and turn its products into content. The experimental 3D gallery site was recorded straight off the screen, and a flat gallery floor was moved tectonically until it became the STATUS CO exhibition platform. After the pop-up closed, event photographs were redrawn in anime as a record of the first drop. The products came next. Before the first pieces were shown, they were cut together blurred and pixelated in rapid succession, timed to the barcode-scanner beep everyone knows from a supermarket. The first social post carried the brand's stance, feeling, colours, logo, and launch date in a single piece. Two reels came from the pop-up's own elements: a claw machine loaded with design objects, filmed in a playful, slightly childlike pop-art attitude, and the giant box of free paper collectibles that sat opposite the entrance, promoted in its own film.","StatusCo_motions"],
    ["A17","Edetri","moodBoard for new language","IDENTITY","2026","I_01","Virtual","/assets/offline/2032b4d778dc9426.mp4","Brand Strategy, Art Direction","Brand Guide","design","object","Edetri is a tableware brand in glass and ceramic that gathers a community around its events. Ahead of a new metal-and-glass line, we studied where the brand's identity could go next and set it into a board the two sides could shape together.","The question was where Edetri could take its identity for a new era. We looked at it on three fronts at once, its graphics, its language, and its attitude, ahead of a collection moving into metal and glass. The findings lived in a board built specifically for the brand. It carried annotation and comment tools, so Edetri and the studio could mark what worked and what did not directly on it, and settle the new direction as one decision.","Edetri_board"],
    ["A16","Edetri","Booklet","PRINT","2026","G_01","Mercado Design Days","/assets/offline/c87162c9b89dcf1f.mp4","Graphic Design, Booklet Design","PDF Booklet","design","object","The booklet that gave Edetri's new era its first printed form. Every product and every event was re-visualised under one language, balancing a brand known for its objects with equal weight on the events around them.","Following the board and the study of the new era, we gathered all of Edetri into a booklet. Every product and every event was re-visualised under a single graphic language and set side by side. Edetri had always been read through its products, so the booklet gave the events equal editorial ground and balanced the weight of the brand. The graphic language came from the point where metal and glass meet in the new collection, and it set the tone for everything after it: digital and romantic, stripped back and poetic, industrial and felt.","Edetri_booklet"],
    ["A15","Edetri","Postcards","PRINT","2026","G_02","Mercado Design Days","/assets/offline/e61919a0e0a7486b.mp4","Graphic Design, Booklet Design","Postcards","design","object","A set of postcards drawn from the Edetri booklet for Mercado Design Days. One image from each event, reworked into a card and given to visitors as something to take home from the fair.","From the booklet, we pulled one image from each of Edetri's events and reworked it into a postcard. Printed and handed out during Mercado Design Days, the cards carried the brand's new language off the page and into the hands of the people who came, a small piece of the new era to keep.","Edetri_postcards"],
    ["A13","Selin Gencoglu","Website","WEB","2026","W_02","Virtual","/assets/offline/428c902134c636fe.mp4","Video Creation, Immersive Web Design","Spatial Immersive Website","art","painting","Selin Gencoglu paints demons in dark, unsettling rooms, work that runs on chaos, fear, and tension. Her website was built as the place those paintings come from, a 3D world rendered as their source.","The site treats the paintings as if they all came out of one world, so we built that world in 3D and made it the source of the imagery. A figure was pulled from each canvas, sketched again by Selin's own hand, and placed inside an environment built from scratch. Visitors step into that atmosphere and move through it themselves, becoming part of the experience the paintings describe. The website holds her work the way the paintings hold their rooms.","SelinGencoglu"],
    ["A12","Laila","Website","WEB","2026","W_03","Virtual","/assets/offline/73975c10260b8bf5.mp4","Video Creation, Web Design","Website landing page","app","dating","Laila is built around what a date can actually be. The landing page makes that case in film and explains the whole app in a single scroll.","The page argues Laila's idea through film. Joy, movement, and time spent well together are cut into one sequence that shows what the app is really for. That film sits inside an interface stripped back far enough to carry the entire logic of Laila in a single scroll, moving with the energy the app asks of its users.","Laila"],
    ["A10","STATUS CO","Brand Identity","IDENTITY","2026","I_02, I_03, I_04, I_05","Virtual","/assets/offline/258249d8fc1fd7dd.mp4","Brand Strategy, Creative direction, Graphic design","Logo, colors, prints, packaging, stickers","retail","object","The identity system every other STATUS CO piece is built on. One logo and one set of rules, carried from the launch post through the screens, the packaging, and the stickers.","The launch arrived as a single social post that held the brand's stance, feeling, colours, logo, and date together, in the register STATUS CO was built to hold. From there the identity stayed steady across every digital surface, keeping the logo, type, and colour constant on every screen. It carried into objects too. The packaging was designed as part of the collectible itself, and a sticker set took the logo into the cheapest and most mobile format the brand has. From the first post to the last sticker, every surface reads as one STATUS CO.","StatusCo_brand-identity"],
    ["A09","STATUS CO","Pop up exhibition design","EVENT","2026","E_09, E_10, E_11, E_12","Artshow","/assets/offline/f29a46a552a878e9.mp4","Exhibition Design, Creative Direction, Interior Design","Pop up exhibition design","retail","object","The DROP 001 pop-up at ArtShow Galeriler Buluşması 2026, built end to end through a digital process. Over a hundred objects were modelled at 1:1 before anything was made, turning an empty file into a three-day experience.","The pop-up ran entirely through digital process, with the client inside every step. More than a hundred design objects were modelled at 1:1 scale with realistic materials, giving full control of the layout and the space before a single thing was built. A drafts file holds that study, tracing the room from an empty file. Once it stood, the space became a three-day experience. A creation film follows it from zero, a recap cut from event footage shows the designed world standing in a real room, and a photo gallery documents the three days themselves, the space and the way visitors moved through it and handled the designs inside.","StatusCo_pop-up"],
    ["A08","Novantatre","Architectural Reels","MOTION","2025","M_03, M_05, M_08","Luxembourg","/assets/offline/53045798a0b3ee5b.mp4","Creative Direction, Video Creation","Reels","architecture","residence","Architectural films for the Luxembourg office Novantatre. Their buildings turned into things you watch: a year gathered into a pop-up book, a residence told as a small story, and an early render that reads a house before it is resolved.","The first was a yearbook. At the close of the year, the buildings finished over twelve months were gathered into a cut-out book built from borderless cardboard in the brand's Ancora bordeaux. It opens onto five projects, and each page lifts into a model that the camera walks into. A residential reel took a different route, with urgency as its key word. It sets a small story inside the building, someone moving through empty rooms with the sense of being followed and finally getting out, so a twist of narrative carries the project and turns the architecture into the subject of something happening. A third piece, rendered straight out of Blender from a rough draft file, gave the client a fast read on the spatial quality of a house before any detail was resolved.","Novantatre"],
    ["A07","DAS Pieces","MOTION","MOTION","2025","M_06","Virtual","/assets/offline/0ec4f015500c9b34.mp4","Creative Direction, Video Creation","Reels","design","object","A showcase film for the DAS Pieces lamp collection, built like an old pull-tab children's book. Each pull turns a page and brings the next product into view.","The film gives the collection a rhythm borrowed from a pull-tab picture book. Each pull brings the next page, and a DAS Pieces product arrives in its own photograph, one after another. The device lets each piece land on its own before the next is drawn in, giving the lamps a small sense of play while keeping every product clearly its own.","DASPieces"],
    ["A05","C2W2","FINDER + SELECTOR","WEB","2025","W_04, W_05","Virtual","/assets/offline/d444fbab672bb446.mp4","Immersive Web Design, Art Direction, Booklet Design","Spatial Immersive Website","fashion","avatar","C2W2's runway and avatar collection left a large archive behind. We organised all of it inside an interface everyone already knows, a desktop, and paired it with a viewer that turns each avatar in full motion.","The finder holds the whole archive inside a desktop file system. Folders open, files are clicked through, and the collection is explored the way people sort their own machines every day. Browsing a website usually feels like visiting one, so C2W2 was built to feel like the desktop underneath it, the place that feels like home when you minimise the window. Alongside it sits the selector, a viewer for the 48 avatars drawn in a Blade Runner register. Each design turns in full 360 motion with its data beside it, so a garment can be read and studied in the same moment it is seen.","C2W2_ui"],
    ["A04","C2W2","BOOKLET","PRINT","2025","G_03","Virtual","/assets/offline/62fe38d62c143130.mp4","Art Direction, Booklet Design, Graphic Design","PDF Booklet","fashion","avatar","The printed booklet for the C2W2 virtual runway. It gives a collection that lives on screen a weight you can hold and keep.","The booklet takes the C2W2 runway off the screen and onto paper, holding the digital collection as printed matter. Made as an object in its own right, it gives the project a physical form, a printed counterpart to a show that otherwise exists only online.","C2W2_booklet"],
    ["A03","Decentralize Design","Hybrid Website","WEB","2025","W_07","Virtual","/assets/offline/f2f86340fc72a1f8.png","Immersive Web Design, Art Direction","Spatial Immersive Website","design","metaverse","A website for the Milan digital design studio Decentralize Design, holding their entire output inside a single frame. It was structured architecturally, so you move through the work the way you move through a building.","We built the site together with the studio, holding all of their output inside one UI frame and delivering it piece by piece. The structure was approached architecturally, its sections flowing into one another in a clear hierarchy. The result reads like a building you travel floor by floor, giving a digital studio a home that carries its own spatial logic.","DecentralizeDesign_web"],
    ["A02","Decentralize*","Hybrid Website","WEB","2025","W_06","Virtual","/assets/offline/1f64305e61a627f5.mp4","Immersive Web Design, Art Direction","Spatial Immersive Website","design","metaverse","decentralize* works across several mediums, and the archive it left behind carries disorder and structure in equal measure. The site rebuilds that same condition digitally.","Years of work in different formats were mapped and organised into a single navigable environment. The site holds the mess and the system at once, letting the range of the practice stay legible without being tidied away. The outcome matches how decentralize* actually works: many mediums, one place that carries them all.","Decentralize_web"],
    ["A01","Decentralize Design","Short Film","MOTION","2025","M_04","Virtual","/assets/offline/796f2018fb0dc8cd.mp4","Immersive Web Design, Art Direction, Video Creation, Brand Strategy","Short Film to Explain the Brand and what they do","design","metaverse","A three-minute short film that explains Decentralize Design: what the studio does, how it approaches design, and where its thinking parts from the standard.","The film was pitched to stay open to a general audience while holding the register of both Virtually Ever After and Decentralize Design. In three minutes it covers what the studio does and how it thinks about design and the world around it. It works as the studio's introduction, a short and watchable account of the practice and the thinking behind it.","DecentralizeDesign_film"]
  ],
  homeHeader: ["code","type","media link","title","sub title","client","date","page","mobil media link","/assets/offline/69ed6200f14d95e0.mp4","","","","",""],
  homeRows: [
    ["H1","work 1","/assets/offline/4ffd4941e270bddf.mp4","Projections as spatial elements: Wireframe storytelling against historic walls.","Spatial Videomaking for a Wedding","160526 Wedding","2026","A18","","/assets/offline/12cf969f35be819a.mp4","A18","","","",""],
    ["H2","work 2","/assets/offline/41fcf2f2647c32be.mp4","Products meet events: Edetri’s new industrial-poetic era.","Booklet design for Edetri tableware and events","Edetri","2026","A16","","From brand strategy to booklet: Equalizing products and events through an industrial-poetic graphic language.","A16","","","",""],
    ["H3","work 3","/assets/offline/d73922b5d429930c.mp4","From empty file to 3-day experience: A two-month digital co-creation.","Pop up Exhibition Design","STATUS CO","2026","A09","","","A09","","","",""],
    ["H4","work 4","/assets/offline/428c902134c636fe.mp4","Selin's Dark Twisted Fantasies","Immersive world of Selin's paintings","Selin Gencoglu","2026","A13","","","A13","","","",""],
    ["H5","work 5","/assets/offline/53045798a0b3ee5b.mp4","Unfolding architecture: A cut-out bordeaux yearbook showcasing a year of built design.","Video works for Luxembourg based architecture office Novantatre","Novantatre","2026","A08","","","A08","","","",""],
    ["H6","work 6","/assets/offline/c358b38a47f7cc9c.mp4","NY singles meet, do fun stuff.","Landing Page for Dating App","Laila","2026","A12","","","A12","","","",""],
    ["","","","","","","","","","","","","H7","work 6","/assets/offline/aa9cac2202d6188c.mp4"],
    ["","","","","","","","","Two months of work, run entirely through digital process with the client inside every step of it. The film traces the pop-up from zero: an empty file turning into a three day experience.","","","","H8","work 7","/assets/offline/428c902134c636fe.mp4"],
    ["","","","","","","","","","","","","H9","work 8","/assets/offline/c358b38a47f7cc9c.mp4"],
    ["","","","","","","","","","","","","H10","work 9","/assets/offline/d6932c0a17d06cf9.png"],
    ["","","","","","","","","","","","","H11","work 10","/assets/offline/b762d4ba33a74bcb.png"],
    ["","","","","","","","","","","","","H12","work 11","/assets/offline/727e6e810a31a413.png"]
  ],
};
/*/vea:showcase-fallback*/

function rowToShowcase(cells){
  const g = i => String(cells[i] || '').trim();
  return {
    code: g(0), client: g(1), name: g(2), category: g(3), date: g(4),
    mediaCodes: g(5).split(/[,;|\s]+/).map(s => s.trim()).filter(Boolean),
    venue: g(6), thumb: ensureHttp(g(7)),
    services: g(8), products: g(9), clientType: g(10), medium: g(11),
    brief: g(12), longText: g(13),
    slug: g(14).replace(/^\/+|\/+$/g, ''),   /* column O, the work's pretty url tail */
  };
}

/* ── pretty work URLs (column O of the showcase sheet) ──
   …/work.html?p=A18 becomes …/work/160526Wedding_video. The root is
   read off the address bar, so nothing needs to change when v2 stops
   being a subfolder and becomes the site itself. Works without a
   column-O value keep the classic query link. */
function siteRoot(){
  return location.pathname
    .replace(/work\/[^\/]*\/?$/, '')   /* a pretty work path → its dir */
    .replace(/[^\/]*$/, '');           /* any *.html file → its dir    */
}
function workUrl(it){
  if(it && it.slug) return siteRoot() + 'work/' + encodeURIComponent(it.slug);
  return siteRoot() + 'work.html?p=' + encodeURIComponent((it && it.code) || '');
}
/* the HOMEPAGE marker row: "homepage" written in column A (any case) */
function isHomeMarker(row){
  return norm(row[0]) === 'homepage' || (!String(row[0]||'').trim() && norm(row[1]) === 'homepage');
}
/* header row of the HOMEPAGE section → column map by label.
   Canonical column order: A code, B type, C media link, D title,
   E sub title, F client, G date, H page, I mobil media link.      */
const HOME_ALIASES = {
  code:  ['code','kod'],
  type:  ['type','tip'],
  media: ['medialink','media','mediaurl','link','url','medya'],
  title: ['title','baslik'],
  sub:   ['subtitle','sub','subtitles','alt','altbaslik'],
  client:['client','musteri'],
  date:  ['date','year','tarih','yil'],
  page:  ['page','sayfa','goto','target'],
  mobile:['mobilmedialink','mobilemedialink','mobilmedia','mobilemedia','mobillink','mobilelink','mobil','mobile'],
};
const HOME_ORDER = ['code','type','media','title','sub','client','date','page','mobile'];
function mapHomeHeader(row){
  const map = {};
  row.forEach((cell, col) => {
    const n = norm(cell); if(!n) return;
    for(const role in HOME_ALIASES){
      if(HOME_ALIASES[role].indexOf(n) >= 0 && !(role in map)){ map[role] = col; return; }
    }
  });
  if(Object.keys(map).length < 2) return null;
  /* positional safety net (A…I): a reworded header can never hide a
     field, every unmatched role falls back to its canonical column */
  const used = new Set(Object.values(map));
  HOME_ORDER.forEach((role, col) => {
    if(!(role in map) && !used.has(col)) map[role] = col;
  });
  return map;
}
function rowToHome(row, map){
  const g = role => map[role] !== undefined ? String(row[map[role]]||'').trim() : '';
  return {
    code: g('code'), type: g('type'), media: ensureHttp(g('media')),
    title: g('title'), sub: g('sub'), client: g('client'),
    date: g('date'), page: g('page'),
    mobile: ensureHttp(g('mobile')),   /* column I, mobile-only media */
  };
}

/* minimal, correct CSV: quoted fields may hold commas and newlines */
function parseCsv(text){
  const rows = []; let row = [], cell = '', q = false;
  for(let i = 0; i < text.length; i++){
    const ch = text[i];
    if(q){
      if(ch === '"'){
        if(text[i+1] === '"'){ cell += '"'; i++; }
        else q = false;
      } else cell += ch;
    } else if(ch === '"') q = true;
    else if(ch === ','){ row.push(cell); cell = ''; }
    else if(ch === '\n'){ row.push(cell); rows.push(row); row = []; cell = ''; }
    else if(ch !== '\r') cell += ch;
  }
  if(cell !== '' || row.length){ row.push(cell); rows.push(row); }
  return rows;
}

function parseShowcase(text){
  const rows = parseCsv(text).map(r => r.map(c => {
    c = String(c == null ? '' : c).trim();
    return c === 'null' ? '' : c;
  }));
  if(rows.length < 2) throw new Error('empty showcase sheet');
  const labels = rows[0].map(c => String(c||'').trim());

  /* Works items: every row until the HOMEPAGE marker */
  const items = [];
  let i = 1;
  for(; i < rows.length; i++){
    if(isHomeMarker(rows[i])) break;
    const it = rowToShowcase(rows[i]);
    if(!it.code && !it.client) continue;
    items.push(it);
  }

  /* HOMEPAGE rows: header row after the marker, then the entries;
     rows without a media link (H6…) are placeholders and are skipped */
  const home = [];
  let homeHeader = null, hmap = null;
  if(i < rows.length){
    i++;
    for(; i < rows.length; i++){
      const r = rows[i];
      if(r.every(c => !String(c||'').trim())) continue;
      homeHeader = r;
      hmap = mapHomeHeader(r);
      i++;
      break;
    }
    if(hmap){
      for(; i < rows.length; i++){
        const h = rowToHome(rows[i], hmap);
        if(!h.media) continue;
        home.push(h);
      }
    }
  }

  if(!items.length) throw new Error('no showcase rows');
  /* diagnostic breadcrumbs, the console shows exactly what the sheet
     delivered (sub✓ = the E-column text arrived) and how the homepage
     header mapped, so any sheet-side surprise is instantly visible */
  try{
    console.info('[VEA] showcase:', items.length + ' works, ' + home.length + ' homepage rows ·',
      home.map(h => h.code + (h.sub ? '·sub✓' : '·sub∅')).join('  '));
    console.info('[VEA] home header:', JSON.stringify(homeHeader),
      '→ map:', JSON.stringify(hmap));
    if(home.length) console.info('[VEA] first home row:', JSON.stringify(home[0]));
  }catch(_){}
  return {labels, items, home};
}
function fallbackShowcase(){
  /* the homepage rows are mapped by the SAME header logic the live sheet
     uses, so the offline shape can never differ from the online one */
  let home = [];
  try{
    const hm = SHOWCASE_FALLBACK.homeHeader ? mapHomeHeader(SHOWCASE_FALLBACK.homeHeader) : null;
    if(hm) home = (SHOWCASE_FALLBACK.homeRows || []).map(r => rowToHome(r, hm)).filter(h => h.media);
  }catch(_){}
  return {labels: SHOWCASE_FALLBACK.labels.slice(),
          items: SHOWCASE_FALLBACK.items.map(rowToShowcase),
          home: home};
}
function loadShowcase(onData){
  let delivered = false;
  const deliver = (data, fromCache) => {
    if(!data || !data.items || !data.items.length) return;
    delivered = true;
    onData(data, !!fromCache);
  };
  let cached = null;
  try{ cached = JSON.parse(localStorage.getItem(LS_SHOWCASE)||'null'); }catch(_){}
  if(cached && cached.items && cached.items.length) deliver(cached, true);

  const fetchText = url => fetch(url, {cache:'no-store'}).then(res => {
    if(!res.ok) throw new Error('HTTP ' + res.status);
    return res.text();
  });

  /* HANG GUARD, the ONLY path to the embedded fallback (see loadWorks): kept
     out of the remote-failure branch so a fast sheet failure can't bury the
     LOCAL csv under stale hardcoded data. Local always wins the initial fill. */
  let guardT = setTimeout(() => { if(!delivered) deliver(fallbackShowcase(), false); }, 4000);

  /* 1) LOCAL FIRST, the committed showcase CSV on our own origin. Instant,
        cannot stall, so the Works room (gallery/hall) always finishes its
        90% wait and SPACE opens. THE fix for "never opens". */
  fetchText(LOCAL_SHOWCASE)
    .then(text => { const fresh = parseShowcase(text);
      clearTimeout(guardT); if(!delivered) deliver(fresh, false); })
    .catch(() => {});   /* guard nets a missing local file */


}

/* ──────────────── autoplay rescue (mobile low-power mode) ────────────────
   iOS Low Power Mode blocks every autoplay and paints its own play
   arrow. Fix: any real tap re-wakes all muted films, and when films are
   found frozen right after load, a LAUNCH veil asks for exactly one tap, after that everything runs by itself, on every page.             */
function wakeVideos(){
  document.querySelectorAll('video').forEach(v => {
    if(!v.muted || v._userPaused) return;
    if(v.dataset && v.dataset.nowake !== undefined) return;
    if(v.paused && (v.autoplay || v.loop) && (v.currentSrc || v.src)) v.play().catch(() => {});
  });
}
/* v8 · the PAGE tap (or any first touch) is the gesture that grants video
   playback, exposed so the first-question screen can wake films inside the
   very tap that chooses PAGE, with no full-screen gate afterward */
try{ window.__veaWake = wakeVideos; }catch(_){}
/* F13a · the fixed mix-blend header gains a soft scrim the moment the page
   scrolls, so it never collides noisily with a scrolled headline */
(function(){
  var on = false;
  var tick = function(){
    var s = (window.pageYOffset || document.documentElement.scrollTop || 0) > 40;
    if(s !== on){ on = s; if(document.body) document.body.classList.toggle('vscrolled', s); }
  };
  try{
    window.addEventListener('scroll', tick, {passive:true});
    if(document.readyState !== 'loading') tick();
    else document.addEventListener('DOMContentLoaded', tick);
  }catch(_){}
})();
function initAutoplayRescue(){
  if(!window.matchMedia || !matchMedia('(pointer: coarse)').matches) return;
  document.addEventListener('touchend', wakeVideos, {capture: true, passive: true});
  document.addEventListener('pointerup', wakeVideos, {capture: true, passive: true});
  /* v8 · the LAUNCH veil is GONE. It once gated the phone's arrival to grant
     low-power-mode video playback in one tap, but it also stood on every
     refresh and every space→page turn, blurring an editorial mode sold as
     "reads like print". Those permissions are now set INSIDE the PAGE tap on
     the first-question screen (window.__veaWake), and the passive wakers
     above rescue any film on first contact, no full-viewport gate, ever. */
}
initAutoplayRescue();

/* v7 · mobile: PARAMETRIC fit, the row is measured once and the font
   lands on the exact size where every category shares one line, edge
   to edge (space-between spreads the remaining breath evenly). Never
   cramped, never toy-small: the size floats between 9.5 and 14px with
   the count and the screen. Only if even the floor cannot hold the
   names does the row fall back to scrolling (.cats-scroll).        */
/* THE FILM'S WORDS FIT THE ROOM THE FILM LEAVES THEM.
   On a phone the player is a column, client, title, the film in its own
   16:9 band, then the description in whatever is left. That leftover is not
   a guess, so the type is not one either: step down from 13px until the
   paragraph sits inside its box, and stop at 11px, because below that it
   stops being reading. If it still will not fit at the floor it scrolls, the type never shrinks past legible just to avoid a scrollbar. On a
   desktop the player has all the room in the world and this does nothing.
   Both players, the SPA's and the work page's own, call it, so a film
   reads the same whichever door it was opened through. */
function fitFilmDesc(vpEl){
  if(!vpEl || window.innerWidth > 760) return;
  var d = vpEl.querySelector('.vp-desc');
  if(!d || !d.textContent) return;
  var px = 13;
  d.style.fontSize = px + 'px';
  for(var i = 0; i < 10 && px > 11 && d.scrollHeight > d.clientHeight + 1; i++){
    px -= .25;
    d.style.fontSize = px + 'px';
  }
}

function fitCats(el){
  if(!el) return;
  if(window.innerWidth > 860){
    el.style.removeProperty('--catfs');
    el.classList.remove('cats-scroll');
    el.classList.remove('cats-2row');
    return;
  }
  el.classList.remove('cats-scroll');
  el.classList.remove('cats-2row');
  el.style.setProperty('--catfs', '12px');       /* measuring stick */
  el.style.removeProperty('--cattr');
  let fs = 12;
  /* gaps and padding do not scale with the font, so one linear guess
     is not enough, iterate a few times until the row truly holds */
  for(let i = 0; i < 4; i++){
    const need = el.scrollWidth, have = el.clientWidth;
    if(!need || !have) return;
    if(need <= have + 1 && fs < 14){
      /* room to breathe upward? one gentle grow pass, then settle */
      if(i === 0){ fs = Math.min(14, fs * have / need * .96); }
      else break;
    } else {
      fs = Math.max(9.5, Math.min(14, fs * have / need * .985));
    }
    el.style.setProperty('--catfs', fs.toFixed(2) + 'px');
    /* narrow rows tighten their tracking before shrinking further */
    el.style.setProperty('--cattr', fs < 10.6 ? '.04em' : '.1em');
    if(fs <= 9.5) break;
  }
  /* v8 · below a READABLE size a single row is the wrong shape: fold the
     words into TWO ROWS at a comfortable size instead (what is horizontal
     splits top-and-bottom when that fits better). Only if even two rows
     cannot hold does the row scroll. */
  const spilling = () => el.scrollWidth > el.clientWidth + 2;
  if(fs < 10.6 || spilling()){
    el.classList.add('cats-2row');
    let f2 = 12.5;
    el.style.setProperty('--catfs', f2 + 'px');
    el.style.setProperty('--cattr', '.08em');
    const rows = () => { const t = new Set(); el.querySelectorAll('.sc-cat').forEach(b => t.add(b.offsetTop)); return t.size; };
    for(let i = 0; i < 4 && rows() > 2; i++){
      f2 = Math.max(9.5, f2 - 1.1);
      el.style.setProperty('--catfs', f2.toFixed(2) + 'px');
      if(f2 <= 9.5) break;
    }
    if(rows() > 2){
      /* even two rows will not hold, scroll honestly instead */
      el.classList.remove('cats-2row');
      el.style.setProperty('--catfs', '9.5px');
      if(spilling()) el.classList.add('cats-scroll');
    }
    return;
  }
  if(spilling()) el.classList.add('cats-scroll');
}

/* find an archive work by its column-A code */
function findByCode(works, code){
  const k = norm(code);
  if(!k) return null;
  return works.find(w => norm(w.code) === k) || null;
}

/* ──────────────── PDF via PDF.js canvas (ported from works3) ────────────────
   Robust against attachment-served files (raw.github / releases): the bytes
   are fetched by XHR and painted to canvas, never a download prompt.      */
function loadPdfJs(){ return window.__loadLocalPdfJs(); }
const DPR = () => Math.min(2, window.devicePixelRatio || 1);

/* lay out a placeholder per page, paint each to canvas as it nears view */
async function paintPdfPages(host, pdf, widthOf){
  const io = new IntersectionObserver(entries => entries.forEach(async e => {
    if(!e.isIntersecting || e.target._done) return;
    const ph = e.target; ph._done = true; io.unobserve(ph);
    const page = await pdf.getPage(+ph.dataset.page);
    const base = page.getViewport({scale: 1});
    const vp = page.getViewport({scale: (Math.max(40, widthOf()) / base.width) * DPR() });
    const c = document.createElement('canvas');
    c.width = vp.width; c.height = vp.height;
    ph.textContent = ''; ph.appendChild(c);
    page.render({canvasContext: c.getContext('2d'), viewport: vp});
  }), {rootMargin: '700px'});
  let ratio = '0.72 / 1';
  try{ const b1 = (await pdf.getPage(1)).getViewport({scale: 1}); ratio = b1.width + ' / ' + b1.height; }catch(_){}
  for(let n = 1; n <= pdf.numPages; n++){
    const ph = document.createElement('div');
    ph.className = 'pdf-page'; ph.dataset.page = n;
    ph.style.aspectRatio = ratio;
    host.appendChild(ph); io.observe(ph);
  }
  for(let n = 1; n <= pdf.numPages; n++){
    const b = (await pdf.getPage(n)).getViewport({scale: 1});
    const ph = host.querySelector('.pdf-page[data-page="' + n + '"]');
    if(ph) ph.style.aspectRatio = b.width + ' / ' + b.height;
  }
}

/* paint just the first page as a cover image into `host` */
async function paintPdfCover(host, src){
  const lib = await loadPdfJs();
  const pdf = await lib.getDocument(src).promise;
  const page = await pdf.getPage(1);
  const target = Math.max(200, host.clientWidth || 320);
  const base = page.getViewport({scale: 1});
  const vp = page.getViewport({scale: (target / base.width) * DPR() });
  const c = document.createElement('canvas');
  c.width = vp.width; c.height = vp.height;
  await page.render({canvasContext: c.getContext('2d'), viewport: vp}).promise;
  host.innerHTML = '';
  host.appendChild(c);
  return pdf;
}

/* ── mobile swipe parallax: while a carousel scrolls, the media inside
      each card drifts gently AGAINST the motion, depth without weight.
      Covering media (stills / thumbnails) carry a 10% overscan so no
      edge can ever show; contained films simply float; live iframes
      are left alone. coverAll forces the overscan for carousels whose
      media always fills its box (the works thumbs). ── */
function initParallax(scroller, cardSel, mediaSel, coverAll){
  /* v8 · the phone scrolls FLAT: no skew, no parallax drift, no breathing, the motion effects read as dizziness on a handheld screen */
  return;
  /* hand-made feel: the media SKEWS with the swipe's velocity and
     settles through an underdamped spring, a soft overshoot instead
     of the OS's flat stop, while the parallax drift keeps depth */
  let raf = null, lastLeft = scroller.scrollLeft, vel = 0, skew = 0, skewV = 0, calm = 0;
  const paint = () => {
    const left = scroller.scrollLeft;
    const dv = left - lastLeft;
    lastLeft = left;
    vel += (dv - vel) * .25;
    const target = Math.max(-6, Math.min(6, -vel * .55));
    skewV += (target - skew) * .11;
    skewV *= .84;                          /* under-damped: it wobbles home */
    skew += skewV;
    const w = scroller.clientWidth || 1;
    const base = scroller.getBoundingClientRect().left;
    scroller.querySelectorAll(cardSel).forEach(card => {
      const r = card.getBoundingClientRect();
      const p = (r.left - base + r.width / 2 - w / 2) / w;
      if(p < -1.2 || p > 1.2) return;
      const m = card.querySelector(mediaSel);
      if(!m || m.tagName === 'IFRAME') return;
      const cover = coverAll || m.tagName === 'IMG' || m.classList.contains('thumb-media');
      m.style.transform = 'translateX(' + (-p * 26).toFixed(1) + 'px) skewX(' +
        skew.toFixed(2) + 'deg)' + (cover ? ' scale(1.12)' : '');
    });
    calm = (Math.abs(dv) < .3 && Math.abs(skew) < .04 && Math.abs(skewV) < .04) ? calm + 1 : 0;
    if(calm > 14){ raf = null; return; }
    raf = requestAnimationFrame(paint);
  };
  const kick = () => { if(!raf){ lastLeft = scroller.scrollLeft; raf = requestAnimationFrame(paint); } };
  scroller.addEventListener('scroll', kick, {passive: true});
  kick();
}

/* ── a 4ms tap under the finger when a carousel snaps (Android only, iOS web has no vibration API; harmless there) ── */
function tick(){
  try{ if(navigator.vibrate) navigator.vibrate(4); }catch(_){}
}

/* ── inner pages open with a one-beat wordmark flash: the home page
      has its loader, the work page has its descend, everything else
      gets the same signature at the door ── */
(function(){
  if(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  /* mobile taps straight through, the wordmark interstitial reads as a
     stall between pages on a phone, not a signature */
  if(window.innerWidth <= 860 || (window.matchMedia && matchMedia('(pointer: coarse)').matches)) return;
  if(document.getElementById('loader') || document.body.classList.contains('wk-page')) return;
  const veil = document.createElement('div');
  veil.className = 'page-in';
  veil.innerHTML = '<img src="/assets/img/veacrop.webp" alt=""/>';
  document.body.appendChild(veil);
  setTimeout(() => veil.classList.add('off'), 600);
  setTimeout(() => { veil.remove(); }, 1500);
})();

/* ── page-leave curtain: internal links exit under a quick descending
      veil, so pages hand each other over like scenes, the arrival
      side already unmasks from the top. Modified clicks (new-tab,
      middle button), external links, downloads, #fragments and links
      whose pages run their own exits (preventDefault) are untouched. ── */
(function(){
  if(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let leaving = false;
  document.addEventListener('click', e => {
    if(leaving || e.defaultPrevented || e.button !== 0 ||
       e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    if(!a || a.target === '_blank' || a.hasAttribute('download')) return;
    const href = a.getAttribute('href');
    if(!href || href[0] === '#' || /^(mailto:|tel:|javascript:)/i.test(href)) return;
    let dest;
    try{ dest = new URL(a.href, location.href); }catch(_){ return; }
    if(dest.origin !== location.origin) return;
    e.preventDefault();
    leaving = true;
    const veil = document.createElement('div');
    veil.className = 'leave-curtain';
    document.body.appendChild(veil);
    requestAnimationFrame(() => requestAnimationFrame(() => veil.classList.add('on')));
    /* a phone answers the tap faster, the curtain drops in half the time
       (style.css shortens its transition to match) */
    const quick = window.innerWidth <= 860 || (window.matchMedia && matchMedia('(pointer: coarse)').matches);
    try{ window.VEASND && VEASND.fadeOut(quick ? 240 : 430); }catch(_){}
    setTimeout(() => { location.href = dest.href; }, quick ? 240 : 430);
  });
  /* back/forward restores from bfcache: the veil must never linger */
  window.addEventListener('pageshow', e => {
    if(!e.persisted) return;
    leaving = false;
    document.querySelectorAll('.leave-curtain').forEach(v => v.remove());
  });
})();

/* ── protection (best effort): no context menus anywhere, no dragging
      media or links out of the page, sources and hrefs shouldn't be
      one gesture away ── */
document.addEventListener('contextmenu', e => { e.preventDefault(); });
document.addEventListener('dragstart', e => {
  const t = e.target;
  if(t && (t.tagName === 'IMG' || t.tagName === 'VIDEO' ||
           (t.closest && t.closest('a')))) e.preventDefault();
});

window.VEA = {
  loadWorks: loadWorks,
  loadShowcase: loadShowcase,
  findByCode: findByCode,
  siteRoot: siteRoot,
  workUrl: workUrl,
  initParallax: initParallax,
  scrambleTo: scrambleTo,
  tick: tick,
  videoSrc: videoSrc,
  attachVideo: attachVideo,
  slugify: slugify,
  norm: norm,
  loadPdfJs: loadPdfJs,
  paintPdfPages: paintPdfPages,
  paintPdfCover: paintPdfCover,
  wakeVideos: wakeVideos,
  fitCats: fitCats,
  fitFilmDesc: fitFilmDesc,
  FALLBACK_POSTER: '/assets/img/example.png',
};
})();


/* ── v3: the decode, every worded surface EVOLVES out of raw
      characters. One shared tempo, unhurried: this is a premium house,
      nothing snaps into place. ── */
const SCRAMBLE_SET = '!<>-_\\/[]{}=+*^?#';
function scrambleTo(el, txt, dur){
  if(!el) return;
  txt = String(txt == null ? '' : txt);
  /* record the INTENDED final text: while the glyphs churn, el.textContent is
     random garbage, so anything that needs the stable value (e.g. the chrome
     decipher saving the line to restore) must read this, never the live text, otherwise it saves garbage and "restores" to it, leaving it stuck. */
  el._scrGoal = txt;
  if(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches){
    el.textContent = txt; return;
  }
  if(el._scrT) cancelAnimationFrame(el._scrT);
  /* v7.1 · assistive tech never hears the scramble: while the glyphs
     churn, the element carries its FINAL text for screen readers */
  const itv = el.closest && el.closest('a,button,summary,[role]');
  const hadHid = el.hasAttribute('aria-hidden'), hadLbl = el.hasAttribute('aria-label');
  if(itv){ if(!hadLbl) el.setAttribute('aria-label', txt); }
  else if(!hadHid) el.setAttribute('aria-hidden', 'true');
  const settle = () => {
    if(itv){ if(!hadLbl) el.removeAttribute('aria-label'); }
    else if(!hadHid) el.removeAttribute('aria-hidden');
  };
  const t0 = performance.now();
  const D = dur || Math.min(2400, Math.max(1150, txt.length * 30));
  /* ── LATE DATA ALWAYS WINS ────────────────────────────────────────────────
     The decode owns this element's textContent for up to 2.4s, writing a fresh
     frame every tick. Anything that fills the element from the sheet in that
     window used to be overwritten on the very next frame and lost for good, that is how a work page's <h1> reverted to its placeholder on phones,
     where the heading sits in the first screen and the decode starts before
     the CSV lands. So each frame remembers exactly what it wrote; if the live
     text is no longer that, someone else has written, and we RE-TARGET onto
     their words instead of stamping ours back over them. The effect survives,
     the data wins, and no element can be silently reverted again.           */
  let mine = null;
  (function tick(){
    if(mine !== null && el.textContent !== mine){
      const fresh = String(el.textContent == null ? '' : el.textContent);
      if(!fresh.trim()){ settle(); return; }        /* cleared on purpose, leave it */
      txt = fresh; el._scrGoal = txt;
      if(itv && !hadLbl) el.setAttribute('aria-label', txt);
    }
    const p = Math.min(1, (performance.now() - t0) / D);
    const keep = Math.floor(txt.length * p);
    let out = txt.slice(0, keep);
    for(let i = keep; i < txt.length; i++){
      /* spaces AND line breaks hold their place, a two-line surface
         (FEATURED WORKS over the work's name) never jumps mid-decode */
      out += (txt[i] === ' ' || txt[i] === '\n') ? txt[i]
           : SCRAMBLE_SET[(Math.random() * SCRAMBLE_SET.length) | 0];
    }
    el.textContent = out;
    mine = out;
    if(p < 1) el._scrT = requestAnimationFrame(tick);
    else settle();
  })();
}

/* every pure-text element on the page decodes ONCE, the first time it
   enters the screen, headings, paragraphs, footers, captions, all of
   it. Rebuilt content (works grids, the dex) re-arms itself. */
(function(){
  if(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const seen = new WeakSet();
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if(!en.isIntersecting) return;
      io.unobserve(en.target);
      const el = en.target;
      if(!(el.textContent || '').trim()) return;
      const wait = document.documentElement.classList.contains('v7arr') ? 560 : 0;
      /* read the text AT FIRE TIME, not now: up to a second passes here, and on
         a data-driven page the real words often land inside that gap. Snapshot-
         then-restore is how a stale placeholder used to win. */
      setTimeout(() => {
        const txt = el.textContent;
        if(txt && txt.trim()) scrambleTo(el, txt);
      }, wait + Math.random() * 420);
    });
  }, {threshold: .15});
  let armT = null;
  const arm = () => {
    document.querySelectorAll('body *').forEach(el => {
      if(seen.has(el)) return;
      seen.add(el);
      if(el.children.length) return;                      /* leaf text only */
      const tag = el.tagName;
      if(/^(SCRIPT|STYLE|NOSCRIPT|IFRAME|VIDEO|IMG|CANVAS|SVG|INPUT|TEXTAREA|SELECT|OPTION)$/.test(tag)) return;
      if(el.closest('.vp, #loader, #cur, .sc-dots, .mb-dots, .hud-strip, .page-in, .leave-curtain, [data-nodec]')) return;
      const t = el.textContent;
      if(!t || !t.trim() || t.length > 600) return;
      /* v7.1 · the decode is display jewellery, not a toll booth:
         body-size text reads instantly, and interactive text only
         keeps the signature when it IS the display (giant rows). */
      const fs = parseFloat(getComputedStyle(el).fontSize) || 0;
      if(fs < 17) return;
      if(fs < 28 && el.closest('a,button,summary,[role="tab"]')) return;
      io.observe(el);
    });
  };
  const boot = () => {
    arm();
    new MutationObserver(() => {
      clearTimeout(armT);
      armT = setTimeout(arm, 140);
    }).observe(document.body, {childList: true, subtree: true});
  };
  if(document.body) boot(); else document.addEventListener('DOMContentLoaded', boot);
})();

/* ── v3: the site's own cursor, a difference dot on every page; it
      grows into 'Open' over the works pieces, swells slightly over any
      link, and steps aside inside the film player (the pause chip
      rides the hand there) ── */
(function(){
  if(!window.matchMedia || !matchMedia('(min-width:861px) and (hover:hover) and (pointer:fine)').matches) return;
  const boot = () => {
    const cur = document.createElement('div');
    cur.id = 'cur';
    cur.innerHTML = '<span></span>';
    document.body.appendChild(cur);
    /* the ball now exists, ONLY now is the OS pointer allowed to hide
       (style.css keys every cursor:none off html.hascur). Guarantees no
       page is left cursor-less if data.js was gated or slow to arrive. */
    document.documentElement.classList.add('hascur');
    const lbl = cur.querySelector('span');
    let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, {passive: true});
    document.addEventListener('mouseover', e => {
      const t = e.target;
      if(t.closest && t.closest('.vp:not(.vp-lite)')){
        /* over a player control the ball returns (the pause chip yields
           there), everywhere else in the film the chip is the pointer */
        if(t.closest('.vp-back, .vp-menu, .vp-bar')){ cur.className = 'mid'; lbl.textContent = ''; return; }
        cur.className = 'off'; lbl.textContent = ''; return;
      }
      const item = t.closest && t.closest('.sc-item');
      if(item){ cur.className = 'big'; lbl.textContent = 'Open'; return; }
      if(t.closest && t.closest('a,button,[role="button"],input,textarea,select,label')){
        cur.className = 'mid'; lbl.textContent = ''; return;
      }
      cur.className = ''; lbl.textContent = '';
    });
    (function glide(){
      cx += (mx - cx) * .22; cy += (my - cy) * .22;
      cur.style.left = cx.toFixed(1) + 'px';
      cur.style.top = cy.toFixed(1) + 'px';
      requestAnimationFrame(glide);
    })();
  };
  if(document.body) boot(); else document.addEventListener('DOMContentLoaded', boot);
})();
