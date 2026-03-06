/* ============================================================
   Badge Component — Variants & Code Snippets
   ============================================================
   All badge variants matching shadcn/ui Badge component API.
   Each variant includes a label, description, and raw HTML.
   ============================================================ */

export const badgeComponent = {
	name: "Badge",
	description: "Displays a badge or label. Useful for status indicators, counts, tags, and category labels.",
	sections: [
		{
			title: "Variants",
			description: "Different visual styles for badges.",
			variants: [
				{
					label: "Default / Primary",
					html: `<span class="badge badge-primary">Primary</span>`,
				},
				{
					label: "Secondary",
					html: `<span class="badge badge-secondary">Secondary</span>`,
				},
				{
					label: "Accent",
					html: `<span class="badge badge-accent">Accent</span>`,
				},
				{
					label: "Neutral",
					html: `<span class="badge badge-neutral">Neutral</span>`,
				},
				{
					label: "Ghost",
					html: `<span class="badge badge-ghost">Ghost</span>`,
				},
				{
					label: "Outline",
					html: `<span class="badge badge-outline">Outline</span>`,
				},
				{
					label: "Outline Primary",
					html: `<span class="badge badge-outline badge-primary">Outline Primary</span>`,
				},
				{
					label: "Outline Secondary",
					html: `<span class="badge badge-outline badge-secondary">Outline Secondary</span>`,
				},
			],
		},
		{
			title: "Semantic / Status",
			description: "Badges for info, success, warning, and error states.",
			variants: [
				{
					label: "Info",
					html: `<span class="badge badge-info">Info</span>`,
				},
				{
					label: "Success",
					html: `<span class="badge badge-success">Success</span>`,
				},
				{
					label: "Warning",
					html: `<span class="badge badge-warning">Warning</span>`,
				},
				{
					label: "Error / Destructive",
					html: `<span class="badge badge-error">Destructive</span>`,
				},
			],
		},
		{
			title: "Sizes",
			description: "Badges come in four sizes.",
			variants: [
				{
					label: "Extra Small",
					html: `<span class="badge badge-primary badge-xs">Extra Small</span>`,
				},
				{
					label: "Small",
					html: `<span class="badge badge-primary badge-sm">Small</span>`,
				},
				{
					label: "Medium (default)",
					html: `<span class="badge badge-primary badge-md">Medium</span>`,
				},
				{
					label: "Large",
					html: `<span class="badge badge-primary badge-lg">Large</span>`,
				},
			],
		},
		{
			title: "With Icons",
			description: "Badges with icons for added context.",
			variants: [
				{
					label: "Icon + Text",
					html: `<span class="badge badge-primary gap-1">
  <svg xmlns="http://www.w3.org/2000/svg" class="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
  Verified
</span>`,
				},
				{
					label: "Status Dot",
					html: `<span class="badge badge-outline gap-1.5">
  <span class="size-2 rounded-full bg-success"></span>
  Active
</span>`,
				},
				{
					label: "Removable / Closable",
					html: `<span class="badge badge-primary gap-1">
  Tag
  <svg xmlns="http://www.w3.org/2000/svg" class="size-3 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
</span>`,
				},
				{
					label: "With Count",
					html: `<span class="badge badge-neutral gap-1">
  Messages
  <span class="badge badge-sm badge-primary">12</span>
</span>`,
				},
			],
		},
		{
			title: "Badge in Context",
			description: "Badges used alongside other elements.",
			variants: [
				{
					label: "Badge in Button",
					html: `<button class="btn btn-primary">
  Inbox
  <span class="badge badge-sm">+99</span>
</button>`,
				},
				{
					label: "Badge on Avatar (Indicator)",
					html: `<div class="indicator">
  <span class="indicator-item badge badge-secondary badge-xs"></span>
  <div class="avatar">
    <div class="w-10 rounded-full bg-base-300">
      <span class="flex items-center justify-center h-full text-xs font-medium text-base-content">AB</span>
    </div>
  </div>
</div>`,
				},
				{
					label: "Multiple Tags",
					html: `<div class="flex flex-wrap gap-1.5">
  <span class="badge badge-primary badge-sm">React</span>
  <span class="badge badge-secondary badge-sm">TypeScript</span>
  <span class="badge badge-accent badge-sm">TailwindCSS</span>
  <span class="badge badge-neutral badge-sm">Vite</span>
</div>`,
				},
			],
		},
		{
			title: "Soft / Outline Variants",
			description: "Lighter badge styles with outline and soft backgrounds.",
			variants: [
				{
					label: "Soft Primary",
					html: `<span class="badge badge-soft badge-primary">Soft Primary</span>`,
				},
				{
					label: "Soft Secondary",
					html: `<span class="badge badge-soft badge-secondary">Soft Secondary</span>`,
				},
				{
					label: "Soft Success",
					html: `<span class="badge badge-soft badge-success">Soft Success</span>`,
				},
				{
					label: "Soft Warning",
					html: `<span class="badge badge-soft badge-warning">Soft Warning</span>`,
				},
				{
					label: "Soft Error",
					html: `<span class="badge badge-soft badge-error">Soft Error</span>`,
				},
				{
					label: "Soft Info",
					html: `<span class="badge badge-soft badge-info">Soft Info</span>`,
				},
			],
		},
		{
			title: "Empty / Dot Badge",
			description: "Badges without text, used as status dots.",
			variants: [
				{
					label: "Dot Primary",
					html: `<span class="badge badge-primary badge-xs"></span>`,
				},
				{
					label: "Dot Success",
					html: `<span class="badge badge-success badge-xs"></span>`,
				},
				{
					label: "Dot Warning",
					html: `<span class="badge badge-warning badge-xs"></span>`,
				},
				{
					label: "Dot Error",
					html: `<span class="badge badge-error badge-xs"></span>`,
				},
			],
		},
	],
};
