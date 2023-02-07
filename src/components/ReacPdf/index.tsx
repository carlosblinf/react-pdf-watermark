import React, { useEffect, useRef } from "react";
import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";

type PdfProps = {
  url?: string;
};

function ReactPdf({ url = "/programacion.pdf" }: PdfProps) {
  const viewer = useRef(null);

  async function modifyPdf() {
    const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();
    pages.forEach((page) => {
      const { width, height } = page.getSize();
      page.drawText("Marca de Agua", {
        x: width / 3,
        y: height / 2 + 100,
        size: 50,
        font: helveticaFont,
        color: rgb(0.95, 0.1, 0.1),
        rotate: degrees(-45),
      });
    });
    const pdfBytes = await pdfDoc.saveAsBase64({ dataUri: true });
    document.getElementById("pdf").src = pdfBytes;
  }

  useEffect(() => {
    modifyPdf();
  }, []);

  return (
    <div>
      <iframe
        id="pdf"
        ref={viewer}
        style={{ width: "100vw", height: "100vh" }}
      ></iframe>
    </div>
  );
}

export default ReactPdf;
