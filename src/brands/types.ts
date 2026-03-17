import type { ReactNode } from "react";

export type BrandPanelType = "text" | "illustration";

export interface BrandPanel {
  type: BrandPanelType;
  /** Title shown in the left panel (text type only) */
  title?: string;
  /** Body copy shown in the left panel (text type only) */
  body?: string;
  /** Illustration component rendered in the left panel (illustration type only) */
  illustration?: ReactNode;
}

export interface BrandConfig {
  slug: string;
  /** CSS custom property overrides applied to :root at runtime */
  cssVars: Record<string, string>;
  /** Left welcome panel configuration */
  panel: BrandPanel;
}
