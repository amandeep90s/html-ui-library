/* ============================================================
   Components Registry
   ============================================================
   Central registry of all UI components. Add new components
   here and they will automatically appear in the sidebar.
   ============================================================ */

import { badgeComponent } from "./badge.js";
import { buttonComponent } from "./button.js";

export const components = [buttonComponent, badgeComponent];
