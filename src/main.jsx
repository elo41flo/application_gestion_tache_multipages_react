import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // L'import manquant
import App from "./App";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* On enveloppe App ici */}
      <App />
    </BrowserRouter>
  </StrictMode>
);