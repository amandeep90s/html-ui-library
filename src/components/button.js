/* ============================================================
   Button Component — Variants & Code Snippets
   ============================================================
   All button variants matching shadcn/ui Button component API.
   Each variant includes a label, description, and raw HTML.
   ============================================================ */

export const buttonComponent = {
	name: "Button",
	description:
		"Displays a button or a component that looks like a button. Supports multiple variants, sizes, and states.",
	sections: [
		{
			title: "Variants",
			description: "Different visual styles for different contexts.",
			variants: [
				{
					label: "Default / Primary",
					html: `<button class="btn btn-primary">Primary</button>`,
				},
				{
					label: "Secondary",
					html: `<button class="btn btn-secondary">Secondary</button>`,
				},
				{
					label: "Accent",
					html: `<button class="btn btn-accent">Accent</button>`,
				},
				{
					label: "Neutral",
					html: `<button class="btn btn-neutral">Neutral</button>`,
				},
				{
					label: "Ghost",
					html: `<button class="btn btn-ghost">Ghost</button>`,
				},
				{
					label: "Link",
					html: `<button class="btn btn-link">Link</button>`,
				},
				{
					label: "Outline",
					html: `<button class="btn btn-outline">Outline</button>`,
				},
				{
					label: "Outline Primary",
					html: `<button class="btn btn-outline btn-primary">Outline Primary</button>`,
				},
				{
					label: "Outline Secondary",
					html: `<button class="btn btn-outline btn-secondary">Outline Secondary</button>`,
				},
			],
		},
		{
			title: "Semantic / Status",
			description: "Buttons for success, warning, info, and error states.",
			variants: [
				{
					label: "Info",
					html: `<button class="btn btn-info">Info</button>`,
				},
				{
					label: "Success",
					html: `<button class="btn btn-success">Success</button>`,
				},
				{
					label: "Warning",
					html: `<button class="btn btn-warning">Warning</button>`,
				},
				{
					label: "Error / Destructive",
					html: `<button class="btn btn-error">Destructive</button>`,
				},
				{
					label: "Outline Error",
					html: `<button class="btn btn-outline btn-error">Outline Destructive</button>`,
				},
			],
		},
		{
			title: "Sizes",
			description: "Buttons come in four sizes.",
			variants: [
				{
					label: "Extra Small",
					html: `<button class="btn btn-primary btn-xs">Extra Small</button>`,
				},
				{
					label: "Small",
					html: `<button class="btn btn-primary btn-sm">Small</button>`,
				},
				{
					label: "Medium (default)",
					html: `<button class="btn btn-primary btn-md">Medium</button>`,
				},
				{
					label: "Large",
					html: `<button class="btn btn-primary btn-lg">Large</button>`,
				},
			],
		},
		{
			title: "Wide & Block",
			description: "Buttons that stretch wider or take full width.",
			variants: [
				{
					label: "Wide",
					html: `<button class="btn btn-primary btn-wide">Wide</button>`,
				},
				{
					label: "Block (Full Width)",
					html: `<button class="btn btn-primary btn-block">Block / Full Width</button>`,
				},
			],
		},
		{
			title: "With Icons",
			description: "Buttons with leading or trailing icons using inline SVG.",
			variants: [
				{
					label: "Icon Left",
					html: `<button class="btn btn-primary">
  <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  Continue
</button>`,
				},
				{
					label: "Icon Right",
					html: `<button class="btn btn-primary">
  Send
  <svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
</button>`,
				},
				{
					label: "Icon Only (Square)",
					html: `<button class="btn btn-primary btn-square">
  <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
</button>`,
				},
				{
					label: "Icon Only (Circle)",
					html: `<button class="btn btn-primary btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
</button>`,
				},
			],
		},
		{
			title: "States",
			description: "Disabled and loading states.",
			variants: [
				{
					label: "Disabled",
					html: `<button class="btn btn-primary" disabled>Disabled</button>`,
				},
				{
					label: "Loading",
					html: `<button class="btn btn-primary">
  <span class="loading loading-spinner loading-sm"></span>
  Loading
</button>`,
				},
				{
					label: "Loading (no text)",
					html: `<button class="btn btn-primary btn-square">
  <span class="loading loading-spinner"></span>
</button>`,
				},
			],
		},
		{
			title: "Button Group",
			description: "Group buttons together with a join container.",
			variants: [
				{
					label: "Horizontal Group",
					html: `<div class="join">
  <button class="btn btn-primary join-item">Left</button>
  <button class="btn btn-primary join-item">Center</button>
  <button class="btn btn-primary join-item">Right</button>
</div>`,
				},
				{
					label: "Outline Group",
					html: `<div class="join">
  <button class="btn btn-outline join-item">Year</button>
  <button class="btn btn-outline btn-active join-item">Month</button>
  <button class="btn btn-outline join-item">Day</button>
</div>`,
				},
			],
		},
		{
			title: "As Link",
			description: "Buttons rendered as anchor elements.",
			variants: [
				{
					label: "Link as Button",
					html: `<a href="#" class="btn btn-primary">Link Button</a>`,
				},
				{
					label: "Outline Link",
					html: `<a href="#" class="btn btn-outline btn-primary">Outline Link</a>`,
				},
			],
		},
	],
};
