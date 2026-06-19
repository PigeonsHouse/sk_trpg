import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes } from "@generouted/react-router";
import { HelmetProvider } from "react-helmet-async";
import { GlobalStyles } from "./components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <GlobalStyles />
      <Routes />
    </HelmetProvider>
  </StrictMode>
);
