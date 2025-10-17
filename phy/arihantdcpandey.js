document.addEventListener('DOMContentLoaded', () => {
  const books = [
    {
      title: "Physical World - Unit & Measurement (JEEm)",
      pdf: "https://cdn.jsdelivr.net/gh/srijan2025-hub/physicsstorage1/jeepyqphysicalworldunit&measurement.pdf",
      gdrive: "",
      id: "preview1"
    },
    {
      title: "Physical World - Unit & Measurement (NEET)",
      pdf: "https://cdn.jsdelivr.net/gh/srijan2025-hub/physicsstorage1/xxxxyyyyzzz.pdf",
      gdrive: "",
      id: "preview2"
    },
    {
      title: "Dimensional Motion (JEEm)",
      pdf: "https://cdn.jsdelivr.net/gh/srijan2025-hub/physicsstorage1/jeepyqdimentionalmotion.pdf",
      gdrive: "",
      id: "preview3"
    },
    {
      title: "Laws of Motion (JEEm)",
      pdf: "https://cdn.jsdelivr.net/gh/srijan2025-hub/physicsstorage1/jeepyqlawsofmotion.pdf",
      gdrive: "",
      id: "preview4"
    }
  ];

  const container = document.getElementById("books-container");

  books.forEach(book => {
    const gdriveUrl = book.gdrive 
      ? `https://drive.google.com/file/d/${book.gdrive}/view`
      : `https://docs.google.com/viewer?url=${encodeURIComponent(book.pdf)}&embedded=true`;

    container.innerHTML += `
      <div class="book">
        <h2>${book.title}</h2>
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

  // Preview toggle
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

  // Fullscreen via PDF.js
  window.openFullscreenPDF = function(pdfUrl) {
    const viewerUrl = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`;
    window.open(viewerUrl, '_blank');
  };
});
