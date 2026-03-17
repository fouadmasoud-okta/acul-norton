import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App.tsx";
import { resolveBrandConfig } from "./brands/BrandProvider";

/**
 * Apply brand CSS vars synchronously before React mounts.
 * BrandProvider.useLayoutEffect reuses this same style tag,
 * so there is no double-write on hydration.
 */
(function applyBrandVarsSync() {
  const config = resolveBrandConfig();
  const cssText = Object.entries(config.cssVars)
    .map(([prop, val]) => `  ${prop}: ${val} !important;`)
    .join("\n");
  const style = document.createElement("style");
  style.id = "brand-vars";
  style.textContent = `:root {\n${cssText}\n}`;
  document.head.appendChild(style);
  document.documentElement.setAttribute("data-brand", config.slug);
})();

async function initializeApp() {
  /**
   * ACUL Integration Note:
   * The following lines handle the specific way this React application is integrated
   * into Auth0's Universal Login page. Auth0 provides the base HTML DOM.
   * This script then creates a 'div' (rootElement),
   * appends it to Auth0's document.body, and then mounts the React application onto this div.
   * This differs from typical setups where an index.html is bundled directly with the app.
   */
  const rootElement = document.createElement("div");
  rootElement.id = "root";

  document.body.appendChild(rootElement);

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

initializeApp();
