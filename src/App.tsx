import { lazy, Suspense } from "react";

import { BrandProvider } from "./brands/BrandProvider";

/**
 * Main App Component
 * Conditionally loads DevScreenManager or ProdScreenManager based on environment
 * Uses React.lazy() for optimal code splitting and tree-shaking
 */

// Conditionally lazy-load the appropriate screen manager
const ScreenManager = lazy(() => {
  if (import.meta.env.DEV) {
    return import("./DevScreenManager");
  } else {
    return import("./ProdScreenManager");
  }
});

export default function App() {
  return (
    <BrandProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <ScreenManager />
      </Suspense>
    </BrandProvider>
  );
}
