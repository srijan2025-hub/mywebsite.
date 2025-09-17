document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  let savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.setAttribute('data-theme', savedTheme);
  localStorage.setItem('theme', savedTheme);

  darkModeToggle.addEventListener('click', () => {
    const current = document.body.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  const neonColors = ["#00ffe0", "#ff00ff", "#00ff00", "#ffcc00", "#ff3300", "#3399ff", "#ff66cc"];
  function triggerGlow(btn) {
    const color = neonColors[Math.floor(Math.random() * neonColors.length)];
    btn.style.setProperty('--glow', color);
    btn.classList.add('flash');
    setTimeout(() => {
      btn.classList.remove('flash');
      btn.style.removeProperty('--glow');
    }, 1100);
  }

  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if (btn) triggerGlow(btn);
  });
});
