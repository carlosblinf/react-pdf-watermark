import { useState } from "react";
import PDFWatermark from "./components/PDFWatermark";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <PDFWatermark
        textHeader="Documento de Prueba"
        textWatermark="Marca de agua"
        pdfURL="/programacion.pdf"
      />
    </div>
  );
}

export default App;
