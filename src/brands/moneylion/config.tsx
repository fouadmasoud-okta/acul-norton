import type { BrandConfig } from "../types";
import { MoneyLionIllustration } from "./MoneyLionIllustration";

const moneylionConfig: BrandConfig = {
  slug: "moneylion",
  cssVars: {
    // Colors — teal primary, dark text
    "--ul-theme-color-primary-button": "#4ED8C4",
    "--ul-theme-color-primary-button-label": "#1A1A1A",
    "--ul-theme-color-secondary-button-border": "#D1D5DB",
    "--ul-theme-color-secondary-button-label": "#1A1A1A",
    "--ul-theme-color-base-focus-color": "#4ED8C4",
    "--ul-theme-color-base-hover-color": "#1A1A1A",
    "--ul-theme-color-links-focused-components": "#4ED8C4",
    // Borders — pill button
    "--ul-theme-border-button-border-radius": "9999px",
    // Page background — clean white
    "--ul-theme-page-bg-background-color": "#FFFFFF",
    // Logo — replace with actual MoneyLion logo URL
    "--ul-theme-widget-logo-url": '"/brands/moneylion/logo.png"',
    "--ul-theme-widget-logo-height": "40px",
  },
  panel: {
    type: "illustration",
    illustration: <MoneyLionIllustration />,
  },
};

export default moneylionConfig;
