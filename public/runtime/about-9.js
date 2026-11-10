
/* protection (best effort): no context menus, no dragging media/links out */
document.addEventListener('contextmenu', function(e){ e.preventDefault(); });
document.addEventListener('dragstart', function(e){
  var t = e.target;
  if(t && (t.tagName === 'IMG' || t.tagName === 'VIDEO' ||
           (t.closest && t.closest('a')))) e.preventDefault();
});
