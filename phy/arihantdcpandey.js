document.addEventListener('DOMContentLoaded', () => {
  const books = [
    {
      title: "DC Pandey MMechanics 1",
      pdf: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/main/DCPandeyMechanics1.pdf",
      gdrive: "", 
      id: "preview1"
    },
    {
      title: "DC Pandey Mechanics 2",
      pdf: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/main/DCPandeyMechanics2.pdf",
      gdrive: "", 
      id: "preview2"
    },
    {
      title: "Waves & Thermodynamics",
      pdf: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/main/DCPandeywavesandthermodynamics.pdf",
      gdrive: "", 
      id: "preview3"
    },
    {
      title: "Electricity & Magnetism",
      pdf: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/main/DCPandeyelectricityandmagnetism.pdf",
      gdrive: "", 
      id: "preview4"
    },
    {
      title: "Optics & Modern Physics",
      pdf: "https://raw.githubusercontent.com/srijan2025-hub/physicsstorage1/main/DCPandeyopticsandmodernphysics.pdf",
      gdrive: "", 
      id: "preview5"
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
          <a class="btn" href="${book.pdf}" download>⬇️ Download</a>
          <button class="btn" onclick="openFullscreenPDF('${book.pdf}')">🖥️ Fullscreen</button>
        </div>
      </div>
    `;
  });

  // Fullscreen PDF.js
  window.openFullscreenPDF = function(pdfUrl) {
    const viewerUrl = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(pdfUrl)}`;
    window.open(viewerUrl, '_blank');
  };
});
