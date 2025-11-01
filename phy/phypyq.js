document.addEventListener('DOMContentLoaded', () => {
  const books = [
    {
      title: "pyq 1",
      pdf: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/main/jeepyqdimensionalmotion.pdf",
      gdrive: "", // optional
      id: "preview1"
    },
    {
      title: "pyq 2",
      pdf: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/main/jeepyqlawsofmotion.pdf",
      gdrive: "", // optional
      id: "preview2"
    },
    {
      title: "pyq 3",
      pdf: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/main/jeepyqphysicalworldunit&measurement.pdf",
      gdrive: "", // optional
      id: "preview3"
    }
  ];

  const container = document.getElementById("books-container");

  books.forEach(book => {
    // Always show button, fallback to Docs Viewer if no Drive
    const gdriveUrl = book.gdrive 
      ? `https://drive.google.com/file/d/${book.gdrive}/view` 
      : `https://docs.google.com/viewer?url=${encodeURIComponent(book.pdf)}&embedded=true`;

    container.innerHTML += `
      <div class="book">
        <h2>📘 ${book.title}</h2>
        <div class="btn-group">
          <a class="btn" href="${gdriveUrl}" target="_blank">📂 View in GDrive</a>
          <a class="btn" href="${book.pdf}" target="_blank">📂 View in Adobe</a>
          <button class="btn" onclick="togglePreview('${book.id}','${book.pdf}','${book.gdrive}')">🌐 Show/Hide Preview</button>
          <a class="btn" href="${book.pdf}" download>⬇️ Download</a>
          <button class="btn" onclick="openFullscreenPDF('${book.pdf}')">🖥️ Fullscreen</button>
        </div>
        <div class="preview" id="${book.id}"></div>
      </div>
    `;
  });

  // Preview function
  window.togglePreview = function(id, pdfUrl, gdriveId) {
    const preview = document.getElementById(id);
    if (preview.style.display !== "block") {
      if (gdriveId) {
        preview.innerHTML = `
          <iframe src="https://drive.google.com/file/d/${gdriveId}/preview" 
                  allowfullscreen 
                  onerror="this.onerror=null;this.src='https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true'">
          </iframe>`;
      } else {
        preview.innerHTML = `<iframe src="https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true" allowfullscreen></iframe>`;
      }
      preview.style.display = "block";
    } else {
      preview.style.display = "none";
      preview.innerHTML = "";
    }
  };

  // Fullscreen PDF.js
  window.openFullscreenPDF = function(pdfUrl) {
    const viewerUrl = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`;
    window.open(viewerUrl, '_blank');
  };
});
