import { useContext } from "react";

import { BrandContext } from "./BrandProvider";
import type { BrandConfig } from "./types";

/** Hook to access the active brand config from any component */
export function useBrand(): BrandConfig {
  return useContext(BrandContext);
}

export type { BrandConfig };
