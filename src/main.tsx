import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes } from "@generouted/react-router";
import { GlobalStyles } from "./components";

createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyles />
    <Routes />
  </>
);
