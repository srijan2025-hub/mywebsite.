document.addEventListener('DOMContentLoaded', () => {
  // Toggle dark/light theme
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      const current = document.body.getAttribute('data-theme') || 'light';
      document.body.setAttribute('data-theme', current === 'light' ? 'dark' : 'light');
    });
  }

  // Neon colors for random glow
  const neonColors = ["#00ffe0", "#ff00ff", "#00ff00", "#ffcc00", "#ff3300", "#3399ff", "#ff66cc"];

  // Trigger moving border glow on a button element
  function triggerGlow(btn) {
    const color = neonColors[Math.floor(Math.random() * neonColors.length)];
    btn.style.setProperty('--glow', color);
    // Add class to start animation
    btn.classList.add('flash');

    // Remove flash class after animation ends (1s) so it can be retriggered
    setTimeout(() => {
      btn.classList.remove('flash');
      btn.style.removeProperty('--glow');
    }, 1100);
  }

  // Event delegation: handle clicks on any .btn (works if .btns are created later)
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if (!btn) return;

    // Only animate border glow in dark mode
    if (document.body.getAttribute('data-theme') === 'dark') {
      triggerGlow(btn);
    }
  });
});
