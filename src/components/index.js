/* ============================================================
   Components Registry
   ============================================================
   Each component is defined as a plain HTML file.
   Add a new component:
     1. Create src/components/<name>.html
     2. Import it below with ?raw
     3. Add parseComponent(rawHtml) to the components array
   ============================================================ */

import badgeHtml from "./badge.html?raw";
import buttonHtml from "./button.html?raw";

/**
 * Removes common leading whitespace from every non-empty line
 * so code snippets display without excess indentation.
 */
function dedent(str) {
	const lines = str.split("\n");
	const nonEmpty = lines.filter((l) => l.trim().length > 0);
	if (!nonEmpty.length) return str.trim();
	const minIndent = Math.min(...nonEmpty.map((l) => l.match(/^(\s*)/)[1].length));
	return lines
		.map((l) => l.slice(minIndent))
		.join("\n")
		.trim();
}

/**
 * Parses a raw component HTML string into the component data
 * structure expected by main.js.
 *
 * HTML structure:
 *   <ui-component data-name="..." data-description="...">
 *     <ui-section data-title="..." data-description="...">
 *       <ui-variant data-label="...">
 *         <!-- actual component HTML here -->
 *       </ui-variant>
 *     </ui-section>
 *   </ui-component>
 */
function parseComponent(rawHtml) {
	const parser = new DOMParser();
	const doc = parser.parseFromString(rawHtml, "text/html");
	const comp = doc.querySelector("ui-component");

	if (!comp) {
		console.error("[ui-library] No <ui-component> element found in HTML.");
		return null;
	}

	return {
		name: comp.dataset.name,
		description: comp.dataset.description,
		sections: [...comp.querySelectorAll("ui-section")].map((sec) => ({
			title: sec.dataset.title,
			description: sec.dataset.description,
			variants: [...sec.querySelectorAll("ui-variant")].map((v) => ({
				label: v.dataset.label,
				html: dedent(v.innerHTML),
			})),
		})),
	};
}

export const components = [buttonHtml, badgeHtml].map(parseComponent).filter(Boolean);
