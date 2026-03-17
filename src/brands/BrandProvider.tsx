import { createContext, useLayoutEffect, useMemo, type ReactNode } from "react";

import gendigitalConfig from "./gendigital/config";
import moneylionConfig from "./moneylion/config";
import type { BrandConfig } from "./types";

const BRAND_MAP: Record<string, BrandConfig> = {
  "gendigital.oktademo.cloud": gendigitalConfig,
  "moneylion.oktademo.net": moneylionConfig,
};

export function resolveBrandConfig(): BrandConfig {
  return BRAND_MAP[window.location.hostname] ?? gendigitalConfig;
}

export const BrandContext = createContext<BrandConfig>(gendigitalConfig);

interface BrandProviderProps {
  children: ReactNode;
}

/**
 * Detects the active brand from the hostname, injects its CSS variables into
 * :root, and provides the config via context to all child components.
 *
 * Runs synchronously before paint (useLayoutEffect) to avoid any flash of
 * unstyled content when switching between brands.
 */
export function BrandProvider({ children }: BrandProviderProps) {
  const config = useMemo(() => resolveBrandConfig(), []);

  useLayoutEffect(() => {
    const root = document.documentElement;
    Object.entries(config.cssVars).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
    // Tag the root with the brand slug for any CSS-level targeting if needed
    root.setAttribute("data-brand", config.slug);
  }, [config]);

  return (
    <BrandContext.Provider value={config}>{children}</BrandContext.Provider>
  );
}
