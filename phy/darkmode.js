// ===== darkmode.js =====

// Dark/Light Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
let savedTheme = localStorage.getItem('theme') || 'dark';
document.body.setAttribute('data-theme', savedTheme);
localStorage.setItem('theme', savedTheme);

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    const current = document.body.getAttribute('data-theme') || 'dark';
    const next = current === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// Generate random RGB color
function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Apply glow effect on button click
function triggerGlow(btn) {
  const color = getRandomRGB();
  btn.style.setProperty('--glow', color);
  btn.classList.add('flash');

  setTimeout(() => {
    btn.classList.remove('flash');
    btn.style.removeProperty('--glow');
  }, 1200); // duration of click glow
}

// Listen for button clicks
document.body.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn');
  if (btn) triggerGlow(btn);
});

// ===== Continuous RGB Glow =====
function startContinuousGlow() {
  setInterval(() => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const glowColor = `rgb(${r}, ${g}, ${b})`;
    // Update CSS variable --glow for all glowing elements
    document.documentElement.style.setProperty('--glow', glowColor);
  }, 1000); // change color every 0.5 seconds
}

// Start continuous glow on page load
document.addEventListener('DOMContentLoaded', startContinuousGlow);
