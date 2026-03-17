import type { BrandConfig } from "../types";

const gendigitalConfig: BrandConfig = {
  slug: "gendigital",
  cssVars: {
    // Colors — amber/gold primary, dark charcoal text
    "--ul-theme-color-primary-button": "oklch(0.88 0.18 95)",
    "--ul-theme-color-primary-button-label": "oklch(0.18 0.02 250)",
    "--ul-theme-color-secondary-button-border": "oklch(0.90 0.01 90)",
    "--ul-theme-color-secondary-button-label": "oklch(0.18 0.02 250)",
    "--ul-theme-color-base-focus-color": "oklch(0.55 0.15 250)",
    "--ul-theme-color-base-hover-color": "oklch(0.18 0.02 250)",
    "--ul-theme-color-links-focused-components": "oklch(0.55 0.15 250)",
    // Borders — 8px radius
    "--ul-theme-border-button-border-radius": "8px",
    // Page background — warm light gray
    "--ul-theme-page-bg-background-color": "oklch(0.97 0.005 90)",
    // Logo — Norton
    "--ul-theme-widget-logo-url":
      '"https://upload.wikimedia.org/wikipedia/commons/8/83/Norton-logo-2021.svg"',
    "--ul-theme-widget-logo-height": "52px",
  },
  panel: {
    type: "text",
    title: "Welcome",
    body: "Log in to continue",
  },
};

export default gendigitalConfig;
