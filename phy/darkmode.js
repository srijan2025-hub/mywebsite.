function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function triggerGlow(btn) {
  const color = getRandomRGB();   // random RGB
  btn.style.setProperty('--glow', color);
  btn.classList.add('flash');

  setTimeout(() => {
    btn.classList.remove('flash');
    btn.style.removeProperty('--glow');
  }, 1200); // glow lasts ~1.2s
}

document.body.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn');
  if (btn) triggerGlow(btn);
});
