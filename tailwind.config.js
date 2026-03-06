/**
 * ============================================================
 * Shared UI Library — Tailwind CSS Configuration
 * ============================================================
 * TailwindCSS v4 is primarily configured via CSS using the
 * @theme directive (see src/theme/tailwind-theme.css).
 *
 * This JS config is used via `@config` in the main CSS for:
 *  - Legacy plugin compatibility
 *  - Content path declarations (safelist / blocklist)
 *  - IDE intellisense support in editors that read tailwind.config.js
 *
 * How it connects:
 *   src/styles.css  →  @config "../tailwind.config.js"
 *                   →  @import "./theme/tailwind-theme.css"   (CSS @theme tokens)
 *                   →  @import "./theme/daisyui-theme.css"    (DaisyUI themes)
 * ============================================================
 */

/** @type {import('tailwindcss').Config} */
export default {
	// ── Content paths ──────────────────────────────────────────
	// Tell Tailwind which files to scan for class names.
	// In v4 this is inferred automatically, but explicit paths
	// are useful for monorepos or when consuming this config externally.
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html,css}"],

	// ── Theme extension ────────────────────────────────────────
	// These values MIRROR the CSS @theme tokens in
	// src/theme/tailwind-theme.css so JS tooling (e.g. editor
	// plugins, storybook, design-token exporters) can read them.
	//
	// ⚠️  The CSS @theme block is the single source of truth at
	//     runtime. Keep these values in sync when you update the
	//     CSS theme file.
	theme: {
		extend: {
			// ── Font families ──────────────────────────────────────
			fontFamily: {
				sans: [
					"Inter",
					"ui-sans-serif",
					"system-ui",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Roboto",
					"Helvetica Neue",
					"Arial",
					"Noto Sans",
					"sans-serif",
				],
				mono: [
					"JetBrains Mono",
					"ui-monospace",
					"SFMono-Regular",
					"Menlo",
					"Monaco",
					"Consolas",
					"Liberation Mono",
					"Courier New",
					"monospace",
				],
			},

			// ── Custom spacing ─────────────────────────────────────
			spacing: {
				18: "4.5rem", // --spacing-18
				88: "22rem", // --spacing-88
				128: "32rem", // --spacing-128
			},

			// ── Custom box shadows ─────────────────────────────────
			boxShadow: {
				soft: "0 1px 3px 0 oklch(0% 0 0 / 0.06), 0 1px 2px -1px oklch(0% 0 0 / 0.06)",
				card: "0 1px 3px 0 oklch(0% 0 0 / 0.08), 0 2px 6px -1px oklch(0% 0 0 / 0.06)",
				elevated: "0 4px 12px -2px oklch(0% 0 0 / 0.12), 0 2px 6px -1px oklch(0% 0 0 / 0.06)",
			},

			// ── Custom animations ──────────────────────────────────
			animation: {
				"fade-in": "fade-in 0.2s ease-out",
				"slide-up": "slide-up 0.3s ease-out",
				"slide-down": "slide-down 0.3s ease-out",
			},
			keyframes: {
				"fade-in": {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				"slide-up": {
					from: { opacity: "0", transform: "translateY(8px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
				"slide-down": {
					from: { opacity: "0", transform: "translateY(-8px)" },
					to: { opacity: "1", transform: "translateY(0)" },
				},
			},

			// ── Custom breakpoints ─────────────────────────────────
			screens: {
				xs: "475px", // --breakpoint-xs
				"3xl": "1920px", // --breakpoint-3xl
			},
		},
	},

	// ── Plugins ────────────────────────────────────────────────
	// DaisyUI is loaded as a Tailwind CSS @plugin in the CSS
	// layer (src/styles.css) rather than here, which is the
	// recommended v4 approach.
	plugins: [],
};
