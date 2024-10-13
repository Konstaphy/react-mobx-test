import { createRoot } from "react-dom/client";
import { App } from "./app/app.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
