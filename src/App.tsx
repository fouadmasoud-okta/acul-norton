import { Suspense, lazy } from "react";

import { BrandProvider } from "./brands/BrandProvider";
import ProdScreenManager from "./ProdScreenManager";

/**
 * Main App Component
 *
 * Production: ProdScreenManager is eagerly imported — no Suspense, no loading flash.
 * Dev: DevScreenManager is lazy-loaded (it pulls in the heavy ul-context-inspector)
 *      with a null fallback so nothing renders while the chunk loads.
 */
const DevScreenManager = lazy(() => import("./DevScreenManager"));

export default function App() {
  if (import.meta.env.DEV) {
    return (
      <BrandProvider>
        <Suspense fallback={null}>
          <DevScreenManager />
        </Suspense>
      </BrandProvider>
    );
  }

  return (
    <BrandProvider>
      <ProdScreenManager />
    </BrandProvider>
  );
}
