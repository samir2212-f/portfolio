// ══ Menú móvil ══
function toggleMenu(){
  document.getElementById('navLinks').classList.toggle('open');
}
document.querySelectorAll('.navbar__link').forEach(l=>{
  l.addEventListener('click', ()=> document.getElementById('navLinks').classList.remove('open'));
});

// ══ Marca el link activo según la página actual ══
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar__link').forEach(l=>{
    const href = l.getAttribute('href');
    if(href === path) l.classList.add('active');
    else l.classList.remove('active');
  });
})();

// ══ Navbar con sombra al hacer scroll ══
window.addEventListener('scroll', ()=>{
  document.querySelector('.navbar')?.classList.toggle('navbar--scrolled', window.scrollY > 20);
});

// ══ Scroll reveal genérico ══
document.addEventListener('DOMContentLoaded', ()=>{
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('reveal--in');
        io.unobserve(e.target);
      }
    });
  }, { threshold:0.15 });
  els.forEach(el=> io.observe(el));
});

// ══ Efecto cuadritos sobre el banner de imagen ══
window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('banner-tiles');
  if (!container) return;
  const COLS = 20, ROWS = 8, TOTAL = COLS * ROWS, DELAY_MAX = 1800;
  for (let i = 0; i < TOTAL; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.style.animationDelay = (Math.random() * DELAY_MAX) + 'ms';
    container.appendChild(tile);
  }
});

// ══ Contador animado (usado en página de competencias/inicio) ══
document.addEventListener('DOMContentLoaded', ()=>{
  const counters = document.querySelectorAll('[data-count]');
  if(!counters.length) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'),10);
      let cur = 0;
      const step = Math.max(1, Math.ceil(target/40));
      const tick = ()=>{
        cur += step;
        if(cur >= target){ el.textContent = target; return; }
        el.textContent = cur;
        requestAnimationFrame(tick);
      };
      tick();
      io.unobserve(el);
    });
  }, {threshold:0.5});
  counters.forEach(c=>io.observe(c));
});
