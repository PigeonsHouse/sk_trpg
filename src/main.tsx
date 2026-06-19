import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { Routes } from "@generouted/react-router";
import { GlobalStyles } from "./components";

const App = () => {
  useEffect(() => {
    document.documentElement.classList.add("app-hydrated");
  }, []);

  return (
    <CacheProvider
      value={createCache({
        key: "css",
        speedy: false,
      })}
    >
      <HelmetProvider>
        <GlobalStyles />
        <Routes />
      </HelmetProvider>
    </CacheProvider>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
