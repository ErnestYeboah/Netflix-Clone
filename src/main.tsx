import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import NetflixGlobalState from "./context/NetflixContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <NetflixGlobalState>
        <App />
      </NetflixGlobalState>
    </StrictMode>
  </BrowserRouter>
);
