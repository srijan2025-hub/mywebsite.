document.addEventListener('DOMContentLoaded', () => {
  const books = [
    {
      title: "DC Pandey Mechanics 1",
      pdf: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/main/DCPandeyMechanics1.pdf",
      gdrive: "1Ft7LyjA3FLoRYhTCDHWPEu_aYbhWaeau", // only the file ID
      id: "preview1",
      showDrive: true
    },
    {
      title: "DC Pandey Mechanics 2",
      pdf: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/main/DCPandeyMechanics2.pdf",
      id: "preview2",
      showDrive: false
    }
  ];

  const container = document.getElementById("books-container");

  books.forEach(book => {
    const gdriveBtn = book.showDrive && book.gdrive 
      ? `<a class="btn" href="https://drive.google.com/file/d/${book.gdrive}/view" target="_blank">📂 View in GDrive</a>` 
      : "";

    container.innerHTML += `
      <div class="book">
        <h2>📘 ${book.title}</h2>
        <div class="btn-group">
          ${gdriveBtn}
          <a class="btn" href="${book.pdf}" target="_blank">📂 View in Adobe</a>
          <button class="btn" onclick="togglePreview('${book.id}','${book.pdf}','${book.gdrive || ''}',${book.showDrive})">🌐 Show/Hide Preview</button>
          <a class="btn" href="${book.pdf}" download>⬇️ Download</a>
          <button class="btn" onclick="openFullscreenPDF('${book.pdf}')">🖥️ Fullscreen</button>
        </div>
        <div class="preview" id="${book.id}"></div>
      </div>
    `;
  });

  // Preview function
  window.togglePreview = function(id, pdfUrl, gdriveId, showDrive) {
    const preview = document.getElementById(id);
    if (preview.style.display !== "block") {
      if (showDrive && gdriveId) {
        preview.innerHTML = `<iframe src="https://drive.google.com/file/d/${gdriveId}/preview" allowfullscreen></iframe>`;
      } else {
        preview.innerHTML = `<iframe src="https://docs.google.com/viewer?url=${encodeURIComponent(pdfUrl)}&embedded=true" allowfullscreen></iframe>`;
      }
      preview.style.display = "block";
    } else {
      preview.style.display = "none";
      preview.innerHTML = "";
    }
  };

  // Fullscreen function (PDF.js)
  window.openFullscreenPDF = function(pdfUrl) {
    const viewerUrl = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`;
    window.open(viewerUrl, '_blank');
  };
});
