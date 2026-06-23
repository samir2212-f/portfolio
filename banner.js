// Efecto de aparición por cuadritos (tiles/mosaico)
window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('banner-tiles');
  if (!container) return;

  const COLS = 20;
  const ROWS = 8;
  const TOTAL = COLS * ROWS;
  const DELAY_MAX = 1800; // ms total de la animación

  // Crear los cuadritos
  for (let i = 0; i < TOTAL; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    // Delay aleatorio para cada cuadrito
    const delay = Math.random() * DELAY_MAX;
    tile.style.animationDelay = delay + 'ms';
    container.appendChild(tile);
  }
});
