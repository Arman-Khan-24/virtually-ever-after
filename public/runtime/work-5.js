
window.addEventListener('pagereveal', function(e){
  if(e.viewTransition) document.documentElement.classList.add('vt-in');
});
/* the seam: gallery.js/hall.js stamp the clicked work's code before the
   flight ends; if THIS page is that work, the entrance is continuous */
(function(){
  try{
    var seam = sessionStorage.getItem('g3seam');
    if(seam == null) return;
    sessionStorage.removeItem('g3seam');   /* one flight, one seam */
    document.documentElement.classList.add('g3seam');
  }catch(_){}
})();
