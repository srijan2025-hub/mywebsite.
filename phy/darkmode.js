document.addEventListener('DOMContentLoaded', () => {
  const books = [
    {
      title: "DC Pandey Mechanics 1",
      pdf: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/main/DCPandeyMechanics1.pdf",
      gdrive: "https://drive.google.com/file/d/1Ft7LyjA3FLoRYhTCDHWPEu_aYbhWaeau/preview",
      id: "preview1"
    },
    {
      title: "DC Pandey Mechanics 2",
      pdf: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/main/DCPandeyMechanics2.pdf",
      gdrive: "https://drive.google.com/file/d/1Fv-w6t8fdsWGFcBcWjEK_bYjsm7fVMbm/preview",
      id: "preview2"
    }
  ];

  // --- Generate Book Cards ---
  const container = document.getElementById("books-container");
  books.forEach(book => {
    container.innerHTML += `
      <div class="book">
        <h2>📘 ${book.title}</h2>
        <div class="btn-group">
          <a class="btn" href="${book.pdf}" target="_blank">📂 View in Adobe</a>
          <a class="btn" href="${book.gdrive}" target="_blank">🔗 View in Google Drive</a>
          <button class="btn" onclick="togglePreview('${book.id}','${book.pdf}')">🌐 Show/Hide Preview</button>
          <a class="btn" href="${book.pdf}" download>⬇️ Download</a>
          <button class="btn" onclick="openFullscreenPDF('${book.pdf}')">🖥️ Fullscreen</button>
        </div>
        <div class="preview" id="${book.id}"></div>
      </div>
    `;
  });

  // --- Preview & Fullscreen Functions ---
  window.togglePreview = function(id, pdfUrl) {
    const preview = document.getElementById(id);
    if (preview.style.display !== "block") {
      preview.innerHTML = `<iframe src="https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true" allowfullscreen></iframe>`;
      preview.style.display = "block";
    } else {
      preview.style.display = "none";
      preview.innerHTML = "";
    }
  };

  window.openFullscreenPDF = function(pdfUrl) {
    const viewerUrl = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`;
    window.open(viewerUrl, '_blank');
  };

  // --- Dark/Light Mode Toggle + Neon Glow ---
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
    if (!btn) return;
    triggerGlow(btn);
  });
});
