document.addEventListener('DOMContentLoaded', () => {
  const books = [
    {
      title: "DC Pandey Mechanics 1",
      pdf: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/main/DCPandeyMechanics1.pdf",
      gdrive: "https://drive.google.com/file/d/1Ft7LyjA3FLoRYhTCDHWPEu_aYbhWaeau/preview",
      id: "preview1",
      showGDrive: false
    },
    {
      title: "DC Pandey Mechanics 2",
      pdf: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/main/DCPandeyMechanics2.pdf",
      gdrive: "https://drive.google.com/file/d/1Fv-w6t8fdsWGFcBcWjEK_bYjsm7fVMbm/preview",
      id: "preview2",
      showGDrive: true
    }
  ];

  const container = document.getElementById("books-container");

  books.forEach(book => {
    container.innerHTML += `
      <div class="book">
        <h2>📘 ${book.title}</h2>
        <div class="btn-group">
          <a class="btn" href="${book.pdf}" target="_blank">📂 View in Adobe</a>
          ${book.showGDrive ? `<a class="btn" href="${book.gdrive}" target="_blank">🔗 View in Google Drive</a>` : ''}
          <button class="btn" onclick="togglePreview('${book.id}','${book.pdf}')">🌐 Show/Hide Preview</button>
          <a class="btn" href="${book.pdf}" download>⬇️ Download</a>
          <button class="btn" onclick="openFullscreenPDF('${book.pdf}')">🖥️ Fullscreen</button>
        </div>
        <div class="preview" id="${book.id}"></div>
      </div>
    `;
  });

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
});
