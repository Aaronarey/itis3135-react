/*
  main.jsx - entry point for the React version of my ITIS3135 course site.
  It loads the same stylesheet as the regular site and wraps the app in
  BrowserRouter so each page gets a normal URL (/introduction, /contract, /about).
*/
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/default.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
