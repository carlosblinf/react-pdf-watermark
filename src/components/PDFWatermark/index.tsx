import React, { useEffect, useRef } from "react";
import WebViewer from "@pdftron/webviewer";
import "./styles.css";

type PDFWatermarkProps = {
  textHeader: string;
  textWatermark: string;
  pdfURL: string;
};

function PDFWatermark({
  textHeader,
  textWatermark,
  pdfURL,
}: PDFWatermarkProps) {
  const viewer = useRef(null);
  useEffect(() => {
    WebViewer(
      {
        path: "/webviewer",
        initialDoc: "/programacion.pdf",
        disabledElements: [
          "viewControlsButton",
          "viewControlsOverlay",
          "ribbons",
          "menuButton",
          "toolsHeader",
          "selectToolButton",
        ],
      },
      viewer.current
    ).then((instance) => {
      const { documentViewer } = instance.Core;

      documentViewer.setWatermark({
        // Draw diagonal watermark in middle of the document
        diagonal: {
          fontSize: 50,
          fontFamily: "sans-serif",
          color: "red",
          opacity: 50, // from 0 to 100
          text: textWatermark,
        },
      });
    });
  }, []);

  return (
    <div className="MyComponent">
      <div className="header">{textHeader}</div>
      <div className="webviewer" id="viewer" ref={viewer} />
    </div>
  );
}

export default PDFWatermark;
