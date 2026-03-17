import { createContext, useLayoutEffect, useMemo, type ReactNode } from "react";

import gendigitalConfig from "./gendigital/config";
import moneylionConfig from "./moneylion/config";
import type { BrandConfig } from "./types";

const BRAND_MAP: Record<string, BrandConfig> = {
  "gendigital.oktademo.cloud": gendigitalConfig,
  "moneylion.oktademo.net": moneylionConfig,
};

export function resolveBrandConfig(): BrandConfig {
  // Dev-only: allow ?brand=moneylion (or any slug) to override hostname detection
  if (import.meta.env.DEV) {
    const slug = new URLSearchParams(window.location.search).get("brand");
    if (slug) {
      const match = Object.values(BRAND_MAP).find((c) => c.slug === slug);
      if (match) return match;
    }
  }
  return BRAND_MAP[window.location.hostname] ?? gendigitalConfig;
}

export const BrandContext = createContext<BrandConfig>(gendigitalConfig);

interface BrandProviderProps {
  children: ReactNode;
}

const STYLE_TAG_ID = "brand-vars";

/**
 * Detects the active brand from the hostname, injects its CSS variables into
 * a <style> tag using !important so they can't be overridden by
 * applyAuth0Theme's inline setProperty calls, and provides the config via
 * context to all child components.
 *
 * CSS cascade: !important stylesheet > regular inline style
 * This means brand vars always win over any Auth0 tenant theme overrides.
 */
export function BrandProvider({ children }: BrandProviderProps) {
  const config = useMemo(() => resolveBrandConfig(), []);

  useLayoutEffect(() => {
    const cssText = Object.entries(config.cssVars)
      .map(([prop, val]) => `  ${prop}: ${val} !important;`)
      .join("\n");

    let styleEl = document.getElementById(
      STYLE_TAG_ID
    ) as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = STYLE_TAG_ID;
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = `:root {\n${cssText}\n}`;

    document.documentElement.setAttribute("data-brand", config.slug);
  }, [config]);

  return (
    <BrandContext.Provider value={config}>{children}</BrandContext.Provider>
  );
}
