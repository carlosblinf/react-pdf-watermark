import { useState } from "react";
import PDFWatermark from "./components/PDFWatermark";
import ReactPdf from "./components/ReacPdf";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <PDFWatermark
        textHeader="Documento de Prueba"
        textWatermark="Marca de agua"
        pdfURL="/programacion.pdf"
      />
      {/* <ReactPdf /> */}
    </div>
  );
}

export default App;
